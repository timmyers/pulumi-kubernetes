// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class WebAcl extends lumi.NamedResource implements WebAclArgs {
    public readonly defaultAction: { type: string }[];
    public readonly metricName: string;
    public readonly rules?: { action: { type: string }[], priority: number, ruleId: string }[];

    constructor(name: string, args: WebAclArgs) {
        super(name);
        if (args.defaultAction === undefined) {
            throw new Error("Property argument 'defaultAction' is required, but was missing");
        }
        this.defaultAction = args.defaultAction;
        if (args.metricName === undefined) {
            throw new Error("Property argument 'metricName' is required, but was missing");
        }
        this.metricName = args.metricName;
        this.rules = args.rules;
    }
}

export interface WebAclArgs {
    readonly defaultAction: { type: string }[];
    readonly metricName: string;
    readonly rules?: { action: { type: string }[], priority: number, ruleId: string }[];
}

