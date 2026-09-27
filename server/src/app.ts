import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiRouter } from './routes/apiRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { attachUser } from './middleware/auth.js';

export const app = express();

// Behind Render/Railway/Nginx: needed for correct req.ip (rate limiting) and req.protocol.
app.set('trust proxy', 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

/**
 * CORS allowlist. CLIENT_URL may hold several comma-separated origins, in addition to
 * (never instead of) the production domain below — so a misconfigured/missing CLIENT_URL
 * on the host can never silently lock the live site out of its own API.
 */
const allowedOrigins = new Set(
  ['https://farzandly.uz', process.env.CLIENT_URL || '']
    .join(',')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
    .flatMap((origin) => {
      try {
        const url = new URL(origin);
        const canonicalOrigin = url.origin;
        if (url.hostname === 'farzandly.uz') {
          return [canonicalOrigin, `${url.protocol}//www.farzandly.uz`];
        }
        if (url.hostname === 'www.farzandly.uz') {
          return [canonicalOrigin, `${url.protocol}//farzandly.uz`];
        }
        return [canonicalOrigin];
      } catch {
        return [origin.replace(/\/$/, '')];
      }
    })
);
const isProd = process.env.NODE_ENV === 'production';

app.use(
  cors({
    origin: (origin, callback) => {
      // Server-to-server calls (Next.js SSR, Telegram webhook, curl) send no Origin.
      if (!origin) return callback(null, true);
      const clean = origin.replace(/\/$/, '');
      if (allowedOrigins.has(clean)) return callback(null, true);
      if (!isProd && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(clean)) return callback(null, true);
      if (process.env.ALLOW_VERCEL_PREVIEWS === 'true' && /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(clean)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    // Auth uses the Authorization header, not cookies.
    credentials: false,
  })
);

app.use(morgan(isProd ? 'combined' : 'dev'));
app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: true, limit: '200kb' }));

// Resolve the signed session token (if any) into req.user for every API request.
app.use('/api', attachUser);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.json({ brand: 'Farzandly', status: 'Running', apiDocs: '/api/health' });
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
