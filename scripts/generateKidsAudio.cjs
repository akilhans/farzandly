const fs = require('fs');
const path = require('path');

// Read API key from environment or client/.env.local
let apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_KEY;
if (!apiKey) {
  try {
    const envPath = path.join(__dirname, '../client/.env.local');
    if (fs.existsSync(envPath)) {
      const match = fs.readFileSync(envPath, 'utf8').match(/GEMINI_API_KEY=([^\r\n]+)/);
      if (match) apiKey = match[1].trim();
    }
  } catch {}
}

if (!apiKey) {
  console.error('Error: GEMINI_API_KEY not found in process.env or client/.env.local');
  process.exit(1);
}

const outDir = path.join(__dirname, '../client/public/audio/kids');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createWavHeader(pcmLength, sampleRate = 24000, numChannels = 1, bitsPerSample = 16) {
  const buffer = Buffer.alloc(44);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + pcmLength, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * numChannels * (bitsPerSample / 8), 28);
  buffer.writeUInt16LE(numChannels * (bitsPerSample / 8), 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(pcmLength, 40);
  return buffer;
}

const ITEMS = [
  { id: 'easy-mushuk-sut', uz: 'Mushuk sut ichyapti.', kr: 'Мушук сут ичяпти.' },
  { id: 'easy-bola-kitob', uz: 'Bola kitob o‘qiyapti.', kr: 'Бола китоб ўқияпти.' },
  { id: 'easy-qush-daraxt', uz: 'Qush daraxtda sayrayapti.', kr: 'Қуш дарахтда сайраяпти.' },
  { id: 'easy-qizaloq-olma', uz: 'Qizaloq olma yeyapti.', kr: 'Қизалоқ олма еяпти.' },
  { id: 'easy-kuchuk-top', uz: 'Kuchukcha to‘p o‘ynayapti.', kr: 'Кучукча тўп ўйнаяпти.' },
  { id: 'med-qizil-mashina', uz: 'Qizil mashina yo‘lda yuryapti.', kr: 'Қизил машина йўлда юряпти.' },
  { id: 'med-quyon-sabzi', uz: 'Oq quyon bog‘da sabzi yeyapti.', kr: 'Оқ қуён боғда сабзи еяпти.' },
  { id: 'med-ona-chaqaloq', uz: 'Mehribon ona chaqaloqni mehr bilan uxlatyapti.', kr: 'Меҳрибон она чақалоқни меҳр билан ухлатяпти.' },
  { id: 'med-asalari-gul', uz: 'Asalari chiroyli guldan shira yig‘moqda.', kr: 'Асалари чиройли гулдан шира йиғмоqda.' },
  { id: 'hard-kapalak-gul', uz: 'Ertalab rangdor kapalak gul ustiga ohista qo‘ndi.', kr: 'Эрталаб рангдор капалак гул устига оҳиста қўнди.' },
  { id: 'hard-ota-ogil-qush', uz: 'Ota va o‘g‘il birgalikda yog‘ochdan qush uyasi yasashdi.', kr: 'Ота ва ўғил биргаликда ёғочдан қуш уяси ясашди.' },
  { id: 'hard-qish-qorbobo', uz: 'Qish faslida quvnoq bolalar hovlida katta qorbobo yasamoqda.', kr: 'Қиш фаслида қувноқ болалар ҳовлида катта қорбобо ясамоқда.' },
  { id: 'hard-bobo-olma', uz: 'Bobo va nevara bog‘dan pishgan olmalarni savatga terishdi.', kr: 'Бобо ва невара боғдан пишган олмаларни саватга теришди.' },
];

const MODELS = ['gemini-3.8-flash-tts', 'gemini-3.1-flash-tts-preview'];

async function fetchOne(text, filename) {
  const filePath = path.join(outDir, filename);
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
    console.log(`[skip] Already exists: ${filename}`);
    return true;
  }

  for (const model of MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text }] }],
            generationConfig: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName: 'Puck',
                  },
                },
              },
            },
          }),
        }
      );

      if (res.status === 200) {
        const data = await res.json();
        const part = data.candidates?.[0]?.content?.parts?.[0];
        if (part?.inlineData?.data) {
          const rawBuf = Buffer.from(part.inlineData.data, 'base64');
          const isWav = rawBuf.length > 4 && rawBuf.toString('ascii', 0, 4) === 'RIFF';
          const finalWav = isWav ? rawBuf : Buffer.concat([createWavHeader(rawBuf.length, 24000, 1, 16), rawBuf]);
          fs.writeFileSync(filePath, finalWav);
          console.log(`[OK] Generated ${filename} via ${model} (${finalWav.length} bytes)`);
          return true;
        }
      } else {
        const err = await res.json().catch(() => ({}));
        console.warn(`[warn] ${model} returned ${res.status}:`, err.error?.message?.slice(0, 100));
      }
    } catch (err) {
      console.error(`[err] ${model}:`, err.message);
    }
  }
  return false;
}

async function main() {
  console.log(`Starting audio generation for ${ITEMS.length} scenarios (UZ + KR)...`);
  for (const item of ITEMS) {
    await fetchOne(item.uz, `${item.id}-uz.wav`);
    await new Promise((r) => setTimeout(r, 2000));
    await fetchOne(item.kr, `${item.id}-kr.wav`);
    await new Promise((r) => setTimeout(r, 2000));
  }
  console.log('Finished generating scenario audios!');
}

main();
