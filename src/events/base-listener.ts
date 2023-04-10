import { Message, Stan } from "node-nats-streaming";
import { Events } from "../interfaces/events";

//Generic class Events is used to create a listener for a specific event type, and associate it with a data type onMessage function.
export abstract class Listener<T extends Events> {
  abstract subject: T["subject"]; // This is the subject name that we want to listen to.
  abstract queueGroupName: string; // This is the queue group name that we want to use.
  abstract onMessage(data: T["data"], msg: Message): void; // this function is called when a message is received.
  protected client: Stan; // This is the client that we want to use to connect to NATS.
  protected ackWait = 5 * 1000; // This is the time that we want to wait for an acknowledgement from NATS.

  constructor(client: Stan) {
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
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subscription.on("message", (msg: Message) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);

      const parseData = this.parseMessage(msg);
      this.onMessage(parseData, msg);
    });
  }

  parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8")); // if the data is a buffer
  }
}
