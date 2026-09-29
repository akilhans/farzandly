import React from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from 'remotion';
import { C, SAFE, UI, arrive, ramp } from '../brand';
import type { Layout } from '../timing';

/**
 * Segmented progress — one segment per scene, filling while that scene plays.
 * Sits just inside the top safe line so Instagram's own header never covers it.
 */
export const Progress: React.FC<{ L: Layout; darkAt: (frame: number) => boolean }> = ({ L, darkAt }) => {
  const frame = useCurrentFrame();
  const dark = darkAt(frame);
  const appear = ramp(frame, 0, 10);
  return (
    <div
      style={{
        position: 'absolute',
        top: SAFE.top - 44,
        left: SAFE.left,
        right: SAFE.right,
        display: 'flex',
        gap: 10,
        transform: `scaleX(${0.9 + 0.1 * appear})`,
        transformOrigin: 'left',
      }}
    >
      {L.scenes.map((p, i) => {
        const len = p.scene.beats * L.BF;
        const fill = Math.max(0, Math.min(1, (frame - p.grid) / len));
        return (
          <div
            key={i}
            style={{
              flex: p.scene.beats,
              height: 8,
              borderRadius: 8,
              overflow: 'hidden',
              background: dark ? 'rgba(250,247,242,0.22)' : 'rgba(30,41,59,0.12)',
            }}
          >
            <div style={{ width: `${fill * 100}%`, height: '100%', background: dark ? C.cream : C.emerald, borderRadius: 8 }} />
          </div>
        );
      })}
    </div>
  );
};

/** Real logo files from the site, revealed with a left-to-right wipe on `at`. */
export const Logo: React.FC<{ at: number; variant?: 'color' | 'white'; width?: number }> = ({ at, variant = 'color', width = 520 }) => {
  const frame = useCurrentFrame();
  const p = Math.min(1, arrive(frame, at, 10, 8, 0));
  return (
    <Img
      src={staticFile(variant === 'white' ? 'brand/logo-white.png' : 'brand/logo.png')}
      style={{
        width,
        clipPath: `inset(-10% ${(1 - p) * 100}% -10% 0)`,
        transform: `translateX(${(1 - p) * -24}px)`,
      }}
    />
  );
};

/** Instagram UI zones, for layout checks only (spec.safeGuides). */
export const SafeGuides: React.FC = () => (
  <AbsoluteFill style={{ pointerEvents: 'none', fontFamily: UI, fontSize: 24, color: '#ef4444' }}>
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: SAFE.top, background: 'rgba(239,68,68,0.18)' }}>top UI</div>
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: SAFE.bottom, background: 'rgba(239,68,68,0.18)' }}>caption / audio UI</div>
    <div style={{ position: 'absolute', right: 0, top: SAFE.top, bottom: SAFE.bottom, width: SAFE.right, background: 'rgba(239,68,68,0.12)' }}>actions</div>
    <div style={{ position: 'absolute', left: SAFE.left, right: SAFE.right, top: SAFE.top, bottom: SAFE.bottom, outline: '3px dashed #ef4444' }} />
  </AbsoluteFill>
);
