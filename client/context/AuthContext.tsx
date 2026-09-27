'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { calculateLevel, checkAchievements, calculateStreak } from '@/lib/gamification';
import type { ChildProfile } from '@/lib/children';
import { api, AUTH_TOKEN_KEY, AUTH_EXPIRED_EVENT } from '@/lib/api';
import { accountApi } from '@/lib/accountApi';

export interface TelegramUser {
  _id: string;
  telegramId?: string;
  telegramUsername?: string;
  email?: string;
  name: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  childAgeGroup: string;
  selectedInterests: string[];
  dailyGoalMinutes: number;
  xp: number;
  streak: number;
  level: string;
  completedLessons: string[];
  achievements: string[];
  subscriptionStatus: string;
  isPremium?: boolean;
  premiumType?: 'lifetime' | 'bonus';
  premiumExpiresAt?: string;
  hideFromLeaderboard?: boolean;
  role?: 'user' | 'admin';
  phone?: string;
  authProvider?: string;
  lastActiveDate?: string;
  children?: ChildProfile[];
  activeChildId?: string;
  partnerId?: string;
  partnerName?: string;
  partnerPhotoUrl?: string;
  partnerInviteCode?: string;
  familyRules?: string[];
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  referralBonusDays?: number;
}

type AuthResult = { success: boolean; message?: string };

interface AuthContextType {
  user: TelegramUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  /** True once when an old or expired session was dropped — drives the "please sign in again" banner. */
  sessionExpired: boolean;
  dismissSessionExpired: () => void;
  /** Raw Telegram Login Widget payload, passed through untouched so its signature stays valid. */
  loginWithTelegram: (tgData: Record<string, string | number>) => Promise<boolean>;
  loginWithMiniApp: () => Promise<boolean>;
  redeemLoginTicket: (ticket: string) => Promise<AuthResult>;
  loginWithEmail: (email: string, password: string) => Promise<AuthResult>;
  registerWithEmail: (name: string, email: string, password: string) => Promise<AuthResult>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  /** Optimistic local update; the server response should follow via applyServerUser. */
  updateUserProgress: (xpToAdd: number, lessonSlug: string) => void;
  applyServerUser: (serverUser: Partial<TelegramUser> | null | undefined) => void;
  updateUserProfile: (updates: Partial<TelegramUser>) => void;
  setAuthenticatedSession: (user: TelegramUser, token: string) => void;
  connectPartner: (inviteCode: string) => Promise<AuthResult>;
  disconnectPartner: () => Promise<boolean>;
  updateFamilyRules: (rules: string[]) => Promise<boolean>;
  syncChildren: (children: ChildProfile[], activeChildId?: string) => Promise<boolean>;
  applyReferralCode: (code: string) => Promise<AuthResult & { bonusDays?: number; xp?: number }>;
  setLeaderboardVisibility: (hidden: boolean) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_KEY = 'farzandly_auth_user';
const LEGACY_USER_KEY = 'farzandly_user';

const GUEST_USER: TelegramUser = {
  _id: 'guest-user',
  name: 'Ota-ona',
  childAgeGroup: '3-5',
  selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
  dailyGoalMinutes: 10,
  xp: 0,
  streak: 0,
  level: 'Boshlovchi',
  completedLessons: [],
  achievements: [],
  subscriptionStatus: 'free',
  authProvider: 'guest',
};

const isSignedToken = (t?: string | null): t is string => Boolean(t && t.startsWith('v1.'));

function persist(user: TelegramUser | null, token: string | null) {
  if (typeof window === 'undefined') return;
  try {
    if (user && token) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      localStorage.setItem(LEGACY_USER_KEY, JSON.stringify(user));
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(LEGACY_USER_KEY);
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }
  } catch {
    // storage unavailable (private mode) — session lives in memory only
  }
}

