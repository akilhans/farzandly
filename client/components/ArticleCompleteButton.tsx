'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Star, CheckCircle, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { playChimeSound } from '@/lib/gamification';

interface Props {
  articleSlug: string;
}

export default function ArticleCompleteButton({ articleSlug }: Props) {
  const { updateUserProgress } = useAuth();
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    if (completed) return;
    setCompleted(true);
    playChimeSound('bonus');

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#059669', '#10B981', '#F59E0B'],
      });
    } catch {}

    updateUserProgress(5, `maqola-${articleSlug}`);
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border-2 border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Star className="w-5 h-5 fill-white" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800">
            Maqolani o‘qib bo‘ldingizmi?
          </h4>
          <p className="text-xs text-slate-500">
            Bilimingizni mustahkamlab, profilingiz uchun qo‘shimcha 5 XP to‘plang.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleComplete}
        disabled={completed}
        className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer ${
          completed
            ? 'bg-emerald-600 text-white border-2 border-emerald-700 shadow-xs'
            : 'btn-primary'
        }`}
      >
        {completed ? (
          <>
            <CheckCircle className="w-4 h-4 text-emerald-200" />
            <span>O‘qildi (+5 XP olindi)</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>O‘qib bo‘ldim (+5 XP)</span>
          </>
        )}
      </button>
    </div>
  );
}
