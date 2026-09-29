import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import { UI } from './brand';

export const SHEET_THUMB = { w: 270, h: 480, gap: 6, label: 30 };

export type SheetProps = { images: string[]; labels: string[]; cols: number };

/** Review tool, not a deliverable: one still per beat, tiled, each labelled with its beat. */
export const ContactSheet: React.FC<SheetProps> = ({ images, labels, cols }) => (
  <AbsoluteFill style={{ background: '#fff', padding: SHEET_THUMB.gap, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: SHEET_THUMB.gap, alignContent: 'flex-start', width: cols * (SHEET_THUMB.w + SHEET_THUMB.gap) + SHEET_THUMB.gap }}>
    {images.map((src, i) => (
      <div key={i} style={{ width: SHEET_THUMB.w }}>
        <Img src={src} style={{ width: SHEET_THUMB.w, height: SHEET_THUMB.h, display: 'block' }} />
        <div style={{ height: SHEET_THUMB.label, fontFamily: UI, fontSize: 18, fontWeight: 700, color: '#1e293b', lineHeight: `${SHEET_THUMB.label}px` }}>{labels[i]}</div>
      </div>
    ))}
  </AbsoluteFill>
);
