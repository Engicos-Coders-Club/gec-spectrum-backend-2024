// custom-types.d.ts
import 'express';

declare module 'express' {
  export interface Request {
    user?: { userId: string; role: string; email: string }; // Adjust the type as needed
  }
}
