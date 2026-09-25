'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Info, CheckCircle2, ChevronRight, Activity, Stethoscope } from 'lucide-react';

interface OrganInfo {
  id: string;
  nameUz: string;
  nameEn: string;
  nameRu: string;
  descriptionUz: string;
  descriptionEn: string;
  descriptionRu: string;
  burpRoleUz?: string;
  burpRoleEn?: string;
  burpRoleRu?: string;
  badgeColor: string;
}

const ORGANS: OrganInfo[] = [
  {
    id: 'mouth',
    nameUz: 'Og‘iz va tishlar',
    nameEn: 'Mouth & Teeth',
    nameRu: 'Рот и зубы',
    descriptionUz: 'Tishlar ovqatni maydalaydi, so‘lak esa uni yumshatadi. Taom va ichimlik bilan birga havo ham yutiladi.',
    descriptionEn: 'Teeth chew food, saliva softens it. Air is swallowed along with food and drinks.',
    descriptionRu: 'Зубы измельчают пищу, слюна размягчает её. Вместе с едой и напитками также проглатывается воздух.',
    burpRoleUz: 'Havo va gazli ichimliklar pufakchalari dastlab og‘iz orqali qizilo‘ngachga o‘tadi.',
    burpRoleEn: 'Swallowed air and fizzy bubbles enter the body right here.',
    burpRoleRu: 'Заглатываемый воздух и пузырьки газировки попадают в организм через рот.',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
  },
  {
    id: 'esophagus',
    nameUz: 'Qizilo‘ngach (Esophagus)',
    nameEn: 'Esophagus',
    nameRu: 'Пищевод (Esophagus)',
    descriptionUz: 'Tomoqni oshqozon bilan bog‘lovchi 25 sm uzunlikdagi muskulli naycha. U to‘lqinsimon qisqarib ozuqani oshqozonga tushiradi.',
    descriptionEn: 'The 10-inch muscular tube connecting your throat to your stomach.',
    descriptionRu: 'Мышечная трубка длиной около 25 см, соединяющая горло с желудком. Волнообразно продвигает пищу вниз.',
    burpRoleUz: 'Ortiqcha gaz oshqozondan aynan qizilo‘ngach orqali yuqoriga chiqadi va kekirish hosil bo‘ladi!',
    burpRoleEn: 'Extra gas is forced back up through the esophagus to escape as a burp!',
    burpRoleRu: 'Лишний газ из желудка поднимается именно по пищеводу наружу в виде отрыжки!',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    id: 'stomach',
    nameUz: 'Oshqozon (Stomach)',
    nameEn: 'Stomach',
    nameRu: 'Желудок (Stomach)',
    descriptionUz: 'Baquvvat mushaklar va me’da shirasi yordamida taomni ezib, quyuq bo‘tqaga aylantiruvchi a’zo.',
    descriptionEn: 'A high-powered muscular blender that breaks food down with strong juices and acids.',
    descriptionRu: 'Мощный мышечный орган, расщепляющий пищу желудочным соком и превращающий её в однородную массу.',
    burpRoleUz: 'Kekirik aynan shu yerda to‘plangan azot, kislorod va karbonat angidrid gazlarining yuqoriga intilishidir.',
    burpRoleEn: 'Gas bubbles rise to the top of the stomach and wait to be released.',
    burpRoleRu: 'Пузырьки газов скапливаются в верхней части желудка и выходят наружу.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  {
    id: 'liver',
    nameUz: 'Jigar va o‘t pufagi',
    nameEn: 'Liver & Gallbladder',
    nameRu: 'Печень и желчный пузырь',
    descriptionUz: 'Ozuqadagi yog‘larni parchalash uchun o‘t suyuqligi ishlab chiqaradi va qonni toksinlardan tozalaydi.',
    descriptionEn: 'Produces bile to digest fats and filters nutrients from your blood.',
    descriptionRu: 'Вырабатывает желчь для расщепления жиров и очищает кровь от токсинов.',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  {
    id: 'small-intestine',
    nameUz: 'Ingichka ichak (Small Intestine)',
    nameEn: 'Small Intestine',
    nameRu: 'Тонкий кишечник',
    descriptionUz: 'Taxminan 6 metr uzunlikdagi o‘ralgan naycha. Barcha vitaminlar, oqsillar va minerallar qonga so‘riladi.',
    descriptionEn: 'A 20-foot coiled tube where almost all vitamins, proteins, and minerals enter your bloodstream.',
    descriptionRu: 'Свернутая трубка длиной около 6 метров, где почти все витамины и питательные вещества всасываются в кровь.',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    id: 'large-intestine',
    nameUz: 'Yo‘g‘on ichak (Large Intestine)',
    nameEn: 'Large Intestine',
    nameRu: 'Толстый кишечник',
    descriptionUz: 'Ortiqcha suvni so‘rib olib tanani suvsizlanishdan asraydi va hazm bo‘lmagan qismlarni chiqarishga tayyorlaydi.',
    descriptionEn: 'Absorbs remaining water to keep you hydrated and forms leftover waste.',
    descriptionRu: 'Всасывает оставшуюся воду для защиты от обезвоживания и формирует остатки для вывода из организма.',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  },
];

interface DigestiveDiagramProps {
  highlightOrgan?: string;
  lang?: 'uz' | 'en' | 'ru';
}

export default function DigestiveDiagram({ highlightOrgan = 'esophagus', lang = 'uz' }: DigestiveDiagramProps) {
  const [selectedOrgan, setSelectedOrgan] = useState<OrganInfo>(
    ORGANS.find((o) => o.id === highlightOrgan) || ORGANS[1]
  );

  const texts = {
    uz: {
      title: 'Hazm qilish a’zolari xaritasi',
      subtitle: 'Har bir a’zoga bosing va uning qanday ishlashini bilib oling',
      badge: 'Bolalar anatomiyasi: Tana a’zolari',
      routeLabel: 'Hazm yo‘li:',
      routePath: 'Og‘iz ➔ Qizilo‘ngach ➔ Oshqozon',
      selectPrompt: 'A’zoni tanlang:',
      burpRelated: '⭐ Kekirishga bevosita bog‘liq',
      organGeneral: 'Hazm qilish a’zosi',
      burpQuestion: 'Kekirishda qanday ishtirok etadi?',
    },
    en: {
      title: 'Digestive System Anatomy',
      subtitle: 'Click any organ below to see how it works and where burps travel',
      badge: 'Body Basics Anatomy',
      routeLabel: 'Digestive route:',
      routePath: 'Mouth ➔ Esophagus ➔ Stomach',
      selectPrompt: 'Select an organ:',
      burpRelated: '⭐ Directly involved in burping',
      organGeneral: 'Digestive organ',
      burpQuestion: 'Role in burping:',
    },
    ru: {
      title: 'Карта органов пищеварения',
      subtitle: 'Нажмите на любой орган ниже, чтобы узнать его функцию',
      badge: 'Детская анатомия: Органы тела',
      routeLabel: 'Путь пищи:',
      routePath: 'Рот ➔ Пищевод ➔ Желудок',
      selectPrompt: 'Выберите орган:',
      burpRelated: '⭐ Напрямую связан с отрыжкой',
      organGeneral: 'Орган пищеварения',
      burpQuestion: 'Какова его роль в отрыжке?',
    },
  }[lang];

  const organName =
    lang === 'uz' ? selectedOrgan.nameUz : lang === 'ru' ? selectedOrgan.nameRu : selectedOrgan.nameEn;
  const organDesc =
    lang === 'uz'
      ? selectedOrgan.descriptionUz
      : lang === 'ru'
      ? selectedOrgan.descriptionRu
      : selectedOrgan.descriptionEn;
  const burpRole =
    lang === 'uz'
      ? selectedOrgan.burpRoleUz
      : lang === 'ru'
      ? selectedOrgan.burpRoleRu
      : selectedOrgan.burpRoleEn;

  return (
    <div className="bg-white rounded-3xl border-2 border-emerald-100 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black">
              {texts.title}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              {texts.subtitle}
            </p>
          </div>
        </div>
        <span className="self-start sm:self-center text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-md">
          {texts.badge}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
        {/* Left: Diagram Image */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md bg-slate-50 group">
            <Image
              src="/body basics/digestivesystem-enss-1.jpg"
              alt="Human Digestive System Diagram"
              width={600}
              height={700}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />

            {/* Overlay hint */}
            <div className="absolute bottom-2 left-2 right-2 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold py-1.5 px-3 rounded-xl flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>{texts.routeLabel}</span>
              </span>
              <span className="text-slate-200">{texts.routePath}</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Organ Selector & Explanations */}
        <div className="lg:col-span-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {texts.selectPrompt}
          </p>

          <div className="flex flex-wrap gap-2">
            {ORGANS.map((organ) => {
              const isSelected = selectedOrgan.id === organ.id;
              const name =
                lang === 'uz' ? organ.nameUz : lang === 'ru' ? organ.nameRu : organ.nameEn;
              return (
                <button
                  key={organ.id}
                  onClick={() => setSelectedOrgan(organ)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 ring-2 ring-emerald-500 ring-offset-2'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  }`}
                >
                  <span>{name}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                </button>
              );
            })}
          </div>

          {/* Active Organ Card */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between gap-2">
              <span className={`text-xs font-black px-2.5 py-1 rounded-lg border ${selectedOrgan.badgeColor}`}>
                {organName}
              </span>
              <span className="text-xs text-slate-400 font-bold">
                {selectedOrgan.id === 'esophagus' || selectedOrgan.id === 'stomach'
                  ? texts.burpRelated
                  : texts.organGeneral}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {organDesc}
            </p>

            {burpRole && (
              <div className="bg-emerald-100/70 border border-emerald-300 rounded-xl p-3.5 text-xs sm:text-sm text-emerald-900 leading-relaxed font-semibold">
                <span className="font-bold text-emerald-950 block mb-0.5">
                  💨 {texts.burpQuestion}
                </span>
                {burpRole}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
