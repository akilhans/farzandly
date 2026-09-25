'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Clock,
  ArrowLeft,
  ChevronRight,
  Share2,
  Check,
  Award,
  BookOpen,
  Trophy,
  Star,
  Info,
  Layers,
  Lock,
  Crown,
} from 'lucide-react';
import { HealthTopic } from '@/lib/healthData';
import { api } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/LanguageContext';
import { playChimeSound } from '@/lib/gamification';
import DigestiveDiagram from '@/components/DigestiveDiagram';
import BrainAnatomySlideshow from '@/components/BrainAnatomySlideshow';

interface HealthArticleReaderProps {
  topic: HealthTopic;
}

export default function HealthArticleReader({ topic }: HealthArticleReaderProps) {
  const { user } = useAuth();
  const { language } = useI18n();
  const lang = (language === 'ru' || language === 'en' ? language : 'uz') as 'uz' | 'en' | 'ru';
  const isUserPremium = Boolean(user?.isPremium || user?.subscriptionStatus === 'premium');
  const isPaywalled = Boolean(topic.isPremium && !isUserPremium);

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [earnedXP, setEarnedXP] = useState(0);
  const [xpToast, setXpToast] = useState<{ show: boolean; amount: number }>({ show: false, amount: 0 });
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [heroImgError, setHeroImgError] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== 'undefined') {
      const pageTitle =
        lang === 'uz' ? topic.titleUz : lang === 'ru' ? topic.titleRu : topic.title;
      if (navigator.share) {
        navigator.share({
          title: pageTitle,
          url: window.location.href,
        }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const handleSelectAnswer = async (qIdx: number, optIdx: number, correctIdx: number) => {
    if (quizAnswers[qIdx] !== undefined) return;

    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));

    if (optIdx === correctIdx) {
      playChimeSound('correct');
      const reward = 10;
      setEarnedXP((prev) => prev + reward);
      setXpToast({ show: true, amount: reward });
      setTimeout(() => setXpToast({ show: false, amount: 0 }), 2500);

      try {
        await api.recordHealthQuiz(topic.slug, 100, reward);
      } catch (err) {
        console.error('Quiz progress save error:', err);
      }
    } else {
      playChimeSound('wrong');
    }

    const nextCount = Object.keys(quizAnswers).length + 1;
    if (nextCount === topic.quiz.length) {
      setTimeout(() => {
        playChimeSound('victory');
      }, 400);
    }
  };

  // Helper texts per language
  const texts = {
    uz: {
      home: 'Asosiy',
      section: 'Salomatlik (Tana sirlari)',
      readTime: 'daqiqa o‘qish',
      reviewedBy: 'Tibbiy ko‘rikdan o‘tgan:',
      reviewSubtitle: 'Ushbu ma’lumotlar bolalar salomatligi mutaxassislari tomonidan ilmiy asosda tasdiqlangan.',
      share: 'Ulashish',
      copied: 'Havola nusxalandi!',
      termsTitle: 'Yangi tibbiy atamalar va ma’nolari',
      sayPrefix: 'talaffuzi:',
      visualTitle: 'Anatomik tuzilish va ko‘rgazmali tasvir',
      visualCaption: '💡 Bolalar va ota-onalar uchun ko‘rgazmali tana a’zosi sxemasi',
      visualCredit: 'Tibbiyot mutaxassislari ilmiy sxemasi',
      galleryTitle: 'A’zoning batafsil qismlari va anatomik tuzilishi',
      gallerySubtitle: 'Tugmalarni bosib, a’zo qismlarini kattalashtirilgan ko‘rinishda o‘rganing',
      didYouKnow: 'Bilasizmi?',
      takeaways: '📌 Asosiy xulosalar va eslab qoling:',
      quizTitle: 'O‘rganganlaringizni sinab ko‘ring!',
      quizSubtitle: 'Har bir to‘g‘ri javob uchun +10 XP oling va bilimlaringizni mustahkamlang',
      correct: '🎉 To‘g‘ri javob! +10 XP berildi',
      incorrect: 'Noto‘g‘ri. To‘g‘ri variant:',
      quizComplete: 'Ajoyib natija! Mavzu bo‘yicha jami to‘plagan ballaringiz:',
      backBtn: 'Barcha mavzularga qaytish',
      footerNote: 'Farzandly — Bolalar anatomiyasi va salomatlik ensiklopediyasi',
      premiumBadge: 'Farzandly Premium',
      premiumUserBadgeTitle: 'Siz Premium a’zosisiz',
      premiumUserBadgeDesc: 'To‘liq anatomik maqola, mikroskopik tasvirlar va barcha testlar siz uchun ochiq.',
      previewNotice: 'Ushbu maqola Farzandly Premium to‘plamiga kiradi. Bepul dastlabki qismini o‘qishingiz mumkin.',
      paywallTitle: 'Ushbu maqolaning davomini o‘qish uchun Premium obunaga ega bo‘ling',
      paywallSubtitle: 'Tibbiyot mutaxassislari tomonidan tasdiqlangan to‘liq anatomik tahlillar, interaktiv testlar (+10 XP) va eksklyuziv bilimlardan to‘siqlarsiz bahramand bo‘ling.',
      paywallBenefit1: 'To‘liq 19+ bolalar tibbiy va anatomik maqolalari',
      paywallBenefit2: 'Mikroskopik va yuqori aniqlikdagi tana a’zolari tasvirlari',
      paywallBenefit3: 'Mavzu bo‘yicha interaktiv testlar va +10 XP ballar tizimi',
      paywallBenefit4: 'Pediatriya mutaxassislari tasdiqlagan ilmiy tavsiyalar',
      paywallBenefit5: 'Barcha oila a’zolari uchun cheksiz kirish imkoniyati',
      paywallPriceNote: 'Oyiga atigi 39 000 so‘mdan — istalgan vaqtda bekor qilish mumkin',
      upgradeBtn: 'Premium obunaga o‘tish',
      haveAccountBtn: 'Menda hisob bor (Kirish)',
      lockedPreviewNotice: 'Qolgan bo‘limlar faqat Premium a’zolar uchun ochiq',
      lockedQuizTitle: '🔒 Interaktiv test va asosiy xulosalar yopiq',
      lockedQuizSubtitle: 'Ushbu mavzu bo‘yicha bilimlaringizni sinash va +10 XP yutib olish uchun Farzandly Premium obunasini faollashtiring.',
    },
    en: {
      home: 'Home',
      section: 'Health (Body Basics)',
      readTime: 'min read',
      reviewedBy: 'Medically reviewed by:',
      reviewSubtitle: 'Reviewed for scientific accuracy by pediatric health experts.',
      share: 'Share',
      copied: 'Link copied!',
      termsTitle: 'Medical Terms & Pronunciation Guide',
      sayPrefix: 'say:',
      visualTitle: 'Anatomy Visualization & Diagram',
      visualCaption: '💡 Visual body basics guide for kids and parents',
      visualCredit: 'KidsHealth Medical Diagram',
      galleryTitle: 'Detailed Anatomy & Organ Parts',
      gallerySubtitle: 'Click on the buttons below to explore detailed anatomical parts',
      didYouKnow: 'Did You Know?',
      takeaways: '📌 Key Takeaways:',
      quizTitle: 'Test What You Learned!',
      quizSubtitle: 'Earn +10 XP for every correct answer and solidify your knowledge',
      correct: '🎉 Correct answer! +10 XP earned',
      incorrect: 'Incorrect. The correct answer was:',
      quizComplete: 'Awesome job! Total XP gained on this topic:',
      backBtn: 'Back to all health topics',
      footerNote: 'Farzandly — Kids Body Basics & Health Encyclopedia',
      premiumBadge: 'Farzandly Premium',
      premiumUserBadgeTitle: 'You are a Premium Member',
      premiumUserBadgeDesc: 'Full anatomical article, microscopic galleries, and all quizzes are unlocked.',
      previewNotice: 'This story is part of Farzandly Premium. Enjoy the free preview below.',
      paywallTitle: 'Get unlimited access to the rest of this story with Farzandly Premium',
      paywallSubtitle: 'Enjoy full medically-verified anatomical guides, interactive quizzes (+10 XP), and exclusive parental knowledge without limits.',
      paywallBenefit1: 'Complete 19+ kids body basics & health encyclopedia',
      paywallBenefit2: 'High-resolution microscopic & anatomical galleries',
      paywallBenefit3: 'Interactive quizzes with +10 XP reward system',
      paywallBenefit4: 'Pediatric experts verified medical recommendations',
      paywallBenefit5: 'Unlimited access for the entire family',
      paywallPriceNote: 'From only 39,000 UZS/month — cancel anytime',
      upgradeBtn: 'Upgrade to Premium',
      haveAccountBtn: 'Already a member? Sign in',
      lockedPreviewNotice: 'The remaining sections are available to Premium members only',
      lockedQuizTitle: '🔒 Interactive Quiz & Key Takeaways are Locked',
      lockedQuizSubtitle: 'Activate Farzandly Premium to test your knowledge on this topic and earn +10 XP.',
    },
    ru: {
      home: 'Главная',
      section: 'Здоровье (Основы тела)',
      readTime: 'мин. чтения',
      reviewedBy: 'Проверено медицинскими экспертами:',
      reviewSubtitle: 'Материал проверен на научную достоверность детскими врачами и специалистами.',
      share: 'Поделиться',
      copied: 'Ссылка скопирована!',
      termsTitle: 'Медицинские термины и произношение',
      sayPrefix: 'произношение:',
      visualTitle: 'Анатомическая визуализация и схема',
      visualCaption: '💡 Наглядное пособие по строению органов для детей и родителей',
      visualCredit: 'Медицинская визуализация',
      galleryTitle: 'Детальное строение и отделы органа',
      gallerySubtitle: 'Нажимайте на отделы ниже, чтобы изучить подробное строение',
      didYouKnow: 'А вы знали?',
      takeaways: '📌 Главные выводы и памятка:',
      quizTitle: 'Проверьте свои знания!',
      quizSubtitle: 'Получайте +10 XP за каждый правильный ответ!',
      correct: '🎉 Правильно! +10 XP начислено',
      incorrect: 'Неверно. Правильный вариант:',
      quizComplete: 'Отличный результат! Всего получено за эту тему:',
      backBtn: 'Вернуться ко всем темам',
      footerNote: 'Farzandly — Детская анатомия и основы здоровья',
      premiumBadge: 'Farzandly Premium',
      premiumUserBadgeTitle: 'Вы являетесь Premium-пользователем',
      premiumUserBadgeDesc: 'Полная статья, микроскопические снимки органов и тесты открыты.',
      previewNotice: 'Эта статья входит в коллекцию Farzandly Premium. Ниже доступен бесплатный фрагмент.',
      paywallTitle: 'Оформите подписку Farzandly Premium, чтобы дочитать статью до конца',
      paywallSubtitle: 'Получите неограниченный доступ к медицинским статьям, интерактивным тестам (+10 XP) и эксклюзивным материалам.',
      paywallBenefit1: 'Полная детская медицинская энциклопедия из 19+ тем',
      paywallBenefit2: 'Микроскопические и анатомические иллюстрации высокой четкости',
      paywallBenefit3: 'Интерактивные тесты и система начисления +10 XP',
      paywallBenefit4: 'Рекомендации, проверенные экспертами-педиатрами',
      paywallBenefit5: 'Неограниченный доступ для всей семьи',
      paywallPriceNote: 'От 39 000 сум в месяц — возможность отмены в любое время',
      upgradeBtn: 'Подключить Premium',
      haveAccountBtn: 'Уже есть аккаунт? Войти',
      lockedPreviewNotice: 'Остальные разделы доступны только подписчикам Premium',
      lockedQuizTitle: '🔒 Интерактивный тест и выводы заблокированы',
      lockedQuizSubtitle: 'Подключите Farzandly Premium, чтобы проверить знания по теме и заработать +10 XP.',
    },
  }[lang];

  const currentTitle = lang === 'uz' ? topic.titleUz : lang === 'ru' ? topic.titleRu : topic.title;
  const currentSubtitle = lang === 'uz' ? topic.subtitleUz : lang === 'ru' ? topic.subtitleRu : topic.subtitle;
  const currentSystem = lang === 'uz' ? topic.systemUz : lang === 'ru' ? topic.systemRu : topic.system;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Floating XP Toast */}
      {xpToast.show && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-emerald-300">
          <Award className="w-6 h-6 text-amber-300 animate-spin" />
          <div className="text-sm font-black">
            +{xpToast.amount} XP {lang === 'uz' ? 'qobiliyatlaringizga qo‘shildi!' : lang === 'ru' ? 'добавлено к опыту!' : 'added to your XP!'}
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-400">
        <Link href="/" className="hover:text-emerald-700">{texts.home}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/salomatlik" className="hover:text-emerald-700">{texts.section}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-600 line-clamp-1">{currentTitle}</span>
      </nav>

      {/* Header */}
      <header className="space-y-5 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
              {currentSystem}
            </span>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {topic.readingMinutes} {texts.readTime}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {currentTitle}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
          {currentSubtitle}
        </p>

        {/* Medical Review Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-emerald-950">
                {texts.reviewedBy} <span className="underline decoration-emerald-400">{topic.medicallyReviewedBy}</span>
              </p>
              <p className="text-emerald-700 font-medium">
                {texts.reviewSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="self-end sm:self-center bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? texts.copied : texts.share}</span>
          </button>
        </div>
      </header>

      {/* Premium Status Banner */}
      {topic.isPremium && (
        <div className="rounded-2xl overflow-hidden shadow-xs">
          {isUserPremium ? (
            <div className="bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-300 rounded-2xl p-4 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-black text-amber-950 block">{texts.premiumUserBadgeTitle}</span>
                  <span className="text-slate-600 font-medium">{texts.premiumUserBadgeDesc}</span>
                </div>
              </div>
              <span className="bg-amber-500 text-white font-black px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider shrink-0">
                VIP
              </span>
            </div>
          ) : (
            <div className="bg-amber-50/90 border border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-black text-amber-950 block">{texts.premiumBadge}</span>
                  <span className="text-amber-900 font-medium">{texts.previewNotice}</span>
                </div>
              </div>
              <Link
                href="/premium"
                className="bg-amber-500 hover:bg-amber-600 text-white font-black px-3.5 py-1.5 rounded-xl text-xs transition-all shrink-0 inline-flex items-center gap-1.5 shadow-2xs"
              >
                <Crown className="w-3.5 h-3.5 text-amber-200" />
                <span>{texts.upgradeBtn}</span>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Pronunciation Terms (NO AUDIO PLAYBACK, CLEAN ANATOMICAL TERMS CARD) */}
      {topic.pronunciations && topic.pronunciations.length > 0 && (
        <section className="bg-amber-50/80 border-2 border-amber-200 rounded-3xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-black text-sm uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>{texts.termsTitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topic.pronunciations.map((p) => {
              const meaning = lang === 'uz' ? p.meaningUz : lang === 'ru' ? p.meaningRu : p.meaningEn;
              return (
                <div
                  key={p.term}
                  className="bg-white rounded-2xl p-4 border border-amber-200 shadow-2xs space-y-1.5 hover:border-amber-400 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-800 text-base">{p.term}</span>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                      {texts.sayPrefix} <span className="font-semibold tracking-wide">{p.phonetic}</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    {meaning}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Main Visual Asset (Photo / GIF / Diagram) */}
      {/* Main Visual Asset (Photo / GIF / Diagram / Default Anatomy) */}
      {(() => {
        const heroSrc = !heroImgError && topic.heroImage ? topic.heroImage : '/body basics/default-anatomy.svg';
        return (
          <section className="bg-slate-900/95 text-white rounded-3xl p-4 sm:p-6 border-2 border-emerald-500/40 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                  {texts.visualTitle}
                </span>
              </div>
              <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">
                {currentSystem}
              </span>
            </div>

            <div className="relative w-full max-h-[500px] flex items-center justify-center bg-slate-950/70 rounded-2xl p-2 sm:p-4 overflow-hidden border border-slate-800">
              <img
                src={heroSrc}
                alt={currentTitle}
                onError={() => setHeroImgError(true)}
                className="max-h-[460px] w-auto max-w-full object-contain rounded-xl shadow-lg"
                loading="eager"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
              <span>{texts.visualCaption}</span>
              <span className="font-semibold text-emerald-400">{texts.visualCredit}</span>
            </div>
          </section>
        );
      })()}

      {/* Brain Anatomy Interactive Slideshow (The Anatomy of the Brain) */}
      {(topic.slug === 'bosh-miya-va-asab-tizimi' || topic.id === 'brain-nervous-system') &&
        topic.galleryImages &&
        topic.galleryImages.length > 0 && (
          <BrainAnatomySlideshow slides={topic.galleryImages} lang={lang} />
        )}

      {/* Anatomical Parts Gallery for other topics */}
      {topic.slug !== 'bosh-miya-va-asab-tizimi' &&
        topic.id !== 'brain-nervous-system' &&
        topic.galleryImages &&
        topic.galleryImages.length > 0 && (
        <section className="bg-emerald-50/70 border-2 border-emerald-200 rounded-3xl p-5 sm:p-7 space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-base sm:text-lg">
                {texts.galleryTitle}
              </h3>
              <p className="text-xs text-slate-600">
                {texts.gallerySubtitle}
              </p>
            </div>
          </div>

          {/* Active Gallery Viewer */}
          {topic.galleryImages[selectedGalleryIdx] && (
            <div className="bg-white rounded-2xl border border-emerald-200 overflow-hidden shadow-sm">
              <div className="p-3 bg-slate-900 flex items-center justify-center min-h-[300px] max-h-[420px]">
                <img
                  src={topic.galleryImages[selectedGalleryIdx].url}
                  alt={topic.galleryImages[selectedGalleryIdx].labelEn}
                  className="max-h-[380px] w-auto max-w-full object-contain rounded-lg"
                />
              </div>
              <div className="p-4 bg-emerald-900 text-white space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm sm:text-base">
                    {lang === 'uz'
                      ? topic.galleryImages[selectedGalleryIdx].labelUz
                      : lang === 'ru'
                      ? topic.galleryImages[selectedGalleryIdx].labelRu
                      : topic.galleryImages[selectedGalleryIdx].labelEn}
                  </span>
                  <span className="text-xs font-bold text-emerald-200 bg-emerald-800/80 px-2.5 py-1 rounded-lg">
                    {selectedGalleryIdx + 1} / {topic.galleryImages.length}
                  </span>
                </div>
                {(() => {
                  const desc =
                    lang === 'uz'
                      ? topic.galleryImages[selectedGalleryIdx].descriptionUz
                      : lang === 'ru'
                      ? topic.galleryImages[selectedGalleryIdx].descriptionRu
                      : topic.galleryImages[selectedGalleryIdx].descriptionEn;
                  if (!desc) return null;
                  return (
                    <p className="text-xs text-emerald-100 font-medium leading-relaxed">
                      {desc}
                    </p>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Gallery Thumbnails / Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {topic.galleryImages.map((img, idx) => {
              const label = lang === 'uz' ? img.labelUz : lang === 'ru' ? img.labelRu : img.labelEn;
              const isSelected = selectedGalleryIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryIdx(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-400'
                  }`}
                >
                  {label.split('—')[0].trim()}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Main Content Sections with Medium.com-style partial preview paywall */}
      {(() => {
        const freeSectionsCount = isPaywalled
          ? Math.min(2, Math.max(1, Math.floor(topic.sections.length / 2)))
          : topic.sections.length;
        const visibleSections = topic.sections.slice(0, freeSectionsCount);
        const lockedSections = isPaywalled ? topic.sections.slice(freeSectionsCount) : [];

        return (
          <section className="space-y-8">
            {visibleSections.map((section, sIdx) => {
              const sectionTitle =
                lang === 'uz' && section.titleUz
                  ? section.titleUz
                  : lang === 'ru' && section.titleRu
                  ? section.titleRu
                  : section.title;

              const paragraphs =
                lang === 'uz' && section.paragraphsUz
                  ? section.paragraphsUz
                  : lang === 'ru' && section.paragraphsRu
                  ? section.paragraphsRu
                  : section.paragraphs;

              const highlight = section.highlightBox
                ? {
                    title:
                      lang === 'uz' && section.highlightBox.titleUz
                        ? section.highlightBox.titleUz
                        : lang === 'ru' && section.highlightBox.titleRu
                        ? section.highlightBox.titleRu
                        : section.highlightBox.title,
                    text:
                      lang === 'uz' && section.highlightBox.textUz
                        ? section.highlightBox.textUz
                        : lang === 'ru' && section.highlightBox.textRu
                        ? section.highlightBox.textRu
                        : section.highlightBox.text,
                  }
                : null;

              const isLastVisibleSection = isPaywalled && sIdx === visibleSections.length - 1;

              return (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                    {sectionTitle}
                  </h2>

                  {isLastVisibleSection ? (
                    <div className="relative overflow-hidden max-h-48 sm:max-h-56">
                      <div className="space-y-3.5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                        {paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                      {/* Medium.com-style smooth fade gradient mask */}
                      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="space-y-3.5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                      {paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {!isLastVisibleSection && highlight && (
                    <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-2xl p-4 sm:p-5 space-y-1 my-4">
                      <h4 className="font-black text-emerald-950 text-sm sm:text-base">
                        {highlight.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                        {highlight.text}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Medium.com-style Conversion Card */}
            {isPaywalled && (
              <div className="my-8 rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border-2 border-amber-400/80 p-6 sm:p-9 text-white shadow-2xl relative overflow-hidden">
                {/* Ambient decorative glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    <Crown className="w-3.5 h-3.5 text-slate-950" />
                    <span>{texts.premiumBadge}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {texts.paywallTitle}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                      {texts.paywallSubtitle}
                    </p>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {[
                      texts.paywallBenefit1,
                      texts.paywallBenefit2,
                      texts.paywallBenefit3,
                      texts.paywallBenefit4,
                      texts.paywallBenefit5,
                    ].map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs text-amber-300 font-bold block">
                        {texts.paywallPriceNote}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <Link
                        href="/premium"
                        className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
                      >
                        <Crown className="w-4 h-4 text-slate-950" />
                        <span>{texts.upgradeBtn}</span>
                      </Link>
                      {!user && (
                        <Link
                          href="/kirish"
                          className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-3 rounded-xl border border-white/20 text-xs text-center transition-all cursor-pointer"
                        >
                          {texts.haveAccountBtn}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blurred Teaser of Locked Sections */}
            {isPaywalled && lockedSections.length > 0 && (
              <div className="space-y-6 pt-2">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{texts.lockedPreviewNotice}</span>
                </div>

                <div className="relative select-none pointer-events-none filter blur-[5px] opacity-35 space-y-8">
                  {lockedSections.map((sec, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                        {lang === 'uz' && sec.titleUz
                          ? sec.titleUz
                          : lang === 'ru' && sec.titleRu
                          ? sec.titleRu
                          : sec.title}
                      </h3>
                      <div className="space-y-2 text-base text-slate-700">
                        {(lang === 'uz' && sec.paragraphsUz
                          ? sec.paragraphsUz
                          : lang === 'ru' && sec.paragraphsRu
                          ? sec.paragraphsRu
                          : sec.paragraphs
                        )
                          .slice(0, 2)
                          .map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })()}

      {/* Interactive Anatomy Diagram (Digestive System) */}
      {topic.id === 'burp-digestive-system' && (
        <section className="pt-4 space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">
            {lang === 'uz'
              ? 'Qizilo‘ngach va oshqozonning joylashuvi'
              : lang === 'ru'
              ? 'Расположение пищевода и желудка'
              : 'Where Does the Gas Travel?'}
          </h2>
          <DigestiveDiagram highlightOrgan="esophagus" lang={lang === 'ru' ? 'ru' : lang === 'uz' ? 'uz' : 'en'} />
        </section>
      )}

      {/* Fun Facts Carousel/Grid */}
      {topic.funFacts && topic.funFacts.length > 0 && (
        <section className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-200">
            <BookOpen className="w-4 h-4 text-amber-200" />
            <span>{texts.didYouKnow}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topic.funFacts.map((fact, idx) => {
              const text = lang === 'uz' ? fact.uz : lang === 'ru' ? fact.ru : fact.en;
              return (
                <div
                  key={idx}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-sm leading-relaxed font-medium"
                >
                  💡 {text}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Key Takeaways & Interactive Gamified Quiz */}
      {isPaywalled ? (
        <section className="bg-gradient-to-br from-slate-50 to-amber-50/50 border-2 border-dashed border-amber-300 rounded-3xl p-6 sm:p-10 text-center space-y-5 shadow-xs">
          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="text-xl font-black text-slate-900">
              {texts.lockedQuizTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {texts.lockedQuizSubtitle}
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/premium"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer text-sm"
            >
              <Crown className="w-4 h-4 text-amber-200" />
              <span>{texts.upgradeBtn}</span>
            </Link>
            {!user && (
              <Link
                href="/kirish"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-all cursor-pointer"
              >
                {texts.haveAccountBtn}
              </Link>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* Key Takeaways */}
          {topic.takeaways && topic.takeaways.length > 0 && (
            <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-black text-emerald-400">
                {texts.takeaways}
              </h3>
              <ul className="space-y-2.5">
                {topic.takeaways.map((item, idx) => {
                  const text = lang === 'uz' ? item.uz : lang === 'ru' ? item.ru : item.en;
                  return (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* Interactive Gamified Quiz (+10 XP per question) */}
          {topic.quiz && topic.quiz.length > 0 && (
            <section className="bg-white border-2 border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                    <Trophy className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-800">
                      {texts.quizTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {texts.quizSubtitle}
                    </p>
                  </div>
                </div>

                {earnedXP > 0 && (
                  <div className="bg-emerald-600 text-white px-3.5 py-1.5 rounded-full font-black text-xs flex items-center gap-1.5 shadow-sm">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>+{earnedXP} XP</span>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {topic.quiz.map((q, qIdx) => {
                  const selectedOpt = quizAnswers[qIdx];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = selectedOpt === q.correctIndex;
                  const questionText = lang === 'uz' ? q.questionUz : lang === 'ru' ? q.questionRu : q.question;
                  const options = lang === 'uz' ? q.optionsUz : lang === 'ru' ? q.optionsRu : q.options;
                  const explanation =
                    lang === 'uz' ? q.explanationUz : lang === 'ru' ? q.explanationRu : q.explanation;

                  return (
                    <div key={qIdx} className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center justify-between">
                        <p className="font-black text-slate-800 text-sm sm:text-base">
                          {qIdx + 1}. {questionText}
                        </p>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0 ml-2">
                          +10 XP
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {options.map((opt, optIdx) => {
                          const isThisSelected = selectedOpt === optIdx;
                          let btnStyle = 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200';
                          if (isAnswered) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                            } else if (isThisSelected && !isCorrect) {
                              btnStyle = 'bg-rose-600 text-white border-rose-600';
                            } else {
                              btnStyle = 'bg-white text-slate-400 border-slate-200 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isAnswered}
                              onClick={() => handleSelectAnswer(qIdx, optIdx, q.correctIndex)}
                              className={`p-3 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {isAnswered && optIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-1" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <div
                          className={`p-3.5 rounded-xl text-xs font-semibold leading-relaxed ${
                            isCorrect
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : 'bg-rose-100 text-rose-900 border border-rose-300'
                          }`}
                        >
                          {isCorrect ? texts.correct : `${texts.incorrect} ${options[q.correctIndex]}. `}
                          <span className="block mt-1 font-normal text-slate-700">{explanation}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Completion celebration banner */}
              {Object.keys(quizAnswers).length === topic.quiz.length && (
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-5 rounded-2xl flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-amber-300 shrink-0" />
                    <div>
                      <h4 className="font-black text-sm sm:text-base">
                        {texts.quizComplete}
                      </h4>
                      <p className="text-xs text-emerald-100">
                        {earnedXP} / {topic.quiz.length * 10} XP
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-amber-300">
                    +{earnedXP} XP
                  </div>
                </div>
              )}
            </section>
          )}
        </>
      )}

      {/* Footer Back navigation */}
      <footer className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/salomatlik"
          className="btn-outline py-2.5 px-5 text-sm font-bold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{texts.backBtn}</span>
        </Link>

        <span className="text-xs text-slate-400 font-bold">
          {texts.footerNote}
        </span>
      </footer>
    </article>
  );
}
