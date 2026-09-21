'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  BookOpen,
  Sparkles,
  Search,
  Clock,
  Heart,
  ChevronRight,
  ChevronLeft,
  X,
  Copy,
  Check,
  HelpCircle,
  Eye,
  EyeOff,
  Shuffle,
  Baby,
  Smile,
  Sun,
  CloudRain,
  Snowflake,
  Flower2,
  GraduationCap,
  Volume2,
} from 'lucide-react';
import { kidsTales, kidsPoems, kidsRiddles, Tale, Poem, Riddle } from '@/lib/kidsData';
import { useI18n } from '@/context/LanguageContext';
import Pagination from '@/components/Pagination';

type TabType = 'ertaklar' | 'sherlar' | 'topishmoqlar';

const TALES_PAGE_SIZE = 6;
const POEMS_PAGE_SIZE = 9;
const RIDDLES_PAGE_SIZE = 6;

function BolalarContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useI18n();

  const tabParam = (searchParams.get('tab') as TabType) || 'ertaklar';
  const categoryParam = searchParams.get('category') || 'all';
  const rawPage = parseInt(searchParams.get('page') || '1', 10);
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  const [activeTab, setActiveTab] = useState<TabType>(
    ['ertaklar', 'sherlar', 'topishmoqlar'].includes(tabParam) ? tabParam : 'ertaklar'
  );

  // Sync tab with URL
  const setTab = (tab: TabType) => {
    setActiveTab(tab);
    router.replace(`/bolalar?tab=${tab}`, { scroll: false });
  };

  // --- ERTAKLAR STATE ---
  const [taleSearch, setTaleSearch] = useState('');
  const [selectedTale, setSelectedTale] = useState<Tale | null>(null);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [taleCopied, setTaleCopied] = useState(false);

  // Filter tales
  const filteredTales = useMemo(() => {
    if (!taleSearch.trim()) return kidsTales;
    const q = taleSearch.toLowerCase();
    return kidsTales.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.paragraphs.some((p) => p.toLowerCase().includes(q)) ||
        (t.moral && t.moral.toLowerCase().includes(q))
    );
  }, [taleSearch]);

  // Tales pagination
  const totalTalesPages = Math.max(1, Math.ceil(filteredTales.length / TALES_PAGE_SIZE));
  const talesPage = Math.min(page, totalTalesPages);
  const paginatedTales = filteredTales.slice((talesPage - 1) * TALES_PAGE_SIZE, talesPage * TALES_PAGE_SIZE);

  const handleCopyTale = (tale: Tale) => {
    const text = `${tale.title}\n\n${tale.paragraphs.join('\n\n')}${
      tale.moral ? `\n\nQissadan hissa: ${tale.moral}` : ''
    }\n\n— Farzandly.uz`;
    navigator.clipboard.writeText(text);
    setTaleCopied(true);
    setTimeout(() => setTaleCopied(false), 2000);
  };

  const handlePrevTale = () => {
    if (!selectedTale) return;
    const currIdx = kidsTales.findIndex((t) => t.id === selectedTale.id);
    if (currIdx > 0) {
      setSelectedTale(kidsTales[currIdx - 1]);
    } else {
      setSelectedTale(kidsTales[kidsTales.length - 1]);
    }
  };

  const handleNextTale = () => {
    if (!selectedTale) return;
    const currIdx = kidsTales.findIndex((t) => t.id === selectedTale.id);
    if (currIdx < kidsTales.length - 1) {
      setSelectedTale(kidsTales[currIdx + 1]);
    } else {
      setSelectedTale(kidsTales[0]);
    }
  };

  // --- SHE'RLAR STATE ---
  const [poemCategory, setPoemCategory] = useState<string>(categoryParam);
  const [poemSearch, setPoemSearch] = useState('');
  const [copiedPoemId, setCopiedPoemId] = useState<string | null>(null);

  const poemCategories = [
    { id: 'all', label: 'Barchasi', icon: BookOpen, count: kidsPoems.length },
    { id: 'bahor', label: 'Bahor', icon: Flower2, count: kidsPoems.filter((p) => p.category === 'bahor').length },
    { id: 'yoz', label: 'Yoz', icon: Sun, count: kidsPoems.filter((p) => p.category === 'yoz').length },
    { id: 'kuz', label: 'Kuz', icon: CloudRain, count: kidsPoems.filter((p) => p.category === 'kuz').length },
    { id: 'qish', label: 'Qish', icon: Snowflake, count: kidsPoems.filter((p) => p.category === 'qish').length },
    { id: 'maktab', label: 'Maktab & Fanlar', icon: GraduationCap, count: kidsPoems.filter((p) => p.category === 'maktab').length },
    { id: 'tarbiya', label: 'Odob & Mehr', icon: Heart, count: kidsPoems.filter((p) => p.category === 'tarbiya').length },
  ];

  const filteredPoems = useMemo(() => {
    return kidsPoems.filter((poem) => {
      const matchCat = poemCategory === 'all' || poem.category === poemCategory;
      if (!matchCat) return false;
      if (!poemSearch.trim()) return true;
      const q = poemSearch.toLowerCase();
      return (
        poem.title.toLowerCase().includes(q) ||
        poem.author.toLowerCase().includes(q) ||
        poem.lines.some((l) => l.toLowerCase().includes(q))
      );
    });
  }, [poemCategory, poemSearch]);

  // Poems pagination
  const totalPoemsPages = Math.max(1, Math.ceil(filteredPoems.length / POEMS_PAGE_SIZE));
  const poemsPage = Math.min(page, totalPoemsPages);
  const paginatedPoems = filteredPoems.slice((poemsPage - 1) * POEMS_PAGE_SIZE, poemsPage * POEMS_PAGE_SIZE);

  const handleCopyPoem = (poem: Poem) => {
    const text = `${poem.title}\n${poem.lines.join('\n')}\n\nMuallif: ${poem.author}\n— Farzandly.uz`;
    navigator.clipboard.writeText(text);
    setCopiedPoemId(poem.id);
    setTimeout(() => setCopiedPoemId(null), 2000);
  };

  // --- TOPISHMOQLAR STATE ---
  const [revealedRiddles, setRevealedRiddles] = useState<Record<string, boolean>>({});
  const [randomRiddleId, setRandomRiddleId] = useState<string | null>(null);

  // Riddles pagination
  const totalRiddlesPages = Math.max(1, Math.ceil(kidsRiddles.length / RIDDLES_PAGE_SIZE));
  const riddlesPage = Math.min(page, totalRiddlesPages);
  const paginatedRiddles = kidsRiddles.slice((riddlesPage - 1) * RIDDLES_PAGE_SIZE, riddlesPage * RIDDLES_PAGE_SIZE);

  const toggleRiddle = (id: string) => {
    setRevealedRiddles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const revealAllRiddles = () => {
    const all: Record<string, boolean> = {};
    kidsRiddles.forEach((r) => (all[r.id] = true));
    setRevealedRiddles(all);
  };

  const hideAllRiddles = () => {
    setRevealedRiddles({});
  };

  const handleRandomRiddle = () => {
    const randomIdx = Math.floor(Math.random() * kidsRiddles.length);
    const chosen = kidsRiddles[randomIdx];
    setRandomRiddleId(chosen.id);
    const el = document.getElementById(chosen.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Close reader on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTale(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Hero Banner */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Baby className="w-3.5 h-3.5" />
            <span>Bolalar va Ota-onalar uchun</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
            Bolalar olami
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Farzandingiz bilan birgalikda o‘qish, yod olish va zehnini charxlash uchun ibratli ertaklar,
            go‘zal she’rlar hamda topishmoqlar to‘plami.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setTab('ertaklar')}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'ertaklar'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 ring-2 ring-emerald-600 ring-offset-2'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Ertaklar</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-black ${
                  activeTab === 'ertaklar' ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {kidsTales.length}
              </span>
            </button>

            <button
              onClick={() => setTab('sherlar')}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'sherlar'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 ring-2 ring-emerald-600 ring-offset-2'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>She’rlar</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-black ${
                  activeTab === 'sherlar' ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {kidsPoems.length}
              </span>
            </button>

            <button
              onClick={() => setTab('topishmoqlar')}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'topishmoqlar'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 ring-2 ring-emerald-600 ring-offset-2'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Topishmoqlar</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-black ${
                  activeTab === 'topishmoqlar' ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {kidsRiddles.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ================= TAB 1: ERTAKLAR ================= */}
        {activeTab === 'ertaklar' && (
          <div className="space-y-6">
            {/* Search and stats bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={taleSearch}
                  onChange={(e) => setTaleSearch(e.target.value)}
                  placeholder="Ertaklardan izlash..."
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:border-emerald-500 outline-none"
                />
              </div>

              <div className="text-xs font-bold text-slate-500 self-end sm:self-center">
                Jami: <span className="text-slate-800">{filteredTales.length} ta ertak</span>
              </div>
            </div>

            {/* Tales Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedTales.map((tale) => (
                <div
                  key={tale.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="space-y-3">
                    {/* Header tags */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-lg">
                        {tale.number}-ertak
                      </span>
                      <span className="text-xs text-slate-400 font-medium inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {tale.readingMinutes} daqiqa
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {tale.title}
                    </h3>

                    {/* Author */}
                    <div className="text-xs font-medium text-slate-500">
                      Muallif: <span className="text-slate-700 font-bold">{tale.author}</span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {tale.paragraphs[0]}
                    </p>

                    {/* Moral preview */}
                    {tale.moral && (
                      <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-900 leading-relaxed font-medium">
                        <span className="font-bold text-amber-800">Qissadan hissa:</span> {tale.moral}
                      </div>
                    )}
                  </div>

                  {/* Read button */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedTale(tale)}
                      className="w-full btn-primary py-2.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Ertakni o‘qish</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTales.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 text-slate-500">
                <p className="font-bold">Ertak topilmadi</p>
                <p className="text-xs mt-1">Boshqa so‘z bilan qidirib ko‘ring.</p>
              </div>
            )}

            <Pagination
              page={talesPage}
              totalPages={totalTalesPages}
              basePath="/bolalar"
              params={{ tab: 'ertaklar' }}
            />
          </div>
        )}

        {/* ================= TAB 2: SHE'RLAR ================= */}
        {activeTab === 'sherlar' && (
          <div className="space-y-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {poemCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = poemCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setPoemCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                        isActive ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={poemSearch}
                  onChange={(e) => setPoemSearch(e.target.value)}
                  placeholder="She’rlardan izlash..."
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:border-emerald-500 outline-none"
                />
              </div>

              <div className="text-xs font-bold text-slate-500">
                Ko‘rsatilmoqda: <span className="text-slate-800">{filteredPoems.length} ta she’r</span>
              </div>
            </div>

            {/* Poems Masonry / Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPoems.map((poem) => (
                <div
                  key={poem.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-emerald-400 hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md capitalize">
                        {poem.category}
                      </span>
                      <button
                        onClick={() => handleCopyPoem(poem)}
                        className="text-slate-400 hover:text-emerald-600 p-1 rounded-md transition-colors"
                        title="She’rdan nusxa olish"
                      >
                        {copiedPoemId === poem.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <h3 className="text-lg font-black text-slate-800 mb-4">{poem.title}</h3>

                    {/* Verses */}
                    <div className="space-y-1 text-sm font-medium text-slate-700 leading-relaxed italic bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                      {poem.lines.map((line, lIdx) =>
                        line === '' ? (
                          <div key={lIdx} className="h-2" />
                        ) : (
                          <p key={lIdx}>{line}</p>
                        )
                      )}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>
                      Muallif: <strong className="text-slate-600">{poem.author}</strong>
                    </span>
                    <button
                      onClick={() => handleCopyPoem(poem)}
                      className="text-emerald-600 hover:text-emerald-700 font-bold"
                    >
                      {copiedPoemId === poem.id ? 'Nusxalandi!' : 'Ulashish'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPoems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 text-slate-500">
                <p className="font-bold">She’r topilmadi</p>
                <p className="text-xs mt-1">Boshqa so‘z yoki kategoriya tanlang.</p>
              </div>
            )}

            <Pagination
              page={poemsPage}
              totalPages={totalPoemsPages}
              basePath="/bolalar"
              params={{ tab: 'sherlar', ...(poemCategory !== 'all' ? { category: poemCategory } : {}) }}
            />
          </div>
        )}

        {/* ================= TAB 3: TOPISHMOQLAR ================= */}
        {activeTab === 'topishmoqlar' && (
          <div className="space-y-6">
            {/* Header toolbar */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-black text-slate-800">Hayvonlar haqida topishmoqlar</h2>
                  <p className="text-xs text-slate-500">
                    Ochilgan javoblar:{' '}
                    <strong className="text-emerald-600">
                      {Object.values(revealedRiddles).filter(Boolean).length}
                    </strong>{' '}
                    / {kidsRiddles.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap justify-end">
                <button
                  onClick={handleRandomRiddle}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Tasodifiy topishmoq</span>
                </button>

                <button
                  onClick={revealAllRiddles}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Hammasini ko‘rish</span>
                </button>

                <button
                  onClick={hideAllRiddles}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Hammasini yopish</span>
                </button>
              </div>
            </div>

            {/* Riddles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedRiddles.map((riddle) => {
                const isRevealed = Boolean(revealedRiddles[riddle.id]);
                const isHighlighted = randomRiddleId === riddle.id;
                return (
                  <div
                    key={riddle.id}
                    id={riddle.id}
                    className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                      isHighlighted
                        ? 'border-amber-400 ring-4 ring-amber-100 shadow-md'
                        : 'border-slate-200/90 hover:border-emerald-400 hover:shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-black text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg">
                          #{riddle.number} topishmoq
                        </span>
                        <span className="text-xs font-medium text-slate-400">Hayvonlar</span>
                      </div>

                      {/* Riddle text */}
                      <div className="space-y-1 text-base sm:text-lg font-bold text-slate-800 leading-snug py-2">
                        {riddle.lines.map((l, i) => (
                          <p key={i}>{l}</p>
                        ))}
                      </div>
                    </div>

                    {/* Answer reveal button & answer box */}
                    <div className="pt-5 mt-4 border-t border-slate-100">
                      {isRevealed ? (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between animate-in fade-in zoom-in duration-200">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                              Javobi:
                            </span>
                            <span className="text-lg font-black text-emerald-800">{riddle.answer}</span>
                          </div>
                          <button
                            onClick={() => toggleRiddle(riddle.id)}
                            className="p-1 text-emerald-600 hover:text-emerald-800"
                            title="Yashirish"
                          >
                            <EyeOff className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleRiddle(riddle.id)}
                          className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Eye className="w-4 h-4 text-slate-400" />
                          <span>Javobni ko‘rish</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <Pagination
              page={riddlesPage}
              totalPages={totalRiddlesPages}
              basePath="/bolalar"
              params={{ tab: 'topishmoqlar' }}
            />
          </div>
        )}
      </div>

      {/* ================= FULLSCREEN TALE READER MODAL ================= */}
      {selectedTale && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  {selectedTale.number}-ertak
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedTale.readingMinutes} daqiqalik mutolaa
                </span>
              </div>

              {/* Reader tools: font size & copy */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white border border-slate-200 rounded-xl p-0.5 text-xs font-bold text-slate-600">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`px-2 py-1 rounded-lg ${fontSize === 'normal' ? 'bg-slate-100 text-slate-900' : ''}`}
                    title="Standart matn"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-2 py-1 rounded-lg text-sm ${fontSize === 'large' ? 'bg-slate-100 text-slate-900' : ''}`}
                    title="Katta matn"
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`px-2 py-1 rounded-lg text-base ${fontSize === 'xlarge' ? 'bg-slate-100 text-slate-900' : ''}`}
                    title="Juda katta matn"
                  >
                    A++
                  </button>
                </div>

                <button
                  onClick={() => handleCopyTale(selectedTale)}
                  className="p-2 text-slate-500 hover:text-emerald-600 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all"
                  title="Nusxa olish"
                >
                  {taleCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setSelectedTale(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
                  aria-label="Yopish"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {selectedTale.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Muallif: <span className="text-slate-600 font-bold">{selectedTale.author}</span>
                </p>
              </div>

              {/* Story text */}
              <div
                className={`text-slate-700 leading-relaxed space-y-4 font-normal ${
                  fontSize === 'normal'
                    ? 'text-base leading-7'
                    : fontSize === 'large'
                    ? 'text-lg leading-8'
                    : 'text-xl leading-9'
                }`}
              >
                {selectedTale.paragraphs.map((p, idx) => (
                  <p key={idx} className={p.startsWith('—') || p.startsWith('–') ? 'pl-4 border-l-2 border-emerald-300 font-medium text-slate-800' : ''}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Moral takeaway */}
              {selectedTale.moral && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-950 space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-800 block">
                    Qissadan hissa:
                  </span>
                  <p className="text-sm sm:text-base font-bold italic">{selectedTale.moral}</p>
                </div>
              )}
            </div>

            {/* Modal Footer (Prev / Next) */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <button
                onClick={handlePrevTale}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Oldingi ertak</span>
              </button>

              <button
                onClick={handleNextTale}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold btn-primary flex items-center gap-1.5 cursor-pointer"
              >
                <span>Keyingi ertak</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BolalarPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-400">Yuklanmoqda...</div>}>
      <BolalarContent />
    </Suspense>
  );
}
