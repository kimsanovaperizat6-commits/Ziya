import React from 'react';
import { ShoppingBag, Calendar, Utensils, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: 'menu' | 'reservation';
  onSelectView: (view: 'menu' | 'reservation') => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeView,
  onSelectView,
  cartCount,
  cartTotal,
  onOpenCart,
}) => {
  const t = translations[currentLang];

  return (
    <header className="sticky top-0 z-40 bg-[#160d08]/95 backdrop-blur-md border-b border-[#c4a484]/25 shadow-md">
      {/* Top Essential Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div
            onClick={() => onSelectView('menu')}
            className="cursor-pointer flex items-center gap-3 shrink-0"
          >
            <BrandLogo variant="header" size="sm" />
          </div>

          {/* Quick Essential Info (Hidden on small mobile, visible on sm and up) */}
          <div className="hidden lg:flex items-center gap-5 text-xs text-[#fdf6e3]/75 border-x border-[#c4a484]/20 px-5 py-1">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              10:00 – 00:00
            </span>
            <span className="text-[#c4a484]/30">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#c4a484]" />
              Ахунбаев 90А
            </span>
            <span className="text-[#c4a484]/30">•</span>
            <a
              href="tel:+996709998999"
              className="flex items-center gap-1 text-[#c4a484] font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              +996 709 998 999
            </a>
          </div>

          {/* Controls: KG/RU Switcher & Cart */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-sm bg-[#2d1b12] border border-[#c4a484]/30 shadow-inner">
              <button
                type="button"
                onClick={() => onLanguageChange('ky')}
                className={`px-2.5 py-1 rounded-sm text-xs font-bold uppercase transition-all ${
                  currentLang === 'ky'
                    ? 'bg-[#c4a484] text-[#1a0f0a] shadow'
                    : 'text-[#fdf6e3]/70 hover:text-white'
                }`}
              >
                KG
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ru')}
                className={`px-2.5 py-1 rounded-sm text-xs font-bold uppercase transition-all ${
                  currentLang === 'ru'
                    ? 'bg-[#c4a484] text-[#1a0f0a] shadow'
                    : 'text-[#fdf6e3]/70 hover:text-white'
                }`}
              >
                RU
              </button>
            </div>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] text-xs font-bold uppercase tracking-wider shadow active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#1a0f0a]" />
              <span className="hidden sm:inline">
                {cartCount > 0 ? `${cartTotal} ${t.som}` : t.cartTitle}
              </span>
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#1a0f0a] text-[#c4a484] text-[10px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* The Two Main Focus Tabs: Online Menu & Table Reservation */}
        <div className="mt-3 pt-2 border-t border-[#c4a484]/15 flex items-center justify-center gap-2">
          <button
            onClick={() => onSelectView('menu')}
            className={`flex-1 sm:flex-initial sm:px-8 py-2 rounded-sm text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all ${
              activeView === 'menu'
                ? 'bg-[#2d1b12] text-[#c4a484] border border-[#c4a484] shadow-sm'
                : 'bg-transparent text-[#fdf6e3]/70 hover:text-white border border-transparent'
            }`}
          >
            <Utensils className="w-4 h-4 text-[#c4a484]" />
            <span>{t.navMenu}</span>
          </button>

          <button
            onClick={() => onSelectView('reservation')}
            className={`flex-1 sm:flex-initial sm:px-8 py-2 rounded-sm text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all ${
              activeView === 'reservation'
                ? 'bg-[#c4a484] text-[#1a0f0a] shadow-md'
                : 'bg-[#2d1b12]/60 hover:bg-[#2d1b12] text-[#c4a484] border border-[#c4a484]/30'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{t.bookTable}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
