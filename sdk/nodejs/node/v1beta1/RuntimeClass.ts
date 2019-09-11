// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { core } from "../..";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass
     * is used to determine which container runtime is used to run all containers in a pod.
     * RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and
     * referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName
     * reference before running the pod.  For more details, see
     * https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
     */
    export class RuntimeClass extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"node.k8s.io/v1beta1">;

      /**
       * Handler specifies the underlying runtime and configuration that the CRI implementation will
       * use to handle pods of this class. The possible values are specific to the node & CRI
       * configuration.  It is assumed that all handlers are available on every node, and handlers
       * of the same name are equivalent on every node. For example, a handler called "runc" might
       * specify that the runc OCI runtime (using native Linux containers) will be used to run the
       * containers in a pod. The Handler must conform to the DNS Label (RFC 1123) requirements, and
       * is immutable.
       */
      public readonly handler: pulumi.Output<string>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"RuntimeClass">;

      /**
       * More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * Overhead represents the resource overhead associated with running a pod for a given
       * RuntimeClass. For more details, see
       * https://git.k8s.io/enhancements/keps/sig-node/20190226-pod-overhead.md This field is
       * alpha-level as of Kubernetes v1.15, and is only honored by servers that enable the
       * PodOverhead feature.
       */
      public readonly overhead: pulumi.Output<outputs.node.v1beta1.Overhead>;

      /**
       * Scheduling holds the scheduling constraints to ensure that pods running with this
       * RuntimeClass are scheduled to nodes that support it. If scheduling is nil, this
       * RuntimeClass is assumed to be supported by all nodes.
       */
      public readonly scheduling: pulumi.Output<outputs.node.v1beta1.Scheduling>;

      /**
       * Get the state of an existing `RuntimeClass` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RuntimeClass {
          return new RuntimeClass(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:node.k8s.io/v1beta1:RuntimeClass";

      /**
       * Returns true if the given object is an instance of RuntimeClass.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is RuntimeClass {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === RuntimeClass.__pulumiType;
      }

      /**
       * Create a node.v1beta1.RuntimeClass resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.node.v1beta1.RuntimeClass, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};
          props["handler"] = args && args.handler || undefined;

          props["apiVersion"] = "node.k8s.io/v1beta1";
          props["kind"] = "RuntimeClass";
          props["metadata"] = args && args.metadata || undefined;
          props["overhead"] = args && args.overhead || undefined;
          props["scheduling"] = args && args.scheduling || undefined;

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

          opts.aliases = [
              ...((opts && opts.aliases) || []),
          ];

          super(RuntimeClass.__pulumiType, name, props, opts);
      }
    }
