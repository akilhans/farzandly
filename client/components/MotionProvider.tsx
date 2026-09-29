'use client';

import { useEffect } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

// Loads only the DOM animation features (no drag/layout) — noticeably smaller than the full `motion` bundle.
// reducedMotion="user" drops transform animations for visitors who ask for it; globals.css
// additionally forces every [data-motion] element to its resting state.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // One delegated listener feeds the cursor position to any [data-spotlight] card
    // as CSS variables; the highlight itself is pure CSS, so nothing re-renders.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('[data-spotlight]') as HTMLElement | null;
      if (!card) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
