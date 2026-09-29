// Deliverable render: 1080x1920, H.264 yuv420p CRF 16, AAC, mix at exactly -14 LUFS.
//   node scripts/render.mjs content/gapga-quloq.json
// Steps: audio stems -> Remotion render -> decode mix -> measure/normalise/limit in JS
//        -> remux (video stream copied untouched) -> verify the delivered file.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { renderMedia, selectComposition } from '@remotion/renderer';
import { ROOT, ff, getBundle } from './common.mjs';
import { buildAudio } from './audio.mjs';
import { integratedLufs, truePeakDb, normalise, readWav, interleave, stemLags } from './loudness.mjs';
import { FPS } from '../src/timing.ts';

const TARGET = -14;
const file = path.resolve(process.argv[2] ?? '');
const input = JSON.parse(await readFile(file, 'utf8'));
input.safeGuides = false; // never ship the guides

const { spec, L } = await buildAudio(file);
const outDir = path.join(ROOT, 'out');
await mkdir(outDir, { recursive: true });
const raw = path.join(outDir, `${spec.id}.raw.mp4`);
const pcm = path.join(outDir, `${spec.id}.mix.f32`);
const wav = path.join(outDir, `${spec.id}.mix.wav`);
const reuse = process.argv.includes('--reuse') && (await import('node:fs')).existsSync(raw) && (await import('node:fs')).existsSync(wav);
const final = path.join(outDir, `${spec.id}.mp4`);

if (!reuse) {
  const serveUrl = await getBundle();
  const composition = await selectComposition({ serveUrl, id: spec.id, inputProps: input });
  const t0 = Date.now();
  let last = -1;
  // picture only: PNG frames so x264 gets limited-range yuv420p (JPEG frames yield yuvj420p)
  await renderMedia({
    serveUrl,
    composition,
    inputProps: input,
    codec: 'h264',
    crf: 16,
    pixelFormat: 'yuv420p',
    colorSpace: 'bt709',
    x264Preset: 'slow',
    imageFormat: 'png',
    muted: true,
    outputLocation: raw,
    onProgress: ({ progress }) => {
      const pct = Math.floor(progress * 10) * 10;
      if (pct !== last) {
        last = pct;
        process.stdout.write(`render ${pct}%
`);
      }
    },
  });
  // the mix, lossless: music + sfx + voiceover with the composition's own fades and ducking.
  // Encoding AAC only once (at the mux) keeps every hit on the grid.
  await renderMedia({ serveUrl, composition, inputProps: input, codec: 'wav', outputLocation: wav });
  console.log(`rendered ${L.totalFrames} frames + mix in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

// decode the mix Remotion produced (music + sfx + voiceover, with ducking/fades)
const [mL, mR] = readWav(await readFile(wav));
const before = integratedLufs(mL, mR);
const n = normalise(mL, mR, TARGET, -2.5);
await writeFile(pcm, interleave(n.L, n.R));
console.log(`loudness: ${before.toFixed(2)} LUFS -> ${n.lufs.toFixed(2)} LUFS (gain ${n.gainDb.toFixed(2)} dB, limited at -2.5 dBFS)`);

ff([
  '-y', '-v', 'error',
  '-i', raw,
  '-f', 'f32le', '-ac', '2', '-ar', '48000', '-i', pcm,
  '-map', '0:v:0', '-map', '1:a:0',
  '-c:v', 'copy',
  '-c:a', 'aac', '-b:a', '256k', '-ar', '48000',
  '-movflags', '+faststart',
  '-shortest',
  final,
]);

// verify what will actually be uploaded (after the AAC round-trip)
const check = path.join(outDir, `${spec.id}.check.wav`);
ff(['-y', '-v', 'error', '-i', final, '-vn', '-c:a', 'pcm_s24le', '-ac', '2', '-ar', '48000', check]);
const [vL, vR] = readWav(await readFile(check));
await rm(check, { force: true });
const lufs = integratedLufs(vL, vR);
const tp = truePeakDb(vL, vR);
await rm(pcm, { force: true });
await rm(wav, { force: true });
await rm(raw, { force: true });
// sync: the SFX stem must sit where it was scheduled inside the delivered mix
let offs = [];
if (spec.sfx) {
  const [sL] = readWav(await readFile(path.join(ROOT, 'public', 'generated', spec.id, 'sfx.wav')));
  const hits = L.events.filter((e) => ['thud', 'impact', 'click', 'whoosh'].includes(e.kind)).map((e) => e.frame / FPS);
  offs = stemLags(vL, sL, hits);
}
const worst = offs.reduce((m, o) => Math.max(m, Math.abs(o)), 0);
console.log(`delivered ${path.relative(ROOT, final)}: ${lufs.toFixed(2)} LUFS, ${tp.toFixed(2)} dBTP, ${(L.totalFrames / FPS).toFixed(2)}s, sync worst ${worst.toFixed(1)} ms over ${offs.length} hits`);
if (Math.abs(lufs - TARGET) > 0.5 || tp > -1 || worst > 15) {
  console.error('OUT OF SPEC');
  process.exit(1);
}
