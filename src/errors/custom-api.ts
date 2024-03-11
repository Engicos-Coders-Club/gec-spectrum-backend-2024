// Inside your CustomAPIError file (e.g., src/errors/custom-api-error.ts)
export class CustomAPIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomAPIError.prototype);
  }
}

  
export default CustomAPIError 
  