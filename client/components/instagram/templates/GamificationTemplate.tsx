import React from 'react';
import { Flame, Star, Trophy, Heart, Check, Lock, Play, Sparkles, HelpCircle, CheckCircle } from 'lucide-react';
import { GamificationContent } from '../types';

interface Props {
  content: GamificationContent;
}

export const GamificationTemplate: React.FC<Props> = ({ content }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hook Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-base font-bold tracking-wider uppercase border border-emerald-200/80">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{content.categoryTag}</span>
          </div>

          {/* Duolingo-style Hearts */}
          <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border-2 border-slate-200 shadow-xs">
            {[1, 2, 3, 4, 5].map((h) => (
              <Heart key={h} className="w-4 h-4 text-rose-500 fill-rose-500" />
            ))}
          </div>
        </div>

        <h1 className="text-[48px] font-black text-slate-900 tracking-tight leading-[1.14]">
          {content.hook}
        </h1>

        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-[920px]">
          {content.subtitle}
        </p>
      </div>

      {/* Gamification Bar (Streak, XP, Level) */}
      <div className="grid grid-cols-3 gap-4">
        {/* Streak */}
        <div className="bg-white rounded-2xl p-4 border-2 border-amber-200/90 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shrink-0 shadow-md">
            <Flame className="w-7 h-7 fill-white" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 leading-none">
              {content.streakDays} kun
            </div>
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mt-1">
              Streak odati
            </div>
          </div>
        </div>

        {/* XP */}
        <div className="bg-white rounded-2xl p-4 border-2 border-emerald-200/90 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-md">
            <Star className="w-7 h-7 fill-white" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 leading-none">
              +{content.xpPoints} XP
            </div>
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mt-1">
              Tajriba bali
            </div>
          </div>
        </div>

        {/* Level */}
        <div className="bg-white rounded-2xl p-4 border-2 border-sky-200/90 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-900 leading-none">
              {content.levelNumber}-daraja
            </div>
            <div className="text-xs font-bold text-sky-700 truncate max-w-[130px] mt-1">
              {content.levelTitle}
            </div>
          </div>
        </div>
      </div>

      {/* Path Progression Mockup */}
      <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
            Kundalik 5 daqiqalik marshrut
          </span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            Modul 1 • Faol
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Node 1 */}
          <div className="bg-emerald-50/70 border-2 border-emerald-400/80 rounded-2xl p-3.5 flex flex-col justify-between relative shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold text-emerald-800">1-DARS</span>
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>
            <div className="text-sm font-extrabold text-slate-900 leading-snug">
              {content.lesson1Title}
            </div>
          </div>

          {/* Node 2 */}
          <div className="bg-amber-50/90 border-2 border-amber-400 rounded-2xl p-3.5 flex flex-col justify-between relative shadow-sm ring-4 ring-amber-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold text-amber-800">2-DARS</span>
              <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                <Play className="w-3.5 h-3.5 fill-white" />
              </div>
            </div>
            <div className="text-sm font-extrabold text-slate-900 leading-snug">
              {content.lesson2Title}
            </div>
          </div>

          {/* Node 3 */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between relative opacity-85">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold text-slate-400">3-DARS</span>
              <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-600 flex items-center justify-center text-xs">
                <Lock className="w-3 h-3" />
              </div>
            </div>
            <div className="text-sm font-bold text-slate-600 leading-snug">
              {content.lesson3Title}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Quiz Snippet Mockup */}
      <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700">
          <HelpCircle className="w-4 h-4 text-emerald-600" />
          <span>Interaktiv mini-vaziyat (1 daqiqa)</span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
          {content.quizQuestion}
        </h3>

        <div className="space-y-2.5">
          {/* Option A (Wrong) */}
          <div className="p-3.5 rounded-2xl border-2 border-slate-200 bg-slate-50/70 flex items-center justify-between text-slate-500">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-xl bg-slate-200 text-slate-700 font-black text-sm flex items-center justify-center">
                A
              </span>
              <span className="text-base font-semibold">{content.quizWrongAnswer}</span>
            </div>
          </div>

          {/* Option B (Right - Duolingo Success Style) */}
          <div className="p-3.5 rounded-2xl border-2 border-emerald-500 bg-emerald-50 flex items-center justify-between text-emerald-950 font-bold shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-xl bg-emerald-500 text-white font-black text-sm flex items-center justify-center">
                B
              </span>
              <span className="text-base font-bold">{content.quizRightAnswer}</span>
            </div>
            <CheckCircle className="w-5 h-5 text-emerald-600 fill-emerald-100" />
          </div>
        </div>
      </div>

      {/* Takeaway Banner */}
      <div className="bg-slate-900 rounded-[22px] p-5 text-white shadow-lg flex items-center gap-4 border border-slate-800">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Sparkles className="w-6 h-6" />
        </div>
        <p className="text-base font-bold leading-snug">
          {content.takeaway}
        </p>
      </div>
    </div>
  );
};
