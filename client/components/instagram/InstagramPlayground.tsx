'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Download,
  Copy,
  RotateCcw,
  Eye,
  Sliders,
  Sparkles,
  Palette,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Check,
  Smartphone,
  Flame,
  HeartHandshake,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { InstagramCard } from './InstagramCard';
import { CardCustomization, ColorTheme, AgeCategory, TemplateType } from './types';
import { INITIAL_CUSTOMIZATION, TEMPLATE_DEFINITIONS } from './defaultPresets';

export function InstagramPlayground() {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [customization, setCustomization] = useState<CardCustomization>(INITIAL_CUSTOMIZATION);
  const [activeTab, setActiveTab] = useState<'template' | 'content' | 'style'>('template');
  const [showGuides, setShowGuides] = useState(false);
  const [zoomScale, setZoomScale] = useState<number>(0.5);
  const [autoFit, setAutoFit] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);
  const [exportResolution, setExportResolution] = useState<'1x' | '2x'>('1x');

  // Calculate auto-fit scale based on stage viewport height & width
  const updateFitScale = useCallback(() => {
    if (!autoFit || !containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    if (!clientWidth || !clientHeight) return;

    // Available canvas padding
    const paddingX = 48;
    const paddingY = 48;
    const availW = Math.max(280, clientWidth - paddingX);
    const availH = Math.max(350, clientHeight - paddingY);

    const scaleW = availW / 1080;
    const scaleH = availH / 1350;
    const fit = Math.min(scaleW, scaleH);

    // Keep within reasonable bounds
    const boundedFit = Math.min(Math.max(Number(fit.toFixed(3)), 0.2), 0.95);
    setZoomScale(boundedFit);
  }, [autoFit]);

  useEffect(() => {
    updateFitScale();
    window.addEventListener('resize', updateFitScale);
    return () => window.removeEventListener('resize', updateFitScale);
  }, [updateFitScale]);

  // Set preset template
  const handleSelectTemplate = (templateId: TemplateType) => {
    setCustomization((prev) => ({
      ...prev,
      template: templateId,
    }));
  };

  // Reset to default presets
  const handleReset = () => {
    if (confirm('Barcha matnlar va sozlamalarni birlamchi holatga qaytarishni xohlaysizmi?')) {
      setCustomization(INITIAL_CUSTOMIZATION);
      setExportSuccess('Barcha sozlamalar dastlabki holatga qaytarildi');
      setTimeout(() => setExportSuccess(null), 3000);
    }
  };

  // Helper to trigger image download
  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsExporting(true);
    setExportError(null);
    setExportSuccess(null);

    try {
      // Dynamically import html-to-image on client side
      const htmlToImage = await import('html-to-image');
      
      const pixelRatio = exportResolution === '2x' ? 2 : 1;
      const targetWidth = 1080;
      const targetHeight = 1350;

      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 0.98,
        pixelRatio: pixelRatio,
        width: targetWidth,
        height: targetHeight,
        cacheBust: true,
        style: {
          transform: 'none',
        },
      });

      const link = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      link.download = `farzandly-${customization.template}-${timestamp}-${exportResolution}.png`;
      link.href = dataUrl;
      link.click();

      setExportSuccess(
        `Rasm muvaffaqiyatli saqlandi! (${exportResolution === '2x' ? '2160×2700 HD' : '1080×1350'} PNG)`
      );
      setTimeout(() => setExportSuccess(null), 4000);
    } catch (err: any) {
      console.error('Export error:', err);
      setExportError(err?.message || 'Rasmni eksport qilishda xatolik yuz berdi.');
      setTimeout(() => setExportError(null), 5000);
    } finally {
      setIsExporting(false);
    }
  };

  // Copy PNG image to clipboard
  const handleCopyToClipboard = async () => {
    if (!cardRef.current) return;
    setIsExporting(true);
    setExportError(null);
    setExportSuccess(null);

    try {
      const htmlToImage = await import('html-to-image');
      const blob = await htmlToImage.toBlob(cardRef.current, {
        quality: 0.98,
        pixelRatio: 1,
        width: 1080,
        height: 1350,
        cacheBust: true,
        style: { transform: 'none' },
      });

      if (!blob) throw new Error('Blob yaratilmadi');

      if (navigator.clipboard && window.ClipboardItem) {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        setExportSuccess('Rasm to‘g‘ridan-to‘g‘ri xotiraga (clipboard) nusxalandi! Telegram yoki Figma-ga Ctrl+V qilishingiz mumkin.');
        setTimeout(() => setExportSuccess(null), 4000);
      } else {
        throw new Error('Brauzeringiz clipboard image nusxalashni qo‘llab-quvvatlamaydi.');
      }
    } catch (err: any) {
      console.error('Clipboard copy error:', err);
      setExportError('Xotiraga nusxalashda xatolik. «Yuklab olish» tugmasidan foydalaning.');
      setTimeout(() => setExportError(null), 4000);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Studio Header */}
      <header className="h-16 bg-slate-950 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-2 rounded-xl transition-all border border-slate-700/60"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Farzandly platformasiga qaytish</span>
            <span className="sm:hidden">Orqaga</span>
          </Link>

          <div className="h-6 w-[1px] bg-slate-800" />

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              FZ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                  Instagram Post Studio
                </span>
                <span className="hidden md:inline px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  1080×1350 (4:5)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Resolution toggle */}
          <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-bold">
            <button
              onClick={() => setExportResolution('1x')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                exportResolution === '1x'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1080p
            </button>
            <button
              onClick={() => setExportResolution('2x')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                exportResolution === '2x'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2K Retina
            </button>
          </div>

          {/* Reset */}
          <button
            onClick={handleReset}
            title="Dastlabki holatga qaytarish"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Copy to Clipboard */}
          <button
            onClick={handleCopyToClipboard}
            disabled={isExporting}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all border border-slate-700 disabled:opacity-50"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Nusxa olish</span>
          </button>

          {/* Primary Download Button */}
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 transition-all active:scale-95 disabled:opacity-50"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Eksport qilinmoqda...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>PNG Yuklab Olish</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Notifications / Feedback Bar */}
      {exportSuccess && (
        <div className="bg-emerald-600 text-white px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md animate-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{exportSuccess}</span>
        </div>
      )}
      {exportError && (
        <div className="bg-rose-600 text-white px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{exportError}</span>
        </div>
      )}

      {/* Main Studio Body: Sidebar on Left, Canvas Preview on Right */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Control Panel */}
        <aside className="w-full lg:w-[460px] xl:w-[500px] bg-slate-950 border-r border-slate-800 flex flex-col shrink-0 h-[48vh] lg:h-auto overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-800 p-2 gap-1.5 shrink-0 bg-slate-900/50">
            <button
              onClick={() => setActiveTab('template')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'template'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Shablonlar (7)</span>
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'content'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Matn va Mazmun</span>
            </button>
            <button
              onClick={() => setActiveTab('style')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'style'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Dizayn & Brending</span>
            </button>
          </div>

          {/* Tab Content Panel (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm">
            {/* TAB 1: TEMPLATES */}
            {activeTab === 'template' && (
              <div className="space-y-6">
                {/* Category 1: Platform Introduction */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
                      Platforma Tanishtiruvi (Intro)
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {TEMPLATE_DEFINITIONS.filter((t) => t.category === 'intro').map((tpl) => {
                      const isSelected = customization.template === tpl.id;
                      return (
                        <div
                          key={tpl.id}
                          onClick={() => handleSelectTemplate(tpl.id)}
                          className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden group ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-950/40 shadow-md ring-2 ring-emerald-500/20'
                              : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                                }`}
                              >
                                {tpl.id === 'platform-intro' && <Sparkles className="w-5 h-5 text-amber-300" />}
                                {tpl.id === 'nega-farzandly' && <HeartHandshake className="w-5 h-5 text-teal-300" />}
                                {tpl.id === 'feature-showcase' && <Layers className="w-5 h-5 text-sky-300" />}
                              </div>
                              <div>
                                <h4 className="font-bold text-white text-sm">
                                  {tpl.title}
                                </h4>
                                <p className="text-xs text-slate-400">
                                  {tpl.shortDesc}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 ${
                                isSelected
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {tpl.badge}
                            </span>
                          </div>

                          <div className="mt-2.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 italic">
                            «{tpl.hookPreview}»
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Category 2: Specific Parenting Topics */}
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                    <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
                      Tarbiyaviy Mavzular
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {TEMPLATE_DEFINITIONS.filter((t) => t.category === 'parenting').map((tpl) => {
                      const isSelected = customization.template === tpl.id;
                      return (
                        <div
                          key={tpl.id}
                          onClick={() => handleSelectTemplate(tpl.id)}
                          className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden group ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-950/40 shadow-md ring-2 ring-emerald-500/20'
                              : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                                }`}
                              >
                                {tpl.id === 'mehrli-tarbiya' && <HeartHandshake className="w-5 h-5" />}
                                {tpl.id === 'ekran-vaqti' && <Smartphone className="w-5 h-5" />}
                                {tpl.id === 'gamification' && <Flame className="w-5 h-5" />}
                                {tpl.id === 'hikmat-va-ilm' && <Sparkles className="w-5 h-5" />}
                              </div>
                              <div>
                                <h4 className="font-bold text-white text-sm">
                                  {tpl.title}
                                </h4>
                                <p className="text-xs text-slate-400">
                                  {tpl.shortDesc}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 ${
                                isSelected
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {tpl.badge}
                            </span>
                          </div>

                          <div className="mt-2.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 italic">
                            «{tpl.hookPreview}»
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CONTENT EDITOR */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                {/* Template: Platform Intro */}
                {customization.template === 'platform-intro' && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wide">
                        Tanishtiruv: Farzandly nima?
                      </span>
                      <h4 className="font-bold text-white text-base">Manifesto va 3 ta Ustun</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Asosiy Sarlavha (Hook):</label>
                      <input
                        type="text"
                        value={customization.platformIntro.hook}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, hook: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Izoh va Kirish:</label>
                      <textarea
                        rows={2}
                        value={customization.platformIntro.subtitle}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, subtitle: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-emerald-500"
                      />
                    </div>

                    {/* Pillar 1 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-emerald-400">1-Ustun</span>
                      <input
                        type="text"
                        value={customization.platformIntro.pillar1Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, pillar1Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.platformIntro.pillar1Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, pillar1Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>

                    {/* Pillar 2 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-teal-400">2-Ustun</span>
                      <input
                        type="text"
                        value={customization.platformIntro.pillar2Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, pillar2Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.platformIntro.pillar2Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, pillar2Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>

                    {/* Pillar 3 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-amber-400">3-Ustun</span>
                      <input
                        type="text"
                        value={customization.platformIntro.pillar3Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, pillar3Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.platformIntro.pillar3Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, pillar3Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>

                    {/* CTA */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Harakatga chaqiruv (CTA):</label>
                      <input
                        type="text"
                        value={customization.platformIntro.ctaText}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            platformIntro: { ...prev.platformIntro, ctaText: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Template: Nega Farzandly */}
                {customization.template === 'nega-farzandly' && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-extrabold text-teal-400 uppercase tracking-wide">
                        Tanishtiruv: Nega aynan Farzandly?
                      </span>
                      <h4 className="font-bold text-white text-base">3 Muammo va Aniq Yechim</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Asosiy Sarlavha (Hook):</label>
                      <input
                        type="text"
                        value={customization.negaFarzandly.hook}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, hook: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>

                    {/* Pair 1 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-slate-300">1-Juftlik (Vaqt)</span>
                      <input
                        type="text"
                        value={customization.negaFarzandly.prob1Text}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, prob1Text: e.target.value },
                          }))
                        }
                        placeholder="Muammo"
                        className="w-full bg-slate-950 border border-rose-900/60 rounded px-2.5 py-1 text-xs text-rose-200"
                      />
                      <input
                        type="text"
                        value={customization.negaFarzandly.sol1Text}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, sol1Text: e.target.value },
                          }))
                        }
                        placeholder="Farzandly Yechimi"
                        className="w-full bg-slate-950 border border-emerald-900/60 rounded px-2.5 py-1 text-xs text-emerald-200"
                      />
                    </div>

                    {/* Pair 2 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-slate-300">2-Juftlik (Ma’lumotlar)</span>
                      <input
                        type="text"
                        value={customization.negaFarzandly.prob2Text}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, prob2Text: e.target.value },
                          }))
                        }
                        placeholder="Muammo"
                        className="w-full bg-slate-950 border border-rose-900/60 rounded px-2.5 py-1 text-xs text-rose-200"
                      />
                      <input
                        type="text"
                        value={customization.negaFarzandly.sol2Text}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, sol2Text: e.target.value },
                          }))
                        }
                        placeholder="Farzandly Yechimi"
                        className="w-full bg-slate-950 border border-emerald-900/60 rounded px-2.5 py-1 text-xs text-emerald-200"
                      />
                    </div>

                    {/* Pair 3 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-slate-300">3-Juftlik (Hissiyot & Baqirish)</span>
                      <input
                        type="text"
                        value={customization.negaFarzandly.prob3Text}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, prob3Text: e.target.value },
                          }))
                        }
                        placeholder="Muammo"
                        className="w-full bg-slate-950 border border-rose-900/60 rounded px-2.5 py-1 text-xs text-rose-200"
                      />
                      <input
                        type="text"
                        value={customization.negaFarzandly.sol3Text}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, sol3Text: e.target.value },
                          }))
                        }
                        placeholder="Farzandly Yechimi"
                        className="w-full bg-slate-950 border border-emerald-900/60 rounded px-2.5 py-1 text-xs text-emerald-200"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Xulosa:</label>
                      <input
                        type="text"
                        value={customization.negaFarzandly.takeaway}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            negaFarzandly: { ...prev.negaFarzandly, takeaway: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Template: Feature Showcase */}
                {customization.template === 'feature-showcase' && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-extrabold text-sky-400 uppercase tracking-wide">
                        Tanishtiruv: Platformada Nimalar Bor?
                      </span>
                      <h4 className="font-bold text-white text-base">4 Asosiy Imkoniyat</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Hook:</label>
                      <input
                        type="text"
                        value={customization.featureShowcase.hook}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            featureShowcase: { ...prev.featureShowcase, hook: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-xs font-bold text-emerald-400">1-Imkoniyat</span>
                        <input
                          type="text"
                          value={customization.featureShowcase.feat1Title}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat1Title: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs font-bold text-white"
                        />
                        <textarea
                          rows={2}
                          value={customization.featureShowcase.feat1Desc}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat1Desc: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300"
                        />
                      </div>

                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-xs font-bold text-sky-400">2-Imkoniyat</span>
                        <input
                          type="text"
                          value={customization.featureShowcase.feat2Title}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat2Title: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs font-bold text-white"
                        />
                        <textarea
                          rows={2}
                          value={customization.featureShowcase.feat2Desc}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat2Desc: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300"
                        />
                      </div>

                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-xs font-bold text-amber-400">3-Imkoniyat</span>
                        <input
                          type="text"
                          value={customization.featureShowcase.feat3Title}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat3Title: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs font-bold text-white"
                        />
                        <textarea
                          rows={2}
                          value={customization.featureShowcase.feat3Desc}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat3Desc: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300"
                        />
                      </div>

                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-xs font-bold text-teal-400">4-Imkoniyat</span>
                        <input
                          type="text"
                          value={customization.featureShowcase.feat4Title}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat4Title: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs font-bold text-white"
                        />
                        <textarea
                          rows={2}
                          value={customization.featureShowcase.feat4Desc}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              featureShowcase: { ...prev.featureShowcase, feat4Desc: e.target.value },
                            }))
                          }
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Promo Taklif:</label>
                      <input
                        type="text"
                        value={customization.featureShowcase.bottomPromo}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            featureShowcase: { ...prev.featureShowcase, bottomPromo: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Template-Specific Content Editor */}
                {customization.template === 'mehrli-tarbiya' && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wide">
                        Mavzu: Mehrli Tarbiya
                      </span>
                      <h4 className="font-bold text-white text-base">Matnlarni Tahrirlash</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Asosiy Sarlavha (Hook):</label>
                      <input
                        type="text"
                        value={customization.mehrliTarbiya.hook}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, hook: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Izoh va Kirish:</label>
                      <textarea
                        rows={2}
                        value={customization.mehrliTarbiya.subtitle}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, subtitle: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-emerald-500"
                      />
                    </div>

                    {/* Step 1 */}
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-400">1-Qoida</span>
                        <input
                          type="text"
                          value={customization.mehrliTarbiya.step1Tag}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              mehrliTarbiya: { ...prev.mehrliTarbiya, step1Tag: e.target.value },
                            }))
                          }
                          className="bg-slate-950 border border-slate-800 rounded px-2 py-0.5 text-[11px] text-slate-300 w-28 text-right"
                        />
                      </div>
                      <input
                        type="text"
                        value={customization.mehrliTarbiya.step1Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, step1Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.mehrliTarbiya.step1Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, step1Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                      />
                    </div>

                    {/* Step 2 */}
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-teal-400">2-Qoida</span>
                        <input
                          type="text"
                          value={customization.mehrliTarbiya.step2Tag}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              mehrliTarbiya: { ...prev.mehrliTarbiya, step2Tag: e.target.value },
                            }))
                          }
                          className="bg-slate-950 border border-slate-800 rounded px-2 py-0.5 text-[11px] text-slate-300 w-28 text-right"
                        />
                      </div>
                      <input
                        type="text"
                        value={customization.mehrliTarbiya.step2Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, step2Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.mehrliTarbiya.step2Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, step2Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                      />
                    </div>

                    {/* Step 3 */}
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-400">3-Qoida</span>
                        <input
                          type="text"
                          value={customization.mehrliTarbiya.step3Tag}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              mehrliTarbiya: { ...prev.mehrliTarbiya, step3Tag: e.target.value },
                            }))
                          }
                          className="bg-slate-950 border border-slate-800 rounded px-2 py-0.5 text-[11px] text-slate-300 w-28 text-right"
                        />
                      </div>
                      <input
                        type="text"
                        value={customization.mehrliTarbiya.step3Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, step3Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.mehrliTarbiya.step3Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, step3Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                      />
                    </div>

                    {/* Takeaway */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Asosiy Xulosa (Takeaway):</label>
                      <input
                        type="text"
                        value={customization.mehrliTarbiya.takeaway}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            mehrliTarbiya: { ...prev.mehrliTarbiya, takeaway: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-emerald-500"
                      />
                    </div>
                  </div>
                )}

                {/* Template 2: Ekran Vaqti */}
                {customization.template === 'ekran-vaqti' && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-extrabold text-sky-400 uppercase tracking-wide">
                        2-Post: Ekran Vaqti
                      </span>
                      <h4 className="font-bold text-white text-base">Matnlarni Tahrirlash</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Hook:</label>
                      <input
                        type="text"
                        value={customization.ekranVaqti.hook}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            ekranVaqti: { ...prev.ekranVaqti, hook: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Kirish:</label>
                      <textarea
                        rows={2}
                        value={customization.ekranVaqti.subtitle}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            ekranVaqti: { ...prev.ekranVaqti, subtitle: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>

                    {/* Alt 1 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-amber-400">1-Yechim</span>
                      <input
                        type="text"
                        value={customization.ekranVaqti.alt1Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            ekranVaqti: { ...prev.ekranVaqti, alt1Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.ekranVaqti.alt1Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            ekranVaqti: { ...prev.ekranVaqti, alt1Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>

                    {/* Alt 2 */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-emerald-400">2-Yechim</span>
                      <input
                        type="text"
                        value={customization.ekranVaqti.alt2Title}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            ekranVaqti: { ...prev.ekranVaqti, alt2Title: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs font-bold text-white"
                      />
                      <textarea
                        rows={2}
                        value={customization.ekranVaqti.alt2Desc}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            ekranVaqti: { ...prev.ekranVaqti, alt2Desc: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>

                    {/* Recommendation */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">JSST Tavsiyasi:</label>
                      <textarea
                        rows={2}
                        value={customization.ekranVaqti.recommendation}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            ekranVaqti: { ...prev.ekranVaqti, recommendation: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Template 3: Gamification */}
                {customization.template === 'gamification' && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wide">
                        3-Post: Duolingo for Parents
                      </span>
                      <h4 className="font-bold text-white text-base">O‘yin Elementlari & Test</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Hook:</label>
                      <input
                        type="text"
                        value={customization.gamification.hook}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            gamification: { ...prev.gamification, hook: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-300 font-bold">Streak kunlari:</label>
                        <input
                          type="number"
                          value={customization.gamification.streakDays}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              gamification: { ...prev.gamification, streakDays: Number(e.target.value) },
                            }))
                          }
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-300 font-bold">XP Ballari:</label>
                        <input
                          type="number"
                          value={customization.gamification.xpPoints}
                          onChange={(e) =>
                            setCustomization((prev) => ({
                              ...prev,
                              gamification: { ...prev.gamification, xpPoints: Number(e.target.value) },
                            }))
                          }
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* Quiz */}
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-emerald-400">Mini-Quiz Savoli</span>
                      <textarea
                        rows={2}
                        value={customization.gamification.quizQuestion}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            gamification: { ...prev.gamification, quizQuestion: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                      <label className="text-[11px] text-slate-400">To‘g‘ri javob varianti:</label>
                      <input
                        type="text"
                        value={customization.gamification.quizRightAnswer}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            gamification: { ...prev.gamification, quizRightAnswer: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-emerald-900 rounded px-2.5 py-1.5 text-xs text-emerald-300"
                      />
                    </div>
                  </div>
                )}

                {/* Template 4: Hikmat va Ilm */}
                {customization.template === 'hikmat-va-ilm' && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wide">
                        4-Post: Hikmat va Ilm
                      </span>
                      <h4 className="font-bold text-white text-base">Hadis & Ilmiy Neyropsixologiya</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Hook:</label>
                      <input
                        type="text"
                        value={customization.hikmatVaIlm.hook}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            hikmatVaIlm: { ...prev.hikmatVaIlm, hook: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                      />
                    </div>

                    {/* Hadith Section */}
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-emerald-900/60 space-y-2">
                      <span className="text-xs font-bold text-emerald-400">🕌 Sahih Hadis Matni</span>
                      <textarea
                        rows={2}
                        value={customization.hikmatVaIlm.hadithText}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            hikmatVaIlm: { ...prev.hikmatVaIlm, hadithText: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                      <input
                        type="text"
                        value={customization.hikmatVaIlm.hadithSource}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            hikmatVaIlm: { ...prev.hikmatVaIlm, hadithSource: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-300"
                      />
                    </div>

                    {/* Neuroscience Section */}
                    <div className="p-3.5 bg-slate-900 rounded-2xl border border-sky-900/60 space-y-2">
                      <span className="text-xs font-bold text-sky-400">🧠 Garvard Neyrobiologiyasi</span>
                      <textarea
                        rows={3}
                        value={customization.hikmatVaIlm.scienceText}
                        onChange={(e) =>
                          setCustomization((prev) => ({
                            ...prev,
                            hikmatVaIlm: { ...prev.hikmatVaIlm, scienceText: e.target.value },
                          }))
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: STYLE & BRANDING */}
            {activeTab === 'style' && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-white text-base">
                    Dizayn & Brending Sozlamalari
                  </h3>
                  <p className="text-xs text-slate-400">
                    Rang palitrasi va platforma nishonlarini sozlang.
                  </p>
                </div>

                {/* Color Themes */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-300">Rang Gammasi (Theme):</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'sage-classic', name: 'Pastel Sage', bg: '#FAF7F2', dot: '#059669' },
                      { id: 'warm-cream', name: 'Warm Cream', bg: '#FBFBF9', dot: '#0D9488' },
                      { id: 'emerald-depth', name: 'Emerald Soft', bg: '#F2FBF6', dot: '#047857' },
                      { id: 'golden-sand', name: 'Golden Accent', bg: '#FDFBF7', dot: '#D97706' },
                    ].map((thm) => (
                      <button
                        key={thm.id}
                        onClick={() =>
                          setCustomization((prev) => ({ ...prev, theme: thm.id as ColorTheme }))
                        }
                        className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-bold transition-all ${
                          customization.theme === thm.id
                            ? 'border-emerald-500 bg-emerald-950/40 text-white'
                            : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-slate-700 shrink-0"
                          style={{ backgroundColor: thm.dot }}
                        />
                        <span>{thm.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Age Category */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-300">Yosh Toifasi Nishoni:</label>
                  <div className="flex flex-wrap gap-2">
                    {(['0-2 yosh', '3-5 yosh', '6-9 yosh', '10-13 yosh', 'Barcha yoshlar'] as AgeCategory[]).map(
                      (cat) => (
                        <button
                          key={cat}
                          onClick={() => setCustomization((prev) => ({ ...prev, ageCategory: cat }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            customization.ageCategory === cat
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {cat}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-3 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-slate-200">Farzandly logotipi</span>
                    <input
                      type="checkbox"
                      checked={customization.showLogo}
                      onChange={(e) =>
                        setCustomization((prev) => ({ ...prev, showLogo: e.target.checked }))
                      }
                      className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-slate-200">Karusel slayd raqami</span>
                    <input
                      type="checkbox"
                      checked={customization.showSlideNumber}
                      onChange={(e) =>
                        setCustomization((prev) => ({ ...prev, showSlideNumber: e.target.checked }))
                      }
                      className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    />
                  </div>

                  {customization.showSlideNumber && (
                    <div className="flex items-center gap-2 pl-3">
                      <span className="text-xs text-slate-400">Raqam matni:</span>
                      <input
                        type="text"
                        value={customization.slideNumber}
                        onChange={(e) =>
                          setCustomization((prev) => ({ ...prev, slideNumber: e.target.value }))
                        }
                        className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-white w-20 text-center"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-slate-200">Mini QR kod nishoni</span>
                    <input
                      type="checkbox"
                      checked={customization.showQrCode}
                      onChange={(e) =>
                        setCustomization((prev) => ({ ...prev, showQrCode: e.target.checked }))
                      }
                      className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Footer handle & tagline */}
                <div className="space-y-3 pt-2 border-t border-slate-800">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Instagram Handle:</label>
                    <input
                      type="text"
                      value={customization.footerHandle}
                      onChange={(e) =>
                        setCustomization((prev) => ({ ...prev, footerHandle: e.target.value }))
                      }
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Pastki Shior (Tagline):</label>
                    <input
                      type="text"
                      value={customization.footerTagline}
                      onChange={(e) =>
                        setCustomization((prev) => ({ ...prev, footerTagline: e.target.value }))
                      }
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right Stage: Canvas Viewport & Zoom Controls */}
        <main
          ref={containerRef}
          className="flex-1 bg-slate-950/80 p-4 sm:p-8 flex flex-col items-center justify-center relative overflow-auto"
        >
          {/* Floating Canvas Toolbar */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 p-1.5 rounded-2xl shadow-xl">
            {/* Safe Area Guides Toggle */}
            <button
              onClick={() => setShowGuides(!showGuides)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                showGuides
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="Instagram interfeysi xavfsiz chegaralarini ko'rish"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Instagram Chegarasi</span>
            </button>

            <div className="h-4 w-[1px] bg-slate-800" />

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => {
                  setAutoFit(false);
                  setZoomScale((z) => Math.max(0.2, Number((z - 0.05).toFixed(2))));
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                title="Kichiklashtirish"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setAutoFit(true);
                  updateFitScale();
                }}
                className={`px-2 py-1 rounded-lg font-bold ${
                  autoFit ? 'text-emerald-400 bg-emerald-950/50' : 'text-slate-300'
                }`}
              >
                {Math.round(zoomScale * 100)}%
              </button>

              <button
                onClick={() => {
                  setAutoFit(false);
                  setZoomScale((z) => Math.min(1.0, Number((z + 0.05).toFixed(2))));
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                title="Kattalashtirish"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Scaled Preview Wrapper */}
          <div
            style={{
              width: `${1080 * zoomScale}px`,
              height: `${1350 * zoomScale}px`,
            }}
            className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all shrink-0 my-auto"
          >
            <div
              style={{
                width: '1080px',
                height: '1350px',
                transform: `scale(${zoomScale})`,
                transformOrigin: 'top left',
              }}
              className="absolute top-0 left-0"
            >
              <InstagramCard
                ref={cardRef}
                customization={customization}
                showGuides={showGuides}
              />
            </div>
          </div>

          {/* Footer Dimension Indicator */}
          <div className="mt-4 text-xs font-bold text-slate-500 flex items-center gap-3">
            <span>Standart: 1080 × 1350 px (4:5 Instagram Portrait)</span>
            <span>•</span>
            <span className="text-emerald-500">Tayyor nashr formati</span>
          </div>
        </main>
      </div>
    </div>
  );
}
