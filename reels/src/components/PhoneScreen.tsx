import React from 'react';
import { Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { C, EASE_IN_OUT, arrive, ramp } from '../brand';

export const PHONE = { screenW: 620, bezel: 18, radius: 86 } as const;
export const SCREEN_ASPECT = 2532 / 1170; // iPhone viewport the captures were taken at

/**
 * The product, shown as it really is: a real screenshot scrolling inside a phone.
 * The phone rises and un-tilts into place on `land`, floats gently, scrolls between
 * `scrollFrom` and `scrollTo` (source pixels), and can take a finger tap on `tapAt`.
 */
export const PhoneScreen: React.FC<{
  src: string;
  srcWidth: number;
  land: number;
  scrollStart: number;
  scrollEnd: number;
  scrollTo: number;
  tap?: { x: number; y: number; at: number };
}> = ({ src, srcWidth, land, scrollStart, scrollEnd, scrollTo, tap }) => {
  const frame = useCurrentFrame();
  const scale = PHONE.screenW / srcWidth;
  const screenH = PHONE.screenW * SCREEN_ASPECT;

  const enter = arrive(frame, land + 4, 14, 16, 0.03);
  const y = (1 - Math.min(1, enter)) * 520;
  const tiltX = (1 - Math.min(1, enter)) * 22;
  const float = Math.sin(frame / 26) * 6;

  // scroll pauses on the tap frame so the finger hits a still target
  const scrollP = tap
    ? frame < tap.at
      ? ramp(frame, scrollStart, Math.min(scrollEnd, tap.at - 6), EASE_IN_OUT)
      : 1
    : ramp(frame, scrollStart, scrollEnd, EASE_IN_OUT);
  const offset = scrollTo * scale * scrollP;

  return (
    <div
      style={{
        width: PHONE.screenW + PHONE.bezel * 2,
        height: screenH + PHONE.bezel * 2,
        transform: `perspective(2400px) translateY(${y + float}px) rotateX(${tiltX}deg) rotateZ(-2deg)`,
        transformOrigin: '50% 100%',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: '#0f172a',
          borderRadius: PHONE.radius + PHONE.bezel,
          padding: PHONE.bezel,
          boxShadow: '0 60px 90px -40px rgba(15,23,42,0.55), 0 0 0 3px #334155 inset',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: PHONE.radius, overflow: 'hidden', background: C.cream }}>
          <Img
            src={staticFile(src)}
            style={{ position: 'absolute', left: 0, top: 0, width: PHONE.screenW, transform: `translateY(${-offset}px)` }}
          />
          {tap ? <Tap x={tap.x * scale} y={tap.y * scale - offset} at={tap.at} frame={frame} /> : null}
          {/* dynamic island */}
          <div style={{ position: 'absolute', top: 16, left: '50%', width: 150, height: 42, marginLeft: -75, borderRadius: 999, background: '#0f172a' }} />
        </div>
      </div>
    </div>
  );
};

/** Fingertip press + ripple. Presses exactly on `at` (the click SFX frame). */
const Tap: React.FC<{ x: number; y: number; at: number; frame: number }> = ({ x, y, at, frame }) => {
  if (frame < at - 10 || frame > at + 22) return null;
  const approach = ramp(frame, at - 10, at);
  const press = frame >= at && frame < at + 5 ? 0.82 : 1;
  const ripple = interpolate(frame, [at, at + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: x - 70,
          top: y - 70,
          width: 140,
          height: 140,
          borderRadius: '50%',
          border: `6px solid ${C.emerald}`,
          transform: `scale(${0.4 + ripple * 1.2})`,
          opacity: frame >= at ? 1 - ripple : 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: x - 38,
          top: y - 38 + (1 - approach) * 90,
          width: 76,
          height: 76,
          borderRadius: '50%',
          background: 'rgba(30,41,59,0.28)',
          border: '4px solid rgba(255,255,255,0.9)',
          transform: `scale(${press})`,
          opacity: approach * (frame > at + 12 ? Math.max(0, 1 - (frame - at - 12) / 10) : 1),
        }}
      />
    </>
  );
};
