import React from 'react';
import { C, ramp } from '../brand';

/** The site's hand-drawn emerald underline, drawn on from left to right. */
export const Squiggle: React.FC<{ width: number; frame: number; from: number; color?: string; stroke?: number }> = ({
  width,
  frame,
  from,
  color = C.emerald,
  stroke = 9,
}) => {
  const amp = 7;
  const wl = 34;
  let d = `M 4 ${amp + 4}`;
  for (let x = 4; x < width - 4; x += wl / 2) {
    const up = Math.round((x - 4) / (wl / 2)) % 2 === 0;
    d += ` Q ${x + wl / 4} ${up ? 4 - amp / 2 : amp * 2 + 4 + amp / 2} ${Math.min(width - 4, x + wl / 2)} ${amp + 4}`;
  }
  const len = width * 1.35;
  const p = ramp(frame, from, from + 10);
  return (
    <svg width={width} height={amp * 2 + 8} style={{ position: 'absolute', left: 0, bottom: -amp * 2 - 2, overflow: 'visible' }}>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={len}
        strokeDashoffset={len * (1 - p)}
      />
    </svg>
  );
};
