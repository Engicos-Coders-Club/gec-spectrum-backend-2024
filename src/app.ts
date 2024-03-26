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
import paymentRouter from './routers/payments.js';

// Error handler
import notFoundMiddleware from './middlewares/not-found.js';
import errorHandlerMiddleware from './middlewares/error-handler.js';

// Security packages
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv' ;
import cloudinary from "cloudinary";


config(); // for dotenv

// JSON parser
app.use(express.json({limit: '50mb'}));
app.set('trust proxy', 1);

app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 1000, // limit each IP to 1000 requests per window
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable the X-RateLimit-* headers
  })
);

app.use(helmet());
app.use(cors({
  origin: ["http://localhost:3000","https://www.gecspectrum.com","https://gec-spectrum-website-2024-git-main-gec-coders-clubs-projects.vercel.app","http://localhost:5500"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
}));

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/department', departmentRouter);
app.use('/api/v1/events', eventRouter);
app.use('/api/v1/coordinator', coordinatorRouter);
app.use('/api/v1/payments',paymentRouter)

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