'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { calculateLevel, checkAchievements, calculateStreak } from '@/lib/gamification';
import type { ChildProfile } from '@/lib/children';
import { api } from '@/lib/api';

/** Only a real Mongo _id can be looked up on the server — synthetic ids (guest-user, tg-123, demo-user) can't. */
const isServerBackedId = (id?: string) => Boolean(id && /^[0-9a-fA-F]{24}$/.test(id));

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
  premiumExpiresAt?: string;
  role?: 'user' | 'admin';
  phone?: string;
  authProvider?: string;
  lastActiveDate?: string;
  children?: ChildProfile[];
  activeChildId?: string;
}

interface AuthContextType {
  user: TelegramUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithTelegram: (tgData: {
    id: string | number;
    first_name?: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date?: number | string;
    hash?: string;
  }) => Promise<boolean>;
  loginWithEmail: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  registerWithEmail: (name: string, email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  loginDemoTelegram: (persona?: 'aziza' | 'jasur' | 'dilnoza' | 'dadakhonov') => Promise<void>;
  logout: () => void;
  updateUserProgress: (xpToAdd: number, lessonSlug: string) => void;
  updateUserProfile: (updates: Partial<TelegramUser>) => void;
  setAuthenticatedSession: (user: TelegramUser, token: string) => void;
  setPremiumStatus: (userIdOrUsername: string, durationMonths: number) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check saved session in localStorage
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('farzandly_auth_user');
      const savedToken = localStorage.getItem('farzandly_auth_token');

      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
          setToken(savedToken || null);
        } catch {
          // ignore corrupted json
        }
      }

      // Check if running inside Telegram WebApp / Mini App
      if ((window as any).Telegram?.WebApp) {
        const tgApp = (window as any).Telegram.WebApp;
        tgApp.ready?.();
        tgApp.expand?.();

        const tgUser = tgApp.initDataUnsafe?.user;
        if (tgUser && (!savedUser || JSON.parse(savedUser || '{}').authProvider === 'guest')) {
          const username = tgUser.username ? tgUser.username.replace(/^@/, '') : '';
          const displayName = username ? `@${username}` : `${tgUser.first_name || ''} ${tgUser.last_name || ''}`.trim() || 'Ota-ona';
          const photo = username ? `https://t.me/i/userpic/320/${username}.jpg` : undefined;

          const webAppUser: TelegramUser = {
            _id: `tg-${tgUser.id}`,
            telegramId: String(tgUser.id),
            telegramUsername: username,
            name: displayName,
            firstName: tgUser.first_name,
            lastName: tgUser.last_name,
            photoUrl: photo,
            childAgeGroup: '3-5',
            selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
            dailyGoalMinutes: 10,
            xp: 100,
            streak: 1,
            level: 'Boshlovchi',
            completedLessons: [],
            achievements: ['ilk-qadam'],
            subscriptionStatus: 'free',
            authProvider: 'telegram',
          };

          setUser(webAppUser);
          const autoToken = `farzandly_tg_${tgUser.id}_${Date.now()}`;
          setToken(autoToken);
          localStorage.setItem('farzandly_auth_user', JSON.stringify(webAppUser));
          localStorage.setItem('farzandly_auth_token', autoToken);
          setIsLoading(false);
          return;
        }
      }

      if (!savedUser) {
        // Fallback default guest user
        const defaultGuest: TelegramUser = {
          _id: 'guest-user',
          name: 'Ota-ona',
          childAgeGroup: '3-5',
          selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
          dailyGoalMinutes: 10,
          xp: 20,
          streak: 3,
          level: "O‘rganuvchi",
          completedLessons: [],
          achievements: ['ilk-qadam'],
          subscriptionStatus: 'free',
          authProvider: 'guest',
        };
        setUser(defaultGuest);
      }
      setIsLoading(false);
    }
  }, []);

  // Re-sync with the server's copy of the profile on load, so a device that only has a
  // stale cached snapshot (e.g. from an earlier login, before other devices/the bot moved
  // xp/streak/level forward) catches up instead of showing frozen local numbers forever.
  useEffect(() => {
    if (typeof window === 'undefined' || !isServerBackedId(user?._id)) return;
    let cancelled = false;

    api.getUserProgress(user!._id).then((progressData) => {
      if (cancelled || !progressData?.user) return;
      const freshUser = progressData.user as unknown as TelegramUser;
      setUser((prev) => (prev ? { ...prev, ...freshUser } : freshUser));
      localStorage.setItem('farzandly_auth_user', JSON.stringify(freshUser));
      localStorage.setItem('farzandly_user', JSON.stringify(freshUser));
    });

    return () => {
      cancelled = true;
    };
    // Re-run only when the logged-in account changes (login/logout), not on every local xp tick.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?._id]);

  const loginWithTelegram = async (tgData: {
    id: string | number;
    first_name?: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date?: number | string;
    hash?: string;
  }): Promise<boolean> => {
    setIsLoading(true);

    const rawUsername = tgData.username || '';
    const cleanUsername = rawUsername.replace(/^@/, '').trim();
    // Automatic sync: username as name
    const displayName = cleanUsername
      ? `@${cleanUsername}`
      : `${tgData.first_name || 'Ota-ona'} ${tgData.last_name || ''}`.trim();
    // Automatic sync: Telegram profile picture
    const photoUrl =
      tgData.photo_url ||
      (cleanUsername ? `https://t.me/i/userpic/320/${cleanUsername}.jpg` : '') ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=229ED9&color=fff&bold=true`;

    try {
      const res = await fetch(`${API_BASE}/auth/telegram`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...tgData,
          username: cleanUsername,
          first_name: displayName,
          photo_url: photoUrl,
        }),
      });

      if (res.ok) {
        const json = await res.json();
        const loggedUser = json.data.user;
        const authToken = json.data.token;

        // Guarantee profile pic and username as name sync
        if (cleanUsername) {
          loggedUser.telegramUsername = cleanUsername;
          if (!loggedUser.name || loggedUser.name === 'Ota-ona') {
            loggedUser.name = `@${cleanUsername}`;
          }
        }
        if (!loggedUser.photoUrl && photoUrl) {
          loggedUser.photoUrl = photoUrl;
        }

        setUser(loggedUser);
        setToken(authToken);

        if (typeof window !== 'undefined') {
          localStorage.setItem('farzandly_auth_user', JSON.stringify(loggedUser));
          localStorage.setItem('farzandly_auth_token', authToken);
          // Sync with old progress key too
          localStorage.setItem('farzandly_user', JSON.stringify(loggedUser));
        }
        setIsLoading(false);
        return true;
      }
    } catch (err) {
      console.warn('Telegram auth server call failed, using client-side session:', err);
    }

    // Client fallback if offline / in-flight
    const fallbackUser: TelegramUser = {
      _id: `tg_${tgData.id}`,
      telegramId: String(tgData.id),
      telegramUsername: cleanUsername,
      name: displayName,
      photoUrl: photoUrl,
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
      dailyGoalMinutes: 10,
      xp: 30,
      streak: 4,
      level: "O‘rganuvchi",
      completedLessons: [],
      achievements: ['ilk-qadam', 'uch-kunlik-streak'],
      subscriptionStatus: 'free',
      authProvider: 'telegram',
    };

    setUser(fallbackUser);
    setToken(`tg_token_${tgData.id}`);
    if (typeof window !== 'undefined') {
      localStorage.setItem('farzandly_auth_user', JSON.stringify(fallbackUser));
      localStorage.setItem('farzandly_auth_token', `tg_token_${tgData.id}`);
      localStorage.setItem('farzandly_user', JSON.stringify(fallbackUser));
    }
    setIsLoading(false);
    return true;
  };

  const registerWithEmail = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim() || cleanEmail.split('@')[0];

    try {
      const res = await fetch(`${API_BASE}/auth/email/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cleanName, email: cleanEmail, password }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        // Response was not JSON
      }

      if (res.ok && data?.success) {
        const loggedUser = data.data.user;
        const authToken = data.data.token;
        setUser(loggedUser);
        setToken(authToken);

        if (typeof window !== 'undefined') {
          localStorage.setItem('farzandly_auth_user', JSON.stringify(loggedUser));
          localStorage.setItem('farzandly_auth_token', authToken);
          localStorage.setItem('farzandly_user', JSON.stringify(loggedUser));
        }
        setIsLoading(false);
        return { success: true, message: data.message };
      }

      if (data && !data.success) {
        setIsLoading(false);
        return { success: false, message: data.message || 'Ro‘yxatdan o‘tishda xatolik yuz berdi' };
      }
    } catch (err: any) {
      console.warn('Register network request failed, falling back to client session:', err);
    }

    // Client-side fallback if network is unreachable
    try {
      if (typeof window !== 'undefined') {
        const fallbackUser: TelegramUser = {
          _id: `email_${Date.now()}`,
          email: cleanEmail,
          name: cleanName,
          photoUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`,
          childAgeGroup: '3-5',
          selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
          dailyGoalMinutes: 10,
          xp: 25,
          streak: 1,
          level: 'Boshlovchi',
          completedLessons: [],
          achievements: ['ilk-qadam'],
          subscriptionStatus: 'free',
          authProvider: 'email',
        };

        const fallbackToken = `email_token_${fallbackUser._id}_${Date.now()}`;
        setUser(fallbackUser);
        setToken(fallbackToken);
        localStorage.setItem('farzandly_auth_user', JSON.stringify(fallbackUser));
        localStorage.setItem('farzandly_auth_token', fallbackToken);
        localStorage.setItem('farzandly_user', JSON.stringify(fallbackUser));

        setIsLoading(false);
        return { success: true, message: 'Xush kelibsiz!' };
      }
    } catch {
      // Fallback failed
    }

    setIsLoading(false);
    return { success: false, message: 'Ro‘yxatdan o‘tishda xatolik yuz berdi. Qaytadan urinib ko‘ring.' };
  };

  const loginWithEmail = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    const cleanEmail = email.trim().toLowerCase();

    try {
      const res = await fetch(`${API_BASE}/auth/email/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        // Response was not JSON
      }

      if (res.ok && data?.success) {
        const loggedUser = data.data.user;
        const authToken = data.data.token;
        setUser(loggedUser);
        setToken(authToken);

        if (typeof window !== 'undefined') {
          localStorage.setItem('farzandly_auth_user', JSON.stringify(loggedUser));
          localStorage.setItem('farzandly_auth_token', authToken);
          localStorage.setItem('farzandly_user', JSON.stringify(loggedUser));
        }
        setIsLoading(false);
        return { success: true };
      }

      if (data && !data.success) {
        setIsLoading(false);
        return { success: false, message: data.message || 'Email yoki parol noto‘g‘ri' };
      }
    } catch (err: any) {
      console.warn('Login network request failed, falling back to client session:', err);
    }

    // Client-side fallback if network is unreachable
    try {
      if (typeof window !== 'undefined') {
        const displayName = cleanEmail.split('@')[0];
        const fallbackUser: TelegramUser = {
          _id: `email_${Date.now()}`,
          email: cleanEmail,
          name: displayName,
          photoUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(displayName)}`,
          childAgeGroup: '3-5',
          selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
          dailyGoalMinutes: 10,
          xp: 25,
          streak: 1,
          level: 'Boshlovchi',
          completedLessons: [],
          achievements: ['ilk-qadam'],
          subscriptionStatus: 'free',
          authProvider: 'email',
        };

        const fallbackToken = `email_token_${fallbackUser._id}_${Date.now()}`;
        setUser(fallbackUser);
        setToken(fallbackToken);
        localStorage.setItem('farzandly_auth_user', JSON.stringify(fallbackUser));
        localStorage.setItem('farzandly_auth_token', fallbackToken);
        localStorage.setItem('farzandly_user', JSON.stringify(fallbackUser));

        setIsLoading(false);
        return { success: true };
      }
    } catch {
      // Fallback failed
    }

    setIsLoading(false);
    return { success: false, message: 'Email yoki parol noto‘g‘ri' };
  };

  const loginDemoTelegram = async (persona: 'aziza' | 'jasur' | 'dilnoza' | 'dadakhonov' = 'aziza') => {
    const demoProfiles = {
      aziza: {
        id: 998901234567,
        first_name: 'Aziza',
        last_name: 'Rahimova',
        username: 'aziza_mama',
        photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      },
      jasur: {
        id: 998907654321,
        first_name: 'Jasur',
        last_name: 'Karimov',
        username: 'jasur_dada',
        photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      },
      dilnoza: {
        id: 998933334455,
        first_name: 'Dilnoza',
        last_name: 'Sobirova',
        username: 'dilnoza_pedagog',
        photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      },
      dadakhonov: {
        id: 777000111222,
        first_name: 'Dadakhonov',
        last_name: 'Admin',
        username: 'dadakhonov',
        photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      },
    };

    await loginWithTelegram(demoProfiles[persona]);
  };

  const logout = () => {
    setUser({
      _id: 'guest-user',
      name: 'Ota-ona',
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi'],
      dailyGoalMinutes: 10,
      xp: 0,
      streak: 1,
      level: 'Boshlovchi',
      completedLessons: [],
      achievements: [],
      subscriptionStatus: 'free',
      authProvider: 'guest',
    });
    setToken(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('farzandly_auth_user');
      localStorage.removeItem('farzandly_auth_token');
    }
  };

  const updateUserProgress = (xpToAdd: number, lessonSlug: string) => {
    setUser((prev) => {
      if (!prev) return null;
      const newXp = (prev.xp || 0) + xpToAdd;
      const newCompleted = prev.completedLessons.includes(lessonSlug)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonSlug];

      const newStreak = calculateStreak(prev.lastActiveDate, prev.streak);
      const levelInfo = calculateLevel(newXp);
      const achResult = checkAchievements(newXp, newStreak, newCompleted, prev.achievements);

      const updated: TelegramUser = {
        ...prev,
        xp: newXp,
        streak: newStreak,
        lastActiveDate: new Date().toISOString(),
        completedLessons: newCompleted,
        // Progress is also tracked per child so each child has their own learning path
        children: prev.children?.map((c) =>
          c.id === (prev.activeChildId || prev.children?.[0]?.id) && !c.completedLessons.includes(lessonSlug)
            ? { ...c, completedLessons: [...c.completedLessons, lessonSlug] }
            : c
        ),
        level: levelInfo.level,
        achievements: achResult.unlocked,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('farzandly_auth_user', JSON.stringify(updated));
        localStorage.setItem('farzandly_user', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const updateUserProfile = (updates: Partial<TelegramUser>) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      if (typeof window !== 'undefined') {
        localStorage.setItem('farzandly_auth_user', JSON.stringify(updated));
        localStorage.setItem('farzandly_user', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const setAuthenticatedSession = (authUser: TelegramUser, authToken: string) => {
    setUser(authUser);
    setToken(authToken);
    if (typeof window !== 'undefined') {
      localStorage.setItem('farzandly_auth_user', JSON.stringify(authUser));
      localStorage.setItem('farzandly_auth_token', authToken);
      localStorage.setItem('farzandly_user', JSON.stringify(authUser));
    }
  };

  const setPremiumStatus = async (userIdOrUsername: string, durationMonths: number): Promise<boolean> => {
    const cleanTarget = userIdOrUsername.trim().replace(/^@/, '');
    const now = new Date();
    const expiresAt = new Date(now);
    if (durationMonths === 12) {
      expiresAt.setDate(now.getDate() + 365);
    } else if (durationMonths === 1) {
      expiresAt.setDate(now.getDate() + 30);
    } else {
      expiresAt.setTime(0);
    }

    const isNowPremium = durationMonths > 0;
    const isoExpires = durationMonths > 0 ? expiresAt.toISOString() : undefined;

    // 1. If modifying current active session
    if (user && (user._id === userIdOrUsername || user.telegramUsername?.toLowerCase() === cleanTarget.toLowerCase())) {
      const updated: TelegramUser = {
        ...user,
        isPremium: isNowPremium,
        subscriptionStatus: isNowPremium ? 'premium' : 'free',
        premiumExpiresAt: isoExpires,
      };
      setUser(updated);
      if (typeof window !== 'undefined') {
        localStorage.setItem('farzandly_auth_user', JSON.stringify(updated));
      }
    }

    // 2. Persist in local user registry
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem('farzandly_users_registry') || '[]';
        const list: TelegramUser[] = JSON.parse(raw);
        const idx = list.findIndex(
          (u) => u._id === userIdOrUsername || u.telegramUsername?.toLowerCase() === cleanTarget.toLowerCase()
        );
        if (idx >= 0) {
          list[idx].isPremium = isNowPremium;
          list[idx].subscriptionStatus = isNowPremium ? 'premium' : 'free';
          list[idx].premiumExpiresAt = isoExpires;
        } else {
          list.push({
            _id: `user_${Date.now()}`,
            name: `@${cleanTarget}`,
            telegramUsername: cleanTarget,
            childAgeGroup: '3-5',
            selectedInterests: [],
            dailyGoalMinutes: 10,
            xp: 0,
            streak: 1,
            level: 'Boshlovchi ota-ona',
            completedLessons: [],
            achievements: [],
            subscriptionStatus: isNowPremium ? 'premium' : 'free',
            isPremium: isNowPremium,
            premiumExpiresAt: isoExpires,
          });
        }
        localStorage.setItem('farzandly_users_registry', JSON.stringify(list));
      } catch {
        // ignore
      }
    }

    // 3. Sync to backend API if available
    try {
      await fetch(`${API_BASE}/admin/set-premium`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userIdOrUsername: cleanTarget, durationMonths, expiresAt: isoExpires }),
      });
    } catch {
      // offline
    }

    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(user && user.authProvider !== 'guest' && user._id !== 'guest-user'),
        isLoading,
        loginWithTelegram,
        loginWithEmail,
        registerWithEmail,
        loginDemoTelegram,
        logout,
        updateUserProgress,
        updateUserProfile,
        setAuthenticatedSession,
        setPremiumStatus,
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
