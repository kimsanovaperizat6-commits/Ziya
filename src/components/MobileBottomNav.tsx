import React from 'react';
import { Utensils, Search, Calendar, ShoppingBag } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MobileBottomNavProps {
  currentLang: Language;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onNavigateToMenu: () => void;
  onFocusSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentLang,
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenReservation,
  onNavigateToMenu,
  onFocusSearch,
}) => {
  const t = translations[currentLang];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#3a261e]/95 backdrop-blur-lg border-t border-[#c4a484]/30 px-3 py-1.5 shadow-[0_-6px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {/* 1. Menu Tab */}
        <button
          onClick={onNavigateToMenu}
          className="flex-1 flex flex-col items-center justify-center py-1 text-[#fdf6e3]/75 hover:text-[#c4a484] active:scale-95 transition-all"
        >
          <Utensils className="w-4 h-4 text-[#c4a484]" />
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1">
            {t.navMenu}
          </span>
        </button>

        {/* 2. Search Button */}
        <button
          onClick={onFocusSearch}
          className="flex-1 flex flex-col items-center justify-center py-1 text-[#fdf6e3]/75 hover:text-[#c4a484] active:scale-95 transition-all"
        >
          <Search className="w-4 h-4 text-[#c4a484]" />
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1">
            {t.mobileNavSearch || 'Издөө'}
          </span>
        </button>

        {/* 3. Table Reservation (Center Highlight) */}
        <button
          onClick={onOpenReservation}
          className="flex-1 flex flex-col items-center justify-center -mt-3.5 group active:scale-95 transition-transform"
        >
          <div className="w-11 h-11 rounded-full bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] flex items-center justify-center shadow-lg border-2 border-[#3a261e]">
            <Calendar className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase mt-0.5 text-[#c4a484]">
            {t.bookTable}
          </span>
        </button>

        {/* 4. Cart Tab */}
        <button
          onClick={onOpenCart}
          className="flex-1 relative flex flex-col items-center justify-center py-1 text-[#fdf6e3]/75 hover:text-[#c4a484] active:scale-95 transition-all"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-[#c4a484]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#c4a484] text-[#1a0f0a] text-[9px] font-black flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1">
            {cartCount > 0 ? `${cartTotal} с` : t.cartTitle}
          </span>
        </button>
      </div>
    </div>
  );
};
