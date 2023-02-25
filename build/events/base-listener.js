"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
//Generic class Events is used to create a listener for a specific event type, and associate it with a data type onMessage function.
class Listener {
    constructor(client) {
        this.ackWait = 5 * 1000; // This is the time that we want to wait for an acknowledgement from NATS.
        this.client = client;
    }
    subscriptionOptions() {
        // This is the subscription options that we want to use.
        return this.client
            .subscriptionOptions() //Creates a new SubscriptionOptions object.
            .setDeliverAllAvailable() //Configures the subscription to replay from first available message.
            .setManualAckMode(true) //Configures the subscription to manually acknowledge messages.
            .setAckWait(this.ackWait) //Sets the amount of time the server will wait for an ack from the client.
            .setDurableName(this.queueGroupName); //Sets a durable subscription name that the client can specify for the subscription.
    }
    /*
        .setDeliverAllAvailable() and  .setDurableName("accounting-service"); and the queue-group-name  are used to create a durable subscription
        that will replay all the messages that have not been acknowledged.
        In case we close our listener and restart it, it will replay all the messages that have not been acknowledged.
      */
    listen() {
        const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscription.on("message", (msg) => {
            console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);
            const parseData = this.parseMessage(msg);
            this.onMessage(parseData, msg);
        });
    }
    parseMessage(msg) {
        const data = msg.getData();
        return typeof data === "string"
            ? JSON.parse(data)
            : JSON.parse(data.toString("utf8")); // if the data is a buffer
    }
}
exports.Listener = Listener;
