import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuCatalog } from './components/MenuCatalog';
import { ReservationSection } from './components/ReservationSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { FloatingCartButton } from './components/FloatingCartButton';
import { CartItem, DishItem, DishOption, Language, OrderDetails } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ky');
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ziya_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ziya_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  // Cart Calculations
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotalSum = cartItems.reduce((sum, item) => {
    const optionsSum = item.selectedOptions.reduce((oSum, opt) => oSum + opt.price, 0);
    return sum + (item.dish.price + optionsSum) * item.quantity;
  }, 0);

  // Cart Actions
  const handleAddToCart = (
    dish: DishItem,
    quantity: number,
    selectedOptions: DishOption[] = [],
    specialInstructions?: string
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.dish.id === dish.id &&
          item.specialInstructions === specialInstructions &&
          JSON.stringify(item.selectedOptions.map((o) => o.id).sort()) ===
            JSON.stringify(selectedOptions.map((o) => o.id).sort())
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { dish, quantity, selectedOptions, specialInstructions }];
      }
    });
  };

  const handleQuickAddToCart = (dish: DishItem) => {
    handleAddToCart(dish, 1, []);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
    } else {
      setCartItems((prev) => {
        const updated = [...prev];
        updated[index].quantity = newQty;
        return updated;
      });
    }
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderPlaced = (order: OrderDetails) => {
    setIsCartOpen(false);
    setCompletedOrder(order);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFocusSearch = () => {
    scrollToSection('menu');
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
        searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#422e25] text-[#f7f2eb] flex flex-col selection:bg-[#c27847] selection:text-white pb-14 md:pb-0">
      {/* 1. Header & Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        cartCount={cartItemCount}
        cartTotal={cartTotalSum}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationModalOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Compact, clean Intro Hero focusing on Menu & Reservation */}
        <Hero
          currentLang={currentLang}
          onExploreMenu={() => scrollToSection('menu')}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        {/* MAIN FUNCTION 1: Online Menu (Fast category browsing, search, dish cards) */}
        <MenuCatalog
          currentLang={currentLang}
          onSelectDish={(dish) => setSelectedDish(dish)}
          onQuickAddToCart={handleQuickAddToCart}
          searchRef={searchInputRef}
        />

        {/* MAIN FUNCTION 2: Table Reservation */}
        <ReservationSection currentLang={currentLang} />

        {/* Essential Info: Address, Hours, Contacts */}
        <LocationAndContact currentLang={currentLang} />
      </main>

      {/* Clean Minimal Footer */}
      <Footer currentLang={currentLang} onNavigateToSection={scrollToSection} />

      {/* Mobile Sticky Bottom Navigation (Menu, Search, Book, Cart) */}
      <MobileBottomNav
        currentLang={currentLang}
        cartCount={cartItemCount}
        cartTotal={cartTotalSum}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationModalOpen(true)}
        onNavigateToMenu={() => scrollToSection('menu')}
        onFocusSearch={handleFocusSearch}
      />

      {/* ============================================================== */}
      {/* MODALS & DRAWERS                                               */}
      {/* ============================================================== */}

      {/* 1. Fast Table Reservation Modal (1-tap booking from anywhere) */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        currentLang={currentLang}
      />

      {/* 2. Dish Detail & Customization Modal */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          currentLang={currentLang}
          onClose={() => setSelectedDish(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* 3. Cart Drawer & Checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currentLang={currentLang}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* 4. Order Placed Success Modal */}
      {completedOrder && (
        <OrderSuccessModal
          order={completedOrder}
          currentLang={currentLang}
          onClose={() => setCompletedOrder(null)}
        />
      )}

      {/* 5. Sticky Floating Cart Button (Desktop only) */}
      <FloatingCartButton
        itemCount={cartItemCount}
        totalSum={cartTotalSum}
        currentLang={currentLang}
        onClick={() => setIsCartOpen(true)}
      />
    </div>
  );
}
