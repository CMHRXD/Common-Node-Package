"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envCheck = void 0;
function envCheck() {
    if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
        throw new Error("ENV variables not found");
    }
    if (!process.env.CLUSTER_ID) {
        throw new Error("NATS CLUSTER_ID not found");
    }
    if (!process.env.NATS_CLIENT_ID) {
        throw new Error("NATS CLIENT_ID not found");
    }
    if (!process.env.NATS_URL) {
        throw new Error("NATS URL not found");
    }
}
exports.envCheck = envCheck;
