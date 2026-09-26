import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Phone, Instagram } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenReservation,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#3a261e]/95 backdrop-blur-md shadow-xl border-b border-[#c4a484]/25 py-2.5'
          : 'bg-[#3a261e] border-b border-[#c4a484]/20 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-2 shrink-0"
        >
          <BrandLogo variant="header" size="sm" />
        </div>

        {/* Desktop Core Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onNavigateToSection('menu')}
            className="text-xs uppercase tracking-widest text-[#fdf6e3]/85 hover:text-[#c4a484] font-semibold transition-colors py-1"
          >
            {t.navMenu}
          </button>
          <button
            onClick={() => onNavigateToSection('reservation')}
            className="text-xs uppercase tracking-widest text-[#fdf6e3]/85 hover:text-[#c4a484] font-semibold transition-colors py-1"
          >
            {t.reservationTitle}
          </button>
          <button
            onClick={() => onNavigateToSection('contacts')}
            className="text-xs uppercase tracking-widest text-[#fdf6e3]/85 hover:text-[#c4a484] font-semibold transition-colors py-1"
          >
            {t.contactUs}
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher (KG / RU) */}
          <div className="flex items-center p-0.5 rounded-sm bg-[#4a3429] border border-[#c4a484]/30">
            <button
              type="button"
              onClick={() => onLanguageChange('ky')}
              className={`px-2 py-0.5 rounded-sm text-[11px] font-bold uppercase transition-all ${
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
              className={`px-2 py-0.5 rounded-sm text-[11px] font-bold uppercase transition-all ${
                currentLang === 'ru'
                  ? 'bg-[#c4a484] text-[#1a0f0a] shadow'
                  : 'text-[#fdf6e3]/70 hover:text-white'
              }`}
            >
              RU
            </button>
          </div>

          {/* Table Reservation Button (High Visibility Focus) */}
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#4d372d] hover:bg-[#c4a484] text-[#c4a484] hover:text-[#1a0f0a] border border-[#c4a484]/60 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.bookTable}</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] text-xs font-bold uppercase tracking-wider shadow transition-all active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#1a0f0a]" />
            <span className="hidden sm:inline">
              {cartCount > 0 ? `${cartTotal} ${t.som}` : t.cartTitle}
            </span>
            {cartCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#1a0f0a] text-[#c4a484] text-[10px] font-black flex items-center justify-center -mr-0.5">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
