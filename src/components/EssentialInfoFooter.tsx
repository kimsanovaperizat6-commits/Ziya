import React, { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, Send, Check, Copy, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface EssentialInfoFooterProps {
  currentLang: Language;
  onOpenReservation: () => void;
}

export const EssentialInfoFooter: React.FC<EssentialInfoFooterProps> = ({
  currentLang,
  onOpenReservation,
}) => {
  const [copied, setCopied] = useState(false);
  const t = translations[currentLang];

  const handleCopy = () => {
    navigator.clipboard.writeText('г. Бишкек, ул. Ахунбаева, 90А, ZIYA Cafe');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#120a06] border-t border-[#c4a484]/20 pt-8 pb-20 md:pb-10 text-[#fdf6e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-[#c4a484]/15">
          {/* 1. Branches & Addresses */}
          <div className="p-4 rounded-sm bg-[#1a0f0a] border border-[#c4a484]/20">
            <div className="flex items-center gap-2 text-xs font-bold text-[#c4a484] uppercase tracking-wider mb-2.5">
              <MapPin className="w-4 h-4" />
              <span>Даректер жана филиалдар</span>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-bold text-white">🏛️ Бишкек (Башкы кафе):</p>
                <p className="text-[#fdf6e3]/75">Ахунбаев көчөсү, 90А</p>
              </div>
              <div>
                <p className="font-bold text-white">🏖️ Ысык-Көл (Сезондук филиал):</p>
                <p className="text-[#fdf6e3]/75">Сары-Ой айылы, «Радуга» пансионаты, Нурдөөлөт 90а/1</p>
              </div>
              <button
                onClick={handleCopy}
                className="mt-2 text-[11px] text-[#c4a484] hover:text-white font-semibold flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t.copySuccess : 'Бишкек дарегин көчүрүү'}</span>
              </button>
            </div>
          </div>

          {/* 2. Working hours & Halal Policy */}
          <div className="p-4 rounded-sm bg-[#1a0f0a] border border-[#c4a484]/20">
            <div className="flex items-center gap-2 text-xs font-bold text-[#c4a484] uppercase tracking-wider mb-2.5">
              <Clock className="w-4 h-4" />
              <span>Иштөө тартиби жана Эреже</span>
            </div>
            <div className="space-y-2 text-xs text-[#fdf6e3]/75">
              <p className="flex items-center gap-2 text-white font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                10:00 – 00:00 (Күн сайын)
              </p>
              <div className="flex items-start gap-1.5 text-[11px] text-[#c4a484] pt-1">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#c4a484]" />
                <p>100% Халал. Кафеде алкоголдук ичимдиктер сатылбайт жана алып кирүүгө тыюу салынат.</p>
              </div>
              <p className="text-[10px] text-[#fdf6e3]/50">
                Сураныч, аллергияңыз бар болсо официантка алдын ала эскертиңиз.
              </p>
            </div>
          </div>

          {/* 3. Phone, Instagram, WhatsApp */}
          <div className="p-4 rounded-sm bg-[#1a0f0a] border border-[#c4a484]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#c4a484] uppercase tracking-wider mb-2.5">
                <Phone className="w-4 h-4" />
                <span>Байланыш жана Заказ</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <p className="flex justify-between items-center">
                  <span className="text-[#fdf6e3]/70">Бишкек:</span>
                  <a href="tel:+996709998999" className="font-serif-brand font-bold text-[#c4a484] hover:underline">
                    +996 709 998 999
                  </a>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-[#fdf6e3]/70">Ысык-Көл:</span>
                  <a href="tel:+996509777773" className="font-serif-brand font-bold text-[#c4a484] hover:underline">
                    +996 509 777 773
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-3 flex gap-2">
              <a
                href="https://www.instagram.com/ziya_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-sm bg-[#24150e] hover:bg-[#341d13] border border-[#c4a484]/30 text-center text-xs text-[#c4a484] font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/996709998999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-sm bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/50 text-center text-xs text-emerald-300 font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#fdf6e3]/50 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} ZIYA Cafe • Түрк кафеси Бишкек. Бардык укуктар корголгон.</p>
          <button
            onClick={onOpenReservation}
            className="text-xs text-[#c4a484] hover:underline font-bold"
          >
            Стол брондоо →
          </button>
        </div>
      </div>
    </footer>
  );
};
