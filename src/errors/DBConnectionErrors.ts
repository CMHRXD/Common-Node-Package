import { CustomError } from "./CustomError";

export class DBConnectionErrors extends CustomError {
    reason: string = 'Error connecting to database';
    statusCode: number = 500;
    constructor(){
        super('Error connecting to database');
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, DBConnectionErrors.prototype); // this is a typescript thing for extending a built in class
    }
    serializeErrors(){
        return [{ message: this.reason }]
    }
}