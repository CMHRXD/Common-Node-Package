"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnectionErrors = void 0;
const CustomError_1 = require("./CustomError");
class DBConnectionErrors extends CustomError_1.CustomError {
    constructor() {
        super('Error connecting to database');
        this.reason = 'Error connecting to database';
        this.statusCode = 500;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, DBConnectionErrors.prototype); // this is a typescript thing for extending a built in class
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.DBConnectionErrors = DBConnectionErrors;
