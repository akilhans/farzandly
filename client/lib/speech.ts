// High-quality Uzbek Speech Audio Manager
// Plays studio-grade pure Uzbek audio assets or dynamic Gemini AI TTS.
// Never uses browser robot synthesis because browsers do not support pure Uzbek.

const clientAudioCache = new Map<string, string>();
let activeAudio: HTMLAudioElement | null = null;

export interface SpeechOptions {
  audioUrl?: string; // Direct static audio asset (e.g. /audio/kids/easy-mushuk-sut-uz.wav)
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
  muted?: boolean;
}

/**
 * Stop any currently playing audio immediately
 */
export function stopSpeech(): void {
  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    } catch {}
    activeAudio = null;
  }
}

/**
 * Speak text in natural, pure Uzbek voice.
 * If audioUrl is provided, plays the static audio file directly (instant, 0 latency).
 * Otherwise queries the Gemini AI TTS server endpoint.
 * Browser speechSynthesis fallback is explicitly omitted to prevent robotic foreign accents.
 */
export async function speakUzbek(text: string, options: SpeechOptions = {}): Promise<void> {
  if (options.muted) return;
  const clean = text?.trim() || '';

  stopSpeech();

  try {
    // 1. Direct static audio asset or cached URL
    let finalUrl = options.audioUrl || clientAudioCache.get(clean);

    if (!finalUrl && clean) {
      const res = await fetch(`/api/tts?text=${encodeURIComponent(clean)}`);
      if (res.ok && res.headers.get('content-type')?.includes('audio')) {
        const blob = await res.blob();
        finalUrl = URL.createObjectURL(blob);
        clientAudioCache.set(clean, finalUrl);
      }
    }

    if (!finalUrl) {
      console.warn('[speech] Audio not available for:', clean);
      options.onError?.(new Error('Audio unavailable'));
      return;
    }

    const audio = new Audio(finalUrl);
    activeAudio = audio;

    audio.onplay = () => {
      options.onStart?.();
    };
    audio.onended = () => {
      if (activeAudio === audio) activeAudio = null;
      options.onEnd?.();
    };
    audio.onerror = (e) => {
      if (activeAudio === audio) activeAudio = null;
      options.onError?.(e);
    };

    await audio.play();
  } catch (error) {
    if (activeAudio) activeAudio = null;
    options.onError?.(error);
  }
}
