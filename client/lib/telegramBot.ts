/**
 * Telegram Bot Utilities (Server-side for Next.js App Router API Routes)
 */

export interface TelegramUserProfile {
  id: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  displayName: string;
  photoUrl?: string;
}

export class TelegramBotClient {
  static getBotToken(): string {
    return process.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_CLIENT_SECRET || '';
  }

  static isConfigured(): boolean {
    const token = this.getBotToken();
    return Boolean(token && token.length > 10);
  }

  static async getChat(userId: string | number): Promise<any | null> {
    const token = this.getBotToken();
    if (!token) return null;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/getChat?chat_id=${userId}`, {
        cache: 'no-store',
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.ok ? data.result : null;
    } catch {
      return null;
    }
  }

  static async getUserProfilePhotos(userId: string | number, limit = 1): Promise<any[] | null> {
    const token = this.getBotToken();
    if (!token) return null;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/getUserProfilePhotos?user_id=${userId}&limit=${limit}`,
        { cache: 'no-store' }
      );
      if (!res.ok) return null;
      const data = await res.json();
      return data.ok && data.result?.photos ? data.result.photos : null;
    } catch {
      return null;
    }
  }

  static async getFile(fileId: string): Promise<string | null> {
    const token = this.getBotToken();
    if (!token || !fileId) return null;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`, {
        cache: 'no-store',
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.ok && data.result?.file_path ? data.result.file_path : null;
    } catch {
      return null;
    }
  }

  static async getUserPhotoUrl(userId: string | number): Promise<string | null> {
    const token = this.getBotToken();
    if (!token) return null;

    try {
      // 1. Try getChat photo
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
        const bestPhoto = photoSizes[photoSizes.length - 1];
        if (bestPhoto?.file_id) {
          const filePath = await this.getFile(bestPhoto.file_id);
          if (filePath) {
            return `https://api.telegram.org/file/bot${token}/${filePath}`;
          }
        }
      }

      return null;
    } catch {
      return null;
    }
  }

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
    } catch {
      return null;
    }
  }

  static async sendLoginNotification(userId: string | number, name: string): Promise<boolean> {
    const token = this.getBotToken();
    if (!token) return false;

    const appUrl = process.env.CLIENT_URL || 'https://farzandly.uz';
    const message = `🌿 <b>Farzandly platformasiga xush kelibsiz!</b>\n\nAssalomu alaykum, <b>${name}</b>.\nFarzandly hisobingizga muvaffaqiyatli kirdingiz.\n\n📚 O‘quv rejangizni davom ettiring:\n👉 <a href="${appUrl}/dashboard">${appUrl}/dashboard</a>`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: userId,
          text: message,
          parse_mode: 'HTML',
        }),
      });
      const data = await res.json();
      return Boolean(data.ok);
    } catch {
      return false;
    }
  }
}
