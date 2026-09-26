import React, { useState } from 'react';
import { X, Plus, Minus, Flame, Sparkles, ShoppingBag, Check, ShieldCheck, Send } from 'lucide-react';
import { DishItem, DishOption, Language } from '../types';
import { translations } from '../data/translations';

interface DishDetailModalProps {
  dish: DishItem | null;
  currentLang: Language;
  onClose: () => void;
  onAddToCart: (dish: DishItem, quantity: number, options: DishOption[], instructions?: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  currentLang,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<DishOption[]>([]);
  const [notes, setNotes] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const t = translations[currentLang];

  if (!dish) return null;

  const toggleOption = (option: DishOption) => {
    if (selectedOptions.some((o) => o.id === option.id)) {
      setSelectedOptions(selectedOptions.filter((o) => o.id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const optionsTotalPrice = selectedOptions.reduce((sum, opt) => sum + opt.price, 0);
  const currentTotal = (dish.price + optionsTotalPrice) * quantity;

  const handleAdd = () => {
    onAddToCart(dish, quantity, selectedOptions, notes.trim() || undefined);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 500);
  };

  const handleDirectWhatsAppOrder = () => {
    const dishName = dish.name[currentLang] || dish.name.ru || dish.name.ky;
    const optionsStr =
      selectedOptions.length > 0
        ? ` (+ ${selectedOptions.map((o) => o.name[currentLang] || o.name.ru).join(', ')})`
        : '';
    const notesStr = notes.trim() ? ` [${notes.trim()}]` : '';

    let greeting = 'Саламатсызбы, мен заказ берейин дедим эле:';
    let totalLabel = 'Жалпы суммасы:';
    if (currentLang === 'ru') {
      greeting = 'Здравствуйте, я хочу сделать заказ:';
      totalLabel = 'Общая сумма:';
    } else if (currentLang === 'en') {
      greeting = 'Hello, I would like to order:';
      totalLabel = 'Total:';
    }

    const message =
      `${greeting}\n\n` +
      `• ${quantity} × ${dishName}${optionsStr}${notesStr}\n\n` +
      `${totalLabel} ${currentTotal} сом\n\n` +
      `ZIYA Cafe`;

    window.open(`https://wa.me/996709998999?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] flex flex-col bg-[#442f26] border border-[#c4a484]/40 rounded-sm shadow-2xl overflow-hidden text-[#fdf6e3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-sm bg-[#38251c]/90 text-[#fdf6e3] hover:text-[#c4a484] border border-[#c4a484]/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Dish Image Header */}
          <div className="relative h-60 sm:h-68 w-full bg-[#3e2b22] overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name[currentLang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#442f26] via-transparent to-black/30" />

            {/* Badges */}
            <div className="absolute bottom-3.5 left-3.5 flex flex-wrap gap-2">
              {dish.isChefSpecial && (
                <span className="px-2 py-0.5 rounded-sm bg-[#38251c]/90 border border-[#c4a484]/60 text-[#c4a484] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                  <Sparkles className="w-3 h-3 text-[#c4a484]" />
                  {t.filterChef}
                </span>
              )}
              {dish.isSpicy && (
                <span className="px-2 py-0.5 rounded-sm bg-red-950/90 border border-red-500/50 text-red-200 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                  <Flame className="w-3 h-3 text-red-400" />
                  {t.filterSpicy}
                </span>
              )}
              <span className="px-2 py-0.5 rounded-sm bg-[#38251c]/90 text-[#c4a484] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-[#c4a484]/40 shadow">
                <ShieldCheck className="w-3 h-3 text-[#c4a484]" />
                100% Halal
              </span>
            </div>
          </div>

          {/* Dish Content Body */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#fdf6e3]">
                  {dish.name[currentLang]}
                </h2>
                <div className="flex items-center gap-2 mt-1 text-xs text-[#fdf6e3]/60">
                  {dish.weight && <span>{dish.weight}</span>}
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xl font-serif-brand font-bold text-[#c4a484]">
                  {dish.price} {t.som}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm text-[#fdf6e3]/80 leading-relaxed font-normal">
              {dish.description[currentLang]}
            </p>

            {/* Custom Options / Add-ons if available */}
            {dish.options && dish.options.length > 0 && (
              <div className="mt-5 pt-4 border-t border-[#c4a484]/20">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#c4a484] mb-2.5">
                  {t.customization}
                </h3>
                <div className="space-y-2">
                  {dish.options.map((option) => {
                    const isSelected = selectedOptions.some((o) => o.id === option.id);
                    return (
                      <label
                        key={option.id}
                        onClick={() => toggleOption(option)}
                        className={`flex items-center justify-between p-2.5 rounded-sm border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#4d372d] border-[#c4a484] text-[#fdf6e3]'
                            : 'bg-[#3e2b22] border-[#c4a484]/25 text-[#fdf6e3]/80 hover:bg-[#4d372d]/70'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
                              isSelected
                                ? 'bg-[#c4a484] border-[#c4a484] text-[#1a0f0a]'
                                : 'border-[#c4a484]/40'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-medium">{option.name[currentLang]}</span>
                        </div>
                        <span className="text-xs font-serif-brand font-bold text-[#c4a484]">
                          +{option.price} {t.som}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="mt-4 pt-4 border-t border-[#c4a484]/20">
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={currentLang === 'ky' ? 'Ашпозчуга эскертүү (мисалы: пиязсыз)...' : 'Пожелания повару (например: без лука)...'}
                className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-[#fdf6e3] placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#38251c] border-t border-[#c4a484]/20 space-y-2">
          <div className="flex items-center gap-3">
            {/* Quantity Stepper */}
            <div className="flex items-center bg-[#4d372d] border border-[#c4a484]/30 rounded-sm p-0.5 shrink-0">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="w-8 h-8 rounded-sm flex items-center justify-center text-[#fdf6e3]/70 hover:bg-[#38251c] disabled:opacity-30 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-7 text-center font-bold text-xs text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-sm flex items-center justify-center text-[#fdf6e3]/70 hover:bg-[#38251c] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`flex-1 py-3 px-4 rounded-sm font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow ${
                isAdded
                  ? 'bg-emerald-800 text-white'
                  : 'bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] active:scale-95'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>{t.addedToCart}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#1a0f0a]" />
                  <span>
                    {t.addToCart} • {currentTotal} {t.som}
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Direct WhatsApp Order for this item */}
          <button
            onClick={handleDirectWhatsAppOrder}
            className="w-full py-2.5 px-3 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-[#0b1e13] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5 fill-current" />
            <span>
              {currentLang === 'ky'
                ? `WhatsApp аркылуу дароо заказ кылуу (${quantity} × ${currentTotal} с)`
                : `Заказать через WhatsApp (${quantity} × ${currentTotal} с)`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
