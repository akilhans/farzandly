'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
import {
  User as UserIcon,
  Flame,
  Star,
  Award,
  Zap,
  CheckCircle,
  Crown,
  BookOpen,
  Calendar,
  Lock,
  Send,
  LogOut,
  ShieldCheck,
  Camera,
  Upload,
  Info,
  Trophy,
  Settings,
  Sliders,
  Volume2,
  VolumeX,
  Bell,
  Globe,
  Check,
  Save,
  Baby,
  Clock,
  Heart,
  ChevronRight,
  Plus,
  X,
} from 'lucide-react';
import { api, Achievement } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/LanguageContext';
import UserAvatar from '@/components/UserAvatar';
import { AGE_GROUP_OPTIONS, MAX_CHILDREN, normalizeAgeGroup, type ChildProfile } from '@/lib/children';
import { calculateLevel, playChimeSound } from '@/lib/gamification';
import { T } from '@/components/T';

const BOT_USERNAME = (process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || '').replace(/^@/, '');

export default function ProfilePage() {
  const { user, isAuthenticated, logout, updateUserProfile } = useAuth();
  const { language, setLanguage, t } = useI18n();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'settings'>('overview');

  // Achievements
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  // Settings form state
  const [formName, setFormName] = useState(user?.name || '');
  const [formPhone, setFormPhone] = useState(user?.phone || '');
  const [formTelegramUsername, setFormTelegramUsername] = useState(user?.telegramUsername || '');
  const [formAgeGroup, setFormAgeGroup] = useState(normalizeAgeGroup(user?.childAgeGroup));
  const [formChildren, setFormChildren] = useState<ChildProfile[]>(user?.children || []);
  const [formActiveChildId, setFormActiveChildId] = useState(user?.activeChildId || '');
  const [newChildName, setNewChildName] = useState('');
  const [formDailyGoal, setFormDailyGoal] = useState<number>(user?.dailyGoalMinutes || 10);
  const [formInterests, setFormInterests] = useState<string[]>(
    user?.selectedInterests && user.selectedInterests.length > 0
      ? user.selectedInterests
      : ['Bola xulqi', 'Hissiyotlar', 'Islomiy tarbiya']
  );

  // Sound preference state
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Save toast notification
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    async function loadAchievements() {
      const ach = await api.getAchievements(language);
      setAchievements(ach || []);
      setLoading(false);
    }
    loadAchievements();

    if (typeof window !== 'undefined') {
      const soundPref = localStorage.getItem('farzandly_sound_enabled');
      if (soundPref === 'false') setSoundEnabled(false);
    }
  }, [language]);

  // Synchronize state when user changes
  useEffect(() => {
    if (user) {
      setFormName(user.name || '');
      setFormPhone(user.phone || '');
      setFormTelegramUsername(user.telegramUsername || '');
      setFormAgeGroup(normalizeAgeGroup(user.childAgeGroup));
      setFormChildren(user.children || []);
      setFormActiveChildId(user.activeChildId || '');
      setFormDailyGoal(user.dailyGoalMinutes || 10);
      if (user.selectedInterests && user.selectedInterests.length > 0) {
        setFormInterests(user.selectedInterests);
      }
    }
  }, [user]);

  const completed = user?.completedLessons || [];
  const xp = user?.xp || 0;
  const streak = user?.streak || 0;
  const levelInfo = calculateLevel(xp, language);
  const level = levelInfo.level; // localized from XP

  const isPrem = Boolean(
    (user?.isPremium || user?.subscriptionStatus === 'premium') &&
    (!user?.premiumExpiresAt || new Date(user.premiumExpiresAt).getTime() > Date.now())
  );

  const isAdmin = user?.telegramUsername?.toLowerCase() === 'dadakhonov' || user?.role === 'admin';

  // Toggle interest
  const toggleInterest = (interest: string) => {
    setFormInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  // Sound toggle handler
  const handleSoundToggle = (enabled: boolean) => {
    setSoundEnabled(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem('farzandly_sound_enabled', String(enabled));
    }
    if (enabled) {
      playChimeSound('correct');
    }
  };

  // --- Child profiles ---
  const selectAgeGroup = (code: string) => {
    setFormAgeGroup(code);
    if (formActiveChildId) {
      setFormChildren((prev) => prev.map((c) => (c.id === formActiveChildId ? { ...c, ageGroup: code } : c)));
    }
  };

  const selectChild = (child: ChildProfile) => {
    setFormActiveChildId(child.id);
    setFormAgeGroup(child.ageGroup);
  };

  const addChild = () => {
    const name = newChildName.trim();
    if (!name || formChildren.length >= MAX_CHILDREN) return;
    const child: ChildProfile = { id: `child_${Date.now()}`, name, ageGroup: formAgeGroup, completedLessons: [] };
    setFormChildren((prev) => [...prev, child]);
    setFormActiveChildId(child.id);
    setNewChildName('');
  };

  const removeChild = (id: string) => {
    const remaining = formChildren.filter((c) => c.id !== id);
    setFormChildren(remaining);
    if (formActiveChildId === id) {
      setFormActiveChildId(remaining[0]?.id || '');
      if (remaining[0]) setFormAgeGroup(remaining[0].ageGroup);
    }
  };

  // Save Settings Handler
  const handleSaveSettings = () => {
    updateUserProfile({
      name: formName.trim() || 'Ota-ona',
      phone: formPhone.trim(),
      telegramUsername: formTelegramUsername.trim().replace(/^@/, ''),
      childAgeGroup: formAgeGroup,
      children: formChildren,
      activeChildId: formActiveChildId || undefined,
      dailyGoalMinutes: formDailyGoal,
      selectedInterests: formInterests,
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem('farzandly_sound_enabled', String(soundEnabled));
    }

    if (soundEnabled) {
      playChimeSound('bonus');
    }

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const ageGroupOptions = AGE_GROUP_OPTIONS;

  const availableInterests = [
    'Bola xulqi',
    'Hissiyotlar va injiqlik',
    'Islomiy tarbiya',
    'Aqliy salohiyat',
    'Salomatlik va ovqatlanish',
    'Gadjetlar va ekran vaqti',
    'Fitrat pedagogikasi',
    'Mustaqillik va jasorat',
    'Kitobxonlik madaniyati',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 relative">
      {/* Ambient background blur */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Save Success Toast */}
      <AnimatePresence>
        {saveSuccess && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 sm:right-8 z-50 bg-emerald-700 text-white px-5 py-3 rounded-2xl shadow-xl border-2 border-emerald-500 flex items-center gap-2.5 font-bold text-sm"
          >
            <CheckCircle className="w-5 h-5 text-emerald-300" />
            <span><T k="prof.1" /></span>
          </m.div>
        )}
      </AnimatePresence>

      {/* Profile Header Card */}
      <m.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6"
      >
        <div className="relative group shrink-0">
          <UserAvatar
            name={user?.name}
            photoUrl={user?.photoUrl}
            telegramUsername={user?.telegramUsername}
            size="xl"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 bg-stone-900/80 hover:bg-stone-950 text-white p-2 rounded-2xl shadow-lg border-2 border-white transition-all cursor-pointer hover:scale-110"
            title="Rasmni almashtirish"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = (uploadEvent) => {
                const result = uploadEvent.target?.result as string;
                if (result) {
                  updateUserProfile({ photoUrl: result });
                }
              };
              reader.readAsDataURL(file);
            }}
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-800">
                  {user?.name || 'Ota-ona'}
                </h1>

                {/* Status Badges */}
                {isPrem ? (
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 fill-amber-700" />
                    <T k="prof.2" /></span>
                ) : (
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    <T k="prof.3" /></span>
                )}

                {isAdmin && (
                  <span className="bg-purple-100 text-purple-900 border border-purple-300 text-xs font-black px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <T k="prof.4" /></span>
                )}

                {isAuthenticated && (
                  <span className="bg-sky-50 text-[#229ED9] border border-sky-200 text-xs font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <Send className="w-3 h-3 -rotate-12" />
                    <T k="prof.5" /></span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {user?.telegramUsername && !user?.name?.startsWith('@') ? (
                  <span className="font-bold text-[#229ED9]">@{user.telegramUsername} • </span>
                ) : null}
                <T k="prof.6" />{" "}<span className="font-bold text-slate-700">{user?.childAgeGroup || '3-5'} <T k="prof.7" /></span> <T k="prof.8" />{" "}<span className="font-bold text-slate-700">{user?.dailyGoalMinutes || 10} <T k="prof.9" /></span>
              </p>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                  <span><T k="prof.10" /></span>
                </Link>
              )}

              <span className="inline-flex items-center gap-1.5 bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-xs">
                <Award className="w-4 h-4 text-emerald-600" />
                {level}
              </span>

              {isAuthenticated && (
                <button
                  type="button"
                  onClick={logout}
                  className="p-2 rounded-xl border-2 border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all cursor-pointer"
                  title="Chiqish"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Progress to Next Level Bar */}
          <div className="pt-2 space-y-1.5 max-w-md">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="text-slate-700">{levelInfo.level} ({levelInfo.levelIndex}<T k="prof.11" /></span>
              <span className="text-emerald-700">{xp} / {levelInfo.nextLevelXp} <T k="prof.12" /></span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <m.div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${levelInfo.progressPercent}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </m.div>

      {/* Navigation Tabs: Overview vs Settings */}
      <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-1">
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span><T k="prof.13" /></span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('settings')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span><T k="prof.14" /></span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & ACHIEVEMENTS */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <m.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
              <div className="w-10 h-10 mx-auto rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-1.5">
                <Flame className="w-6 h-6 fill-orange-500" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-slate-800">{streak} <T k="prof.15" /></span>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase"><T k="prof.16" /></p>
            </m.div>

            <m.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
                <Star className="w-6 h-6 fill-amber-500" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-slate-800">{xp} <T k="prof.17" /></span>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase"><T k="prof.18" /></p>
            </m.div>

            <m.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-slate-800">{completed.length} <T k="prof.19" /></span>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase"><T k="prof.20" /></p>
            </m.div>

            <m.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
              <div className="w-10 h-10 mx-auto rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
                <Trophy className="w-6 h-6 text-purple-600 fill-purple-400" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-slate-800">
                {achievements.filter((a) => (user?.achievements && user.achievements.includes(a.code)) || xp >= a.xpRequired).length} / {achievements.length}
              </span>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase"><T k="prof.21" /></p>
            </m.div>
          </div>

          {/* Achievements Grid */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                <T k="prof.22" /></h2>
              <p className="text-xs sm:text-sm text-slate-500">
                <T k="prof.23" /></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((ach) => {
                const isUnlocked =
                  (user?.achievements && user.achievements.includes(ach.code)) ||
                  (xp >= ach.xpRequired && (!ach.streakRequired || streak >= ach.streakRequired));
                const progress = Math.min(100, Math.round((xp / Math.max(1, ach.xpRequired)) * 100));

                return (
                  <m.div
                    key={ach.code}
                    whileHover={{ scale: isUnlocked ? 1.01 : 1 }}
                    className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                      isUnlocked
                        ? 'border-emerald-300 bg-emerald-50/50 shadow-xs'
                        : 'border-slate-200 bg-slate-50/80'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        isUnlocked
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {isUnlocked ? <Award className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-slate-800 text-sm">{ach.title}</h3>
                        {isUnlocked ? (
                          <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                            <T k="prof.24" /></span>
                        ) : (
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-200/70 px-2 py-0.5 rounded-md">
                            {progress}%
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{ach.description}</p>
                      <div className="space-y-1 pt-1">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                          <span><T k="prof.25" />{" "}{ach.xpRequired} <T k="prof.26" />{" "}{ach.streakRequired > 0 && `• ${t('prof.streak_days', undefined, { n: ach.streakRequired })}`}</span>
                        </div>
                        {!isUnlocked && (
                          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${progress}%` }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SOZLAMALAR (SETTINGS) */}
      {activeTab === 'settings' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Section A: Shaxsiy ma'lumotlar */}
          <div className="card-farzandly p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-slate-800 font-black text-lg border-b border-slate-100 pb-3">
              <UserIcon className="w-5 h-5 text-emerald-600" />
              <h2><T k="prof.27" /></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  <T k="prof.28" /></label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={t('prof.name_ph')}
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-hidden focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  <T k="prof.29" /></label>
                <input
                  type="tel"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder="+998 90 123 45 67"
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-hidden focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-slate-700 block">
                  <T k="prof.30" /></label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    value={formTelegramUsername}
                    onChange={(e) => setFormTelegramUsername(e.target.value)}
                    placeholder="username"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-sm font-medium focus:outline-hidden focus:border-emerald-500 transition-all"
                  />
                </div>
                <p className="text-[11px] text-slate-400">
                  <T k="prof.31" /></p>
              </div>
            </div>
          </div>

          {/* Section B: Farzand va ta'lim sozlamalari */}
          <div className="card-farzandly p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-slate-800 font-black text-lg border-b border-slate-100 pb-3">
              <Baby className="w-5 h-5 text-emerald-600" />
              <h2><T k="prof.32" /></h2>
            </div>

            {/* Farzandlar (child profiles) */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 block">
                <T k="prof.33" /></label>
              <div className="flex flex-wrap gap-2">
                {formChildren.map((child) => {
                  const isActive = child.id === (formActiveChildId || formChildren[0]?.id);
                  return (
                    <div
                      key={child.id}
                      className={`inline-flex items-center rounded-2xl border-2 text-xs font-bold overflow-hidden ${
                        isActive ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      <button type="button" onClick={() => selectChild(child)} className="px-3 py-1.5 flex items-center gap-1.5 cursor-pointer">
                        <Baby className="w-3.5 h-3.5" />
                        <span>{child.name}</span>
                        <span className="text-slate-400">{child.ageGroup}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => removeChild(child.id)}
                        aria-label={t('prof.remove_child', undefined, { name: child.name })}
                        className="px-2 py-1.5 text-slate-400 hover:text-red-600 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
                {formChildren.length === 0 && (
                  <p className="text-xs text-slate-500"><T k="prof.34" /></p>
                )}
              </div>
              {formChildren.length < MAX_CHILDREN && (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newChildName}
                    maxLength={30}
                    onChange={(e) => setNewChildName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addChild();
                      }
                    }}
                    placeholder="Farzand ismi"
                    className="flex-1 bg-white border-2 border-slate-200 focus:border-emerald-500 outline-none rounded-xl px-3 py-2 text-sm font-medium"
                  />
                  <button
                    type="button"
                    onClick={addChild}
                    disabled={!newChildName.trim()}
                    className="btn-primary text-xs px-4 py-2.5 gap-1 disabled:opacity-50 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> <T k="prof.35" /></button>
                </div>
              )}
            </div>

            {/* Yosh guruhi */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                <T k="prof.36" /></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {ageGroupOptions.map((ag) => {
                  const isSelected = formAgeGroup === ag.code;
                  return (
                    <button
                      key={ag.code}
                      type="button"
                      onClick={() => selectAgeGroup(ag.code)}
                      className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/80 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-black text-slate-800 flex items-center justify-between">
                        <span>{t(`age.label.${ag.code}`, ag.label)}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{t(`age.desc.${ag.code}`, ag.desc)}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Kunlik ta'lim maqsadi */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-700 block">
                <T k="prof.37" /></label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[5, 10, 15, 20].map((min) => {
                  const isSelected = formDailyGoal === min;
                  return (
                    <button
                      key={min}
                      type="button"
                      onClick={() => setFormDailyGoal(min)}
                      className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-base font-black">{min} <T k="prof.38" /></div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {min === 5 ? 'Boshlang‘ich' : min === 10 ? 'Tavsiya etiladi' : min === 15 ? 'Faol ota-ona' : 'Intensiv'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Qiziqish mavzulari */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-700 block">
                <T k="prof.39" /></label>
              <div className="flex flex-wrap gap-2">
                {availableInterests.map((interest, interestIdx) => {
                  const isSelected = formInterests.includes(interest);
                  return (
                    <button
                      key={t(`interest.${interestIdx}`, interest)}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                      <span>{interest}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section C: Ilova parametrlari & Ovoz */}
          <div className="card-farzandly p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-slate-800 font-black text-lg border-b border-slate-100 pb-3">
              <Sliders className="w-5 h-5 text-emerald-600" />
              <h2><T k="prof.40" /></h2>
            </div>

            {/* Tilni tanlash */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800"><T k="prof.41" /></div>
                  <div className="text-xs text-slate-500"><T k="prof.42" /></div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200">
                {[
                  { code: 'uz', label: 'O‘zbek' },
                  { code: 'en', label: 'English' },
                  { code: 'ru', label: 'Русский' },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setLanguage(lang.code as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      language === lang.code
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ovozli effektlar (Chimes) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600">
                  {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800"><T k="prof.43" /></div>
                  <div className="text-xs text-slate-500"><T k="prof.44" /></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => playChimeSound('correct')}
                  className="btn-outline text-[11px] px-2.5 py-1.5 cursor-pointer"
                  title={t('prof.sound_try')}
                >
                  <T k="prof.45" /></button>
                <button
                  type="button"
                  onClick={() => handleSoundToggle(!soundEnabled)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    soundEnabled
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {soundEnabled ? 'Yoqilgan' : 'O‘chirilgan'}
                </button>
              </div>
            </div>

            {/* Kunlik eslatma */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800"><T k="prof.46" /></div>
                  <div className="text-xs text-slate-500"><T k="prof.47" /></div>
                </div>
              </div>

              {BOT_USERNAME ? (
                <a
                  href={`https://t.me/${BOT_USERNAME}?start=eslatma`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-4 py-2.5 gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> <T k="prof.48" /></a>
              ) : (
                <span className="text-xs font-bold text-slate-500"><T k="prof.49" />{" "}<code><T k="prof.50" /></code> <T k="prof.51" /></span>
              )}
            </div>
          </div>

          {/* Section D: Obuna va Hisob */}
          <div className="card-farzandly p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2.5 text-slate-800 font-black text-lg border-b border-slate-100 pb-3">
              <Crown className="w-5 h-5 text-amber-500" />
              <h2><T k="prof.52" /></h2>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-md">
                    {isPrem ? t('prof.prem_active') : t('prof.free_plan')}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
                  {isPrem
                    ? `${t('prof.prem_desc')} ${
                        user?.premiumExpiresAt
                          ? t('prof.prem_expires', undefined, {
                              date: new Date(user.premiumExpiresAt).toLocaleDateString(
                                language === 'ru' ? 'ru-RU' : language === 'en' ? 'en-GB' : 'uz-UZ'
                              ),
                            })
                          : t('prof.prem_forever')
                      }`
                    : t('prof.free_desc')}
                </p>
              </div>

              {!isPrem && (
                <Link
                  href="/premium"
                  className="btn-gold text-xs sm:text-sm px-4 py-2.5 inline-flex items-center justify-center gap-2 text-slate-950 font-black shrink-0 cursor-pointer shadow-md"
                >
                  <Crown className="w-4 h-4 fill-slate-950" />
                  <span><T k="prof.53" /></span>
                </Link>
              )}
            </div>

            {isAdmin && (
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between gap-3">
                <div className="text-xs text-purple-900 font-medium">
                  <T k="prof.54" /></div>
                <Link
                  href="/admin"
                  className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl shrink-0"
                >
                  <T k="prof.55" /></Link>
              </div>
            )}
          </div>

          {/* Section E: Saqlash tugmasi */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleSaveSettings}
              className="w-full sm:w-auto btn-primary text-sm sm:text-base px-8 py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span><T k="prof.56" /></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
