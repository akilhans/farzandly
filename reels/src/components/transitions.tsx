import React from 'react';
import { AbsoluteFill } from 'remotion';
import type { TransitionPresentation, TransitionPresentationComponentProps } from '@remotion/transitions';
import { C } from '../brand';

/*
 * Brand transitions. Each one is a TransitionPresentation for @remotion/transitions,
 * so they compose with TransitionSeries and stay a pure function of progress.
 */

type P = Record<string, never>;

/** Wipe: an emerald band with the site's darker "pressed" edge sweeps up; the new scene is revealed beneath it. */
const Wipe: React.FC<TransitionPresentationComponentProps<P>> = ({ children, presentationDirection, presentationProgress: p }) => {
  if (presentationDirection === 'exiting') {
    return <AbsoluteFill style={{ transform: `translateY(${-p * 140}px) scale(${1 - p * 0.04})` }}>{children}</AbsoluteFill>;
  }
  const edge = (1 - p) * 100; // % from top where the reveal edge sits
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ clipPath: `inset(${edge}% 0 0 0)`, transform: `translateY(${(1 - p) * 90}px)` }}>{children}</AbsoluteFill>
      {p < 1 ? (
        <div style={{ position: 'absolute', left: -40, right: -40, top: `calc(${edge}% - 150px)`, height: 150, transform: 'rotate(-4deg)' }}>
          <div style={{ height: 124, background: C.emerald }} />
          <div style={{ height: 26, background: C.emeraldDark }} />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

/** Push: the new scene slides up over the old one, which sinks back and darkens. */
const Push: React.FC<TransitionPresentationComponentProps<P>> = ({ children, presentationDirection, presentationProgress: p }) =>
  presentationDirection === 'exiting' ? (
    <AbsoluteFill style={{ transform: `translateY(${-p * 22}%) scale(${1 - p * 0.08})`, filter: `brightness(${1 - p * 0.35})` }}>{children}</AbsoluteFill>
  ) : (
    <AbsoluteFill style={{ transform: `translateY(${(1 - p) * 100}%)`, boxShadow: '0 -30px 60px rgba(0,0,0,0.25)' }}>{children}</AbsoluteFill>
  );

/** Iris: the new scene opens from a circle just above centre (where the next idea sits). */
const Iris: React.FC<TransitionPresentationComponentProps<P>> = ({ children, presentationDirection, presentationProgress: p }) =>
  presentationDirection === 'exiting' ? (
    <AbsoluteFill style={{ transform: `scale(${1 + p * 0.12})` }}>{children}</AbsoluteFill>
  ) : (
    <AbsoluteFill style={{ clipPath: `circle(${p * 120}% at 50% 42%)` }}>{children}</AbsoluteFill>
  );

const make = (component: React.FC<TransitionPresentationComponentProps<P>>): TransitionPresentation<P> => ({ component, props: {} });

export const presentations = { wipe: make(Wipe), push: make(Push), iris: make(Iris) } as const;
