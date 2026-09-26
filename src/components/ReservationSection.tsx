import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar as CalendarIcon, Clock, Users, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { Language, TableReservation } from '../types';
import { translations } from '../data/translations';

interface ReservationSectionProps {
  currentLang: Language;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:00');
  const [guestsCount, setGuestsCount] = useState(2);
  const [zone, setZone] = useState<'main_hall' | 'terrace' | 'vip_lounge'>('main_hall');
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<TableReservation | null>(null);

  const t = translations[currentLang];

  const timeSlots = ['11:00', '12:30', '14:00', '16:00', '18:00', '19:00', '20:00', '21:30'];

  const buildWhatsAppMessage = (bookingId: string) => {
    const zoneLabel =
      zone === 'main_hall' ? t.zoneMain : zone === 'terrace' ? t.zoneTerrace : t.zoneVip;

    let greeting = 'Саламатсызбы! Мен ZIYA ресторанынан стол брондойун дедим эле:';
    let dateLabel = 'Күнү';
    let timeLabel = 'Убактысы';
    let guestsLabel = 'Коноктор';
    let zoneTitle = 'Залдын аймагы';
    let personLabel = 'киши';

    if (currentLang === 'ru') {
      greeting = 'Здравствуйте! Я хочу забронировать столик в ZIYA:';
      dateLabel = 'Дата';
      timeLabel = 'Время';
      guestsLabel = 'Гости';
      zoneTitle = 'Зона зала';
      personLabel = 'чел.';
    } else if (currentLang === 'en') {
      greeting = 'Hello! I would like to reserve a table at ZIYA Cafe:';
      dateLabel = 'Date';
      timeLabel = 'Time';
      guestsLabel = 'Guests';
      zoneTitle = 'Seating Area';
      personLabel = 'persons';
    }

    let msg = `${greeting}\n\n`;
    msg += `• ${dateLabel}: ${date}\n`;
    msg += `• ${timeLabel}: ${time}\n`;
    msg += `• ${guestsLabel}: ${guestsCount} ${personLabel}\n`;
    msg += `• ${zoneTitle}: ${zoneLabel}\n`;

    if (name.trim()) {
      msg += `• ${currentLang === 'ky' ? 'Аты-жөнү' : 'Имя'}: ${name.trim()}\n`;
    }
    if (phone.trim()) {
      msg += `• ${currentLang === 'ky' ? 'Телефон' : 'Телефон'}: ${phone.trim()}\n`;
    }

    msg += `\nZIYA Cafe`;
    return msg;
  };

