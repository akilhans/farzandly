// Gamification System Utilities for Farzandly

export interface LevelInfo {
  level: string;
  levelIndex: number;
  prevLevelXp: number;
  nextLevelXp: number;
  progressPercent: number;
}

export function calculateLevel(xp: number, lang: string = 'uz'): LevelInfo {
  const safeXp = Math.max(0, xp || 0);

  const levelsUz = [
    { name: 'Boshlovchi ota-ona', minXp: 0, maxXp: 40 },
    { name: 'O‘rganuvchi ota-ona', minXp: 40, maxXp: 100 },
    { name: 'Ongli ota-ona', minXp: 100, maxXp: 200 },
    { name: 'Ongli tarbiyachi', minXp: 200, maxXp: 350 },
    { name: 'Mehrli murabbiy', minXp: 350, maxXp: 600 },
    { name: 'Tajribali ota-ona', minXp: 600, maxXp: 1000 },
    { name: 'Donishmand ota-ona', minXp: 1000, maxXp: 2000 },
  ];

  const levelsEn = [
    { name: 'Beginner Parent', minXp: 0, maxXp: 40 },
    { name: 'Learner Parent', minXp: 40, maxXp: 100 },
    { name: 'Conscious Parent', minXp: 100, maxXp: 200 },
    { name: 'Mindful Educator', minXp: 200, maxXp: 350 },
    { name: 'Caring Mentor', minXp: 350, maxXp: 600 },
    { name: 'Experienced Parent', minXp: 600, maxXp: 1000 },
    { name: 'Wise Grandmaster', minXp: 1000, maxXp: 2000 },
  ];

  const levelsRu = [
    { name: 'Начинающий родитель', minXp: 0, maxXp: 40 },
    { name: 'Обучающийся родитель', minXp: 40, maxXp: 100 },
    { name: 'Осознанный родитель', minXp: 100, maxXp: 200 },
    { name: 'Чуткий воспитатель', minXp: 200, maxXp: 350 },
    { name: 'Заботливый наставник', minXp: 350, maxXp: 600 },
    { name: 'Опытный родитель', minXp: 600, maxXp: 1000 },
    { name: 'Мудрый наставник', minXp: 1000, maxXp: 2000 },
  ];

  const levelSet = lang === 'en' ? levelsEn : lang === 'ru' ? levelsRu : levelsUz;

  let currentTier = levelSet[0];
  let tierIndex = 1;

  for (let i = 0; i < levelSet.length; i++) {
    if (safeXp >= levelSet[i].minXp) {
      currentTier = levelSet[i];
      tierIndex = i + 1;
    }
  }

  const range = currentTier.maxXp - currentTier.minXp;
  const progressPercent = Math.min(
    100,
    Math.max(0, Math.round(((safeXp - currentTier.minXp) / range) * 100))
  );

  return {
    level: currentTier.name,
    levelIndex: tierIndex,
    prevLevelXp: currentTier.minXp,
    nextLevelXp: currentTier.maxXp,
    progressPercent,
  };
}

/**
 * Evaluates which achievements the user qualifies for and returns newly unlocked ones
 */
export function checkAchievements(
  currentXp: number,
  currentStreak: number,
  completedLessons: string[],
  existingAchievements: string[] = []
): { unlocked: string[]; newlyUnlocked: string[] } {
  const currentSet = new Set(existingAchievements || []);
  const newlyUnlocked: string[] = [];

  const rules: Array<{ code: string; test: () => boolean }> = [
    { code: 'ilk-qadam', test: () => (completedLessons.length >= 1 || currentXp >= 15) },
    { code: 'uch-kunlik-streak', test: () => (currentStreak >= 3 || currentXp >= 45) },
    { code: 'haftalik-chempion', test: () => (currentStreak >= 7 || currentXp >= 105) },
    { code: 'ongli-ota-ona', test: () => (completedLessons.length >= 10 || currentXp >= 150) },
    {
      code: 'fitrat-kashfiyotchisi',
      test: () =>
        completedLessons.some((slug) =>
          slug.includes('fitrat') || slug.includes('darajasiga') || slug.includes('bolaning-darajasiga')
        ) || currentXp >= 180,
    },
    {
      code: 'sabr-va-adolat',
      test: () =>
        completedLessons.some((slug) =>
          slug.includes('gazab') || slug.includes('bola-ruhiyati') || slug.includes('nafs')
        ) || currentXp >= 220,
    },
    {
      code: 'kitobxon-murabbiy',
      test: () =>
        completedLessons.some((slug) =>
          slug.includes('kitob') || slug.includes('mutafakkir') || slug.includes('klip')
        ) || currentXp >= 260,
    },
    {
      code: 'talim-innovatori',
      test: () =>
        completedLessons.some((slug) =>
          slug.includes('talim') || slug.includes('sarmoya') || slug.includes('osmir-yosh')
        ) || currentXp >= 300,
    },
    { code: 'tarbiya-ustasi', test: () => (completedLessons.length >= 25 || currentXp >= 375) },
    { code: '14-kunlik-afsona', test: () => (currentStreak >= 14 || currentXp >= 500) },
    { code: 'mukammal-bilimdon', test: () => currentXp >= 650 },
    { code: 'donishmand-murabbiy', test: () => currentXp >= 1000 },
  ];

  for (const rule of rules) {
    if (rule.test()) {
      if (!currentSet.has(rule.code)) {
        newlyUnlocked.push(rule.code);
        currentSet.add(rule.code);
      }
    }
  }

  return {
    unlocked: Array.from(currentSet),
    newlyUnlocked,
  };
}

