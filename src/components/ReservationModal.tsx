import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar as CalendarIcon, Clock, Users, CheckCircle2, Send, Sparkles, MapPin } from 'lucide-react';
import { Language, TableReservation } from '../types';
import { translations } from '../data/translations';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
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
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<TableReservation | null>(null);

  const t = translations[currentLang];
  const timeSlots = ['11:00', '12:30', '14:00', '16:00', '18:00', '19:00', '20:00', '21:30'];

  if (!isOpen) return null;

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
    if (specialRequests.trim()) {
      msg += `• ${currentLang === 'ky' ? 'Каалоо' : 'Пожелание'}: ${specialRequests.trim()}\n`;
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
      specialRequests: specialRequests.trim() || undefined,
      status: 'confirmed',
    };

    setConfirmedBooking(booking);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#25D366', '#c4a484', '#d97706', '#ffffff'],
      });
    } catch {}

    // Open WhatsApp directly with prefilled reservation message
    const waText = encodeURIComponent(buildWhatsAppMessage(bookingId));
    window.open(`https://wa.me/996709998999?text=${waText}`, '_blank');
  };

  const handleReset = () => {
    setIsSuccess(false);
    setConfirmedBooking(null);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-[#442f26] border border-[#c4a484]/40 rounded-sm shadow-2xl overflow-hidden text-[#fdf6e3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#c4a484]/20 flex items-center justify-between bg-[#38251c]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#4d372d] border border-[#c4a484]/40 flex items-center justify-center text-[#c4a484]">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-brand font-bold text-base text-[#fdf6e3]">
                {t.reservationTitle}
              </h3>
              <p className="text-[11px] text-[#c4a484]">
                ZIYA Cafe • Бишкек, Ахунбаев көч., 90А
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#4d372d] hover:bg-[#5a4034] text-[#fdf6e3]/70 hover:text-white border border-[#c4a484]/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 space-y-4 flex-1">
          {isSuccess && confirmedBooking ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#1b3a26] border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-sm bg-[#4d372d] border border-[#c4a484]/40 text-xs font-bold uppercase tracking-widest text-[#c4a484]">
                  Бронь #{confirmedBooking.id}
                </span>
                <h4 className="mt-2 text-xl font-serif-brand font-bold text-[#fdf6e3]">
                  {t.bookingSuccessTitle}
                </h4>
                <p className="text-xs text-[#fdf6e3]/70 mt-1 max-w-sm mx-auto">
                  {currentLang === 'ky'
                    ? 'Бронь маалыматтары WhatsAppка жөнөтүлдү!'
                    : 'Детали бронирования успешно открыты в WhatsApp!'}
                </p>
              </div>

              {/* Receipt details */}
              <div className="p-4 rounded-sm bg-[#3e2b22] border border-[#c4a484]/20 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#fdf6e3]/60">Күн жана убакыт:</span>
                  <span className="font-bold text-white">{confirmedBooking.date} / {confirmedBooking.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#fdf6e3]/60">Коноктордун саны:</span>
                  <span className="font-bold text-white">{confirmedBooking.guestsCount} {t.person}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#fdf6e3]/60">Дарек:</span>
                  <span className="font-bold text-white">Ахунбаева 90А, ZIYA</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
                <button
                  onClick={() => {
                    const waText = encodeURIComponent(buildWhatsAppMessage(confirmedBooking.id));
                    window.open(`https://wa.me/996709998999?text=${waText}`, '_blank');
                  }}
                  className="flex-1 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-[#0b1e13] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp аркылуу кайра ачуу</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-sm bg-[#4d372d] hover:bg-[#5a4034] border border-[#c4a484]/40 text-[#c4a484] font-bold text-xs uppercase tracking-wider"
                >
                  Жабуу
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Zone selector */}
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
                          : 'bg-[#4d372d] text-[#fdf6e3]/80 border border-[#c4a484]/20'
                      }`}
                    >
                      {z.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                    {t.selectDate}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-[#fdf6e3] focus:outline-none focus:border-[#c4a484]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                    {t.guestsCount}
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
                            : 'bg-[#4d372d] text-[#fdf6e3]/80 border border-[#c4a484]/20'
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
                          : 'bg-[#4d372d] text-[#fdf6e3]/70 border border-[#c4a484]/20 hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                    {t.yourName}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={currentLang === 'ky' ? 'Мисалы: Айбек (каалоо боюнча)' : 'Например: Айбек (необязательно)'}
                    className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-[#fdf6e3] placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#fdf6e3]/80 mb-1">
                    {t.yourPhone}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+996 709 998 999"
                    className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-[#fdf6e3] placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <input
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder={currentLang === 'ky' ? 'Каалоо-тилектер (мисалы: терезе жанынан)...' : 'Пожелания (например: у окна)...'}
                  className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-[#fdf6e3] placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                />
              </div>

              {/* Direct WhatsApp Reservation Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReserveTable}
                  className="w-full py-3.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-[#0b1e13] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
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
                    ? 'Тандалган дата, убакыт жана коноктор автоматтык түрдө WhatsApp билдирүүсүнө жазылат'
                    : 'Выбранная дата, время и гости автоматически подставятся в WhatsApp'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
