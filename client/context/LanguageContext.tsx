'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import uz from '@/lib/i18n/uz';

export type Language = 'uz' | 'en' | 'ru';
export const LANGUAGES: Language[] = ['uz', 'en', 'ru'];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

type Dict = Record<string, string>;

// Uzbek is the default and always bundled; en/ru are fetched only when actually used.
const loaders: Record<Exclude<Language, 'uz'>, () => Promise<{ default: Dict }>> = {
  en: () => import('@/lib/i18n/en'),
  ru: () => import('@/lib/i18n/ru'),
};
const cache: Partial<Record<Language, Dict>> = { uz };

const isLanguage = (v: unknown): v is Language => typeof v === 'string' && (LANGUAGES as string[]).includes(v);

/** Saved choice wins; otherwise follow the browser language (ru/en), defaulting to Uzbek. */
function detectLanguage(): Language {
  try {
    const saved = localStorage.getItem('farzandly_lang');
    if (isLanguage(saved)) return saved;
  } catch {
    // storage unavailable
  }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : '').slice(0, 2).toLowerCase();
  return nav === 'ru' || nav === 'en' ? nav : 'uz';
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'uz',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('uz');
  const [dict, setDict] = useState<Dict>(uz);

  const activate = useCallback(async (lang: Language) => {
    if (!cache[lang] && lang !== 'uz') {
      try {
        cache[lang] = (await loaders[lang]()).default;
      } catch {
        return; // network hiccup: stay on the current language
      }
    }
    setDict(cache[lang] || uz);
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    const initial = detectLanguage();
    if (initial !== 'uz') void activate(initial);
  }, [activate]);

  const setLanguage = useCallback(
    (lang: Language) => {
      void activate(lang);
      try {
        localStorage.setItem('farzandly_lang', lang);
        document.cookie = `farzandly_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      } catch {
        // storage unavailable
      }
    },
    [activate]
  );

  const t = useCallback(
    (key: string, fallback?: string): string => dict[key] || uz[key] || fallback || key,
    [dict]
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}
