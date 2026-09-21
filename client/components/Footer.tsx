'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, CheckCircle2, ShieldCheck, BookOpen, Compass, Baby } from 'lucide-react';
import { START_LESSON_HREF } from '@/lib/site';
import { T } from '@/components/T';

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
                <p className="font-bold text-sm text-slate-100"><T k="footer.1" /></p>
                <p className="text-xs text-slate-400"><T k="footer.2" /></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100"><T k="footer.3" /></p>
                <p className="text-xs text-slate-400"><T k="footer.4" /></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100"><T k="footer.5" /></p>
                <p className="text-xs text-slate-400"><T k="footer.6" /></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100"><T k="footer.7" /></p>
                <p className="text-xs text-slate-400"><T k="footer.8" /></p>
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
              <T k="footer.9" />
            </p>
            <div className="pt-2">
              <Link
                href={START_LESSON_HREF}
                className="btn-primary text-sm px-5 py-2.5 inline-flex items-center gap-2"
              >
                <span><T k="footer.10" /></span>
                <Compass className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-bold text-slate-200 text-base mb-3"><T k="footer.11" /></p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                  <T k="footer.12" />
                </Link>
              </li>
              <li>
                <Link href="/darslar" className="hover:text-emerald-400 transition-colors">
                  <T k="footer.13" />
                </Link>
              </li>
              <li>
                <Link href="/maqolalar" className="hover:text-emerald-400 transition-colors">
                  <T k="footer.14" />
                </Link>
              </li>
              <li>
                <Link href="/bolalar" className="hover:text-emerald-400 font-bold transition-colors inline-flex items-center gap-1.5 text-emerald-400">
                  <Baby className="w-3.5 h-3.5" />
                  <span>Bolalar olami (Ertak & She’rlar)</span>
                </Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-amber-400 transition-colors">
                  <T k="footer.15" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Bolalar olami & Topishmoqlar */}
          <div>
            <p className="font-bold text-slate-200 text-base mb-3">Bolalar uchun</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/bolalar?tab=ertaklar" className="hover:text-emerald-400 transition-colors">
                  10 ta sara ibratli ertak
                </Link>
              </li>
              <li>
                <Link href="/bolalar?tab=sherlar" className="hover:text-emerald-400 transition-colors">
                  Fasllar va maktab she’rlari
                </Link>
              </li>
              <li>
                <Link href="/bolalar?tab=topishmoqlar" className="hover:text-emerald-400 transition-colors">
                  Hayvonlar haqida topishmoqlar
                </Link>
              </li>
              <li>
                <Link href="/maqolalar/bolani-urmasdan-tarbiyalash" className="hover:text-emerald-400 transition-colors">
                  <T k="footer.17" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} <T k="footer.21" /></p>
          <p className="flex items-center gap-1">
            <T k="footer.22" />{" "}<Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
