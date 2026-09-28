// Contact sheet: one frame per musical beat (120 BPM -> 40 beats in 20s),
// composited with beat labels. Look at this BEFORE any full render.
// node sheet.mjs [--out ../assets/film/contact-sheet.png] [--cols 8] [--tw 324]
import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > -1 ? process.argv[i + 1] : d; };
const OUT  = path.resolve(arg('out', '../assets/film/contact-sheet.png'));
const COLS = +arg('cols', 8);
const TW   = +arg('tw', 324);          // tile width
const Wp = +arg('w', 1080), Hp = +arg('h', 1920);
const TH = Math.round(TW * Hp / Wp);
const B = 0.5, DUR = 20;
const FROM = +arg('from', 0), TO = +arg('to', 20);

const run = async () => {
  const browser = await chromium.launch({ args: ['--force-device-scale-factor=1', '--hide-scrollbars'] });
  const page = await browser.newPage({ viewport: { width: Wp, height: Hp }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.resolve('film.html')).href + `?w=${Wp}&h=${Hp}`);
  await page.waitForFunction('window.__filmReady === true', null, { timeout: 60000 });
  const scenes = await page.evaluate(() => window.SCENES);

  const shots = [];
  for (let i = Math.round(FROM / B); i * B < TO; i++) {
    const t = i * B;
    await page.evaluate((tt) => window.seek(tt), t);
    const buf = await page.screenshot({ type: 'png' });
    shots.push({ t, b64: buf.toString('base64') });
  }
  await browser.close();

  // composite in a second headless page
  const ROWS = Math.ceil(shots.length / COLS);
  const PAD = 12, LAB = 30;
  const SW = COLS * TW + (COLS + 1) * PAD;
  const SH = ROWS * (TH + LAB) + (ROWS + 1) * PAD + 64;

  const b2 = await chromium.launch();
  const p2 = await b2.newPage({ viewport: { width: SW, height: SH }, deviceScaleFactor: 1 });
  await p2.setContent(`<html><body style="margin:0"><canvas id="c" width="${SW}" height="${SH}"></canvas></body></html>`);
  await p2.evaluate(async ({ shots, scenes, COLS, TW, TH, PAD, LAB, SW, SH }) => {
    const x = document.getElementById('c').getContext('2d');
    x.fillStyle = '#101418'; x.fillRect(0, 0, SW, SH);
    x.fillStyle = '#e6edf3';
    x.font = '700 26px system-ui, sans-serif';
    x.fillText('farzandly — 20s / 120BPM / one frame per beat', PAD, 40);
    const imgs = await Promise.all(shots.map(s => new Promise(r => {
      const im = new Image(); im.onload = () => r(im); im.src = 'data:image/png;base64,' + s.b64;
    })));
    imgs.forEach((im, i) => {
      const c = i % COLS, rI = Math.floor(i / COLS);
      const dx = PAD + c * (TW + PAD), dy = 64 + PAD + rI * (TH + LAB + PAD);
      x.drawImage(im, dx, dy, TW, TH);
      const t = shots[i].t;
      const sc = scenes.find(s => t >= s.from && t < s.to);
      x.fillStyle = '#7d8996'; x.font = '500 17px system-ui, sans-serif';
      x.fillText(`b${Math.round(t/0.5)}  ${t.toFixed(1)}s`, dx, dy + TH + 20);
      x.fillStyle = '#3fb984'; x.font = '500 15px system-ui, sans-serif';
      const lab = (sc ? sc.label : '').slice(0, 26);
      x.fillText(lab, dx + 86, dy + TH + 20);
      x.strokeStyle = '#243040'; x.lineWidth = 1; x.strokeRect(dx + .5, dy + .5, TW - 1, TH - 1);
    });
  }, { shots, scenes, COLS, TW, TH, PAD, LAB, SW, SH });

  const out = await p2.locator('#c').screenshot({ type: 'png' });
  await b2.close();
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, out);
  console.log('contact sheet ->', OUT, `${SW}x${SH}`, shots.length, 'beats');
};

run();
