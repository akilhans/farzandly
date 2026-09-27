import crypto from 'crypto';

/**
 * Security primitives shared by the auth layer.
 *
 * - Session tokens:   v1.<payload b64url>.<HMAC-SHA256 b64url>, signed with AUTH_SECRET.
 * - Passwords:        scrypt with a per-user salt; legacy unsalted sha256 hashes are still
 *                     accepted once and upgraded on the next successful login.
 * - Telegram:         Login Widget hash + Mini App initData verification (both keyed by the bot token).
 */

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const TICKET_TTL_SECONDS = 60 * 15; // 15 minutes (bot one-click login link)

let devSecret: string | null = null;

function getAuthSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (secret && secret.length >= 32) return secret;
  if (process.env.NODE_ENV === 'production') {
    throw new Error('AUTH_SECRET is missing or shorter than 32 characters. Set it in the server environment.');
  }
  if (!devSecret) {
    devSecret = crypto.randomBytes(48).toString('hex');
    console.warn('[Security] AUTH_SECRET is not set — using a random per-process secret (dev only). Sessions reset on restart.');
  }
  return devSecret;
}

/** Call once at startup so a misconfigured production server fails fast instead of on the first login. */
export function assertSecurityConfig(): void {
  getAuthSecret();
}

function b64url(input: Buffer | string): string {
  return Buffer.from(input).toString('base64url');
}

function hmac(data: string): string {
  return crypto.createHmac('sha256', getAuthSecret()).update(data).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

export type TokenPurpose = 'session' | 'ticket' | 'admin';

export interface TokenPayload {
  uid?: string; // Mongo user _id (session tokens)
  tg?: string; // Telegram id (bot login tickets)
  pur: TokenPurpose;
  iat: number;
  exp: number;
}

function signPayload(payload: TokenPayload): string {
  const body = b64url(JSON.stringify(payload));
  return `v1.${body}.${hmac(`v1.${body}`)}`;
}

export function signSessionToken(userId: string): string {
  const now = Math.floor(Date.now() / 1000);
  return signPayload({ uid: String(userId), pur: 'session', iat: now, exp: now + SESSION_TTL_SECONDS });
}

export function signLoginTicket(telegramId: string): string {
  const now = Math.floor(Date.now() / 1000);
  return signPayload({ tg: String(telegramId), pur: 'ticket', iat: now, exp: now + TICKET_TTL_SECONDS });
}

/** Session token for the standalone admin username/password login (not tied to a DB user). */
export function signAdminToken(): string {
  const now = Math.floor(Date.now() / 1000);
  return signPayload({ pur: 'admin', iat: now, exp: now + SESSION_TTL_SECONDS });
}

/**
 * Checks a username/password pair against ADMIN_USERNAME / ADMIN_PASSWORD env vars.
 * Both sides are hashed to a fixed-length digest before comparing, so the check is
 * constant-time regardless of input length and never short-circuits on a length mismatch.
 */
export function verifyAdminCredentials(username: string, password: string): boolean {
  const envUser = process.env.ADMIN_USERNAME || '';
  const envPass = process.env.ADMIN_PASSWORD || '';
  if (!envUser || !envPass) return false;
  const digest = (s: string) => crypto.createHmac('sha256', getAuthSecret()).update(s).digest();
  const userOk = safeEqual(digest(username).toString('hex'), digest(envUser).toString('hex'));
  const passOk = safeEqual(digest(password).toString('hex'), digest(envPass).toString('hex'));
  return userOk && passOk;
}

export function verifyToken(token: string | undefined | null, purpose: TokenPurpose): TokenPayload | null {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3 || parts[0] !== 'v1') return null;
  const expected = hmac(`v1.${parts[1]}`);
  if (!safeEqual(expected, parts[2])) return null;
  try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8')) as TokenPayload;
    if (payload.pur !== purpose) return null;
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Passwords
// ---------------------------------------------------------------------------

const SCRYPT_N = 16384;
const SCRYPT_KEYLEN = 64;

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, SCRYPT_KEYLEN, { N: SCRYPT_N });
  return `scrypt$${SCRYPT_N}$${salt.toString('base64')}$${hash.toString('base64')}`;
}

