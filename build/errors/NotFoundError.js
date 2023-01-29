"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const CustomError_1 = require("./CustomError");
class NotFoundError extends CustomError_1.CustomError {
    constructor() {
        super('Route not found');
        this.statusCode = 404;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, NotFoundError.prototype); // this is a typescript thing for extending a built in class
    }
    serializeErrors() {
        return [{ message: 'Not Found' }];
    }
}
exports.NotFoundError = NotFoundError;
