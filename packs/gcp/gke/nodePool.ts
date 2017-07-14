// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class NodePool extends lumi.NamedResource implements NodePoolArgs {
    public readonly cluster: string;
    public readonly initialNodeCount: number;
    public readonly namePrefix?: string;
    public readonly project?: string;
    public readonly zone: string;

    constructor(name: string, args: NodePoolArgs) {
        super(name);
        if (args.cluster === undefined) {
            throw new Error("Property argument 'cluster' is required, but was missing");
        }
        this.cluster = args.cluster;
        if (args.initialNodeCount === undefined) {
            throw new Error("Property argument 'initialNodeCount' is required, but was missing");
        }
        this.initialNodeCount = args.initialNodeCount;
        this.namePrefix = args.namePrefix;
        this.project = args.project;
        if (args.zone === undefined) {
            throw new Error("Property argument 'zone' is required, but was missing");
        }
        this.zone = args.zone;
    }
}

export interface NodePoolArgs {
    readonly cluster: string;
    readonly initialNodeCount: number;
    readonly namePrefix?: string;
    readonly project?: string;
    readonly zone: string;
}

