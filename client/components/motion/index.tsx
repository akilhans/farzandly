'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { revealVariants, staggerParent, VIEWPORT, EASE_OUT, SPRING_SOFT, type RevealKind } from '@/lib/motion';

/**
 * True only for mouse/trackpad users on wide screens who have not asked for
 * reduced motion. Cursor-driven and scroll-linked effects are gated on this so
 * phones get the simple, cheap version of the site. Starts false on the server
 * and first client render; interactive effects start at identity, so no drift.
 */
export function useRichMotion() {
  const reduce = useReducedMotion();
  const [rich, setRich] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const update = () => setRich(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return rich && !reduce;
}

/* ------------------------------------------------------------------ */
/* Orchestration                                                       */
/* ------------------------------------------------------------------ */

/** Plays its children's entrances once on mount (hero / above-the-fold). */
export function Sequence({
  children,
  stagger = 0.09,
  delay = 0.1,
  className,
  as = 'div',
}: { children: React.ReactNode; stagger?: number; delay?: number; className?: string; as?: 'div' | 'section' }) {
  const Comp = as === 'section' ? m.section : m.div;
  return (
    <Comp className={className} initial="hidden" animate="show" variants={staggerParent(stagger, delay)}>
      {children}
    </Comp>
  );
}

/** Plays its children's entrances once when scrolled into view. */
export function Stagger({
  children,
  stagger = 0.07,
  delay = 0,
  className,
  amount,
}: { children: React.ReactNode; stagger?: number; delay?: number; className?: string; amount?: number }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ ...VIEWPORT, ...(amount !== undefined ? { amount } : null) }}
      variants={staggerParent(stagger, delay)}
    >
      {children}
    </m.div>
  );
}

/** A single choreographed element. Inside Sequence/Stagger it follows the parent;
 *  standalone (`standalone`) it reveals itself on scroll. */
export function Item({
  children,
  kind = 'rise',
  className,
  standalone = false,
  delay,
  stagger,
}: {
  children: React.ReactNode;
  kind?: RevealKind;
  className?: string;
  standalone?: boolean;
  delay?: number;
  /** Also orchestrate nested Items: they start after this one begins settling. */
  stagger?: number;
}) {
  const base = revealVariants[kind];
  const variants =
    delay !== undefined || stagger !== undefined
      ? {
          ...base,
          show: {
            ...base.show,
            transition: {
              ...(base.show as { transition?: object }).transition,
              ...(delay !== undefined ? { delay } : null),
              ...(stagger !== undefined ? { staggerChildren: stagger, delayChildren: 0.2 } : null),
            },
          },
        }
      : base;
  return (
    <m.div
      data-motion=""
      className={className}
      variants={variants}
      {...(standalone ? { initial: 'hidden', whileInView: 'show', viewport: VIEWPORT } : null)}
    >
      {children}
    </m.div>
  );
}

/** A line that draws itself along X when it enters the viewport. */
export function DrawLine({ className, delay = 0.2 }: { className?: string; delay?: number }) {
  return (
    <m.div
      aria-hidden
      data-motion=""
      className={className}
      style={{ originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.2, delay, ease: EASE_OUT }}
    />
  );
}

/** Inline emphasis: an emerald marker stroke sweeps in under the words
 *  once the headline has landed. */
export function Marker({ children, delay = 0.9 }: { children: React.ReactNode; delay?: number }) {
  return (
    // Inline background (not an absolute bar) so the stroke follows the text when
    // longer translations wrap onto several lines.
    <m.span
      data-marker=""
      className="text-emerald-600 bg-no-repeat [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
      style={{
        backgroundImage: 'linear-gradient(rgb(167 243 208 / 0.9), rgb(167 243 208 / 0.9))',
        backgroundPosition: '0 88%',
      }}
      initial={{ backgroundSize: '0% 0.32em' }}
      animate={{ backgroundSize: '100% 0.32em' }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    >
      {children}
    </m.span>
  );
}

/** Large surface revealed by an expanding clip (banners, feature panels). */
export function Unveil({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <m.div
      data-motion=""
      className={className}
      initial={{ clipPath: 'inset(8% 6% 8% 6% round 1.5rem)', opacity: 0.4 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 1.5rem)', opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.1, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  );
}

/* ------------------------------------------------------------------ */
/* Cursor-reactive                                                     */
/* ------------------------------------------------------------------ */

/** Tilts toward the cursor like a physical card. Desktop pointer only. */
export function Tilt({
  children,
  className,
  max = 5,
}: { children: React.ReactNode; className?: string; max?: number }) {
  const rich = useRichMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), SPRING_SOFT);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), SPRING_SOFT);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!rich) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <m.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </m.div>
  );
}

/** Gently pulls its child toward the cursor (primary CTAs only). */
export function Magnetic({
  children,
  className,
  strength = 0.25,
}: { children: React.ReactNode; className?: string; strength?: number }) {
  const rich = useRichMotion();
  const x = useSpring(0, SPRING_SOFT);
  const y = useSpring(0, SPRING_SOFT);
  return (
    <m.div
      className={className}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (!rich) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </m.div>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-linked                                                       */
/* ------------------------------------------------------------------ */

/** Moves its child at a different rate than the page while its section scrolls
 *  past. `speed` is px of travel across the section; disabled on touch/reduced. */
export function Parallax({
  children,
  className,
  speed = 60,
}: { children?: React.ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rich = useRichMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], rich ? [speed, -speed] : [0, 0]);
  return (
    <m.div ref={ref} aria-hidden className={className} style={{ y }}>
      {children}
    </m.div>
  );
}
