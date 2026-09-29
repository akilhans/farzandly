// Score + SFX stems for one reel, computed from the SAME timing module as the picture.
//   node scripts/audio.mjs content/gapga-quloq.json
//   -> public/generated/<id>/music.wav   (skipped when spec.music.src is supplied)
//   -> public/generated/<id>/sfx.wav
//   -> public/generated/<id>/beats.json  (grid + every hit, in seconds)
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseReel } from '../src/spec.ts';
import { layout, FPS } from '../src/timing.ts';
import { Bus } from './synth.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export async function buildAudio(specFile) {
  const spec = parseReel(JSON.parse(await readFile(specFile, 'utf8')));
  const L = layout(spec);
  const B = L.BF / FPS; // seconds per beat, frame-exact
  const DUR = L.totalFrames / FPS;
  const out = path.join(ROOT, 'public', 'generated', spec.id);
  await mkdir(out, { recursive: true });
  const seed = [...spec.id].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);

  /* ---------------- music bed ---------------- */
  if (!spec.music.src) {
    const m = new Bus(DUR, seed);
    const N = { A2: 110, C3: 130.81, F2: 87.31, G2: 98, A3: 220, B3: 246.94, C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99 };
    // warm I–V–vi–IV in C, one chord per bar of 4 beats
    const PROG = [
      { pad: [N.C4, N.E4, N.G4], bass: N.C3, arp: [N.C5, N.E5, N.G4, N.E5] },
      { pad: [N.B3, N.D4, N.G4], bass: N.G2, arp: [N.D5, N.G4, N.B3 * 2, N.G4] },
      { pad: [N.A3, N.C4, N.E4], bass: N.A2, arp: [N.C5, N.E5, N.A4, N.E5] },
      { pad: [N.A3, N.C4, N.F4], bass: N.F2, arp: [N.C5, N.F4 * 2, N.A4, N.F4 * 2] },
    ];
    const hookEnd = L.scenes[1].grid / FPS;
    const ctaStart = L.scenes.at(-1).grid / FPS;

    // HOOK: held vi chord, low and dry — the kinetic words and thuds carry it
    m.pad(0, hookEnd + 0.2, [N.A3, N.C4, N.E4], 0.05);
    m.sub(0, hookEnd, N.A2, 0.18);
    for (let t = hookEnd - 2 * B; t < hookEnd - 0.01; t += B / 2) m.hat(t, 0.06 + 0.08 * ((t - (hookEnd - 2 * B)) / (2 * B)));

    // BODY: bars start on the first scene's grid, so every downbeat meets a cut
    let bar = 0;
    for (let t0 = hookEnd; t0 < ctaStart - 0.01; t0 += 4 * B, bar++) {
      const c = PROG[bar % PROG.length];
      const barEnd = Math.min(t0 + 4 * B, ctaStart);
      m.pad(t0, barEnd - t0 + 0.1, c.pad, 0.065);
      m.sub(t0, 2 * B, c.bass, 0.34);
      if (t0 + 2 * B < barEnd) m.sub(t0 + 2 * B, 2 * B, c.bass, 0.26);
      for (let k = 0; k < 4; k++) {
        const t = t0 + k * B;
        if (t >= barEnd - 0.01) break;
        if (k === 0 || k === 2) m.kick(t, k === 0 ? 0.8 : 0.62);
        if (k === 1 || k === 3) m.snare(t, 0.26);
        m.hat(t + B / 2, 0.1);
        m.pluck(t, 0.5, c.arp[k], 0.1, k % 2 ? 0.3 : -0.3);
        m.pluck(t + B / 2, 0.4, c.arp[(k + 2) % 4], 0.06, k % 2 ? -0.3 : 0.3);
      }
    }

    // CTA: land on the tonic and let it breathe
    const ctaLen = DUR - ctaStart;
    m.pad(ctaStart, ctaLen, [N.C4, N.E4, N.G4, N.C5], 0.09);
    m.sub(ctaStart, ctaLen, N.C3, 0.3);
    for (let t = ctaStart; t < DUR - 2 * B; t += B) {
      const k = Math.round((t - ctaStart) / B);
      if (k % 2 === 0) m.kick(t, 0.6);
      m.hat(t + B / 2, 0.08);
      if (k < 6) m.pluck(t, 0.8, [N.C5, N.E5, N.G5, N.E5, N.D5, N.C5][k], 0.1, 0);
    }
    await m.master(1.1, 0.55).write(path.join(out, 'music.wav'));
  }

  /* ---------------- SFX stem ---------------- */
  const s = new Bus(DUR, seed + 1);
  for (const e of L.events) {
    const t = e.frame / FPS;
    const g = e.gain ?? 1;
    switch (e.kind) {
      case 'whoosh': s.whoosh(t, 0.36, 0.3 * g); break;
      case 'thud': s.kick(t, 0.9 * g); s.sub(t, 0.35, 55, 0.3 * g); break;
      case 'pluck': s.pluck(t, 0.7, e.note ?? 659.25, 0.26 * g, 0); break;
      case 'click': s.click(t, 0.6 * g); break;
      case 'tick': s.tick(t, 0.18 * g); break;
      case 'impact': s.impact(t, 0.75 * g); break;
      case 'riser': s.riser(t, (e.len ?? 2 * L.BF) / FPS, 0.18 * g); break;
    }
  }
  await s.master(1.0, 0.7).write(path.join(out, 'sfx.wav'));

  const grid = Array.from({ length: L.totalBeats }, (_, i) => +(i * B).toFixed(4));
  await writeFile(
    path.join(out, 'beats.json'),
    JSON.stringify(
      {
        id: spec.id,
        bpm: +L.bpm.toFixed(3),
        beat: +B.toFixed(4),
        fps: FPS,
        duration: +DUR.toFixed(3),
        grid,
        scenes: L.scenes.map((p) => ({ type: p.scene.type, beat: p.startBeat, t: +(p.grid / FPS).toFixed(3) })),
        events: L.events.map((e) => ({ t: +(e.frame / FPS).toFixed(3), frame: e.frame, kind: e.kind })),
      },
      null,
      2
    )
  );
  console.log(`${spec.id}: ${DUR.toFixed(2)}s, ${L.totalBeats} beats @ ${L.bpm.toFixed(2)} bpm, ${L.events.length} sfx hits -> ${path.relative(ROOT, out)}`);
  return { spec, L, out };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const files = process.argv.slice(2);
  if (!files.length) {
    console.error('usage: node scripts/audio.mjs content/<reel>.json [...]');
    process.exit(1);
  }
  for (const f of files) await buildAudio(path.resolve(f));
}
