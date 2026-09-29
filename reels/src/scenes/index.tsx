import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { fitText } from '@remotion/layout-utils';
import { C, DISPLAY, SAFE, SAFE_W, UI, arrive, ramp, useFontsReady, EASE_OUT } from '../brand';
import {
  ctaButtonAt,
  ctaPressAt,
  ctaUrlAt,
  hookLineAt,
  itemAt,
  statLandAt,
  type Placed,
} from '../timing';
import { Background, type Tone } from '../components/Background';
import { KineticHeadline, Kicker, Word, isAccent } from '../components/Kinetic';
import { PhoneScreen, PHONE, SCREEN_ASPECT } from '../components/PhoneScreen';

/** where a tapped control sits on the phone screen (fraction of its height) */
const TAP_FRAMING = 0.38;
import { Logo } from '../components/Chrome';

type Props<T> = { s: T; p: Placed; BF: number };
type SceneOf<K extends Placed['scene']['type']> = Extract<Placed['scene'], { type: K }>;

/** Safe-area column that everything readable sits in, with a slow foreground drift
 *  (faster than the background's) for depth. */
/** Captions live just above the bottom safe line; centred blocks stay clear of them. */
const CAPTION_BAND = 190;

const Column: React.FC<{ children: React.ReactNode; top?: number; drift?: number; center?: boolean; captions?: boolean }> = ({
  children,
  top = 0,
  drift = 28,
  center = false,
  captions = true,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const y = interpolate(frame, [0, durationInFrames], [0, -drift]);
  const box: React.CSSProperties = center
    ? { top: SAFE.top + top, bottom: SAFE.bottom + (captions ? CAPTION_BAND : 0), display: 'flex', flexDirection: 'column', justifyContent: 'center' }
    : { top: SAFE.top + top };
  return (
    <div style={{ position: 'absolute', left: SAFE.left, right: SAFE.right, ...box, transform: `translateY(${y}px)` }}>
      <div>{children}</div>
    </div>
  );
};

const onDark = (tone: Tone) => tone !== 'cream';

/* ---------------- Hook ---------------- */

export const HookScene: React.FC<Props<SceneOf<'hook'>>> = ({ s, p, BF }) => {
  const frame = useCurrentFrame();
  const ready = useFontsReady();
  const sizes = s.lines.map((line) =>
    ready ? Math.min(270, fitText({ text: line, withinWidth: SAFE_W - 20, fontFamily: DISPLAY, fontWeight: '700' }).fontSize * 0.95) : 150
  );
  // each landing line knocks the whole stack slightly — a visual kick with the thud
  const lands = s.lines.map((_, k) => hookLineAt(k, BF));
  const last = lands.filter((f) => f <= frame).pop();
  const kick = last === undefined ? 0 : Math.exp(-(frame - last) / 4) * 0.022;
  const accentColor = s.background ? C.emeraldBright : C.emeraldBright;

  return (
    <AbsoluteFill>
      <Background media={s.background} tone="dark" seed={`hook-${p.index}`} />
      <Column center captions={false} drift={20}>
        {s.kicker ? <Kicker text={s.kicker} at={3} color={C.night} bg={C.emeraldBright} /> : null}
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, color: C.cream, letterSpacing: '-0.025em', transform: `scale(${1 + kick})`, transformOrigin: '0% 50%' }}>
          {s.lines.map((line, k) => (
            <div key={k} style={{ fontSize: sizes[k], lineHeight: 1.0, marginBottom: 14 }}>
              {line.split(/\s+/).map((w, j) => (
                <Word key={j} word={w} at={lands[k] + j * 2} size={sizes[k]} color={C.cream} accent={isAccent(w, s.accent)} accentColor={accentColor} />
              ))}
            </div>
          ))}
        </div>
      </Column>
    </AbsoluteFill>
  );
};

/* ---------------- Headline ---------------- */

export const HeadlineScene: React.FC<Props<SceneOf<'headline'>>> = ({ s, p, BF }) => {
  const dark = onDark(s.tone) || !!s.background;
  return (
    <AbsoluteFill>
      <Background media={s.background} tone={s.tone} seed={`headline-${p.index}`} />
      <Column center>
        {s.kicker ? <Kicker text={s.kicker} at={p.land - 2} {...(dark ? { color: C.night, bg: C.emeraldBright } : {})} /> : null}
        <KineticHeadline
          lines={s.lines}
          accent={s.accent}
          land={p.land}
          BF={BF}
          size={134}
          color={dark ? C.cream : C.charcoal}
          accentColor={dark ? C.emeraldBright : C.emerald}
        />
      </Column>
    </AbsoluteFill>
  );
};

