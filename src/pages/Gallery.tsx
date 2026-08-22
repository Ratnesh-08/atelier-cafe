import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import SEO from '../components/SEO';
import 'react-photo-view/dist/react-photo-view.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B] pt-32 min-h-screen">
      <SEO 
        title="Atmosphere Gallery | Visual Journey | L'Atelier Café" 
        description="Explore the quiet moments, roasting craftsmanship, and geometry of pastries at L'Atelier Café." 
      />
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-16 space-y-4">
        <span className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block">
          Aesthetic Details
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1B1B1B]">
          Visual Stories
        </h1>
        <p className="text-sm font-sans text-[#1B1B1B]/70 max-w-lg mx-auto leading-relaxed">
          A glimpse into the quiet spaces, roasting rituals, and pastry geometries that define L'Atelier. All images captured on-site by our residents.
        </p>
        <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-6"></div>
      </section>

      {/* Category selector row */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex overflow-x-auto pb-4 border-b border-[#5A3E2B]/10 scrollbar-none justify-start lg:justify-center items-center gap-1.5 lg:gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-label={`Filter gallery by ${cat}`}
              aria-pressed={activeCategory === cat}
              className={`
                px-5 py-2.5 text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 rounded-full whitespace-nowrap shrink-0
                ${activeCategory === cat
                  ? 'bg-[#5A3E2B] text-[#F8F5F1]'
                  : 'bg-transparent text-[#1B1B1B]/70 hover:text-[#5A3E2B]'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid Gallery with React Photo View Lightbox */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <PhotoProvider>
          <motion.div 
            layout 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <PhotoView key={item.id} src={item.url}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative cursor-pointer overflow-hidden aspect-[3/4] border border-[#5A3E2B]/5 rounded-sm bg-[#1B1B1B]/5"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-103"
                      loading="lazy"
                    />

                    {/* Editorial Overlay on hover */}
                    <div className="absolute inset-0 bg-[#1B1B1B]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                      <div className="flex justify-end">
                        <div className="w-8 h-8 rounded-full border border-[#F8F5F1]/30 flex items-center justify-center text-[#F8F5F1] group-hover:border-[#B08A57] transition-colors">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[9px] uppercase tracking-widest text-[#B08A57] font-semibold">
                          {item.category}
                        </span>
                        <h2 className="font-serif text-lg text-[#F8F5F1] font-light">
                          {item.title}
                        </h2>
                      </div>
                    </div>

                  </motion.div>
                </PhotoView>
              ))}
            </AnimatePresence>
          </motion.div>
        </PhotoProvider>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#1B1B1B]/50 font-sans">
            No images in this category yet.
          </div>
        )}
      </section>

    </div>
  );
}
