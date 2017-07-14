// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class QueuePolicy extends lumi.NamedResource implements QueuePolicyArgs {
    public readonly policy: string;
    public readonly queueUrl: string;

    constructor(name: string, args: QueuePolicyArgs) {
        super(name);
        if (args.policy === undefined) {
            throw new Error("Property argument 'policy' is required, but was missing");
        }
        this.policy = args.policy;
        if (args.queueUrl === undefined) {
            throw new Error("Property argument 'queueUrl' is required, but was missing");
        }
        this.queueUrl = args.queueUrl;
    }
}

export interface QueuePolicyArgs {
    readonly policy: string;
    readonly queueUrl: string;
}