/* ---------------- Image (photo / video background) ---------------- */

export const ImageScene: React.FC<Props<SceneOf<'image'>>> = ({ s, p, BF }) => (
  <AbsoluteFill>
    <Background media={s.background} seed={`image-${p.index}`} />
    <Column top={40}>
      {s.kicker ? <Kicker text={s.kicker} at={p.land - 2} color={C.night} bg={C.emeraldBright} /> : null}
      <KineticHeadline lines={s.lines} accent={s.accent} land={p.land} BF={BF} size={108} color={C.cream} accentColor={C.emeraldBright} />
    </Column>
  </AbsoluteFill>
);

/* ---------------- Screen (product in a phone) ---------------- */

export const ScreenScene: React.FC<Props<SceneOf<'screen'>>> = ({ s, p, BF }) => {
  const phoneLeft = SAFE.left + (SAFE_W - (PHONE.screenW + PHONE.bezel * 2)) / 2;
  return (
    <AbsoluteFill>
      <Background tone="cream" seed={`screen-${p.index}`} />
      <Column top={0} drift={16}>
        {s.kicker ? <Kicker text={s.kicker} at={p.land - 2} /> : null}
        <KineticHeadline lines={s.lines} accent={s.accent} land={p.land} BF={BF} size={84} />
      </Column>
      <div style={{ position: 'absolute', left: phoneLeft, top: SAFE.top + 150 + s.lines.length * 92 + (s.kicker ? 70 : 0) }}>
        <PhoneScreen
          src={s.src}
          srcWidth={s.srcWidth}
          land={p.land}
          scrollStart={p.land + BF}
          scrollEnd={p.exit - 4}
          scrollTo={s.tap ? Math.max(0, s.tap.y - TAP_FRAMING * (s.srcWidth * SCREEN_ASPECT)) : s.scrollTo}
          tap={s.tap ? { x: s.tap.x, y: s.tap.y, at: p.land + s.tap.beat * BF } : undefined}
        />
      </div>
    </AbsoluteFill>
  );
};

/* ---------------- Points ---------------- */

