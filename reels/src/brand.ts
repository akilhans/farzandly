import { useEffect, useState } from 'react';
import { Easing, interpolate, staticFile, continueRender, delayRender } from 'remotion';
import { loadFont } from '@remotion/fonts';

/* Measured from farzandly.uz (see assets/film/MANIFEST.md). One accent: emerald. */
export const C = {
  emerald: '#059669',
  emeraldDark: '#047857',
  emeraldSoft: '#a7f3d0',
  /** the accent as it reads on dark surfaces (same hue, lifted for contrast) */
  emeraldBright: '#34d399',
  cream: '#faf7f2',
  creamDeep: '#f1ece3',
  charcoal: '#1e293b',
  night: '#141b26',
  muted: '#64748b',
  border: '#e2e8f0',
  white: '#ffffff',
} as const;

export const DISPLAY = 'Chubbo';
export const UI = 'Supreme';

/*
 * Instagram Reels UI covers the top (account/header), the bottom (caption, audio,
 * username) and a column on the right (like/comment/share). Everything that must be
 * read stays inside this box.
 */
export const SAFE = { top: 250, bottom: 440, left: 84, right: 156 } as const;
export const SAFE_W = 1080 - SAFE.left - SAFE.right;

const fonts = Promise.all([
  loadFont({ family: DISPLAY, url: staticFile('fonts/chubbo-700.woff2'), weight: '700' }),
  loadFont({ family: UI, url: staticFile('fonts/supreme-400.woff2'), weight: '400' }),
  loadFont({ family: UI, url: staticFile('fonts/supreme-500.woff2'), weight: '500' }),
  loadFont({ family: UI, url: staticFile('fonts/supreme-700.woff2'), weight: '700' }),
]);

let fontsLoaded = false;
fonts.then(() => {
  fontsLoaded = true;
});

/** True once the brand fonts are usable; text measurement waits for this.
 *  Only components mounted before the fonts arrive hold the frame. */
export function useFontsReady() {
  const [ready, setReady] = useState(fontsLoaded);
  const [handle] = useState(() => (fontsLoaded ? null : delayRender('brand fonts')));
  useEffect(() => {
    if (handle === null) return;
    fonts.then(() => {
      setReady(true);
      continueRender(handle);
    });
  }, [handle]);
  return ready;
}

/* ---------- motion vocabulary ---------- */

/** Long calm deceleration — the house curve for arrivals. */
export const EASE_OUT = Easing.bezier(0.22, 1, 0.36, 1);
export const EASE_IN_OUT = Easing.bezier(0.65, 0, 0.35, 1);

/**
 * 0 → 1 progress that *arrives* exactly at frame `at` (motion lands on the beat and
 * settles after it), with a small overshoot that decays over `settle` frames.
 */
export function arrive(frame: number, at: number, lead = 7, settle = 10, overshoot = 0.06) {
  if (frame <= at - lead) return 0;
  if (frame < at) return EASE_OUT((frame - (at - lead)) / lead);
  const t = Math.min(1, (frame - at) / settle);
  return 1 + overshoot * Math.sin(t * Math.PI) * (1 - t);
}

/** plain eased 0 → 1 over [from, to] */
export const ramp = (frame: number, from: number, to: number, ease = EASE_OUT) =>
  interpolate(frame, [from, to], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease });
