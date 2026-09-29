// ITU-R BS.1770-4 / EBU R128 loudness in plain JS, plus a lookahead peak limiter.
// Remotion's bundled ffmpeg has no ebur128/alimiter, and ffmpeg's loudnorm was measured
// overshooting target and ceiling in this repo (see film/README.md), so we do it here.

const SR = 48000;

// K-weighting at 48 kHz (BS.1770-4, table 1 and 2)
const SHELF = { b: [1.53512485958697, -2.69169618940638, 1.19839281085285], a: [-1.69065929318241, 0.73248077421585] };
const HIPASS = { b: [1.0, -2.0, 1.0], a: [-1.99004745483398, 0.99007225036621] };

function biquad(x, { b, a }) {
  const y = new Float64Array(x.length);
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  for (let i = 0; i < x.length; i++) {
    const v = b[0] * x[i] + b[1] * x1 + b[2] * x2 - a[0] * y1 - a[1] * y2;
    x2 = x1; x1 = x[i]; y2 = y1; y1 = v; y[i] = v;
  }
  return y;
}

/** Integrated loudness (LUFS) of a stereo signal, with absolute and relative gating. */
export function integratedLufs(L, R) {
  const kL = biquad(biquad(L, SHELF), HIPASS);
  const kR = biquad(biquad(R, SHELF), HIPASS);
  const block = Math.round(0.4 * SR), step = Math.round(0.1 * SR);
  // prefix sums of squares make each 400 ms block O(1)
  const cum = new Float64Array(L.length + 1);
  for (let i = 0; i < L.length; i++) cum[i + 1] = cum[i] + kL[i] * kL[i] + kR[i] * kR[i];
  const zs = [];
  for (let s = 0; s + block <= L.length; s += step) zs.push((cum[s + block] - cum[s]) / block);
  const lk = (z) => -0.691 + 10 * Math.log10(z);
  const abs = zs.filter((z) => lk(z) > -70);
  if (!abs.length) return -Infinity;
  const rel = lk(abs.reduce((a, b) => a + b, 0) / abs.length) - 10;
  const gated = abs.filter((z) => lk(z) > rel);
  return lk(gated.reduce((a, b) => a + b, 0) / gated.length);
}

/** True-peak estimate (dBTP) via 4x windowed-sinc oversampling. */
export function truePeakDb(L, R) {
  const TAPS = 16, OS = 4;
  const kernel = [];
  for (let ph = 0; ph < OS; ph++) {
    const k = [];
    for (let t = -TAPS / 2 + 1; t <= TAPS / 2; t++) {
      const x = t - ph / OS;
      const sinc = x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x);
      const w = 0.5 + 0.5 * Math.cos((Math.PI * x) / (TAPS / 2));
      k.push(sinc * w);
    }
    kernel.push(k);
  }
  let peak = 0;
  for (const ch of [L, R]) {
    for (let i = TAPS; i < ch.length - TAPS; i++) {
      for (let ph = 0; ph < OS; ph++) {
        const k = kernel[ph];
        let v = 0;
        for (let t = 0; t < TAPS; t++) v += ch[i - TAPS / 2 + 1 + t] * k[t];
        const a = Math.abs(v);
        if (a > peak) peak = a;
      }
    }
  }
  return 20 * Math.log10(peak || 1e-9);
}

/** Lookahead brickwall limiter on sample peaks (instant-looking but click-free). */
export function limit(L, R, ceilingDb = -2.5, lookaheadMs = 2, releaseMs = 80) {
  const c = 10 ** (ceilingDb / 20), n = L.length, la = Math.round((lookaheadMs / 1000) * SR);
  const need = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const m = Math.max(Math.abs(L[i]), Math.abs(R[i]));
    need[i] = m > c ? c / m : 1;
  }
  // sliding minimum over the lookahead window
  const g = new Float32Array(n);
  const dq = [];
  for (let i = n - 1; i >= 0; i--) {
    while (dq.length && need[dq[dq.length - 1]] >= need[i]) dq.pop();
    dq.push(i);
    while (dq[0] > i + la) dq.shift();
    g[i] = need[dq[0]];
  }
  // attack: ramp down over the lookahead (backward), release: recover smoothly (forward)
  for (let i = n - 2; i >= 0; i--) g[i] = Math.min(g[i], g[i + 1] + (1 - g[i + 1]) / la);
  const rel = 1 - Math.exp(-1 / ((releaseMs / 1000) * SR));
  for (let i = 1; i < n; i++) g[i] = Math.min(g[i], g[i - 1] + (1 - g[i - 1]) * rel);
  const oL = new Float32Array(n), oR = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    oL[i] = L[i] * g[i];
    oR[i] = R[i] * g[i];
  }
  return [oL, oR];
}

