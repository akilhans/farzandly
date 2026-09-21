'use client';

import Link from 'next/link';
import { Baby, Plus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { getActiveChild } from '@/lib/children';
import { useI18n } from '@/context/LanguageContext';

/** Quick switch between the parent's children — each has their own age group and progress. */
export default function ChildSwitcher() {
  const { user, updateUserProfile } = useAuth();
  const { t } = useI18n();
  const children = user?.children || [];
  const active = getActiveChild(user);

  if (!user) return null;

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t('child.pick')}>
      {children.map((child) => {
        const isActive = active?.id === child.id;
        return (
          <button
            key={child.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => updateUserProfile({ activeChildId: child.id, childAgeGroup: child.ageGroup })}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold border-2 transition-all cursor-pointer ${
              isActive
                ? 'bg-emerald-600 border-emerald-700 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-400'
            }`}
          >
            <Baby className="w-3.5 h-3.5" />
            <span>{child.name}</span>
            <span className={isActive ? 'text-emerald-100' : 'text-slate-400'}>{child.ageGroup}</span>
          </button>
        );
      })}
      <Link
        href="/profil"
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-2xl text-xs font-bold border-2 border-dashed border-slate-300 text-slate-500 hover:border-emerald-400 hover:text-emerald-700 transition-all"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>{children.length ? t('child.add') : t('child.setup')}</span>
      </Link>
    </div>
  );
}
