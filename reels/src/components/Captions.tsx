import React, { useEffect, useMemo, useState } from 'react';
import { AbsoluteFill, continueRender, delayRender, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { createTikTokStyleCaptions, type Caption, type TikTokPage } from '@remotion/captions';
import { C, SAFE, UI, arrive } from '../brand';
import type { ReelSpec } from '../spec';
import type { Layout } from '../timing';

/**
 * Captions from the scene `say` lines: words spread across each scene's window,
 * weighted by length (long words hold longer), ending before the next transition.
 * Swap in real timings by pointing `captions.src` at a Caption[] JSON (e.g. whisper).
 */
export function autoCaptions(spec: ReelSpec, L: Layout, fps: number): Caption[][] {
  const perScene: Caption[][] = [];
  for (const p of L.scenes) {
    const say = 'say' in p.scene ? p.scene.say : undefined;
    if (!say) continue;
    const words = say.split(/\s+/).filter(Boolean);
    const start = ((p.grid + 3) / fps) * 1000;
    const end = ((p.grid + p.scene.beats * L.BF - 10) / fps) * 1000;
    const weights = words.map((w) => w.length + 3);
    const total = weights.reduce((a, b) => a + b, 0);
    let t = start;
    perScene.push(
      words.map((w, i) => {
        const d = ((end - start) * weights[i]) / total;
        const c: Caption = { text: i === 0 ? w : ` ${w}`, startMs: t, endMs: t + d, timestampMs: t + d / 2, confidence: null };
        t += d;
        return c;
      })
    );
  }
  return perScene;
}

export const Captions: React.FC<{ spec: ReelSpec; L: Layout }> = ({ spec, L }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [timed, setTimed] = useState<Caption[] | null>(null);
  const [handle] = useState(() => (spec.captions.src ? delayRender('captions json') : null));

  useEffect(() => {
    if (!spec.captions.src || handle === null) return;
    fetch(staticFile(spec.captions.src))
      .then((r) => r.json())
      .then((json: Caption[]) => {
        setTimed(json);
        continueRender(handle);
      });
  }, [spec.captions.src, handle]);

  const style = spec.captions.style;
  const pages = useMemo<TikTokPage[]>(() => {
    if (style === 'off') return [];
    const combine = style === 'word' ? 0 : 1100;
    const groups = timed ? [timed] : autoCaptions(spec, L, fps);
    return groups.flatMap((captions) => createTikTokStyleCaptions({ captions, combineTokensWithinMilliseconds: combine }).pages);
  }, [timed, spec, L, fps, style]);

  const ms = (frame / fps) * 1000;
  const page = pages.find((p) => ms >= p.startMs && ms < p.startMs + p.durationMs);
  if (!page) return null;

  const pageFrame = Math.round((page.startMs / 1000) * fps);
  const p = arrive(frame, pageFrame + 4, 4, 6, 0.03);

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          left: SAFE.left,
          right: SAFE.right,
          bottom: SAFE.bottom + 36,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '100%',
            textAlign: 'center',
            fontFamily: UI,
            fontWeight: 700,
            fontSize: style === 'word' ? 76 : 50,
            lineHeight: 1.3,
            color: C.white,
            background: 'rgba(20,27,38,0.84)',
            borderRadius: 28,
            padding: style === 'word' ? '14px 34px' : '16px 26px',
            transform: `translateY(${(1 - p) * 18}px) scale(${0.96 + 0.04 * p})`,
            boxShadow: '0 18px 40px -22px rgba(0,0,0,0.6)',
          }}
        >
          {page.tokens.map((tok, i) => {
            const active = ms >= tok.fromMs && ms < tok.toMs;
            const spoken = ms >= tok.toMs;
            return (
              <span key={i}>
                {tok.text.startsWith(' ') ? ' ' : ''}
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0 8px',
                    margin: '0 -8px',
                    borderRadius: 12,
                    background: active ? C.emerald : 'transparent',
                    color: active || spoken ? C.white : 'rgba(255,255,255,0.55)',
                  }}
                >
                  {tok.text.trim()}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
