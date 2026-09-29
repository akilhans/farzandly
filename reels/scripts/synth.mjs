// Tiny deterministic synth, adapted from film/audio.mjs. All noise comes from a seeded
// mulberry32, so every render of a reel produces bit-identical audio.
import { writeFile } from 'node:fs/promises';

export const SR = 48000;

export function mulberry32(seed) {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296) * 2 - 1;
  };
}

export class Bus {
  constructor(seconds, seed = 1) {
    this.N = Math.ceil(seconds * SR);
    this.L = new Float32Array(this.N);
    this.R = new Float32Array(this.N);
    this.rnd = mulberry32(seed);
  }
  add(i, l, r) {
    if (i >= 0 && i < this.N) {
      this.L[i] += l;
      this.R[i] += r;
    }
  }

  kick(at, gain = 1) {
    const n = (0.3 * SR) | 0, s = (at * SR) | 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, e = Math.exp(-t * 26), f = 48 + 90 * Math.exp(-t * 44);
      const v = Math.sin(2 * Math.PI * f * t) * e * gain + Math.exp(-t * 500) * 0.3 * gain * this.rnd();
      this.add(s + i, v, v);
    }
  }
  sub(at, dur, freq, gain = 0.4) {
    const n = (dur * SR) | 0, s = (at * SR) | 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, e = Math.min(1, t / 0.02) * Math.exp(-t * 1.6) * Math.min(1, (dur - t) / 0.05);
      const v = (Math.sin(2 * Math.PI * freq * t) * 0.8 + Math.sin(4 * Math.PI * freq * t) * 0.15) * e * gain;
      this.add(s + i, v, v);
    }
  }
  snare(at, gain = 0.4) {
    const n = (0.22 * SR) | 0, s = (at * SR) | 0;
    let lp = 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, e = Math.exp(-t * 24), nz = this.rnd();
      lp += (nz - lp) * 0.55;
      const v = ((nz - lp) * 0.85 + Math.sin(2 * Math.PI * 190 * t) * 0.3 * Math.exp(-t * 34)) * e * gain;
      this.add(s + i, v * 0.95, v);
    }
  }
  hat(at, gain = 0.12, d = 0.045) {
    const n = (d * SR) | 0, s = (at * SR) | 0;
    let hp = 0, prev = 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, nz = this.rnd();
      hp = 0.82 * (hp + nz - prev);
      prev = nz;
      const v = hp * Math.exp(-t * 90) * gain;
      this.add(s + i, v * 0.8, v);
    }
  }
  pluck(at, dur, freq, gain = 0.2, pan = 0) {
    const n = (dur * SR) | 0, s = (at * SR) | 0;
    const pl = Math.cos(((pan + 1) * Math.PI) / 4), pr = Math.sin(((pan + 1) * Math.PI) / 4);
    let lp = 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, e = Math.min(1, t / 0.004) * Math.exp(-t * 7);
      const raw = (((freq * t) % 1) * 2 - 1) * 0.45 + Math.sin(2 * Math.PI * freq * t) * 0.55;
      lp += (raw - lp) * 0.2;
      const v = lp * e * gain;
      this.add(s + i, v * pl, v * pr);
    }
  }
  pad(at, dur, freqs, gain = 0.07) {
    const n = (dur * SR) | 0, s = (at * SR) | 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, e = Math.min(1, t / 0.4) * Math.min(1, (dur - t) / 0.45);
      let v = 0;
      for (let k = 0; k < freqs.length; k++) {
        v += Math.sin(2 * Math.PI * freqs[k] * t + k) / freqs.length;
        v += (Math.sin(2 * Math.PI * freqs[k] * 1.004 * t) * 0.35) / freqs.length;
      }
      v *= e * gain;
      this.add(s + i, v, v * 0.96);
    }
  }
  click(at, gain = 0.5) {
    const n = (0.055 * SR) | 0, s = (at * SR) | 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, e = Math.exp(-t * 150);
      const v = (Math.sin(2 * Math.PI * 2100 * t) * 0.5 + Math.sin(2 * Math.PI * 3400 * t) * 0.3 + this.rnd() * 0.2) * e * gain;
      this.add(s + i, v, v);
    }
  }
  tick(at, gain = 0.25) {
    const n = (0.03 * SR) | 0, s = (at * SR) | 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, v = Math.sin(2 * Math.PI * 1500 * t) * Math.exp(-t * 220) * gain;
      this.add(s + i, v, v);
    }
  }
  /** noise swell that peaks exactly on `landAt` */
  whoosh(landAt, dur = 0.38, gain = 0.28) {
    const n = (dur * SR) | 0, s = ((landAt - dur) * SR) | 0;
    let lp = 0;
    for (let i = 0; i < n; i++) {
      const p = i / n, e = Math.pow(p, 2.2) * (1 - Math.pow(p, 8)), nz = this.rnd();
      lp += (nz - lp) * (0.04 + 0.5 * p);
      const v = lp * e * gain, pan = (p - 0.5) * 1.2;
      this.add(s + i, v * (1 - Math.max(0, pan)), v * (1 + Math.min(0, pan)));
    }
  }
  /** rising noise + tone that ends on `to` */
  riser(to, len, gain = 0.2) {
    const n = (len * SR) | 0, s = ((to - len) * SR) | 0;
    let lp = 0;
    for (let i = 0; i < n; i++) {
      const p = i / n, t = i / SR, nz = this.rnd();
      lp += (nz - lp) * (0.02 + 0.35 * p * p);
      const v = (lp + Math.sin(2 * Math.PI * (220 + 700 * p * p) * t) * 0.22) * Math.pow(p, 1.6) * gain;
      this.add(s + i, v, v);
    }
  }
  impact(at, gain = 0.8) {
    this.kick(at, gain * 1.1);
    const n = (1.3 * SR) | 0, s = (at * SR) | 0;
    let lp = 0;
    for (let i = 0; i < n; i++) {
      const t = i / SR, nz = this.rnd();
      lp += (nz - lp) * 0.3;
      const v = lp * Math.exp(-t * 3.4) * gain * 0.3;
      this.add(s + i, v, v * 0.94);
    }
  }

  /** gentle bus compression + soft clip + edge fades */
  master(drive = 1.15, ceiling = 0.6) {
    let env = 0;
    for (let i = 0; i < this.N; i++) {
      const m = Math.max(Math.abs(this.L[i]), Math.abs(this.R[i]));
      env += (m - env) * (m > env ? 0.01 : 0.0009);
      const g = env > ceiling ? ceiling / env : 1;
      this.L[i] = Math.tanh(this.L[i] * g * drive);
      this.R[i] = Math.tanh(this.R[i] * g * drive);
      const tail = (this.N - i) / SR;
      if (tail < 0.15) {
        this.L[i] *= tail / 0.15;
        this.R[i] *= tail / 0.15;
      }
    }
    return this;
  }

  async write(file) {
    const { N, L, R } = this;
    const buf = Buffer.alloc(44 + N * 4);
    buf.write('RIFF', 0);
    buf.writeUInt32LE(36 + N * 4, 4);
    buf.write('WAVE', 8);
    buf.write('fmt ', 12);
    buf.writeUInt32LE(16, 16);
    buf.writeUInt16LE(1, 20);
    buf.writeUInt16LE(2, 22);
    buf.writeUInt32LE(SR, 24);
    buf.writeUInt32LE(SR * 4, 28);
    buf.writeUInt16LE(4, 32);
    buf.writeUInt16LE(16, 34);
    buf.write('data', 36);
    buf.writeUInt32LE(N * 4, 40);
    for (let i = 0; i < N; i++) {
      buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(L[i] * 32767))), 44 + i * 4);
      buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(R[i] * 32767))), 46 + i * 4);
    }
    await writeFile(file, buf);
  }
}
