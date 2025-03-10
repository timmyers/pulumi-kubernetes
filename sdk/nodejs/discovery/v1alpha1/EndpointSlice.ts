// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { core } from "../..";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * EndpointSlice represents a subset of the endpoints that implement a service. For a given
     * service there may be multiple EndpointSlice objects, selected by labels, which must be joined
     * to produce the full set of endpoints.
     */
    export class EndpointSlice extends pulumi.CustomResource {
      /**
       * addressType specifies the type of address carried by this EndpointSlice. All addresses in
       * this slice must be the same type. Default is IP
       */
      public readonly addressType: pulumi.Output<string>;

      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"discovery.k8s.io/v1alpha1">;

      /**
       * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of
       * 1000 endpoints.
       */
      public readonly endpoints: pulumi.Output<outputs.discovery.v1alpha1.Endpoint[]>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"EndpointSlice">;

      /**
       * Standard object's metadata.
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * ports specifies the list of network ports exposed by each endpoint in this slice. Each port
       * must have a unique name. When ports is empty, it indicates that there are no defined ports.
       * When a port is defined with a nil port value, it indicates "all ports". Each slice may
       * include a maximum of 100 ports.
       */
      public readonly ports: pulumi.Output<outputs.discovery.v1alpha1.EndpointPort[]>;

      /**
       * Get the state of an existing `EndpointSlice` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EndpointSlice {
          return new EndpointSlice(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:discovery.k8s.io/v1alpha1:EndpointSlice";

      /**
       * Returns true if the given object is an instance of EndpointSlice.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is EndpointSlice {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === EndpointSlice.__pulumiType;
      }

      /**
       * Create a discovery.v1alpha1.EndpointSlice resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.discovery.v1alpha1.EndpointSlice, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};
          props["endpoints"] = args && args.endpoints || undefined;

          props["addressType"] = args && args.addressType || undefined;
          props["apiVersion"] = "discovery.k8s.io/v1alpha1";
          props["kind"] = "EndpointSlice";
          props["metadata"] = args && args.metadata || undefined;
          props["ports"] = args && args.ports || undefined;

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
          super(EndpointSlice.__pulumiType, name, props, opts);
      }
    }