/** Gain + limit to hit `target` LUFS exactly (iterates because limiting lowers loudness). */
export function normalise(L, R, target = -14, ceilingDb = -2.5) {
  let gainDb = target - integratedLufs(L, R);
  let out = [L, R], lufs = 0;
  for (let pass = 0; pass < 4; pass++) {
    const g = 10 ** (gainDb / 20);
    const gl = L.map((v) => v * g), gr = R.map((v) => v * g);
    out = limit(gl, gr, ceilingDb);
    lufs = integratedLufs(out[0], out[1]);
    if (Math.abs(lufs - target) < 0.05) break;
    gainDb += target - lufs;
  }
  return { L: out[0], R: out[1], lufs, gainDb };
}

/** Parse a PCM WAV (16/24-bit) into float channels. */
export function readWav(buf) {
  let p = 12, fmt = null, data = null;
  while (p + 8 <= buf.length) {
    const id = buf.toString('ascii', p, p + 4), size = buf.readUInt32LE(p + 4);
    if (id === 'fmt ') fmt = { ch: buf.readUInt16LE(p + 10), bits: buf.readUInt16LE(p + 22) };
    if (id === 'data') data = buf.subarray(p + 8, p + 8 + Math.min(size, buf.length - p - 8));
    p += 8 + size + (size % 2);
  }
  const bytes = fmt.bits / 8, frames = Math.floor(data.length / (bytes * fmt.ch));
  const L = new Float32Array(frames), R = new Float32Array(frames);
  const read = fmt.bits === 24 ? (o) => data.readIntLE(o, 3) / 8388608 : (o) => data.readInt16LE(o) / 32768;
  for (let i = 0; i < frames; i++) {
    const o = i * bytes * fmt.ch;
    L[i] = read(o);
    R[i] = fmt.ch > 1 ? read(o + bytes) : L[i];
  }
  return [L, R];
}

export function splitInterleaved(buf) {
  const f = new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
  const n = f.length / 2, L = new Float32Array(n), R = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    L[i] = f[2 * i];
    R[i] = f[2 * i + 1];
  }
  return [L, R];
}

export function interleave(L, R) {
  const out = new Float32Array(L.length * 2);
  for (let i = 0; i < L.length; i++) {
    out[2 * i] = L[i];
    out[2 * i + 1] = R[i];
  }
  return Buffer.from(out.buffer);
}

/** Offset (ms) between each scheduled hit and the onset actually heard near it. */
export function onsetOffsets(L, times, sr = SR) {
  return times.map((t) => {
    const c = Math.round(t * sr), win = sr / 1000, back = 20 * win;
    for (let i = c - 50 * win; i < c + 50 * win; i += win) {
      let a = 0, b = 0;
      for (let k = 0; k < win; k++) a += (L[i + k] || 0) ** 2;
      for (let k = -back; k < 0; k++) b += (L[i + k] || 0) ** 2;
      if (a / win > 6 * (b / back) + 1e-7) return (i - c) / win;
    }
    return null;
  });
}

/**
 * Where the SFX stem actually sits inside the delivered mix, per hit: the lag (ms) that
 * best aligns a 300 ms stem window with the mix. Robust to music transients near a hit,
 * which fool plain onset detection.
 */
export function stemLags(mix, stem, times, sr = SR, maxMs = 60) {
  const step = Math.round(sr / 2000); // 0.5 ms resolution
  const maxLag = Math.round((maxMs / 1000) * sr);
  return times.map((t) => {
    const a = Math.round((t - 0.1) * sr), b = Math.round((t + 0.2) * sr);
    let best = 0, bestScore = -Infinity;
    for (let lag = -maxLag; lag <= maxLag; lag += step) {
      let score = 0;
      for (let i = a; i < b; i += 2) score += (stem[i] || 0) * (mix[i + lag] || 0);
      if (score > bestScore) {
        bestScore = score;
        best = lag;
      }
    }
    return (best / sr) * 1000;
  });
}
