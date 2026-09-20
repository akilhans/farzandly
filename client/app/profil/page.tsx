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
} from 'lucide-react';
import { api, Achievement } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';

export default function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth();
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
  const level = user?.level || "O‘rganuvchi";

  // Level progress percentage
  const nextLevelThreshold = xp < 20 ? 20 : xp < 50 ? 50 : xp < 100 ? 100 : 200;
  const currentThresholdBase = xp < 20 ? 0 : xp < 50 ? 20 : xp < 100 ? 50 : 100;
  const levelProgress = Math.min(
    100,
    Math.round(((xp - currentThresholdBase) / (nextLevelThreshold - currentThresholdBase)) * 100)
  );

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
        <div className="relative">
          {user?.photoUrl ? (
            <img
              src={user.photoUrl}
              alt={user.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover border-4 border-emerald-500 shadow-md"
            />
          ) : (
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-emerald-600 border-4 border-emerald-800 text-white flex items-center justify-center font-black text-3xl shadow-md shrink-0">
              <UserIcon className="w-12 h-12" />
            </div>
          )}
          {isAuthenticated && (
            <div
              className="absolute -bottom-2 -right-2 bg-[#229ED9] text-white p-1.5 rounded-xl shadow-md border-2 border-white"
              title="Telegram orqali tasdiqlangan"
            >
              <Send className="w-3.5 h-3.5 -rotate-12" />
            </div>
          )}
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800">
                {user?.name || 'Ota-ona'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                {user?.telegramUsername ? (
                  <span className="font-bold text-[#229ED9]">@{user.telegramUsername} • </span>
                ) : null}
                Farzand yoshi: <span className="font-bold text-slate-700">{user?.childAgeGroup || '3-5'} yosh</span> • Kunlik reja: <span className="font-bold text-slate-700">{user?.dailyGoalMinutes || 10} daqiqa</span>
              </p>
            </div>

            <div className="flex items-center gap-2 self-center sm:self-auto">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-xs">
                <Award className="w-4 h-4 text-emerald-600" />
                {level}
              </span>
              {isAuthenticated && (
                <button
                  type="button"
                  onClick={logout}
                  className="p-2 rounded-xl border-2 border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-all"
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
              <span>Daraja yuksalishi</span>
              <span>{xp} / {nextLevelThreshold} XP</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${levelProgress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3 Metric Cards with hover animations */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div whileHover={{ y: -3 }} className="card-farzandly p-5 text-center space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-2">
            <Flame className="w-6 h-6 fill-orange-500" />
          </div>
          <span className="text-2xl font-black text-slate-800">{streak} kun</span>
          <p className="text-xs font-bold text-slate-500 uppercase">Uzluksiz o‘rganish</p>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} className="card-farzandly p-5 text-center space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
            <Star className="w-6 h-6 fill-amber-500" />
          </div>
          <span className="text-2xl font-black text-slate-800">{xp} XP</span>
          <p className="text-xs font-bold text-slate-500 uppercase">To‘plangan ballar</p>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} className="card-farzandly p-5 text-center space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <span className="text-2xl font-black text-slate-800">{completed.length} ta</span>
          <p className="text-xs font-bold text-slate-500 uppercase">Tugallangan darslar</p>
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
            const isUnlocked = xp >= ach.xpRequired;
            return (
              <motion.div
                key={ach.code}
                whileHover={{ scale: isUnlocked ? 1.01 : 1 }}
                className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                  isUnlocked
                    ? 'border-emerald-300 bg-emerald-50/50 shadow-xs'
                    : 'border-slate-200 bg-slate-50 opacity-60'
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

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-800 text-sm">{ach.title}</h3>
                    {isUnlocked && (
                      <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Ochilgan
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{ach.description}</p>
                  <p className="text-[11px] font-bold text-slate-400">
                    Talab: {ach.xpRequired} XP {ach.streakRequired > 0 && `• ${ach.streakRequired} kun streak`}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
