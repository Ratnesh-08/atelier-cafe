import { IMAGES } from './images';

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  favoriteDish: string;
  experience: string;
  origin: 'Google Reviews' | 'Editorial' | 'Michelin Guide';
}

export const reviewMetrics = {
  averageRating: 4.9,
  totalReviews: 482,
  ratingsBreakdown: {
    5: 442,
    4: 32,
    3: 6,
    2: 2,
    1: 0
  }
};

export const reviewsList: Review[] = [
  {
    id: 'r-1',
    name: 'Eleanora Sterling',
    avatar: IMAGES.reviews.eleanora,
    rating: 5,
    date: 'June 2026',
    favoriteDish: 'Panama Geisha V60 & Yuzu Mille-Crêpe',
    experience: 'L\'Atelier is a sanctuary. The attention to detail is remarkable—from the linen napkins to the precise temperature of the pour-over coffee. It feels more like a quiet gallery in Tokyo than a bustling cafe. Emi Tanaka\'s pastry is exceptional; not overly sweet, but rich with complex tea flavor.',
    origin: 'Editorial'
  },
  {
    id: 'r-2',
    name: 'Marcus Vance',
    avatar: IMAGES.reviews.marcus,
    rating: 5,
    date: 'July 2026',
    favoriteDish: 'Wild Mushroom Tartine',
    experience: 'An absolute masterpiece of design and gastronomy. The warm lighting and minimal wooden architecture instantly put you at ease. The mushroom tartine was rich, perfectly balanced by a poached egg that was cooked to perfection. I recommend booking the terrace seating in advance.',
    origin: 'Google Reviews'
  },
  {
    id: 'r-3',
    name: 'Clarissa Fontaine',
    avatar: IMAGES.reviews.clarissa,
    rating: 5,
    date: 'May 2026',
    favoriteDish: 'The Golden Hour Siphon',
    experience: 'Sitting at the Chef\'s Counter watching Julian brew the Siphon was like watching a tea ceremony. The aroma of orange blossom and spices fills the room. It\'s an expensive visit, but entirely justified by the craftsmanship and elite level of service.',
    origin: 'Michelin Guide'
  },
  {
    id: 'r-4',
    name: 'Arthur Pendelton',
    avatar: IMAGES.reviews.arthur,
    rating: 4,
    date: 'April 2026',
    favoriteDish: 'Cardamom Rose Latte',
    experience: 'Truly exceptional coffee. The espresso has an incredible mouthfeel with clear tasting notes. My only minor critique is that walk-in wait times can be long during weekend brunch hours, but the staff handled it with absolute grace and offered cold brew samples while we waited.',
    origin: 'Google Reviews'
  },
  {
    id: 'r-5',
    name: 'Sofia Kenin',
    avatar: IMAGES.reviews.sofia,
    rating: 5,
    date: 'July 2026',
    favoriteDish: 'Nitro Gold Cold Brew & Tiramisu',
    experience: 'A stunning sensory escape. The deconstructed tiramisu is the best I have ever had. The layering of textures and the bitterness of the cocoa dusting is perfectly tuned. The background playlist is soft and refined, and the space feels incredibly exclusive.',
    origin: 'Editorial'
  }
];
