// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { core } from "../..";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
     */
    export class MutatingWebhookConfigurationList extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"admissionregistration.k8s.io/v1">;

      /**
       * List of MutatingWebhookConfiguration.
       */
      public readonly items: pulumi.Output<outputs.admissionregistration.v1.MutatingWebhookConfiguration[]>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"MutatingWebhookConfigurationList">;

      /**
       * Standard list metadata. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ListMeta>;

      /**
       * Get the state of an existing `MutatingWebhookConfigurationList` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MutatingWebhookConfigurationList {
          return new MutatingWebhookConfigurationList(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:admissionregistration.k8s.io/v1:MutatingWebhookConfigurationList";

      /**
       * Returns true if the given object is an instance of MutatingWebhookConfigurationList.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is MutatingWebhookConfigurationList {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === MutatingWebhookConfigurationList.__pulumiType;
      }

      /**
       * Create a admissionregistration.v1.MutatingWebhookConfigurationList resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.admissionregistration.v1.MutatingWebhookConfigurationList, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};
          props["items"] = args && args.items || undefined;

          props["apiVersion"] = "admissionregistration.k8s.io/v1";
          props["kind"] = "MutatingWebhookConfigurationList";
          props["metadata"] = args && args.metadata || undefined;

          props["status"] = undefined;

          if (!opts) {
              opts = {};
          }

          if (!opts.version) {
              opts.version = getVersion();
          }
          super(MutatingWebhookConfigurationList.__pulumiType, name, props, opts);
      }
    }
