'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface UserAvatarProps {
  name?: string;
  photoUrl?: string;
  telegramUsername?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
}

// Served from /public (source artwork lives in /content/profile.png)
const DEFAULT_AVATAR = '/profile.png';

const sizeStyles = {
  xs: {
    container: 'w-6 h-6 rounded-lg text-[10px]',
    icon: 'w-2 h-2',
    badge: '-bottom-0.5 -right-0.5 p-0.5 rounded-full',
  },
  sm: {
    container: 'w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs',
    icon: 'w-2.5 h-2.5',
    badge: '-bottom-1 -right-1 p-0.5 rounded-md',
  },
  md: {
    container: 'w-10 h-10 sm:w-12 sm:h-12 rounded-2xl text-sm',
    icon: 'w-3 h-3',
    badge: '-bottom-1 -right-1 p-1 rounded-lg',
  },
  lg: {
    container: 'w-16 h-16 sm:w-20 sm:h-20 rounded-2xl text-xl',
    icon: 'w-4 h-4',
    badge: '-bottom-1.5 -right-1.5 p-1 rounded-xl',
  },
  xl: {
    container: 'w-20 h-20 sm:w-24 sm:h-24 rounded-3xl text-2xl',
    icon: 'w-5 h-5',
    badge: '-bottom-2 -right-2 p-1.5 rounded-xl',
  },
};

export default function UserAvatar({
  name = 'Ota-ona',
  photoUrl,
  telegramUsername,
  size = 'md',
  className = '',
  showBadge = true,
}: UserAvatarProps) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);

  const styles = sizeStyles[size] || sizeStyles.md;

  const cleanName = name.replace(/^@/, '').trim() || 'Farzandly';
  const isTelegramUser = Boolean(telegramUsername || name.startsWith('@'));
  const src = photoUrl && photoUrl !== failedUrl ? photoUrl : DEFAULT_AVATAR;

  return (
    <div className={`relative shrink-0 select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={cleanName}
        title={cleanName}
        width={96}
        height={96}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => {
          if (photoUrl && src === photoUrl) setFailedUrl(photoUrl);
        }}
        className={`${styles.container} object-cover border-2 border-emerald-400/80 shadow-sm bg-slate-200`}
      />

      {/* Verified Telegram Badge */}
      {showBadge && isTelegramUser && (
        <div
          className={`absolute ${styles.badge} bg-[#229ED9] text-white shadow-md border border-white flex items-center justify-center`}
          title="Telegram tasdiqlangan profil"
        >
          <Send className={`${styles.icon} -rotate-12 translate-x-0.2`} />
        </div>
      )}
    </div>
  );
}
