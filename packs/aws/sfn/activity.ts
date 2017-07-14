// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Activity extends lumi.NamedResource implements ActivityArgs {
    public readonly creationDate?: string;

    constructor(name: string, args: ActivityArgs) {
        super(name);
        if (args.creationDate === undefined) {
            throw new Error("Property argument 'creationDate' is required, but was missing");
        }
        this.creationDate = args.creationDate;
    }
}

export interface ActivityArgs {
    readonly creationDate?: string;
}

