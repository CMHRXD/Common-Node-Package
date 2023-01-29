"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message) {
        super();
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, CustomError.prototype); // this is a typescript thing for extending a built in class
    }
}
exports.CustomError = CustomError;
