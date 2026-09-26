import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'breakfast',
    iconName: 'Coffee',
    name: {
      ky: 'Таңкы тамактар',
      ru: 'Завтраки',
      en: 'Breakfasts',
    },
    description: {
      ky: '1, 2 жана 4 адамга эртең мененки сеттер, Менемен, жумуртка жана Чылбыр',
      ru: 'Сеты на 1, 2 и 4 персоны, Менемен, яичница с суджуком и Чылбыр',
      en: 'Breakfast sets for 1, 2 and 4 persons, Menemen and Cilbir',
    },
  },
  {
    id: 'soups',
    iconName: 'Soup',
    name: {
      ky: 'Шорполор',
      ru: 'Супы',
      en: 'Soups',
    },
    description: {
      ky: 'Эзогелин, Мержимек, Келе пача, Бейран жана салттуу ысык шорполор',
      ru: 'Эзогелин, Мерджимек, Келле пача, Бейран и суп с рулькой',
      en: 'Traditional hot soups: Ezogelin, Mercimek, Beyran',
    },
  },
  {
    id: 'cold_starters',
    iconName: 'Sparkles',
    name: {
      ky: 'Закускалар',
      ru: 'Закуски',
      en: 'Mezes & Starters',
    },
    description: {
      ky: 'Сыр табак, Хайдари, Эзме, Япрак сарма, Атом, Хумус, Мутабаль',
      ru: 'Сырная тарелка, Хайдари, Эзме, Япрак сарма, Атом, Хумус, Мутабаль',
      en: 'Cold appetizers and authentic Turkish mezes',
    },
  },
  {
    id: 'salads',
    iconName: 'Salad',
    name: {
      ky: 'Салаттар',
      ru: 'Салаты',
      en: 'Salads',
    },
    description: {
      ky: 'Цезарь, Гавурда, Кашык, Мангал салат, Чобан, Панжар, Грек салаты',
      ru: 'Цезарь, Гавурда, Кашык, Мангал салат, Чобан, Панжар, Греческий',
      en: 'Fresh Aegean salads and Turkish specialties',
    },
  },
  {
    id: 'hot_starters',
    iconName: 'Flame',
    name: {
      ky: 'Ысык закускалар',
      ru: 'Горячие закуски',
      en: 'Hot Appetizers',
    },
    description: {
      ky: 'Сигара борек, Хамси, Карышык тост, Кыймалы жана Пейнирли гозлеме',
      ru: 'Сигара борек, Хамси, Карышык тост, Кыймалы и Пейнирли гёзлеме',
      en: 'Crispy Sigara borek, Hamsi fish, and stuffed Gozleme',
    },
  },
  {
    id: 'kids',
    iconName: 'Sparkles',
    name: {
      ky: 'Балдар тандоосу',
      ru: 'Детское меню',
      en: 'Kids Menu',
    },
    description: {
      ky: 'Тоок жана балык наггетсы, мини-лахмаджун, мини-бургер, кичине корейка',
      ru: 'Куриные и рыбные наггетсы, мини-лахмаджун, мини-бургер, корейка',
      en: 'Kids favorites: Nuggets, mini-burgers, and mild dishes',
    },
  },
  {
    id: 'pide',
    iconName: 'Utensils',
    name: {
      ky: 'Пиде жана Лахмаджун',
      ru: 'Пиде и Лахмаджун',
      en: 'Pide & Lahmacun',
    },
    description: {
      ky: 'Тоок, кашар, майдаланган эт, кавурмалы, кыймалы пиде жана лахмаджун',
      ru: 'Пиде с курицей, кашар, с рубленым мясом, кавурмалы, ассорти и лахмаджун',
      en: 'Wood-fired oven boat pides and crispy lahmacun',
    },
  },
  {
    id: 'doner',
    iconName: 'Flame',
    name: {
      ky: 'Донер',
      ru: 'Донер',
      en: 'Doner',
    },
    description: {
      ky: 'Табак донер, Искендер донер, Дурум донер, Томбик донер',
      ru: 'Табак донер, Искендер донер, Дурум донер, Томбик донер',
      en: 'Juicy Turkish doner plates, wraps, and Iskender',
    },
  },
  {
    id: 'mangal',
    iconName: 'Flame',
    name: {
      ky: 'Мангал (Кебабтар)',
      ru: 'Мангал (Кебабы)',
      en: 'Mangal & Kebabs',
    },
    description: {
      ky: 'Адана, Урфа, Бейти, шишкебек, канатчалар, локум жана пирзола',
      ru: 'Адана, Урфа, Бейти ZIYA, шашлыки, крылышки, локум, пирзола',
      en: 'Charcoal grilled kebabs, shashliks, and cutlets',
    },
  },
  {
    id: 'hot_dishes',
    iconName: 'Utensils',
    name: {
      ky: 'Ысык тамактар',
      ru: 'Горячие блюда',
      en: 'Hot Dishes',
    },
    description: {
      ky: 'Сач кавурма, стейктер, балыктар (дорадо, сибас, лосось), гувеч, бургер',
      ru: 'Сач кавурма, стейки рибай и ти-бон, дорадо, сибас, лосось, гувеч',
      en: 'Sizzling pan dishes, steaks, grilled fish, and burgers',
    },
  },
  {
    id: 'company',
    iconName: 'Award',
    name: {
      ky: 'Компанияга тамак',
      ru: 'Блюда на компанию',
      en: 'Platters for Groups',
    },
    description: {
      ky: 'Метр адана, Пиде ZIYA, Метр ассорти жана 4 адамга кебаб-ассорти',
      ru: 'Метр адана, Пиде ZIYA, Метр ассорти кебаб и кебаб-ассорти на 4 персоны',
      en: 'Grand 1-meter kebabs and sharing feasts for groups',
    },
  },
  {
    id: 'sides',
    iconName: 'Utensils',
    name: {
      ky: 'Гарнирлер',
      ru: 'Гарниры',
      en: 'Side Dishes',
    },
    description: {
      ky: 'Булгур, фри, күрүч, айылдыкча картөшкө, грилде жашылча',
      ru: 'Булгур с овощами, фри, рис, картофель по-деревенски, овощи на гриле',
      en: 'Bulgur, rice, French fries, and grilled vegetables',
    },
  },
  {
    id: 'desserts',
    iconName: 'Cake',
    name: {
      ky: 'Десерттер',
      ru: 'Десерты',
      en: 'Desserts',
    },
    description: {
      ky: 'Хавуч, Фыстыклы сарма, Озель, Бюль бюль, Баклава, Трилече, Соук баклава',
      ru: 'Хавуч, Фыстыклы сарма, Озель, Бюль бюль, Баклава, Трилече, Соук баклава',
      en: 'Authentic Antep baklava, carrot slice, and Trilece',
    },
  },
  {
    id: 'bakery',
    iconName: 'Utensils',
    name: {
      ky: 'Токочтор',
      ru: 'Выпечка',
      en: 'Bakery & Bread',
    },
    description: {
      ky: 'Балон лаваш, Түрк нан, Лаваш',
      ru: 'Балон лаваш, Турецкий хлеб, Лаваш',
      en: 'Freshly baked balloon bread, Turkish flatbread, and lavash',
    },
  },
  {
    id: 'tea_coffee',
    iconName: 'Coffee',
    name: {
      ky: 'Чай жана Кофе',
      ru: 'Чай и Кофе',
      en: 'Tea & Coffee',
    },
    description: {
      ky: 'Чайлар (Ташкенттик, Мароккандык, Түрк), Автордук чайлар, Кофе, Милкшейктер',
      ru: 'Ташкентский, турецкий, авторские чаи, эспрессо, капучино, милкшейки',
      en: 'Turkish tea, specialty teas, coffee, and milkshakes',
    },
  },
  {
    id: 'drinks',
    iconName: 'CupSoda',
    name: {
      ky: 'Суусундуктар',
      ru: 'Напитки',
      en: 'Drinks & Lemonades',
    },
    description: {
      ky: 'Айран, Түрк лимонады, Шербет, Свежевыжатые соки, Фирмалык коктейлдер, Смузи',
      ru: 'Айран, турецкий лимонад, шербет, свежевыжатые соки, моктейли, смузи',
      en: 'Ayran, Turkish lemonade, mocktails, and fresh juices',
    },
  },
];
