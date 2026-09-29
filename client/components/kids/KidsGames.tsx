'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCcw, Volume2, VolumeX, Star, ArrowRight, Sparkles } from 'lucide-react';
import { EASE_OUT, SPRING_POP } from '@/lib/motion';

const fireConfetti = (opts: import('canvas-confetti').Options) =>
  import('canvas-confetti').then((mod) => mod.default(opts));

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const shuffle = <T,>(arr: readonly T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];

type SoundKind = 'ok' | 'no' | 'win' | 'flip';

/** Tiny synthesized sound effects — no audio files to download. */
function useSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [muted, setMuted] = useState(false);

  const play = useCallback(
    (kind: SoundKind) => {
      if (muted || typeof window === 'undefined') return;
      try {
        if (!ctxRef.current) ctxRef.current = new AudioContext();
        const ctx = ctxRef.current;
        const notes = { ok: [660, 880], no: [260, 200], win: [523, 659, 784, 1047], flip: [520] }[kind];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = kind === 'no' ? 'triangle' : 'sine';
          osc.frequency.value = freq;
          const t = ctx.currentTime + i * (kind === 'win' ? 0.11 : 0.08);
          const len = kind === 'flip' ? 0.07 : kind === 'win' ? 0.35 : 0.22;
          gain.gain.setValueAtTime(0.0001, t);
          gain.gain.exponentialRampToValueAtTime(kind === 'no' ? 0.08 : 0.16, t + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + len);
          osc.connect(gain).connect(ctx.destination);
          osc.start(t);
          osc.stop(t + len + 0.05);
        });
      } catch {
        /* audio is a nice-to-have */
      }
    },
    [muted]
  );

  useEffect(() => () => void ctxRef.current?.close(), []);

  return { play, muted, setMuted };
}

type Sound = ReturnType<typeof useSound>;

/* ------------------------------------------------------------------ */
/* Game catalogue                                                      */
/* ------------------------------------------------------------------ */

type GameId = 'xotira' | 'sanash' | 'ranglar' | 'ortiqcha';

const GAMES: Array<{ id: GameId; emoji: string; title: string; desc: string; age: string; tint: string }> = [
  {
    id: 'xotira',
    emoji: '🧠',
    title: 'Xotira o‘yini',
    desc: 'Kartalarni ochib, bir xil hayvonlar juftini toping.',
    age: '3+ yosh',
    tint: 'bg-emerald-50 border-emerald-200',
  },
  {
    id: 'sanash',
    emoji: '🔢',
    title: 'Sanashni o‘rganamiz',
    desc: 'Nechta narsa borligini sanab, to‘g‘ri sonni tanlang.',
    age: '3+ yosh',
    tint: 'bg-sky-50 border-sky-200',
  },
  {
    id: 'ranglar',
    emoji: '🎨',
    title: 'Ranglarni top',
    desc: 'Aytilgan rangni topib, uning nomini yod oling.',
    age: '2+ yosh',
    tint: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'ortiqcha',
    emoji: '🔍',
    title: 'Qaysi biri ortiqcha?',
    desc: 'To‘rttasidan boshqalariga o‘xshamaganini toping.',
    age: '4+ yosh',
    tint: 'bg-rose-50 border-rose-200',
  },
];

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function GameHeader({
  title,
  onExit,
  onRestart,
  sound,
  right,
}: {
  title: string;
  onExit: () => void;
  onRestart: () => void;
  sound: Sound;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2 mb-5">
      <button
        type="button"
        onClick={onExit}
        className="btn-outline px-3 py-2 text-sm gap-1.5 cursor-pointer"
        aria-label="O‘yinlar ro‘yxatiga qaytish"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">O‘yinlar</span>
      </button>
      <h2 className="text-lg sm:text-2xl font-black text-slate-800 text-center truncate">{title}</h2>
      <div className="flex items-center gap-2">
        {right}
        <button
          type="button"
          onClick={() => sound.setMuted(!sound.muted)}
          className="btn-outline p-2 cursor-pointer"
          aria-label={sound.muted ? 'Ovozni yoqish' : 'Ovozni o‘chirish'}
        >
          {sound.muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <button type="button" onClick={onRestart} className="btn-outline p-2 cursor-pointer" aria-label="Qaytadan boshlash">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function WinPanel({
  stars,
  detail,
  onAgain,
  onExit,
}: {
  stars: number;
  detail: string;
  onAgain: () => void;
  onExit: () => void;
}) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="text-center py-8 sm:py-12 space-y-5"
      role="status"
    >
      <div className="flex items-center justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <m.span
            key={i}
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ ...SPRING_POP, delay: 0.25 + i * 0.18 }}
          >
            <Star
              className={`w-12 h-12 sm:w-14 sm:h-14 ${
                i < stars ? 'fill-amber-400 text-amber-500' : 'fill-slate-100 text-slate-200'
              }`}
            />
          </m.span>
        ))}
      </div>
      <h3 className="text-3xl sm:text-4xl font-black text-slate-800">Barakalla! 🎉</h3>
      <p className="text-slate-600 font-medium">{detail}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button type="button" onClick={onAgain} className="btn-primary px-7 py-3.5 text-base gap-2 cursor-pointer w-full sm:w-auto">
          <RotateCcw className="w-5 h-5" />
          Yana o‘ynash
        </button>
        <button type="button" onClick={onExit} className="btn-outline px-7 py-3.5 text-base cursor-pointer w-full sm:w-auto">
          Boshqa o‘yin
        </button>
      </div>
    </m.div>
  );
}

