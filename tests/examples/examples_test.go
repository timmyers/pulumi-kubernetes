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

package examples

import (
	"fmt"
	"os"
	"path"
	"sort"
	"testing"

	"github.com/pulumi/pulumi-kubernetes/pkg/openapi"
	"github.com/pulumi/pulumi/pkg/resource"
	"github.com/pulumi/pulumi/pkg/resource/deploy/providers"
	"github.com/pulumi/pulumi/pkg/testing/integration"
	"github.com/pulumi/pulumi/pkg/tokens"
	"github.com/stretchr/testify/assert"
)

func TestExamples(t *testing.T) {

	kubectx := os.Getenv("KUBERNETES_CONTEXT")

	if kubectx == "" {
		t.Skipf("Skipping test due to missing KUBERNETES_CONTEXT variable")
	}

	cwd, err := os.Getwd()
	if !assert.NoError(t, err, "expected a valid working directory: %v", err) {
		return
	}

	// base options shared amongst all tests.
	base := integration.ProgramTestOptions{
		Dependencies: []string{
			"@pulumi/kubernetes",
		},
	}

	shortTests := []integration.ProgramTestOptions{
		base.With(integration.ProgramTestOptions{Dir: path.Join(cwd, "minimal")}),
	}

	longTests := []integration.ProgramTestOptions{
		base.With(integration.ProgramTestOptions{
			Dir: path.Join(cwd, "guestbook"),
			ExtraRuntimeValidation: func(
				t *testing.T, stackInfo integration.RuntimeValidationStackInfo,
			) {
				assert.NotNil(t, stackInfo.Deployment)
				assert.Equal(t, 9, len(stackInfo.Deployment.Resources))

				sort.Slice(stackInfo.Deployment.Resources, func(i, j int) bool {
					ri := stackInfo.Deployment.Resources[i]
					rj := stackInfo.Deployment.Resources[j]
					riname, _ := openapi.Pluck(ri.Outputs, "metadata", "name")
					rinamespace, _ := openapi.Pluck(ri.Outputs, "metadata", "namespace")
					rjname, _ := openapi.Pluck(rj.Outputs, "metadata", "name")
					rjnamespace, _ := openapi.Pluck(rj.Outputs, "metadata", "namespace")
					return fmt.Sprintf("%s/%s/%s", ri.URN.Type(), rinamespace, riname) <
						fmt.Sprintf("%s/%s/%s", rj.URN.Type(), rjnamespace, rjname)
				})

				var name interface{}
				var status interface{}

				// Verify frontend deployment.
				frontendDepl := stackInfo.Deployment.Resources[0]
				assert.Equal(t, tokens.Type("kubernetes:apps/v1:Deployment"), frontendDepl.URN.Type())
				name, _ = openapi.Pluck(frontendDepl.Outputs, "metadata", "name")
				assert.Equal(t, "frontend", name)
				status, _ = openapi.Pluck(frontendDepl.Outputs, "status", "readyReplicas")
				assert.Equal(t, float64(3), status)

				// Verify redis-master deployment.
				redisMasterDepl := stackInfo.Deployment.Resources[1]
				assert.Equal(t, tokens.Type("kubernetes:apps/v1:Deployment"), redisMasterDepl.URN.Type())
				name, _ = openapi.Pluck(redisMasterDepl.Outputs, "metadata", "name")
				assert.Equal(t, "redis-master", name)
				status, _ = openapi.Pluck(redisMasterDepl.Outputs, "status", "readyReplicas")
				assert.Equal(t, float64(1), status)

				// Verify redis-slave deployment.
				redisSlaveDepl := stackInfo.Deployment.Resources[2]
				assert.Equal(t, tokens.Type("kubernetes:apps/v1:Deployment"), redisSlaveDepl.URN.Type())
				name, _ = openapi.Pluck(redisSlaveDepl.Outputs, "metadata", "name")
				assert.Equal(t, "redis-slave", name)
				status, _ = openapi.Pluck(redisSlaveDepl.Outputs, "status", "readyReplicas")
				assert.Equal(t, float64(1), status)

				// Verify test namespace.
				namespace := stackInfo.Deployment.Resources[3]
				assert.Equal(t, tokens.Type("kubernetes:core/v1:Namespace"), namespace.URN.Type())

				// Verify frontend service.
				frontentService := stackInfo.Deployment.Resources[4]
				assert.Equal(t, tokens.Type("kubernetes:core/v1:Service"), frontentService.URN.Type())
				name, _ = openapi.Pluck(frontentService.Outputs, "metadata", "name")
				assert.Equal(t, "frontend", name)
				status, _ = openapi.Pluck(frontentService.Outputs, "spec", "clusterIP")
				assert.True(t, len(status.(string)) > 1)

				// Verify redis-master service.
				redisMasterService := stackInfo.Deployment.Resources[5]
				assert.Equal(t, tokens.Type("kubernetes:core/v1:Service"), redisMasterService.URN.Type())
				name, _ = openapi.Pluck(redisMasterService.Outputs, "metadata", "name")
				assert.Equal(t, "redis-master", name)
				status, _ = openapi.Pluck(redisMasterService.Outputs, "spec", "clusterIP")
				assert.True(t, len(status.(string)) > 1)

				// Verify redis-slave service.
				redisSlaveService := stackInfo.Deployment.Resources[6]
				assert.Equal(t, tokens.Type("kubernetes:core/v1:Service"), redisSlaveService.URN.Type())
				name, _ = openapi.Pluck(redisSlaveService.Outputs, "metadata", "name")
				assert.Equal(t, "redis-slave", name)
				status, _ = openapi.Pluck(redisSlaveService.Outputs, "spec", "clusterIP")
				assert.True(t, len(status.(string)) > 1)

				// Verify the provider resource.
				provRes := stackInfo.Deployment.Resources[7]
				assert.True(t, providers.IsProviderType(provRes.URN.Type()))

				// Verify root resource.
				stackRes := stackInfo.Deployment.Resources[8]
				assert.Equal(t, resource.RootStackType, stackRes.URN.Type())
			},
		}),

		base.With(integration.ProgramTestOptions{
			Dir: path.Join(cwd, "provider"),
		}),

		base.With(integration.ProgramTestOptions{
			SkipRefresh: true, // Deployment controller changes object out-of-band.
			Dir:         path.Join(cwd, "helm"),
			Verbose:     true,
			ExtraRuntimeValidation: func(t *testing.T, stackInfo integration.RuntimeValidationStackInfo) {
				// Ensure that all `Services` have `status` marked as a `Secret`
				for _, res := range stackInfo.Deployment.Resources {
					if res.Type == tokens.Type("kubernetes:core/v1:Service") {
						spec, has := res.Outputs["status"]
						assert.True(t, has)
						specMap, is := spec.(map[string]interface{})
						assert.True(t, is)
						sigKey, has := specMap[resource.SigKey]
						assert.True(t, has)
						assert.Equal(t, resource.SecretSig, sigKey)
					}
				}
			},
		}),

		base.With(integration.ProgramTestOptions{
			Dir:         path.Join(cwd, "helm-local"),
			SkipRefresh: true, // Deployment controller changes object out-of-band.
			ExtraRuntimeValidation: func(
				t *testing.T, stackInfo integration.RuntimeValidationStackInfo,
			) {
				assert.NotNil(t, stackInfo.Deployment)
				assert.Equal(t, 15, len(stackInfo.Deployment.Resources))
			},
		}),

		base.With(integration.ProgramTestOptions{Dir: path.Join(cwd, "mariadb")}),
	}

	tests := shortTests
	if !testing.Short() {
		tests = append(tests, longTests...)
	}

	for _, ex := range tests {
		example := ex
		t.Run(example.Dir, func(t *testing.T) {
			integration.ProgramTest(t, &example)
		})
	}
}

func createEditDir(dir string) integration.EditDir {
	return integration.EditDir{Dir: dir, ExtraRuntimeValidation: nil}
}
