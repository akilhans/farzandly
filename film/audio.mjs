// Original score + SFX, synthesised in code. 120 BPM, 20s.
// Every hit sits on the measured beat grid, which is written to beats.json.
// node audio.mjs  ->  ../assets/film/score.wav + ../assets/film/beats.json
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SR = 48000, DUR = 20, BPM = 120, B = 60 / BPM;   // 0.5s per beat
const N = SR * DUR;
const L = new Float32Array(N), R = new Float32Array(N);

const rnd = (() => { let a = 0x9E3779B9; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296 * 2 - 1; }; })();

const add = (i, l, r) => { if (i >= 0 && i < N) { L[i] += l; R[i] += r; } };
const clampPan = p => Math.max(-1, Math.min(1, p));

/* ---------- voices ---------- */
function kick(at, gain = 1) {
  const d = 0.30, n = (d * SR) | 0, s = (at * SR) | 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR, e = Math.exp(-t * 26);
    const f = 48 + 90 * Math.exp(-t * 44);
    const v = Math.sin(2 * Math.PI * f * t) * e * gain;
    const click = Math.exp(-t * 500) * 0.35 * gain * rnd();
    add(s + i, v + click, v + click);
  }
}
function sub(at, dur, freq, gain = 0.5) {
  const n = (dur * SR) | 0, s = (at * SR) | 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const e = Math.min(1, t / 0.02) * Math.exp(-t * 1.6);
    const v = (Math.sin(2 * Math.PI * freq * t) * 0.8 + Math.sin(4 * Math.PI * freq * t) * 0.18) * e * gain;
    add(s + i, v, v);
  }
}
function snare(at, gain = 0.55) {
  const d = 0.22, n = (d * SR) | 0, s = (at * SR) | 0;
  let lp = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR, e = Math.exp(-t * 22);
    const nz = rnd();
    lp += (nz - lp) * 0.55;                       // band-ish
    const tone = Math.sin(2 * Math.PI * 190 * t) * 0.3 * Math.exp(-t * 34);
    const v = ((nz - lp) * 0.9 + tone) * e * gain;
    add(s + i, v * 0.95, v);
  }
}
function hat(at, gain = 0.20, d = 0.045) {
  const n = (d * SR) | 0, s = (at * SR) | 0;
  let hp = 0, prev = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR, e = Math.exp(-t * 90);
    const nz = rnd();
    hp = 0.82 * (hp + nz - prev); prev = nz;
    const v = hp * e * gain;
    add(s + i, v * 0.8, v);
  }
}
function pluck(at, dur, freq, gain = 0.28, pan = 0) {
  const n = (dur * SR) | 0, s = (at * SR) | 0;
  let lp = 0;
  const pl = Math.cos((clampPan(pan) + 1) * Math.PI / 4), pr = Math.sin((clampPan(pan) + 1) * Math.PI / 4);
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const e = Math.min(1, t / 0.004) * Math.exp(-t * 7.5);
    // saw-ish then lowpassed -> soft mallet
    const ph = (freq * t) % 1;
    const raw = (ph * 2 - 1) * 0.5 + Math.sin(2 * Math.PI * freq * t) * 0.5;
    lp += (raw - lp) * 0.22;
    const v = lp * e * gain;
    add(s + i, v * pl, v * pr);
  }
}
function pad(at, dur, freqs, gain = 0.10) {
  const n = (dur * SR) | 0, s = (at * SR) | 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const e = Math.min(1, t / 0.35) * Math.min(1, (dur - t) / 0.4);
    let v = 0;
    for (let k = 0; k < freqs.length; k++) {
      v += Math.sin(2 * Math.PI * freqs[k] * t + k) * (1 / freqs.length);
      v += Math.sin(2 * Math.PI * freqs[k] * 1.003 * t) * (0.3 / freqs.length); // detune
    }
    v *= e * gain;
    add(s + i, v, v * 0.96);
  }
}
/* UI click — the real "tap" sound of a button press */
function click(at, gain = 0.5) {
  const d = 0.055, n = (d * SR) | 0, s = (at * SR) | 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR, e = Math.exp(-t * 150);
    const v = (Math.sin(2 * Math.PI * 2100 * t) * 0.5 + Math.sin(2 * Math.PI * 3400 * t) * 0.3 + rnd() * 0.25) * e * gain;
    add(s + i, v, v);
  }
}
/* whoosh that LANDS on the beat */
function whoosh(landAt, dur = 0.38, gain = 0.30) {
  const n = (dur * SR) | 0, s = ((landAt - dur) * SR) | 0;
  let lp = 0;
  for (let i = 0; i < n; i++) {
    const p = i / n, t = i / SR;
    const e = Math.pow(p, 2.2) * (1 - Math.pow(p, 8));
    const nz = rnd();
    const k = 0.04 + 0.5 * p;                    // filter opens as it arrives
    lp += (nz - lp) * k;
    const v = lp * e * gain;
    const pan = (p - 0.5) * 1.2;
    add(s + i, v * (1 - Math.max(0, pan)), v * (1 + Math.min(0, pan)));
  }
}
function riser(from, to, gain = 0.22) {
  const n = ((to - from) * SR) | 0, s = (from * SR) | 0;
  let lp = 0;
  for (let i = 0; i < n; i++) {
    const p = i / n, t = i / SR;
    const nz = rnd();
    lp += (nz - lp) * (0.02 + 0.35 * p * p);
    const tone = Math.sin(2 * Math.PI * (220 + 700 * p * p) * t) * 0.25;
    const v = (lp + tone) * Math.pow(p, 1.6) * gain;
    add(s + i, v, v);
  }
}
function impact(at, gain = 0.9) {
  kick(at, gain * 1.1);
  const d = 1.4, n = (d * SR) | 0, s = (at * SR) | 0;
  let lp = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR, e = Math.exp(-t * 3.2);
    const nz = rnd(); lp += (nz - lp) * 0.30;
    const v = lp * e * gain * 0.32;
    add(s + i, v, v * 0.94);
  }
}

