"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePublishier = void 0;
class BasePublishier {
    constructor(client) {
        this.client = client;
    }
    publish(data) {
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
        });
    }
}
exports.BasePublishier = BasePublishier;
