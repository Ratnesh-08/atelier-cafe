import { IMAGES } from './images';

export interface MegaMenuPreview {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const megaMenuPreviews: MegaMenuPreview[] = [
  {
    id: 'e3',
    name: 'Cardamom Rose Latte',
    price: 8.50,
    image: IMAGES.menu.cardamomRose
  },
  {
    id: 'c1',
    name: 'Single Origin V60 Pour-Over',
    price: 11.00,
    image: IMAGES.menu.v60
  },
  {
    id: 'b1',
    name: 'Wild Mushroom Tartine',
    price: 18.00,
    image: IMAGES.menu.mushroomTartine
  }
];
