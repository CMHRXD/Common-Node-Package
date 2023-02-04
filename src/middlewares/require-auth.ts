import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/NotAuthorizedError';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    console.log('require-auth: ', req.currentUser)
    if(!req.currentUser){
        throw new NotAuthorizedError();
    }
    next();
}