import { Stan } from "node-nats-streaming";
import { Events } from "../interfaces/events";
export declare abstract class BasePublishier<T extends Events> {
    abstract subject: T["subject"];
    protected client: Stan;
    constructor(client: Stan);
    publish(data: T["data"]): Promise<void>;
}
