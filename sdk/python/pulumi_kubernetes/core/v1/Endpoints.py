# *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
from typing import Optional

import pulumi
import pulumi.runtime
from pulumi import Input, ResourceOptions

from ... import tables, version


class Endpoints(pulumi.CustomResource):
    """
    Endpoints is a collection of endpoints that implement the actual service. Example:
      Name: "mysvc",
      Subsets: [
        {
          Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
          Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
        },
        {
          Addresses: [{"ip": "10.10.3.3"}],
          Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
        },
     ]
    """

    apiVersion: pulumi.Output[str]
    """
    APIVersion defines the versioned schema of this representation of an object. Servers should
    convert recognized schemas to the latest internal value, and may reject unrecognized values.
    More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    """

    kind: pulumi.Output[str]
    """
    Kind is a string value representing the REST resource this object represents. Servers may infer
    this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More
    info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    """

    metadata: pulumi.Output[dict]
    """
    Standard object's metadata. More info:
    https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    """

    subsets: pulumi.Output[list]
    """
    The set of all endpoints is the union of all subsets. Addresses are placed into subsets
    according to the IPs they share. A single address with multiple ports, some of which are ready
    and some of which are not (because they come from different containers) will result in the
    address being displayed in different subsets for the different ports. No address will appear in
    both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that
    comprise a service.
    """

    def __init__(self, resource_name, opts=None, metadata=None, subsets=None, __name__=None, __opts__=None):
        """
        Create a Endpoints resource with the given unique name, arguments, and options.

        :param str resource_name: The _unique_ name of the resource.
        :param pulumi.ResourceOptions opts: A bag of options that control this resource's behavior.
        :param pulumi.Input[dict] metadata: Standard object's metadata. More info:
               https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
        :param pulumi.Input[list] subsets: The set of all endpoints is the union of all subsets. Addresses are placed into
               subsets according to the IPs they share. A single address with multiple ports, some
               of which are ready and some of which are not (because they come from different
               containers) will result in the address being displayed in different subsets for the
               different ports. No address will appear in both Addresses and NotReadyAddresses in
               the same subset. Sets of addresses and ports that comprise a service.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apiVersion'] = 'v1'
        __props__['kind'] = 'Endpoints'
        __props__['metadata'] = metadata
        __props__['subsets'] = subsets

        __props__['status'] = None

        additional_secret_outputs = [
        ]

        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(
            version=version.get_version(), additional_secret_outputs=additional_secret_outputs))

        parent = opts.parent if opts and opts.parent else None
        aliases = [
        ]

        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(
            version=version.get_version(), aliases=aliases))

        super(Endpoints, self).__init__(
            "kubernetes:core/v1:Endpoints",
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None):
        """
        Get the state of an existing `Endpoints` resource, as identified by `id`.
        The ID is of the form `[namespace]/[name]`; if `[namespace]` is omitted,
        then (per Kubernetes convention) the ID becomes `default/[name]`.

        Pulumi will keep track of this resource using `resource_name` as the Pulumi ID.

        :param str resource_name: _Unique_ name used to register this resource with Pulumi.
        :param pulumi.Input[str] id: An ID for the Kubernetes resource to retrieve.
               Takes the form `[namespace]/[name]` or `[name]`.
        :param Optional[pulumi.ResourceOptions] opts: A bag of options that control this
               resource's behavior.
        """
        opts = ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))
        return Endpoints(resource_name, opts)

    def translate_output_property(self, prop: str) -> str:
        return tables._CASING_FORWARD_TABLE.get(prop) or prop

    def translate_input_property(self, prop: str) -> str:
        return tables._CASING_BACKWARD_TABLE.get(prop) or prop
