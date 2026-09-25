import React from 'react';
import { BookOpen, Sparkles, Brain, Check, Quote } from 'lucide-react';
import { HikmatVaIlmContent } from '../types';

interface Props {
  content: HikmatVaIlmContent;
}

export const HikmatVaIlmTemplate: React.FC<Props> = ({ content }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hook Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-base font-bold tracking-wider uppercase border border-emerald-200/80">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>{content.categoryTag}</span>
        </div>

        <h1 className="text-[52px] font-black text-slate-900 tracking-tight leading-[1.14]">
          {content.hook}
        </h1>

        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-[920px]">
          {content.subtitle}
        </p>
      </div>

      {/* Split Cards: Islamic Wisdom + Modern Neuroscience */}
      <div className="space-y-4 my-auto">
        {/* Card 1: Islamic Wisdom & Sunnah */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-emerald-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                🕌
              </div>
              <div>
                <h3 className="text-xl font-black text-emerald-950">
                  {content.hadithTitle}
                </h3>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  {content.hadithSource}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100/80 text-emerald-800 border border-emerald-300/80">
              14 Asrlik Hikmat
            </span>
          </div>

          <div className="relative pl-6 border-l-4 border-emerald-600 space-y-2 mb-3">
            <p className="text-xl font-bold text-slate-900 leading-snug italic">
              {content.hadithText}
            </p>
          </div>

          <p className="text-base text-slate-600 font-medium leading-relaxed bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100">
            {content.hadithDetail}
          </p>
        </div>

        {/* Card 2: Modern Neuroscience */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-sky-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-sky-50 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                🧠
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {content.scienceTitle}
                </h3>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                  {content.scienceSource}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-100/80 text-sky-800 border border-sky-300/80">
              Garvard Ilmiy Tadqiqoti
            </span>
          </div>

          <div className="relative pl-6 border-l-4 border-sky-600 space-y-2 mb-3">
            <p className="text-xl font-bold text-slate-900 leading-snug">
              {content.scienceText}
            </p>
          </div>

          <p className="text-base text-slate-600 font-medium leading-relaxed bg-sky-50/60 p-3.5 rounded-xl border border-sky-100">
            {content.scienceDetail}
          </p>
        </div>
      </div>

      {/* Synthesis Takeaway Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 rounded-[22px] p-5 text-white shadow-lg space-y-1.5 border border-emerald-700/40">
        <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-300 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{content.synthesisTitle}</span>
        </div>
        <p className="text-base font-bold leading-relaxed text-slate-100">
          {content.synthesisText}
        </p>
      </div>
    </div>
  );
};
