import type { ReelSpec, Scene, Hook, Cta, Transition } from './spec.ts';

/*
 * The beat grid. Imported by the React composition AND by scripts/audio.mjs, so the
 * picture and the synthesized music/SFX are computed from the same numbers.
 *
 * Scene i "lands" (is fully revealed) exactly on its grid beat. Its transition runs
 * in the TRANSITION frames before that beat, overlapping the previous scene.
 * Inside a scene, choreography helpers below place every arrival on the grid.
 */

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;
export const TRANSITION = 12;

export type SfxKind = 'whoosh' | 'thud' | 'pluck' | 'click' | 'impact' | 'riser' | 'tick';
export type SfxEvent = { frame: number; kind: SfxKind; note?: number; gain?: number; len?: number };

export type AnyScene =
  | ({ type: 'hook'; transition: Transition } & Hook)
  | Scene
  | ({ type: 'cta' } & Cta);

export type Placed = {
  index: number;
  scene: AnyScene;
  startBeat: number;
  /** global frame where the scene is fully revealed (on the grid) */
  grid: number;
  /** global frame where its sequence starts (grid - overlap) */
  from: number;
  seqFrames: number;
  /** local frame of the landing beat inside the sequence */
  land: number;
  /** local frame where the next scene's transition starts covering this one */
  exit: number;
};

export const beatFrames = (bpm: number) => Math.max(8, Math.round((FPS * 60) / bpm));

/* ---------- choreography (local frames, relative to the scene) ---------- */

/** hook line k arrives here; the first one almost immediately so the hook reads in < 2s */
export const hookLineAt = (k: number, BF: number) => 4 + k * BF;
/** title line k of any scene; words inside a line follow WORD_STAGGER frames apart */
export const lineAt = (land: number, k: number, BF: number) => land + Math.round((k * BF) / 2);
export const WORD_STAGGER = 3;
export const itemAt = (land: number, k: number, BF: number) => land + (k + 1) * BF;
export const statLandAt = (land: number, BF: number) => land + BF;
export const ctaButtonAt = (land: number, BF: number) => land + BF;
export const ctaPressAt = (land: number, BF: number) => land + 3 * BF;
export const ctaUrlAt = (land: number, BF: number) => land + 2 * BF;

const titleLines = (s: AnyScene): number => ('lines' in s ? s.lines.length : 0);

export function layout(spec: ReelSpec) {
  const BF = beatFrames(spec.bpm);
  const all: AnyScene[] = [
    { ...spec.hook, type: 'hook', transition: 'cut' },
    ...spec.scenes,
    { ...spec.cta, type: 'cta' },
  ];

  const scenes: Placed[] = [];
  let beat = 0;
  all.forEach((scene, index) => {
    const overlap = index > 0 && scene.transition !== 'cut' ? TRANSITION : 0;
    const grid = beat * BF;
    scenes.push({
      index,
      scene,
      startBeat: beat,
      grid,
      from: grid - overlap,
      seqFrames: scene.beats * BF + overlap,
      land: overlap,
      exit: overlap + scene.beats * BF,
    });
    beat += scene.beats;
  });
  // the next scene's transition eats into the end of this one
  scenes.forEach((p, i) => {
    const next = scenes[i + 1];
    if (next) p.exit -= next.land;
  });

  const totalFrames = beat * BF;
  const events: SfxEvent[] = [];
  const at = (p: Placed, local: number) => p.from + local;
  // pentatonic ladder (Hz) used for per-item plucks so lists rise musically
  const LADDER = [523.25, 587.33, 659.25, 783.99, 880.0];

  for (const p of scenes) {
    const s = p.scene;
    if (p.index > 0 && s.transition !== 'cut') events.push({ frame: p.grid, kind: 'whoosh' });

    switch (s.type) {
      case 'hook':
        s.lines.forEach((_, k) => events.push({ frame: at(p, hookLineAt(k, BF)), kind: 'thud', gain: k === s.lines.length - 1 ? 1 : 0.8 }));
        events.push({ frame: p.grid + p.scene.beats * BF, kind: 'riser', len: 2 * BF });
        break;
      case 'points':
        s.items.forEach((_, k) => events.push({ frame: at(p, itemAt(p.land, k, BF)), kind: 'pluck', note: LADDER[k % LADDER.length] }));
        break;
      case 'cards':
        s.images.forEach((_, k) => events.push({ frame: at(p, itemAt(p.land, k, BF)), kind: 'pluck', note: LADDER[(k + 1) % LADDER.length] }));
        break;
      case 'stat':
        events.push({ frame: at(p, statLandAt(p.land, BF)), kind: 'impact' });
        for (let f = p.land + 2; f < statLandAt(p.land, BF) - 1; f += 3) events.push({ frame: at(p, f), kind: 'tick', gain: 0.5 });
        break;
      case 'screen':
        if (s.tap) events.push({ frame: at(p, p.land + s.tap.beat * BF), kind: 'click' });
        break;
      case 'cta':
        events.push({ frame: at(p, p.land), kind: 'impact', gain: 0.6 });
        events.push({ frame: at(p, ctaButtonAt(p.land, BF)), kind: 'pluck', note: 783.99 });
        events.push({ frame: at(p, ctaPressAt(p.land, BF)), kind: 'click' });
        events.push({ frame: at(p, ctaPressAt(p.land, BF)), kind: 'impact', gain: 0.8 });
        break;
      default:
        break;
    }
    // a soft pluck under each title line, except the hook (it has thuds)
    if (s.type !== 'hook' && s.type !== 'stat') {
      for (let k = 0; k < titleLines(s); k++) events.push({ frame: at(p, lineAt(p.land, k, BF)), kind: 'tick' });
    }
  }

  events.sort((a, b) => a.frame - b.frame);
  return {
    BF,
    /** exact tempo of the frame-quantised grid (what the audio must use) */
    bpm: (FPS * 60) / BF,
    totalFrames,
    totalBeats: beat,
    scenes,
    events: spec.sfx ? events : [],
  };
}

export type Layout = ReturnType<typeof layout>;
