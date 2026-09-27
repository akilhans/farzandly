'use client';

import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

/** Lets a parent keep their name off the public leaderboard. */
export default function LeaderboardVisibilityToggle() {
  const { user, isAuthenticated, setLeaderboardVisibility } = useAuth();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  if (!isAuthenticated) return null;

  const visible = !user?.hideFromLeaderboard;

  const toggle = async () => {
    setSaving(true);
    setError('');
    const ok = await setLeaderboardVisibility(visible);
    setSaving(false);
    if (!ok) setError('Saqlab bo‘lmadi. Qaytadan urinib ko‘ring.');
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <div id="lb-visibility-label" className="text-sm font-bold text-slate-800">Reytingda ko‘rinish</div>
          <div className="text-xs text-slate-500">
            {visible ? 'Ismingiz va XP’ingiz ota-onalar reytingida ko‘rinadi.' : 'Siz reytingda ko‘rinmaysiz.'}
          </div>
          {error && <div className="text-xs text-rose-700 mt-1" role="alert">{error}</div>}
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={visible}
        aria-labelledby="lb-visibility-label"
        disabled={saving}
        onClick={toggle}
        className={`relative w-12 h-7 rounded-full transition-colors shrink-0 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
          visible ? 'bg-emerald-600' : 'bg-slate-300'
        }`}
      >
        <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${visible ? 'translate-x-5' : ''}`} />
      </button>
    </div>
  );
}
