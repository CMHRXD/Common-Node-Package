import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
    statusCode = 404;
    constructor() {
        super('Route not found');
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, NotFoundError.prototype); // this is a typescript thing for extending a built in class
    }
    serializeErrors() {
        return [{ message: 'Not Found' }];
    }
}