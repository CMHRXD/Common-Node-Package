import { NextFunction, Request, Response } from "express";
interface userPayload {
    id: string;
    email: string;
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
