# Farzandly Reels

A reusable Instagram Reels system (Remotion, 1080×1920, 30fps). A reel is a JSON file;
the components, timing, music, sound effects, captions and delivery pipeline are shared.
Built to the studio rules in `../CLAUDE.md`.

## Make a new reel

1. Copy `content/gapga-quloq.json` to `content/<your-id>.json` and edit it.
2. Import it in `src/Root.tsx` (add it to `REELS`).
3. Preview: `npm run studio` (every field is editable in the props panel).
4. **Look at the contact sheet before rendering:** `node scripts/sheet.mjs content/<your-id>.json`
   (add `--guides` to overlay the Instagram UI zones).
5. Deliver: `node scripts/render.mjs content/<your-id>.json` → `out/<your-id>.mp4`

The render fails if loudness, true peak or sound sync are out of spec (see below).

## What you can change without touching code

| field | what it does |
|---|---|
| `bpm` | tempo of the grid. Everything lands on it: cuts, words, SFX. 100 = 0.6s per beat. |
| `hook.lines` | 1–5 lines, one per beat, each auto-sized to fill the width. First line lands at 0.13s. |
| `hook.accent`, `*.accent` | words painted emerald with the site's squiggle underline |
| `hook.background` | optional photo/video behind the hook |
| `scenes[]` | the script. Types below. `beats` sets length (keep scenes 2–4s). |
| `scenes[].say` | the voiceover line for that scene; drives captions |
| `scenes[].transition` | `wipe` (brand band), `push`, `iris`, `cut` |
| `cta` | headline, button label (pressed on the beat), URL (typed on) |
| `captions.style` | `phrase` (pages, word highlight), `word` (one word at a time), `off` |
| `captions.src` | timed captions JSON (Remotion `Caption[]`, e.g. from whisper) instead of auto timing |
| `music.src` | your own track (in `public/`); otherwise a bed is synthesized for the reel |
| `voiceover.src`, `voiceover.startBeat` | voiceover file; the music ducks to `music.duckTo` |
| `sfx`, `progress` | toggle sound effects / the segmented progress bar |

### Scene types

| type | use it for | key fields |
|---|---|---|
| `headline` | a statement in kinetic type | `lines`, `tone` (`cream`/`dark`/`emerald`), `background` |
| `image` | a photo or video with Ken Burns zoom and a readable scrim | `background: { src, kind, focusX, focusY, dim }` |
| `screen` | the real product in a phone, scrolling, with an optional tap | `src`, `scrollTo`, `tap: { x, y, beat }` (source pixels) |
| `points` | 1–4 benefits, one per beat | `items` |
| `stat` | a number that counts up and lands on the beat | `value`, `suffix`, `label`, `chips`, `tone` |
| `cards` | up to 3 images flying in at different depths | `images` |

With `tap`, the phone frames the target automatically (38% down the screen) so the
caption never covers what is being pressed. Tap coordinates are pixels in the screenshot.

## Assets

- `public/screens/` real phone captures of farzandly.uz (1170px wide, trimmed for fast decode)
- `public/ui/` element-exact UI crops · `public/brand/` real logo files · `public/fonts/` Chubbo + Supreme
- Put photos, video, music and voiceover anywhere under `public/` and reference them by path.

Only use claims the site itself publishes (see `../assets/film/MANIFEST.md`).

## How it works

- `src/spec.ts`: the schema (zod). Studio and the scripts both validate against it.
- `src/timing.ts`: **the beat grid.** Scene placement, word/item arrival frames and every SFX
  event. Imported by the React composition *and* by `scripts/audio.mjs`, so picture and sound
  cannot drift. Scenes land exactly on their beat; transitions run in the frames before it.
- `src/components/`: `Kinetic` (word-by-word masked type + squiggle), `Captions`,
  `Background` (Ken Burns / parallax), `PhoneScreen` (product screen + tap), `Chrome`
  (progress, logo, safe guides), `transitions` (wipe / push / iris presentations).
- `src/scenes/`: one component per scene type, all positioned inside the safe area.
- Randomness is Remotion's seeded `random()`; audio noise is seeded mulberry32. Renders are repeatable.

## Safe margins

Everything readable stays inside `SAFE` (`src/brand.ts`): 250px top, 440px bottom,
156px right (Instagram's action buttons), 84px left. Captions sit just above the bottom line.
Check with `--guides` on the sheet or `"safeGuides": true` in Studio.

## Sound

`scripts/audio.mjs` writes to `public/generated/<id>/`: a warm I–V–vi–IV `music.wav`
(sparse under the hook, groove from the first scene, resolves on the CTA), `sfx.wav` (thuds per
hook line, whooshes landing on each cut, plucks per list item, ticks on the count-up, a click
on every tap and button press) and `beats.json`. Render and sheet regenerate these automatically;
run `npm run audio -- content/<id>.json` after editing a spec in Studio.

## Delivery spec (enforced by `scripts/render.mjs`)

- H.264, **yuv420p** (TV range, BT.709), **CRF 16**, x264 `slow`, AAC 256k, 48kHz, faststart
- Picture renders muted from PNG frames; the mix renders separately as lossless WAV, so AAC
  is encoded exactly once (no stacked encoder delay).
- Loudness **-14 LUFS integrated** (BS.1770-4 gating, measured in `scripts/loudness.mjs`,
  validated against a reference sine and ffmpeg `ebur128`), limited to keep true peak below -1 dBTP.
  Remotion's bundled ffmpeg has no `ebur128`/`alimiter`, and `loudnorm` overshot in this repo.
- Sync: each SFX hit is cross-correlated against the delivered mix; > 15 ms off fails the render.

Current renders: `gapga-quloq` 22.8s, `bolalar-olami` 21.3s, both -14.05 LUFS, ≈-1.6 dBTP, 0.0 ms sync.
