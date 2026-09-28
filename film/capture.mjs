// Asset capture: real screenshots + real brand data from farzandly.uz
// Usage: node capture.mjs
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('../assets/film');
const SITE = 'https://farzandly.uz';

const ROUTES = [
  ['home', '/'],
  ['darslar', '/darslar'],
  ['ertaklar', '/ertaklar'],
  ['maqolalar', '/maqolalar'],
  ['jazosiz', '/jazosiz-tarbiya'],
  ['premium', '/premium'],
  ['kirish', '/kirish'],
  ['sherlar', '/sherlar'],
  ['maqollar', '/maqollar'],
  ['salomatlik', '/salomatlik'],
];

const probe = () => ({
  url: location.href,
  title: document.title,
  bodyFont: getComputedStyle(document.body).fontFamily,
  bodyBg: getComputedStyle(document.body).backgroundColor,
  h1: [...document.querySelectorAll('h1')].map((n) => ({
    text: n.innerText.trim().slice(0, 160),
    font: getComputedStyle(n).fontFamily,
    size: getComputedStyle(n).fontSize,
    weight: getComputedStyle(n).fontWeight,
    color: getComputedStyle(n).color,
  })),
  h2: [...document.querySelectorAll('h2')].map((n) => n.innerText.trim().slice(0, 120)).slice(0, 14),
  buttons: [...document.querySelectorAll('a,button')]
    .map((n) => ({
      text: n.innerText.trim().slice(0, 48),
      bg: getComputedStyle(n).backgroundColor,
      color: getComputedStyle(n).color,
      radius: getComputedStyle(n).borderRadius,
      borderBottom: getComputedStyle(n).borderBottomWidth + ' ' + getComputedStyle(n).borderBottomColor,
    }))
    .filter((b) => b.text && b.bg !== 'rgba(0, 0, 0, 0)')
    .slice(0, 24),
  imgs: [...document.querySelectorAll('img')]
    .map((n) => ({ src: n.currentSrc || n.src, alt: n.alt, w: n.naturalWidth, h: n.naturalHeight }))
    .filter((i) => i.src)
    .slice(0, 30),
  // any standalone numbers on the page - candidates for the proof metric
  numbers: [...new Set(
    (document.body.innerText.match(/[^\n]{0,44}?\b\d[\d\s.,]*\+?\s?(?:ta|dona|nafar|kun|soat|daqiqa|%|mln|ming)?\b[^\n]{0,44}/gi) || [])
      .map((s) => s.trim())
  )].slice(0, 60),
  text: document.body.innerText.replace(/\n{3,}/g, '\n\n').slice(0, 4000),
});

const run = async () => {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const data = { site: SITE, capturedAt: new Date().toISOString(), pages: {} };

  for (const [profile, vp, dsf] of [
    ['phone', { width: 390, height: 844 }, 3],
    ['desktop', { width: 1440, height: 900 }, 2],
  ]) {
    const ctx = await browser.newContext({
      viewport: vp,
      deviceScaleFactor: dsf,
      isMobile: profile === 'phone',
      hasTouch: profile === 'phone',
      locale: 'uz-UZ',
      userAgent:
        profile === 'phone'
          ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
          : undefined,
    });
    const page = await ctx.newPage();

    for (const [name, route] of ROUTES) {
      const key = `${profile}-${name}`;
      try {
        const resp = await page.goto(SITE + route, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        // settle webfonts + any entrance animations
        await page.evaluate(() => document.fonts?.ready).catch(() => {});
        await page.waitForTimeout(1200);
        // kill anything sticky/overlay that would ruin a clean crop
        await page.addStyleTag({
          content: `*{animation-play-state:paused!important;transition:none!important}
                    [class*="cookie" i],[class*="consent" i]{display:none!important}`,
        }).catch(() => {});

        const info = await page.evaluate(probe);
        info.status = resp?.status();
        if (profile === 'phone') data.pages[name] = info;
        else data.pages[name] = { ...(data.pages[name] || {}), desktop: { h1: info.h1, status: info.status } };

        await page.screenshot({ path: path.join(OUT, `${key}-top.png`) });
        await page.screenshot({ path: path.join(OUT, `${key}-full.png`), fullPage: true });

        // a few scroll stations for mid-page UI moments
        if (name === 'home' || name === 'darslar' || name === 'ertaklar') {
          for (const f of [0.9, 1.8, 2.7]) {
            await page.evaluate((y) => window.scrollTo(0, window.innerHeight * y), f);
            await page.waitForTimeout(700);
            await page.screenshot({ path: path.join(OUT, `${key}-scroll${f}.png`) });
          }
          await page.evaluate(() => window.scrollTo(0, 0));
        }
        console.log('ok  ', key, info.status, '|', info.h1[0]?.text?.slice(0, 60) ?? '');
      } catch (e) {
        console.log('FAIL', key, e.message.split('\n')[0]);
      }
    }
    await ctx.close();
  }

  await browser.close();
  await writeFile(path.join(OUT, 'site-data.json'), JSON.stringify(data, null, 2));
  console.log('\nwrote', path.join(OUT, 'site-data.json'));
};

run();
