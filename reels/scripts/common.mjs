import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { bundle } from '@remotion/bundler';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Remotion ships its own ffmpeg; use it rather than a second copy.
const compositorDir = path.dirname(fileURLToPath(import.meta.resolve(`@remotion/compositor-${process.platform}-${process.arch}${process.platform === 'win32' ? '-msvc' : '-gnu'}`)));
export const FFMPEG = path.join(compositorDir, process.platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg');

export const ff = (args, opts = {}) => {
  const r = spawnSync(FFMPEG, ['-hide_banner', ...args], { encoding: 'utf8', maxBuffer: 1 << 27, cwd: compositorDir, ...opts });
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${(r.stderr || '').slice(-2000)}`);
  return r;
};

let bundled;
export async function getBundle() {
  bundled ??= await bundle({ entryPoint: path.join(ROOT, 'src/index.ts'), publicDir: path.join(ROOT, 'public') });
  return bundled;
}
