// Copyright 2016-2019, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package clients

import (
	"fmt"
	"strings"

	"github.com/pulumi/pulumi-kubernetes/pkg/kinds"
	"k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/client-go/discovery"
	"k8s.io/client-go/dynamic"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/restmapper"
)

func ResourceClient(kind kinds.Kind, namespace string, client *DynamicClientSet) (dynamic.ResourceInterface, error) {
	gvk, err := client.gvkForKind(kind)
	if err != nil {
		return nil, err
	}

	c, err := client.ResourceClient(*gvk, namespace)
	if err != nil {
		return nil, fmt.Errorf("failed to get client: %v", err)
	}

	return c, nil
}

type DynamicClientSet struct {
	GenericClient         dynamic.Interface
	DiscoveryClientCached discovery.CachedDiscoveryInterface
	RESTMapper            *restmapper.DeferredDiscoveryRESTMapper
}

func NewDynamicClientSet(clientConfig *rest.Config) (*DynamicClientSet, error) {
	disco, err := discovery.NewDiscoveryClientForConfig(clientConfig)
	if err != nil {
		return nil, fmt.Errorf("failed to initialize discovery client: %v", err)
	}

	// Cache the discovery information (OpenAPI schema, etc.) so we don't have to retrieve it for
	// every request.
	discoCacheClient := NewMemCacheClient(disco)
	mapper := restmapper.NewDeferredDiscoveryRESTMapper(discoCacheClient)

	// Create dynamic resource client
	client, err := dynamic.NewForConfig(clientConfig)
	if err != nil {
		return nil, fmt.Errorf("failed to initialize dynamic client: %v", err)
	}

	return &DynamicClientSet{
		GenericClient:         client,
		DiscoveryClientCached: discoCacheClient,
		RESTMapper:            mapper,
	}, nil
}

func (dcs *DynamicClientSet) ResourceClient(gvk schema.GroupVersionKind, namespace string,
) (dynamic.ResourceInterface, error) {
	m, err := dcs.RESTMapper.RESTMapping(gvk.GroupKind(), gvk.Version)
	if err != nil {
		// If the REST mapping failed, try refreshing the cache and remapping before giving up.
		// This can occur if a CRD is being registered from another resource.
		dcs.RESTMapper.Reset()

		m, err = dcs.RESTMapper.RESTMapping(gvk.GroupKind(), gvk.Version)
		if err != nil {
			return nil, err
		}
	}

	// For namespaced Kinds, create a namespaced client. If no namespace is provided, use the "default" namespace.
	namespaced, err := dcs.IsNamespacedKind(gvk)
	if err != nil {
		return nil, err
	}

	if namespaced {
		return dcs.GenericClient.Resource(m.Resource).Namespace(NamespaceOrDefault(namespace)), nil
	} else {
		return dcs.GenericClient.Resource(m.Resource), nil
	}
}

func (dcs *DynamicClientSet) ResourceClientForObject(obj *unstructured.Unstructured,
) (dynamic.ResourceInterface, error) {
	return dcs.ResourceClient(obj.GroupVersionKind(), obj.GetNamespace())
}

func (dcs *DynamicClientSet) gvkForKind(kind kinds.Kind) (*schema.GroupVersionKind, error) {
	resources, err := dcs.DiscoveryClientCached.ServerPreferredResources()
	if err != nil {
		if discovery.IsGroupDiscoveryFailedError(err) {
			// The ServerPreferredResources method will return a best-effort list of resources,
			// and will also return a GroupDiscoveryFailed error with a list of any resources
			// that failed discovery. We will ignore this type of error and process the partial
			// list of resources.
		} else {
			return nil, err
		}
	}

	var fallbackResourceList *v1.APIResourceList
	for _, gvResources := range resources {
		// For some reason, the server is returning the old "extensions/v1beta1" GV before "apps/v1", so manually
		// skip it and fallback to it if the Kind is not found.
		if gvResources.GroupVersion == "extensions/v1beta1" {
			fallbackResourceList = gvResources
			continue
		}
		versionKind, err, done := dcs.searchKindInGVResources(gvResources, kind)
		if done {
			return versionKind, err
		}
	}

	versionKind, err, done := dcs.searchKindInGVResources(fallbackResourceList, kind)
	if done {
		return versionKind, err
	}

	return nil, fmt.Errorf("failed to find gvk for Kind: %q", kind)
}

func (dcs *DynamicClientSet) searchKindInGVResources(gvResources *v1.APIResourceList, kind kinds.Kind,
) (*schema.GroupVersionKind, error, bool) {
	for _, resource := range gvResources.APIResources {
		if resource.Kind == string(kind) {
			var gv schema.GroupVersion
			gv, err := schema.ParseGroupVersion(gvResources.GroupVersion)
			if err != nil {
				return nil, err, true
			}
			return &schema.GroupVersionKind{Group: gv.Group, Version: gv.Version, Kind: resource.Kind}, nil, true
		}
	}
	return nil, nil, false
}

func (dcs *DynamicClientSet) IsNamespacedKind(gvk schema.GroupVersionKind) (bool, error) {
	gv := gvk.GroupVersion().String()
	if strings.Contains(gv, "core/v1") {
		gv = "v1"
	}

	resourceList, err := dcs.DiscoveryClientCached.ServerResourcesForGroupVersion(gv)
	if err != nil {
		return false, &NoNamespaceInfoErr{gvk}
	}

	for _, resource := range resourceList.APIResources {
		if resource.Kind == gvk.Kind {
			return resource.Namespaced, nil
		}
	}

	return false, &NoNamespaceInfoErr{gvk}
}

type NoNamespaceInfoErr struct {
	gvk schema.GroupVersionKind
}

func (e *NoNamespaceInfoErr) Error() string {
	return fmt.Sprintf("failed to determine if the following GVK is namespaced: %s", e.gvk)
}

func IsNoNamespaceInfoErr(err error) bool {
	if err == nil {
		return false
	}
	switch err.(type) {
	case *NoNamespaceInfoErr:
		return true
	default:
		return false
	}
}

// NamespaceOrDefault returns `ns` or the the default namespace `"default"` if `ns` is empty.
func NamespaceOrDefault(ns string) string {
	if ns == "" {
		return "default"
	}
	return ns
}

// IsCRD returns true if a Kubernetes resource is a CRD.
func IsCRD(obj *unstructured.Unstructured) bool {
	return obj.GetKind() == string(kinds.CustomResourceDefinition) &&
		strings.HasPrefix(obj.GetAPIVersion(), "apiextensions.k8s.io/")
}
