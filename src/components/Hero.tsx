import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Utensils, Calendar, MapPin, Clock, Phone, ShieldCheck, Coffee, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onExploreMenu: () => void;
  onOpenReservation: () => void;
  onStartOrder?: () => void;
}

// User-provided image from Istanbul Turkish cafe
const USER_PROVIDED_PHOTO = '467032018_17873843592217354_8051261188155646060_n.jpg';
// High-resolution authentic Istanbul Turkish cafe culinary spread as fallback
const FALLBACK_ISTANBUL_PHOTO = 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1600&q=85';

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreMenu,
  onOpenReservation,
}) => {
  const t = translations[currentLang];
  const [photoSrc, setPhotoSrc] = useState(USER_PROVIDED_PHOTO);
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#c4a484]/25 bg-[#3f2b23]">
      {/* 1. Immersive Atmospheric Backdrop with the provided photo blended in warm tones */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft background ambient layer using the photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-sm scale-105 transition-opacity duration-700"
          style={{
            backgroundImage: `url('${photoSrc}'), url('${FALLBACK_ISTANBUL_PHOTO}')`,
          }}
        />
        {/* Warm Istanbul twilight & candlelight gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#38241b] via-[#432d24]/90 to-[#38241b]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#342017]/80 via-transparent to-[#3f2b23]" />
        
        {/* Warm golden light circles simulating Turkish mosaic lamps & candles */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#c4a484]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[#d97706]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT / MAIN COLUMN: Typography, Identity, Core Actions    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Subtle Turkish Istanbul Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52392e]/80 border border-[#c4a484]/40 text-[#c4a484] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm"
            >
              <Coffee className="w-3.5 h-3.5 text-[#c4a484]" />
              <span>{t.istanbulBadge}</span>
            </motion.div>

            {/* Brand Title with Sunburst */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-3"
            >
              <BrandLogo variant="wood-badge" className="items-center lg:items-start scale-90 sm:scale-100 origin-center lg:origin-left" />
            </motion.div>

            {/* Evocative Headline communicating Istanbul + Authentic Cuisine + Premium Cafe */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif-brand font-bold text-[#fdf6e3] tracking-wide leading-tight max-w-2xl"
            >
              {t.istanbulHeroTitle}
            </motion.h1>

            {/* Poetic & inviting description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-3 text-sm sm:text-base text-[#e2d5c3] font-light leading-relaxed max-w-xl"
            >
              {t.istanbulHeroSub}
            </motion.p>

            {/* MAIN FUNCTIONS: 1. Online Menu  2. Table Reservation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              {/* Primary Function 1: Online Menu */}
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#c4a484] to-[#b39373] hover:from-[#d1b394] hover:to-[#c4a484] text-[#1c120c] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#1f130e]/40 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#1c120c]" />
                <span>{t.viewMenu}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#1c120c]/70 ml-0.5" />
              </button>

              {/* Primary Function 2: Table Reservation */}
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#4d362c] hover:bg-[#5a3f33] text-[#fdf6e3] border border-[#c4a484]/60 hover:border-[#c4a484] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#c4a484]" />
                <span>{t.bookTable}</span>
              </button>
            </motion.div>

            {/* Refined Turkish Cafe Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-6 pt-5 border-t border-[#c4a484]/20 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5 text-xs text-[#ded0bf]"
            >
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Coffee className="w-3.5 h-3.5 text-[#c4a484]" />
                {t.featureCoffeeTea}
              </span>
              <span className="text-[#c4a484]/40 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {t.featureHalalCertified}
              </span>
              <span className="text-[#c4a484]/40 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c4a484]" />
                {t.address}
              </span>
              <span className="text-[#c4a484]/40 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c4a484]" />
                {t.workingHours}
              </span>
              <span className="text-[#c4a484]/40 hidden sm:inline">•</span>
              <a
                href="tel:+996709998999"
                className="inline-flex items-center gap-1.5 text-[#c4a484] hover:text-white transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                +996 709 998 999
              </a>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: The Provided Photo Featured Centerpiece     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Warm atmospheric glow behind the frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#c4a484]/25 to-[#d97706]/20 rounded-2xl blur-xl opacity-75" />

              {/* Architectural Frame around the provided photo */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c4a484]/50 shadow-[0_20px_50px_-10px_rgba(20,10,6,0.85)] bg-[#4a342a] group">
                {/* Photo Display */}
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-[#38241b]">
                  <img
                    src={photoSrc}
                    alt="ZIYA Turkish Restaurant & Cafe Atmosphere in Istanbul"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onLoad={() => setIsPhotoLoaded(true)}
                    onError={() => {
                      if (photoSrc !== FALLBACK_ISTANBUL_PHOTO) {
                        setPhotoSrc(FALLBACK_ISTANBUL_PHOTO);
                      }
                    }}
                  />

                  {/* Gentle warm vignette & gradient overlay for seamless blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251610] via-transparent to-black/20 pointer-events-none" />

                  {/* Top Subtle Floating Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#2d1c15]/85 backdrop-blur-md border border-[#c4a484]/40 text-[#fdf6e3] text-[11px] font-semibold tracking-wider uppercase shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c4a484] animate-pulse" />
                      {t.istanbulPhotoBadge}
                    </span>
                  </div>

                  {/* Bottom Atmospheric Description Strip */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#20120b]/95 via-[#2b1911]/80 to-transparent backdrop-blur-[2px]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs sm:text-sm font-serif-brand font-bold text-[#fdf6e3] tracking-wide">
                          {t.istanbulPhotoSub}
                        </p>
                        <p className="text-[11px] text-[#c4a484]/90 mt-0.5">
                          Табигый зайтун майы • Түрк татымалдары • 100% Халал
                        </p>
                      </div>

                      {/* Quick Interactive Button to browse Menu */}
                      <button
                        onClick={onExploreMenu}
                        className="shrink-0 p-2 sm:px-3 sm:py-1.5 rounded-sm bg-[#c4a484]/90 hover:bg-[#c4a484] text-[#1c120c] text-xs font-bold transition-all shadow hover:shadow-lg flex items-center gap-1"
                        title={t.viewMenu}
                      >
                        <span className="hidden sm:inline">{t.viewMenu}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtle fine brass edge footer */}
                <div className="h-1 bg-gradient-to-r from-[#c4a484]/20 via-[#c4a484]/60 to-[#c4a484]/20" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
