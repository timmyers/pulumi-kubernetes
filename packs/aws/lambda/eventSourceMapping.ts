// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class EventSourceMapping extends lumi.NamedResource implements EventSourceMappingArgs {
    public readonly batchSize?: number;
    public readonly enabled?: boolean;
    public readonly eventSourceArn: string;
    public readonly functionArn?: string;
    public readonly functionName: string;
    public readonly lastModified?: string;
    public readonly lastProcessingResult?: string;
    public readonly startingPosition: string;
    public readonly state?: string;
    public readonly stateTransitionReason?: string;
    public readonly uuid?: string;

    constructor(name: string, args: EventSourceMappingArgs) {
        super(name);
        this.batchSize = args.batchSize;
        this.enabled = args.enabled;
        if (args.eventSourceArn === undefined) {
            throw new Error("Property argument 'eventSourceArn' is required, but was missing");
        }
        this.eventSourceArn = args.eventSourceArn;
        if (args.functionArn === undefined) {
            throw new Error("Property argument 'functionArn' is required, but was missing");
        }
        this.functionArn = args.functionArn;
        if (args.functionName === undefined) {
            throw new Error("Property argument 'functionName' is required, but was missing");
        }
        this.functionName = args.functionName;
        if (args.lastModified === undefined) {
            throw new Error("Property argument 'lastModified' is required, but was missing");
        }
        this.lastModified = args.lastModified;
        if (args.lastProcessingResult === undefined) {
            throw new Error("Property argument 'lastProcessingResult' is required, but was missing");
        }
        this.lastProcessingResult = args.lastProcessingResult;
        if (args.startingPosition === undefined) {
            throw new Error("Property argument 'startingPosition' is required, but was missing");
        }
        this.startingPosition = args.startingPosition;
        if (args.state === undefined) {
            throw new Error("Property argument 'state' is required, but was missing");
        }
        this.state = args.state;
        if (args.stateTransitionReason === undefined) {
            throw new Error("Property argument 'stateTransitionReason' is required, but was missing");
        }
        this.stateTransitionReason = args.stateTransitionReason;
        if (args.uuid === undefined) {
            throw new Error("Property argument 'uuid' is required, but was missing");
        }
        this.uuid = args.uuid;
    }
}

export interface EventSourceMappingArgs {
    readonly batchSize?: number;
    readonly enabled?: boolean;
    readonly eventSourceArn: string;
    readonly functionArn?: string;
    readonly functionName: string;
    readonly lastModified?: string;
    readonly lastProcessingResult?: string;
    readonly startingPosition: string;
    readonly state?: string;
    readonly stateTransitionReason?: string;
    readonly uuid?: string;
}

