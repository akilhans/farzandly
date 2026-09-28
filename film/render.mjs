// Frame renderer. seek(t) -> PNG per frame. Deterministic, no timers.
// node render.mjs --w 1080 --h 1920 --out frames/9x16 [--fps 30]
import { chromium } from 'playwright';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const arg = (k, d) => {
  const i = process.argv.indexOf('--' + k);
  return i > -1 ? process.argv[i + 1] : d;
};

const Wp = +arg('w', 1080), Hp = +arg('h', 1920), FPS = +arg('fps', 30);
const OUT = path.resolve(arg('out', 'frames/9x16'));
const FROM = +arg('from', 0), TO = +arg('to', 20);

const run = async () => {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ args: ['--force-device-scale-factor=1', '--hide-scrollbars'] });
  const page = await browser.newPage({ viewport: { width: Wp, height: Hp }, deviceScaleFactor: 1 });
  const url = pathToFileURL(path.resolve('film.html')).href + `?w=${Wp}&h=${Hp}`;
  await page.goto(url);
  await page.waitForFunction('window.__filmReady === true', null, { timeout: 60000 });

  const total = Math.round((TO - FROM) * FPS);
  const t0 = Date.now();
  for (let i = 0; i < total; i++) {
    const t = FROM + i / FPS;
    await page.evaluate((tt) => window.seek(tt), t);
    const buf = await page.screenshot({ type: 'png' });
    await writeFile(path.join(OUT, String(i).padStart(5, '0') + '.png'), buf);
    if (i % 60 === 0 || i === total - 1) {
      const el = (Date.now() - t0) / 1000;
      process.stdout.write(`\r  ${i + 1}/${total} frames  ${el.toFixed(0)}s  `);
    }
  }
  process.stdout.write('\n');
  await browser.close();
  console.log('frames ->', OUT);
};

run();
