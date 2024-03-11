import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api';

class NotFoundError extends CustomAPIError {
  statusCode: number; // Added this line to declare the statusCode property
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
    return this;
  }
}

export default NotFoundError;
