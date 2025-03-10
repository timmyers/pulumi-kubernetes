// Copyright 2016-2019, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package states

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// fqName returns the fully qualified name of the object in the form `[namespace]/name`.
// The namespace is omitted if it is "default" or "".
func fqName(obj metav1.Object) string {
	ns := obj.GetNamespace()
	if ns != "" && ns != "default" {
		return obj.GetNamespace() + "/" + obj.GetName()
	}
	return obj.GetName()
}
