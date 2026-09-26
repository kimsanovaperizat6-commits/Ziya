import React from 'react';

interface BrandLogoProps {
  variant?: 'wood-badge' | 'header' | 'footer' | 'minimal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
  size = 'md',
}) => {
  // Sunburst icon accurately inspired by the engraved wooden centerpiece
  const SunburstIcon = ({ className: iconClass = 'w-10 h-6' }: { className?: string }) => (
    <svg
      viewBox="0 0 120 60"
      fill="currentColor"
      className={iconClass}
      aria-hidden="true"
    >
      {/* Central semicircle sun */}
      <path d="M 46,54 A 14,14 0 0,1 74,54 Z" />
      {/* Radiating sun rays */}
      {/* Left to right fanning rays */}
      <line x1="22" y1="54" x2="10" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="46" x2="13" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="31" y1="38" x2="20" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="31" x2="30" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="26" x2="42" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="56" y1="23" x2="55" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="22" x2="60" y2="4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="64" y1="23" x2="65" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="73" y1="26" x2="78" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="31" x2="90" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="89" y1="38" x2="100" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="94" y1="46" x2="107" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="98" y1="54" x2="110" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Base baseline accent line */}
      <line x1="20" y1="56" x2="100" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );

  if (variant === 'wood-badge') {
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
        {/* Sunburst Icon */}
        <div className="text-[#c4a484] drop-shadow-[0_2px_10px_rgba(196,164,132,0.4)] mb-3">
          <SunburstIcon className="w-20 h-10 sm:w-24 sm:h-12" />
        </div>

        {/* ZIYA Brand Name in Latin Letters */}
        <span className="text-5xl sm:text-6xl md:text-7xl font-serif-brand font-extrabold tracking-[0.25em] text-[#fdf6e3] pl-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          ZIYA
        </span>

        {/* Subtitle */}
        <div className="flex items-center gap-3 mt-3 text-[#c4a484] text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold">
          <span className="w-8 h-[1px] bg-[#c4a484]/60" />
          <span>TURKISH RESTAURANT</span>
          <span className="w-8 h-[1px] bg-[#c4a484]/60" />
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <div className="text-[#c4a484]">
          <SunburstIcon className="w-7 h-4" />
        </div>
        <span className="text-xl font-serif-brand font-bold tracking-[0.2em] text-[#fdf6e3]">
          ZIYA
        </span>
      </div>
    );
  }

  // Header & Default
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none group cursor-pointer ${className}`}>
      <div className="text-[#c4a484] group-hover:text-[#e4caa8] transition-colors drop-shadow-[0_2px_6px_rgba(196,164,132,0.35)]">
        <SunburstIcon className={size === 'sm' ? 'w-8 h-4' : size === 'lg' ? 'w-14 h-7' : 'w-10 h-5'} />
      </div>
      <div className="flex items-baseline">
        <span className={`font-serif-brand font-extrabold tracking-[0.22em] text-[#fdf6e3] group-hover:text-white transition-colors ${sizeClasses}`}>
          ZIYA
        </span>
      </div>
      <div className="flex items-center gap-1.5 -mt-0.5">
        <span className="w-2 h-[1px] bg-[#c4a484]/50" />
        <span className="text-[9px] tracking-[0.3em] text-[#c4a484] font-medium uppercase">
          TURKISH RESTAURANT
        </span>
        <span className="w-2 h-[1px] bg-[#c4a484]/50" />
      </div>
    </div>
  );
};
