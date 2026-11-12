'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  RotateCcw,
  Volume2,
  VolumeX,
  Star,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Flame,
} from 'lucide-react';
import { useI18n } from '@/context/LanguageContext';
import { SENTENCE_SCENARIOS, ScenarioGame, SentencePiece } from '@/lib/kidsSentenceData';
import { speakUzbek, stopSpeech } from '@/lib/speech';

const fireConfetti = (opts: import('canvas-confetti').Options) =>
  import('canvas-confetti').then((mod) => mod.default(opts));

interface SentenceBuilderGameProps {
  onExit: () => void;
  onAwardXP: (xp: number, identifier: string) => void;
  sound: {
    play: (kind: 'ok' | 'no' | 'win' | 'flip') => void;
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export default function SentenceBuilderGame({ onExit, onAwardXP, sound }: SentenceBuilderGameProps) {
  const { language } = useI18n();
  const isKr = language === 'kr';

  // Game state
  const [selectedLevel, setSelectedLevel] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedPieceIds, setPlacedPieceIds] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalEarnedXP, setTotalEarnedXP] = useState(0);
  const [xpToast, setXpToast] = useState<{ show: boolean; amount: number }>({ show: false, amount: 0 });
  const [isLevelFinished, setIsLevelFinished] = useState(false);
  const [shuffledPieces, setShuffledPieces] = useState<SentencePiece[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const playSentence = useCallback(
    (text: string, audioUrl?: string) => {
      speakUzbek(text, {
        audioUrl,
        muted: sound.muted,
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    },
    [sound.muted]
  );

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  useEffect(() => {
    stopSpeech();
    setIsSpeaking(false);
  }, [currentIndex, selectedLevel]);

  // Filter scenarios by chosen level
  const scenarios = useMemo(() => {
    if (!selectedLevel) return [];
    return SENTENCE_SCENARIOS.filter((s) => s.level === selectedLevel);
  }, [selectedLevel]);

  const currentScenario = scenarios[currentIndex] || scenarios[0];

  // Preload scenario audio so completion playback is instant (0ms latency)
  useEffect(() => {
    if (!currentScenario) return;
    const url = `/audio/kids/${currentScenario.id}-${isKr ? 'kr' : 'uz'}.wav`;
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = url;
  }, [currentScenario, isKr]);

  // Initialize and shuffle available pieces for current scenario
  useEffect(() => {
    if (!currentScenario) return;
    setPlacedPieceIds([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);

    // Shuffle pieces
    const items = [...currentScenario.pieces];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    setShuffledPieces(items);
  }, [currentScenario, currentIndex]);

  // Pieces in target slots
  const filledSlots = useMemo(() => {
    return placedPieceIds.map((id) => currentScenario?.pieces.find((p) => p.id === id)!);
  }, [placedPieceIds, currentScenario]);

  // Available pieces in the pool (not yet placed)
  const availablePieces = useMemo(() => {
    const placedSet = new Set(placedPieceIds);
    return shuffledPieces.filter((p) => !placedSet.has(p.id));
  }, [shuffledPieces, placedPieceIds]);

  // Tap or drag to place into first empty slot
  const handlePlacePiece = (pieceId: string) => {
    if (isAnswerChecked) return;
    if (placedPieceIds.length >= currentScenario.correctOrder.length) return;
    sound.play('flip');
    setPlacedPieceIds((prev) => [...prev, pieceId]);
  };

  // Tap in slot to remove piece back to pool
  const handleRemovePiece = (index: number) => {
    if (isAnswerChecked) return;
    sound.play('flip');
    setPlacedPieceIds((prev) => prev.filter((_, i) => i !== index));
  };

  // Clear all slots
  const handleClearSlots = () => {
    if (isAnswerChecked) return;
    sound.play('flip');
    setPlacedPieceIds([]);
  };

  // Check current sentence
  const handleCheckSentence = () => {
    if (placedPieceIds.length !== currentScenario.correctOrder.length) return;

    const correct = placedPieceIds.every((id, idx) => id === currentScenario.correctOrder[idx]);
    setIsAnswerChecked(true);
    setIsCorrect(correct);

    if (correct) {
      sound.play('win');
      try {
        fireConfetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch {}

      // Award XP
      const reward = currentScenario.xpReward || 15;
      onAwardXP(reward, `gap-tuzish-${currentScenario.id}`);
      setTotalEarnedXP((prev) => prev + reward);
      setXpToast({ show: true, amount: reward });
      setTimeout(() => setXpToast({ show: false, amount: 0 }), 2500);

      // Read completed sentence in natural Uzbek voice (instant via pre-generated pure audio)
      const sentenceText = currentScenario.correctOrder
        .map((id) => {
          const p = currentScenario.pieces.find((x) => x.id === id);
          return isKr ? p?.textKr : p?.textUz;
        })
        .join(' ');
      const audioUrl = `/audio/kids/${currentScenario.id}-${isKr ? 'kr' : 'uz'}.wav`;
      playSentence(sentenceText, audioUrl);
    } else {
      sound.play('no');
    }
  };

  // Advance to next scenario
  const handleNextScenario = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsLevelFinished(true);
      sound.play('win');
      try {
        fireConfetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } catch {}
    }
  };

  /* ------------------------------------------------------------- */
  /* Screen 1: Level Selector                                      */
  /* ------------------------------------------------------------- */
  if (!selectedLevel) {
    const levels = [
      {
        id: 'easy' as const,
        titleUz: '1-Daraja: Oson (3–4 yosh)',
        titleKr: '1-Даража: Осон (3–4 ёш)',
        descUz: '2–3 ta asosiy bo‘lak. Oddiy va qiziqarli gaplar.',
        descKr: '2–3 та асосий бўлак. Оддий ва қизиқарли гаплар.',
        badge: '+10 XP',
        tint: 'from-emerald-500 to-teal-600',
        bg: 'bg-emerald-50 border-emerald-200',
        icon: '🟢',
      },
      {
        id: 'medium' as const,
        titleUz: '2-Daraja: O‘rtacha (5–6 yosh)',
        titleKr: '2-Даража: Ўртача (5–6 ёш)',
        descUz: '3–4 ta bo‘lak + chalg‘ituvchi kartochkalar.',
        descKr: '3–4 та бўлак + чалғитувчи карточкалар.',
        badge: '+15 XP',
        tint: 'from-amber-500 to-orange-600',
        bg: 'bg-amber-50 border-amber-200',
        icon: '🟡',
      },
      {
        id: 'hard' as const,
        titleUz: '3-Daraja: Qiyin (7+ yosh)',
        titleKr: '3-Даража: Қийин (7+ ёш)',
        descUz: '4–5 ta bo‘lak, to‘liq va chiroyli kengaytirilgan gaplar.',
        descKr: '4–5 та бўлак, тўлиқ ва чиройли кенгайтирилган гаплар.',
        badge: '+20 XP',
        tint: 'from-rose-500 to-indigo-600',
        bg: 'bg-rose-50 border-rose-200',
        icon: '🔴',
      },
    ];

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onExit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isKr ? 'Ортга' : 'Ortga'}</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => sound.setMuted((m) => !m)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
              title="Ovoz"
            >
              {sound.muted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
            <span>🧩</span>
            <span>{isKr ? 'Нутқ ривожлантириш ўйини' : 'Nutq rivojlantirish o‘yini'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {isKr ? 'Расмли Гап Тузувчи' : 'Rasmli Gap Tuzuvchi'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            {isKr
              ? 'Катта саҳна расмини кузатинг ва карточкалардан тўғри гапни йиғиб, ХП балларга эга бўлинг!'
              : 'Katta sahna rasmini kuzating va kartochkalardan to‘g‘ri gapni yig‘ib, XP ballarga ega bo‘ling!'}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {levels.map((lvl) => (
            <m.button
              key={lvl.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                sound.play('ok');
                setSelectedLevel(lvl.id);
                setCurrentIndex(0);
                setIsLevelFinished(false);
              }}
              className={`p-5 rounded-3xl border-2 text-left transition-all flex items-center justify-between gap-4 cursor-pointer shadow-sm hover:shadow-md ${lvl.bg}`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{lvl.icon}</span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    {isKr ? lvl.titleKr : lvl.titleUz}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {isKr ? lvl.descKr : lvl.descUz}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className={`px-3 py-1 rounded-full text-white text-xs font-black shadow-xs bg-gradient-to-r ${lvl.tint}`}>
                  {lvl.badge}
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
            </m.button>
          ))}
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------- */
  /* Screen 2: Level Victory Celebration                           */
  /* ------------------------------------------------------------- */
  if (isLevelFinished) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-8">
        <m.div
          initial={{ scale: 0.5, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          className="w-24 h-24 rounded-3xl bg-amber-100 text-amber-600 border-4 border-amber-300 mx-auto flex items-center justify-center shadow-lg text-4xl"
        >
          🏆
        </m.div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {isKr ? 'Ажойиб натижа! Машаллоҳ!' : 'Ajoyib natija! Mashalloh!'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {isKr
              ? 'Сиз ушбу даражадаги барча расмли гапларни муваффақиятли туздингиз.'
              : 'Siz ushbu darajadagi barcha rasmli gaplarni muvaffaqiyatli tuzdingiz.'}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 inline-flex items-center gap-3">
          <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
          <div className="text-left">
            <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              {isKr ? 'Тўпланган умумий ХП' : 'To‘plangan umumiy XP'}
            </div>
            <div className="text-xl font-black text-emerald-700">+{totalEarnedXP} XP</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => {
              sound.play('ok');
              setCurrentIndex(0);
              setIsLevelFinished(false);
            }}
            className="flex-1 py-3 px-4 rounded-2xl bg-white border-2 border-slate-200 hover:bg-slate-50 font-bold text-xs sm:text-sm text-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isKr ? 'Қайта ўйнаш' : 'Qayta o‘ynash'}</span>
          </button>
          <button
            onClick={() => setSelectedLevel(null)}
            className="flex-1 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>{isKr ? 'Бошқа даража' : 'Boshqa daraja'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------- */
  /* Screen 3: Gameplay Board                                      */
  /* ------------------------------------------------------------- */
  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* XP Toast Notification */}
      <AnimatePresence>
        {xpToast.show && (
          <m.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 right-6 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-emerald-300 font-black text-sm"
          >
            <Flame className="w-5 h-5 text-amber-300 fill-amber-300" />
            <span>+{xpToast.amount} XP {isKr ? 'қўшилди!' : 'qo‘shildi!'}</span>
          </m.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setSelectedLevel(null)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isKr ? 'Даражалар' : 'Darajalar'}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            {currentIndex + 1} / {scenarios.length}
          </span>
          <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            <span>+{currentScenario.xpReward} XP</span>
          </span>
          <button
            onClick={() => sound.setMuted((m) => !m)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 transition-colors"
          >
            {sound.muted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Visual Scenario Card */}
      <div className={`p-6 sm:p-8 rounded-3xl border-2 border-slate-200/80 shadow-md bg-gradient-to-br ${currentScenario.sceneGradient} relative overflow-hidden`}>
        {/* Decorative background shapes */}
        <div className="absolute top-2 right-4 text-5xl opacity-20 pointer-events-none select-none">
          {currentScenario.sceneEmoji}
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-slate-200/60 shadow-2xs">
              {currentScenario.sceneTheme}
            </span>
            <button
              onClick={() => {
                const text = isKr ? currentScenario.sceneDescriptionKr : currentScenario.sceneDescriptionUz;
                playSentence(text);
              }}
              className="text-xs font-bold text-slate-600 hover:text-emerald-700 bg-white/90 hover:bg-white px-2.5 py-1 rounded-xl shadow-2xs border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'text-emerald-600 animate-pulse' : 'text-emerald-600'}`} />
              <span>{isKr ? 'Таърифни тинглаш' : 'Ta’rifni tinglash'}</span>
            </button>
          </div>

          {/* Large Scene Illustration */}
          <div className="h-40 sm:h-48 rounded-2xl bg-white/90 border-2 border-white shadow-inner flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Visual Sky & Ground Layout */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `linear-gradient(to bottom, ${currentScenario.sceneVisual.skyColor} 60%, ${currentScenario.sceneVisual.groundColor} 100%)`,
              }}
            />

            <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 text-5xl sm:text-6xl animate-pulse">
              <span title="Bosh qahramon">{currentScenario.sceneVisual.mainActorEmoji}</span>
              <span className="text-3xl text-slate-400">➔</span>
              <span title="Obyekt">{currentScenario.sceneVisual.itemEmoji}</span>
              <span title="Harakat">{currentScenario.sceneVisual.actionEmoji}</span>
            </div>

            <p className="relative z-10 text-xs sm:text-sm font-bold text-slate-700 text-center mt-3 max-w-md bg-white/90 px-3 py-1 rounded-full shadow-2xs border border-slate-100">
              {isKr ? currentScenario.sceneDescriptionKr : currentScenario.sceneDescriptionUz}
            </p>
          </div>
        </div>
      </div>

      {/* Target Drop / Placement Slots */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
          <span>{isKr ? 'Гапни тўғри тартибда йиғинг:' : 'Gapni to‘g‘ri tartibda yig‘ing:'}</span>
          {placedPieceIds.length > 0 && !isAnswerChecked && (
            <button
              onClick={handleClearSlots}
              className="text-[11px] text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{isKr ? 'Тозалаш' : 'Tozalash'}</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-4 rounded-3xl bg-slate-100/90 border-2 border-dashed border-slate-300 min-h-[76px]">
          {currentScenario.correctOrder.map((_, idx) => {
            const placed = filledSlots[idx];
            return (
              <m.div
                key={idx}
                layout
                onClick={() => placed && handleRemovePiece(idx)}
                className={`min-w-[90px] sm:min-w-[110px] h-14 rounded-2xl flex items-center justify-center gap-1.5 px-3 border-2 transition-all select-none ${
                  placed
                    ? isAnswerChecked
                      ? isCorrect
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm'
                        : 'bg-rose-50 border-rose-500 text-rose-900 shadow-sm'
                      : 'bg-white border-emerald-400 shadow-sm text-slate-800 cursor-pointer hover:border-rose-400'
                    : 'bg-white/60 border-slate-200 text-slate-300 text-xs font-bold'
                }`}
              >
                {placed ? (
                  <>
                    <span className="text-xl">{placed.emoji}</span>
                    <span className="text-xs sm:text-sm font-black truncate max-w-[85px]">
                      {isKr ? placed.textKr : placed.textUz}
                    </span>
                  </>
                ) : (
                  <span className="text-xs font-extrabold text-slate-400">{idx + 1}-so‘z</span>
                )}
              </m.div>
            );
          })}
        </div>
      </div>

      {/* Available Pieces Pool */}
      <div className="space-y-2 pt-1">
        <div className="text-xs font-bold text-slate-500 px-1">
          {isKr ? 'Керакли сўзларни босинг ёки суриб қўйинг:' : 'Kerakli so‘zlarni bosing yoki surib qo‘ying:'}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-3 rounded-2xl bg-white border-2 border-slate-200 min-h-[64px]">
          {availablePieces.length === 0 ? (
            <span className="text-xs text-slate-400 font-medium italic">
              {isKr ? 'Барча сўзлар жойлаштирилди' : 'Barcha so‘zlar joylashtirildi'}
            </span>
          ) : (
            availablePieces.map((p) => (
              <m.button
                key={p.id}
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlacePiece(p.id)}
                className="px-3.5 py-2.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 border-2 border-slate-200 hover:border-emerald-300 text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer shadow-xs active:shadow-inner"
              >
                <span className="text-lg">{p.emoji}</span>
                <span>{isKr ? p.textKr : p.textUz}</span>
              </m.button>
            ))
          )}
        </div>
      </div>

      {/* Action / Result Feedback Card */}
      <div className="pt-2">
        {isAnswerChecked ? (
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-4 rounded-2xl border-2 flex items-center justify-between gap-3 ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              ) : (
                <HelpCircle className="w-6 h-6 text-rose-600 shrink-0" />
              )}
              <div className="text-xs sm:text-sm font-black flex items-center gap-2">
                <span>
                  {isCorrect
                    ? isKr
                      ? '🎉 Баракалла! Гап тўғри тузилди!'
                      : '🎉 Barakalla! Gap to‘g‘ri tuzildi!'
                    : isKr
                      ? 'Қайта уриниб кўринг, сўзлар тартибини текширинг.'
                      : 'Qayta urinib ko‘ring, so‘zlar tartibini tekshiring.'}
                </span>
                {isCorrect && (
                  <button
                    type="button"
                    onClick={() => {
                      const sentenceText = currentScenario.correctOrder
                        .map((id) => {
                          const p = currentScenario.pieces.find((x) => x.id === id);
                          return isKr ? p?.textKr : p?.textUz;
                        })
                        .join(' ');
                      const audioUrl = `/audio/kids/${currentScenario.id}-${isKr ? 'kr' : 'uz'}.wav`;
                      playSentence(sentenceText, audioUrl);
                    }}
                    title={isKr ? 'Гапни қайта тинглаш' : 'Gapni qayta tinglash'}
                    className="p-1 rounded-lg bg-emerald-200/60 hover:bg-emerald-300 text-emerald-800 transition-colors cursor-pointer"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-bounce text-emerald-900' : ''}`} />
                  </button>
                )}
              </div>
            </div>

            {isCorrect ? (
              <button
                onClick={handleNextScenario}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>{isKr ? 'Кейингиси' : 'Keyingisi'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  sound.play('flip');
                  setIsAnswerChecked(false);
                  setPlacedPieceIds([]);
                }}
                className="px-4 py-2 rounded-xl bg-white border border-rose-300 hover:bg-rose-100 text-rose-800 font-bold text-xs transition-all cursor-pointer shrink-0"
              >
                {isKr ? 'Қайта уриниш' : 'Qayta urinish'}
              </button>
            )}
          </m.div>
        ) : (
          <button
            disabled={placedPieceIds.length !== currentScenario.correctOrder.length}
            onClick={handleCheckSentence}
            className={`w-full py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
              placedPieceIds.length === currentScenario.correctOrder.length
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-emerald-600/20'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isKr ? 'Текшириш' : 'Tekshirish'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
