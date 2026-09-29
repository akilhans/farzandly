import type { Transition, Variants } from 'framer-motion';

/*
 * Farzandly motion language
 * -------------------------
 * One curve family, three speeds. Things arrive from below (content), from the
 * side they belong to (columns), or are unmasked (headlines / hero surfaces).
 * Hidden states only use opacity, transform and clip-path so they are cheap on
 * phones and identical between server and client render (no hydration drift).
 */

// Long, calm deceleration: the "settle" curve used for every entrance.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
// Snappier curve for UI feedback (menus, route changes).
export const EASE_UI: [number, number, number, number] = [0.32, 0.72, 0, 1];

export const DUR = { fast: 0.22, base: 0.6, slow: 0.9 } as const;

export const SPRING_SOFT: Transition = { type: 'spring', stiffness: 170, damping: 22, mass: 0.6 };
export const SPRING_POP: Transition = { type: 'spring', stiffness: 420, damping: 18 };

const settle = (duration: number = DUR.base, delay = 0): Transition => ({ duration, delay, ease: EASE_OUT });

export type RevealKind = 'rise' | 'mask' | 'left' | 'right' | 'scale' | 'pop';

export const revealVariants: Record<RevealKind, Variants> = {
  // default content entrance: short travel, no fade-from-nothing wash
  rise: {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: settle() },
  },
  // headline unmask: text rises out of its own line box
  mask: {
    // clip box is padded on every side so descenders/ascenders are never cut mid-travel
    hidden: { opacity: 0, y: '0.4em', clipPath: 'inset(-20% -4% 100% -4%)' },
    show: { opacity: 1, y: 0, clipPath: 'inset(-20% -4% -30% -4%)', transition: settle(DUR.slow) },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    show: { opacity: 1, x: 0, transition: settle() },
  },
  right: {
    hidden: { opacity: 0, x: 36, rotate: 2.5 },
    show: { opacity: 1, x: 0, rotate: 0, transition: settle(DUR.slow) },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1, transition: settle() },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.4, rotate: -8 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: SPRING_POP },
  },
};

export const staggerParent = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

// Scroll reveals fire once, slightly before the element is fully in view.
export const VIEWPORT = { once: true, amount: 0.25, margin: '0px 0px -8% 0px' } as const;
