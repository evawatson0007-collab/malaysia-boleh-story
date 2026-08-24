export const img = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=72&w=${w}${h ? `&h=${h}` : ""}`;

export type Dish = {
  name: string;
  category: string;
  blurb: string;
  photo: string;
};

export const signatureDishes: Dish[] = [
  {
    name: "Nasi Lemak",
    category: "National Treasure",
    blurb: "Coconut rice, sambal with real heat, crisp anchovies, egg and cucumber.",
    photo: img("1585032226651-759b368d7246", 900, 1200),
  },
  {
    name: "Char Kway Teow",
    category: "Wok Hei",
    blurb: "Flat rice noodles seared hard over flame with prawns, egg and chives.",
    photo: img("1552611052-33e04de081de", 900, 1200),
  },
  {
    name: "Beef Rendang",
    category: "Slow Cooked",
    blurb: "Twelve hours in coconut, galangal and toasted chilli until it falls apart.",
    photo: img("1569718212165-3a8278d5f624", 900, 1200),
  },
  {
    name: "Chicken Satay",
    category: "Charcoal",
    blurb: "Turmeric-marinated skewers off the grill, thick peanut sauce, ketupat.",
    photo: img("1541544741938-0af808871cc0", 900, 1200),
  },
  {
    name: "Curry Laksa",
    category: "Bowl Food",
    blurb: "Coconut curry broth, noodles, tofu puffs, prawns and a squeeze of lime.",
    photo: img("1596797038530-2c107229654b", 900, 1200),
  },
  {
    name: "Roti Canai",
    category: "Hand Stretched",
    blurb: "Flipped, folded, flaky. Served with dhal and a bowl of chicken curry.",
    photo: img("1626804475297-41608ea09aeb", 900, 1200),
  },
];

export type MenuCategory = {
  slug: string;
  name: string;
  note: string;
  photo: string;
  items: { name: string; desc: string; price: string }[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "starters",
    name: "Starters",
    note: "Small plates for the middle of the table",
    photo: img("1541544741938-0af808871cc0", 1000),
    items: [
      { name: "Chicken Satay (6)", desc: "Charcoal skewers, peanut sauce, ketupat", price: "£8.50" },
      { name: "Roti Canai", desc: "Hand-stretched flatbread, dhal, curry dip", price: "£6.00" },
      { name: "Prawn Fritters", desc: "Crisp battered prawns, chilli lime mayo", price: "£9.00" },
      { name: "Curry Puffs (3)", desc: "Spiced potato, chicken, flaky pastry", price: "£6.50" },
    ],
  },
  {
    slug: "noodles",
    name: "Noodles",
    note: "Wok-fired and broth-based",
    photo: img("1552611052-33e04de081de", 1000),
    items: [
      { name: "Char Kway Teow", desc: "Prawns, egg, chives, dark soy, real wok hei", price: "£14.50" },
      { name: "Curry Laksa", desc: "Coconut curry broth, tofu puffs, prawns", price: "£15.00" },
      { name: "Mee Goreng Mamak", desc: "Yellow noodles, tomato chilli, potato, egg", price: "£13.50" },
      { name: "Hokkien Mee", desc: "Thick noodles, pork, prawn, cabbage", price: "£14.00" },
    ],
  },
  {
    slug: "rice",
    name: "Rice",
    note: "Where every Malaysian meal begins",
    photo: img("1585032226651-759b368d7246", 1000),
    items: [
      { name: "Nasi Lemak Ayam", desc: "Coconut rice, sambal, anchovies, fried chicken", price: "£15.50" },
      { name: "Nasi Goreng Kampung", desc: "Village fried rice, anchovies, egg", price: "£13.00" },
      { name: "Hainanese Chicken Rice", desc: "Poached chicken, ginger scallion, chilli", price: "£14.50" },
      { name: "Claypot Chicken Rice", desc: "Smoky claypot, sausage, dark soy", price: "£15.00" },
    ],
  },
  {
    slug: "mains",
    name: "Mains",
    note: "Slow cooked, deeply spiced",
    photo: img("1600891964092-4316c288032e", 1000),
    items: [
      { name: "Beef Rendang", desc: "12-hour dry curry, coconut, toasted chilli", price: "£18.00" },
      { name: "Ayam Masak Merah", desc: "Chicken braised in tomato chilli sambal", price: "£16.50" },
      { name: "Asam Pedas Fish", desc: "Sour tamarind chilli stew, okra", price: "£19.00" },
      { name: "Sambal Prawns", desc: "Tiger prawns, house sambal, lime", price: "£19.50" },
    ],
  },
  {
    slug: "vegetarian",
    name: "Vegetarian",
    note: "Never an afterthought",
    photo: img("1512621776951-a57141f2eefd", 1000),
    items: [
      { name: "Sayur Lodeh", desc: "Vegetables in coconut broth, tempeh", price: "£13.00" },
      { name: "Kangkung Belacan (V)", desc: "Water spinach, garlic, vegan sambal", price: "£9.50" },
      { name: "Tofu Sambal", desc: "Crisp tofu, sweet chilli sambal, peanuts", price: "£12.50" },
      { name: "Vegetable Curry Laksa", desc: "Coconut curry broth, aubergine, tofu", price: "£13.50" },
    ],
  },
  {
    slug: "desserts",
    name: "Desserts",
    note: "Pandan, palm sugar, shaved ice",
    photo: img("1567620905732-2d1ec7ab7445", 1000),
    items: [
      { name: "Cendol", desc: "Shaved ice, pandan jelly, gula melaka", price: "£7.00" },
      { name: "Pandan Kaya Toast", desc: "Coconut jam, salted butter, soft egg", price: "£6.50" },
      { name: "Sago Gula Melaka", desc: "Sago, palm sugar syrup, coconut cream", price: "£6.50" },
      { name: "Kuih Selection (4)", desc: "Rotating tray of Malaysian sweets", price: "£8.00" },
    ],
  },
  {
    slug: "drinks",
    name: "Drinks",
    note: "Kopitiam classics and cold ones",
    photo: img("1466978913421-dad2ebd01d17", 1000),
    items: [
      { name: "Teh Tarik", desc: "Pulled milk tea, properly frothy", price: "£4.00" },
      { name: "Kopi O", desc: "Dark roast kopitiam coffee", price: "£3.50" },
      { name: "Fresh Coconut", desc: "Whole young coconut, over ice", price: "£5.50" },
      { name: "Tiger Beer", desc: "Draught, 330ml or pint", price: "£5.00" },
    ],
  },
];

export type Location = {
  slug: string;
  city: string;
  name: string;
  address: string;
  hours: { days: string; time: string }[];
  phone: string;
  photo: string;
  maps: string;
};

export const locations: Location[] = [
  {
    slug: "manchester",
    city: "Manchester",
    name: "Malaysia Boleh Northern Quarter",
    address: "48 Thomas Street, Northern Quarter, Manchester M4 1ER",
    hours: [
      { days: "Mon – Thu", time: "12:00 – 22:00" },
      { days: "Fri – Sat", time: "12:00 – 23:30" },
      { days: "Sunday", time: "12:00 – 21:00" },
    ],
    phone: "0161 000 0001",
    photo: img("1552566626-52f8b828add9", 1200),
    maps: "https://maps.google.com/?q=Thomas+Street+Manchester",
  },
  {
    slug: "london",
    city: "London",
    name: "Malaysia Boleh Soho",
    address: "17 Newport Court, Chinatown, London WC2H 7JS",
    hours: [
      { days: "Mon – Thu", time: "12:00 – 22:30" },
      { days: "Fri – Sat", time: "12:00 – 00:00" },
      { days: "Sunday", time: "12:00 – 21:30" },
    ],
    phone: "020 0000 0002",
    photo: img("1517248135467-4c7edcad34c4", 1200),
    maps: "https://maps.google.com/?q=Newport+Court+London",
  },
  {
    slug: "birmingham",
    city: "Birmingham",
    name: "Malaysia Boleh Jewellery Quarter",
    address: "9 Caroline Street, Jewellery Quarter, Birmingham B3 1TR",
    hours: [
      { days: "Mon – Thu", time: "12:00 – 21:30" },
      { days: "Fri – Sat", time: "12:00 – 23:00" },
      { days: "Sunday", time: "Closed" },
    ],
    phone: "0121 000 0003",
    photo: img("1414235077428-338989a2e8c0", 1200),
    maps: "https://maps.google.com/?q=Caroline+Street+Birmingham",
  },
];

export const bakeryItems = [
  { name: "Pandan Kaya Rolls", desc: "Soft milk bread, pandan custard", photo: img("1509440159596-0249088772ff", 900) },
  { name: "Kuih Tray", desc: "Steamed layers, palm sugar, coconut", photo: img("1533777324565-a040eb52facd", 900) },
  { name: "Gula Melaka Buns", desc: "Sticky palm sugar, salted butter", photo: img("1559339352-11d035aa65de", 900) },
];

export type Campaign = {
  tag: string;
  title: string;
  copy: string;
  photo: string;
  when: string;
};

export const campaigns: Campaign[] = [
  {
    tag: "World Cup 2026",
    title: "Big Screens. Bigger Sambal.",
    copy: "Every match live across all three sites, with a match-day sharing menu and jugs of iced teh.",
    photo: img("1543007630-9710e4a00a20", 1200),
    when: "Jun – Jul 2026",
  },
  {
    tag: "Special Menu",
    title: "Penang Street Food Nights",
    copy: "Six courses from Chulia Street, cooked by our head chef's family recipes. Thursdays only.",
    photo: img("1476224203421-9ac39bcb3327", 1200),
    when: "Every Thursday",
  },
  {
    tag: "Festival",
    title: "Hari Raya Open House",
    copy: "The whole restaurant becomes one long table. Rendang, lemang, kuih and no rush.",
    photo: img("1517244683847-7456b63c5969", 1200),
    when: "Spring 2026",
  },
];
