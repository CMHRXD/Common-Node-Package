import { NextFunction, Request, Response } from "express";
interface userPayload {
    id: String;
    email: String;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: userPayload;
        }
    }
}
export declare const tokenMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export {};