const celebrate = (sound: Sound) => {
  sound.play('win');
  fireConfetti({ particleCount: 110, spread: 75, origin: { y: 0.65 }, disableForReducedMotion: true });
};

/* ------------------------------------------------------------------ */
/* 1. Memory                                                           */
/* ------------------------------------------------------------------ */

const ANIMALS = ['🐱', '🐶', '🐰', '🦊', '🐻', '🐼', '🐸', '🦁', '🐵', '🐧'];

type MemCard = { id: number; face: string; matched: boolean };

const makeDeck = (pairs: number): MemCard[] =>
  shuffle(shuffle(ANIMALS).slice(0, pairs).flatMap((f) => [f, f])).map((face, id) => ({ id, face, matched: false }));

function MemoryGame({ onExit, sound }: { onExit: () => void; sound: Sound }) {
  const [pairs, setPairs] = useState(4);
  const [deck, setDeck] = useState<MemCard[]>(() => makeDeck(4));
  const [open, setOpen] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const done = deck.every((c) => c.matched);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (done) celebrate(sound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const restart = (p = pairs) => {
    if (timer.current) clearTimeout(timer.current);
    setPairs(p);
    setDeck(makeDeck(p));
    setOpen([]);
    setMoves(0);
  };

  const flip = (i: number) => {
    if (open.length === 2 || open.includes(i) || deck[i].matched) return;
    sound.play('flip');
    const next = [...open, i];
    setOpen(next);
    if (next.length < 2) return;
    setMoves((n) => n + 1);
    const [a, b] = next;
    if (deck[a].face === deck[b].face) {
      timer.current = setTimeout(() => {
        setDeck((d) => d.map((c, k) => (k === a || k === b ? { ...c, matched: true } : c)));
        setOpen([]);
        sound.play('ok');
      }, 400);
    } else {
      timer.current = setTimeout(() => setOpen([]), 950);
    }
  };

  const stars = moves <= pairs + 2 ? 3 : moves <= pairs * 2 ? 2 : 1;

  return (
    <div>
      <GameHeader title="Xotira o‘yini" onExit={onExit} onRestart={() => restart()} sound={sound} />
      {done ? (
        <WinPanel
          stars={stars}
          detail={`Hamma juftlarni ${moves} ta urinishda topdingiz!`}
          onAgain={() => restart()}
          onExit={onExit}
        />
      ) : (
        <>
          <div className="flex items-center justify-between mb-4 text-sm font-bold text-slate-600">
            <div className="flex gap-2" role="group" aria-label="Qiyinlik">
              {[
                { p: 4, label: 'Oson' },
                { p: 6, label: 'Qiyinroq' },
              ].map(({ p, label }) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => restart(p)}
                  aria-pressed={pairs === p}
                  className={`px-3.5 py-1.5 rounded-xl border-2 cursor-pointer transition-colors ${
                    pairs === p ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <span>Urinishlar: {moves}</span>
          </div>

          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto" style={{ perspective: 900 }}>
            {deck.map((card, i) => {
              const up = card.matched || open.includes(i);
              return (
                <m.button
                  key={card.id}
                  type="button"
                  onClick={() => flip(i)}
                  aria-label={up ? card.face : 'Yopiq karta'}
                  disabled={card.matched}
                  className="relative aspect-square cursor-pointer [transform-style:preserve-3d] focus-visible:outline-4 focus-visible:outline-emerald-400 rounded-2xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0, rotateY: up ? 180 : 0, scale: card.matched ? 0.94 : 1 }}
                  transition={{
                    opacity: { delay: i * 0.03 },
                    y: { delay: i * 0.03, duration: 0.4, ease: EASE_OUT },
                    rotateY: { duration: 0.45, ease: EASE_OUT },
                    scale: SPRING_POP,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* back */}
                  <span className="absolute inset-0 rounded-2xl bg-emerald-600 border-b-4 border-emerald-800 flex items-center justify-center text-3xl sm:text-4xl font-black text-emerald-200 [backface-visibility:hidden]">
                    ?
                  </span>
                  {/* face */}
                  <span
                    className={`absolute inset-0 rounded-2xl border-2 border-b-4 flex items-center justify-center text-4xl sm:text-5xl [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                      card.matched ? 'bg-emerald-50 border-emerald-400' : 'bg-white border-slate-200'
                    }`}
                  >
                    {card.face}
                  </span>
                </m.button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2–4. Round-based quiz games                                         */
/* ------------------------------------------------------------------ */

type Option = { key: string; label: string; content: React.ReactNode; className?: string; style?: React.CSSProperties };
type Round = { prompt: React.ReactNode; options: Option[]; answer: string; explain: React.ReactNode };

const ROUNDS = 5;

function QuizGame({
  title,
  makeRounds,
  onExit,
  sound,
  optionGrid = 'grid-cols-3',
}: {
  title: string;
  makeRounds: () => Round[];
  onExit: () => void;
  sound: Sound;
  optionGrid?: string;
}) {
  const [rounds, setRounds] = useState<Round[]>(makeRounds);
  const [idx, setIdx] = useState(0);
  const [wrong, setWrong] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);
  const [firstTry, setFirstTry] = useState(0);
  const done = idx >= rounds.length;
  const round = rounds[idx];

  useEffect(() => {
    if (done) celebrate(sound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const restart = () => {
    setRounds(makeRounds());
    setIdx(0);
    setWrong([]);
    setSolved(false);
    setFirstTry(0);
  };

  const choose = (key: string) => {
    if (solved || wrong.includes(key)) return;
    if (key === round.answer) {
      setSolved(true);
      if (wrong.length === 0) setFirstTry((n) => n + 1);
      sound.play('ok');
    } else {
      setWrong((w) => [...w, key]);
      sound.play('no');
    }
  };

  const next = () => {
    setIdx((i) => i + 1);
    setWrong([]);
    setSolved(false);
  };

  const stars = firstTry >= ROUNDS ? 3 : firstTry >= 3 ? 2 : 1;

  return (
    <div>
      <GameHeader
        title={title}
        onExit={onExit}
        onRestart={restart}
        sound={sound}
      />

      {/* progress */}
      <div className="flex items-center justify-center gap-2 mb-6" aria-label={`Savol ${Math.min(idx + 1, ROUNDS)} / ${ROUNDS}`}>
        {rounds.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i < idx ? 'w-8 bg-emerald-500' : i === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-200'
            }`}
          />
        ))}
      </div>

      {done ? (
        <WinPanel
          stars={stars}
          detail={`${ROUNDS} ta savoldan ${firstTry} tasini birinchi urinishda topdingiz!`}
          onAgain={restart}
          onExit={onExit}
        />
      ) : (
        <AnimatePresence mode="wait">
          <m.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="space-y-6"
          >
            <div className="text-center">{round.prompt}</div>

            <div className={`grid ${optionGrid} gap-3 sm:gap-4 max-w-xl mx-auto`}>
              {round.options.map((o) => {
                const isWrong = wrong.includes(o.key);
                const isRight = solved && o.key === round.answer;
                return (
                  <m.button
                    key={o.key}
                    type="button"
                    onClick={() => choose(o.key)}
                    aria-label={o.label}
                    disabled={isWrong || (solved && !isRight)}
                    animate={
                      isWrong
                        ? { x: [0, -8, 8, -5, 5, 0], opacity: 0.35 }
                        : isRight
                        ? { scale: [1, 1.12, 1.04], opacity: 1 }
                        : { opacity: solved ? 0.35 : 1 }
                    }
                    transition={{ duration: 0.45 }}
                    whileTap={{ scale: 0.94 }}
                    className={`min-h-20 sm:min-h-24 rounded-3xl border-2 border-b-[6px] flex items-center justify-center cursor-pointer disabled:cursor-default focus-visible:outline-4 focus-visible:outline-emerald-400 ${
                      isRight ? 'border-emerald-500 bg-emerald-50 ring-4 ring-emerald-200' : 'border-slate-200 bg-white hover:border-emerald-300'
                    } ${o.className ?? ''}`}
                    style={o.style}
                  >
                    {o.content}
                  </m.button>
                );
              })}
            </div>

            <div className="min-h-24 flex flex-col items-center justify-center gap-3" aria-live="polite">
              {solved ? (
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-3"
                >
                  <p className="text-lg sm:text-xl font-black text-emerald-700 text-center">{round.explain}</p>
                  <button type="button" onClick={next} className="btn-primary px-7 py-3 text-base gap-2 cursor-pointer">
                    {idx + 1 < ROUNDS ? 'Keyingisi' : 'Natija'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </m.div>
              ) : wrong.length > 0 ? (
                <p className="text-base font-bold text-amber-700">Hechqisi yo‘q, yana urinib ko‘ring! 💪</p>
              ) : null}
            </div>
          </m.div>
        </AnimatePresence>
      )}
    </div>
  );
}

/* ---------- Counting ---------- */

const NUMBER_WORDS = ['', 'bir', 'ikki', 'uch', 'to‘rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to‘qqiz', 'o‘n'];
const COUNT_THINGS = [
  { e: '🍎', name: 'olma' },
  { e: '🍐', name: 'nok' },
  { e: '⭐', name: 'yulduz' },
  { e: '🎈', name: 'shar' },
  { e: '🐤', name: 'jo‘ja' },
  { e: '🐟', name: 'baliq' },
  { e: '🌸', name: 'gul' },
];
// Numbers grow each round so the youngest start easy.
const COUNT_MAX = [3, 5, 6, 8, 10];

const makeCountRounds = (): Round[] =>
  COUNT_MAX.map((max) => {
    const thing = pick(COUNT_THINGS);
    const n = 1 + Math.floor(Math.random() * max);
    const distractors = shuffle(
      Array.from({ length: 10 }, (_, i) => i + 1).filter((k) => k !== n && Math.abs(k - n) <= 3)
    ).slice(0, 2);
    return {
      prompt: (
        <div className="space-y-4">
          <p className="text-xl sm:text-2xl font-black text-slate-800">Nechta {thing.name} bor?</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-md mx-auto bg-sky-50 border-2 border-sky-100 rounded-3xl p-4 sm:p-6 min-h-28">
            {Array.from({ length: n }, (_, i) => (
              <m.span
                key={i}
                className="text-4xl sm:text-5xl select-none"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ...SPRING_POP, delay: 0.15 + i * 0.07 }}
                aria-hidden
              >
                {thing.e}
              </m.span>
            ))}
          </div>
        </div>
      ),
      options: shuffle([n, ...distractors]).map((k) => ({
        key: String(k),
        label: String(k),
        content: <span className="text-4xl sm:text-5xl font-black text-slate-800">{k}</span>,
      })),
      answer: String(n),
      explain: `To‘g‘ri! ${n} — ${NUMBER_WORDS[n]} 👏`,
    };
  });

