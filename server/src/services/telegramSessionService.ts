import crypto from 'crypto';
import { DataService } from './dataService.js';
import { TelegramBotService } from './telegramBotService.js';

export interface TelegramAuthSession {
  sessionId: string;
  status: 'pending' | 'authenticated' | 'expired';
  user?: any;
  token?: string;
  createdAt: number;
  expiresAt: number;
}

/**
 * In-memory storage for active Telegram Bot authorization sessions.
 * TTL: 10 minutes.
 */
class TelegramSessionStore {
  private sessions = new Map<string, TelegramAuthSession>();

  constructor() {
    // Periodically cleanup expired sessions every 60 seconds
    setInterval(() => {
      const now = Date.now();
      for (const [id, s] of this.sessions.entries()) {
        if (s.expiresAt <= now) {
          this.sessions.delete(id);
        }
      }
    }, 60 * 1000);
  }

  /**
   * Create a new pending Telegram login session
   */
  createSession(ttlMinutes: number = 10): TelegramAuthSession {
    const sessionId = crypto.randomUUID();
    const now = Date.now();
    const session: TelegramAuthSession = {
      sessionId,
      status: 'pending',
      createdAt: now,
      expiresAt: now + ttlMinutes * 60 * 1000,
    };
    this.sessions.set(sessionId, session);
    return session;
  }

  /**
   * Get session by ID
   */
  getSession(sessionId: string): TelegramAuthSession | null {
    if (!sessionId) return null;
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    if (session.expiresAt <= Date.now()) {
      this.sessions.delete(sessionId);
      return null;
    }
    return session;
  }

  /**
   * Authenticate session when user sends /start <sessionId> to the bot
   */
  async authenticateSession(sessionId: string, tgFrom: any): Promise<any | null> {
    const session = this.getSession(sessionId);
    if (!session || session.status === 'authenticated') {
      return null;
    }

    try {
      const telegramId = String(tgFrom.id);
      const cleanUsername = (tgFrom.username || '').replace(/^@/, '').trim();
      const displayName = cleanUsername
        ? `@${cleanUsername}`
        : `${tgFrom.first_name || 'Ota-ona'} ${tgFrom.last_name || ''}`.trim();

      const photoUrl = cleanUsername
        ? `https://t.me/i/userpic/320/${cleanUsername}.jpg`
        : `/api/auth/telegram/avatar/${telegramId}?name=${encodeURIComponent(displayName)}`;

      const user = await DataService.upsertTelegramUser({
        telegramId,
        telegramUsername: cleanUsername,
        name: displayName,
        firstName: tgFrom.first_name,
        lastName: tgFrom.last_name,
        photoUrl,
      });

      const token = `farzandly_tg_${telegramId}_${Date.now()}`;

      session.status = 'authenticated';
      session.user = user;
      session.token = token;

      // Send login notification in the background
      TelegramBotService.sendLoginNotification(telegramId, displayName).catch(() => {});

      return user;
    } catch (err: any) {
      console.error('[TelegramSessionService] authenticateSession xatosi:', err.message || err);
      return null;
    }
  }
}

export const TelegramSessionService = new TelegramSessionStore();
