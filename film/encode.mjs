// Encode frames + score -> H.264 yuv420p CRF 16, audio normalised to -14 LUFS.
// node encode.mjs --frames frames/9x16 --out ../assets/film/farzandly-9x16.mp4
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import path from 'node:path';
const require = createRequire(import.meta.url);
const FF = require('ffmpeg-static');

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > -1 ? process.argv[i + 1] : d; };
const FRAMES = path.resolve(arg('frames', 'frames/9x16'));
const OUT    = path.resolve(arg('out', '../assets/film/farzandly-9x16.mp4'));
const FPS    = arg('fps', '30');
const WAV    = path.resolve('../assets/film/score-norm.wav'); // already -14 LUFS, see audio-normalise.mjs

// score-norm.wav is already exactly -14.0 LUFS (ebur128-verified) with -0.9 dBFS peak,
// so the encoder applies no further gain - loudnorm's own in-encoder pass overshot both
// the target and the true-peak ceiling, so it is deliberately not used here.

const args = [
  '-y', '-hide_banner', '-v', 'warning', '-stats',
  '-framerate', FPS, '-start_number', '0', '-i', path.join(FRAMES, '%05d.png'),
  '-i', WAV,
  '-map', '0:v:0', '-map', '1:a:0',
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '16',
  '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.2',
  '-x264-params', 'keyint=60:min-keyint=30:scenecut=0',
  '-color_primaries', 'bt709', '-color_trc', 'bt709', '-colorspace', 'bt709',
  '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2',
  '-movflags', '+faststart', '-shortest',
  OUT,
];
console.log('encoding ->', OUT);
execFileSync(FF, args, { stdio: 'inherit' });