/* ---------- Colours ---------- */

const COLORS = [
  { key: 'qizil', name: 'Qizil', hex: '#ef4444', e: '🍎', thing: 'Olma' },
  { key: 'kok', name: 'Ko‘k', hex: '#3b82f6', e: '🐳', thing: 'Kit' },
  { key: 'sariq', name: 'Sariq', hex: '#facc15', e: '🍌', thing: 'Banan' },
  { key: 'yashil', name: 'Yashil', hex: '#22c55e', e: '🐸', thing: 'Qurbaqa' },
  { key: 'toqsariq', name: 'To‘q sariq', hex: '#f97316', e: '🍊', thing: 'Apelsin' },
  { key: 'binafsha', name: 'Binafsha', hex: '#a855f7', e: '🍇', thing: 'Uzum' },
  { key: 'pushti', name: 'Pushti', hex: '#ec4899', e: '🌸', thing: 'Gul' },
  { key: 'jigarrang', name: 'Jigarrang', hex: '#92400e', e: '🐻', thing: 'Ayiq' },
];

const makeColorRounds = (): Round[] => {
  const targets = shuffle(COLORS).slice(0, ROUNDS);
  return targets.map((target) => {
    const opts = shuffle([target, ...shuffle(COLORS.filter((c) => c.key !== target.key)).slice(0, 3)]);
    return {
      prompt: (
        <p className="text-2xl sm:text-3xl font-black text-slate-800">
          <span className="underline decoration-4 decoration-slate-300 underline-offset-4">{target.name}</span> rangni toping!
        </p>
      ),
      options: opts.map((c) => ({
        key: c.key,
        label: c.name,
        content: (
          <span
            className="block w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-md"
            style={{ backgroundColor: c.hex }}
          />
        ),
      })),
      answer: target.key,
      explain: `${target.e} ${target.thing} — ${target.name.toLowerCase()} rangda!`,
    };
  });
};

