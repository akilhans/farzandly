'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { api, Achievement } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import UserAvatar from '@/components/UserAvatar';
import { calculateLevel } from '@/lib/gamification';

export default function ProfilePage() {
  const { user, isAuthenticated, logout, updateUserProfile } = useAuth();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAchievements() {
      const ach = await api.getAchievements();
      setAchievements(ach || []);
      setLoading(false);
    }
    loadAchievements();
  }, []);

  const completed = user?.completedLessons || [];
  const xp = user?.xp || 20;
  const streak = user?.streak || 3;
  const levelInfo = calculateLevel(xp);
  const level = user?.level || levelInfo.level;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 relative">
      {/* Ambient background blur */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Profile Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6"
      >
        <div className="relative group">
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

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 flex items-center justify-center sm:justify-start gap-2">
                <span>{user?.name || 'Ota-ona'}</span>
                {isAuthenticated && (
                  <span className="bg-sky-50 text-[#229ED9] border border-sky-200 text-xs font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <Send className="w-3 h-3 -rotate-12" />
                    Telegram
                  </span>
                )}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                {user?.telegramUsername && !user?.name?.startsWith('@') ? (
                  <span className="font-bold text-[#229ED9]">@{user.telegramUsername} • </span>
                ) : null}
                Farzand yoshi: <span className="font-bold text-slate-700">{user?.childAgeGroup || '3-5'} yosh</span> • Kunlik reja: <span className="font-bold text-slate-700">{user?.dailyGoalMinutes || 10} daqiqa</span>
              </p>
            </div>

            <div className="flex items-center gap-2 self-center sm:self-auto flex-wrap">
              {(user?.telegramUsername?.toLowerCase() === 'dadakhonov' || user?.role === 'admin') && (
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                  <span>Admin paneli</span>
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
              <span className="text-slate-700">{levelInfo.level} ({levelInfo.levelIndex}-daraja)</span>
              <span className="text-emerald-700">{xp} / {levelInfo.nextLevelXp} XP</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${levelInfo.progressPercent}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Telegram Avatar Tip */}
      {isAuthenticated && (
        <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-slate-600">
          <div className="p-2 rounded-xl bg-[#229ED9] text-white shrink-0 mt-0.5">
            <Send className="w-4 h-4 -rotate-12" />
          </div>
          <div className="space-y-1 flex-1">
            <p className="font-bold text-slate-800">
              Telegram profil rasmi qanday sinxronlanadi?
            </p>
            <p className="text-slate-500 leading-relaxed">
              Telegram ilovangizda <b>Sozlamalar &gt; Maxfiylik va xavfsizlik &gt; Profil rasmi</b> qismida <b>«Hamma»</b> tanlangan bo‘lsa, rasmingiz Farzandly ga avtomatik ulanadi. Yoki yuqoridagi kamera belgisi orqali xohlagan rasmingizni bevosita yuklashingiz mumkin.
            </p>
          </div>
        </div>
      )}

      {/* 4 Metric Cards with hover animations */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <motion.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-1.5">
            <Flame className="w-6 h-6 fill-orange-500" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-slate-800">{streak} kun</span>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Uzluksiz streak</p>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
            <Star className="w-6 h-6 fill-amber-500" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-slate-800">{xp} XP</span>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">To‘plangan ballar</p>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-slate-800">{completed.length} ta</span>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Darslar o‘tildi</p>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} className="card-farzandly p-4 sm:p-5 text-center space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
            <Trophy className="w-6 h-6 text-purple-600 fill-purple-400" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-slate-800">
            {achievements.filter((a) => (user?.achievements && user.achievements.includes(a.code)) || xp >= a.xpRequired).length} / {achievements.length}
          </span>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Ochilgan nishonlar</p>
        </motion.div>
      </div>

      {/* Telegram Connection Card if not authenticated */}
      {!isAuthenticated && (
        <div className="rounded-3xl bg-sky-50 border-2 border-[#229ED9]/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#229ED9] text-white flex items-center justify-center shrink-0 shadow-md">
              <Send className="w-6 h-6 -rotate-12" />
            </div>
            <div>
              <h3 className="font-black text-slate-800 text-sm sm:text-base">
                Telegram hisobingizni ulang
              </h3>
              <p className="text-xs text-slate-500">
                Natijalaringiz yo‘qolmasligi va barcha qurilmalarda ochilishi uchun Telegram orqali kiring.
              </p>
            </div>
          </div>
          <Link
            href="/kirish"
            className="w-full sm:w-auto bg-[#229ED9] hover:bg-[#1a8bc2] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-2xl border-b-4 border-[#166c96] active:translate-y-1 active:border-b-0 transition-all text-center whitespace-nowrap"
          >
            Telegram orqali kirish
          </Link>
        </div>
      )}

      {/* Achievements / Yutuqlar nishonlari */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">
            Yutuqlar va nishonlar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Darslarni o‘zlashtirib, yangi tarbiya nishonlarini qo‘lga kiriting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((ach) => {
            const isUnlocked =
              (user?.achievements && user.achievements.includes(ach.code)) ||
              (xp >= ach.xpRequired && (!ach.streakRequired || streak >= ach.streakRequired));
            const progress = Math.min(100, Math.round((xp / Math.max(1, ach.xpRequired)) * 100));

            return (
              <motion.div
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
                        Ochilgan 🏆
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-200/70 px-2 py-0.5 rounded-md">
                        {progress}%
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{ach.description}</p>
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                      <span>Talab: {ach.xpRequired} XP {ach.streakRequired > 0 && `• ${ach.streakRequired} kun streak`}</span>
                    </div>
                    {!isUnlocked && (
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
