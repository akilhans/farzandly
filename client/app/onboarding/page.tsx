'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  ArrowRight,
  ArrowLeft,
  Check,
  Baby,
  Smile,
  Shield,
  BookOpen,
  Smartphone,
  Users,
  GraduationCap,
  Clock,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { api } from '@/lib/api';

const ageOptions = [
  { code: '0-2', label: '0–2 yosh', desc: 'Chaqaloqlik va xavfsiz mehrli bog‘lanish' },
  { code: '3-5', label: '3–5 yosh', desc: 'Injiqlik, qaysarlik va hissiyotlar bo‘roni' },
  { code: '6-9', label: '6–9 yosh', desc: 'Maktab, mustaqillik va mas’uliyat' },
  { code: '10-13', label: '10–13 yosh', desc: 'O‘tish davri va do‘stona muloqot' },
  { code: '14+', label: '14+ yosh', desc: 'O‘smirlik, kelajak va sirdoshlik' },
];

const topicOptions = [
  { id: 'Bola xulqi', label: 'Bola xulqi', icon: Smile, desc: 'Gapga kirmaslik, e’tiroz va to‘polon' },
  { id: 'Hissiyotlar', label: 'Hissiyotlar', icon: Smile, desc: 'Tantrumlar, qo‘rquv va g‘azab' },
  { id: 'Intizom', label: 'Intizom va chegaralar', icon: Shield, desc: 'Urmasdan va baqirmasdan tartib' },
  { id: 'Islomiy tarbiya', label: 'Islomiy tarbiya', icon: BookOpen, desc: 'Sunnat, go‘zal axloq va namoz' },
  { id: 'Telefon va texnologiya', label: 'Telefon va ekran', icon: Smartphone, desc: 'Gadjetlar va ekran vaqtini cheklash' },
  { id: 'Ta’lim', label: 'Ta’lim va qiziqish', icon: GraduationCap, desc: 'O‘qishga rag‘bat va uy vazifalari' },
  { id: 'Ota-ona va bola munosabati', label: 'Mehrli munosabat', icon: Users, desc: 'Aka-uka rashki va samimiylik' },
];

const commitmentOptions = [
  { minutes: 5, label: '5 daqiqa', badge: 'Oson boshlash', desc: 'Band ota-onalar uchun qulay ritm' },
  { minutes: 10, label: '10 daqiqa', badge: 'Tavsiya etiladi', desc: 'Har kuni 1 ta amaliy dars va mashq' },
  { minutes: 15, label: '15 daqiqa', badge: 'Jiddiy yondashuv', desc: 'Chuqur tushunish va tahlil' },
  { minutes: 20, label: '20+ daqiqa', badge: 'Maksimal natija', desc: 'Barcha qo‘shimcha materiallar bilan' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [childAge, setChildAge] = useState('3-5');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Bola xulqi', 'Hissiyotlar']);
  const [dailyTime, setDailyTime] = useState(10);
  const [parentName, setParentName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPath, setGeneratedPath] = useState<any>(null);

  const toggleTopic = (id: string) => {
    if (selectedTopics.includes(id)) {
      if (selectedTopics.length > 1) {
        setSelectedTopics(selectedTopics.filter((t) => t !== id));
      }
    } else {
      setSelectedTopics([...selectedTopics, id]);
    }
  };

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      // Generate personalized plan
      setStep(4);
      setIsGenerating(true);

      try {
        const res = await api.submitOnboarding({
          name: parentName || 'Ota-ona',
          childAgeGroup: childAge,
          selectedInterests: selectedTopics,
          dailyGoalMinutes: dailyTime,
        });

        // Store user in local storage for instant dashboard updates
        if (typeof window !== 'undefined' && res && res.user) {
          localStorage.setItem('farzandly_user', JSON.stringify(res.user));
        }

        setTimeout(() => {
          setIsGenerating(false);
          setGeneratedPath(res?.startingPath || {
            title: `${childAge} yoshli farzandingiz uchun boshlang‘ich yo‘l`,
            lessonSlugs: [
              'bolani-tushunishdan-boshlang',
              'chegaralarni-togri-qoyish',
              'jazodan-oldin-tushunish',
            ],
          });
        }, 1200);
      } catch {
        setIsGenerating(false);
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-xl bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 shadow-xl space-y-8">
        {/* Progress Bar & Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 uppercase">
            <span>Bosqich {step} / 4</span>
            <span>{step === 1 ? 'Farzand yoshi' : step === 2 ? 'Mavzu' : step === 3 ? 'Vaqt' : 'Reja'}</span>
          </div>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Farzand yoshi */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                Farzandingiz nechchi yoshda?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Darslar bolangizning aynan shu yoshdagi psixologiyasiga moslashtiriladi.
              </p>
            </div>

            <div className="space-y-2.5">
              {ageOptions.map((opt) => {
                const isSelected = childAge === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => setChildAge(opt.code)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm border-b-4'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-slate-800 text-sm sm:text-base">{opt.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Dolzarb mavzular */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                Hozir eng ko‘p qaysi mavzu kerak?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Bir yoki bir nechta yo‘nalishni belgilang.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {topicOptions.map((topic) => {
                const isSelected = selectedTopics.includes(topic.id);
                const Icon = topic.icon;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    className={`text-left p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 border-b-4'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                          isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{topic.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{topic.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Har kuni qancha vaqt ajrata olasiz? */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                Har kuni qancha vaqt ajrata olasiz?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Kichik, lekin uzluksiz qadamlar eng katta natijani beradi.
              </p>
            </div>

            <div className="space-y-2.5">
              {commitmentOptions.map((item) => {
                const isSelected = dailyTime === item.minutes;
                return (
                  <button
                    key={item.minutes}
                    type="button"
                    onClick={() => setDailyTime(item.minutes)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 border-b-4'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-slate-800 text-base">{item.label}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: GENERATED PLAN */}
        {step === 4 && (
          <div className="space-y-6">
            {isGenerating ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center animate-spin">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-800">
                  Siz uchun shaxsiy yo‘l tuzilmoqda...
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {childAge} yoshdagi bolaning o‘ziga xosligi va Islomiy qadriyatlar tahlil qilinmoqda.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Shaxsiy yo‘lingiz tayyor!</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                    {childAge} yoshli farzandingiz uchun boshlang‘ich yo‘l
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Bugun 1-darsdan boshlang va birinchi 10 XP ga ega bo‘ling!
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-5 space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-emerald-300 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-emerald-600 uppercase">1-Dars • 4 daqiqa</p>
                      <p className="font-bold text-slate-800 text-sm">Bolani tushunishdan boshlang</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">+10 XP</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">2-Dars • 5 daqiqa</p>
                      <p className="font-bold text-slate-700 text-sm">Chegaralarni to‘g‘ri qo‘yish</p>
                    </div>
                    <span className="text-xs font-bold text-slate-500">+10 XP</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">3-Dars • 6 daqiqa</p>
                      <p className="font-bold text-slate-700 text-sm">Jazodan oldin tushunish</p>
                    </div>
                    <span className="text-xs font-bold text-slate-500">+10 XP</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => router.push('/dars/bolani-tushunishdan-boshlang')}
                    className="w-full btn-primary text-base py-4 flex items-center justify-center gap-2"
                  >
                    <span>1-darsni boshlash</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-outline text-xs sm:text-sm px-4 py-2.5 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Orqaga</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="btn-primary text-xs sm:text-sm px-6 py-2.5 flex items-center gap-1.5"
            >
              <span>{step === 3 ? 'Rejani tuzish' : 'Davom etish'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
