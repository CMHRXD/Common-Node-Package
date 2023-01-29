import {NextFunction,Request,Response } from "express";
import { CustomError } from "../errors/CustomError";

export const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    console.log("Something went wrong  ", err)

    if(err instanceof CustomError){
        return res.status(err.statusCode).json({
            errors:err.serializeErrors()
        })
    }
    
    res.status(500).json({
        message: 'something went wrong'
    })
}