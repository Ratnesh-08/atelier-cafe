import { IMAGES } from './images';

export interface Chef {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string[];
  awards: string[];
  specialty: string;
  philosophy: string;
  signatureDishes: string[];
}

export const chefs: Chef[] = [
  {
    id: 'chef-1',
    name: 'Antoine Laurent',
    role: 'Executive Culinary Director',
    image: IMAGES.chefs.antoine,
    bio: 'Hailing from Lyon, Antoine spent over a decade working in three-Michelin-starred kitchens across Paris and Tokyo. He brings a precise, modernist approach to L\'Atelier, seamlessly blending traditional French techniques with clean Japanese flavors.',
    experience: [
      'L\'Ambroisie, Paris (Chef de Partie)',
      'Ryugin, Tokyo (Sous Chef)',
      'Le Jardin du Goût, Geneva (Executive Chef)'
    ],
    awards: [
      'Meilleur Ouvrier de France (MOF) nominee 2021',
      'Michelin Young Chef Award 2018',
      'Gault & Millau "Chef of the Future" 2019'
    ],
    specialty: 'Micro-seasonal brunch and modern savory pastries',
    philosophy: 'Respect the ingredient above all. A chef is merely a bridge between the earth\'s offering and the guest\'s senses. Let the natural textures and pure flavors speak without unnecessary noise.',
    signatureDishes: [
      'Wild Mushroom Tartine with Black Truffle Cream',
      'Saffron Smoked Salmon Benedict'
    ]
  },
  {
    id: 'chef-2',
    name: 'Emi Tanaka',
    role: 'Head of Pastry & Confectionery',
    image: IMAGES.chefs.emi,
    bio: 'Born in Kyoto, Emi studied pastry arts in Paris before working at the legendary Pierre Hermé. Her work at L\'Atelier is defined by low-sugar, high-texture creations that elevate tea and coffee pairings into complete sensory journeys.',
    experience: [
      'Pierre Hermé, Paris (Senior Pastry Stylist)',
      'The Ritz-Carlton, Tokyo (Executive Pastry Chef)',
      'L\'Atelier (Founding Pastry Partner)'
    ],
    awards: [
      'World Pastry Championship - Best Plated Dessert (2017)',
      'Asia\'s Best Pastry Chef (Gault & Millau 2020)'
    ],
    specialty: 'Mille-Crêpe layers and deconstructed chocolate pastries',
    philosophy: 'Pastry is an art of absolute precision. A variance of a single gram or degree can ruin a masterpiece. My creations strive to balance sweetness with acidity, bitterness, and texture.',
    signatureDishes: [
      'Yuzu Matcha Mille-Crêpe',
      'Deconstructed Espresso Tiramisu'
    ]
  },
  {
    id: 'chef-3',
    name: 'Julian Vance',
    role: 'Master Coffee Roaster & Barista',
    image: IMAGES.chefs.julian,
    bio: 'Julian has spent 15 years traveling the equatorial coffee belt, establishing direct-trade relationships with family-owned micro-lots. He oversees our roasting program in-house, ensuring each batch highlights its unique terroir.',
    experience: [
      'World Barista Championship (Runner-up 2018)',
      'Terroir Coffee Sourcing (Lead Greens Buyer)',
      'Starbucks Reserve Roastery (Senior Roasting Consultant)'
    ],
    awards: [
      'World Cup Tasters Champion 2019',
      'National Barista Champion (2016, 2018)'
    ],
    specialty: 'Siphon brewing and sensory profile mapping',
    philosophy: 'Coffee is a crop, not a commodity. Each bean carries the memory of the soil, the rain, and the farmer\'s hands. My goal is to roast and brew in a way that respects that origin stories.',
    signatureDishes: [
      'Single Origin Panama Geisha V60',
      'The Golden Hour Siphon'
    ]
  }
];
