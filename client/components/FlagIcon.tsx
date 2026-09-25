import React from 'react';

interface FlagIconProps {
  country: 'uz' | 'en' | 'ru';
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

  if (country === 'uz') {
    return (
      <span className={baseStyle} title="O‘zbekiston">
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

  if (country === 'en') {
    return (
      <span className={baseStyle} title="English / United Kingdom">
        <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
          <clipPath id="uk-clip">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <g clipPath="url(#uk-clip)">
            {/* Blue Background */}
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            {/* White Diagonal Saltires */}
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
            {/* Red Diagonal Saltires */}
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
            {/* White Cross */}
            <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
            {/* Red St George Cross */}
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      </span>
    );
  }

  // Russian Federation
  return (
    <span className={baseStyle} title="Русский / Россия">
      <svg viewBox="0 0 300 200" className="w-full h-full object-cover">
        {/* White Top */}
        <rect width="300" height="66.67" fill="#FFFFFF" />
        {/* Blue Middle */}
        <rect y="66.67" width="300" height="66.67" fill="#0039A6" />
        {/* Red Bottom */}
        <rect y="133.34" width="300" height="66.67" fill="#D52B1E" />
      </svg>
    </span>
  );
}

export default FlagIcon;
