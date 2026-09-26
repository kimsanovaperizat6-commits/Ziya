import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { CartItem, Language, OrderDetails } from '../types';
import { translations } from '../data/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentLang: Language;
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onOrderPlaced: (order: OrderDetails) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currentLang,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup' | 'dine_in'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [addressOrTable, setAddressOrTable] = useState('');
  const [notes, setNotes] = useState('');

  const t = translations[currentLang];

  if (!isOpen) return null;

  // Subtotal Calculation
  const subtotal = items.reduce((sum, item) => {
    const optionsCost = item.selectedOptions.reduce((oSum, opt) => oSum + opt.price, 0);
    return sum + (item.dish.price + optionsCost) * item.quantity;
  }, 0);

  const total = subtotal;

  const buildWhatsAppMessage = () => {
    // Generate the exact bullet list: • {qty} × {Dish Name}
    const itemsList = items
      .map((item) => {
        const dishName = item.dish.name[currentLang] || item.dish.name.ru || item.dish.name.ky;
        const optionsStr =
          item.selectedOptions.length > 0
            ? ` (+ ${item.selectedOptions.map((o) => o.name[currentLang] || o.name.ru).join(', ')})`
            : '';
        const notesStr = item.specialInstructions ? ` [${item.specialInstructions}]` : '';
        return `• ${item.quantity} × ${dishName}${optionsStr}${notesStr}`;
      })
      .join('\n');

    let greeting = 'Саламатсызбы, мен заказ берейин дедим эле:';
    let totalLabel = 'Жалпы суммасы:';
    if (currentLang === 'ru') {
      greeting = 'Здравствуйте, я хочу сделать заказ:';
      totalLabel = 'Общая сумма:';
    } else if (currentLang === 'en') {
      greeting = 'Hello, I would like to order:';
      totalLabel = 'Total:';
    }

    let extraDetails = '';
    if (orderType === 'dine_in') {
      extraDetails += `\n🍽️ ${currentLang === 'ky' ? 'Залда тамактануу' : 'В заведении'}${addressOrTable ? ` (Стол №: ${addressOrTable})` : ''}`;
    } else if (orderType === 'pickup') {
      extraDetails += `\n🛍️ ${currentLang === 'ky' ? 'Өзү алып кетүү (Самовывоз)' : 'Самовывоз'}`;
    } else if (addressOrTable.trim()) {
      extraDetails += `\n📍 ${currentLang === 'ky' ? 'Жеткирүү дареги' : 'Адрес доставки'}: ${addressOrTable.trim()}`;
    }

    if (customerName.trim()) {
      extraDetails += `\n👤 ${currentLang === 'ky' ? 'Кардар' : 'Имя'}: ${customerName.trim()}`;
    }
    if (customerPhone.trim()) {
      extraDetails += `\n📞 ${currentLang === 'ky' ? 'Телефон' : 'Телефон'}: ${customerPhone.trim()}`;
    }
    if (notes.trim()) {
      extraDetails += `\n💬 ${currentLang === 'ky' ? 'Кошумча' : 'Примечание'}: ${notes.trim()}`;
    }

    return (
      `${greeting}\n\n` +
      `${itemsList}\n\n` +
      `${totalLabel} ${total} сом${extraDetails}\n\n` +
      `ZIYA Cafe`
    );
  };

  const handleOrderViaWhatsApp = () => {
    if (items.length === 0) return;

    const message = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/996709998999?text=${encodedMessage}`;

    // Open WhatsApp directly
    window.open(waUrl, '_blank');

    // Create local record for tracker
    const newOrder: OrderDetails = {
      id: `ZY-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      customerName: customerName || 'Конок / Гость',
      customerPhone: customerPhone || '+996 ...',
      orderType: orderType === 'dine_in' ? 'pickup' : orderType,
      deliveryAddress: addressOrTable || 'ZIYA Cafe (Ахунбаева 90А)',
      deliveryTime: 'asap',
      paymentMethod: 'mbank',
      utensilsCount: 2,
      deliveryFee: 0,
      discount: 0,
      items: [...items],
      subtotal,
      total,
      status: 'received',
    };

    onOrderPlaced(newOrder);
    onClearCart();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#442f26] border-l border-[#c4a484]/30 text-[#fdf6e3] h-full flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#38251c] border-b border-[#c4a484]/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#c4a484]" />
            <h2 className="text-lg font-serif-brand font-bold text-[#fdf6e3]">
              {t.cartTitle}
            </h2>
            {items.length > 0 && (
              <span className="px-2 py-0.5 rounded-sm bg-[#4d372d] text-[#c4a484] text-xs font-bold border border-[#c4a484]/30">
                {items.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="p-1.5 text-xs text-[#fdf6e3]/50 hover:text-red-400 transition-colors"
                title="Очистить"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm bg-[#4d372d] text-[#fdf6e3]/80 hover:text-white border border-[#c4a484]/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cart Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#4d372d] flex items-center justify-center text-[#c4a484]/60 mb-3 border border-[#c4a484]/20">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-base font-serif-brand font-bold text-[#fdf6e3]">
              {t.cartEmpty}
            </h3>
            <p className="mt-1 text-xs text-[#fdf6e3]/60 max-w-xs">
              {t.cartEmptySub}
            </p>
            <button
              onClick={onClose}
              className="mt-5 px-5 py-2.5 rounded-sm bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] font-bold text-xs uppercase tracking-widest shadow-md"
            >
              {t.viewMenu}
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Items List */}
            <div className="space-y-2.5">
              {items.map((item, idx) => {
                const itemOptionsSum = item.selectedOptions.reduce((sum, o) => sum + o.price, 0);
                const itemTotal = (item.dish.price + itemOptionsSum) * item.quantity;

                return (
                  <div
                    key={`${item.dish.id}-${idx}`}
                    className="p-2.5 rounded-sm bg-[#4d372d] border border-[#c4a484]/20 flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.dish.image}
                      alt={item.dish.name[currentLang]}
                      className="w-12 h-12 rounded-sm object-cover bg-[#3e2b22] shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-brand font-bold text-xs sm:text-sm text-white truncate">
                        {item.dish.name[currentLang] || item.dish.name.ru}
                      </h4>
                      <span className="text-xs font-serif-brand font-bold text-[#c4a484] block mt-0.5">
                        {itemTotal} {t.som}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 bg-[#3e2b22] border border-[#c4a484]/30 rounded-sm p-0.5 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#fdf6e3]/80 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#fdf6e3]/80 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-[#fdf6e3]/40 hover:text-red-400 p-1 shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Quick Delivery Type Options */}
            <div className="pt-2 border-t border-[#c4a484]/15">
              <span className="block text-xs font-semibold text-[#fdf6e3]/75 uppercase tracking-wider mb-1.5">
                {currentLang === 'ky' ? 'Түрү:' : 'Тип:'}
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'delivery', label: currentLang === 'ky' ? 'Жеткирүү' : 'Доставка' },
                  { id: 'pickup', label: currentLang === 'ky' ? 'Өзү алып' : 'Самовывоз' },
                  { id: 'dine_in', label: currentLang === 'ky' ? 'Залда' : 'В заведении' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setOrderType(type.id as any)}
                    className={`py-1.5 px-2 rounded-sm text-xs font-semibold transition-all ${
                      orderType === type.id
                        ? 'bg-[#c4a484] text-[#1a0f0a] font-bold shadow'
                        : 'bg-[#4d372d] text-[#fdf6e3]/70 hover:bg-[#5a4034] border border-[#c4a484]/20'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Address / Table & Customer Details */}
            <div className="space-y-2 pt-1 text-xs">
              {orderType === 'dine_in' ? (
                <div>
                  <input
                    type="text"
                    value={addressOrTable}
                    onChange={(e) => setAddressOrTable(e.target.value)}
                    placeholder={currentLang === 'ky' ? 'Үстөл (Стол) № (мисалы: 5)' : 'Номер столика (например: 5)'}
                    className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                  />
                </div>
              ) : orderType === 'delivery' ? (
                <div>
                  <input
                    type="text"
                    value={addressOrTable}
                    onChange={(e) => setAddressOrTable(e.target.value)}
                    placeholder={currentLang === 'ky' ? 'Жеткирүү дареги (көчө, үй, батир)' : 'Адрес доставки (улица, дом)'}
                    className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                  />
                </div>
              ) : null}

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={currentLang === 'ky' ? 'Атыңыз (каалоо боюнча)' : 'Ваше имя (необязательно)'}
                  className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                />
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder={currentLang === 'ky' ? 'Телефон' : 'Телефон'}
                  className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
                />
              </div>

              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={currentLang === 'ky' ? 'Каалоо же эскертүү...' : 'Комментарий к заказу...'}
                className="w-full px-3 py-2 rounded-sm bg-[#3e2b22] border border-[#c4a484]/30 text-xs text-white placeholder-[#fdf6e3]/40 focus:outline-none focus:border-[#c4a484]"
              />
            </div>

            {/* Total Display */}
            <div className="p-3 rounded-sm bg-[#38251c] border border-[#c4a484]/25 flex items-center justify-between text-sm">
              <span className="font-semibold text-[#fdf6e3]/80">{t.total}:</span>
              <span className="text-lg font-serif-brand font-bold text-[#c4a484]">
                {total} {t.som}
              </span>
            </div>
          </div>
        )}

        {/* Footer Actions: DIRECT WHATSAPP ORDER BUTTON */}
        {items.length > 0 && (
          <div className="p-4 bg-[#38251c] border-t border-[#c4a484]/20">
            <button
              onClick={handleOrderViaWhatsApp}
              className="w-full py-3.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-[#0b1e13] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>
                {currentLang === 'ky'
                  ? `WhatsApp аркылуу заказ кылуу • ${total} ${t.som}`
                  : `Заказать через WhatsApp • ${total} ${t.som}`}
              </span>
            </button>
            <p className="text-[11px] text-[#fdf6e3]/60 text-center mt-2">
              {currentLang === 'ky'
                ? 'Тандалган бардык тамактар автоматтык түрдө WhatsAppка жазылат'
                : 'Все выбранные блюда автоматически добавятся в сообщение WhatsApp'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
