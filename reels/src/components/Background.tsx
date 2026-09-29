import React from 'react';
import { AbsoluteFill, Img, OffthreadVideo, interpolate, random, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { C } from '../brand';
import type { Media } from '../spec';

export type Tone = 'cream' | 'dark' | 'emerald';

const TONE_BG: Record<Tone, string> = { cream: C.cream, dark: C.night, emerald: C.emeraldDark };
const TONE_DOT: Record<Tone, string> = {
  cream: 'rgba(5,150,105,0.16)',
  dark: 'rgba(250,247,242,0.07)',
  emerald: 'rgba(250,247,242,0.12)',
};

/**
 * Scene background. With media: a slow Ken Burns move toward the focus point plus a
 * scrim weighted to the top (headlines) and bottom (captions + IG UI). Without media:
 * the brand surface with the site's dot field drifting slower than the foreground.
 * `seed` makes each scene's move different but identical on every render.
 */
export const Background: React.FC<{ media?: Media; tone?: Tone; seed: string }> = ({ media, tone = 'cream', seed }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = frame / Math.max(1, durationInFrames);

  if (media) {
    const pushIn = random(`${seed}-dir`) > 0.5;
    const scale = pushIn ? interpolate(t, [0, 1], [1.04, 1.14]) : interpolate(t, [0, 1], [1.14, 1.04]);
    const dx = (media.focusX - 0.5) * -12 * t;
    const dy = (media.focusY - 0.5) * -12 * t;
    const style: React.CSSProperties = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: `${media.focusX * 100}% ${media.focusY * 100}%`,
      transform: `scale(${scale}) translate(${dx}%, ${dy}%)`,
    };
    return (
      <AbsoluteFill style={{ background: C.night }}>
        {media.kind === 'video' ? (
          <OffthreadVideo src={staticFile(media.src)} muted style={style} />
        ) : (
          <Img src={staticFile(media.src)} style={style} />
        )}
        <AbsoluteFill
          style={{
            background: `linear-gradient(180deg, rgba(20,27,38,${media.dim}) 0%, rgba(20,27,38,${media.dim * 0.35}) 38%, rgba(20,27,38,${media.dim * 0.35}) 58%, rgba(20,27,38,${Math.min(0.92, media.dim + 0.25)}) 100%)`,
          }}
        />
      </AbsoluteFill>
    );
  }

  // parallax: the dot field drifts a little against the foreground
  const drift = interpolate(t, [0, 1], [0, -48]);
  return (
    <AbsoluteFill style={{ background: TONE_BG[tone], overflow: 'hidden' }}>
      <AbsoluteFill
        style={{
          top: -60,
          bottom: -60,
          backgroundImage: `radial-gradient(${TONE_DOT[tone]} 2.6px, transparent 2.6px)`,
          backgroundSize: '44px 44px',
          transform: `translateY(${drift}px)`,
          maskImage: 'linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
