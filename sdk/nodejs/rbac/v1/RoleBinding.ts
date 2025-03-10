// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { core } from "../..";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * RoleBinding references a role, but does not contain it.  It can reference a Role in the same
     * namespace or a ClusterRole in the global namespace. It adds who information via Subjects and
     * namespace information by which namespace it exists in.  RoleBindings in a given namespace
     * only have effect in that namespace.
     */
    export class RoleBinding extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"rbac.authorization.k8s.io/v1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"RoleBinding">;

      /**
       * Standard object's metadata.
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * RoleRef can reference a Role in the current namespace or a ClusterRole in the global
       * namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
       */
      public readonly roleRef: pulumi.Output<outputs.rbac.v1.RoleRef>;

      /**
       * Subjects holds references to the objects the role applies to.
       */
      public readonly subjects: pulumi.Output<outputs.rbac.v1.Subject[]>;

      /**
       * Get the state of an existing `RoleBinding` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleBinding {
          return new RoleBinding(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:rbac.authorization.k8s.io/v1:RoleBinding";

      /**
       * Returns true if the given object is an instance of RoleBinding.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is RoleBinding {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === RoleBinding.__pulumiType;
      }

      /**
       * Create a rbac.v1.RoleBinding resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.rbac.v1.RoleBinding, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};
          props["roleRef"] = args && args.roleRef || undefined;

          props["apiVersion"] = "rbac.authorization.k8s.io/v1";
          props["kind"] = "RoleBinding";
          props["metadata"] = args && args.metadata || undefined;
          props["subjects"] = args && args.subjects || undefined;

          props["status"] = undefined;

          if (!opts) {
              opts = {};
          }

          if (!opts.version) {
              opts.version = getVersion();
          }

          opts.additionalSecretOutputs = [
              ...((opts && opts.additionalSecretOutputs) || []),

          ];
          super(RoleBinding.__pulumiType, name, props, opts);
      }
    }
