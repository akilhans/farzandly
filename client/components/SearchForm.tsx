'use client';

import { Search } from 'lucide-react';
import { useI18n } from '@/context/LanguageContext';

// Plain GET form — works without JavaScript and is what the WebSite SearchAction points at.
export default function SearchForm({ defaultValue = '', autoFocus = false, className = '' }: { defaultValue?: string; autoFocus?: boolean; className?: string }) {
  const { t } = useI18n();
  return (
    <form action="/qidiruv" method="get" role="search" className={`relative ${className}`}>
      <label htmlFor="site-search" className="sr-only">{t('search.aria')}</label>
      <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      <input
        id="site-search"
        name="q"
        type="search"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        minLength={2}
        maxLength={80}
        placeholder={t('search.ph')}
        className="w-full bg-white border-2 border-slate-200 focus:border-emerald-500 outline-none rounded-2xl pl-12 pr-24 sm:pr-28 py-3.5 text-sm sm:text-base font-medium text-slate-800 placeholder:text-slate-400"
      />
      <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2 cursor-pointer">
        {t('search.btn')}
      </button>
    </form>
  );
}
