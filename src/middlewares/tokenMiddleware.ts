import { NextFunction, Request, Response } from "express";
//import { currentUser } from "../controllers/auth-controller";
import { decodeToken } from "../helpers/JWT_Decode";

interface userPayload {
    id: String;
    email: String;
}

// To create a new property in the Request interface or update an existing one,
// you need to declare the global namespace and then extend the interface.
declare global {
    namespace Express {
        interface Request {
            currentUser?: userPayload;
        }
    }
}

export const tokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.token) {
        next();
    }
    const token = req.session?.token || req.headers.cookie;
    console.log(req.headers.cookie)
    console.log('token: ', token)
    try {
        const payload = decodeToken(token) as userPayload;
        console.log('payload: ', token)
        req.currentUser = payload;
    } catch (error) {
        console.log(error)
    }
    next();
};
