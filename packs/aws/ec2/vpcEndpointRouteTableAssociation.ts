// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class VpcEndpointRouteTableAssociation extends lumi.NamedResource implements VpcEndpointRouteTableAssociationArgs {
    public readonly routeTableId: string;
    public readonly vpcEndpointId: string;

    constructor(name: string, args: VpcEndpointRouteTableAssociationArgs) {
        super(name);
        if (args.routeTableId === undefined) {
            throw new Error("Property argument 'routeTableId' is required, but was missing");
        }
        this.routeTableId = args.routeTableId;
        if (args.vpcEndpointId === undefined) {
            throw new Error("Property argument 'vpcEndpointId' is required, but was missing");
        }
        this.vpcEndpointId = args.vpcEndpointId;
    }
}

export interface VpcEndpointRouteTableAssociationArgs {
    readonly routeTableId: string;
    readonly vpcEndpointId: string;
}

