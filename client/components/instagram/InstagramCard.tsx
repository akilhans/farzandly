import React, { forwardRef } from 'react';
import { Bookmark, Sparkles, QrCode } from 'lucide-react';
import { CardCustomization } from './types';
import { MehrliTarbiyaTemplate } from './templates/MehrliTarbiyaTemplate';
import { EkranVaqtiTemplate } from './templates/EkranVaqtiTemplate';
import { GamificationTemplate } from './templates/GamificationTemplate';
import { HikmatVaIlmTemplate } from './templates/HikmatVaIlmTemplate';
import { PlatformIntroTemplate } from './templates/PlatformIntroTemplate';
import { NegaFarzandlyTemplate } from './templates/NegaFarzandlyTemplate';
import { FeatureShowcaseTemplate } from './templates/FeatureShowcaseTemplate';

interface InstagramCardProps {
  customization: CardCustomization;
  showGuides?: boolean;
}

export const InstagramCard = forwardRef<HTMLDivElement, InstagramCardProps>(
  ({ customization, showGuides = false }, ref) => {
    const {
      template,
      theme,
      ageCategory,
      showLogo,
      showQrCode,
      showSlideNumber,
      slideNumber,
      footerHandle,
      footerTagline,
    } = customization;

    // Theme Background and border settings
    const themeStyles: Record<string, { bg: string; border: string; accentBadge: string }> = {
      'sage-classic': {
        bg: 'bg-[#FAF7F2]',
        border: 'border-emerald-100',
        accentBadge: 'bg-emerald-600 text-white',
      },
      'warm-cream': {
        bg: 'bg-[#FBFBF9]',
        border: 'border-amber-100',
        accentBadge: 'bg-emerald-700 text-white',
      },
      'emerald-depth': {
        bg: 'bg-[#F2FBF6]',
        border: 'border-emerald-200',
        accentBadge: 'bg-emerald-800 text-white',
      },
      'golden-sand': {
        bg: 'bg-[#FDFBF7]',
        border: 'border-amber-200',
        accentBadge: 'bg-amber-700 text-white',
      },
    };

    const currentTheme = themeStyles[theme] || themeStyles['sage-classic'];

    return (
      <div
        ref={ref}
        id="farzandly-instagram-card"
        style={{ width: '1080px', height: '1350px' }}
        className={`relative ${currentTheme.bg} text-slate-800 p-16 flex flex-col justify-between overflow-hidden select-none shrink-0 font-sans shadow-2xl`}
      >
        {/* Subtle Ambient Decorative Circles */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[450px] h-[450px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <header className="relative z-10 flex items-center justify-between pb-6 border-b-2 border-slate-200/80">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-4">
            {showLogo && (
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
                  {/* Clean SVG Farzandly Sprout Logo */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M12 22v-9" />
                    <path d="M9 15c-3-1-4-4-4-7a7 7 0 0 1 7-3c0 3-1 6-3 10Z" />
                    <path d="M15 15c3-1 4-4 4-7a7 7 0 0 0-7-3c0 3 1 6 3 10Z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-black tracking-tight text-slate-900">
                      farzandly
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                    Raqamli Tarbiya Maktabi
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Age Category & Slide Pill */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-white border-2 border-slate-200/90 shadow-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-extrabold text-slate-700">
                {ageCategory}
              </span>
            </div>

            {showSlideNumber && (
              <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-sm font-extrabold shadow-xs">
                {slideNumber}
              </div>
            )}
          </div>
        </header>

        {/* Dynamic Center Template Content */}
        <main className="relative z-10 flex-1 my-7 flex flex-col justify-center">
          {template === 'platform-intro' && (
            <PlatformIntroTemplate content={customization.platformIntro} />
          )}
          {template === 'nega-farzandly' && (
            <NegaFarzandlyTemplate content={customization.negaFarzandly} />
          )}
          {template === 'feature-showcase' && (
            <FeatureShowcaseTemplate content={customization.featureShowcase} />
          )}
          {template === 'mehrli-tarbiya' && (
            <MehrliTarbiyaTemplate content={customization.mehrliTarbiya} />
          )}
          {template === 'ekran-vaqti' && (
            <EkranVaqtiTemplate content={customization.ekranVaqti} />
          )}
          {template === 'gamification' && (
            <GamificationTemplate content={customization.gamification} />
          )}
          {template === 'hikmat-va-ilm' && (
            <HikmatVaIlmTemplate content={customization.hikmatVaIlm} />
          )}
        </main>

        {/* Bottom Footer Row */}
        <footer className="relative z-10 pt-6 border-t-2 border-slate-200/80 flex items-center justify-between">
          {/* Left Brand Domain */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border-2 border-slate-200 shadow-xs">
              <span className="text-base font-black text-slate-900 tracking-tight">
                farzandly.uz
              </span>
              <span className="text-slate-300 font-bold">|</span>
              <span className="text-sm font-bold text-emerald-700">
                {footerTagline}
              </span>
            </div>
          </div>

          {/* Right Action Callouts & Social */}
          <div className="flex items-center gap-3.5">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border-2 border-emerald-200 px-3.5 py-2 rounded-xl text-sm font-bold shadow-xs">
              <Bookmark className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Saqlab qo‘ying</span>
            </div>

            <div className="text-right">
              <div className="text-base font-black text-slate-900">
                {footerHandle}
              </div>
              <div className="text-xs font-semibold text-slate-500">
                Instagram sahifasi
              </div>
            </div>

            {showQrCode && (
              <div className="w-12 h-12 bg-white p-1.5 rounded-xl border-2 border-slate-200 shadow-xs flex items-center justify-center">
                <QrCode className="w-full h-full text-slate-800" />
              </div>
            )}
          </div>
        </footer>

        {/* Instagram Safe Area Guides Overlay (For Preview Only) */}
        {showGuides && (
          <div className="absolute inset-0 pointer-events-none z-50 flex flex-col justify-between border-4 border-dashed border-sky-400/70">
            {/* Top Bar Simulated Guide */}
            <div className="bg-sky-500/15 backdrop-blur-xs p-3 text-sky-800 text-xs font-bold flex items-center justify-between border-b border-sky-300">
              <span>Instagram Top Header Zone (Profile, Handle, Audio)</span>
              <span>Safe Margins Active</span>
            </div>

            {/* Bottom Bar Simulated Guide */}
            <div className="bg-sky-500/15 backdrop-blur-xs p-3 text-sky-800 text-xs font-bold flex items-center justify-between border-t border-sky-300">
              <span>Instagram Bottom Action Bar (Like, Comment, Share, Save)</span>
              <span>4:5 Aspect Ratio (1080 × 1350)</span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

InstagramCard.displayName = 'InstagramCard';
