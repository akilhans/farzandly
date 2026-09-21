'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

// Loads only the DOM animation features (no drag/layout) — noticeably smaller than the full `motion` bundle.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>;
}