/* ---------- note table ---------- */
const F = { A2:110.00, C3:130.81, E3:164.81, F2:87.31, G2:98.00,
            A3:220.00, C4:261.63, D4:293.66, E4:329.63, F4:349.23, G4:392.00, A4:440.00, C5:523.25, E5:659.25, G5:783.99 };

/* chord bed: Am -> F -> C -> G -> F -> C  (warm, resolving) */
const CHORDS = [
  [0.00, 4.00, [F.A3, F.C4, F.E4], F.A2],
  [4.00, 8.00, [F.F4, F.A3, F.C4], F.F2],
  [8.00, 12.00,[F.C4, F.E4, F.G4], F.C3],
  [12.00,14.50,[F.D4, F.G4, F.A3], F.G2],
  [14.50,17.50,[F.G4, F.D4, F.A3], F.G2],
  [17.50,20.00,[F.C4, F.E4, F.G4], F.C3],
];

/* ---------- the arrangement ---------- */
const events = [];
const log = (t, what) => events.push({ t: +t.toFixed(3), beat: +(t / B).toFixed(2), what });

// pads + bass
for (const [a, b, notes, bass] of CHORDS) {
  pad(a, b - a, notes, a < 3.5 ? 0.055 : 0.085);
  for (let t = a; t < b - 0.01; t += B * 2) { sub(t, Math.min(B * 2, b - t), bass, a < 3.5 ? 0.22 : 0.42); log(t, 'bass'); }
}

// HOOK 0.0-3.5 — one hit per kinetic word, sparse and dry
for (const t of [0.0, 0.5, 1.0, 1.5]) { kick(t, 1.0); log(t, 'hook-word'); }
kick(2.0, 0.85); log(2.0, 'hook-stack');
snare(2.0, 0.42);
kick(2.5, 0.7); log(2.5, 'hook-NEGA');
hat(2.75, 0.14); hat(3.0, 0.16); hat(3.25, 0.18);
riser(2.40, 3.50, 0.24); log(2.40, 'riser');
whoosh(3.50, 0.40, 0.34); log(3.50, 'whoosh->product');

// MAIN GROOVE 3.5 -> 17.25
for (let t = 3.5; t < 17.50 - 0.001; t += B) {
  const beatInBar = Math.round((t - 3.5) / B) % 4;
  const quiet = (t >= 14.5 && t < 15.0);          // let the number land
  kick(t, quiet ? 0.0 : (beatInBar === 0 ? 1.0 : 0.82));
  if (beatInBar === 1 || beatInBar === 3) snare(t, quiet ? 0 : 0.5);
  hat(t + B / 2, 0.17);
  if (!quiet) hat(t + B / 4, 0.09), hat(t + 3 * B / 4, 0.09);
}

// assembly — a pluck per UI piece landing
const ASSEMBLY = [[3.50, F.C5], [3.75, F.E5], [4.00, F.G4], [4.25, F.A4], [4.50, F.C5], [4.75, F.E5]];
for (const [t, f] of ASSEMBLY) { pluck(t, 0.9, f, 0.30, (t % 1) - 0.5); log(t, 'ui-piece'); }

