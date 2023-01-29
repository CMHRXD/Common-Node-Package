import { CustomError } from "./CustomError";

export class RequestValidationError extends CustomError {
    statusCode: number = 400;
    constructor(public errors:Array<object>){
        super('Invalid request parameters');
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype); // this is a typescript thing for extending a built in class
    }

    serializeErrors(){
        return this.errors.map( (err:any) => {
            return { message: err.msg, field: err.param }
        })
    }
}
