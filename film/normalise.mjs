// score.wav -> score-norm.wav at exactly -14.0 LUFS with enough headroom that the
// AAC round-trip still lands below 0 dBFS.
//
// Why not ffmpeg's loudnorm: its in-encoder pass measured the source at -12.89 LUFS but
// produced -13.3 LUFS with a +0.5 dBTP overshoot. So we measure with ebur128 (authoritative),
// limit true peaks, then apply one exact gain, and verify.
import { execFileSync, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import path from 'node:path';
const require = createRequire(import.meta.url);
const FF = require('ffmpeg-static');

const SRC = path.resolve('../assets/film/score.wav');
const OUT = path.resolve('../assets/film/score-norm.wav');
const TARGET = -14.0;
const LIMIT = 0.63;   // ~-4 dBFS ceiling; AAC adds ~1.1 dB of intersample overshoot

const measure = (file, extraAf = '') => {
  const af = (extraAf ? extraAf + ',' : '') + 'ebur128=peak=true';
  // ebur128 prints its summary to stderr, not stdout
  const r = spawnSync(FF, ['-hide_banner', '-v', 'info', '-i', file, '-af', af, '-f', 'null', '-'],
    { encoding: 'utf8', maxBuffer: 1 << 26 });
  const tail = (r.stderr || '').slice(-1200);
  const i = /I:\s+(-?[\d.]+)\s+LUFS/g, p = /Peak:\s+(-?[\d.]+)\s+dBFS/g;
  const is = [...tail.matchAll(i)].map(m => +m[1]), ps = [...tail.matchAll(p)].map(m => +m[1]);
  return { i: is.at(-1), peak: ps.at(-1) };
};

const limiter = `alimiter=limit=${LIMIT}:attack=4:release=60:level=disabled`;
const pre = measure(SRC, limiter);
const gain = (TARGET - pre.i).toFixed(2);
console.log(`limited: ${pre.i} LUFS, peak ${pre.peak} dBFS  ->  applying ${gain} dB`);

execFileSync(FF, ['-y', '-hide_banner', '-v', 'error', '-i', SRC,
  '-af', `${limiter},volume=${gain}dB,aresample=48000`, '-c:a', 'pcm_s16le', OUT], { stdio: 'inherit' });

const post = measure(OUT);
console.log(`score-norm.wav: ${post.i} LUFS, peak ${post.peak} dBFS`);
if (Math.abs(post.i - TARGET) > 0.3) { console.error('OFF TARGET'); process.exit(1); }
