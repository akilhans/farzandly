import React from 'react';
import { Clock, Brain, Flame, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { PlatformIntroContent } from '../types';

interface Props {
  content: PlatformIntroContent;
}

export const PlatformIntroTemplate: React.FC<Props> = ({ content }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hook Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-base font-bold tracking-wider uppercase border border-emerald-200/80">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>{content.categoryTag}</span>
        </div>

        <h1 className="text-[52px] font-black text-slate-900 tracking-tight leading-[1.12]">
          {content.hook}
        </h1>

        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-[920px]">
          {content.subtitle}
        </p>
      </div>

      {/* 3 Core Pillars */}
      <div className="space-y-4 my-auto">
        {/* Pillar 1 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
            <Clock className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.pillar1Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {content.pillar1Tag}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.pillar1Desc}
            </p>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 border-2 border-teal-200 flex items-center justify-center shrink-0 text-teal-600 mt-0.5">
            <Brain className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.pillar2Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                {content.pillar2Tag}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.pillar2Desc}
            </p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center shrink-0 text-amber-600 mt-0.5">
            <Flame className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.pillar3Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                {content.pillar3Tag}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.pillar3Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Target Ages & Platform CTA */}
      <div className="space-y-4">
        {/* Ages Covered Band */}
        <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">👶</span>
            <span className="text-base font-bold text-emerald-950">
              {content.targetAges}
            </span>
          </div>
          <span className="text-xs font-extrabold bg-emerald-600 text-white px-3 py-1 rounded-full">
            5 ta yosh toifasi
          </span>
        </div>

        {/* Platform CTA Banner */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 rounded-[22px] p-5 text-white shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <p className="text-base font-bold leading-tight">
                {content.ctaText}
              </p>
              <p className="text-xs text-emerald-200/80 font-medium mt-0.5">
                Birinchi 3 ta dars barcha ota-onalar uchun bepul
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
