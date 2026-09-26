import React, { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, Navigation, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LocationAndContactProps {
  currentLang: Language;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[currentLang];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('г. Бишкек, ул. Ахунбаева, 90А, Ресторан ZIYA');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacts" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="rounded-sm bg-[#4d372d] border border-[#c4a484]/30 p-5 sm:p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#fdf6e3]">
            {t.contactUs}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#fdf6e3]/70">
            {t.address} • {t.workingHours}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Address & Navigation */}
          <div className="p-4 rounded-sm bg-[#563d31] border border-[#c4a484]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-[#c4a484] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {currentLang === 'ky' ? 'Башкы ресторан' : 'Главный ресторан'}
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="text-[11px] text-[#fdf6e3]/60 hover:text-white flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? t.copySuccess : 'Көчүрүү'}</span>
                </button>
              </div>

              <h3 className="font-serif-brand font-bold text-base text-white">
                {t.address}
              </h3>
              <p className="text-xs text-[#fdf6e3]/65 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c4a484]" />
                {t.workingHours}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#c4a484]/15 flex items-center gap-2">
              <a
                href="https://2gis.kg/bishkek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-sm bg-[#634638] hover:bg-[#725141] text-white border border-[#c4a484]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c4a484]" />
                <span>2GIS</span>
              </a>
              <a
                href="https://yandex.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-sm bg-[#634638] hover:bg-[#725141] text-white border border-[#c4a484]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#c4a484]" />
                <span>Яндекс</span>
              </a>
            </div>
          </div>

          {/* Direct Phone & WhatsApp */}
          <div className="p-4 rounded-sm bg-[#563d31] border border-[#c4a484]/20 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#c4a484] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Phone className="w-3.5 h-3.5" />
                {currentLang === 'ky' ? 'Байланыш жана Жеткирүү' : 'Связь и Доставка'}
              </span>

              <a
                href="tel:+996709998999"
                className="font-serif-brand font-bold text-xl text-white hover:text-[#c4a484] block transition-colors"
              >
                +996 709 998 999
              </a>

              <p className="text-xs text-[#fdf6e3]/65 mt-1">
                {currentLang === 'ky'
                  ? 'Бишкек боюнча тез жеткирүү жана суроолор'
                  : 'Быстрая доставка по Бишкеку и бронь'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#c4a484]/15 flex items-center gap-2">
              <a
                href="https://wa.me/996709998999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-sm bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/40 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/ziya_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-sm bg-[#4a3428] hover:bg-[#583f31] text-white border border-[#c4a484]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-[#c4a484]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Concise Footer Info Strip: Issyk-Kul branch & Halal policy */}
        <div className="mt-4 p-3 rounded-sm bg-[#2c1d16] border border-[#c4a484]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#fdf6e3]/75">
          <span className="flex items-center gap-1.5">
            <span className="text-[#c4a484] font-semibold">Ысык-Көл филиалы:</span>
            <span>Жайкы сезон (+996 709 998 999)</span>
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Халал • Ичимдиксиз ашкана</span>
          </span>
        </div>
      </div>
    </section>
  );
};