/**
 * Calculates new streak based on last active timestamp
 */
export function calculateStreak(lastActiveDateStr?: string | Date, currentStreak: number = 1): number {
  if (!lastActiveDateStr) return Math.max(1, currentStreak);

  const lastDate = new Date(lastActiveDateStr);
  const now = new Date();

  // Normalize to local midnight
  const lastMidnight = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate()).getTime();
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  const diffDays = Math.round((todayMidnight - lastMidnight) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    // Already studied today, keep current streak
    return Math.max(1, currentStreak);
  } else if (diffDays === 1) {
    // Studied yesterday, increment streak!
    return Math.max(1, currentStreak) + 1;
  } else {
    // Missed one or more days, reset to 1
    return 1;
  }
}

/**
 * Synthesizes delightful audio chime using Web Audio API (Zero external MP3 files needed!)
 */
export function playChimeSound(type: 'correct' | 'wrong' | 'victory' | 'bonus' = 'correct') {
  if (typeof window === 'undefined') return;
  const isSoundEnabled = localStorage.getItem('farzandly_sound_enabled');
  if (isSoundEnabled === 'false') return;

  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    if (type === 'correct') {
      // Pleasant dual chime (Marimba / Crystal style)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(587.33, now); // D5
      osc1.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

      osc2.frequency.setValueAtTime(880, now + 0.08); // A5
      osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.25); // D6

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.06);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } else if (type === 'victory') {
      // Victory fanfare sequence
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gain.gain.setValueAtTime(0.2, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.42);
      });
    } else if (type === 'bonus') {
      // Sparkling bonus chime
      const freqs = [783.99, 987.77, 1174.66, 1567.98];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + idx * 0.07);

        gain.gain.setValueAtTime(0.15, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.35);
      });
    } else if (type === 'wrong') {
      // Soft gentle wobble, not punishing
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.2);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch {
    // AudioContext blocked or not allowed by browser autoplay policy
  }
}

/**
 * Community Leaderboard demo participants (Haftalik ota-onalar ligasi)
 */
export function getWeeklyLeaderboard(currentUserXp: number, currentUserName?: string) {
  const baseList = [
    { rank: 1, name: 'Aziza Rahimova', username: 'aziza_mama', xp: Math.max(currentUserXp + 65, 240), streak: 8, badge: 'Mehrli murabbiy', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
    { rank: 2, name: 'Jasur Karimov', username: 'jasur_dada', xp: Math.max(currentUserXp + 25, 185), streak: 5, badge: 'Ongli ota-ona', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    { rank: 3, name: currentUserName || 'Siz (Ota-ona)', username: 'siz', xp: currentUserXp, streak: 4, badge: 'Faol ota-ona', isCurrentUser: true },
    { rank: 4, name: 'Dilnoza Sobirova', username: 'dilnoza_pedagog', xp: Math.max(15, currentUserXp - 30), streak: 3, badge: 'O‘rganuvchi', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
    { rank: 5, name: 'Nodira Karimova', username: 'nodira_k', xp: Math.max(10, currentUserXp - 50), streak: 2, badge: 'Boshlovchi' },
  ];

  // Re-sort and re-rank dynamically
  const sorted = [...baseList].sort((a, b) => b.xp - a.xp);
  return sorted.map((item, idx) => ({ ...item, rank: idx + 1 }));
}
