import 'express-async-errors';
import express, { NextFunction } from 'express';
const app = express();

// Connect DB
import connectDB from './db/connect.js';

// Routers
import authRouter from './routers/auth.js';
import departmentRouter from './routers/department.js';
import eventRouter from './routers/events.js';
import coordinatorRouter from './routers/coordinator.js';

// Error handler
import notFoundMiddleware from './middlewares/not-found.js';
import errorHandlerMiddleware from './middlewares/error-handler.js';

// Security packages
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv' ;
config();
import cloudinary from "cloudinary";

// JSON parser
app.use(express.json());
app.set('trust proxy', 1);

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable the X-RateLimit-* headers
  })
);

app.use(helmet());
app.use(cors());


// Define an interface for the request body
interface RequestBody {
  [key: string]: string; // Assuming all properties are strings for simplicity
}

// Define a middleware function to sanitize HTML inputs using xss library
const sanitizeHTML = (req: express.Request<{}, {}, RequestBody>, res: Response, next: NextFunction) => {
  if (req.body && typeof req.body === 'object') {
    // Sanitize each property in req.body
    for (const key in req.body) {
      if (Object.prototype.hasOwnProperty.call(req.body, key)) {
        req.body[key] = xss(req.body[key]); // Sanitize HTML input using xss library
      }
    }
  }
  next();
};



// Apply the HTML input sanitization middleware to all routes
//app.use(sanitizeHTML);


// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/department', departmentRouter);
app.use('/api/v1/events', eventRouter);
app.use('/api/v1/coordinator', coordinatorRouter);

// Error handler middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// cloudinary config
cloudinary.v2.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_KEY,
  api_secret:process.env.CLOUDINARY_SECRET,
})

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI || 'default-uri');
    console.log('Connected to mongoDB');
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();
