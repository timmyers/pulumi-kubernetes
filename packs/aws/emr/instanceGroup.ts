// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class InstanceGroup extends lumi.NamedResource implements InstanceGroupArgs {
    public readonly clusterId: string;
    public readonly ebsConfig?: { iops?: number, size: number, type: string, volumesPerInstance?: number }[];
    public readonly ebsOptimized?: boolean;
    public readonly instanceCount?: number;
    public readonly instanceType: string;
    public readonly runningInstanceCount?: number;
    public readonly status?: string;

    constructor(name: string, args: InstanceGroupArgs) {
        super(name);
        if (args.clusterId === undefined) {
            throw new Error("Property argument 'clusterId' is required, but was missing");
        }
        this.clusterId = args.clusterId;
        this.ebsConfig = args.ebsConfig;
        this.ebsOptimized = args.ebsOptimized;
        this.instanceCount = args.instanceCount;
        if (args.instanceType === undefined) {
            throw new Error("Property argument 'instanceType' is required, but was missing");
        }
        this.instanceType = args.instanceType;
        if (args.runningInstanceCount === undefined) {
            throw new Error("Property argument 'runningInstanceCount' is required, but was missing");
        }
        this.runningInstanceCount = args.runningInstanceCount;
        if (args.status === undefined) {
            throw new Error("Property argument 'status' is required, but was missing");
        }
        this.status = args.status;
    }
}

export interface InstanceGroupArgs {
    readonly clusterId: string;
    readonly ebsConfig?: { iops?: number, size: number, type: string, volumesPerInstance?: number }[];
    readonly ebsOptimized?: boolean;
    readonly instanceCount?: number;
    readonly instanceType: string;
    readonly runningInstanceCount?: number;
    readonly status?: string;
}

