import { Request, Response, NextFunction } from 'express';
import { CustomAPIError } from '../errors';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later."
  };

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors).map((item: any) => item.message).join(',');
    customError.statusCode = 400;
  }
  // Mongoose cast errors (invalid format of _id, for example)
  if (err.name === 'CastError') {
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode = 400;
  }
  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({ "name": err.name, "message": "User already exists" });
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlerMiddleware;
