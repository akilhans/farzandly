'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

/** Shown once when an old (unsigned) or expired session was dropped. */
export default function SessionExpiredBanner() {
  const { sessionExpired, dismissSessionExpired, isAuthenticated } = useAuth();
  if (!sessionExpired || isAuthenticated) return null;
  return (
    <div role="status" className="bg-amber-50 border-b-2 border-amber-300 text-amber-950">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3 text-sm">
        <p>
          Xavfsizlik yangilandi — iltimos, qaytadan kiring. Progressingiz saqlangan.{' '}
          <Link href="/kirish" onClick={dismissSessionExpired} className="font-black underline">
            Kirish
          </Link>
        </p>
        <button type="button" onClick={dismissSessionExpired} aria-label="Yopish" className="p-1 rounded-lg hover:bg-amber-100">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
