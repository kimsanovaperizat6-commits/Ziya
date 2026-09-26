import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send, Phone, Clock, MapPin, Sparkles, ChefHat, Bike, PackageCheck, X } from 'lucide-react';
import { Language, OrderDetails } from '../types';
import { translations } from '../data/translations';

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  currentLang: Language;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  currentLang,
  onClose,
}) => {
  const t = translations[currentLang];

  useEffect(() => {
    if (order) {
      // Fire festive warm confetti celebration
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c27847', '#d97706', '#f59e0b', '#fbbf24', '#ffffff'],
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [order]);

  if (!order) return null;

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Саламатсызбы! Мен ZIYA ресторанынан заказ бердим #${order.id}. Заказдын статусун билгим келет.`
    );
    window.open(`https://wa.me/996709998999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#442f26] border border-[#c4a484]/40 rounded-2xl shadow-2xl overflow-hidden text-[#f5efe6] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#4d372d] text-[#c4a484] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 flex items-center justify-center mb-3 shadow-lg shadow-emerald-900/30">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="px-3 py-0.5 rounded-full bg-[#4d372d] border border-[#c4a484]/30 text-xs font-bold text-[#c4a484] mb-2">
            {t.orderId}: #{order.id}
          </span>

          <h2 className="text-2xl font-serif-brand font-bold text-[#faf0e6]">
            {t.orderSuccessTitle}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#fdf6e3]/75 max-w-sm">
            {t.orderSuccessSub}
          </p>
        </div>

        {/* Live Status Tracker Simulation */}
        <div className="mt-6 p-4 rounded-xl bg-[#3e2b22] border border-[#c4a484]/20">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#c4a484] block mb-3">
            {t.trackStatus}
          </span>
          <div className="grid grid-cols-4 gap-1 text-center relative">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1 text-xs shadow-md">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-emerald-400">{t.statusReceived}</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#c27847] text-white flex items-center justify-center mb-1 text-xs shadow-md animate-pulse">
                <ChefHat className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#e89c62]">{t.statusPreparing}</span>
            </div>

            <div className="flex flex-col items-center opacity-40">
              <div className="w-8 h-8 rounded-full bg-[#4d372d] text-[#c4a484] flex items-center justify-center mb-1 text-xs">
                <Bike className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-[#fdf6e3]/60">{t.statusOnWay}</span>
            </div>

            <div className="flex flex-col items-center opacity-40">
              <div className="w-8 h-8 rounded-full bg-[#4d372d] text-[#c4a484] flex items-center justify-center mb-1 text-xs">
                <PackageCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-[#fdf6e3]/60">{t.statusDelivered}</span>
            </div>
          </div>
        </div>

        {/* Receipt summary */}
        <div className="mt-4 p-4 rounded-xl bg-[#4d372d] border border-[#c4a484]/20 space-y-2 text-xs">
          <div className="flex justify-between text-[#fdf6e3]/80">
            <span>Кардар / Телефон:</span>
            <span className="font-bold text-white">{order.customerName} ({order.customerPhone})</span>
          </div>
          <div className="flex justify-between text-[#fdf6e3]/80">
            <span>Дарек:</span>
            <span className="font-medium text-white truncate max-w-[200px]">{order.deliveryAddress}</span>
          </div>
          <div className="flex justify-between text-[#fdf6e3]/80">
            <span>Төлөм түрү:</span>
            <span className="font-bold text-[#c4a484] uppercase">{order.paymentMethod}</span>
          </div>
          <div className="pt-2 border-t border-[#c4a484]/20 flex justify-between text-sm font-extrabold text-[#faede1]">
            <span>Жалпы сумма:</span>
            <span className="text-[#c4a484]">{order.total} {t.som}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={handleOpenWhatsApp}
            className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#0b1e13] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>WhatsApp чат</span>
          </button>

          <a
            href="tel:+996709998999"
            className="py-3 px-4 rounded-xl bg-[#4d372d] hover:bg-[#5a4034] border border-[#c4a484]/30 text-[#fdf6e3] font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-[#c4a484]" />
            <span>Чалуу (Ресторан)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
