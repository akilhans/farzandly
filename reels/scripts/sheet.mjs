// Contact sheet: one still per beat, tiled. LOOK at this before any full render.
//   node scripts/sheet.mjs content/gapga-quloq.json [--offset 5] [--guides]
import { readFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { openBrowser, renderStill, selectComposition } from '@remotion/renderer';
import { ROOT, getBundle } from './common.mjs';
import { buildAudio } from './audio.mjs';
import { layout } from '../src/timing.ts';
import { parseReel } from '../src/spec.ts';

const args = process.argv.slice(2);
const file = path.resolve(args.find((a) => a.endsWith('.json')));
const offset = +(args[args.indexOf('--offset') + 1] ?? 5) || 5;
const guides = args.includes('--guides');

const input = JSON.parse(await readFile(file, 'utf8'));
if (guides) input.safeGuides = true;
const spec = parseReel(input);
const L = layout(spec);
await buildAudio(file);

const serveUrl = await getBundle();
const browser = await openBrowser('chrome');
const composition = await selectComposition({ serveUrl, id: spec.id, inputProps: input, puppeteerInstance: browser });

const dir = path.join(ROOT, 'out', 'sheet', spec.id);
await rm(dir, { recursive: true, force: true });
await mkdir(dir, { recursive: true });

const frames = Array.from({ length: L.totalBeats }, (_, k) => Math.min(L.totalFrames - 1, k * L.BF + offset));
for (const [i, frame] of frames.entries()) {
  await renderStill({
    serveUrl,
    composition,
    frame,
    inputProps: input,
    output: path.join(dir, `${String(i).padStart(3, '0')}.jpeg`),
    imageFormat: 'jpeg',
    jpegQuality: 85,
    scale: 0.25,
    puppeteerInstance: browser,
  });
}
const cols = 8;
const images = [];
for (let i = 0; i < frames.length; i++) {
  const buf = await readFile(path.join(dir, `${String(i).padStart(3, '0')}.jpeg`));
  images.push(`data:image/jpeg;base64,${buf.toString('base64')}`);
}
const sceneAt = (f) => [...L.scenes].reverse().find((p) => f >= p.grid);
const labels = frames.map((f, k) => `b${k}  ${sceneAt(f).scene.type}`);
const sheetProps = { images, labels, cols };
const sheetComp = await selectComposition({ serveUrl, id: 'contact-sheet', inputProps: sheetProps, puppeteerInstance: browser });
const out = path.join(ROOT, 'out', `${spec.id}-sheet${guides ? '-guides' : ''}.png`);
await renderStill({ serveUrl, composition: sheetComp, frame: 0, inputProps: sheetProps, output: out, imageFormat: 'png', puppeteerInstance: browser });
await browser.close({ silent: true });
console.log(`sheet: ${frames.length} beats (frame = beat*${L.BF}+${offset}) -> ${path.relative(ROOT, out)}`);
L.scenes.forEach((p) => console.log(`  beat ${String(p.startBeat).padStart(2)}  ${p.scene.type}`));
