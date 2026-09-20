/**
 * Telegram Bot Service
 * Interacts with Telegram Bot API to fetch user profiles, profile photos, and send notifications.
 */

export interface TelegramUserProfile {
  id: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  displayName: string;
  photoUrl?: string;
  photoFileId?: string;
}

export class TelegramBotService {
  /**
   * Get configured Telegram Bot Token
   */
  static getBotToken(): string {
    return process.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_CLIENT_SECRET || '';
  }

  /**
   * Check if Bot API is configured
   */
  static isConfigured(): boolean {
    const token = this.getBotToken();
    return Boolean(token && token.length > 10);
  }

  /**
   * Fetch chat / user info from Telegram Bot API (getChat)
   * https://core.telegram.org/bots/api#getchat
   */
  static async getChat(userId: string | number): Promise<any | null> {
    const token = this.getBotToken();
    if (!token) return null;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/getChat?chat_id=${userId}`);
      if (!res.ok) {
        console.warn(`[TelegramBot] getChat failed for ${userId}:`, res.status);
        return null;
      }
      const data = (await res.json()) as any;
      if (data.ok && data.result) {
        return data.result;
      }
      return null;
    } catch (err: any) {
      console.warn(`[TelegramBot] getChat error:`, err.message);
      return null;
    }
  }

  /**
   * Fetch user's profile photos (getUserProfilePhotos)
   * https://core.telegram.org/bots/api#getuserprofilephotos
   */
  static async getUserProfilePhotos(userId: string | number, limit = 1): Promise<any[] | null> {
    const token = this.getBotToken();
    if (!token) return null;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/getUserProfilePhotos?user_id=${userId}&limit=${limit}`
      );
      if (!res.ok) {
        console.warn(`[TelegramBot] getUserProfilePhotos failed for ${userId}:`, res.status);
        return null;
      }
      const data = (await res.json()) as any;
      if (data.ok && data.result && data.result.photos && data.result.photos.length > 0) {
        return data.result.photos;
      }
      return null;
    } catch (err: any) {
      console.warn(`[TelegramBot] getUserProfilePhotos error:`, err.message);
      return null;
    }
  }

  /**
   * Fetch file information and file_path (getFile)
   * https://core.telegram.org/bots/api#getfile
   */
  static async getFile(fileId: string): Promise<string | null> {
    const token = this.getBotToken();
    if (!token || !fileId) return null;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`);
      if (!res.ok) return null;
      const data = (await res.json()) as any;
      if (data.ok && data.result && data.result.file_path) {
        return data.result.file_path;
      }
      return null;
    } catch (err: any) {
      console.warn(`[TelegramBot] getFile error:`, err.message);
      return null;
    }
  }

  /**
   * Resolve user's real Telegram profile photo URL
   */
  static async getUserPhotoUrl(userId: string | number): Promise<string | null> {
    const token = this.getBotToken();
    if (!token) return null;

    try {
      // 1. First try getChat for photo
      const chat = await this.getChat(userId);
      if (chat?.photo?.big_file_id || chat?.photo?.small_file_id) {
        const fileId = chat.photo.big_file_id || chat.photo.small_file_id;
        const filePath = await this.getFile(fileId);
        if (filePath) {
          return `https://api.telegram.org/file/bot${token}/${filePath}`;
        }
      }

      // 2. Try getUserProfilePhotos
      const photos = await this.getUserProfilePhotos(userId, 1);
      if (photos && photos.length > 0) {
        const photoSizes = photos[0];
        // Pick highest resolution available
        const bestPhoto = photoSizes[photoSizes.length - 1];
        if (bestPhoto?.file_id) {
          const filePath = await this.getFile(bestPhoto.file_id);
          if (filePath) {
            return `https://api.telegram.org/file/bot${token}/${filePath}`;
          }
        }
      }

      return null;
    } catch (err: any) {
      console.warn(`[TelegramBot] getUserPhotoUrl error:`, err.message);
      return null;
    }
  }

  /**
   * Fetch complete user profile from Telegram Bot API
   */
  static async fetchCompleteUserProfile(
    userId: string | number
  ): Promise<TelegramUserProfile | null> {
    const id = String(userId);
    const token = this.getBotToken();

    try {
      let firstName = '';
      let lastName = '';
      let username = '';
      let photoUrl: string | null = null;

      if (token) {
        const chat = await this.getChat(id);
        if (chat) {
          firstName = chat.first_name || '';
          lastName = chat.last_name || '';
          username = (chat.username || '').replace(/^@/, '').trim();
        }

        photoUrl = await this.getUserPhotoUrl(id);
      }

      const cleanUsername = username.replace(/^@/, '').trim();
      const displayName = cleanUsername
        ? `@${cleanUsername}`
        : `${firstName} ${lastName}`.trim() || 'Ota-ona';

      return {
        id,
        first_name: firstName,
        last_name: lastName,
        username: cleanUsername,
        displayName,
        photoUrl: photoUrl || (cleanUsername ? `https://t.me/i/userpic/320/${cleanUsername}.jpg` : undefined),
      };
    } catch (err: any) {
      console.warn('[TelegramBot] fetchCompleteUserProfile error:', err.message);
      return null;
    }
  }

  /**
   * Send text message to user (sendMessage)
   * https://core.telegram.org/bots/api#sendmessage
   */
  static async sendMessage(
    chatId: string | number,
    text: string,
    parseMode: 'HTML' | 'Markdown' = 'HTML'
  ): Promise<boolean> {
    const token = this.getBotToken();
    if (!token) return false;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: parseMode,
          disable_web_page_preview: false,
        }),
      });
      const data = (await res.json()) as any;
      return Boolean(data.ok);
    } catch (err: any) {
      console.warn('[TelegramBot] sendMessage error:', err.message);
      return false;
    }
  }

  /**
   * Send login notification to user via bot
   */
  static async sendLoginNotification(userId: string | number, name: string): Promise<boolean> {
    const appUrl = process.env.CLIENT_URL || 'https://farzandly.vercel.app';
    const message = `🌿 <b>Farzandly platformasiga xush kelibsiz!</b>\n\nAssalomu alaykum, <b>${name}</b>.\nHisobingizga muvaffaqiyatli kirdingiz.\n\n📚 O‘quv rejangizni davom ettiring:\n👉 <a href="${appUrl}/dashboard">${appUrl}/dashboard</a>`;
    return this.sendMessage(userId, message, 'HTML');
  }
}
