// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class DefaultVpcDhcpOptions extends lumi.NamedResource implements DefaultVpcDhcpOptionsArgs {
    public readonly domainName?: string;
    public readonly domainNameServers?: string;
    public readonly netbiosNameServers?: string[];
    public readonly netbiosNodeType?: string;
    public readonly ntpServers?: string;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: DefaultVpcDhcpOptionsArgs) {
        super(name);
        if (args.domainName === undefined) {
            throw new Error("Property argument 'domainName' is required, but was missing");
        }
        this.domainName = args.domainName;
        if (args.domainNameServers === undefined) {
            throw new Error("Property argument 'domainNameServers' is required, but was missing");
        }
        this.domainNameServers = args.domainNameServers;
        this.netbiosNameServers = args.netbiosNameServers;
        this.netbiosNodeType = args.netbiosNodeType;
        if (args.ntpServers === undefined) {
            throw new Error("Property argument 'ntpServers' is required, but was missing");
        }
        this.ntpServers = args.ntpServers;
        this.tags = args.tags;
    }
}

export interface DefaultVpcDhcpOptionsArgs {
    readonly domainName?: string;
    readonly domainNameServers?: string;
    readonly netbiosNameServers?: string[];
    readonly netbiosNodeType?: string;
    readonly ntpServers?: string;
    readonly tags?: {[key: string]: any};
}

