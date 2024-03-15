import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';
import { Request, Response, NextFunction } from 'express';

const adminAuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError("No Bearer Token provided");
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        const { isAdmin } = payload;  // destructuring payload data
        if(!isAdmin)
            throw new Error()
        req.user = {isAdmin,userId:"", email:"",department:""};
    } catch (err) {
        throw new UnauthenticatedError("You are not the admin !");
    }
    next();
};

export default adminAuthenticationMiddleware;
