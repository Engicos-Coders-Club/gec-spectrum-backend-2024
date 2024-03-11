import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors';
import { Request, Response, NextFunction } from 'express';

const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError("No Token provided");
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        const { userId, role, email } = payload;  // destructuring payload data
        req.user = { userId, role, email }; // passing to req.user as this middleware will pass control to controller function
    } catch (err) {
        throw new UnauthenticatedError("Not allowed to access this route");
    }
    next();
};

export default authenticationMiddleware;