  const handleReserveTable = () => {
    const bookingId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;

    const booking: TableReservation = {
      id: bookingId,
      createdAt: new Date().toLocaleTimeString(),
      name: name || 'Конок / Гость',
      phone: phone || '+996 ...',
      date,
      time,
      guestsCount,
      zone,
      status: 'confirmed',
    };

    setConfirmedBooking(booking);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#25D366', '#c4a484', '#d97706', '#ffffff'],
      });
    } catch (e) {}

    // Automatically open WhatsApp with pre-filled details
    const waText = encodeURIComponent(buildWhatsAppMessage(bookingId));
    window.open(`https://wa.me/996709998999?text=${waText}`, '_blank');
  };

  return (
    <section id="reservation" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="rounded-sm bg-[#4d372d] border border-[#c4a484]/30 p-5 sm:p-8 shadow-xl">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5a4034] border border-[#c4a484]/30 text-[#c4a484] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'ky' ? 'Тез брондоо' : 'Бронирование'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#fdf6e3]">
            {t.reservationTitle}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#fdf6e3]/70">
            {t.address} • {t.workingHours}
          </p>
        </div>

        {isSuccess && confirmedBooking ? (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-[#1b3a26] border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="px-2.5 py-0.5 rounded-sm bg-[#5a4034] border border-[#c4a484]/40 text-xs font-bold uppercase tracking-wider text-[#c4a484]">
              Бронь № #{confirmedBooking.id}
            </span>
            <h3 className="mt-2 text-xl font-serif-brand font-bold text-[#fdf6e3]">
              {t.bookingSuccessTitle}
            </h3>
            <p className="mt-1 text-xs text-[#fdf6e3]/70">
              {currentLang === 'ky'
                ? 'Бронь маалыматтары WhatsAppка жөнөтүлдү!'
                : 'Детали бронирования открыты в WhatsApp!'}
            </p>

            <div className="mt-4 p-4 rounded-sm bg-[#3e2b22] border border-[#c4a484]/20 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-[#fdf6e3]/60">Күн жана Убакыт:</span>
                <span className="font-serif-brand font-bold text-[#c4a484]">{confirmedBooking.date} / {confirmedBooking.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#fdf6e3]/60">Коноктор:</span>
                <span className="font-semibold text-white">{confirmedBooking.guestsCount} {t.person}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#fdf6e3]/60">Дарек:</span>
                <span className="font-semibold text-white">Ахунбаева 90А, ZIYA</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  const waText = encodeURIComponent(buildWhatsAppMessage(confirmedBooking.id));
                  window.open(`https://wa.me/996709998999?text=${waText}`, '_blank');
                }}
                className="py-2.5 px-5 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-[#0b1e13] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow"
              >
                <Send className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp аркылуу кайра ачуу</span>
              </button>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setName('');
                  setPhone('');
                }}
                className="py-2.5 px-4 rounded-sm bg-[#5a4034] text-[#fdf6e3]/80 hover:text-white border border-[#c4a484]/20 text-xs font-semibold"
              >
                Жаңы бронь
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Zone Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#fdf6e3]/80 uppercase tracking-wider mb-1.5">
                {t.zoneSelect}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'main_hall', label: t.zoneMain },
                  { id: 'terrace', label: t.zoneTerrace },
                  { id: 'vip_lounge', label: t.zoneVip },
                ].map((z) => (
                  <button
                    key={z.id}
                    type="button"
                    onClick={() => setZone(z.id as any)}
                    className={`py-2 px-2 rounded-sm text-xs font-semibold text-center transition-all ${
                      zone === z.id
                        ? 'bg-[#c4a484] text-[#1a0f0a] font-bold shadow'
                        : 'bg-[#5a4034] hover:bg-[#684b3d] text-[#fdf6e3]/80 border border-[#c4a484]/20'
                    }`}
                  >
                    {z.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Guests Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 uppercase tracking-wider mb-1">
                  {t.reservationDate}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white focus:outline-none focus:border-[#c4a484]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 uppercase tracking-wider mb-1">
                  {t.guests}
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestsCount(num)}
                      className={`flex-1 py-2 rounded-sm text-xs font-semibold transition-all ${
                        guestsCount === num
                          ? 'bg-[#c4a484] text-[#1a0f0a] font-bold'
                          : 'bg-[#5a4034] text-[#fdf6e3]/80 border border-[#c4a484]/20'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-xs font-semibold text-[#fdf6e3]/80 uppercase tracking-wider mb-1.5">
                {t.reservationTime}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`py-1.5 rounded-sm text-xs font-semibold transition-all ${
                      time === slot
                        ? 'bg-[#c4a484] text-[#1a0f0a] font-bold'
                        : 'bg-[#5a4034] text-[#fdf6e3]/70 border border-[#c4a484]/20 hover:text-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 uppercase tracking-wider mb-1">
                  {t.yourName}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={currentLang === 'ky' ? 'Мисалы: Азамат (каалоо боюнча)' : 'Например: Азамат (необязательно)'}
                  className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#fdf6e3]/80 uppercase tracking-wider mb-1">
                  {t.yourPhone}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+996 709 998 999"
                  className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                />
              </div>
            </div>

            {/* Direct WhatsApp Reservation Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={handleReserveTable}
                className="w-full py-3.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-[#0b1e13] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl active:scale-95"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>
                  {currentLang === 'ky'
                    ? 'WhatsApp аркылуу стол брондоо'
                    : 'Забронировать столик через WhatsApp'}
                </span>
              </button>
              <p className="text-[11px] text-[#fdf6e3]/60 text-center mt-2">
                {currentLang === 'ky'
                  ? 'Басканда тандалган дата, убакыт жана коноктордун саны WhatsAppка дароо жазылат'
                  : 'При нажатии дата, время и количество гостей автоматически добавятся в WhatsApp'}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
