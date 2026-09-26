import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Sparkles,
  Flame,
  Plus,
  Check,
  Leaf,
  Award,
  Coffee,
  Utensils,
  Soup,
  Salad,
  Cake,
  CupSoda,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Layers,
  X,
} from 'lucide-react';
import { categories, dishes } from '../data/menuData';
import { DishItem, Language } from '../types';
import { translations } from '../data/translations';

interface MenuCatalogProps {
  currentLang: Language;
  onSelectDish: (dish: DishItem) => void;
  onQuickAddToCart: (dish: DishItem) => void;
  searchRef?: React.RefObject<HTMLInputElement | null>;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({
  currentLang,
  onSelectDish,
  onQuickAddToCart,
  searchRef,
}) => {
  // Default to first category so user never gets overwhelmed by 100+ items
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'popular' | 'chef' | 'spicy' | 'veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});
  const t = translations[currentLang];

  const internalSearchRef = useRef<HTMLInputElement | null>(null);
  const effectiveSearchRef = searchRef || internalSearchRef;

  const handleQuickAdd = (e: React.MouseEvent, dish: DishItem) => {
    e.stopPropagation();
    onQuickAddToCart(dish);
    setAddedItemIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 900);
  };

  // Category Icon helper
  const renderCategoryIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'Coffee': return <Coffee className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Utensils': return <Utensils className={className} />;
      case 'Soup': return <Soup className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Salad': return <Salad className={className} />;
      case 'Cake': return <Cake className={className} />;
      case 'CupSoda': return <CupSoda className={className} />;
      case 'Award': return <Award className={className} />;
      default: return <Utensils className={className} />;
    }
  };

  // Current category calculation
  const currentCategoryIndex = categories.findIndex((c) => c.id === selectedCategory);
  const activeCategory = categories[currentCategoryIndex] || categories[0];
  const prevCategory = currentCategoryIndex > 0 ? categories[currentCategoryIndex - 1] : null;
  const nextCategory = currentCategoryIndex < categories.length - 1 ? categories[currentCategoryIndex + 1] : null;

  const handleSwitchCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setIsCategoryModalOpen(false);
    const menuEl = document.getElementById('menu-dishes-grid');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filtered dishes calculation
  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      // Global search if query is provided
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch =
          dish.name[currentLang]?.toLowerCase().includes(q) ||
          dish.name.ky.toLowerCase().includes(q) ||
          dish.name.ru.toLowerCase().includes(q);
        const descMatch =
          dish.description[currentLang]?.toLowerCase().includes(q) ||
          dish.description.ky.toLowerCase().includes(q) ||
          dish.description.ru.toLowerCase().includes(q);
        return nameMatch || descMatch;
      }

      // Strictly filter by chosen category
      if (dish.categoryId !== selectedCategory) {
        return false;
      }

      // Tag filters
      if (selectedFilter === 'popular' && !dish.isPopular) return false;
      if (selectedFilter === 'chef' && !dish.isChefSpecial) return false;
      if (selectedFilter === 'spicy' && !dish.isSpicy) return false;
      if (selectedFilter === 'veg' && !dish.isVegetarian) return false;

      return true;
    });
  }, [selectedCategory, selectedFilter, searchQuery, currentLang]);

  return (
    <section id="menu" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Sticky / Compact Top Navigation Bar for Categories */}
      <div className="sticky top-[64px] z-30 bg-[#3e2b22]/95 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 border-b border-[#c4a484]/25 shadow-md">
        <div className="flex items-center gap-2 max-w-7xl mx-auto">
          {/* Quick Category Grid Modal Button */}
          <button
            onClick={() => setIsCategoryModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#4d372d] hover:bg-[#5a4034] text-[#c4a484] border border-[#c4a484]/40 text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95"
            title={currentLang === 'ky' ? 'Бардык бөлүмдөр' : 'Все категории'}
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">{currentLang === 'ky' ? 'Бөлүмдөр' : 'Категории'}</span>
          </button>

          {/* Horizontal Category Scroll Tabs */}
          <div className="flex-1 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = !searchQuery && selectedCategory === cat.id;
              const count = dishes.filter((d) => d.categoryId === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleSwitchCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#c4a484] text-[#1a0f0a] font-bold shadow-md ring-1 ring-[#c4a484]'
                      : 'bg-[#4d372d]/80 hover:bg-[#5a4034] text-[#fdf6e3]/85 border border-[#c4a484]/20 hover:text-white'
                  }`}
                >
                  {renderCategoryIcon(cat.iconName, `w-3.5 h-3.5 ${isActive ? 'text-[#1a0f0a]' : 'text-[#c4a484]'}`)}
                  <span>{cat.name[currentLang]}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#1a0f0a] text-[#c4a484]' : 'bg-[#38251c] text-[#c4a484]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search & View Controls Bar */}
      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c4a484]" />
          <input
            ref={effectiveSearchRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-9 py-2 rounded-sm bg-[#4d372d] border border-[#c4a484]/30 text-sm text-[#fdf6e3] placeholder-[#fdf6e3]/45 focus:outline-none focus:border-[#c4a484] focus:ring-1 focus:ring-[#c4a484] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#fdf6e3]/50 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Dietary Filter Buttons & View Mode */}
        <div className="flex items-center justify-between sm:justify-end gap-2 overflow-x-auto pb-1 scrollbar-none">
          {!searchQuery && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-2.5 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-[#c4a484] text-[#1a0f0a]'
                    : 'bg-[#4d372d] text-[#fdf6e3]/75 hover:bg-[#5a4034] border border-[#c4a484]/20'
                }`}
              >
                {t.filterAll}
              </button>
              <button
                onClick={() => setSelectedFilter('popular')}
                className={`px-2.5 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider whitespace-nowrap flex items-center gap-1 transition-all ${
                  selectedFilter === 'popular'
                    ? 'bg-[#c4a484] text-[#1a0f0a]'
                    : 'bg-[#4d372d] text-[#fdf6e3]/75 hover:bg-[#5a4034] border border-[#c4a484]/20'
                }`}
              >
                <Award className="w-3 h-3 text-[#c4a484]" />
                {t.filterPopular}
              </button>
              <button
                onClick={() => setSelectedFilter('chef')}
                className={`px-2.5 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider whitespace-nowrap flex items-center gap-1 transition-all ${
                  selectedFilter === 'chef'
                    ? 'bg-[#c4a484] text-[#1a0f0a]'
                    : 'bg-[#4d372d] text-[#fdf6e3]/75 hover:bg-[#5a4034] border border-[#c4a484]/20'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#c4a484]" />
                {t.filterChef}
              </button>
            </div>
          )}

          {/* View mode toggle (Grid vs List) */}
          <div className="flex items-center p-0.5 rounded-sm bg-[#4a3429] border border-[#c4a484]/30 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-sm transition-all ${
                viewMode === 'grid' ? 'bg-[#c4a484] text-[#1a0f0a]' : 'text-[#fdf6e3]/60 hover:text-white'
              }`}
              title="Grid View"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-sm transition-all ${
                viewMode === 'list' ? 'bg-[#c4a484] text-[#1a0f0a]' : 'text-[#fdf6e3]/60 hover:text-white'
              }`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Category Header Strip */}
      <div id="menu-dishes-grid" className="mt-5 mb-5">
        {searchQuery ? (
          <div className="p-3 sm:p-4 rounded-sm bg-[#36241b] border border-[#c4a484]/30 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#c4a484] uppercase tracking-wider font-semibold">Издөө жыйынтыгы:</span>
              <h3 className="text-base sm:text-lg font-bold text-white">«{searchQuery}»</h3>
            </div>
            <span className="px-3 py-1 rounded-sm bg-[#c4a484] text-[#1a0f0a] text-xs font-bold">
              {filteredDishes.length} тамак
            </span>
          </div>
        ) : (
          <div className="p-3.5 sm:p-4 rounded-sm bg-[#36241b] border border-[#c4a484]/25 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#442f24] border border-[#c4a484]/30 flex items-center justify-center text-[#c4a484] shrink-0">
                {renderCategoryIcon(activeCategory.iconName, 'w-5 h-5')}
              </div>
              <div>
                <h3 className="font-serif-brand font-bold text-lg sm:text-xl text-[#fdf6e3]">
                  {activeCategory.name[currentLang]}
                </h3>
                <p className="text-xs text-[#c4a484] line-clamp-1">
                  {activeCategory.description[currentLang]}
                </p>
              </div>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-[#442f24] border border-[#c4a484]/30 text-xs font-semibold text-[#c4a484] shrink-0">
              {filteredDishes.length}
            </span>
          </div>
        )}
      </div>

      {/* Dishes Display */}
      {filteredDishes.length === 0 ? (
        <div className="text-center py-12 bg-[#1a0f0a]/60 rounded-sm border border-[#c4a484]/20 p-6">
          <Utensils className="w-8 h-8 text-[#c4a484]/60 mx-auto mb-2" />
          <h3 className="text-base font-serif-brand font-bold text-[#fdf6e3]">
            Тамак табылган жок
          </h3>
          <p className="text-xs text-[#fdf6e3]/60 mt-1">
            Издөө сөзүн же чыпканы өзгөртүп көрүңүз
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="mt-3 px-4 py-1.5 rounded-sm bg-[#c4a484] text-xs uppercase tracking-widest text-[#1a0f0a] font-bold"
          >
            Бардыгын көрүү
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => {
              const isAdded = addedItemIds[dish.id];

              return (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => onSelectDish(dish)}
                  className="group relative bg-[#4d372d] rounded-sm border border-[#c4a484]/25 hover:border-[#c4a484]/60 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  {/* Dish Thumbnail */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#3e2b22]">
                    <img
                      src={dish.image}
                      alt={dish.name[currentLang]}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4d372d] via-transparent to-black/20" />

                    {/* Tag Badges */}
                    <div className="absolute top-1.5 left-1.5 flex flex-col gap-1 z-10">
                      {dish.isChefSpecial && (
                        <span className="px-1.5 py-0.5 rounded-sm bg-[#38251c]/90 border border-[#c4a484]/50 text-[#c4a484] text-[9px] font-bold uppercase tracking-wider shadow">
                          ★ Шеф
                        </span>
                      )}
                      {dish.isPopular && !dish.isChefSpecial && (
                        <span className="px-1.5 py-0.5 rounded-sm bg-[#38251c]/90 border border-[#c4a484]/50 text-[#c4a484] text-[9px] font-bold uppercase tracking-wider shadow">
                          Хит
                        </span>
                      )}
                      {dish.isSpicy && (
                        <span className="px-1.5 py-0.5 rounded-sm bg-red-950/90 border border-red-500/50 text-red-200 text-[9px] font-bold uppercase tracking-wider shadow">
                          Ачуу
                        </span>
                      )}
                    </div>

                    {/* Weight badge */}
                    {dish.weight && (
                      <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-sm bg-[#38251c]/90 text-[10px] text-[#fdf6e3]/75 font-medium">
                        {dish.weight}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif-brand font-bold text-sm sm:text-base text-[#fdf6e3] group-hover:text-[#c4a484] transition-colors line-clamp-1">
                        {dish.name[currentLang]}
                      </h4>
                      <p className="mt-0.5 text-[11px] sm:text-xs text-[#fdf6e3]/65 line-clamp-2 leading-tight">
                        {dish.description[currentLang]}
                      </p>
                    </div>

                    {/* Price and Add CTA */}
                    <div className="mt-2.5 pt-2 border-t border-[#c4a484]/15 flex items-center justify-between">
                      <span className="text-sm sm:text-base font-serif-brand font-bold text-[#c4a484]">
                        {dish.price} {t.som}
                      </span>

                      <button
                        onClick={(e) => handleQuickAdd(e, dish)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-sm font-semibold text-xs flex items-center justify-center transition-all ${
                          isAdded
                            ? 'bg-[#c4a484] text-[#1a0f0a] scale-105'
                            : 'bg-[#5a4034] hover:bg-[#c4a484] text-[#c4a484] hover:text-[#1a0f0a] border border-[#c4a484]/40 active:scale-95'
                        }`}
                        title={t.addToCart}
                      >
                        {isAdded ? (
                          <Check className="w-3.5 h-3.5 text-[#1a0f0a]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        /* List View */
        <div className="space-y-2.5">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => {
              const isAdded = addedItemIds[dish.id];

              return (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => onSelectDish(dish)}
                  className="group bg-[#4d372d] rounded-sm border border-[#c4a484]/25 hover:border-[#c4a484]/50 p-2.5 sm:p-3 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={dish.image}
                      alt={dish.name[currentLang]}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm object-cover bg-[#3e2b22] shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif-brand font-bold text-sm sm:text-base text-[#fdf6e3] group-hover:text-[#c4a484] transition-colors truncate">
                          {dish.name[currentLang]}
                        </h4>
                        {dish.weight && (
                          <span className="text-[10px] text-[#fdf6e3]/50 shrink-0">
                            ({dish.weight})
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#fdf6e3]/60 line-clamp-1 mt-0.5">
                        {dish.description[currentLang]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm sm:text-base font-serif-brand font-bold text-[#c4a484]">
                      {dish.price} {t.som}
                    </span>
                    <button
                      onClick={(e) => handleQuickAdd(e, dish)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-sm font-semibold flex items-center justify-center transition-all ${
                        isAdded
                          ? 'bg-[#c4a484] text-[#1a0f0a]'
                          : 'bg-[#442f24] hover:bg-[#c4a484] text-[#c4a484] hover:text-[#1a0f0a] border border-[#c4a484]/40'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Bottom Category Pager Navigation */}
      {!searchQuery && (
        <div className="mt-8 p-3 sm:p-4 rounded-sm bg-[#4d372d] border border-[#c4a484]/25 flex items-center justify-between gap-3 shadow-md">
          {prevCategory ? (
            <button
              onClick={() => handleSwitchCategory(prevCategory.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#5a4034] hover:bg-[#684b3d] text-[#c4a484] text-xs font-bold uppercase tracking-wider border border-[#c4a484]/30 transition-all"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>← {prevCategory.name[currentLang]}</span>
            </button>
          ) : (
            <div />
          )}

          <span className="text-xs text-[#fdf6e3]/60 uppercase tracking-widest hidden sm:inline">
            {currentCategoryIndex + 1} / {categories.length}
          </span>

          {nextCategory ? (
            <button
              onClick={() => handleSwitchCategory(nextCategory.id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#c4a484] hover:bg-[#b39373] text-[#1a0f0a] text-xs font-bold uppercase tracking-widest shadow transition-all"
            >
              <span>{nextCategory.name[currentLang]} →</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div />
          )}
        </div>
      )}

      {/* Quick Jump Category Modal */}
      {isCategoryModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsCategoryModalOpen(false)}
        >
          <div
            className="bg-[#442f26] border border-[#c4a484]/40 rounded-sm w-full max-w-lg p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#c4a484]/20 mb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c4a484]" />
                <h3 className="font-serif-brand font-bold text-base text-white">
                  {currentLang === 'ky' ? 'Бөлүмдү тандаңыз' : 'Выберите категорию'}
                </h3>
              </div>
              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="text-[#fdf6e3]/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto pr-1">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count = dishes.filter((d) => d.categoryId === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSwitchCategory(cat.id)}
                    className={`flex items-center justify-between p-2.5 rounded-sm text-left transition-all ${
                      isSelected
                        ? 'bg-[#c4a484] text-[#1a0f0a] font-bold'
                        : 'bg-[#4d372d] hover:bg-[#5a4034] text-[#fdf6e3] border border-[#c4a484]/20'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {renderCategoryIcon(
                        cat.iconName,
                        `w-4 h-4 shrink-0 ${isSelected ? 'text-[#1a0f0a]' : 'text-[#c4a484]'}`
                      )}
                      <span className="text-xs truncate">{cat.name[currentLang]}</span>
                    </div>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${
                        isSelected ? 'bg-[#1a0f0a] text-[#c4a484]' : 'bg-[#38251c] text-[#c4a484]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
