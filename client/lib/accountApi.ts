import { authFetch } from './api';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

type Json = { success: boolean; message?: string; code?: string; data?: any };

async function call(path: string, init: RequestInit = {}): Promise<Json> {
  try {
    const res = await authFetch(`${API_BASE}${path}`, {
      ...init,
      headers: { 'Content-Type': 'application/json', ...((init.headers as Record<string, string>) || {}) },
    });
    try {
      return await res.json();
    } catch {
      return { success: false, message: `Xatolik (${res.status})` };
    }
  } catch {
    return { success: false, code: 'NETWORK', message: 'Server bilan aloqa yo‘q. Internetni tekshiring.' };
  }
}

const post = (path: string, body?: unknown) => call(path, { method: 'POST', body: JSON.stringify(body ?? {}) });

export interface LeaderboardEntry {
  rank: number;
  name: string;
  photoUrl: string | null;
  xp: number;
  streak: number;
  level: string;
  isCurrentUser: boolean;
}

export interface LeaderboardData {
  period: 'week' | 'all';
  weekStart: string | null;
  entries: LeaderboardEntry[];
  me: { rank: number; xp: number } | null;
}

export interface PaymentRequest {
  _id: string;
  userId: string;
  userName?: string;
  telegramUsername?: string;
  amount: number;
  plan?: 'lifetime' | 'gift';
  status: 'pending' | 'approved' | 'rejected';
  note?: string;
  rejectReason?: string;
  createdAt: string;
  reviewedAt?: string;
}

export interface GiftCodeInfo {
  code: string;
  status: 'active' | 'redeemed';
  redeemedByName?: string;
  redeemedAt?: string;
  createdAt: string;
  botLink?: string;
  webLink?: string;
  shareUrl?: string;
}

export type BroadcastSegment = 'all' | 'free' | 'premium' | 'active' | 'inactive';

export interface BroadcastInput {
  text: string;
  segment: BroadcastSegment;
  ageGroup?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface BroadcastRecord extends BroadcastInput {
  _id: string;
  status: 'running' | 'done' | 'interrupted';
  total: number;
  sent: number;
  failed: number;
  blocked: number;
  actorName?: string;
  createdAt: string;
  finishedAt?: string;
}

/** Auth + account endpoints that need the signed session token. */
export const accountApi = {
  // --- sign-in flows that return { token, user } ---
  loginTelegramWidget: (data: Record<string, unknown>) => post('/auth/telegram', data),
  loginMiniApp: (initData: string) => post('/auth/telegram/miniapp', { initData }),
  redeemTicket: (ticket: string) => post('/auth/telegram/ticket', { ticket }),
  exchangeOidcCode: (code: string) => post('/auth/telegram/exchange', { code }),
  loginEmail: (email: string, password: string) => post('/auth/email/login', { email, password }),
  registerEmail: (name: string, email: string, password: string) => post('/auth/email/register', { name, email, password }),
  loginAdmin: (username: string, password: string) => post('/auth/admin-login', { username, password }),
  me: () => call('/auth/me'),

  // --- account ---
  leaderboard: (period: 'week' | 'all') => call(`/leaderboard?period=${period}`),
  updateSettings: (settings: { hideFromLeaderboard: boolean }) => post('/users/settings', settings),

  // --- payments ---
  paymentConfig: () => call('/payments/config'),
  createPayment: (note?: string, amount?: number, gift = false) => post('/payments', { note, amount, gift }),
  myPayments: () => call('/payments/mine'),

  // --- gifts ---
  myGifts: () => call('/gifts/mine'),
  redeemGift: (code: string) => post('/gifts/redeem', { code }),

  // --- admin ---
  adminStats: () => call('/admin/stats'),
  adminPayments: (status = 'pending', page = 1) => call(`/admin/payments?status=${status}&page=${page}`),
  adminReviewPayment: (id: string, decision: 'approve' | 'reject', reason?: string) =>
    post(`/admin/payments/${id}/review`, { decision, reason }),
  adminUsers: (q = '', page = 1, filter = 'all', sort = 'newest') =>
    call(`/admin/users?q=${encodeURIComponent(q)}&page=${page}&filter=${filter}&sort=${sort}`),
  adminUserDetail: (id: string) => call(`/admin/users/${id}`),
  adminSetPremium: (id: string, action: 'lifetime' | 'revoke' | 'bonus', days?: number, reason?: string) =>
    post(`/admin/users/${id}/premium`, { action, days, reason }),
  adminAudit: (limit = 50) => call(`/admin/audit?limit=${limit}`),
  adminBroadcasts: () => call('/admin/broadcasts'),
  adminBroadcastAudience: (segment: BroadcastSegment, ageGroup = '') =>
    call(`/admin/broadcasts/audience?segment=${segment}&ageGroup=${encodeURIComponent(ageGroup)}`),
  adminBroadcast: (input: BroadcastInput, test = false) => post('/admin/broadcasts', { ...input, test }),
};
