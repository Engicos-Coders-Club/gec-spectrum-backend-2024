import 'dotenv/config'; // ES module syntax for dotenv
import 'express-async-errors';
config();
import express from 'express';
const app = express();

// Connect DB
import connectDB from './db/connect.js';

// Routers
import authRouter from './routers/auth.js';
import departmentRouter from './routers/department.js';
import eventRouter from './routers/events.js';
import userRouter from './routers/users.js';

// Error handler
import notFoundMiddleware from './middlewares/not-found.js';
import errorHandlerMiddleware from './middlewares/error-handler.js';

// Security packages
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv' ;

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
app.use(xss());

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/department', departmentRouter);
app.use('/api/v1/events', eventRouter);
app.use('/api/v1/users', userRouter);

// Error handler middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
