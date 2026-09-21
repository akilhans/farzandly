'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Crown,
  UserCheck,
  Calendar,
  Clock,
  Search,
  CheckCircle2,
  AlertCircle,
  Lock,
  ArrowRight,
  User,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { useAuth, TelegramUser } from '@/context/AuthContext';

export default function AdminPage() {
  const { user, setPremiumStatus } = useAuth();

  // Admin auth gate
  const [adminPin, setAdminPin] = useState('');
  const [isPinAuthenticated, setIsPinAuthenticated] = useState(false);
  const [pinError, setPinError] = useState('');

  // Target user form
  const [targetUsername, setTargetUsername] = useState('');
  const [selectedDuration, setSelectedDuration] = useState<number>(12); // 1 or 12
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Users list
  const [usersList, setUsersList] = useState<TelegramUser[]>([]);

  const isAdminByTelegram = user?.telegramUsername?.toLowerCase() === 'dadakhonov' || user?.role === 'admin';
  const hasAccess = isAdminByTelegram || isPinAuthenticated;

  // Load registered users from registry & demo profiles
  const loadUsers = () => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem('farzandly_users_registry') || '[]';
      let parsed: TelegramUser[] = JSON.parse(raw);

      // Default demo users if empty
      const defaultUsers: TelegramUser[] = [
        {
          _id: 'usr_aziza',
          name: 'Aziza Rahimova',
          telegramUsername: 'aziza_mama',
          childAgeGroup: '3-5',
          selectedInterests: ['Bola xulqi'],
          dailyGoalMinutes: 10,
          xp: 85,
          streak: 4,
          level: 'Izlanuvchi murabbiy',
          completedLessons: ['dars-1-tarbiyaning-ahamiyati-1-qism', 'dars-2-tarbiyaning-ahamiyati-2-qism'],
          achievements: ['ilk-qadam', 'uch-kunlik-streak'],
          subscriptionStatus: 'free',
          isPremium: false,
        },
        {
          _id: 'usr_jasur',
          name: 'Jasur Karimov',
          telegramUsername: 'jasur_dada',
          childAgeGroup: '6-9',
          selectedInterests: ['Aqliy tarbiya'],
          dailyGoalMinutes: 15,
          xp: 140,
          streak: 7,
          level: 'E’tiborli tarbiyachi',
          completedLessons: ['dars-1-tarbiyaning-ahamiyati-1-qism'],
          achievements: ['ilk-qadam', 'haftalik-qahramon'],
          subscriptionStatus: 'free',
          isPremium: false,
        },
        {
          _id: 'usr_dilnoza',
          name: 'Dilnoza Sobirova',
          telegramUsername: 'dilnoza_pedagog',
          childAgeGroup: '0-2',
          selectedInterests: ['Fitrat pedagogikasi'],
          dailyGoalMinutes: 10,
          xp: 220,
          streak: 9,
          level: 'Donishmand yo‘lboshchi',
          completedLessons: ['dars-1-tarbiyaning-ahamiyati-1-qism'],
          achievements: ['ilk-qadam', 'fitrat-kashfiyotchisi'],
          subscriptionStatus: 'free',
          isPremium: false,
        },
      ];

      // Merge defaults if not present
      for (const du of defaultUsers) {
        if (!parsed.some((p) => p.telegramUsername?.toLowerCase() === du.telegramUsername?.toLowerCase())) {
          parsed.push(du);
        }
      }

      // If active user exists, make sure they are in list
      if (user && !parsed.some((p) => p._id === user._id)) {
        parsed.unshift(user);
      }

      setUsersList(parsed);
      localStorage.setItem('farzandly_users_registry', JSON.stringify(parsed));
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    loadUsers();
  }, [user]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin.trim() === 'dadakhonov777' || adminPin.trim() === 'farzandly2026') {
      setIsPinAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Maxfiy parol noto‘g‘ri. Qaytadan urinib ko‘ring.');
    }
  };

  const handleApplyPremium = async (usernameOverride?: string, durationOverride?: number) => {
    const target = (usernameOverride || targetUsername).trim().replace(/^@/, '');
    if (!target) {
      alert('Iltimos, foydalanuvchining Telegram username yoki ID sini kiriting.');
      return;
    }

    const duration = durationOverride !== undefined ? durationOverride : selectedDuration;
    setIsProcessing(true);
    setActionSuccess(null);

    try {
      await setPremiumStatus(target, duration);
      loadUsers();

      const expDate = new Date();
      if (duration === 12) expDate.setDate(expDate.getDate() + 365);
      else if (duration === 1) expDate.setDate(expDate.getDate() + 30);

      const formattedExp = expDate.toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });

      if (duration === 0) {
        setActionSuccess(`@${target} foydalanuvchisining Premiumi bekor qilindi (Bepul holatga qaytarildi).`);
      } else {
        setActionSuccess(
          `Tabriklaymiz! @${target} hisobiga ${duration === 12 ? '1 YILLIK' : '1 OYLIK'} Premium muvaffaqiyatli faollashtirildi! Amal qilish muddati: ${formattedExp} gacha.`
        );
      }
      if (!usernameOverride) setTargetUsername('');
    } catch {
      alert('Xatolik yuz berdi. Qaytadan urinib ko‘ring.');
    } finally {
      setIsProcessing(false);
    }
  };

  // If not authenticated as Admin
  if (!hasAccess) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 sm:py-24 space-y-6">
        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 shadow-xl p-6 sm:p-8 space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 border-2 border-amber-300 mx-auto flex items-center justify-center shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ADMINISTRATOR HUQUQI</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900">
              Admin boshqaruv paneli
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Ushbu sahifa faqat platforma ma’muri (@dadakhonov) uchun mo‘ljallangan.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4 text-left pt-2">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Admin maxfiy paroli:
              </label>
              <input
                type="password"
                placeholder="Parolni kiriting..."
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-hidden focus:border-emerald-500 transition-all"
              />
              {pinError && (
                <p className="text-xs text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {pinError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-sm py-3.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Panelga kirish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 text-center">
            <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 font-bold">
              ← Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard UI
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-black">
            <Crown className="w-4 h-4 fill-amber-700" />
            <span>ADMIN PANELI • @dadakhonov</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Premium Foydalanuvchilarni Boshqarish
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            To‘lov chekini yuborgan foydalanuvchini 1 oylik yoki 1 yillik muddat bilan Premium qilish.
          </p>
        </div>

        <button
          onClick={loadUsers}
          className="btn-outline text-xs px-4 py-2.5 flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Ro‘yxatni yangilash</span>
        </button>
      </div>

      {/* Action Notification */}
      {actionSuccess && (
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 flex items-start gap-3 shadow-xs animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-black text-sm">Amaliyot bajarildi!</h4>
            <p className="text-xs leading-relaxed font-medium">{actionSuccess}</p>
          </div>
        </div>
      )}

      {/* Main Activation Card */}
      <div className="card-farzandly p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-slate-800 font-black text-lg">
          <UserCheck className="w-5 h-5 text-emerald-600" />
          <h2>Foydalanuvchini Premium qilish</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Target username input */}
          <div className="md:col-span-6 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Foydalanuvchi Telegram Username yoki ID:
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-sm">
                @
              </span>
              <input
                type="text"
                placeholder="masalan: aziza_mama yoki 998901234567"
                value={targetUsername}
                onChange={(e) => setTargetUsername(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm font-medium focus:outline-hidden focus:border-emerald-500 transition-all"
              />
            </div>
            <p className="text-[11px] text-slate-400">
              Chek yuborgan mijozning telegram username yoki ismini kiriting.
            </p>
          </div>

          {/* Duration selector */}
          <div className="md:col-span-6 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Premium Muddati:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedDuration(1)}
                className={`py-3 px-4 rounded-xl border-2 text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedDuration === 1
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>1 Oylik (30 kun)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDuration(12)}
                className={`py-3 px-4 rounded-xl border-2 text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedDuration === 12
                    ? 'border-amber-500 bg-amber-50 text-amber-950 shadow-xs'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <Crown className="w-4 h-4 fill-amber-600 text-amber-600" />
                <span>1 Yillik (365 kun)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            disabled={isProcessing || !targetUsername.trim()}
            onClick={() => handleApplyPremium()}
            className="w-full sm:w-auto btn-gold text-sm sm:text-base px-8 py-3.5 flex items-center justify-center gap-2 text-slate-950 font-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <Crown className="w-4 h-4 fill-slate-950" />
            <span>{isProcessing ? 'Bajarilmoqda...' : 'Premium maqomini yoqish'}</span>
          </button>
        </div>
      </div>

      {/* Users Registry Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-slate-900">
            Foydalanuvchilar ro‘yxati ({usersList.length})
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Bir marta bosish bilan muddat qo‘shishingiz mumkin
          </span>
        </div>

        <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100">
            {usersList.map((u) => {
              const isPrem = Boolean(u.isPremium || u.subscriptionStatus === 'premium');
              const expFormatted = u.premiumExpiresAt
                ? new Date(u.premiumExpiresAt).toLocaleDateString('uz-UZ', { year: 'numeric', month: 'short', day: 'numeric' })
                : isPrem
                ? 'Muddatsiz'
                : '—';

              return (
                <div
                  key={u._id || u.telegramUsername}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold shrink-0">
                      {u.telegramUsername ? `@` : <User className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">
                          {u.name || `@${u.telegramUsername}`}
                        </span>
                        {u.telegramUsername && (
                          <span className="text-xs font-mono text-slate-400">
                            @{u.telegramUsername}
                          </span>
                        )}
                        {isPrem ? (
                          <span className="text-[10px] font-black text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Crown className="w-2.5 h-2.5 fill-amber-700" /> PREMIUM
                          </span>
                        ) : (
                          <span className="text-[10px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            BEPUL
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>XP: {u.xp || 0}</span>
                        <span>•</span>
                        <span>Streak: {u.streak || 0} kun</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-semibold">Tugash vaqti: {expFormatted}</span>
                      </div>
                    </div>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() => handleApplyPremium(u.telegramUsername || u._id, 1)}
                      className="btn-outline text-xs px-3 py-1.5 cursor-pointer hover:border-emerald-500 hover:text-emerald-700"
                      title="1 oylik Premium berish"
                    >
                      +1 Oy
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApplyPremium(u.telegramUsername || u._id, 12)}
                      className="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-black px-3 py-1.5 rounded-xl cursor-pointer transition-all"
                      title="1 yillik Premium berish"
                    >
                      +1 Yil
                    </button>
                    {isPrem && (
                      <button
                        type="button"
                        onClick={() => handleApplyPremium(u.telegramUsername || u._id, 0)}
                        className="text-xs text-rose-500 hover:text-rose-700 font-bold px-2 py-1 cursor-pointer"
                        title="Premiumni bekor qilish"
                      >
                        Bekor qilish
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
