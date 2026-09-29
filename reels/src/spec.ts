import { z } from 'zod';

/*
 * A reel is data. Everything an editor changes between videos lives in this schema:
 * hook, scenes (script), images, voiceover, music and CTA. Timing is expressed in
 * beats so every cut, word and sound effect lands on the musical grid.
 *
 * Paths (src) are relative to reels/public/.
 */

export const TransitionSchema = z.enum(['wipe', 'push', 'iris', 'cut']);

export const MediaSchema = z.object({
  src: z.string(),
  kind: z.enum(['image', 'video']).default('image'),
  /** where the Ken Burns move drifts toward, 0..1 */
  focusX: z.number().min(0).max(1).default(0.5),
  focusY: z.number().min(0).max(1).default(0.5),
  /** darkening scrim so text stays readable, 0..1 */
  dim: z.number().min(0).max(1).default(0.5),
});

const common = {
  /** scene length in beats, including its transition in */
  beats: z.number().int().min(2).max(16),
  /** what the voiceover says during this scene; drives auto captions when no timed captions are given */
  say: z.string().optional(),
  transition: TransitionSchema.default('wipe'),
};

const lines = z.array(z.string()).min(1).max(4);

export const HookSchema = z.object({
  kicker: z.string().optional(),
  /** each entry lands on its own beat, fitted to the frame width */
  lines: z.array(z.string()).min(1).max(5),
  /** words to paint in the accent colour with the squiggle underline */
  accent: z.array(z.string()).default([]),
  background: MediaSchema.optional(),
  beats: z.number().int().min(3).max(10).default(6),
});

export const HeadlineScene = z.object({
  type: z.literal('headline'),
  kicker: z.string().optional(),
  lines,
  accent: z.array(z.string()).default([]),
  tone: z.enum(['cream', 'dark', 'emerald']).default('cream'),
  background: MediaSchema.optional(),
  ...common,
});

export const ScreenScene = z.object({
  type: z.literal('screen'),
  kicker: z.string().optional(),
  lines,
  accent: z.array(z.string()).default([]),
  /** phone screenshot (any height); scrolls inside a phone frame */
  src: z.string(),
  srcWidth: z.number().default(1170),
  /** source-pixel offset to scroll to; ignored when `tap` is set (the tap target is framed automatically) */
  scrollTo: z.number().default(0),
  /** optional finger tap, in source pixels, on beat N after the scene lands.
   *  The screen scrolls so the target sits high on the phone, clear of the captions. */
  tap: z.object({ x: z.number(), y: z.number(), beat: z.number().int().min(1) }).optional(),
  ...common,
});

export const PointsScene = z.object({
  type: z.literal('points'),
  kicker: z.string().optional(),
  lines,
  accent: z.array(z.string()).default([]),
  /** each item lands on its own beat */
  items: z.array(z.string()).min(1).max(4),
  ...common,
});

export const StatScene = z.object({
  type: z.literal('stat'),
  kicker: z.string().optional(),
  value: z.number().int().min(0),
  suffix: z.string().default(''),
  label: z.string(),
  chips: z.array(z.string()).max(3).default([]),
  tone: z.enum(['cream', 'dark', 'emerald']).default('cream'),
  ...common,
});

export const CardsScene = z.object({
  type: z.literal('cards'),
  kicker: z.string().optional(),
  lines,
  accent: z.array(z.string()).default([]),
  /** UI crops or photos that fly in one per beat and float at different depths */
  images: z.array(z.string()).min(1).max(3),
  ...common,
});

export const ImageScene = z.object({
  type: z.literal('image'),
  kicker: z.string().optional(),
  lines,
  accent: z.array(z.string()).default([]),
  background: MediaSchema,
  ...common,
});

export const SceneSchema = z.discriminatedUnion('type', [
  HeadlineScene,
  ScreenScene,
  PointsScene,
  StatScene,
  CardsScene,
  ImageScene,
]);

export const CtaSchema = z.object({
  kicker: z.string().optional(),
  lines,
  accent: z.array(z.string()).default([]),
  button: z.string(),
  url: z.string(),
  say: z.string().optional(),
  beats: z.number().int().min(5).max(12).default(8),
  transition: TransitionSchema.default('wipe'),
});

export const ReelSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'lowercase letters, digits and dashes'),
  /** tempo of the grid. 100 bpm = 0.6s per beat at 30fps */
  bpm: z.number().min(70).max(140).default(100),
  hook: HookSchema,
  scenes: z.array(SceneSchema).min(1).max(8),
  cta: CtaSchema,
  captions: z
    .object({
      style: z.enum(['phrase', 'word', 'off']).default('phrase'),
      /** optional timed captions (Remotion Caption[] JSON), e.g. from whisper; overrides `say` timing */
      src: z.string().optional(),
    })
    .default({ style: 'phrase' }),
  music: z
    .object({
      /** supplied track; when absent the synthesized bed in generated/<id>/music.wav is used */
      src: z.string().optional(),
      volume: z.number().min(0).max(1).default(0.8),
      /** music level while the voiceover is present */
      duckTo: z.number().min(0).max(1).default(0.3),
    })
    .default({ volume: 0.8, duckTo: 0.3 }),
  voiceover: z
    .object({
      src: z.string(),
      volume: z.number().min(0).max(2).default(1),
      /** beat the voiceover starts on */
      startBeat: z.number().min(0).default(0),
    })
    .optional(),
  sfx: z.boolean().default(true),
  progress: z.boolean().default(true),
  /** draw Instagram UI safe-zone guides (preview only, never in delivery renders) */
  safeGuides: z.boolean().default(false),
});

export type ReelInput = z.input<typeof ReelSchema>;
export type ReelSpec = z.output<typeof ReelSchema>;
export type Scene = z.output<typeof SceneSchema>;
export type Hook = z.output<typeof HookSchema>;
export type Cta = z.output<typeof CtaSchema>;
export type Media = z.output<typeof MediaSchema>;
export type Transition = z.output<typeof TransitionSchema>;

export const parseReel = (input: unknown): ReelSpec => ReelSchema.parse(input);
