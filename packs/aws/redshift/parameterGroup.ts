// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ParameterGroup extends lumi.NamedResource implements ParameterGroupArgs {
    public readonly description?: string;
    public readonly family: string;
    public readonly parameter?: { value: string }[];

    constructor(name: string, args: ParameterGroupArgs) {
        super(name);
        this.description = args.description;
        if (args.family === undefined) {
            throw new Error("Property argument 'family' is required, but was missing");
        }
        this.family = args.family;
        this.parameter = args.parameter;
    }
}

export interface ParameterGroupArgs {
    readonly description?: string;
    readonly family: string;
    readonly parameter?: { value: string }[];
}

