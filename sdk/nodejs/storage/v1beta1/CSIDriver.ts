// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { core } from "../..";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * CSIDriver captures information about a Container Storage Interface (CSI) volume driver
     * deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly.
     * Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI
     * driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach
     * detach controller uses this object to determine whether attach is required. Kubelet uses this
     * object to determine whether pod information needs to be passed on mount. CSIDriver objects
     * are non-namespaced.
     */
    export class CSIDriver extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"storage.k8s.io/v1beta1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"CSIDriver">;

      /**
       * Standard object metadata. metadata.Name indicates the name of the CSI driver that this
       * object refers to; it MUST be the same name returned by the CSI GetPluginName() call for
       * that driver. The driver name must be 63 characters or less, beginning and ending with an
       * alphanumeric character ([a-z0-9A-Z]) with dashes (-), dots (.), and alphanumerics between.
       * More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * Specification of the CSI Driver.
       */
      public readonly spec: pulumi.Output<outputs.storage.v1beta1.CSIDriverSpec>;

      /**
       * Get the state of an existing `CSIDriver` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CSIDriver {
          return new CSIDriver(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:storage.k8s.io/v1beta1:CSIDriver";

      /**
       * Returns true if the given object is an instance of CSIDriver.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is CSIDriver {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === CSIDriver.__pulumiType;
      }

      /**
       * Create a storage.v1beta1.CSIDriver resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.storage.v1beta1.CSIDriver, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};
          props["spec"] = args && args.spec || undefined;

          props["apiVersion"] = "storage.k8s.io/v1beta1";
          props["kind"] = "CSIDriver";
          props["metadata"] = args && args.metadata || undefined;

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
          super(CSIDriver.__pulumiType, name, props, opts);
      }
    }
