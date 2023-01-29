"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const CustomError_1 = require("../errors/CustomError");
const errorHandler = (err, req, res, next) => {
    console.log("Something went wrong  ", err);
    if (err instanceof CustomError_1.CustomError) {
        return res.status(err.statusCode).json({
            errors: err.serializeErrors()
        });
    }
    res.status(500).json({
        message: 'something went wrong'
    });
};
exports.errorHandler = errorHandler;