function getTelegramWebApp(): any {
  if (typeof window === 'undefined') return null;
  return (window as any).Telegram?.WebApp || null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);
  const tokenRef = useRef<string | null>(null);

  const setAuthenticatedSession = useCallback((authUser: TelegramUser, authToken: string) => {
    tokenRef.current = authToken;
    setUser(authUser);
    setToken(authToken);
    setSessionExpired(false);
    persist(authUser, authToken);
  }, []);

  const dropSession = useCallback((expired: boolean) => {
    tokenRef.current = null;
    setUser(GUEST_USER);
    setToken(null);
    persist(null, null);
    if (expired) setSessionExpired(true);
  }, []);

  /** Handles any { success, data: { token, user } } sign-in response. */
  const acceptAuthResponse = useCallback(
    (res: { success: boolean; message?: string; data?: any }): AuthResult => {
      if (res?.success && res.data?.token && res.data?.user) {
        setAuthenticatedSession(res.data.user, res.data.token);
        return { success: true, message: res.message };
      }
      return { success: false, message: res?.message || 'Kirishda xatolik yuz berdi' };
    },
    [setAuthenticatedSession]
  );

  const loginWithMiniApp = useCallback(async () => {
    const initData = getTelegramWebApp()?.initData;
    if (!initData) return false;
    return acceptAuthResponse(await accountApi.loginMiniApp(initData)).success;
  }, [acceptAuthResponse]);

  const refreshUser = useCallback(async () => {
    if (!isSignedToken(tokenRef.current)) return;
    const res = await accountApi.me();
    if (res.success && res.data) {
      setUser(res.data);
      persist(res.data, tokenRef.current);
    } else if (res.code === 'AUTH_REQUIRED') {
      dropSession(true);
    }
  }, [dropSession]);

  // Boot: restore the saved session, drop legacy unsigned ones, sign in through the Mini App if inside Telegram.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let savedUser: TelegramUser | null = null;
      let savedToken: string | null = null;
      try {
        savedToken = localStorage.getItem(AUTH_TOKEN_KEY);
        const raw = localStorage.getItem(USER_KEY);
        savedUser = raw ? JSON.parse(raw) : null;
      } catch {
        // ignore corrupted storage
      }

      const tg = getTelegramWebApp();
      if (tg) {
        tg.ready?.();
        tg.expand?.();
      }

      if (isSignedToken(savedToken) && savedUser) {
        tokenRef.current = savedToken;
        setUser(savedUser);
        setToken(savedToken);
        setIsLoading(false);
        refreshUser();
        return;
      }

      // An old unsigned token (or a stale user without one) no longer works — ask once to sign in again.
      const hadLegacySession = Boolean(savedToken || (savedUser && savedUser.authProvider !== 'guest'));
      if (hadLegacySession) {
        persist(null, null);
      }

      if (tg?.initData && !cancelled) {
        const ok = await loginWithMiniApp();
        if (ok) {
          setIsLoading(false);
          return;
        }
      }

      if (!cancelled) {
        setUser(GUEST_USER);
        if (hadLegacySession) setSessionExpired(true);
        setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Any API call that comes back 401 with our token means the session is gone.
  useEffect(() => {
    const onExpired = () => {
      if (tokenRef.current) dropSession(true);
    };
    window.addEventListener(AUTH_EXPIRED_EVENT, onExpired);
    return () => window.removeEventListener(AUTH_EXPIRED_EVENT, onExpired);
  }, [dropSession]);

  const loginWithTelegram = async (tgData: Record<string, string | number>) => {
    setIsLoading(true);
    const result = acceptAuthResponse(await accountApi.loginTelegramWidget(tgData));
    setIsLoading(false);
    return result.success;
  };

  const redeemLoginTicket = async (ticket: string) => acceptAuthResponse(await accountApi.redeemTicket(ticket));

  const loginWithEmail = async (email: string, password: string) => {
    setIsLoading(true);
    const result = acceptAuthResponse(await accountApi.loginEmail(email.trim().toLowerCase(), password));
    setIsLoading(false);
    return result;
  };

  const registerWithEmail = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    const cleanEmail = email.trim().toLowerCase();
    const result = acceptAuthResponse(
      await accountApi.registerEmail(name.trim() || cleanEmail.split('@')[0], cleanEmail, password)
    );
    setIsLoading(false);
    return result;
  };

  const logout = () => dropSession(false);

  const updateUserProfile = (updates: Partial<TelegramUser>) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      if (tokenRef.current) persist(updated, tokenRef.current);
      return updated;
    });
  };

  const applyServerUser = (serverUser: Partial<TelegramUser> | null | undefined) => {
    if (serverUser && serverUser._id) updateUserProfile(serverUser);
  };

  const updateUserProgress = (xpToAdd: number, lessonSlug: string) => {
    setUser((prev) => {
      if (!prev) return null;
      const alreadyDone = prev.completedLessons.includes(lessonSlug);
      const newXp = (prev.xp || 0) + (alreadyDone ? 0 : xpToAdd);
      const newCompleted = alreadyDone ? prev.completedLessons : [...prev.completedLessons, lessonSlug];
      const newStreak = calculateStreak(prev.lastActiveDate, prev.streak);
      const achResult = checkAchievements(newXp, newStreak, newCompleted, prev.achievements);
      const activeId = prev.activeChildId || prev.children?.[0]?.id;

      const updated: TelegramUser = {
        ...prev,
        xp: newXp,
        streak: newStreak,
        lastActiveDate: new Date().toISOString(),
        completedLessons: newCompleted,
        // Progress is also tracked per child so each child has their own learning path
        children: prev.children?.map((c) =>
          c.id === activeId && !c.completedLessons.includes(lessonSlug)
            ? { ...c, completedLessons: [...c.completedLessons, lessonSlug] }
            : c
        ),
        level: calculateLevel(newXp).level,
        achievements: achResult.unlocked,
      };
      if (tokenRef.current) persist(updated, tokenRef.current);
      return updated;
    });
  };

  const isAuthenticated = Boolean(user && token && user._id !== 'guest-user');

  const connectPartner = async (inviteCode: string) => {
    if (!isAuthenticated || !user) return { success: false, message: 'Iltimos, avval tizimga kiring' };
    const res = await api.connectPartner(user._id, inviteCode);
    if (res.success && res.data) {
      updateUserProfile({
        partnerId: res.data.partner.id,
        partnerName: res.data.partner.name,
        partnerPhotoUrl: res.data.partner.photoUrl,
        familyRules: res.data.familyRules || user.familyRules,
        children: res.data.children || user.children,
      });
      return { success: true, message: res.message };
    }
    return { success: false, message: res.message || 'Ulanish amalga oshmadi' };
  };

  const disconnectPartner = async () => {
    if (!isAuthenticated || !user) return false;
    await api.disconnectPartner(user._id).catch(() => null);
    updateUserProfile({ partnerId: undefined, partnerName: undefined, partnerPhotoUrl: undefined });
    return true;
  };

  const updateFamilyRules = async (rules: string[]) => {
    if (!user) return false;
    if (isAuthenticated) await api.updateFamilyRules(user._id, rules).catch(() => null);
    updateUserProfile({ familyRules: rules });
    return true;
  };

  const syncChildren = async (newChildren: ChildProfile[], newActiveChildId?: string) => {
    if (!user) return false;
    const actId = newActiveChildId || user.activeChildId || newChildren[0]?.id;
    if (isAuthenticated) await api.syncChildren(user._id, newChildren, actId).catch(() => null);
    updateUserProfile({ children: newChildren, activeChildId: actId });
    return true;
  };

  const applyReferralCode = async (code: string) => {
    if (!isAuthenticated || !user) return { success: false, message: 'Iltimos, avval tizimga kiring' };
    const res = await api.applyReferralCode(user._id, code);
    if (res.success) {
      // The bonus is granted by the server after the first completed lesson.
      updateUserProfile({ referredBy: code.trim().toUpperCase() });
      return { success: true, message: res.message, bonusDays: res.bonusDays, xp: res.xp };
    }
    return { success: false, message: res.message };
  };

  const setLeaderboardVisibility = async (hidden: boolean) => {
    if (!isAuthenticated) return false;
    const res = await accountApi.updateSettings({ hideFromLeaderboard: hidden });
    if (res.success) applyServerUser(res.data);
    return res.success;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isLoading,
        sessionExpired,
        dismissSessionExpired: () => setSessionExpired(false),
        loginWithTelegram,
        loginWithMiniApp,
        redeemLoginTicket,
        loginWithEmail,
        registerWithEmail,
        logout,
        refreshUser,
        updateUserProgress,
        applyServerUser,
        updateUserProfile,
        setAuthenticatedSession,
        connectPartner,
        disconnectPartner,
        updateFamilyRules,
        syncChildren,
        applyReferralCode,
        setLeaderboardVisibility,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