/* ---------- Odd one out ---------- */

const CATEGORIES = [
  { plural: 'mevalar', one: 'meva', items: ['🍎', '🍌', '🍇', '🍓', '🍉', '🍐', '🍑', '🍒'] },
  { plural: 'hayvonlar', one: 'hayvon', items: ['🐶', '🐱', '🐮', '🐴', '🐑', '🐔', '🐰', '🐘'] },
  { plural: 'transport vositalari', one: 'transport', items: ['🚗', '🚌', '🚲', '✈️', '🚂', '🚜', '🚀', '⛵'] },
  { plural: 'kiyimlar', one: 'kiyim', items: ['👕', '👖', '👗', '🧢', '🧦', '👟', '🧤', '🧣'] },
  { plural: 'sabzavotlar', one: 'sabzavot', items: ['🥕', '🥒', '🍅', '🥔', '🧅', '🌽', '🥦', '🍆'] },
];

const makeOddRounds = (): Round[] =>
  Array.from({ length: ROUNDS }, () => {
    const [main, other] = shuffle(CATEGORIES);
    const same = shuffle(main.items).slice(0, 3);
    const odd = pick(other.items);
    return {
      prompt: <p className="text-2xl sm:text-3xl font-black text-slate-800">Qaysi biri ortiqcha?</p>,
      options: shuffle([...same, odd]).map((e) => ({
        key: e,
        label: e,
        content: <span className="text-5xl sm:text-6xl select-none">{e}</span>,
      })),
      answer: odd,
      explain: (
        <>
          {odd} — bu {other.one}, qolganlari esa {main.plural}.
        </>
      ),
    };
  });

