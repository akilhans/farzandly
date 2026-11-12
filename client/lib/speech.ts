// High-quality Uzbek Speech Synthesis using Gemini AI Voice with Web Speech fallback

// In-memory client blob cache to make repeated plays instantaneous (0 network calls)
const clientAudioCache = new Map<string, string>();
let activeAudio: HTMLAudioElement | null = null;

export interface SpeechOptions {
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
  muted?: boolean;
}

/**
 * Stop any currently playing speech audio immediately
 */
export function stopSpeech(): void {
  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    } catch {}
    activeAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

/**
 * Speak text in natural, warm Uzbek voice.
 * Prioritizes Gemini AI Audio API, falls back gracefully to Web Speech API.
 */
export async function speakUzbek(text: string, options: SpeechOptions = {}): Promise<void> {
  if (options.muted) return;
  const clean = text.trim();
  if (!clean) return;

  stopSpeech();

  // 1. Try Gemini AI Voice via server API route
  try {
    let blobUrl = clientAudioCache.get(clean);

    if (!blobUrl) {
      const res = await fetch(`/api/tts?text=${encodeURIComponent(clean)}`);
      if (res.ok && res.headers.get('content-type')?.includes('audio')) {
        const blob = await res.blob();
        blobUrl = URL.createObjectURL(blob);
        clientAudioCache.set(clean, blobUrl);
      }
    }

    if (blobUrl) {
      const audio = new Audio(blobUrl);
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
      return;
    }
  } catch (error) {
    console.warn('[speech] High-fidelity TTS failed, falling back to Web Speech API', error);
  }

  // 2. Fallback: Browser Web Speech API
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'uz-UZ';
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      utterance.onstart = () => options.onStart?.();
      utterance.onend = () => options.onEnd?.();
      utterance.onerror = (e) => options.onError?.(e);

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      options.onError?.(e);
    }
  }
}
