// Specific frames, tiled into one strip (for checking motion mid-flight).
//   node scripts/frames.mjs content/<reel>.json 204 210 444 356
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { openBrowser, renderStill, selectComposition } from '@remotion/renderer';
import { ROOT, getBundle } from './common.mjs';

const [file, ...frameArgs] = process.argv.slice(2);
const input = JSON.parse(await readFile(path.resolve(file), 'utf8'));
const serveUrl = await getBundle();
const browser = await openBrowser('chrome');
const composition = await selectComposition({ serveUrl, id: input.id, inputProps: input, puppeteerInstance: browser });
const dir = path.join(ROOT, 'out', 'frames');
await mkdir(dir, { recursive: true });
const images = [];
for (const f of frameArgs) {
  const out = path.join(dir, `${input.id}-${f}.jpeg`);
  await renderStill({ serveUrl, composition, frame: +f, inputProps: input, output: out, imageFormat: 'jpeg', scale: 0.25, puppeteerInstance: browser });
  images.push(`data:image/jpeg;base64,${(await readFile(out)).toString('base64')}`);
}
const props = { images, labels: frameArgs.map((f) => `f${f}`), cols: frameArgs.length };
const sheet = await selectComposition({ serveUrl, id: 'contact-sheet', inputProps: props, puppeteerInstance: browser });
const out = path.join(ROOT, 'out', `${input.id}-frames.png`);
await renderStill({ serveUrl, composition: sheet, frame: 0, inputProps: props, output: out, imageFormat: 'png', puppeteerInstance: browser });
await browser.close({ silent: true });
console.log(out);
