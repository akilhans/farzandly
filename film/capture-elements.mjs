// Element-exact captures of real product UI for the film.
import { chromium } from 'playwright';
import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('../assets/film/ui');
const SITE = 'https://farzandly.uz';

// [file, route, locator, opts]
const TARGETS = [
  ['header',        '/',          'header, nav'],
  ['hero',          '/',          'h1', { climb: 1 }],
  ['cta-primary',   '/',          'a:has-text("1-darsni bepul boshlash")'],
  ['cta-secondary', '/',          'a:has-text("Barcha darslar")'],
  ['search',        '/',          'input[type="search"], input[placeholder*="Mavzuni"]', { climb: 1 }],
  ['today-card',    '/',          ':text("BUGUNGI 5 DAQIQA")', { climb: 3 }],
  ['today-btn',     '/',          'a:has-text("Hozir boshlash"), button:has-text("Hozir boshlash")'],
  ['age-section',   '/',          ':text("Farzandingiz nechchi yoshda")', { climb: 2 }],
  ['age-0-2',       '/',          'a:has-text("0–2 yosh"), div:has-text("0–2 yosh")', { card: true }],
  ['age-3-5',       '/',          'a:has-text("3–5 yosh"), div:has-text("3–5 yosh")', { card: true }],
  ['age-6-9',       '/',          'a:has-text("6–9 yosh"), div:has-text("6–9 yosh")', { card: true }],
  ['problem-1',     '/',          ':text("Bola gapga quloq solmasa")', { climb: 3 }],
  ['problem-2',     '/',          ':text("Injiqlik va tantrumlar")', { climb: 3 }],
  ['problem-3',     '/',          ':text("Telefon va ekran vaqti")', { climb: 3 }],
  ['chips',         '/ertaklar',  ':text("Topishmoqlar")', { climb: 2 }],
  ['ertak-1',       '/ertaklar',  ':text("Ochko\'z bo\'ri")', { climb: 3 }],
  ['ertak-2',       '/ertaklar',  ':text("Boylik topgan bola")', { climb: 3 }],
  ['dars-card',     '/darslar',   ':text("11–20-darslar")', { climb: 3 }],
  ['dars-free',     '/darslar',   ':text("1–10-darslar")', { climb: 3 }],
  ['age-chips',     '/darslar',   ':text("Barcha yoshlar")', { climb: 1 }],
  ['premium-free',  '/premium',   ':text("Bepul asosiy ta\'lim")', { climb: 2 }],
];

const run = async () => {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    locale: 'uz-UZ',
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const page = await ctx.newPage();
  const manifest = [];
  let current = null;

  for (const [name, route, sel, opts = {}] of TARGETS) {
    try {
      if (current !== route) {
        await page.goto(SITE + route, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await page.evaluate(() => document.fonts?.ready).catch(() => {});
        await page.addStyleTag({
          content: `*{animation:none!important;transition:none!important}`,
        }).catch(() => {});
        await page.waitForTimeout(900);
        current = route;
      }

      let loc = page.locator(sel).first();
      await loc.waitFor({ state: 'attached', timeout: 8000 });

      // climb to the nearest card-ish ancestor so we grab the whole component
      const climb = opts.card ? 0 : (opts.climb || 0);
      if (climb) {
        loc = loc.locator(
          Array.from({ length: climb }, () => 'xpath=..').join('/') === '' ? 'xpath=.' : 'xpath=' + '../'.repeat(climb - 1) + '..'
        );
      }
      if (opts.card) {
        const h = await loc.elementHandle();
        const cardHandle = await page.evaluateHandle((el) => {
          let n = el;
          for (let i = 0; i < 6 && n?.parentElement; i++) {
            const s = getComputedStyle(n);
            if (parseFloat(s.borderRadius) >= 12 && n.getBoundingClientRect().height > 70) return n;
            n = n.parentElement;
          }
          return el;
        }, h);
        loc = cardHandle.asElement();
      }

      await loc.scrollIntoViewIfNeeded({ timeout: 8000 }).catch(() => {});
      await page.waitForTimeout(450);
      const box = await loc.boundingBox();
      if (!box || box.width < 8 || box.height < 8) throw new Error('empty box');

      const file = path.join(OUT, `${name}.png`);
      await loc.screenshot({ path: file, timeout: 15000 });
      manifest.push({ name, route, w: Math.round(box.width * 3), h: Math.round(box.height * 3), css: box });
      console.log('ok  ', name.padEnd(14), `${Math.round(box.width)}x${Math.round(box.height)}css`);
    } catch (e) {
      console.log('FAIL', name.padEnd(14), e.message.split('\n')[0].slice(0, 70));
    }
  }

  await browser.close();

  // real logo files straight from the repo's public dir
  for (const f of ['logo.png', 'logo-white.png', 'logo-icon.png', 'logo-icon-white.png']) {
    await copyFile(path.resolve('../client/public/' + f), path.join(OUT, f)).catch(() => {});
  }
  await writeFile(path.join(OUT, 'ui-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('\n' + manifest.length + ' elements ->', OUT);
};

run();
