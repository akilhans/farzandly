import React from 'react';
import { useCurrentFrame } from 'remotion';
import { measureText } from '@remotion/layout-utils';
import { C, DISPLAY, UI, arrive, useFontsReady } from '../brand';
import { WORD_STAGGER, lineAt } from '../timing';
import { Squiggle } from './Squiggle';

const norm = (w: string) => w.toLowerCase().replace(/[.,!?:;«»"“”()]/g, '');

export const isAccent = (word: string, accent: string[]) => {
  const set = new Set(accent.flatMap((a) => a.split(/\s+/)).map(norm));
  return set.has(norm(word));
};

/**
 * One word that rises out of its own line box and settles. The mask keeps the motion
 * typographic (no fades); the accent word gets the brand squiggle once it has landed.
 */
export const Word: React.FC<{
  word: string;
  at: number;
  size: number;
  color: string;
  accent?: boolean;
  accentColor?: string;
  fontFamily?: string;
}> = ({ word, at, size, color, accent, accentColor = C.emerald, fontFamily = DISPLAY }) => {
  const frame = useCurrentFrame();
  const ready = useFontsReady();
  const p = arrive(frame, at, 7, 12, 0.05);
  const width = ready && accent ? measureText({ text: word, fontFamily, fontSize: size, fontWeight: '700' }).width : 0;
  return (
    <span style={{ position: 'relative', display: 'inline-block', marginRight: '0.24em' }}>
      <span style={{ display: 'inline-block', overflow: 'hidden', padding: '0.06em 0 0.2em', margin: '-0.06em 0 -0.2em', verticalAlign: 'top' }}>
        <span
          style={{
            display: 'inline-block',
            transform: `translateY(${(1 - p) * 115}%) rotate(${(1 - Math.min(1, p)) * 7}deg)`,
            transformOrigin: '0% 100%',
            color: accent ? accentColor : color,
          }}
        >
          {word}
        </span>
      </span>
      {accent && width > 0 ? <Squiggle width={width} frame={frame} from={at + 3} color={accentColor} stroke={Math.max(6, size * 0.075)} /> : null}
    </span>
  );
};

/**
 * Kinetic headline: lines arrive half a beat apart, words inside a line a few frames
 * apart, all measured from the scene's landing frame so they sit on the beat grid.
 */
export const KineticHeadline: React.FC<{
  lines: string[];
  accent?: string[];
  land: number;
  BF: number;
  size?: number;
  color?: string;
  accentColor?: string;
  align?: 'left' | 'center';
  lineHeight?: number;
}> = ({ lines, accent = [], land, BF, size = 96, color = C.charcoal, accentColor, align = 'left', lineHeight = 1.06 }) => (
  <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: size, lineHeight, letterSpacing: '-0.02em', textAlign: align }}>
    {lines.map((line, k) => (
      <div key={k}>
        {line.split(/\s+/).map((w, j) => (
          <Word
            key={j}
            word={w}
            at={lineAt(land, k, BF) + j * WORD_STAGGER}
            size={size}
            color={color}
            accent={isAccent(w, accent)}
            accentColor={accentColor}
          />
        ))}
      </div>
    ))}
  </div>
);

/** Small uppercase label that slides in with the title. */
export const Kicker: React.FC<{ text: string; at: number; color?: string; bg?: string }> = ({ text, at, color = C.emeraldDark, bg = '#d1fae5' }) => {
  const frame = useCurrentFrame();
  const p = arrive(frame, at, 8, 10, 0.04);
  return (
    <div
      style={{
        display: 'inline-block',
        fontFamily: UI,
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color,
        background: bg,
        padding: '12px 22px',
        borderRadius: 999,
        transform: `translateX(${(1 - p) * -60}px)`,
        clipPath: `inset(0 ${Math.max(0, (1 - p) * 100)}% 0 0 round 999px)`,
        marginBottom: 28,
      }}
    >
      {text}
    </div>
  );
};
