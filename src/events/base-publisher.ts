import { Stan } from "node-nats-streaming";
import { Events } from "../interfaces/events";

export abstract class BasePublishier<T extends Events> {
  abstract subject: T["subject"]; // This is the subject name that we want to listen to.
  private client: Stan; // This is the client that we want to use to connect to NATS.

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T["data"]) {
    // This promise is used to publish the event, wait for the event to be published, and catch any errors.
    return new Promise((resolve, rejects) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        // publish the event.
        if (err) {
          return rejects(err);
        }
        console.log("Event published"); 
        resolve();
      });
    }) as Promise<void>;
  }
}
