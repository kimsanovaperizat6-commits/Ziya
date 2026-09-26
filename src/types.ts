export type Language = 'ky' | 'ru';

export interface DishOption {
  id: string;
  name: {
    ky: string;
    ru: string;
    en: string;
  };
  price: number;
}

export interface DishItem {
  id: string;
  categoryId: string;
  name: {
    ky: string;
    ru: string;
    en: string;
  };
  description: {
    ky: string;
    ru: string;
    en: string;
  };
  price: number;
  image: string;
  weight?: string;
  calories?: number;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  options?: DishOption[];
}

export interface Category {
  id: string;
  iconName: string;
  name: {
    ky: string;
    ru: string;
    en: string;
  };
  description: {
    ky: string;
    ru: string;
    en: string;
  };
}

export interface CartItem {
  dish: DishItem;
  quantity: number;
  selectedOptions: DishOption[];
  specialInstructions?: string;
}

export type OrderType = 'delivery' | 'pickup';

export type PaymentMethod = 'mbank' | 'optima' | 'demir' | 'cash' | 'card_terminal';

export interface OrderDetails {
  id: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  orderType: OrderType;
  deliveryAddress?: string;
  apartment?: string;
  intercom?: string;
  deliveryTime: string;
  paymentMethod: PaymentMethod;
  utensilsCount: number;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  status: 'received' | 'preparing' | 'on_the_way' | 'delivered';
}

export interface TableReservation {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guestsCount: number;
  zone: 'main_hall' | 'terrace' | 'vip_lounge';
  occasion?: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
}
