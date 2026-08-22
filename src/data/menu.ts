import { IMAGES } from './images';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Espresso' | 'Cold Brew' | 'Tea' | 'Breakfast' | 'Brunch' | 'Desserts' | 'Signature Drinks';
  description: string;
  price: number;
  image: string;
  dietary?: ('Vegan' | 'Vegetarian' | 'Gluten-Free' | 'Dairy-Free')[];
  popular?: boolean;
  chefRecommendation?: boolean;
}

export const menuCategories = [
  'Coffee',
  'Espresso',
  'Cold Brew',
  'Tea',
  'Breakfast',
  'Brunch',
  'Desserts',
  'Signature Drinks'
] as const;

export const menuItems: MenuItem[] = [
  // Espresso
  {
    id: 'e1',
    name: 'Atelier Espresso',
    category: 'Espresso',
    description: 'Our signature double shot of heirloom Bourbon variety. Sourced from the high-altitude fields of Antigua, Guatemala. Tasting notes of dark cacao, orange zest, and jasmine.',
    price: 6.00,
    image: IMAGES.menu.espresso,
    popular: true
  },
  {
    id: 'e2',
    name: 'Velvet Flat White',
    category: 'Espresso',
    description: 'Double shot of Atelier espresso combined with micro-foamed organic A2 milk, creating a velvety texture with a sweet, caramel-like finish.',
    price: 7.50,
    image: IMAGES.menu.flatWhite,
    popular: true
  },
  {
    id: 'e3',
    name: 'Cardamom Rose Latte',
    category: 'Espresso',
    description: 'A delicate fusion of house-made cardamom syrup, organic rosewater, and double espresso, topped with dried damask rose petals.',
    price: 8.50,
    image: IMAGES.menu.cardamomRose,
    chefRecommendation: true
  },
  // Coffee
  {
    id: 'c1',
    name: 'Single Origin V60 Pour-Over',
    category: 'Coffee',
    description: 'Slow-dripped volcanic Geisha beans from Chiriquí, Panama. Hand-brewed to order. Incredibly clean cup with notes of bergamot, lemongrass, and white peach.',
    price: 11.00,
    image: IMAGES.menu.v60,
    chefRecommendation: true
  },
  {
    id: 'c2',
    name: 'Kyoto-Style Drip',
    category: 'Coffee',
    description: 'Siphon-brewed iced coffee using light-roasted Ethiopian Yirgacheffe. Crisp, tea-like consistency with notes of blueberry and lavender.',
    price: 9.00,
    image: IMAGES.menu.kyotoDrip
  },
  // Cold Brew
  {
    id: 'cb1',
    name: 'Nitro Gold Cold Brew',
    category: 'Cold Brew',
    description: 'Slow-steeped for 18 hours and infused with nitrogen for a cascading velvet head. Finished with a subtle hint of organic maple and edible 24k gold leaf.',
    price: 12.00,
    image: IMAGES.menu.nitroColdBrew,
    popular: true
  },
  {
    id: 'cb2',
    name: 'Smoked Vanilla Cold Draft',
    category: 'Cold Brew',
    description: 'Cold brew draft infused with bourbon vanilla bean syrup, cold-smoked with cherrywood chips at your table.',
    price: 10.50,
    image: IMAGES.menu.smokedVanilla
  },
  // Tea
  {
    id: 't1',
    name: 'Ceremonial Uji Matcha Latte',
    category: 'Tea',
    description: 'Stone-ground Uji matcha whisked by hand, poured over cold oat milk. Creamy, umami-rich, and clean-finishing. Naturally sweetened with organic agave.',
    price: 9.00,
    image: IMAGES.menu.matchaLatte,
    dietary: ['Vegan', 'Dairy-Free'],
    popular: true
  },
  {
    id: 't2',
    name: 'Ancient Pu-Erh (15-Year Old)',
    category: 'Tea',
    description: 'Rare fermented tea leaves from Yunnan province. Deeply earthy, rich, complex body with accents of autumn leaves, damp wood, and dark stone fruits.',
    price: 14.00,
    image: IMAGES.menu.puErh,
    dietary: ['Vegan', 'Gluten-Free', 'Dairy-Free']
  },
  // Breakfast
  {
    id: 'b1',
    name: 'Wild Mushroom Tartine',
    category: 'Breakfast',
    description: 'Sautéed chanterelle and porcini mushrooms, black truffle cream, poached organic egg, and baby watercress on toasted rustic sourdough.',
    price: 18.00,
    image: IMAGES.menu.mushroomTartine,
    dietary: ['Vegetarian'],
    chefRecommendation: true
  },
  {
    id: 'b2',
    name: 'Heirloom Avocado & Fennel',
    category: 'Breakfast',
    description: 'Hass avocado mash on seeded rye, topped with shaved fennel, blood orange segments, organic goat cheese, and toasted pumpkin seeds.',
    price: 16.50,
    image: IMAGES.menu.avocadoFennel,
    dietary: ['Vegetarian']
  },
  // Brunch
  {
    id: 'br1',
    name: 'Saffron Smoked Salmon Benedict',
    category: 'Brunch',
    description: 'House-cured Scottish salmon on artisanal English muffin, poached organic eggs, topped with a velvety saffron-infused hollandaise sauce.',
    price: 24.00,
    image: IMAGES.menu.salmonBenedict,
    popular: true
  },
  {
    id: 'br2',
    name: 'Truffled Egg & Soldier',
    category: 'Brunch',
    description: 'Slow-cooked organic coddled eggs with grated fresh Perigord black truffle, served alongside crispy buttered brioche soldiers.',
    price: 22.00,
    image: IMAGES.menu.truffledEgg,
    chefRecommendation: true
  },
  // Desserts
  {
    id: 'd1',
    name: 'Deconstructed Espresso Tiramisu',
    category: 'Desserts',
    description: 'Mascarpone mousse, espresso gelée, cold brew-soaked ladyfinger crumbs, dusted with single-origin Madagascan cocoa powder.',
    price: 15.00,
    image: IMAGES.menu.tiramisu,
    dietary: ['Vegetarian'],
    popular: true
  },
  {
    id: 'd2',
    name: 'Yuzu Matcha Mille-Crêpe',
    category: 'Desserts',
    description: 'Twenty paper-thin crêpes layered with light Uji matcha pastry cream, topped with a refreshing candied yuzu peel glaze.',
    price: 14.50,
    image: IMAGES.menu.milleCrepe,
    dietary: ['Vegetarian']
  },
  // Signature Drinks
  {
    id: 's1',
    name: 'The Golden Hour Siphon',
    category: 'Signature Drinks',
    description: 'Brewed live in a gold siphon. A hot brew of organic cascara (coffee cherry), orange blossom water, cinnamon, honey, and a dash of star anise.',
    price: 16.00,
    image: IMAGES.menu.siphon,
    dietary: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 's2',
    name: 'Cold-Pressed Lavender Elixir',
    category: 'Signature Drinks',
    description: 'Espresso poured over chilled coconut water, cold-pressed organic lavender flower concentrate, finished with a fresh sprig of French lavender.',
    price: 9.50,
    image: IMAGES.menu.lavenderElixir,
    dietary: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    popular: true
  }
];
