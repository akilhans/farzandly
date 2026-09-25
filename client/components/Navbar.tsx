'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Flame,
  Star,
  Menu,
  X,
  Compass,
  Home,
  BookOpen,
  Layers,
  Crown,
  User as UserIcon,
  Send,
  LogOut,
  ChevronDown,
  Globe,
  Search,
  Baby,
  Activity,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useI18n, Language } from '@/context/LanguageContext';
import UserAvatar from '@/components/UserAvatar';
import { calculateLevel } from '@/lib/gamification';
import { T } from '@/components/T';
import FlagIcon from '@/components/FlagIcon';

export function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const { language, setLanguage, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages: Array<{ code: Language; label: string; flag: string }> = [
    { code: 'uz', label: 'O‘zbekcha', flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  const mobileNavLinks = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/dashboard', label: t('nav.dashboard'), icon: Compass },
    { href: '/darslar', label: t('nav.courses'), icon: Layers },
    { href: '/maqolalar', label: t('nav.articles'), icon: BookOpen },
    { href: '/bolalar', label: t('nav.kids', 'Bolalar olami'), icon: Baby },
    { href: '/salomatlik', label: t('nav.health', 'Salomatlik'), icon: Activity },
    { href: '/premium', label: t('nav.premium'), icon: Crown, highlight: true },
  ];

  const desktopNavLinks = [
    { href: '/dashboard', label: t('nav.dashboard'), icon: Compass },
    { href: '/darslar', label: t('nav.courses'), icon: Layers },
    { href: '/maqolalar', label: t('nav.articles'), icon: BookOpen },
    { href: '/bolalar', label: t('nav.kids', 'Bolalar olami'), icon: Baby },
    { href: '/salomatlik', label: t('nav.health', 'Salomatlik'), icon: Activity },
    { href: '/premium', label: t('nav.premium'), icon: Crown, highlight: true },
  ];

  if (pathname?.startsWith('/instagram')) return null;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-2 border-slate-200/70 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 lg:gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <m.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Farzandly"
                width={150}
                height={38}
                className="h-7 sm:h-8 w-auto min-[360px]:min-w-[104px] object-contain"
                priority
              />
            </m.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {desktopNavLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200 shadow-xs'
                      : item.highlight
                      ? 'text-amber-700 hover:bg-amber-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${item.highlight ? 'text-amber-500' : ''}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Stats / Language / Auth */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Gamification Stats (Streak & XP) */}
            <div className="hidden xl:flex items-center gap-1.5 sm:gap-2 bg-slate-50/80 backdrop-blur-xs border-2 border-slate-200/80 rounded-2xl px-2.5 py-1.5 shrink-0">
              <div className="flex items-center gap-1 text-xs font-bold text-amber-600" title={t('stats.streak')}>
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
                <span>{user?.streak ?? 1}</span>
              </div>
              <div className="w-[1px] h-3.5 bg-slate-300" />
              <div className="flex items-center gap-1 text-xs font-bold text-emerald-600" title={t('stats.xp')}>
                <Star className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                <span>{user?.xp ?? 0}</span>
              </div>
            </div>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl bg-slate-50/90 hover:bg-slate-100 border-2 border-slate-200 text-xs font-bold text-slate-700 transition-all cursor-pointer"
                title="Tilni tanlash / Select Language"
              >
                <FlagIcon country={currentLangObj.code} size="sm" />
                <span className="uppercase tracking-wider font-extrabold">{currentLangObj.code}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <m.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-2xl border-2 border-slate-200 shadow-xl p-1.5 z-50 space-y-0.5"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLanguage(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-xl transition-all text-left ${
                          language === l.code
                            ? 'bg-emerald-50 text-emerald-700 font-black'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <FlagIcon country={l.code} size="sm" />
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/qidiruv"
              aria-label="Qidiruv"
              className="hidden sm:inline-flex p-2 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Telegram Auth Status */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-500 transition-all text-left cursor-pointer"
                >
                  <UserAvatar
                    name={user.name}
                    photoUrl={user.photoUrl}
                    telegramUsername={user.telegramUsername}
                    size="sm"
                  />
                  <div className="hidden sm:block">
                    <p className="text-xs font-black text-slate-800 leading-tight truncate max-w-[120px]">
                      {user.name}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-bold leading-none flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      <T k="navx.1" /></p>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {profileDropdownOpen && (
                    <m.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-60 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-slate-200 shadow-xl p-2 z-50 space-y-1"
                    >
                      <div className="p-2.5 border-b border-slate-100 flex items-center gap-2.5">
                        <UserAvatar
                          name={user.name}
                          photoUrl={user.photoUrl}
                          telegramUsername={user.telegramUsername}
                          size="sm"
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-black text-slate-800 truncate">{user.name}</p>
                          <p className="text-[11px] text-emerald-600 font-bold">{calculateLevel(user.xp || 0, language).level}</p>
                        </div>
                      </div>

                      <Link
                        href="/profil"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                      >
                        <UserIcon className="w-4 h-4 text-emerald-600" />
                        <span><T k="navx.2" /></span>
                      </Link>

                      <Link
                        href="/dashboard"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                      >
                        <Compass className="w-4 h-4 text-emerald-600" />
                        <span><T k="navx.3" /></span>
                      </Link>

                      <div className="pt-1 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => {
                            logout();
                            setProfileDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span><T k="navx.4" /></span>
                        </button>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href="/kirish"
                className="whitespace-nowrap shrink-0 bg-[#229ED9] hover:bg-[#1f8ec4] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border-b-4 border-[#18729e] active:translate-y-1 active:border-b-0 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5 -rotate-12" />
                <span className="hidden 2xl:inline"><T k="navx.5" /> </span>
                <span><T k="navx.6" /></span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 shrink-0 cursor-pointer"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b-2 border-slate-200 px-4 pt-2 pb-6 space-y-2 overflow-hidden"
          >
            <Link
              href="/qidiruv"
              onClick={() => setMobileMenuOpen(false)}
              className="sm:hidden flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50"
            >
              <Search className="w-5 h-5" />
              <span>{t('search.btn')}</span>
            </Link>
            {mobileNavLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5 text-emerald-600" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <Link
                href="/profil"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold text-slate-700 hover:bg-slate-50"
              >
                <UserIcon className="w-5 h-5 text-emerald-600" />
                <span><T k="navx.7" /></span>
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-2 pb-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border-2 transition-all ${
                      language === l.code
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <FlagIcon country={l.code} size="sm" />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>

              {!isAuthenticated && (
                <Link
                  href="/kirish"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#229ED9] text-white font-black text-sm rounded-2xl shadow-sm"
                >
                  <Send className="w-4 h-4 -rotate-12" />
                  <span><T k="navx.8" /></span>
                </Link>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
