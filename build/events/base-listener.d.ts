import { Message, Stan } from "node-nats-streaming";
import { Events } from "../interfaces/events";
export declare abstract class Listener<T extends Events> {
    abstract subject: T["subject"];
    abstract queueGroupName: string;
    abstract onMessage(data: T["data"], msg: Message): void;
    protected client: Stan;
    protected ackWait: number;
    constructor(client: Stan);
    subscriptionOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
