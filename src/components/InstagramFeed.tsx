import { InstagramIcon } from './SocialIcons';
import { IMAGES } from '../data/images';

export default function InstagramFeed() {
  const feedImages = [
    {
      id: 'ig-1',
      url: IMAGES.gallery.interior1,
      alt: 'Lounge morning lighting'
    },
    {
      id: 'ig-2',
      url: IMAGES.gallery.coffee2,
      alt: 'Espresso cup close-up'
    },
    {
      id: 'ig-3',
      url: IMAGES.gallery.food2,
      alt: 'Uji matcha crêpe layers'
    },
    {
      id: 'ig-4',
      url: IMAGES.gallery.coffee1,
      alt: 'Pouring coffee slowly'
    },
    {
      id: 'ig-5',
      url: IMAGES.gallery.interior2,
      alt: 'Minimalist seating details'
    },
    {
      id: 'ig-6',
      url: IMAGES.gallery.food1,
      alt: 'Artisanal mushroom tartine'
    }
  ];

  return (
    <section className="bg-[#F8F5F1] py-24 border-t border-[#5A3E2B]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 text-center md:text-left">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block mb-2">
              Curated Stories
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-[#1B1B1B]">
              Follow Our Journey @latelier.cafe
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="border border-[#5A3E2B]/35 hover:bg-[#5A3E2B] hover:text-[#F8F5F1] text-[#5A3E2B] px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center gap-2 group font-semibold shrink-0"
          >
            <InstagramIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Connect on Instagram
          </a>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedImages.map((img) => (
            <div 
              key={img.id} 
              className="relative overflow-hidden group aspect-square border border-[#5A3E2B]/5 rounded-xs"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1B1B1B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon className="w-6 h-6 text-[#F8F5F1]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
