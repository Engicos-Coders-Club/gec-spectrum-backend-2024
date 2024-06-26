// custom-types.d.ts
import 'express';

declare module 'express' {
  export interface Request {
    user?: { userId: string; department: string; email: string;isAdmin: boolean }; // Adjust the type as needed
  }
}