// feature motif — pentatonic eighths, one phrase per feature
const MOTIF = [F.A4, F.C5, F.E5, F.G5];
for (const base of [7.0, 9.5, 12.0]) {
  whoosh(base, 0.36, 0.28); log(base, 'whoosh->feature');
  for (let i = 0; i < 6; i++) {
    const t = base + i * B * 0.5;
    pluck(t, 0.55, MOTIF[i % MOTIF.length] * (i > 3 ? 0.5 : 1), 0.22, i % 2 ? 0.35 : -0.35);
  }
}

// the three real UI clicks + the CTA press
for (const [t, w] of [[8.0, 'click-age'], [10.5, 'click-lesson'], [12.5, 'click-tab'], [18.5, 'click-cta']]) {
  click(t, 0.55); log(t, w);
}
// +10 XP sparkle after the lesson click
pluck(10.62, 0.5, F.E5, 0.20, 0.3); pluck(10.75, 0.6, F.G5, 0.20, -0.3);

// PROOF 14.5 — the drop
whoosh(14.50, 0.42, 0.40); impact(14.50, 0.95); log(14.50, 'impact-69');
sub(14.50, 1.6, F.G2, 0.55);
pluck(15.00, 0.8, F.D4, 0.26, 0); log(15.00, 'ta-dars');
pluck(15.50, 0.9, F.G4, 0.26, -0.2); log(15.50, 'free-strip');
pluck(16.00, 0.9, F.A4, 0.24, 0.2); log(16.00, 'kicker');
pluck(16.50, 1.0, F.C5, 0.24, 0); log(16.50, 'counts');
pluck(17.00, 0.9, F.E5, 0.20, -0.2); log(17.00, 'proof-hold');

// LOCKUP 17.50
whoosh(17.50, 0.40, 0.34); impact(17.50, 0.70); log(17.50, 'lockup');
pad(17.50, 2.50, [F.C4, F.E4, F.G4, F.C5], 0.13);
pluck(17.50, 1.4, F.C5, 0.30, 0);
pluck(17.75, 1.2, F.E5, 0.26, -0.25); log(17.75, 'cta-in');
for (let t = 17.50; t < 19.0; t += B) { kick(t, 0.80); hat(t + B / 2, 0.15); }
snare(18.00, 0.45); snare(18.50, 0.45); snare(19.00, 0.45);
impact(19.00, 0.85); log(19.00, 'end-plate');
sub(19.00, 1.0, F.C3, 0.5);
pluck(19.00, 1.6, F.G5, 0.26, 0.2);
pluck(19.25, 1.4, F.C5, 0.22, -0.2);

/* ---------- master: gentle bus compression + soft clip + tail fade ---------- */
let env = 0;
for (let i = 0; i < N; i++) {
  const m = Math.max(Math.abs(L[i]), Math.abs(R[i]));
  env += (m - env) * (m > env ? 0.010 : 0.0009);
  const g = env > 0.62 ? 0.62 / env : 1;
  L[i] *= g; R[i] *= g;
  L[i] = Math.tanh(L[i] * 1.18);
  R[i] = Math.tanh(R[i] * 1.18);
  const tail = (N - i) / SR;
  if (tail < 0.18) { const f = tail / 0.18; L[i] *= f; R[i] *= f; }
  if (i < 240) { const f = i / 240; L[i] *= f; R[i] *= f; }
}

/* ---------- write 16-bit stereo WAV ---------- */
const buf = Buffer.alloc(44 + N * 4);
buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVE', 8);
buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20);
buf.writeUInt16LE(2, 22); buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28);
buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34);
buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) {
  buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(L[i] * 32767))), 44 + i * 4);
  buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(R[i] * 32767))), 46 + i * 4);
}

const OUT = path.resolve('../assets/film');
await mkdir(OUT, { recursive: true });
await writeFile(path.join(OUT, 'score.wav'), buf);

const grid = [];
for (let i = 0; i * B < DUR; i++) grid.push(+(i * B).toFixed(3));
await writeFile(path.join(OUT, 'beats.json'), JSON.stringify({
  bpm: BPM, beat: B, bars: DUR / (B * 4), duration: DUR,
  grid, events: events.sort((a, b) => a.t - b.t),
}, null, 2));

let peak = 0, rms = 0;
for (let i = 0; i < N; i++) { peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i])); rms += L[i] * L[i] + R[i] * R[i]; }
console.log('score.wav  peak', peak.toFixed(3), ' rms', Math.sqrt(rms / (N * 2)).toFixed(3), ' events', events.length);
