// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SubnetGroup extends lumi.NamedResource implements SubnetGroupArgs {
    public readonly arn?: string;
    public readonly description?: string;
    public readonly namePrefix?: string;
    public readonly subnetIds: string[];
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: SubnetGroupArgs) {
        super(name);
        if (args.arn === undefined) {
            throw new Error("Property argument 'arn' is required, but was missing");
        }
        this.arn = args.arn;
        this.description = args.description;
        this.namePrefix = args.namePrefix;
        if (args.subnetIds === undefined) {
            throw new Error("Property argument 'subnetIds' is required, but was missing");
        }
        this.subnetIds = args.subnetIds;
        this.tags = args.tags;
    }
}

export interface SubnetGroupArgs {
    readonly arn?: string;
    readonly description?: string;
    readonly namePrefix?: string;
    readonly subnetIds: string[];
    readonly tags?: {[key: string]: any};
}