export const PointsScene: React.FC<Props<SceneOf<'points'>>> = ({ s, p, BF }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Background tone="cream" seed={`points-${p.index}`} />
      <Column center>
        {s.kicker ? <Kicker text={s.kicker} at={p.land - 2} /> : null}
        <KineticHeadline lines={s.lines} accent={s.accent} land={p.land} BF={BF} size={104} />
        <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', gap: 26 }}>
          {s.items.map((item, k) => {
            const at = itemAt(p.land, k, BF);
            const e = arrive(frame, at, 8, 12, 0.04);
            const tick = arrive(frame, at + 4, 5, 8, 0.25);
            return (
              <div
                key={k}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 26,
                  background: C.white,
                  border: `3px solid ${C.border}`,
                  borderBottomWidth: 10,
                  borderRadius: 34,
                  padding: '32px 32px',
                  transform: `translateX(${(1 - Math.min(1, e)) * 140}px) rotate(${(1 - Math.min(1, e)) * 3}deg)`,
                  clipPath: `inset(0 0 0 ${(1 - Math.min(1, e)) * 100}% round 34px)`,
                }}
              >
                <div
                  style={{
                    flex: 'none',
                    width: 70,
                    height: 70,
                    borderRadius: 22,
                    background: C.emerald,
                    borderBottom: `6px solid ${C.emeraldDark}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `scale(${tick})`,
                  }}
                >
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </div>
                <div style={{ fontFamily: UI, fontWeight: 700, fontSize: 52, lineHeight: 1.2, color: C.charcoal }}>{item}</div>
              </div>
            );
          })}
        </div>
      </Column>
    </AbsoluteFill>
  );
};

/* ---------------- Stat ---------------- */

export const StatScene: React.FC<Props<SceneOf<'stat'>>> = ({ s, p, BF }) => {
  const frame = useCurrentFrame();
  const landAt = statLandAt(p.land, BF);
  const count = Math.round(s.value * ramp(frame, p.land, landAt, EASE_OUT));
  const punch = frame >= landAt ? 1 + Math.exp(-(frame - landAt) / 5) * 0.06 : 1;
  const numIn = arrive(frame, p.land + 2, 8, 10, 0.04);
  const label = arrive(frame, landAt + Math.round(BF / 2), 8, 10, 0.04);
  const dark = onDark(s.tone);
  const ink = dark ? C.cream : C.charcoal;
  return (
    <AbsoluteFill>
      <Background tone={s.tone} seed={`stat-${p.index}`} />
      <Column center>
        {s.kicker ? <Kicker text={s.kicker} at={p.land - 2} {...(dark ? { color: C.emeraldDark, bg: C.cream } : {})} /> : null}
        <div style={{ transform: `translateY(${(1 - Math.min(1, numIn)) * 80}px)`, clipPath: `inset(-20% -5% ${(1 - Math.min(1, numIn)) * 100}% -5%)` }}>
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: 460,
              lineHeight: 0.9,
              color: dark ? C.cream : C.emerald,
              letterSpacing: '-0.04em',
              fontVariantNumeric: 'tabular-nums',
              transform: `scale(${punch})`,
              transformOrigin: '0% 80%',
            }}
          >
            {count}
          </div>
          <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 124, lineHeight: 1.05, marginTop: 8, color: dark ? C.emeraldSoft : C.charcoal, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{s.suffix}</div>
        </div>
        <div
          style={{
            marginTop: 30,
            fontFamily: UI,
            fontWeight: 700,
            fontSize: 60,
            lineHeight: 1.2,
            color: ink,
            transform: `translateY(${(1 - Math.min(1, label)) * 40}px)`,
            clipPath: `inset(-10% -2% ${(1 - Math.min(1, label)) * 100}% -2%)`,
          }}
        >
          {s.label}
        </div>
        <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {s.chips.map((chip, k) => {
            const e = arrive(frame, landAt + BF + k * 4, 6, 10, 0.2);
            return (
              <div
                key={k}
                style={{
                  fontFamily: UI,
                  fontWeight: 700,
                  fontSize: 38,
                  color: C.emeraldDark,
                  background: dark ? C.cream : '#d1fae5',
                  border: `3px solid ${dark ? C.cream : C.emeraldSoft}`,
                  borderRadius: 999,
                  padding: '14px 28px',
                  transform: `scale(${Math.max(0, e)})`,
                  transformOrigin: '0% 50%',
                }}
              >
                {chip}
              </div>
            );
          })}
        </div>
      </Column>
    </AbsoluteFill>
  );
};

/* ---------------- Cards (UI crops / photos at depth) ---------------- */

const CARD_SLOTS = [
  { x: -10, y: 0, r: -3.5, depth: 1.0 },
  { x: 60, y: 300, r: 2.5, depth: 1.6 },
  { x: 0, y: 600, r: -1.5, depth: 2.2 },
];

export const CardsScene: React.FC<Props<SceneOf<'cards'>>> = ({ s, p, BF }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = frame / durationInFrames;
  const top = SAFE.top + 90 + s.lines.length * 110 + (s.kicker ? 70 : 0);
  return (
    <AbsoluteFill>
      <Background tone="cream" seed={`cards-${p.index}`} />
      <Column top={0} drift={16}>
        {s.kicker ? <Kicker text={s.kicker} at={p.land - 2} /> : null}
        <KineticHeadline lines={s.lines} accent={s.accent} land={p.land} BF={BF} size={96} />
      </Column>
      {s.images.map((src, k) => {
        const slot = CARD_SLOTS[k];
        const e = arrive(frame, itemAt(p.land, k, BF), 10, 14, 0.035);
        const inP = Math.min(1, e);
        // nearer cards drift faster: parallax between layers
        const parallax = -t * 60 * slot.depth;
        return (
          <div
            key={k}
            style={{
              position: 'absolute',
              left: SAFE.left + 30 + slot.x,
              top: top + slot.y,
              width: 700,
              transform: `translateY(${(1 - inP) * 900 + parallax}px) rotate(${slot.r + (1 - inP) * 10}deg) scale(${0.96 + 0.04 * e})`,
              borderRadius: 34,
              overflow: 'hidden',
              boxShadow: '0 40px 70px -34px rgba(15,23,42,0.45)',
              zIndex: k,
            }}
          >
            <Img src={staticFile(src)} style={{ width: '100%', display: 'block' }} />
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

/* ---------------- CTA ---------------- */

export const CtaScene: React.FC<Props<SceneOf<'cta'>>> = ({ s, p, BF }) => {
  const frame = useCurrentFrame();
  const btnAt = ctaButtonAt(p.land, BF);
  const pressAt = ctaPressAt(p.land, BF);
  const urlAt = ctaUrlAt(p.land, BF);
  const btn = arrive(frame, btnAt, 9, 12, 0.05);
  const pressed = frame >= pressAt && frame < pressAt + 5;
  const ripple = interpolate(frame, [pressAt, pressAt + 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const chars = Math.round(s.url.length * ramp(frame, urlAt, urlAt + 12));
  const caret = frame >= urlAt && Math.floor(frame / 8) % 2 === 0;

  return (
    <AbsoluteFill>
      <Background tone="cream" seed={`cta-${p.index}`} />
      <Column center drift={14}>
        <Logo at={p.land + 2} width={430} />
        <div style={{ height: 70 }} />
        {s.kicker ? <Kicker text={s.kicker} at={p.land} /> : null}
        <KineticHeadline lines={s.lines} accent={s.accent} land={p.land + 4} BF={BF} size={150} />
        <div style={{ height: 70 }} />
        <div style={{ position: 'relative', display: 'inline-block', transform: `translateY(${(1 - Math.min(1, btn)) * 120}px) scale(${Math.max(0, 0.9 + 0.1 * btn)})`, transformOrigin: '0% 50%', opacity: frame < btnAt - 9 ? 0 : 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 22,
              fontFamily: UI,
              fontWeight: 700,
              fontSize: 52,
              color: C.white,
              background: C.emerald,
              borderRadius: 36,
              borderBottom: `${pressed ? 3 : 12}px solid ${C.emeraldDark}`,
              padding: '34px 46px',
              transform: `translateY(${pressed ? 9 : 0}px)`,
              boxShadow: '0 30px 50px -28px rgba(4,120,87,0.8)',
            }}
          >
            {s.button}
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
          {frame >= pressAt ? (
            <div
              style={{
                position: 'absolute',
                inset: -12,
                borderRadius: 44,
                border: `6px solid ${C.emerald}`,
                transform: `scale(${1 + ripple * 0.18})`,
                opacity: 1 - ripple,
              }}
            />
          ) : null}
        </div>
        <div style={{ marginTop: 44, fontFamily: UI, fontWeight: 700, fontSize: 54, color: C.charcoal, letterSpacing: '0.01em', minHeight: 70 }}>
          {s.url.slice(0, chars)}
          <span style={{ display: 'inline-block', width: 5, height: 56, marginLeft: 6, verticalAlign: '-8px', background: caret && chars < s.url.length + 1 ? C.emerald : 'transparent' }} />
        </div>
      </Column>
    </AbsoluteFill>
  );
};

export const SceneView: React.FC<{ p: Placed; BF: number }> = ({ p, BF }) => {
  const s = p.scene;
  switch (s.type) {
    case 'hook':
      return <HookScene s={s} p={p} BF={BF} />;
    case 'headline':
      return <HeadlineScene s={s} p={p} BF={BF} />;
    case 'image':
      return <ImageScene s={s} p={p} BF={BF} />;
    case 'screen':
      return <ScreenScene s={s} p={p} BF={BF} />;
    case 'points':
      return <PointsScene s={s} p={p} BF={BF} />;
    case 'stat':
      return <StatScene s={s} p={p} BF={BF} />;
    case 'cards':
      return <CardsScene s={s} p={p} BF={BF} />;
    case 'cta':
      return <CtaScene s={s} p={p} BF={BF} />;
  }
};

/** Whether the frame's scene sits on a dark surface (the progress bar flips colour). */
export const isDarkScene = (p: Placed) => {
  const s = p.scene;
  return s.type === 'hook' || s.type === 'image' || (s.type === 'stat' && s.tone !== 'cream') || (s.type === 'headline' && (s.tone !== 'cream' || !!s.background));
};

