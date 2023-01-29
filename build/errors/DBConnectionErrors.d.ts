import { CustomError } from "./CustomError";
export declare class DBConnectionErrors extends CustomError {
    reason: string;
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
