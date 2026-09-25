import React from 'react';
import { X, Check, Sparkles, HeartHandshake, ShieldCheck, HelpCircle } from 'lucide-react';
import { NegaFarzandlyContent } from '../types';

interface Props {
  content: NegaFarzandlyContent;
}

export const NegaFarzandlyTemplate: React.FC<Props> = ({ content }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hook Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-base font-bold tracking-wider uppercase border border-emerald-200/80">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>{content.categoryTag}</span>
        </div>

        <h1 className="text-[50px] font-black text-slate-900 tracking-tight leading-[1.12]">
          {content.hook}
        </h1>

        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-[920px]">
          {content.subtitle}
        </p>
      </div>

      {/* 3 Problem vs Solution Rows */}
      <div className="space-y-3.5 my-auto">
        {/* Row 1 */}
        <div className="bg-white rounded-[26px] p-5 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
              1-Muammo va Farzandly Yechimi
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {/* Problem */}
            <div className="bg-rose-50/80 rounded-2xl p-3.5 border border-rose-200/70 flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-rose-200/70 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-rose-900 uppercase tracking-wide">
                  {content.prob1Title}
                </h4>
                <p className="text-sm font-semibold text-rose-950 mt-1 leading-snug">
                  {content.prob1Text}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-emerald-50/90 rounded-2xl p-3.5 border-2 border-emerald-300 flex items-start gap-3 shadow-xs">
              <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-emerald-900 uppercase tracking-wide">
                  {content.sol1Title}
                </h4>
                <p className="text-sm font-bold text-emerald-950 mt-1 leading-snug">
                  {content.sol1Text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-white rounded-[26px] p-5 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
              2-Muammo va Farzandly Yechimi
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {/* Problem */}
            <div className="bg-rose-50/80 rounded-2xl p-3.5 border border-rose-200/70 flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-rose-200/70 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-rose-900 uppercase tracking-wide">
                  {content.prob2Title}
                </h4>
                <p className="text-sm font-semibold text-rose-950 mt-1 leading-snug">
                  {content.prob2Text}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-emerald-50/90 rounded-2xl p-3.5 border-2 border-emerald-300 flex items-start gap-3 shadow-xs">
              <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-emerald-900 uppercase tracking-wide">
                  {content.sol2Title}
                </h4>
                <p className="text-sm font-bold text-emerald-950 mt-1 leading-snug">
                  {content.sol2Text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="bg-white rounded-[26px] p-5 border-2 border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
              3-Muammo va Farzandly Yechimi
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {/* Problem */}
            <div className="bg-rose-50/80 rounded-2xl p-3.5 border border-rose-200/70 flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-rose-200/70 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-rose-900 uppercase tracking-wide">
                  {content.prob3Title}
                </h4>
                <p className="text-sm font-semibold text-rose-950 mt-1 leading-snug">
                  {content.prob3Text}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-emerald-50/90 rounded-2xl p-3.5 border-2 border-emerald-300 flex items-start gap-3 shadow-xs">
              <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-emerald-900 uppercase tracking-wide">
                  {content.sol3Title}
                </h4>
                <p className="text-sm font-bold text-emerald-950 mt-1 leading-snug">
                  {content.sol3Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof & Philosophy Banner */}
      <div className="bg-slate-900 rounded-[22px] p-5 text-white shadow-lg flex items-center gap-4 border border-slate-800">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <HeartHandshake className="w-6 h-6" />
        </div>
        <p className="text-base font-bold leading-snug">
          {content.takeaway}
        </p>
      </div>
    </div>
  );
};