/* ------------------------------------------------------------------ */
/* Hub                                                                 */
/* ------------------------------------------------------------------ */

export default function KidsGames() {
  const [game, setGame] = useState<GameId | null>(null);
  const sound = useSound();
  const topRef = useRef<HTMLDivElement>(null);

  const open = (id: GameId | null) => {
    setGame(id);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const exit = () => open(null);

  return (
    <div ref={topRef} className="scroll-mt-24">
      {game === null ? (
        <div className="space-y-6">
          <div className="flex items-start gap-3 bg-white border-2 border-slate-200 rounded-2xl p-4 text-sm text-slate-600">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p>
              Farzandingiz bilan <b className="text-slate-800">birga</b> o‘ynang: savolni ovoz chiqarib o‘qing, to‘g‘ri javobni
              maqtang, xato qilsa — shoshirmasdan qayta urinishga undang.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {GAMES.map((g, i) => (
              <m.button
                key={g.id}
                type="button"
                onClick={() => open(g.id)}
                data-spotlight=""
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: EASE_OUT }}
                className="lift-card group card-farzandly p-5 sm:p-6 flex items-center gap-4 sm:gap-5 text-left cursor-pointer hover:border-emerald-500"
              >
                <span
                  className={`lift-icon shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl border-2 flex items-center justify-center text-5xl sm:text-6xl ${g.tint}`}
                  aria-hidden
                >
                  {g.emoji}
                </span>
                <span className="space-y-1.5 min-w-0">
                  <span className="inline-block text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {g.age}
                  </span>
                  <span className="block text-lg sm:text-xl font-black text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {g.title}
                  </span>
                  <span className="block text-sm text-slate-500 leading-relaxed">{g.desc}</span>
                </span>
              </m.button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-4 sm:p-8 max-w-3xl mx-auto">
          {game === 'xotira' && <MemoryGame onExit={exit} sound={sound} />}
          {game === 'sanash' && (
            <QuizGame title="Sanashni o‘rganamiz" makeRounds={makeCountRounds} onExit={exit} sound={sound} />
          )}
          {game === 'ranglar' && (
            <QuizGame
              title="Ranglarni top"
              makeRounds={makeColorRounds}
              onExit={exit}
              sound={sound}
              optionGrid="grid-cols-2"
            />
          )}
          {game === 'ortiqcha' && (
            <QuizGame
              title="Qaysi biri ortiqcha?"
              makeRounds={makeOddRounds}
              onExit={exit}
              sound={sound}
              optionGrid="grid-cols-2"
            />
          )}
        </div>
      )}
    </div>
  );
}
