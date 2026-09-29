'use client';

import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { EASE_UI } from '@/lib/motion';

// Set after the first client mount so the initial page load is not delayed by a
// route transition (the hero has its own entrance); later navigations animate.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => typeof window !== 'undefined' && hasNavigated);
  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      {animate && (
        <m.div
          aria-hidden
          data-motion-bar=""
          className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-emerald-500 pointer-events-none"
          style={{ originX: 0 }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          transition={{ scaleX: { duration: 0.5, ease: EASE_UI }, opacity: { duration: 0.25, delay: 0.45 } }}
        />
      )}
      <m.div
        data-motion=""
        initial={animate ? { opacity: 0, y: 12 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE_UI }}
      >
        {children}
      </m.div>
    </>
  );
}
