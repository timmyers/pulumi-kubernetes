// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ZoneAssociation extends lumi.NamedResource implements ZoneAssociationArgs {
    public readonly vpcId: string;
    public readonly vpcRegion?: string;
    public readonly zoneId: string;

    constructor(name: string, args: ZoneAssociationArgs) {
        super(name);
        if (args.vpcId === undefined) {
            throw new Error("Property argument 'vpcId' is required, but was missing");
        }
        this.vpcId = args.vpcId;
        this.vpcRegion = args.vpcRegion;
        if (args.zoneId === undefined) {
            throw new Error("Property argument 'zoneId' is required, but was missing");
        }
        this.zoneId = args.zoneId;
    }
}

export interface ZoneAssociationArgs {
    readonly vpcId: string;
    readonly vpcRegion?: string;
    readonly zoneId: string;
}

