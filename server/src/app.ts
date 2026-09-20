import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiRouter } from './routes/apiRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

export const app = express();

// Security & utility middleware
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// Resilient CORS configuration supporting Vercel, localhost, and custom domains
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      const clientUrl = process.env.CLIENT_URL;
      if (
        !clientUrl ||
        clientUrl === '*' ||
        origin === clientUrl ||
        origin.endsWith('.vercel.app') ||
        origin.includes('localhost')
      ) {
        return callback(null, true);
      }

      // Allow dynamically if matching
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Root
app.use('/api', apiRouter);

// Base root endpoint
app.get('/', (req, res) => {
  res.json({
    brand: 'Farzandly',
    slogan: 'Farzand tarbiyasi — har kuni o‘rganiladigan yo‘l',
    apiDocs: '/api/health',
    status: 'Running',
  });
});

// 404 & Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
