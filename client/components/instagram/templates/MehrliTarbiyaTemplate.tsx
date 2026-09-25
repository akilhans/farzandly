import React from 'react';
import { Eye, HeartHandshake, ShieldCheck, ArrowRight, Lightbulb, Sparkles, Check, X } from 'lucide-react';
import { MehrliTarbiyaContent } from '../types';

interface Props {
  content: MehrliTarbiyaContent;
}

export const MehrliTarbiyaTemplate: React.FC<Props> = ({ content }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hook Header Section */}
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

      {/* 3 Step Cards */}
      <div className="space-y-4 my-auto">
        {/* Step 1 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden transition-all">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
            <Eye className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.step1Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {content.step1Tag}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.step1Desc}
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden transition-all">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 border-2 border-teal-200 flex items-center justify-center shrink-0 text-teal-600 mt-0.5">
            <HeartHandshake className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.step2Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                {content.step2Tag}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.step2Desc}
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-[26px] p-6 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-6 relative overflow-hidden transition-all">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center shrink-0 text-amber-600 mt-0.5">
            <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {content.step3Title}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                {content.step3Tag}
              </span>
            </div>
            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              {content.step3Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Pill + Takeaway Banner */}
      <div className="space-y-4">
        {/* Contrast Mini Strip */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-rose-50/90 border border-rose-200/90 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-rose-200/70 text-rose-700 flex items-center justify-center shrink-0">
              <X className="w-4 h-4 stroke-[3]" />
            </div>
            <p className="text-sm font-semibold text-rose-900 leading-snug">
              {content.comparisonWrong}
            </p>
          </div>

          <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-200/70 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <p className="text-sm font-semibold text-emerald-900 leading-snug">
              {content.comparisonRight}
            </p>
          </div>
        </div>

        {/* Takeaway */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-[22px] p-5 text-white shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
            <Lightbulb className="w-6 h-6 text-amber-300 fill-amber-300" />
          </div>
          <p className="text-base font-bold leading-snug">
            {content.takeaway}
          </p>
        </div>
      </div>
    </div>
  );
};
