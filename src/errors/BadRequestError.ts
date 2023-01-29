import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
    statusCode: number = 400;
    constructor(public message:string){
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype); // this is a typescript thing for extending a built in class
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}