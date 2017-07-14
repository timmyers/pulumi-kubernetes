// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Container extends lumi.NamedResource implements ContainerArgs {
    public readonly containerAccessType?: string;
    public readonly properties?: {[key: string]: any};
    public readonly resourceGroupName: string;
    public readonly storageAccountName: string;

    constructor(name: string, args: ContainerArgs) {
        super(name);
        this.containerAccessType = args.containerAccessType;
        if (args.properties === undefined) {
            throw new Error("Property argument 'properties' is required, but was missing");
        }
        this.properties = args.properties;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        if (args.storageAccountName === undefined) {
            throw new Error("Property argument 'storageAccountName' is required, but was missing");
        }
        this.storageAccountName = args.storageAccountName;
    }
}

export interface ContainerArgs {
    readonly containerAccessType?: string;
    readonly properties?: {[key: string]: any};
    readonly resourceGroupName: string;
    readonly storageAccountName: string;
}