/** Returns { ok, needsUpgrade } — needsUpgrade is true when a legacy sha256 hash matched. */
export function verifyPassword(password: string, stored: string | undefined | null): { ok: boolean; needsUpgrade: boolean } {
  if (!stored) return { ok: false, needsUpgrade: false };

  if (stored.startsWith('scrypt$')) {
    const [, nStr, saltB64, hashB64] = stored.split('$');
    const expected = Buffer.from(hashB64, 'base64');
    const actual = crypto.scryptSync(password, Buffer.from(saltB64, 'base64'), expected.length, { N: Number(nStr) });
    return { ok: crypto.timingSafeEqual(actual, expected), needsUpgrade: false };
  }

  // Legacy: unsalted sha256 hex
  if (/^[a-f0-9]{64}$/i.test(stored)) {
    const legacy = crypto.createHash('sha256').update(password).digest('hex');
    return { ok: safeEqual(legacy, stored.toLowerCase()), needsUpgrade: true };
  }

  return { ok: false, needsUpgrade: false };
}

// ---------------------------------------------------------------------------
// Telegram
// ---------------------------------------------------------------------------

export function getBotToken(): string {
  return process.env.TELEGRAM_BOT_TOKEN || process.env.BOT_TOKEN || '';
}

const WIDGET_FIELDS = ['id', 'first_name', 'last_name', 'username', 'photo_url', 'auth_date'];
const MAX_AUTH_AGE_SECONDS = 60 * 60 * 24; // Telegram data older than a day is rejected

/**
 * Verifies a Telegram Login Widget payload.
 * https://core.telegram.org/widgets/login#checking-authorization
 */
export function verifyTelegramWidget(data: Record<string, any>): boolean {
  const botToken = getBotToken();
  if (!botToken || !data?.hash || !data?.auth_date) return false;

  const authDate = Number(data.auth_date);
  if (!Number.isFinite(authDate) || Math.floor(Date.now() / 1000) - authDate > MAX_AUTH_AGE_SECONDS) return false;

  const checkString = WIDGET_FIELDS.filter((k) => data[k] !== undefined && data[k] !== null && data[k] !== '')
    .sort()
    .map((k) => `${k}=${data[k]}`)
    .join('\n');
  const secretKey = crypto.createHash('sha256').update(botToken).digest();
  const calculated = crypto.createHmac('sha256', secretKey).update(checkString).digest('hex');
  return safeEqual(calculated, String(data.hash));
}

/**
 * Verifies Telegram Mini App initData and returns the parsed user, or null.
 * https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
 */
export function verifyTelegramInitData(initData: string): Record<string, any> | null {
  const botToken = getBotToken();
  if (!botToken || !initData) return null;

  const params = new URLSearchParams(initData);
  const hash = params.get('hash');
  if (!hash) return null;
  params.delete('hash');

  const authDate = Number(params.get('auth_date'));
  if (!Number.isFinite(authDate) || Math.floor(Date.now() / 1000) - authDate > MAX_AUTH_AGE_SECONDS) return null;

  const checkString = [...params.entries()]
    .map(([k, v]) => `${k}=${v}`)
    .sort()
    .join('\n');
  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
  const calculated = crypto.createHmac('sha256', secretKey).update(checkString).digest('hex');
  if (!safeEqual(calculated, hash)) return null;

  try {
    const user = JSON.parse(params.get('user') || 'null');
    return user && user.id ? user : null;
  } catch {
    return null;
  }
}

/** Secret Telegram echoes back in X-Telegram-Bot-Api-Secret-Token on every webhook call. */
export function getWebhookSecret(): string {
  if (process.env.TELEGRAM_WEBHOOK_SECRET) return process.env.TELEGRAM_WEBHOOK_SECRET;
  // Derive a stable secret so webhook mode is protected even without extra config.
  const botToken = getBotToken();
  if (!botToken) return '';
  return crypto.createHmac('sha256', 'farzandly-webhook').update(botToken).digest('hex').slice(0, 64);
}

export function isValidWebhookSecret(header: string | undefined): boolean {
  const expected = getWebhookSecret();
  return Boolean(expected && header && safeEqual(expected, header));
}
