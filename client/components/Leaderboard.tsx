'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trophy, Flame, Loader2 } from 'lucide-react';
import UserAvatar from '@/components/UserAvatar';
import { useAuth } from '@/context/AuthContext';
import { accountApi, LeaderboardData } from '@/lib/accountApi';

/**
 * Real parent leaderboard from recorded progress.
 * Weekly = XP earned Monday–Sunday (Tashkent time); all-time = total XP.
 */
export default function Leaderboard() {
  const { isAuthenticated, user } = useAuth();
  const [period, setPeriod] = useState<'week' | 'all'>('week');
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setFailed(false);
    accountApi.leaderboard(period).then((res) => {
      if (cancelled) return;
      if (res.success) setData(res.data);
      else setFailed(true);
    });
    return () => {
      cancelled = true;
    };
    // user?.xp: refresh after the parent finishes a lesson
  }, [period, isAuthenticated, user?.xp]);

  const meInList = data?.entries.some((e) => e.isCurrentUser);

  return (
    <section
      aria-labelledby="leaderboard-title"
      className="bg-white/90 rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-5 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 id="leaderboard-title" className="text-lg sm:text-xl font-black text-slate-800 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500 fill-amber-400" />
          Ota-onalar reytingi
        </h3>
        <div className="bg-slate-100 p-1 rounded-xl inline-flex text-sm font-bold self-start" role="group" aria-label="Davr">
          {([
            ['week', 'Shu hafta'],
            ['all', 'Umumiy'],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={period === key}
              onClick={() => setPeriod(key)}
              className={`px-3 py-1.5 rounded-lg ${period === key ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {data === null && !failed && (
        <div className="flex justify-center py-8" role="status" aria-label="Yuklanmoqda">
          <Loader2 className="w-6 h-6 animate-spin text-emerald-600" />
        </div>
      )}

      {failed && <p className="text-sm text-slate-500 py-6 text-center">Reyting hozircha mavjud emas. Birozdan so‘ng qayta kiring.</p>}

      {data && data.entries.length === 0 && (
        <div className="text-center py-6 space-y-2">
          <p className="text-sm text-slate-600">
            {period === 'week' ? 'Bu hafta hali hech kim dars tugatmadi.' : 'Reyting hali bo‘sh.'} Birinchi bo‘ling!
          </p>
          <Link href="/darslar" className="text-sm font-bold text-emerald-700 hover:underline">
            Darsni boshlash
          </Link>
        </div>
      )}

      {data && data.entries.length > 0 && (
        <ol className="space-y-2">
          {data.entries.slice(0, 10).map((item) => (
            <li
              key={`${item.rank}-${item.name}`}
              className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-3 ${
                item.isCurrentUser ? 'bg-emerald-50 border-emerald-400' : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-7 text-center font-black ${
                    item.rank === 1 ? 'text-amber-500' : item.rank === 2 ? 'text-slate-400' : item.rank === 3 ? 'text-amber-700' : 'text-slate-500'
                  }`}
                >
                  {item.rank}
                </span>
                <UserAvatar name={item.name} photoUrl={item.photoUrl || undefined} size="sm" />
                <p className="text-sm font-black text-slate-800 truncate">
                  {item.name}
                  {item.isCurrentUser && <span className="ml-1.5 text-xs font-bold text-emerald-700">(siz)</span>}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {item.streak > 1 && (
                  <span className="hidden sm:flex items-center gap-1 text-xs font-bold text-orange-600">
                    <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                    {item.streak} kun
                  </span>
                )}
                <span className="text-sm font-black text-emerald-700">{item.xp} XP</span>
              </div>
            </li>
          ))}
        </ol>
      )}

      {data && isAuthenticated && !meInList && (
        <p className="text-sm text-slate-600">
          {data.me
            ? `Siz ${data.me.rank}-o‘rindasiz (${data.me.xp} XP).`
            : user?.hideFromLeaderboard
            ? 'Siz reytingda ko‘rinmaysiz.'
            : period === 'week'
            ? 'Bu hafta dars tugatsangiz, reytingda paydo bo‘lasiz.'
            : ''}
        </p>
      )}
      {isAuthenticated && (
        <p className="text-xs text-slate-500">
          Reytingda ko‘rinishni istamasangiz,{' '}
          <Link href="/profil" className="font-bold text-slate-700 hover:underline">profil sozlamalarida</Link> yashiring.
        </p>
      )}
    </section>
  );
}
