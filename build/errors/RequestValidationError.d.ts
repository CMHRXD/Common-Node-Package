import { CustomError } from "./CustomError";
export declare class RequestValidationError extends CustomError {
    errors: Array<object>;
    statusCode: number;
    constructor(errors: Array<object>);
    serializeErrors(): {
        message: any;
        field: any;
    }[];
}
