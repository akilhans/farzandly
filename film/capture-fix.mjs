// Re-capture the components whose ancestor-climb overshot.
import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('../assets/film/ui');
const SITE = 'https://farzandly.uz';

// substring matches only - the site uses curly apostrophes
const TARGETS = [
  ['age-0-2', '/', '0–2 yosh'],
  ['age-3-5', '/', '3–5 yosh'],
  ['age-6-9', '/', '6–9 yosh'],
  ['age-10-13', '/', '10–13 yosh'],
  ['problem-1', '/', 'Bola gapga quloq solmasa'],
  ['problem-2', '/', 'Injiqlik va tantrumlar'],
  ['problem-3', '/', 'Telefon va ekran vaqti'],
  ['steps', '/', 'qadamda o'],
  ['ertak-1', '/ertaklar', 'Ochko'],
  ['ertak-2', '/ertaklar', 'Boylik topgan'],
  ['ertak-3', '/ertaklar', 'Xo'],
  ['premium-free', '/premium', 'Bepul asosiy'],
  ['premium-price', '/premium', '79 000'],
];

// Walk up from the text node's element to the nearest real card.
const pickCard = (needle) => {
  const all = [...document.querySelectorAll('h1,h2,h3,h4,p,span,div,a,li')];
  const hit = all.filter((n) => n.innerText && n.innerText.includes(needle))
    .sort((a, b) => a.innerText.length - b.innerText.length)[0];
  if (!hit) return null;
  let n = hit;
  let best = null;
  for (let i = 0; i < 8 && n; i++) {
    const r = n.getBoundingClientRect();
    const s = getComputedStyle(n);
    const radius = parseFloat(s.borderRadius) || 0;
    const boxed = radius >= 12 || s.borderBottomWidth !== '0px' || s.boxShadow !== 'none';
    if (boxed && r.height >= 70 && r.height <= 480 && r.width >= 200) { best = n; break; }
    if (r.height > 520) break;
    n = n.parentElement;
  }
  const el = best || hit;
  el.setAttribute('data-film-target', '1');
  const r = el.getBoundingClientRect();
  return { w: Math.round(r.width), h: Math.round(r.height), tag: el.tagName };
};

const run = async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
    deviceScaleFactor: 3,
    isMobile: true, hasTouch: true, locale: 'uz-UZ',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const page = await ctx.newPage();
  const manifest = [];
  let current = null;

  for (const [name, route, needle] of TARGETS) {
    try {
      if (current !== route) {
        await page.goto(SITE + route, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await page.evaluate(() => document.fonts?.ready).catch(() => {});
        await page.addStyleTag({ content: `*{animation:none!important;transition:none!important}` }).catch(() => {});
        await page.waitForTimeout(900);
        current = route;
      }
      await page.evaluate(() => document.querySelectorAll('[data-film-target]').forEach((n) => n.removeAttribute('data-film-target')));
      const info = await page.evaluate(pickCard, needle);
      if (!info) throw new Error('no text match');
      const loc = page.locator('[data-film-target]').first();
      await loc.scrollIntoViewIfNeeded({ timeout: 8000 }).catch(() => {});
      await page.waitForTimeout(400);
      await loc.screenshot({ path: path.join(OUT, `${name}.png`), timeout: 15000 });
      manifest.push({ name, route, ...info });
      console.log('ok  ', name.padEnd(14), `${info.w}x${info.h}css  <${info.tag}>`);
    } catch (e) {
      console.log('FAIL', name.padEnd(14), e.message.split('\n')[0].slice(0, 60));
    }
  }
  await browser.close();
  await writeFile(path.join(OUT, 'ui-manifest-2.json'), JSON.stringify(manifest, null, 2));
};

run();
