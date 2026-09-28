# farzandly — 20s motion film

A showreel-energy spot for [farzandly.uz](https://farzandly.uz), built to the studio rules
in `../CLAUDE.md`. Every pixel of product UI in the film is a real screenshot of the live
site — nothing is redrawn from imagination.

## Run it

```bash
cd film
node capture.mjs           # page screenshots + brand data  -> ../assets/film/
node capture-elements.mjs  # element-exact UI crops         -> ../assets/film/ui/
node capture-fix.mjs       # re-crops the components that overshot
node audio.mjs             # score + SFX + beat grid        -> ../assets/film/score.wav, beats.json
node normalise.mjs         # exact -14.0 LUFS with AAC headroom -> score-norm.wav
node sheet.mjs             # LOOK AT THIS before rendering   -> ../assets/film/contact-sheet.png
node render.mjs --w 1080 --h 1920 --out frames/9x16
node encode.mjs --frames frames/9x16 --out ../assets/film/farzandly-9x16.mp4
```

`sheet.mjs` takes `--w --h --cols --tw --from --to` and renders one frame per musical beat.

## Render contract

- `film.html` exposes **`window.seek(t)`** — it paints frame `t` and nothing else.
  No CSS transitions, no `setTimeout`, no `requestAnimationFrame`, no state between frames.
- The only randomness is `mulberry32` (seeded); `Math.random` is never called.
  The audio noise sources use the same seeded generator, so the score is bit-identical per run.
- `render.mjs` drives Playwright: set viewport, `seek(t)`, screenshot, repeat. 30fps.
- `encode.mjs` → H.264 **yuv420p, CRF 16**, AAC 192k.
- Loudness: `normalise.mjs` limits true peaks and applies one exact gain so `score-norm.wav`
  is **-14.0 LUFS**, verified with `ebur128`. ffmpeg's own `loudnorm` is deliberately not used:
  it measured the source at -12.89 LUFS but rendered -13.3 LUFS with a +0.5 dBTP overshoot.
  The delivered files measure **-14.1 LUFS, -2.0 dBFS peak** after the AAC round-trip.

## Timeline — 20s, 120 BPM, beat = 0.5s

| t | beat | scene |
|---|---|---|
| 0.00–3.50 | b0–b6 | Hook: **BOLA / GAPGA / QULOQ / SOLMASA → NEGA?** (5 words, one per beat) |
| 3.50–7.00 | b7–b13 | The product appears and assembles piece by piece, then scrolls the real page |
| 7.00–9.50 | b14–b18 | Feature 1 — cursor picks an age group, the free-lessons card answers |
| 9.50–12.00 | b19–b23 | Feature 2 — cursor starts the daily 5-minute lesson, +10 XP flies off |
| 12.00–14.50 | b24–b28 | Feature 3 — cursor taps the Ertaklar tab, real tales cascade in |
| 14.50–17.50 | b29–b34 | Proof — **69 ta dars**, 1–10 free, 5 min/day, 15/46/89 library counts |
| 17.50–20.00 | b35–b39 | Logo lockup, real CTA button pressed, farzandly.uz end plate |

Motion **lands on** the beat and settles after it (`arrive()` / `settle()`), so any frame
sampled on the grid is a composed frame — never a half-built one.

## Look

One display face (**Chubbo 700**), one UI face (**Supreme**), one accent (**emerald `#059669`**).
Neutrals are the site's own cream `#faf7f2` and charcoal `#1e293b`. The brand's two signatures
carry the motion: the hand-drawn emerald squiggle underline, and the 4px darker bottom border
on buttons/cards, which compresses when the cursor presses — the real press mechanic, not a glow.

No centred title on a gradient, no global fade-ins, no corner labels or frame borders,
no glow on UI chrome, no particle bursts.

## Sound

`audio.mjs` synthesises everything — kick, snare, hats, sub bass, detuned pad, filtered pluck,
risers, whooshes, impacts and UI clicks — straight into a Float32 buffer, then writes a WAV.
Chords run Am → F → C → G → G → C. Every hit is placed on the grid in `beats.json`;
the three UI clicks (8.0s, 10.5s, 12.5s) and the CTA press (18.5s) land on the exact frames
where the on-screen cursor presses.

## Formats

Same timeline, three layouts driven by aspect ratio (`tall` / `square` / `wide`):
1080x1920 (9:16), 1080x1080 (1:1), 1920x1080 (16:9).

## Claims

The only statistics in the film are ones published on the site: **69 ta dars**,
1–10-darslar free, 5 daqiqa/day, and 15 ertak / 46 she'r / 89 maqol.
farzandly.uz publishes no user-count or outcome statistic, so the film asserts none.
