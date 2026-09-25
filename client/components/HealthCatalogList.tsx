'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Clock,
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Activity,
  Layers,
  Crown,
} from 'lucide-react';
import { HealthTopic } from '@/lib/healthData';

interface HealthCatalogListProps {
  topics: HealthTopic[];
  itemsPerPage?: number;
}

const DEFAULT_IMAGE = '/body basics/default-anatomy.svg';

export default function HealthCatalogList({
  topics,
  itemsPerPage = 6,
}: HealthCatalogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Categories list
  const categories = [
    { id: 'all', label: 'Barcha mavzular' },
    { id: 'premium', label: '👑 Premium' },
    { id: 'nervous', label: 'Bosh miya va asab' },
    { id: 'musculoskeletal', label: 'Suyaklar va harakat' },
    { id: 'digestive', label: 'Hazm qilish' },
    { id: 'circulatory', label: 'Yurak va qon' },
    { id: 'respiratory', label: 'Nafas tizimi' },
    { id: 'sensory', label: 'Ko‘rish va eshitish' },
    { id: 'immune', label: 'Himoya va immunitet' },
    { id: 'metabolic', label: 'Metabolizm va bezlar' },
  ];

  // Filtering
  const filteredTopics = useMemo(() => {
    return topics.filter((t) => {
      // Category match
      let matchCat = true;
      if (selectedCategory === 'premium') {
        matchCat = Boolean(t.isPremium);
      } else if (selectedCategory === 'sensory') {
        matchCat = t.category === 'sensory' || t.category === 'vision';
      } else if (selectedCategory === 'immune') {
        matchCat = t.category === 'immune' || t.category === 'body-basics';
      } else if (selectedCategory === 'metabolic') {
        matchCat = t.category === 'metabolic' || t.category === 'endocrine';
      } else if (selectedCategory !== 'all') {
        matchCat = t.category === selectedCategory;
      }

      // Search match
      let matchSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchSearch =
          t.titleUz.toLowerCase().includes(q) ||
          t.subtitleUz.toLowerCase().includes(q) ||
          t.systemUz.toLowerCase().includes(q);
      }

      return matchCat && matchSearch;
    });
  }, [topics, selectedCategory, searchQuery]);

  // Reset page when category or search changes
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredTopics.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredTopics.length);
  const paginatedTopics = filteredTopics.slice(startIndex, endIndex);

  const handleImageError = (topicId: string) => {
    setImageErrors((prev) => ({ ...prev, [topicId]: true }));
  };

  return (
    <div className="space-y-8">
      {/* 1. Filter Pills & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-2xl">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((c) => {
            const isSelected = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => handleCategoryChange(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-xs font-black'
                    : 'bg-white hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="A’zo yoki mavzu bo‘yicha qidirish..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Header Info */}
      <div className="flex items-center justify-between gap-4 text-xs font-bold text-slate-500 px-1">
        <span>
          Ko‘rsatilmoqda: <strong className="text-slate-800">{filteredTopics.length > 0 ? `${startIndex + 1}–${endIndex}` : '0'}</strong> / Jami: {filteredTopics.length} ta mavzu
        </span>
        {totalPages > 1 && (
          <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
            Sahifa {currentPage} / {totalPages}
          </span>
        )}
      </div>

      {/* 2. Topics Grid */}
      {paginatedTopics.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl space-y-3">
          <Stethoscope className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-black text-slate-700">Mavzular topilmadi</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Qidiruv so‘zini o‘zgartiring yoki filtrlarni tozalang.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="btn-outline text-xs py-1.5 px-4 font-bold cursor-pointer"
          >
            Barcha mavzularni ko‘rish
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedTopics.map((topic) => {
            const hasError = imageErrors[topic.id];
            const imgSrc = !hasError && topic.heroImage ? topic.heroImage : DEFAULT_IMAGE;

            return (
              <div
                key={topic.id}
                className="bg-white rounded-2xl border-2 border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                {/* Visual Thumbnail */}
                <div className="relative w-full h-44 bg-slate-950 flex items-center justify-center p-3 border-b border-slate-100 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={topic.titleUz}
                    onError={() => handleImageError(topic.id)}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-emerald-500/30">
                    {topic.systemUz}
                  </span>
                  {topic.isPremium && (
                    <span className="absolute top-2.5 right-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md border border-amber-300 flex items-center gap-1">
                      <Crown className="w-3 h-3 text-amber-200" />
                      <span>Premium</span>
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg">
                          {topic.systemUz}
                        </span>
                        {topic.isPremium && (
                          <span className="text-[10px] font-black text-amber-800 bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Crown className="w-2.5 h-2.5 text-amber-600" />
                            <span>Premium</span>
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 font-bold inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {topic.readingMinutes} daqiqa
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {topic.titleUz}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {topic.subtitleUz}
                    </p>

                    {topic.funFacts && topic.funFacts.length > 0 && (
                      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-medium">
                        <span className="font-bold text-amber-800">💡 Qiziqarli fakt:</span> {topic.funFacts[0].uz}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">
                      {topic.isPremium ? 'Bepul qisman o‘qish' : 'Tibbiyot mutaxassislari tasdiqlagan'}
                    </span>
                    <Link
                      href={`/salomatlik/${topic.slug}`}
                      className={`py-2 px-4 text-xs font-bold inline-flex items-center gap-1.5 rounded-xl transition-all ${
                        topic.isPremium
                          ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs font-black'
                          : 'btn-primary'
                      }`}
                    >
                      <span>{topic.isPremium ? 'O‘qish (Ko‘rish)' : 'Batafsil'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 3. Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6 border-t border-slate-200">
          {/* Previous Page */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`p-2.5 rounded-xl border flex items-center gap-1 text-xs font-bold transition-all ${
              currentPage === 1
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                : 'hover:bg-slate-100 text-slate-700 border-slate-300 cursor-pointer'
            }`}
            aria-label="Oldingi sahifa"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Oldingi</span>
          </button>

          {/* Numbered Page Buttons */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isCurrent = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                    isCurrent
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Page */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`p-2.5 rounded-xl border flex items-center gap-1 text-xs font-bold transition-all ${
              currentPage === totalPages
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                : 'hover:bg-slate-100 text-slate-700 border-slate-300 cursor-pointer'
            }`}
            aria-label="Keyingi sahifa"
          >
            <span className="hidden sm:inline">Keyingi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
