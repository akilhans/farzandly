'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  BookOpen,
  Info,
  Maximize2,
} from 'lucide-react';
import { GalleryImage } from '@/lib/healthData';
import { useI18n } from '@/context/LanguageContext';

interface BrainAnatomySlideshowProps {
  slides: GalleryImage[];
  lang?: 'uz' | 'en' | 'ru';
}

const DEFAULT_ANATOMY_IMAGE = '/body basics/default-anatomy.svg';

export default function BrainAnatomySlideshow({
  slides,
  lang: propLang,
}: BrainAnatomySlideshowProps) {
  const { language } = useI18n();
  const lang = propLang || (language === 'ru' || language === 'en' ? language : 'uz');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideErrors, setSlideErrors] = useState<Record<number, boolean>>({});

  const total = slides.length;
  const currentSlide = slides[currentIndex] || slides[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  const texts = {
    uz: {
      sectionBadge: 'Interaktiv anatomik slayd-shou',
      title: 'Bosh miya anatomik tuzilishi (The Anatomy of the Brain)',
      introLead:
        'Bosh miya xuddi tana faoliyatini boshqaruvchi kompyuterga o‘xshaydi, asab tizimi esa tana a’zolariga xabarlarni yetkazuvchi tarmoqdir.',
      introPrompt:
        'Bosh miya va asab tizimi haqida ko‘proq ma’lumot olish uchun ushbu slaydlarni birma-bir ko‘rib chiqing.',
      prev: 'Oldingi',
      next: 'Keyingi',
      slideCounter: (c: number, t: number) => `${c} / ${t}-slayd`,
      organParts: 'Miya bo‘limlari va a’zolari:',
      sourceAttribution: 'Manba: © 2026 The Nemours Foundation/KidsHealth tibbiyot ilmiy fondi. Barcha huquqlar himoyalangan.',
      pageLabel: 'Slayd sahifalari:',
    },
    en: {
      sectionBadge: 'Interactive Anatomy Slideshow',
      title: 'The Anatomy of the Brain',
      introLead:
        "The brain is like a computer that controls the body's functions, and the nervous system is like a network that relays messages to parts of the body.",
      introPrompt:
        'Click through this slideshow to learn more about the brain and nervous system.',
      prev: 'Previous',
      next: 'Next',
      slideCounter: (c: number, t: number) => `Slide ${c} of ${t}`,
      organParts: 'Brain parts & structures:',
      sourceAttribution: 'src: © 2026 The Nemours Foundation/KidsHealth. All rights reserved.',
      pageLabel: 'Slides:',
    },
    ru: {
      sectionBadge: 'Интерактивное анатомическое слайд-шоу',
      title: 'Анатомия головного мозга (The Anatomy of the Brain)',
      introLead:
        'Мозг подобен компьютеру, управляющему функциями тела, а нервная система — сети, передающей сообщения частям тела.',
      introPrompt:
        'Листайте это слайд-шоу, чтобы узнать больше о мозге и нервной системе.',
      prev: 'Назад',
      next: 'Вперед',
      slideCounter: (c: number, t: number) => `Слайд ${c} из ${t}`,
      organParts: 'Отделы и структуры мозга:',
      sourceAttribution: 'Источник: © 2026 The Nemours Foundation/KidsHealth. Все права защищены.',
      pageLabel: 'Слайды:',
    },
  }[lang];

  const slideLabel =
    lang === 'uz'
      ? currentSlide.labelUz
      : lang === 'ru'
      ? currentSlide.labelRu
      : currentSlide.labelEn;

  const slideDesc =
    lang === 'uz'
      ? currentSlide.descriptionUz || currentSlide.labelUz
      : lang === 'ru'
      ? currentSlide.descriptionRu || currentSlide.labelRu
      : currentSlide.descriptionEn || currentSlide.labelEn;

  const slideImageSrc =
    !slideErrors[currentIndex] && currentSlide.url
      ? currentSlide.url
      : DEFAULT_ANATOMY_IMAGE;

  return (
    <section className="bg-slate-900 text-white rounded-3xl border-2 border-emerald-500/40 p-5 sm:p-8 space-y-6 shadow-2xl overflow-hidden">
      {/* 1. Header intro */}
      <div className="space-y-3 border-b border-slate-800 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{texts.sectionBadge}</span>
          </span>

          <span className="text-xs font-extrabold text-amber-300 bg-amber-500/20 border border-amber-400/30 px-3 py-1 rounded-full">
            {texts.slideCounter(currentIndex + 1, total)}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          {texts.title}
        </h2>

        <div className="space-y-1.5 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-slate-200">{texts.introLead}</p>
          <p className="text-emerald-300 text-xs sm:text-sm font-medium">
            💡 {texts.introPrompt}
          </p>
        </div>
      </div>

      {/* 2. Main Slide Display Card */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Image Container */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-black/60 border border-slate-800 flex items-center justify-center p-2 group">
              <img
                src={slideImageSrc}
                alt={slideLabel}
                onError={() => setSlideErrors((prev) => ({ ...prev, [currentIndex]: true }))}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
              <span className="absolute top-3 left-3 bg-slate-900/90 text-emerald-400 text-xs font-black px-3 py-1 rounded-lg border border-emerald-500/30">
                {currentIndex + 1} / {total}
              </span>
            </div>
          </div>

          {/* Right: Slide Info and Description */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-700/50 px-3 py-1 rounded-md inline-block">
                {slideLabel.split('(')[0].trim()}
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {slideLabel}
              </h3>

              <div className="bg-slate-900/90 border-l-4 border-emerald-500 rounded-r-xl p-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {slideDesc}
              </div>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handlePrev}
                className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{texts.prev}</span>
              </button>

              <button
                onClick={handleNext}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-900/40"
              >
                <span>{texts.next}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow Pagination Progress Bar & Number Dots */}
        <div className="pt-2 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-7 h-2.5 bg-emerald-400 shadow-sm shadow-emerald-400/50'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Slayd ${dotIdx + 1}`}
              />
            ))}
          </div>

          <div className="text-xs font-bold text-slate-400">
            {texts.slideCounter(currentIndex + 1, total)}
          </div>
        </div>
      </div>

      {/* 3. Thumbnail / Part Quick Switcher */}
      <div className="space-y-3 pt-2">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {texts.organParts}
        </p>

        <div className="flex flex-wrap gap-2">
          {slides.map((slide, idx) => {
            const isCurrent = currentIndex === idx;
            const name =
              lang === 'uz'
                ? slide.labelUz.split('—')[0].split('(')[0].trim()
                : lang === 'ru'
                ? slide.labelRu.split('—')[0].split('(')[0].trim()
                : slide.labelEn.split('—')[0].split('(')[0].trim();

            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isCurrent
                    ? 'bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-500/20 font-black'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                }`}
              >
                <span>{name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Official Scientific Attribution */}
      <div className="border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span className="font-medium text-[11px] sm:text-xs">
          {texts.sourceAttribution}
        </span>
        <span className="font-bold text-emerald-400">
          Farzandly Body Basics
        </span>
      </div>
    </section>
  );
}
