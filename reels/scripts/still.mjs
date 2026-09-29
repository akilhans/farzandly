// One full-resolution frame, for close inspection.
//   node scripts/still.mjs content/<reel>.json <frame> [--guides]
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { renderStill, selectComposition } from '@remotion/renderer';
import { ROOT, getBundle } from './common.mjs';

const [file, frameArg] = process.argv.slice(2);
const input = JSON.parse(await readFile(path.resolve(file), 'utf8'));
if (process.argv.includes('--guides')) input.safeGuides = true;
const serveUrl = await getBundle();
const composition = await selectComposition({ serveUrl, id: input.id, inputProps: input });
await mkdir(path.join(ROOT, 'out'), { recursive: true });
const out = path.join(ROOT, 'out', `${input.id}-f${frameArg}.png`);
await renderStill({ serveUrl, composition, frame: +frameArg, inputProps: input, output: out, imageFormat: 'png', onBrowserLog: (l) => l.type !== 'verbose' && console.log('[browser]', l.text) });
console.log(out);
