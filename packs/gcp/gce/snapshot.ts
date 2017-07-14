// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Snapshot extends lumi.NamedResource implements SnapshotArgs {
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly snapshotEncryptionKeyRaw?: string;
    public readonly snapshotEncryptionKeySha256?: string;
    public readonly sourceDisk: string;
    public readonly sourceDiskEncryptionKeyRaw?: string;
    public readonly sourceDiskEncryptionKeySha256?: string;
    public readonly sourceDiskLink?: string;
    public readonly zone: string;

    constructor(name: string, args: SnapshotArgs) {
        super(name);
        this.project = args.project;
        if (args.selfLink === undefined) {
            throw new Error("Property argument 'selfLink' is required, but was missing");
        }
        this.selfLink = args.selfLink;
        this.snapshotEncryptionKeyRaw = args.snapshotEncryptionKeyRaw;
        if (args.snapshotEncryptionKeySha256 === undefined) {
            throw new Error("Property argument 'snapshotEncryptionKeySha256' is required, but was missing");
        }
        this.snapshotEncryptionKeySha256 = args.snapshotEncryptionKeySha256;
        if (args.sourceDisk === undefined) {
            throw new Error("Property argument 'sourceDisk' is required, but was missing");
        }
        this.sourceDisk = args.sourceDisk;
        this.sourceDiskEncryptionKeyRaw = args.sourceDiskEncryptionKeyRaw;
        if (args.sourceDiskEncryptionKeySha256 === undefined) {
            throw new Error("Property argument 'sourceDiskEncryptionKeySha256' is required, but was missing");
        }
        this.sourceDiskEncryptionKeySha256 = args.sourceDiskEncryptionKeySha256;
        if (args.sourceDiskLink === undefined) {
            throw new Error("Property argument 'sourceDiskLink' is required, but was missing");
        }
        this.sourceDiskLink = args.sourceDiskLink;
        if (args.zone === undefined) {
            throw new Error("Property argument 'zone' is required, but was missing");
        }
        this.zone = args.zone;
    }
}

export interface SnapshotArgs {
    readonly project?: string;
    readonly selfLink?: string;
    readonly snapshotEncryptionKeyRaw?: string;
    readonly snapshotEncryptionKeySha256?: string;
    readonly sourceDisk: string;
    readonly sourceDiskEncryptionKeyRaw?: string;
    readonly sourceDiskEncryptionKeySha256?: string;
    readonly sourceDiskLink?: string;
    readonly zone: string;
}

