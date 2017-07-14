// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class OriginAccessIdentity extends lumi.NamedResource implements OriginAccessIdentityArgs {
    public readonly callerReference?: string;
    public readonly cloudfrontAccessIdentityPath?: string;
    public readonly comment?: string;
    public readonly etag?: string;
    public readonly iamArn?: string;
    public readonly s3CanonicalUserId?: string;

    constructor(name: string, args: OriginAccessIdentityArgs) {
        super(name);
        if (args.callerReference === undefined) {
            throw new Error("Property argument 'callerReference' is required, but was missing");
        }
        this.callerReference = args.callerReference;
        if (args.cloudfrontAccessIdentityPath === undefined) {
            throw new Error("Property argument 'cloudfrontAccessIdentityPath' is required, but was missing");
        }
        this.cloudfrontAccessIdentityPath = args.cloudfrontAccessIdentityPath;
        this.comment = args.comment;
        if (args.etag === undefined) {
            throw new Error("Property argument 'etag' is required, but was missing");
        }
        this.etag = args.etag;
        if (args.iamArn === undefined) {
            throw new Error("Property argument 'iamArn' is required, but was missing");
        }
        this.iamArn = args.iamArn;
        if (args.s3CanonicalUserId === undefined) {
            throw new Error("Property argument 's3CanonicalUserId' is required, but was missing");
        }
        this.s3CanonicalUserId = args.s3CanonicalUserId;
    }
}

export interface OriginAccessIdentityArgs {
    readonly callerReference?: string;
    readonly cloudfrontAccessIdentityPath?: string;
    readonly comment?: string;
    readonly etag?: string;
    readonly iamArn?: string;
    readonly s3CanonicalUserId?: string;
}

