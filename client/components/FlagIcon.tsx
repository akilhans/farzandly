import React from 'react';

interface FlagIconProps {
  country: 'uz' | 'kr';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function FlagIcon({ country, className = '', size = 'sm' }: FlagIconProps) {
  const sizeClasses = {
    sm: 'w-4 h-3',
    md: 'w-5 h-3.5',
    lg: 'w-6 h-4',
  }[size];

  const baseStyle = `inline-flex shrink-0 items-center justify-center rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.12)] align-middle ${sizeClasses} ${className}`;

  return (
    <span className={baseStyle} title={country === 'kr' ? 'Ўзбекча (Кирилл)' : 'O‘zbekcha (Lotin)'}>
      <svg viewBox="0 0 500 250" className="w-full h-full object-cover">
        {/* Top Blue Stripe */}
        <rect width="500" height="80" fill="#0099B5" />
        {/* Upper Red Margin */}
        <rect y="80" width="500" height="5" fill="#CE1126" />
        {/* Middle White Stripe */}
        <rect y="85" width="500" height="80" fill="#FFFFFF" />
        {/* Lower Red Margin */}
        <rect y="165" width="500" height="5" fill="#CE1126" />
        {/* Bottom Green Stripe */}
        <rect y="170" width="500" height="80" fill="#1EB53A" />

        {/* Crescent Moon */}
        <circle cx="70" cy="40" r="30" fill="#FFFFFF" />
        <circle cx="78" cy="40" r="26" fill="#0099B5" />

        {/* 12 Stars: 3 rows (3, 4, 5) */}
        {/* Row 1 (3 stars) */}
        <circle cx="150" cy="22" r="5" fill="#FFFFFF" />
        <circle cx="170" cy="22" r="5" fill="#FFFFFF" />
        <circle cx="190" cy="22" r="5" fill="#FFFFFF" />
        {/* Row 2 (4 stars) */}
        <circle cx="130" cy="40" r="5" fill="#FFFFFF" />
        <circle cx="150" cy="40" r="5" fill="#FFFFFF" />
        <circle cx="170" cy="40" r="5" fill="#FFFFFF" />
        <circle cx="190" cy="40" r="5" fill="#FFFFFF" />
        {/* Row 3 (5 stars) */}
        <circle cx="110" cy="58" r="5" fill="#FFFFFF" />
        <circle cx="130" cy="58" r="5" fill="#FFFFFF" />
        <circle cx="150" cy="58" r="5" fill="#FFFFFF" />
        <circle cx="170" cy="58" r="5" fill="#FFFFFF" />
        <circle cx="190" cy="58" r="5" fill="#FFFFFF" />
      </svg>
    </span>
  );
}
}

export default FlagIcon;
