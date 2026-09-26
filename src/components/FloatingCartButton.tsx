import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FloatingCartButtonProps {
  itemCount: number;
  totalSum: number;
  currentLang: Language;
  onClick: () => void;
}

export const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({
  itemCount,
  totalSum,
  currentLang,
  onClick,
}) => {
  const t = translations[currentLang];

  if (itemCount === 0) return null;

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button
        onClick={onClick}
        className="flex items-center gap-3 px-5 py-3.5 rounded-sm bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] font-bold text-xs uppercase tracking-widest shadow-2xl border border-[#c4a484] active:scale-95 transition-all transform hover:-translate-y-0.5"
      >
        <div className="relative">
          <ShoppingBag className="w-4 h-4" />
          <span className="absolute -top-2.5 -right-2.5 w-4 h-4 rounded-full bg-[#1a0f0a] text-[#c4a484] text-[10px] font-bold flex items-center justify-center border border-[#c4a484]">
            {itemCount}
          </span>
        </div>

        <span>{t.checkout}</span>

        <span className="w-1 h-1 rounded-full bg-[#1a0f0a]/50" />

        <span className="font-serif-brand font-bold text-[#1a0f0a]">
          {totalSum} {t.som}
        </span>
      </button>
    </div>
  );
};
