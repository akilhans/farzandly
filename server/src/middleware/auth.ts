import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../lib/security.js';
import { DataService } from '../services/dataService.js';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: any;
      userId?: string;
    }
  }
}

function readBearer(req: Request): string | null {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) return null;
  return header.slice(7).trim() || null;
}

/**
 * Resolves the signed session token (if any) into req.user. Never rejects — routes that
 * need a user use requireAuth. Legacy unsigned tokens simply resolve to no user.
 */
export async function attachUser(req: Request, res: Response, next: NextFunction) {
  const payload = verifyToken(readBearer(req), 'session');
  if (!payload?.uid) return next();
  try {
    const user = await DataService.getUserById(payload.uid);
    if (user) {
      req.user = user;
      req.userId = String(user._id);
    }
  } catch {
    // treat as anonymous
  }
  next();
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      code: 'AUTH_REQUIRED',
      message: 'Iltimos, qaytadan tizimga kiring',
    });
  }
  next();
}

export function isAdminUser(user: any): boolean {
  if (!user) return false;
  if (user.role === 'admin') return true;
  const ids = (process.env.ADMIN_TELEGRAM_IDS || process.env.ADMIN_TELEGRAM_CHAT_ID || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  return Boolean(user.telegramId && ids.includes(String(user.telegramId)));
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user) {
    return res.status(401).json({ success: false, code: 'AUTH_REQUIRED', message: 'Iltimos, tizimga kiring' });
  }
  if (!isAdminUser(req.user)) {
    return res.status(403).json({ success: false, code: 'FORBIDDEN', message: 'Ruxsat yo‘q' });
  }
  next();
}

/**
 * Small fixed-window, in-memory rate limiter. Good enough for a single instance;
 * swap for a Redis-backed limiter if the API is ever scaled horizontally.
 */
export function rateLimit(opts: { windowMs: number; max: number; key?: (req: Request) => string }) {
  const hits = new Map<string, { count: number; resetAt: number }>();
  setInterval(() => {
    const now = Date.now();
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
  }, opts.windowMs).unref();

  return (req: Request, res: Response, next: NextFunction) => {
    const key = (opts.key ? opts.key(req) : req.ip) || 'unknown';
    const now = Date.now();
    const entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + opts.windowMs });
      return next();
    }
    entry.count += 1;
    if (entry.count > opts.max) {
      res.setHeader('Retry-After', Math.ceil((entry.resetAt - now) / 1000));
      return res.status(429).json({ success: false, code: 'RATE_LIMITED', message: 'Juda ko‘p so‘rov. Birozdan so‘ng urinib ko‘ring.' });
    }
    next();
  };
}
