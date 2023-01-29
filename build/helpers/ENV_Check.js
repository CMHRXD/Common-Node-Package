"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envCheck = void 0;
function envCheck() {
    if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
        throw new Error('ENV variables not found');
    }
}
exports.envCheck = envCheck;
