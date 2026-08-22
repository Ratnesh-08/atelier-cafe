import { IMAGES } from './images';

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  category: 'Craftsmanship' | 'Origin' | 'Seasonal' | 'Culture';
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const stories: Story[] = [
  {
    id: 'story-1',
    title: 'The Volcanic Terraces of Chiriquí',
    subtitle: 'A journey to the source of our Panama Geisha coffee.',
    category: 'Origin',
    date: 'June 14, 2026',
    readTime: '6 min read',
    excerpt: 'High up in the shadows of the Baru Volcano, we discovered a micro-lot that redefines the parameters of floral complexity in coffee. Read about our direct-trade sourcing project.',
    image: IMAGES.gallery.story1,
    content: [
      'Sourcing the finest beans is not a desk job. It requires dust on your boots, thin air in your lungs, and sharing tea with third-generation farmers who understand the land better than any scientist. In May of this year, we climbed the volcanic hills of Chiriquí, Panama, looking for a rare heirloom variety of Geisha coffee.',
      'At 1,950 meters above sea level, the climate is ideal. The cool night winds slow the ripening process of the coffee cherries, allowing complex sugars to concentrate inside the bean. The volcanic soil provides rich potassium and nitrogen, which manifests in the cup as a brilliant, tea-like acidity.',
      'Our partnership with Señor Emilio Vargas ensures his micro-lot receives premium direct-trade pricing—over three times the fair-trade baseline. In exchange, we receive exclusive access to his annual harvest of just four bags. We roast this precious yield in micro-batches of 2kg, ensuring every cup brewed at L\'Atelier does justice to the soil of Chiriquí.'
    ]
  },
  {
    id: 'story-2',
    title: 'The Silent Ceremony of Siphon Brewing',
    subtitle: 'Why we continue to use science and fire for our signature coffee.',
    category: 'Craftsmanship',
    date: 'May 28, 2026',
    readTime: '4 min read',
    excerpt: 'Invented in the 1830s, the vacuum siphon remains the most sensory and theatrical method to brew a clean cup of coffee. We explore the physics and patience behind it.',
    image: IMAGES.gallery.story2,
    content: [
      'In a world dominated by instant automation and touchscreen coffee machines, there is a profound beauty in stepping back. Siphon brewing is a celebration of physics, chemistry, and kinetics. It uses vacuum pressure and live flame to extract oils and soluble elements in a way that filtration paper never can.',
      'The process begins with water heated in the lower glass bulb. As it boils, steam forces the hot water up a glass tube into the upper chamber where the freshly ground beans wait. After a precise 45-second immersion stir, the flame is removed. As the lower bulb cools, a vacuum forms, pulling the brewed liquid back down through a cloth filter.',
      'The result is a cup of astonishing clarity and medium body. Without the paper filter absorbing the natural coffee oils, you taste the full essential profile. At L\'Atelier, our Golden Hour Siphon adds a touch of orange blossom water to highlight these natural floral esters. It is a slow brew, taking five minutes to prepare, but some things cannot be rushed.'
    ]
  },
  {
    id: 'story-3',
    title: 'Crafting the Perfect Layer: The Art of the Mille-Crêpe',
    subtitle: 'Pastry chef Emi Tanaka discusses the geometry and texture of our signature cake.',
    category: 'Seasonal',
    date: 'April 19, 2026',
    readTime: '5 min read',
    excerpt: 'Twenty layers of paper-thin crêpes and hand-whisked Uji matcha cream. Discover the meticulous process behind our most-requested pastry.',
    image: IMAGES.gallery.story3,
    content: [
      'Many bakeries pride themselves on speed and volume. Emi Tanaka, our Head of Pastry, prides herself on geometry. The Mille-Crêpe cake at L\'Atelier is not baked in an oven; it is assembled, layer by agonizing layer, by hand over the course of three hours.',
      'We use organic flour and free-range eggs to create a batter that is strained three times to ensure zero lumps. Each crêpe is cooked on a copper plate for exactly 18 seconds on one side, and 5 seconds on the reverse. The crêpe must be so thin that you can read a newspaper through it.',
      'Between each layer of crêpe, Emi spreads a microscopic film of pastry cream infused with stone-ground Uji matcha. The cream is calculated to be exactly 1mm thick. Twenty layers are built up, chilled, and then glazed with candied yuzu juice. The result is a pastry that collapses satisfyingly under a fork, offering a contrasting burst of earthy matcha cream and citrus acidity.'
    ]
  }
];
