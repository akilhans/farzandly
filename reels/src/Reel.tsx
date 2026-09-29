import React, { useMemo } from 'react';
import { AbsoluteFill, Html5Audio, Sequence, interpolate, staticFile, useVideoConfig } from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { C, EASE_IN_OUT } from './brand';
import { parseReel, type ReelInput } from './spec';
import { TRANSITION, layout } from './timing';
import { SceneView, isDarkScene } from './scenes';
import { Captions } from './components/Captions';
import { Progress, SafeGuides } from './components/Chrome';
import { presentations } from './components/transitions';

/**
 * The reusable reel. Every video is this component + a JSON spec; nothing here is
 * specific to one video. Audio stems come from scripts/audio.mjs (same timing module).
 */
export const Reel: React.FC<ReelInput> = (input) => {
  const spec = useMemo(() => parseReel(input), [input]);
  const L = useMemo(() => layout(spec), [spec]);
  const { durationInFrames } = useVideoConfig();

  const darkAt = (frame: number) => {
    const p = [...L.scenes].reverse().find((s) => frame >= s.grid);
    return p ? isDarkScene(p) : false;
  };

  const musicSrc = spec.music.src ?? `generated/${spec.id}/music.wav`;
  const musicLevel = spec.voiceover ? spec.music.duckTo : spec.music.volume;

  return (
    <AbsoluteFill style={{ background: C.cream }}>
      <TransitionSeries>
        {L.scenes.flatMap((p) => {
          const items = [];
          if (p.land > 0 && p.scene.transition !== 'cut') {
            items.push(
              <TransitionSeries.Transition
                key={`t${p.index}`}
                presentation={presentations[p.scene.transition]}
                timing={linearTiming({ durationInFrames: TRANSITION, easing: EASE_IN_OUT })}
              />
            );
          }
          items.push(
            <TransitionSeries.Sequence key={`s${p.index}`} durationInFrames={p.seqFrames}>
              <SceneView p={p} BF={L.BF} />
            </TransitionSeries.Sequence>
          );
          return items;
        })}
      </TransitionSeries>

      {spec.progress ? <Progress L={L} darkAt={darkAt} /> : null}
      <Captions spec={spec} L={L} />
      {spec.safeGuides ? <SafeGuides /> : null}

      {/* music bed: fades in over half a beat, out over the last beat */}
      <Html5Audio
        src={staticFile(musicSrc)}
        loop={!!spec.music.src}
        volume={(f) =>
          musicLevel *
          interpolate(f, [0, L.BF / 2, durationInFrames - L.BF, durationInFrames], [0.6, 1, 1, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })
        }
      />
      {spec.sfx ? <Html5Audio src={staticFile(`generated/${spec.id}/sfx.wav`)} /> : null}
      {spec.voiceover ? (
        <Sequence from={Math.round(spec.voiceover.startBeat * L.BF)} layout="none">
          <Html5Audio src={staticFile(spec.voiceover.src)} volume={spec.voiceover.volume} />
        </Sequence>
      ) : null}
    </AbsoluteFill>
  );
};
