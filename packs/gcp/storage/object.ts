// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Object extends lumi.NamedResource implements ObjectArgs {
    public readonly bucket: string;
    public readonly cacheControl?: string;
    public readonly content?: string;
    public readonly contentDisposition?: string;
    public readonly contentEncoding?: string;
    public readonly contentLanguage?: string;
    public readonly contentType?: string;
    public readonly crc32c?: string;
    public readonly md5hash?: string;
    public readonly predefinedAcl?: string;
    public readonly source?: string;
    public readonly storageClass?: string;

    constructor(name: string, args: ObjectArgs) {
        super(name);
        if (args.bucket === undefined) {
            throw new Error("Property argument 'bucket' is required, but was missing");
        }
        this.bucket = args.bucket;
        this.cacheControl = args.cacheControl;
        this.content = args.content;
        this.contentDisposition = args.contentDisposition;
        this.contentEncoding = args.contentEncoding;
        this.contentLanguage = args.contentLanguage;
        this.contentType = args.contentType;
        if (args.crc32c === undefined) {
            throw new Error("Property argument 'crc32c' is required, but was missing");
        }
        this.crc32c = args.crc32c;
        if (args.md5hash === undefined) {
            throw new Error("Property argument 'md5hash' is required, but was missing");
        }
        this.md5hash = args.md5hash;
        this.predefinedAcl = args.predefinedAcl;
        this.source = args.source;
        this.storageClass = args.storageClass;
    }
}

export interface ObjectArgs {
    readonly bucket: string;
    readonly cacheControl?: string;
    readonly content?: string;
    readonly contentDisposition?: string;
    readonly contentEncoding?: string;
    readonly contentLanguage?: string;
    readonly contentType?: string;
    readonly crc32c?: string;
    readonly md5hash?: string;
    readonly predefinedAcl?: string;
    readonly source?: string;
    readonly storageClass?: string;
}

