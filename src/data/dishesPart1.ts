import { DishItem } from '../types';

export const dishesPart1: DishItem[] = [
  // ==========================================
  // ТАҢКЫ ТАМАКТАР / ЗАВТРАКИ (Pages 2-7)
  // ==========================================
  {
    id: 'brk-1-person',
    categoryId: 'breakfast',
    name: {
      ky: '1 адамга эртең мененки тамак',
      ru: 'Завтрак на 1 персону',
      en: 'Breakfast for 1 person',
    },
    description: {
      ky: 'Жумуртка, нан, кашар сыры, тулум сыры, брынза, сулугуни, эки түрдүү кыям, үч түрдүү зайтун, үч түрдүү жаңгак, бал, сары май, жашылчалар, чөп-чар.',
      ru: 'Яичница, хлеб, кашар, тулум, брынза, сулугуни, два вида варенья, три вида оливок, три вида орехов, мёд, сливочное масло, овощи, зелень.',
      en: 'Eggs, bread, kashar, tulum, brynza, suluguni, two jams, three olive types, nuts, honey, butter, vegetables.',
    },
    price: 955,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'brk-2-persons',
    categoryId: 'breakfast',
    name: {
      ky: '2 адамга эртең мененки тамак',
      ru: 'Завтрак на 2 персоны',
      en: 'Breakfast for 2 persons',
    },
    description: {
      ky: 'Менемен, жумуртка суджук менен, аңчылык колбасасы, сервелат, доктордук колбаса, тулум сыры, брынза, сулугуни, кашар, төрт түрдүү зайтун, сары май, каймак, жашылча табагы, үч түрдүү жаңгак, кара өрүк, өрүк как, сигара борек, бал, апельсин, фындык пиде, төрт түрдүү кыям.',
      ru: 'Менемен, яичница суджук, охотнячая, сервелат, докторская колбаса, тулум, брынза, сулугуни, кашар, четыре вида оливок, сливочное масло, каймак, овощная тарелка, три вида орехов, чернослив, курага, сигара борек, мёд, апельсин, фындык пиде, четыре вида варенья.',
      en: 'Menemen, eggs with sucuk, sausages, tulum, brynza, suluguni, kashar, 4 types of olives, butter, kaymak, nuts, sigara borek, findik pide, 4 jams.',
    },
    price: 2600,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'brk-4-persons',
    categoryId: 'breakfast',
    name: {
      ky: '4 адамга эртең мененки тамак',
      ru: 'Завтрак на 4 персоны',
      en: 'Breakfast for 4 persons',
    },
    description: {
      ky: 'Менемен, жумуртка суджук менен, аңчылык колбасасы, сервелат, доктордук колбаса, тулум сыры, брынза, сулугуни, кашар, төрт түрдүү зайтун, сары май, каймак, жашылча табагы, үч түрдүү жаңгак, кара өрүк, өрүк как, сигара борек, бал, апельсин, фындык пиде, төрт түрдүү кыям, тахини-пекмез, фисташка халвасы, шоколад халвасы, шоколад.',
      ru: 'Менемен, яичница суджук, охотнячая, сервелат, докторская колбаса, тулум, брынза, сулугуни, кашар, четыре вида оливок, сливочное масло, каймак, овощная тарелка, три вида орехов, чернослив, курага, сигара борек, мёд, апельсин, фындык пиде, четыре вида варенья, тахини-пекмез, фисташковая халва, шоколадная халва, шоколад.',
      en: 'Grand breakfast set for 4 persons with hot menemen, sucuk, sausages, cheeses, olives, tahini-pekmez, halva, and fresh breads.',
    },
    price: 4000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'menemen',
    categoryId: 'breakfast',
    name: {
      ky: 'Менемен',
      ru: 'Менемен',
      en: 'Menemen',
    },
    description: {
      ky: 'Жумуртка, кызанак, болгар калемпири',
      ru: 'Яйца, помидор, болгарский перец',
      en: 'Traditional Turkish scramble with eggs, tomatoes, and green peppers',
    },
    price: 350,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'eggs-sucuk',
    categoryId: 'breakfast',
    name: {
      ky: 'Суджук менен жумуртка',
      ru: 'Яичница с суджуком',
      en: 'Eggs with Sucuk',
    },
    description: {
      ky: 'Жумуртка, суджук',
      ru: 'Яйца, суджук',
      en: 'Pan-fried eggs with authentic spicy Turkish sucuk sausage',
    },
    price: 380,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'eggs-meat',
    categoryId: 'breakfast',
    name: {
      ky: 'Эт менен жумуртка',
      ru: 'Яичница с мясом',
      en: 'Eggs with Meat',
    },
    description: {
      ky: 'Жумуртка, уй эти',
      ru: 'Яйца, говядина',
      en: 'Fried eggs with tender beef tenderloin cuts in copper pan',
    },
    price: 380,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fried-eggs',
    categoryId: 'breakfast',
    name: {
      ky: 'Жумуртка',
      ru: 'Яичница',
      en: 'Classic Fried Eggs',
    },
    description: {
      ky: 'Жумуртка, сары май',
      ru: 'Яичница',
      en: 'Classic sunny-side up eggs in copper pan',
    },
    price: 120,
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cilbir',
    categoryId: 'breakfast',
    name: {
      ky: 'Чылбыр',
      ru: 'Чылбыр',
      en: 'Çılbır (Turkish Poached Eggs)',
    },
    description: {
      ky: 'Пашот жумуртка, сүзмө, кургатылган нан',
      ru: 'Яйцо пашот, сузьма, сухари',
      en: 'Poached eggs over whipped suzma yogurt with warm spiced butter and toast',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },

  // ==========================================
  // ШОРПОЛОР / СУПЫ (Pages 8-10)
  // ==========================================
  {
    id: 'soup-ezogelin',
    categoryId: 'soups',
    name: {
      ky: 'Эзогелин',
      ru: 'Эзогелин',
      en: 'Ezogelin Soup',
    },
    description: {
      ky: 'Кызыл жасмык, булгур, картөшкө',
      ru: 'Красная чечевица, булгур, картофель',
      en: 'Red lentils, bulgur, potato, mint, and Anatolian spices',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'soup-mercimek',
    categoryId: 'soups',
    name: {
      ky: 'Мержимек',
      ru: 'Мерджимек',
      en: 'Mercimek Soup',
    },
    description: {
      ky: 'Кызыл жасмык, картөшкө',
      ru: 'Красная чечевица, картофель',
      en: 'Smooth red lentil cream soup served with lemon wedge and croutons',
    },
    price: 280,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'soup-kelle-paca',
    categoryId: 'soups',
    name: {
      ky: 'Келе пача',
      ru: 'Келле пача',
      en: 'Kelle Paça',
    },
    description: {
      ky: 'Козу эти, йогурт, сарымсак соусу менен',
      ru: 'Ягненок с йогуртом, подается с чесночным соусом.',
      en: 'Rich lamb soup with garlic and vinegar sauce',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'soup-rulka',
    categoryId: 'soups',
    name: {
      ky: 'Рулька менен шорпо',
      ru: 'Суп с рулькой',
      en: 'Lamb Shank Soup',
    },
    description: {
      ky: 'Жаңы жашылча менен козу рулькасы',
      ru: 'Рулька ягненка со свежими овощами',
      en: 'Braised lamb shank on bone with tender garden vegetables and rich broth',
    },
    price: 1200,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'soup-mushroom',
    categoryId: 'soups',
    name: {
      ky: 'Козу карын',
      ru: 'Грибной суп',
      en: 'Mushroom Cream Soup',
    },
    description: {
      ky: 'Козу карын, пияз, каймак',
      ru: 'Грибы, лук, сливки',
      en: 'Fresh mushrooms, sweet onion, and rich cream',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'soup-chicken',
    categoryId: 'soups',
    name: {
      ky: 'Тоок шорпосу',
      ru: 'Куриный суп',
      en: 'Chicken Noodle Soup',
    },
    description: {
      ky: 'Тоок төшү, кесме, йогурт',
      ru: 'Куриная грудка, лапша, йогурт',
      en: 'Chicken breast, homemade noodles, and light yogurt broth',
    },
    price: 360,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'soup-beyran',
    categoryId: 'soups',
    name: {
      ky: 'Бейран чорба',
      ru: 'Бейран чорба',
      en: 'Beyran Çorbası',
    },
    description: {
      ky: 'Май кошулган, коюу эт сорпосуна бышырылган күрүч жана койэтинен жасалган салттуу түрк шорпосу.',
      ru: 'Традиционный турецкий суп из баранины и риса на наваристом мясном бульоне со сливочным маслом.',
      en: 'Gaziantep specialty spicy lamb and rice soup on rich bone broth with clarified butter',
    },
    price: 480,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    isSpicy: true,
  },
  {
    id: 'soup-yayla',
    categoryId: 'soups',
    name: {
      ky: 'Яйла чорба',
      ru: 'Яйла чорба',
      en: 'Yayla Çorbası',
    },
    description: {
      ky: 'Күрүч жана айран кошулган, ширелүү фарштан жасалган фрикаделькалар жана бир кашык сары май кошулган жеңил шорпо.',
      ru: 'Нежный суп на бульоне с рисом и айраном, с фрикадельками из сочного фарша и ложкой сливочного масла.',
      en: 'Comforting Turkish meadow soup with rice, ayran yogurt, juicy meatballs, and melted butter',
    },
    price: 470,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // ЗАКУСКАЛАР / ЗАКУСКИ (Pages 11-14)
  // ==========================================
  {
    id: 'cheese-plate',
    categoryId: 'cold_starters',
    name: {
      ky: 'Сыр табак',
      ru: 'Сырная тарелка',
      en: 'Cheese Platter',
    },
    description: {
      ky: 'Кашар, моцарелла, косичка сыры, тулум, эзме, дил, жүзүм, кара өрүк, өрүк как, фундук, бал',
      ru: 'Кашар, моцарелла, сыр косичка, тулум, эзме, дил, виноград, грецкий орех, курага, фундук, мёд.',
      en: 'Kashar, mozzarella, braided cheese, tulum, ezme, grapes, walnuts, dried apricots, hazelnuts, honey',
    },
    price: 2000,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'haydari',
    categoryId: 'cold_starters',
    name: {
      ky: 'Хайдари',
      ru: 'Хайдари',
      en: 'Haydari',
    },
    description: {
      ky: 'Сүзмө, жалбыз',
      ru: 'Сузьма, мята',
      en: 'Strained suzma yogurt with dried spearmint and olive oil',
    },
    price: 350,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'ezme',
    categoryId: 'cold_starters',
    name: {
      ky: 'Эзме',
      ru: 'Эзме',
      en: 'Acılı Ezme',
    },
    description: {
      ky: 'Томат, бадыраң, болгар калемпири, паприка, сарымсак',
      ru: 'Томаты, огурец, болгарский перец, паприка, чеснок',
      en: 'Finely minced tomatoes, cucumbers, sweet peppers, garlic, and pomegranate reduction',
    },
    price: 280,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    isSpicy: true,
  },
  {
    id: 'yaprak-sarma',
    categoryId: 'cold_starters',
    name: {
      ky: 'Япрак сарма',
      ru: 'Япрак сарма',
      en: 'Yaprak Sarma',
    },
    description: {
      ky: 'Жүзүм жалбырагы, күрүч, корица, кедр жаңгагы, лимон, томат',
      ru: 'Виноградные листья, рис, корица, кедровые орехи, лимон, томаты',
      en: 'Tender grape leaves rolled with spiced rice, pine nuts, and cinnamon with lemon',
    },
    price: 470,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'atom-meze',
    categoryId: 'cold_starters',
    name: {
      ky: 'Атом',
      ru: 'Атом',
      en: 'Atom Meze',
    },
    description: {
      ky: 'Сүзмө, чили, сарымсак',
      ru: 'Сузьма, чили, чеснок',
      en: 'Creamy yogurt topped with dried hot chili peppers sizzled in butter',
    },
    price: 300,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isSpicy: true,
  },
  {
    id: 'eggplant-rolls',
    categoryId: 'cold_starters',
    name: {
      ky: 'Баклажандан рулет',
      ru: 'Рулетики из баклажанов',
      en: 'Eggplant Rolls',
    },
    description: {
      ky: 'Баклажан, грек жаңгагы, пармезан, черри',
      ru: 'Баклажаны, грецкий орех, пармезан, черри',
      en: 'Roasted eggplant rolls stuffed with walnuts and parmesan cheese with cherry tomatoes',
    },
    price: 370,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meze-assorti',
    categoryId: 'cold_starters',
    name: {
      ky: 'Мезе ассортиси',
      ru: 'Ассорти мезе',
      en: 'Assorted Meze Platter',
    },
    description: {
      ky: 'Эзме, баклажандан эзме, хайдари, бибер борани, йогуртту патлыжан, шакшука, япрак сарма.',
      ru: 'Эзме, эзме из баклажанов, хайдари, бибер борани, йогуртлу патлыжан, шакшука, япрак сарма',
      en: 'Platter of Ezme, eggplant ezme, Haydari, Biber borani, eggplant yogurt, Shakshuka, and Yaprak sarma',
    },
    price: 650,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'arnaut-ciger',
    categoryId: 'cold_starters',
    name: {
      ky: 'Арнаут жиэр',
      ru: 'Арнаут жиэр',
      en: 'Arnavut Ciğeri',
    },
    description: {
      ky: 'Боор, чыланган пияз, черри, кызанак, петрушка',
      ru: 'Печень, маринованный лук, черри, помидор, петрушка',
      en: 'Albanian style sauteed liver cubes with sumac marinated onion and parsley',
    },
    price: 370,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cacik',
    categoryId: 'cold_starters',
    name: {
      ky: 'Джаджык',
      ru: 'Джаджык',
      en: 'Cacık',
    },
    description: {
      ky: 'Айран, бадыраң',
      ru: 'Айран, огурцы',
      en: 'Chilled Turkish ayran with diced fresh cucumbers, mint, and olive oil',
    },
    price: 250,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'yogurtlu-patlican',
    categoryId: 'cold_starters',
    name: {
      ky: 'Йогурттуу патлыжан',
      ru: 'Йогуртлу патлыжан',
      en: 'Yoğurtlu Patlıcan',
    },
    description: {
      ky: 'Сүзмө, бышкан баклажан, сарымсак',
      ru: 'Сузьма, запеченые баклажаны, чеснок',
      en: 'Smoked roasted eggplants whipped with garlic suzma yogurt',
    },
    price: 380,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hummus',
    categoryId: 'cold_starters',
    name: {
      ky: 'Хумус',
      ru: 'Хумус',
      en: 'Hummus',
    },
    description: {
      ky: 'Нут, тахини, лимон ширеси, зайтун майы',
      ru: 'Нут, тахини, лимонный сок, оливковое масло',
      en: 'Silky smooth chickpea puree with sesame tahini, garlic, and extra virgin olive oil',
    },
    price: 350,
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'mutabal',
    categoryId: 'cold_starters',
    name: {
      ky: 'Мутабаль',
      ru: 'Мутабаль',
      en: 'Mutabbal',
    },
    description: {
      ky: 'Баклажан, тахини, сарымсак, лимон, зайтун майы, үй йогурту',
      ru: 'Баклажаны, тахини, чеснок, лимон, оливковое масло, домашний йогурт',
      en: 'Char-grilled eggplant dip with tahini, garlic, lemon, and homemade yogurt',
    },
    price: 380,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'avocado-ezme',
    categoryId: 'cold_starters',
    name: {
      ky: 'Авокадо эзмеси',
      ru: 'Авокадо эзме',
      en: 'Avocado Ezme',
    },
    description: {
      ky: 'Авокадо, лимон ширеси, сарымсак',
      ru: 'Авокадо, лимонный сок, чеснок',
      en: 'Ripe mashed avocado with garlic and fresh lemon juice',
    },
    price: 430,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // САЛАТТАР / САЛАТЫ (Pages 15-18)
  // ==========================================
  {
    id: 'salad-caesar-chicken',
    categoryId: 'salads',
    name: {
      ky: 'Тоок менен цезарь',
      ru: 'Цезарь с курицей',
      en: 'Caesar Salad with Chicken',
    },
    description: {
      ky: 'Тоок-гриль, айсберг салат жалбырагы, черри кызанагы, пармезан, гриссини жана цезарь соусу',
      ru: 'Курица-гриль, листья салата айсберг, помидор черри, пармезан, гриссини и соус цезарь',
      en: 'Grilled chicken breast, crisp iceberg, cherry tomatoes, parmesan, and Caesar dressing',
    },
    price: 550,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'salad-caesar-shrimp',
    categoryId: 'salads',
    name: {
      ky: 'Креветка менен цезарь',
      ru: 'Цезарь с креветками',
      en: 'Caesar Salad with Shrimp',
    },
    description: {
      ky: 'Креветка-гриль, айсберг салат жалбырагы, черри кызанагы, пармезан, гриссини жана цезарь соусу',
      ru: 'Креветки-гриль, листья салата айсберг, помидор черри, пармезан, гриссини и соус цезарь',
      en: 'Grilled jumbo shrimp, iceberg lettuce, parmesan shavings, and Caesar dressing',
    },
    price: 650,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-gavurda',
    categoryId: 'salads',
    name: {
      ky: 'Салат Гавурда',
      ru: 'Салат Гавурда',
      en: 'Gavurdağı Salad',
    },
    description: {
      ky: 'Томаттар, кызыл пияз, болгар калемпири, петрушка, грек жаңгагы, наршараб соусу',
      ru: 'Томаты, лук красный, болгарский перец, петрушка, грецкий орех, соус наршараб',
      en: 'Diced tomatoes, red onion, sweet pepper, walnuts, and tangy pomegranate sauce',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'salad-kashik',
    categoryId: 'salads',
    name: {
      ky: 'Кашык',
      ru: 'Кашык',
      en: 'Kaşık Salad',
    },
    description: {
      ky: 'Кызанак, бадыраң, кызыл пияз, болгар калемпири, петрушка, тулум сыры, наршараб соусу',
      ru: 'Помидор, огурец, лук красный, болгарский перец, петрушка, сыр тулум, соус наршараб',
      en: 'Finely chopped spoon salad with tomatoes, cucumbers, tulum cheese, and pomegranate molasses',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-mangal',
    categoryId: 'salads',
    name: {
      ky: 'Мангал салат',
      ru: 'Мангал салат',
      en: 'Mangal Salad',
    },
    description: {
      ky: 'Болгар калемпири, баклажан, кызанак, сарымсак, кызыл пияз, гриссини, лимон',
      ru: 'Болгарский перец, баклажаны, помидор, чеснок, лук красный, гриссини, лимон',
      en: 'Char-grilled peppers, eggplant, and tomatoes tossed with garlic, red onion, and lemon',
    },
    price: 500,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
  },
  {
    id: 'salad-coban',
    categoryId: 'salads',
    name: {
      ky: 'Чобан',
      ru: 'Чобан',
      en: 'Çoban Salad (Shepherd Salad)',
    },
    description: {
      ky: 'Кызанак, бадыраң, кызыл пияз, петрушка, наршараб соусу',
      ru: 'Помидор, огурец, лук красный, петрушка, соус наршараб',
      en: 'Classic shepherd salad with juicy ripe tomatoes, crisp cucumber, and olive oil',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-patlican',
    categoryId: 'salads',
    name: {
      ky: 'Патлыжан',
      ru: 'Патлыжан салат',
      en: 'Patlıcan Salad',
    },
    description: {
      ky: 'Баклажан, быштак сыр, черри, руккола, чили свити соусу, бадыраң',
      ru: 'Баклажаны, сыр творожный, черри, руккола, соус свит чили, огурцы',
      en: 'Crispy eggplant chunks with curd cheese, arugula, and sweet chili dressing',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-panjar',
    categoryId: 'salads',
    name: {
      ky: 'Панжар',
      ru: 'Панжар',
      en: 'Pancar Salad (Beetroot)',
    },
    description: {
      ky: 'Кызылча, шпинат, черри, песто соусу, грек жаңгагы, быштак сыры, гриссини, наршараб соусу',
      ru: 'Свекла, шпинат, черри, песто соус, грецкий орех, творожный сыр, гриссини, соус наршараб',
      en: 'Roasted beetroot with baby spinach, curd cheese, pesto, and walnuts',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-tuna',
    categoryId: 'salads',
    name: {
      ky: 'Тунец менен салат',
      ru: 'Салат с тунцом',
      en: 'Tuna Salad',
    },
    description: {
      ky: 'Тунец, салат жалбырагы, айсберг, початка, жүгөрү, туздалган бадыраң, гриссини, черри, лимон',
      ru: 'Тунец, лист салата, айсберг, початки, кукуруза, соленые огурец, гриссини, черри, лимон',
      en: 'Flaked tuna, fresh greens, sweet corn, baby pickles, cherry tomatoes, and lemon',
    },
    price: 420,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-greek',
    categoryId: 'salads',
    name: {
      ky: 'Грек салаты',
      ru: 'Греческий салат',
      en: 'Greek Salad',
    },
    description: {
      ky: 'Кызанак, бадыраң, болгар калемпири, фета сыры, зайтун, кызыл пияз, салат жалбырагы.',
      ru: 'Помидор, огурец, болгарский перец, сыр фета, маслины, красный лук, лист салата',
      en: 'Tomatoes, cucumbers, bell pepper, authentic feta cheese, Kalamata olives, and olive oil',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-green',
    categoryId: 'salads',
    name: {
      ky: 'Көк салат',
      ru: 'Зеленый салат',
      en: 'Green Detox Salad',
    },
    description: {
      ky: 'Салат жалбырагы, авокадо, бадыраң, руккола, жашыл буурчак, эдамамэ',
      ru: 'Лист салата, авокадо, огурцы, спаржа, айсберг, руккола, стручковая фасоль, эдамамэ',
      en: 'Fresh avocado, crisp cucumbers, asparagus, arugula, string beans, and edamame',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
  },
  {
    id: 'salad-beef',
    categoryId: 'salads',
    name: {
      ky: 'Уй эти менен салат',
      ru: 'Салат с говядиной',
      en: 'Warm Beef Salad',
    },
    description: {
      ky: 'Уй эти, бадыраң, черри, салат микси, болгар калемпири',
      ru: 'Говядина, огурцы, черри, микс салата, болгарский перец',
      en: 'Grilled tender beef slices over mixed greens, cherry tomatoes, and bell pepper',
    },
    price: 500,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },

  // ==========================================
  // ЫСЫК ЗАКУСКАЛАР / ГОРЯЧИЕ ЗАКУСКИ (Page 19)
  // ==========================================
  {
    id: 'sigara-borek',
    categoryId: 'hot_starters',
    name: {
      ky: 'Сигара борек',
      ru: 'Сигара борек',
      en: 'Sigara Börek',
    },
    description: {
      ky: 'Юфка, быштак / Юфка, творог',
      ru: 'Юфка, творог / сыр',
      en: 'Crispy fried filo pastry cigars rolled with savory Turkish curd cheese and herbs',
    },
    price: 350,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'hamsi',
    categoryId: 'hot_starters',
    name: {
      ky: 'Хамси',
      ru: 'Хамси',
      en: 'Hamsi (Black Sea Anchovies)',
    },
    description: {
      ky: 'Кытырак бышырылган хамси балыгы, лимон жана кызыл пияз менен',
      ru: 'Хрустящая жареная черноморская хамса с лимоном и луком',
      en: 'Crispy pan-fried Black Sea anchovies served with sliced lemon and red onion',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'karisyk-toast',
    categoryId: 'hot_starters',
    name: {
      ky: 'Карышык тост',
      ru: 'Карышык тост',
      en: 'Mixed Toast (Karışık)',
    },
    description: {
      ky: 'Тост, моцарелла, колбаса, фри',
      ru: 'Тост, моцарелла, колбаса, фри',
      en: 'Pressed Turkish toast with melted mozzarella and sucuk sausage, served with fries',
    },
    price: 400,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gozleme-meat',
    categoryId: 'hot_starters',
    name: {
      ky: 'Кыймалы гозлеме',
      ru: 'Кыймалы гёзлеме',
      en: 'Minced Meat Gözleme',
    },
    description: {
      ky: 'Юфка, фарш, сыр',
      ru: 'Юфка, фарш, сыр',
      en: 'Thin hand-rolled dough griddled with spiced minced beef and cheese',
    },
    price: 450,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gozleme-cheese',
    categoryId: 'hot_starters',
    name: {
      ky: 'Пейнирли гозлеме',
      ru: 'Пейнирли гёзлеме',
      en: 'Cheese Gözleme',
    },
    description: {
      ky: 'Юфка, быштак, сыр',
      ru: 'Юфка, творог, сыр',
      en: 'Handmade flatbread folded with Turkish cheese and fresh herbs',
    },
    price: 370,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // БАЛДАР ТАНДООСУ / ДЕТСКОЕ МЕНЮ (Pages 20-21)
  // ==========================================
  {
    id: 'kids-chicken-nuggets',
    categoryId: 'kids',
    name: {
      ky: 'Тоок наггетсы',
      ru: 'Куриные наггетсы',
      en: 'Chicken Nuggets',
    },
    description: {
      ky: 'Панировкаланган тоок филеси картөшкө фри менен',
      ru: 'Куриное филе в панировке, подается с картофелем фри',
      en: 'Crispy breaded chicken breast tenders served with French fries and ketchup',
    },
    price: 360,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kids-fish-nuggets',
    categoryId: 'kids',
    name: {
      ky: 'Балык наггетсы',
      ru: 'Рыбные наггетсы',
      en: 'Fish Nuggets',
    },
    description: {
      ky: 'Панировкаланган балык филеси картөшкө фри менен',
      ru: 'Рыбное филе в панировке, подается с картофелем фри',
      en: 'Golden breaded white fish fillet sticks served with French fries',
    },
    price: 600,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kids-mini-lahmacun',
    categoryId: 'kids',
    name: {
      ky: 'Мини-лахмаджун',
      ru: 'Мини-лахмаджун',
      en: 'Mini Lahmacun',
    },
    description: {
      ky: 'Эт фаршы жана жаңы жашылча менен жука камыр',
      ru: 'Тонкое тесто с мясным фаршем и свежими овощами',
      en: 'Mini crisp Turkish flatbreads topped with seasoned ground beef and vegetables',
    },
    price: 500,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kids-mini-burger',
    categoryId: 'kids',
    name: {
      ky: 'Мини-бургер (2 даана)',
      ru: 'Мини-бургер (2 шт)',
      en: 'Mini Burgers (2 pcs)',
    },
    description: {
      ky: 'Уй котлетасы картөшкө фри менен (2 даана)',
      ru: 'С говяжей котлетой, подается с картофелем фри (2 шт)',
      en: 'Two tender beef sliders served with golden French fries',
    },
    price: 520,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kids-lamb-chops',
    categoryId: 'kids',
    name: {
      ky: 'Козунун кичине корейкасы',
      ru: 'Маленькая корейка ягненка',
      en: 'Kids Lamb Chops',
    },
    description: {
      ky: 'Козу этинен корейка картөшкө фри менен',
      ru: 'Корейка ягненка, подается с картофелем фри',
      en: 'Tender baby lamb chops grilled to perfection, served with French fries',
    },
    price: 700,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
];
