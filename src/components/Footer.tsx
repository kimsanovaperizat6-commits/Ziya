import React from 'react';
import { Instagram, Send, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigateToSection }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#38251c] border-t border-[#c4a484]/25 text-[#fdf6e3]/70 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <BrandLogo variant="header" size="sm" />
          <span className="text-xs text-[#fdf6e3]/60 hidden sm:inline">•</span>
          <span className="text-xs text-[#fdf6e3]/70">{t.address}</span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
          <button
            onClick={() => onNavigateToSection('menu')}
            className="text-[#fdf6e3]/80 hover:text-[#c4a484] transition-colors"
          >
            {t.navMenu}
          </button>
          <button
            onClick={() => onNavigateToSection('reservation')}
            className="text-[#fdf6e3]/80 hover:text-[#c4a484] transition-colors"
          >
            {t.reservationTitle}
          </button>
          <button
            onClick={() => onNavigateToSection('contacts')}
            className="text-[#fdf6e3]/80 hover:text-[#c4a484] transition-colors"
          >
            {t.contactUs}
          </button>
        </div>

        {/* Direct Contacts */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href="tel:+996709998999"
            className="flex items-center gap-1.5 text-[#c4a484] hover:text-white font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+996 709 998 999</span>
          </a>
          <a
            href="https://www.instagram.com/ziya_restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fdf6e3]/70 hover:text-[#c4a484] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-[#c4a484]/10 text-center text-[11px] text-[#fdf6e3]/40">
        © {new Date().getFullYear()} ZIYA Turkish Restaurant. Бишкек ш., Ахунбаев көч., 90А. 100% Халал.
      </div>
    </footer>
  );
};
