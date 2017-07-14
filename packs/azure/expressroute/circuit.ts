// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Circuit extends lumi.NamedResource implements CircuitArgs {
    public readonly allowClassicOperations?: boolean;
    public readonly bandwidthInMbps: number;
    public readonly location: string;
    public readonly peeringLocation: string;
    public readonly resourceGroupName: string;
    public readonly serviceKey?: string;
    public readonly serviceProviderName: string;
    public readonly serviceProviderProvisioningState?: string;
    public readonly sku: { family: string, tier: string }[];
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: CircuitArgs) {
        super(name);
        this.allowClassicOperations = args.allowClassicOperations;
        if (args.bandwidthInMbps === undefined) {
            throw new Error("Property argument 'bandwidthInMbps' is required, but was missing");
        }
        this.bandwidthInMbps = args.bandwidthInMbps;
        if (args.location === undefined) {
            throw new Error("Property argument 'location' is required, but was missing");
        }
        this.location = args.location;
        if (args.peeringLocation === undefined) {
            throw new Error("Property argument 'peeringLocation' is required, but was missing");
        }
        this.peeringLocation = args.peeringLocation;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        if (args.serviceKey === undefined) {
            throw new Error("Property argument 'serviceKey' is required, but was missing");
        }
        this.serviceKey = args.serviceKey;
        if (args.serviceProviderName === undefined) {
            throw new Error("Property argument 'serviceProviderName' is required, but was missing");
        }
        this.serviceProviderName = args.serviceProviderName;
        if (args.serviceProviderProvisioningState === undefined) {
            throw new Error("Property argument 'serviceProviderProvisioningState' is required, but was missing");
        }
        this.serviceProviderProvisioningState = args.serviceProviderProvisioningState;
        if (args.sku === undefined) {
            throw new Error("Property argument 'sku' is required, but was missing");
        }
        this.sku = args.sku;
        this.tags = args.tags;
    }
}

export interface CircuitArgs {
    readonly allowClassicOperations?: boolean;
    readonly bandwidthInMbps: number;
    readonly location: string;
    readonly peeringLocation: string;
    readonly resourceGroupName: string;
    readonly serviceKey?: string;
    readonly serviceProviderName: string;
    readonly serviceProviderProvisioningState?: string;
    readonly sku: { family: string, tier: string }[];
    readonly tags?: {[key: string]: any};
}

