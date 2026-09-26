import { DishItem } from '../types';

export const dishesPart3: DishItem[] = [
  // ==========================================
  // КОМПАНИЯГА ТАМАК / БЛЮДА НА КОМПАНИЮ (Pages 40-42)
  // ==========================================
  {
    id: 'comp-meter-adana',
    categoryId: 'company',
    name: {
      ky: 'Метр адана кебаб',
      ru: 'Метровая адана кебаб',
      en: '1-Meter Adana Kebab',
    },
    description: {
      ky: 'Уй этинен фарш, чыланган пияз, кызанак жана мангалдагы калемпир, хайдари жана эзме менен',
      ru: 'Говяжий фарш, маринованный лук, помидоры и перец на мангале, подается с хайдари и эзме',
      en: 'One full meter of hand-chopped spiced Adana kebab served on wooden board with salads and mezes',
    },
    price: 2200,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    isPopular: true,
  },
  {
    id: 'comp-pide-ziya',
    categoryId: 'company',
    name: {
      ky: 'Пиде ZIYA',
      ru: 'Пиде ZIYA (На компанию)',
      en: 'ZIYA Grand Pide Board',
    },
    description: {
      ky: 'Уй жана козу этинен фарш, сыр, болгар калемпири, кызанак, көк өсүмдүктөр',
      ru: 'Фарш из ягненка и говядины, сыр, болгарский перец, помидор, зелень',
      en: 'Enormous wooden board of mixed Turkish pides with lamb, beef, melting cheeses, and garden herbs',
    },
    price: 1800,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'comp-meter-assorti',
    categoryId: 'company',
    name: {
      ky: 'Метр ассорти кебаб',
      ru: 'Метровое ассорти кебаб',
      en: '1-Meter Grand Kebab Feast',
    },
    description: {
      ky: 'Адана, уй этинен шишкебек, козу этинен шишкебек, тоок этинен шишкебек, канатчалар, пейнирли кофте, чыланган пияз, кызанак жана мангалдагы калемпир, хайдари жана эзме менен',
      ru: 'Адана, шашлык из говядины, ягненка, тавук шиш, крылышки, пейнирли кофте, маринованный лук, помидоры и перец на мангале, подается с хайдари и эзме',
      en: 'Spectacular 1-meter banquet: Adana, beef, lamb, chicken skewers, wings, cheese meatballs, rice, and sides',
    },
    price: 9000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'comp-4-persons',
    categoryId: 'company',
    name: {
      ky: 'Төрт адамга кебаб-ассорти',
      ru: 'Кебаб-ассорти на четыре персоны',
      en: 'Kebab Platter for 4 Persons',
    },
    description: {
      ky: 'Адана, уй этинен шишкебек, козу этинен шишкебек, тоок этинен шишкебек, канатчалар, пейнирли кофте, чыланган пияз, кызанак жана мангалдагы калемпир, хайдари жана эзме менен',
      ru: 'Адана, шашлык из говядины, ягненка, тавук шиш, крылышки, пейнирли кофте, маринованный лук, помидоры и перец на мангале, подается с хайдари и эзме',
      en: 'Sharing platter for 4: Adana, beef, lamb, and chicken skewers, wings, cheese meatballs, and mezes',
    },
    price: 4200,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },

  // ==========================================
  // ГАРНИРЛЕР / ГАРНИРЫ (Page 43)
  // ==========================================
  {
    id: 'side-bulgur',
    categoryId: 'sides',
    name: {
      ky: 'Булгур жашылчалар менен',
      ru: 'Булгур с овощами',
      en: 'Bulgur with Vegetables',
    },
    description: {
      ky: 'Жашылчалар менен бышырылган салттуу түрк булгуру',
      ru: 'Традиционный турецкий булгур с овощами',
      en: 'Traditional coarse bulgur pilaf simmered with sweet peppers, tomato paste, and herbs',
    },
    price: 200,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'side-fries',
    categoryId: 'sides',
    name: {
      ky: 'Фри',
      ru: 'Картофель фри',
      en: 'French Fries',
    },
    description: {
      ky: 'Кытырак алтын түстөгү картөшкө фри кетчуп менен',
      ru: 'Хрустящий золотистый картофель фри с кетчупом',
      en: 'Golden crispy French fries served in mini basket with ketchup',
    },
    price: 250,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'side-rice',
    categoryId: 'sides',
    name: {
      ky: 'Күрүч',
      ru: 'Рис',
      en: 'Turkish Rice Pilaf',
    },
    description: {
      ky: 'Сары май менен бышырылган түрк күрүчү',
      ru: 'Нежный турецкий рис со сливочным маслом и вермишелью',
      en: 'Buttery Turkish pilav with toasted orzo grains',
    },
    price: 120,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'side-rustic-potatoes',
    categoryId: 'sides',
    name: {
      ky: 'Айылдыкча картөшкө',
      ru: 'Картофель по-деревенски',
      en: 'Rustic Country Potatoes',
    },
    description: {
      ky: 'Чөптөр жана татымалдар менен бышырылган картөшкө кесиндилери',
      ru: 'Ароматные запеченные дольки картофеля с пряными травами',
      en: 'Crispy skin-on potato wedges seasoned with rosemary and paprika',
    },
    price: 250,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'side-grilled-veggies',
    categoryId: 'sides',
    name: {
      ky: 'Грилде жашылча',
      ru: 'Овощи на гриле',
      en: 'Grilled Vegetables Side',
    },
    description: {
      ky: 'Грилде бышырылган цуккини, баклажан, калемпир, кызанак',
      ru: 'Овощи на гриле: баклажаны, кабачки, болгарский перец, томаты',
      en: 'Flame-kissed seasonal zucchini, eggplant, peppers, and tomatoes',
    },
    price: 350,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
  },

  // ==========================================
  // ДЕСЕРТТЕР / ДЕСЕРТЫ (Pages 44-45)
  // ==========================================
  {
    id: 'des-havuc',
    categoryId: 'desserts',
    name: {
      ky: 'Хавуч',
      ru: 'Хавуч (Пахлава Морковь)',
      en: 'Havuç Dilim Baklava',
    },
    description: {
      ky: 'Антеп фисташкасы жана Мараш балмуздагы менен чоң үч бурчтук пахлава',
      ru: 'Знаменитый морковный срез турецкой пахлавы с фисташками и мороженым Мараш',
      en: 'Carrot-slice shaped baklava loaded with Antep pistachios, served warm with Maraş ice cream',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    isPopular: true,
  },
  {
    id: 'des-fistikli-sarma',
    categoryId: 'desserts',
    name: {
      ky: 'Фыстыклы сарма',
      ru: 'Фыстыклы сарма',
      en: 'Fıstıklı Sarma (Pistachio Roll)',
    },
    description: {
      ky: 'Таза жашыл Антеп фисташкасынан жасалган назик пахлава рулети',
      ru: 'Изумрудные рулетики из тончайшего теста с отборными фисташками из Антепа',
      en: 'Pure green Antep pistachio wrapped in single delicate pastry leaf',
    },
    price: 650,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'des-ozel',
    categoryId: 'desserts',
    name: {
      ky: 'Озель',
      ru: 'Озель пахлава',
      en: 'Özel Baklava (Special)',
    },
    description: {
      ky: 'Шеф-кондитердин өзгөчө рецепти боюнча бышырылган пахлава',
      ru: 'Особая пахлава по фирменному рецепту шеф-кондитера',
      en: 'Chef’s special layered crispy baklava with rich clarified butter and pistachios',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'des-bul-bul',
    categoryId: 'desserts',
    name: {
      ky: 'Бюль бюль',
      ru: 'Бюль бюль (Соловьиное гнездо)',
      en: 'Bülbül Yuvası',
    },
    description: {
      ky: 'Фисташка менен толтурулган тегерек уя формасындагы пахлава',
      ru: 'Пахлава в форме соловьиного гнезда, наполненная фисташками',
      en: 'Nightingale nest shaped circular baklava centered with Antep pistachios',
    },
    price: 420,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'des-baklava',
    categoryId: 'desserts',
    name: {
      ky: 'Баклава',
      ru: 'Баклава (Пахлава)',
      en: 'Classic Baklava',
    },
    description: {
      ky: 'Кытырак 40 кабат юфка камыры, фисташка жана табигый шербет менен',
      ru: 'Классическая турецкая пахлава из 40 тончайших слоев теста с фисташками',
      en: 'Classic 40-layer pastry squares saturated with churned butter, syrup, and crushed nuts',
    },
    price: 420,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'des-fruit-plate',
    categoryId: 'desserts',
    name: {
      ky: 'Мөмө-жемиш табак',
      ru: 'Фруктовая тарелка',
      en: 'Seasonal Fruit Platter',
    },
    description: {
      ky: 'Мезгилге ылайык мөмө-жемиштер',
      ru: 'Фрукты по сезону (виноград, гранат, яблоки, цитрусовые)',
      en: 'Fresh seasonal fruits sliced and chilled (grapes, pomegranate, citrus, berries)',
    },
    price: 800,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'des-trilece',
    categoryId: 'desserts',
    name: {
      ky: 'Трилече',
      ru: 'Трилече',
      en: 'Trileçe (Three Milk Cake)',
    },
    description: {
      ky: 'Үч түрдүү сүткө малынган өтө жумшак бисквит жана карамель глазуру',
      ru: 'Нежнейший бисквит, пропитанный тремя видами молока под карамельной глазурью',
      en: 'Ultra-light sponge cake soaked in three milks and topped with rich caramel glaze',
    },
    price: 350,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'des-soguk-baklava',
    categoryId: 'desserts',
    name: {
      ky: 'Соук баклава',
      ru: 'Соук баклава (Холодная пахлава)',
      en: 'Soğuk Baklava (Cold Milk Baklava)',
    },
    description: {
      ky: 'Муздак сүткө чыланган пахлава, бетинде шоколад жана фисташка күкүмү менен',
      ru: 'Холодная молочная пахлава, посыпанная тертым бельгийским шоколадом и фисташками',
      en: 'Chilled baklava soaked in cold milk syrup and dusted with premium cocoa and pistachios',
    },
    price: 500,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },

  // ==========================================
  // ТОКОЧТОР / ВЫПЕЧКА (Page 46)
  // ==========================================
  {
    id: 'bakery-balloon-lavash',
    categoryId: 'bakery',
    name: {
      ky: 'Балон лаваш',
      ru: 'Балон лаваш',
      en: 'Balon Lavaş (Puff Bread)',
    },
    description: {
      ky: 'Мештен жаңы чыккан көөп турган ысык түрк аба наны кунжут менен',
      ru: 'Горячий воздушный хлеб-баллон прямо из дровяной печи с кунжутом',
      en: 'Oven-hot hollow balloon bread puffed in wood fire with toasted sesame seeds',
    },
    price: 200,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'bakery-turkish-bread',
    categoryId: 'bakery',
    name: {
      ky: 'Түрк нан',
      ru: 'Турецкий хлеб',
      en: 'Turkish Pide Bread',
    },
    description: {
      ky: 'Меште бышырылган салттуу жалпак түрк наны',
      ru: 'Традиционная свежеиспеченная турецкая лепешка с узорами',
      en: 'Traditional circular flatbread baked on hearthstone with savory crust',
    },
    price: 200,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bakery-lavash',
    categoryId: 'bakery',
    name: {
      ky: 'Лаваш',
      ru: 'Лаваш',
      en: 'Thin Lavash',
    },
    description: {
      ky: 'Жука жаңы бышкан лаваш',
      ru: 'Тонкий свежий лаваш',
      en: 'Fresh hand-rolled thin flatbread',
    },
    price: 150,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // БАР / ЧАЙ ЖАНА КОФЕ (Pages 47-48)
  // ==========================================
  {
    id: 'tea-tashkent',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Ташкенттик чай',
      ru: 'Ташкентский чай',
      en: 'Tashkent Tea',
    },
    description: {
      ky: 'Кара жана көк чай, лимон, жалбыз жана нават менен',
      ru: 'Фирменный черный и зеленый чай с лимоном, мятой и наватом',
      en: 'Black and green tea blend brewed with fresh mint leaves, lemon, and crystalline navat sugar',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'tea-moroccan',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Мароккандык чай',
      ru: 'Марокканский чай',
      en: 'Moroccan Mint Tea',
    },
    description: {
      ky: 'Көк чай, жаңы жалбыз, анис, корица жана цитрус',
      ru: 'Зеленый чай с мятой, корицей, бадьяном и цитрусовыми',
      en: 'Green tea with fresh spearmint, cinnamon stick, star anise, and orange zest',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tea-milk-oolong',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Сүт улун',
      ru: 'Молочный улун',
      en: 'Milk Oolong',
    },
    description: {
      ky: 'Каймак жыттуу назик жашыл улун чайы',
      ru: 'Изысканный зеленый улун с мягким сливочным ароматом',
      en: 'Silky smooth semi-fermented oolong with subtle creamy notes',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tea-black',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Кара чай',
      ru: 'Чёрный чай',
      en: 'Black Tea',
    },
    description: {
      ky: 'Чайнекте демделген классикалык кара чай',
      ru: 'Классический черный чай в чайнике',
      en: 'Pot of classic full-bodied black tea',
    },
    price: 170,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tea-green',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Көк чай',
      ru: 'Зелёный чай',
      en: 'Green Tea',
    },
    description: {
      ky: 'Чайнекте демделген жашыл чай',
      ru: 'Ароматный зеленый чай в чайнике',
      en: 'Pot of fragrant steamed whole leaf green tea',
    },
    price: 200,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tea-turkish-cup',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Түрк чай (Армуду стакан)',
      ru: 'Турецкий чай (Армуду)',
      en: 'Authentic Turkish Tea (Çay)',
    },
    description: {
      ky: 'Эки кабаттуу жез чайнекте демделген кызыл түстөгү салттуу түрк чайы',
      ru: 'Аутентичный крепкий турецкий чай в традиционном стаканчике армуду',
      en: 'Double-kettle brewed traditional Black Sea tea served in tulip glass',
    },
    price: 80,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'tea-ginger',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Имбирлүү чай',
      ru: 'Имбирный чай',
      en: 'Ginger Hibiscus Tea',
    },
    description: {
      ky: 'Имбирь, лимон, гибискус',
      ru: 'Имбирь, лимон, гибискус',
      en: 'Fresh ginger root, lemon slices, and crimson hibiscus flowers',
    },
    price: 330,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tea-raspberry-pomegranate',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Малина менен анар',
      ru: 'Гранат с малиной',
      en: 'Raspberry Pomegranate Tea',
    },
    description: {
      ky: 'Анар, малина жана гибискус менен',
      ru: 'Гранат, малина и гибискус',
      en: 'Natural pomegranate seeds, raspberries, and tart hibiscus infusion',
    },
    price: 330,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tea-seabuckthorn-indian',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Чычырканак кара индия чайы',
      ru: 'Облепиха с черным индийским чаем',
      en: 'Sea Buckthorn Indian Black Tea',
    },
    description: {
      ky: 'Чычырканак кара индия чайы менен, календула жана имбирь менен',
      ru: 'Облепиха с чёрным индийским чаем, календулой и имбирём',
      en: 'Wild sea buckthorn berries, Indian black tea, calendula flowers, and ginger',
    },
    price: 330,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'tea-seabuckthorn-fruit',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Мөмө-жемиштер менен чычырканак',
      ru: 'Облепиха с фруктами',
      en: 'Sea Buckthorn Fruit Blend',
    },
    description: {
      ky: 'Чычырканак апельсин, ананас жана алма кошулган',
      ru: 'Облепиха с апельсином, ананасом и яблоком',
      en: 'Sea buckthorn berries with orange, pineapple, and crisp apple pieces',
    },
    price: 330,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coffee-americano',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Американо',
      ru: 'Американо',
      en: 'Americano',
    },
    description: {
      ky: 'Арабика дандарынан жаңы тартылган классикалык американо',
      ru: 'Классический черный кофе из свежемолотой арабики',
      en: 'Double shot of freshly extracted espresso poured with hot water',
    },
    price: 170,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coffee-latte',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Латте',
      ru: 'Латте',
      en: 'Caffè Latte',
    },
    description: {
      ky: 'Эспрессо жана көбүктүү сүт',
      ru: 'Эспрессо со взбитым молоком и нежной пенкой',
      en: 'Rich espresso with steamed velvety milk and light foam cap',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coffee-cappuccino',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Капучино',
      ru: 'Капучино',
      en: 'Cappuccino',
    },
    description: {
      ky: 'Эспрессо, коюу сүт көбүгү',
      ru: 'Идеальный баланс эспрессо и густой молочной пенки',
      en: 'Balanced espresso, hot steamed milk, and dense microfoam',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'coffee-espresso',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Эспрессо',
      ru: 'Эспрессо',
      en: 'Single Espresso',
    },
    description: {
      ky: '100% арабика, коюу пенка',
      ru: 'Классический шот крепкого эспрессо с плотной крема',
      en: 'Concentrated shot of 100% Arabica with golden crema',
    },
    price: 140,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coffee-double-espresso',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Кош эспрессо',
      ru: 'Двойной эспрессо',
      en: 'Double Espresso (Doppio)',
    },
    description: {
      ky: 'Эки эселенген күчтүү эспрессо',
      ru: 'Двойная порция насыщенного эспрессо',
      en: 'Double extracted shot of espresso',
    },
    price: 160,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coffee-turkish',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Түркчө кофе',
      ru: 'Кофе по-турецки',
      en: 'Authentic Turkish Coffee',
    },
    description: {
      ky: 'Кумда же жез туркада майда тартылган дандардан бышырылган коюу кофе лукум менен',
      ru: 'Сваренный на песке аутентичный кофе в медной турке, подается с рахат-лукумом',
      en: 'Finely ground beans brewed slowly in copper cezve with thick crema and Turkish delight',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    isPopular: true,
  },
  {
    id: 'shake-chocolate',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Шоколаддуу милкшейк',
      ru: 'Шоколадный милкшейк',
      en: 'Chocolate Milkshake',
    },
    description: {
      ky: 'Шоколад балмуздагы, сүт, шоколад соусу (0.45 л)',
      ru: 'Шоколадное мороженое, молоко, шоколадный топпинг (0.45 л)',
      en: 'Rich chocolate ice cream blended with cold milk and fudge (0.45 L)',
    },
    price: 370,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'shake-strawberry',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Кулпунайлуу милкшейк',
      ru: 'Клубничный милкшейк',
      en: 'Strawberry Milkshake',
    },
    description: {
      ky: 'Кулпунай балмуздагы жана табигый мөмө пюреси (0.45 л)',
      ru: 'Клубничное мороженое и натуральное ягодное пюре (0.45 л)',
      en: 'Creamy strawberry milkshake blended with real fruit (0.45 L)',
    },
    price: 370,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'shake-vanilla',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Ванилдүү милкшейк',
      ru: 'Ванильный милкшейк',
      en: 'Vanilla Milkshake',
    },
    description: {
      ky: 'Мадагаскар ванили, балмуздак, сүт (0.45 л)',
      ru: 'Натуральная ваниль, пломбир, молоко (0.45 л)',
      en: 'Classic vanilla bean ice cream milkshake (0.45 L)',
    },
    price: 370,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'shake-banana',
    categoryId: 'tea_coffee',
    name: {
      ky: 'Банан милкшейк',
      ru: 'Банановый милкшейк',
      en: 'Banana Milkshake',
    },
    description: {
      ky: 'Жаңы банан, балмуздак жана муздак сүт (0.45 л)',
      ru: 'Свежие бананы, пломбир и молоко (0.45 л)',
      en: 'Fresh ripe banana blended with rich ice cream (0.45 L)',
    },
    price: 370,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // СЕРГИТҮҮЧҮ СУУСУНДУКТАР / НАПИТКИ (Pages 49-50)
  // ==========================================
  {
    id: 'drk-natural-juice',
    categoryId: 'drinks',
    name: {
      ky: 'Табигый шире',
      ru: 'Натуральный сок',
      en: 'Natural Juice',
    },
    description: {
      ky: 'Ассортименттеги табигый шире (0.25 л / 0.93 л)',
      ru: 'Натуральный сок в ассортименте (0.25 л / 0.93 л)',
      en: 'Assorted premium bottled juice (0.25 L / 0.93 L)',
    },
    price: 240,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-ayran',
    categoryId: 'drinks',
    name: {
      ky: 'Айран',
      ru: 'Айран',
      en: 'Turkish Ayran',
    },
    description: {
      ky: 'Салттуу көбүктүү түрк айраны (0.45 л / 1 л)',
      ru: 'Традиционный прохладный турецкий айран с пенкой (0.45 л / 1 л)',
      en: 'Chilled salted Turkish yogurt beverage (0.45 L / 1 L)',
    },
    price: 160,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'drk-turkish-lemonade',
    categoryId: 'drinks',
    name: {
      ky: 'Түрк лимонады',
      ru: 'Турецкий лимонад',
      en: 'Turkish Lemonade',
    },
    description: {
      ky: 'Жаңы лимон, жалбыз жана муз менен колго даярдалган (0.45 л / 1 л)',
      ru: 'Домашний турецкий лимонад из свежих лимонов и мяты (0.45 л / 1 л)',
      en: 'House-made lemonade with fresh lemon, mint, and ice (0.45 L / 1 L)',
    },
    price: 140,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'drk-sherbet',
    categoryId: 'drinks',
    name: {
      ky: 'Шербет',
      ru: 'Шербет',
      en: 'Osmanlı Şerbeti (Sherbet)',
    },
    description: {
      ky: 'Осмон империясынын салттуу мөмө-чөп шербети (0.45 л / 1 л)',
      ru: 'Традиционный османский пряный ягодный шербет (0.45 л / 1 л)',
      en: 'Traditional Ottoman spiced fruit and flower cooler (0.45 L / 1 L)',
    },
    price: 80,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-fresh-juice-orange',
    categoryId: 'drinks',
    name: {
      ky: 'Жаңы сыгылган шире (Алма / Апельсин / Сабиз)',
      ru: 'Свежевыжатый сок (Яблоко / Апельсин / Морковь)',
      en: 'Fresh Squeezed Juice (Apple / Orange / Carrot)',
    },
    description: {
      ky: '100% жаңы сыгылган табигый шире',
      ru: '100% свежевыжатый сок без добавления сахара и воды',
      en: 'Pure cold-pressed juice from fresh fruits (250 ml)',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'drk-fresh-pomegranate',
    categoryId: 'drinks',
    name: {
      ky: 'Жаңы сыгылган анар ширеси',
      ru: 'Свежевыжатый гранатовый сок',
      en: 'Fresh Pomegranate Juice',
    },
    description: {
      ky: 'Ширелүү анардан жаңы сыгылган антиоксидантка бай таза шире',
      ru: 'Свежевыжатый сок из спелых рубиновых зерен граната',
      en: 'Pure freshly pressed pomegranate juice without additives',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'drk-coca-cola',
    categoryId: 'drinks',
    name: {
      ky: 'Кока-кола',
      ru: 'Кока-кола',
      en: 'Coca-Cola (0.25 L glass)',
    },
    description: {
      ky: 'Айнек бөтөлкөдөгү муздак Кока-кола (0.25 л)',
      ru: 'Охлажденная Кока-кола в стекле (0.25 л)',
      en: 'Chilled Coca-Cola in classic glass bottle (0.25 L)',
    },
    price: 150,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-red-bull-mocktail',
    categoryId: 'drinks',
    name: {
      ky: 'Ред Булл моктейль',
      ru: 'Ред Булл моктейль',
      en: 'Red Bull Mocktail',
    },
    description: {
      ky: 'Ред Булл, цитрус, мөмө сиробу жана муз (0.45 л)',
      ru: 'Энергетический безалкогольный коктейль со льдом и цитрусом (0.45 л)',
      en: 'Energizing mocktail with Red Bull, citrus, and crushed ice (0.45 L)',
    },
    price: 360,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-mango-berry',
    categoryId: 'drinks',
    name: {
      ky: 'Манго бэрри',
      ru: 'Манго бэрри коктейль',
      en: 'Mango Berry Cooler',
    },
    description: {
      ky: 'Манго пюреси, токой мөмөлөрү, муз (0.45 л)',
      ru: 'Освежающий микс манго и лесных ягод (0.45 л)',
      en: 'Tropical mango puree, wild berries, and mint on ice (0.45 L)',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-cherry-orange',
    categoryId: 'drinks',
    name: {
      ky: 'Черри орэндж',
      ru: 'Черри орэндж коктейль',
      en: 'Cherry Orange Cooler',
    },
    description: {
      ky: 'Ширелүү алча, апельсин кесиндилери жана газдалган суу (0.45 л)',
      ru: 'Сочная вишня, дольки свежего апельсина и содовая (0.45 л)',
      en: 'Dark cherry juice, orange slices, and sparkling soda (0.45 L)',
    },
    price: 250,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-mojito',
    categoryId: 'drinks',
    name: {
      ky: 'Мохито',
      ru: 'Мохито (Безалкогольный)',
      en: 'Virgin Mojito',
    },
    description: {
      ky: 'Лайм, жаңы жалбыз, камыш канты, содовая (0.45 л / 1 л)',
      ru: 'Освежающий безалкогольный мохито с лаймом и мятой (0.45 л / 1 л)',
      en: 'Muddled fresh lime, spearmint, cane sugar, and sparkling water (0.45 L / 1 L)',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'drk-lemonade-kiwi-apple',
    categoryId: 'drinks',
    name: {
      ky: 'Киви алма лимонады',
      ru: 'Лимонад Киви яблоко',
      en: 'Kiwi Apple Lemonade',
    },
    description: {
      ky: 'Киви, жашыл алма, содовая жана муз (0.45 л / 1 л)',
      ru: 'Освежающий лимонад из киви и зеленого яблока (0.45 л / 1 л)',
      en: 'Crisp green apple and kiwi puree with sparkling water (0.45 L / 1 L)',
    },
    price: 210,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-lemonade-mango-passion',
    categoryId: 'drinks',
    name: {
      ky: 'Манго маракуйя лимонады',
      ru: 'Лимонад Манго маракуйя',
      en: 'Mango Passionfruit Lemonade',
    },
    description: {
      ky: 'Тропикалык манго жана маракуйя (0.45 л / 1 л)',
      ru: 'Тропический лимонад манго и маракуйя (0.45 л / 1 л)',
      en: 'Tropical mango and passionfruit with crushed ice (0.45 L / 1 L)',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-lemonade-berry-mix',
    categoryId: 'drinks',
    name: {
      ky: 'Мөмө-жемиш микс лимонады',
      ru: 'Лимонад Ягодный микс',
      en: 'Berry Mix Lemonade',
    },
    description: {
      ky: 'Малина, бүлдүркөн, кулпунай жана муз (0.45 л / 1 л)',
      ru: 'Ягодный лимонад из малины, черники и клубники (0.45 л / 1 л)',
      en: 'Crushed forest berries, lemon juice, and chilled sparkling water (0.45 L / 1 L)',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-lemonade-raspberry-orange',
    categoryId: 'drinks',
    name: {
      ky: 'Малина апельсин лимонады',
      ru: 'Лимонад Малина апельсин',
      en: 'Raspberry Orange Lemonade',
    },
    description: {
      ky: 'Малина, ширелүү апельсин жана муз (0.45 л / 1 л)',
      ru: 'Яркий цитрусово-ягодный лимонад (0.45 л / 1 л)',
      en: 'Bright raspberry and freshly squeezed orange with mint (0.45 L / 1 L)',
    },
    price: 230,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-smoothie-strawberry-banana',
    categoryId: 'drinks',
    name: {
      ky: 'Кулпунай-банан смузи',
      ru: 'Смузи Клубника-банан',
      en: 'Strawberry Banana Smoothie',
    },
    description: {
      ky: 'Жаңы кулпунай, банан, йогурт (0.45 л)',
      ru: 'Густой смузи из спелой клубники и банана (0.45 л)',
      en: 'Thick smoothie with ripe strawberries, banana, and natural yogurt (0.45 L)',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drk-smoothie-mango-orange',
    categoryId: 'drinks',
    name: {
      ky: 'Манго-апельсин смузи',
      ru: 'Смузи Манго-апельсин',
      en: 'Mango Orange Smoothie',
    },
    description: {
      ky: 'Таттуу манго жана жаңы апельсин ширеси (0.45 л)',
      ru: 'Витаминный тропический смузи из манго и апельсина (0.45 л)',
      en: 'Tropical vitamin-packed mango and fresh orange smoothie (0.45 L)',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
  },
];
