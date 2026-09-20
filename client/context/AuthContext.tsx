'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface TelegramUser {
  _id: string;
  telegramId?: string;
  telegramUsername?: string;
  name: string;
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
  authProvider?: string;
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
  loginDemoTelegram: (persona?: 'aziza' | 'jasur' | 'dilnoza') => Promise<void>;
  logout: () => void;
  updateUserProgress: (xpToAdd: number, lessonSlug: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

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
      } else {
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
          completedLessons: ['bolani-tushunishdan-boshlang'],
          achievements: ['ilk-qadam'],
          subscriptionStatus: 'free',
          authProvider: 'guest',
        };
        setUser(defaultGuest);
      }
      setIsLoading(false);
    }
  }, []);

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
    try {
      const res = await fetch(`${API_BASE}/auth/telegram`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tgData),
      });

      if (res.ok) {
        const json = await res.json();
        const loggedUser = json.data.user;
        const authToken = json.data.token;

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

    // Client fallback if offline
    const fallbackUser: TelegramUser = {
      _id: `tg_${tgData.id}`,
      telegramId: String(tgData.id),
      telegramUsername: tgData.username || '',
      name: `${tgData.first_name || 'Ota-ona'} ${tgData.last_name || ''}`.trim(),
      photoUrl: tgData.photo_url || '',
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
      dailyGoalMinutes: 10,
      xp: 30,
      streak: 4,
      level: "O‘rganuvchi",
      completedLessons: ['bolani-tushunishdan-boshlang'],
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

  const loginDemoTelegram = async (persona: 'aziza' | 'jasur' | 'dilnoza' = 'aziza') => {
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
      const newXp = prev.xp + xpToAdd;
      const newCompleted = prev.completedLessons.includes(lessonSlug)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonSlug];

      let newLevel = prev.level;
      if (newXp >= 100) newLevel = 'Tajribali ota-ona';
      else if (newXp >= 50) newLevel = 'Ongli ota-ona';
      else if (newXp >= 20) newLevel = "O‘rganuvchi";

      const updated = {
        ...prev,
        xp: newXp,
        completedLessons: newCompleted,
        level: newLevel,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('farzandly_auth_user', JSON.stringify(updated));
        localStorage.setItem('farzandly_user', JSON.stringify(updated));
      }
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: user?.authProvider === 'telegram',
        isLoading,
        loginWithTelegram,
        loginDemoTelegram,
        logout,
        updateUserProgress,
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
