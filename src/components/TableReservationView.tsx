import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  CheckCircle2,
  Send,
  Sparkles,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Language, TableReservation } from '../types';
import { translations } from '../data/translations';

interface TableReservationViewProps {
  currentLang: Language;
  onBackToMenu?: () => void;
}

export const TableReservationView: React.FC<TableReservationViewProps> = ({
  currentLang,
  onBackToMenu,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:00');
  const [guestsCount, setGuestsCount] = useState(2);
  const [zone, setZone] = useState<'main_hall' | 'terrace' | 'vip_lounge'>('main_hall');
  const [occasion, setOccasion] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<TableReservation | null>(null);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const t = translations[currentLang];
  const timeSlots = ['10:30', '12:00', '13:30', '15:00', '17:00', '18:30', '19:00', '20:00', '21:30', '22:30'];

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      errs.name = currentLang === 'ky' ? 'Атыңызды жазыңыз' : 'Укажите ваше имя';
    }
    if (!phone.trim() || phone.length < 8) {
      errs.phone = currentLang === 'ky' ? 'Телефон номериңизди жазыңыз' : 'Укажите номер телефона';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBook = (viaWhatsApp = false) => {
    if (!validate()) return;

    const booking: TableReservation = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toLocaleTimeString(),
      name,
      phone,
      date,
      time,
      guestsCount,
      zone,
      occasion: occasion || undefined,
      specialRequests: specialRequests.trim() || undefined,
      status: 'confirmed',
    };

    setConfirmedBooking(booking);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c4a484', '#d97706', '#f59e0b', '#ffffff'],
      });
    } catch {}

    if (viaWhatsApp) {
      const zoneLabel = zone === 'main_hall' ? t.zoneMain : zone === 'terrace' ? t.zoneTerrace : t.zoneVip;
      const text = encodeURIComponent(
        `🏛️ *СТОЛ БРОНДОО / БРОНЬ СТОЛИКА (ZIYA)*\n` +
        `🆔 Бронь: #${booking.id}\n` +
        `👤 Конок: ${name}\n` +
        `📞 Телефон: ${phone}\n` +
        `📅 Күнү: ${date}\n` +
        `⏰ Убактысы: ${time}\n` +
        `👥 Коноктордун саны: ${guestsCount} ${t.person}\n` +
        `📍 Зал: ${zoneLabel}\n` +
        (specialRequests ? `📝 Каалоо-тилек: ${specialRequests}\n` : '')
      );
      window.open(`https://wa.me/996709998999?text=${text}`, '_blank');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="bg-[#1a0f0a] border border-[#c4a484]/35 rounded-sm p-5 sm:p-8 shadow-2xl">
        {isSuccess && confirmedBooking ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#2d1b12] border border-[#c4a484] text-[#c4a484] flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-sm bg-[#2d1b12] border border-[#c4a484]/40 text-xs font-bold uppercase tracking-widest text-[#c4a484]">
                Бронь #{confirmedBooking.id}
              </span>
              <h3 className="mt-2 text-2xl font-serif-brand font-bold text-[#fdf6e3]">
                {t.bookingSuccessTitle}
              </h3>
              <p className="text-xs text-[#fdf6e3]/70 mt-1 max-w-sm mx-auto">
                {t.bookingSuccessSub}
              </p>
            </div>

            {/* Ticket Card */}
            <div className="p-4 rounded-sm bg-[#24150e] border border-[#c4a484]/30 text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between pb-2 border-b border-[#c4a484]/20">
                <span className="text-[#fdf6e3]/60">Конок / Телефон:</span>
                <span className="font-bold text-white">{confirmedBooking.name} ({confirmedBooking.phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#fdf6e3]/60">Күн жана убакыт:</span>
                <span className="font-serif-brand font-bold text-[#c4a484]">{confirmedBooking.date} / {confirmedBooking.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#fdf6e3]/60">Коноктордун саны:</span>
                <span className="font-bold text-white">{confirmedBooking.guestsCount} {t.person}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#fdf6e3]/60">Дарек:</span>
                <span className="font-bold text-white">Ахунбаев көч., 90А, Бишкек</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <a
                href={`https://wa.me/996709998999?text=${encodeURIComponent(
                  `Саламатсызбы! ZIYA столумдун номери #${confirmedBooking.id} (${confirmedBooking.name}, ${confirmedBooking.date} саат ${confirmedBooking.time}) боюнча жазып жатам.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp аркылуу текшерүү</span>
              </a>

              {onBackToMenu && (
                <button
                  onClick={onBackToMenu}
                  className="py-3 px-5 rounded-sm bg-[#2d1b12] hover:bg-[#382015] border border-[#c4a484]/40 text-[#c4a484] font-bold text-xs uppercase tracking-wider"
                >
                  Менюга кайтуу
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="border-b border-[#c4a484]/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#2d1b12] text-[#c4a484] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <CalendarIcon className="w-3 h-3" />
                  <span>{t.reservationTitle}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#fdf6e3]">
                  {t.reservationTitle}
                </h2>
                <p className="text-xs text-[#fdf6e3]/70 mt-0.5">
                  {t.reservationSubtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#c4a484] shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>Ахунбаев 90А • 10:00–00:00</span>
              </div>
            </div>

            {/* Inputs: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                  {t.namePlaceholder} <span className="text-[#c4a484]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder={currentLang === 'ky' ? 'Атыңыз' : 'Ваше имя'}
                  className={`w-full px-3.5 py-2.5 rounded-sm bg-[#24150e] border text-sm text-[#fdf6e3] placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484] ${
                    errors.name ? 'border-rose-500' : 'border-[#c4a484]/30'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                  {t.phonePlaceholder} <span className="text-[#c4a484]">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="+996 (709) 998-999"
                  className={`w-full px-3.5 py-2.5 rounded-sm bg-[#24150e] border text-sm text-[#fdf6e3] placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484] ${
                    errors.phone ? 'border-rose-500' : 'border-[#c4a484]/30'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Date & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                  {t.selectDate}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#24150e] border border-[#c4a484]/30 text-sm text-[#fdf6e3] focus:outline-none focus:border-[#c4a484]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                  {t.guestsCount}
                </label>
                <div className="flex items-center rounded-sm bg-[#24150e] border border-[#c4a484]/30">
                  <button
                    type="button"
                    onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                    className="px-4 py-2.5 text-[#c4a484] hover:bg-[#341d13] font-bold text-base"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-white">
                    {guestsCount} {t.person}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestsCount(Math.min(30, guestsCount + 1))}
                    className="px-4 py-2.5 text-[#c4a484] hover:bg-[#341d13] font-bold text-base"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Time Slot Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1.5">
                {t.selectTime}
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((ts) => (
                  <button
                    key={ts}
                    type="button"
                    onClick={() => setTime(ts)}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold transition-all ${
                      time === ts
                        ? 'bg-[#c4a484] text-[#1a0f0a] shadow'
                        : 'bg-[#24150e] hover:bg-[#2d1b12] text-[#fdf6e3]/75 border border-[#c4a484]/20'
                    }`}
                  >
                    {ts}
                  </button>
                ))}
              </div>
            </div>

            {/* Zone Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1.5">
                {t.selectZone}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setZone('main_hall')}
                  className={`p-3 rounded-sm text-left border transition-all text-xs ${
                    zone === 'main_hall'
                      ? 'border-[#c4a484] bg-[#2d1b12] shadow'
                      : 'border-[#c4a484]/20 bg-[#24150e]/60 text-[#fdf6e3]/70'
                  }`}
                >
                  <div className="font-bold text-[#fdf6e3] text-xs">Негизги зал</div>
                  <div className="text-[11px] text-[#c4a484] mt-0.5">Олив дарактары</div>
                </button>

                <button
                  type="button"
                  onClick={() => setZone('terrace')}
                  className={`p-3 rounded-sm text-left border transition-all text-xs ${
                    zone === 'terrace'
                      ? 'border-[#c4a484] bg-[#2d1b12] shadow'
                      : 'border-[#c4a484]/20 bg-[#24150e]/60 text-[#fdf6e3]/70'
                  }`}
                >
                  <div className="font-bold text-[#fdf6e3] text-xs">Ай люстралуу терраса</div>
                  <div className="text-[11px] text-[#c4a484] mt-0.5">Жарык панорама</div>
                </button>

                <button
                  type="button"
                  onClick={() => setZone('vip_lounge')}
                  className={`p-3 rounded-sm text-left border transition-all text-xs ${
                    zone === 'vip_lounge'
                      ? 'border-[#c4a484] bg-[#2d1b12] shadow'
                      : 'border-[#c4a484]/20 bg-[#24150e]/60 text-[#fdf6e3]/70'
                  }`}
                >
                  <div className="font-bold text-[#fdf6e3] text-xs">VIP Диван залы</div>
                  <div className="text-[11px] text-[#c4a484] mt-0.5">Үй-бүлө жана компания</div>
                </button>
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                {t.specialNotes}
              </label>
              <input
                type="text"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder={currentLang === 'ky' ? 'Мисалы: Терезенин жанынан же балдар отургучу' : 'Например: у окна или детский стульчик'}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#24150e] border border-[#c4a484]/30 text-xs text-[#fdf6e3] placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
              />
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleBook(false)}
                className="flex-1 py-3.5 rounded-sm bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <CalendarIcon className="w-4 h-4 text-[#1a0f0a]" />
                <span>{t.confirmBooking}</span>
              </button>

              <button
                type="button"
                onClick={() => handleBook(true)}
                className="py-3.5 px-5 rounded-sm bg-[#2d1b12] hover:bg-[#341d13] border border-[#c4a484] text-[#c4a484] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp аркылуу жөнөтүү</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
