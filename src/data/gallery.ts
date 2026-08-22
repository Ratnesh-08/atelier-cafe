import { IMAGES } from './images';

export interface GalleryItem {
  id: string;
  url: string;
  category: 'Interior' | 'Food' | 'Coffee' | 'Kitchen' | 'Events' | 'Lifestyle';
  title: string;
}

export const galleryCategories = [
  'All',
  'Interior',
  'Food',
  'Coffee',
  'Kitchen',
  'Events',
  'Lifestyle'
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    url: IMAGES.gallery.interior1,
    category: 'Interior',
    title: 'The Central Lounge'
  },
  {
    id: 'g-2',
    url: IMAGES.gallery.coffee1,
    category: 'Coffee',
    title: 'Precision Brewing'
  },
  {
    id: 'g-3',
    url: IMAGES.gallery.food1,
    category: 'Food',
    title: 'Wild Mushroom Tartine'
  },
  {
    id: 'g-4',
    url: IMAGES.gallery.kitchen1,
    category: 'Kitchen',
    title: 'The Fire & Passion'
  },
  {
    id: 'g-5',
    url: IMAGES.gallery.events1,
    category: 'Events',
    title: 'Private Banquet Setup'
  },
  {
    id: 'g-6',
    url: IMAGES.gallery.interior2,
    category: 'Interior',
    title: 'Morning Sunbeams'
  },
  {
    id: 'g-7',
    url: IMAGES.gallery.coffee2,
    category: 'Coffee',
    title: 'Atelier Espresso Shot'
  },
  {
    id: 'g-8',
    url: IMAGES.gallery.food2,
    category: 'Food',
    title: 'Mille-Crêpe Preparation'
  },
  {
    id: 'g-9',
    url: IMAGES.gallery.kitchen2,
    category: 'Kitchen',
    title: 'Artisanal Flour Dusting'
  },
  {
    id: 'g-10',
    url: IMAGES.gallery.lifestyle1,
    category: 'Lifestyle',
    title: 'Quiet Reflection'
  },
  {
    id: 'g-11',
    url: IMAGES.gallery.lifestyle2,
    category: 'Lifestyle',
    title: 'Minimalist Dining Reading'
  },
  {
    id: 'g-12',
    url: IMAGES.gallery.food3,
    category: 'Food',
    title: 'Salmon Benedict Plating'
  }
];
