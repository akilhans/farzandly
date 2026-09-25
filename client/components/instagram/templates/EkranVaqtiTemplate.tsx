import React from 'react';
import { Smartphone, Timer, BookOpen, Compass, Flame, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { EkranVaqtiContent } from '../types';

interface Props {
  content: EkranVaqtiContent;
}

export const EkranVaqtiTemplate: React.FC<Props> = ({ content }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hook Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-base font-bold tracking-wider uppercase border border-sky-200/80">
          <Smartphone className="w-4 h-4 text-sky-600" />
          <span>{content.categoryTag}</span>
        </div>

        <h1 className="text-[50px] font-black text-slate-900 tracking-tight leading-[1.14]">
          {content.hook}
        </h1>

        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-[920px]">
          {content.subtitle}
        </p>
      </div>

      {/* 3 Actionable Alternatives */}
      <div className="space-y-4 my-auto">
        {/* Alt 1 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center shrink-0 text-amber-600 mt-0.5">
            <Timer className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.alt1Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                {content.alt1Badge}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.alt1Desc}
            </p>
          </div>
        </div>

        {/* Alt 2 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
            <BookOpen className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.alt2Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {content.alt2Badge}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.alt2Desc}
            </p>
          </div>
        </div>

        {/* Alt 3 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 border-2 border-sky-200 flex items-center justify-center shrink-0 text-sky-600 mt-0.5">
            <Compass className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.alt3Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
                {content.alt3Badge}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.alt3Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Scientific Stat Pill & Key Takeaway */}
      <div className="space-y-4">
        {/* Recommendation Bar */}
        <div className="bg-sky-50/90 border border-sky-200 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <AlertCircle className="w-5 h-5" />
          </div>
          <p className="text-sm font-semibold text-sky-950 leading-relaxed">
            {content.recommendation}
          </p>
        </div>

        {/* Takeaway */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[22px] p-5 text-white shadow-lg flex items-center gap-4 border border-slate-700">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-base font-bold leading-snug">
            {content.takeaway}
          </p>
        </div>
      </div>
    </div>
  );
};
