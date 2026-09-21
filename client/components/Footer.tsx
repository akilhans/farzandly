'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, CheckCircle2, ShieldCheck, BookOpen, Compass } from 'lucide-react';
import { START_LESSON_HREF } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto border-t-4 border-emerald-600">
      {/* Top trust band */}
      <div className="border-b border-slate-800 py-8 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100">Islomiy manbalar</p>
                <p className="text-xs text-slate-400">Sunnat va hikmatlar</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100">Ilmiy asoslangan</p>
                <p className="text-xs text-slate-400">Psixologlar tavsiyasi</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100">Amaliy yondashuv</p>
                <p className="text-xs text-slate-400">Kunlik 5 daqiqalik odat</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100">O‘zbek oilalari uchun</p>
                <p className="text-xs text-slate-400">Milliy va madaniy muhit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo-white.png"
                alt="Farzandly"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Farzand tarbiyasi — har kuni o‘rganiladigan yo‘l. Islomiy qadriyatlar va zamonaviy bolalar psixologiyasini birlashtirgan o‘zbekcha ta’lim maydoni.
            </p>
            <div className="pt-2">
              <Link
                href={START_LESSON_HREF}
                className="btn-primary text-sm px-5 py-2.5 inline-flex items-center gap-2"
              >
                <span>Tarbiyani boshlash</span>
                <Compass className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-bold text-slate-200 text-base mb-3">O‘rganish</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                  O‘quv yo‘lim
                </Link>
              </li>
              <li>
                <Link href="/darslar" className="hover:text-emerald-400 transition-colors">
                  Barcha darslar
                </Link>
              </li>
              <li>
                <Link href="/maqolalar" className="hover:text-emerald-400 transition-colors">
                  Foydali maqolalar
                </Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-amber-400 transition-colors">
                  Farzandly Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular articles */}
          <div>
            <p className="font-bold text-slate-200 text-base mb-3">Dolzarb mavzular</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/maqolalar/bolani-urmasdan-tarbiyalash" className="hover:text-emerald-400 transition-colors">
                  Urmasdan tarbiyalash
                </Link>
              </li>
              <li>
                <Link href="/maqolalar/bola-gapga-quloq-solmasa" className="hover:text-emerald-400 transition-colors">
                  Bola gapga quloq solmasa
                </Link>
              </li>
              <li>
                <Link href="/maqolalar/bola-telefonni-tashlamasa" className="hover:text-emerald-400 transition-colors">
                  Telefon va ekran vaqti
                </Link>
              </li>
              <li>
                <Link href="/maqolalar/3-yoshli-bola-tarbiyasi" className="hover:text-emerald-400 transition-colors">
                  3 yosh inqirozi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Farzandly. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            O‘zbekistondagi yosh oilalar uchun mehr bilan yaratildi <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
