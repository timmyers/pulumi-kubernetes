// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Subnet extends lumi.NamedResource implements SubnetArgs {
    public readonly assignIpv6AddressOnCreation?: boolean;
    public readonly availabilityZone?: string;
    public readonly cidrBlock: string;
    public readonly ipv6CidrBlock?: string;
    public readonly ipv6CidrBlockAssociationId?: string;
    public readonly mapPublicIpOnLaunch?: boolean;
    public readonly tags?: {[key: string]: any};
    public readonly vpcId: string;

    constructor(name: string, args: SubnetArgs) {
        super(name);
        this.assignIpv6AddressOnCreation = args.assignIpv6AddressOnCreation;
        this.availabilityZone = args.availabilityZone;
        if (args.cidrBlock === undefined) {
            throw new Error("Property argument 'cidrBlock' is required, but was missing");
        }
        this.cidrBlock = args.cidrBlock;
        this.ipv6CidrBlock = args.ipv6CidrBlock;
        if (args.ipv6CidrBlockAssociationId === undefined) {
            throw new Error("Property argument 'ipv6CidrBlockAssociationId' is required, but was missing");
        }
        this.ipv6CidrBlockAssociationId = args.ipv6CidrBlockAssociationId;
        this.mapPublicIpOnLaunch = args.mapPublicIpOnLaunch;
        this.tags = args.tags;
        if (args.vpcId === undefined) {
            throw new Error("Property argument 'vpcId' is required, but was missing");
        }
        this.vpcId = args.vpcId;
    }
}

export interface SubnetArgs {
    readonly assignIpv6AddressOnCreation?: boolean;
    readonly availabilityZone?: string;
    readonly cidrBlock: string;
    readonly ipv6CidrBlock?: string;
    readonly ipv6CidrBlockAssociationId?: string;
    readonly mapPublicIpOnLaunch?: boolean;
    readonly tags?: {[key: string]: any};
    readonly vpcId: string;
}

