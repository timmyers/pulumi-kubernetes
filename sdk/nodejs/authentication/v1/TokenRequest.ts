// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { core } from "../..";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * TokenRequest requests a token for a given service account.
     */
    export class TokenRequest extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"authentication.k8s.io/v1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"TokenRequest">;

      
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      
      public readonly spec: pulumi.Output<outputs.authentication.v1.TokenRequestSpec>;

      
      public readonly status: pulumi.Output<outputs.authentication.v1.TokenRequestStatus>;

      /**
       * Get the state of an existing `TokenRequest` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TokenRequest {
          return new TokenRequest(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:authentication.k8s.io/v1:TokenRequest";

      /**
       * Returns true if the given object is an instance of TokenRequest.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is TokenRequest {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === TokenRequest.__pulumiType;
      }

      /**
       * Create a authentication.v1.TokenRequest resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.authentication.v1.TokenRequest, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};
          props["spec"] = args && args.spec || undefined;

          props["apiVersion"] = "authentication.k8s.io/v1";
          props["kind"] = "TokenRequest";
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
          super(TokenRequest.__pulumiType, name, props, opts);
      }
    }
