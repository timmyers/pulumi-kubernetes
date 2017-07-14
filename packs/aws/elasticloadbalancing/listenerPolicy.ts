// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ListenerPolicy extends lumi.NamedResource implements ListenerPolicyArgs {
    public readonly loadBalancerName: string;
    public readonly loadBalancerPort: number;
    public readonly policyNames?: string[];

    constructor(name: string, args: ListenerPolicyArgs) {
        super(name);
        if (args.loadBalancerName === undefined) {
            throw new Error("Property argument 'loadBalancerName' is required, but was missing");
        }
        this.loadBalancerName = args.loadBalancerName;
        if (args.loadBalancerPort === undefined) {
            throw new Error("Property argument 'loadBalancerPort' is required, but was missing");
        }
        this.loadBalancerPort = args.loadBalancerPort;
        this.policyNames = args.policyNames;
    }
}

export interface ListenerPolicyArgs {
    readonly loadBalancerName: string;
    readonly loadBalancerPort: number;
    readonly policyNames?: string[];
}

