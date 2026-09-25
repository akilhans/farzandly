import React from 'react';
import { BookOpen, Headphones, HelpCircle, Trophy, Sparkles, Gift, CheckCircle2 } from 'lucide-react';
import { FeatureShowcaseContent } from '../types';

interface Props {
  content: FeatureShowcaseContent;
}

export const FeatureShowcaseTemplate: React.FC<Props> = ({ content }) => {
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

      {/* 2x2 Feature Showcase Grid */}
      <div className="grid grid-cols-2 gap-4 my-auto">
        {/* Feature 1 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-7 h-7 stroke-[2.2]" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100/80 text-emerald-800">
              {content.feat1Badge}
            </span>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-black text-slate-900 leading-snug">
              {content.feat1Title}
            </h3>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              {content.feat1Desc}
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border-2 border-sky-200 text-sky-600 flex items-center justify-center shrink-0">
              <Headphones className="w-7 h-7 stroke-[2.2]" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-100/80 text-sky-800">
              {content.feat2Badge}
            </span>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-black text-slate-900 leading-snug">
              {content.feat2Title}
            </h3>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              {content.feat2Desc}
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border-2 border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-7 h-7 stroke-[2.2]" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100/80 text-amber-800">
              {content.feat3Badge}
            </span>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-black text-slate-900 leading-snug">
              {content.feat3Title}
            </h3>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              {content.feat3Desc}
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border-2 border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
              <Trophy className="w-7 h-7 stroke-[2.2]" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-teal-100/80 text-teal-800">
              {content.feat4Badge}
            </span>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-black text-slate-900 leading-snug">
              {content.feat4Title}
            </h3>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              {content.feat4Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Promo & CTA Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 rounded-[22px] p-5 text-white shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
            <Gift className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <p className="text-base font-extrabold leading-snug">
              {content.bottomPromo}
            </p>
            <p className="text-xs text-emerald-100 font-medium">
              Ro‘yxatdan o‘tish 1 daqiqa va hech qanday karta talab qilinmaydi
            </p>
          </div>
        </div>
        <div className="bg-white text-emerald-900 font-black text-xs px-4 py-2.5 rounded-xl shadow-xs shrink-0">
          farzandly.uz
        </div>
      </div>
    </div>
  );
};
