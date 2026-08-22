import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, menuCategories } from '../data/menu';
import ReservationCTA from '../components/ReservationCTA';
import SEO from '../components/SEO';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  // Synchronize category selection with URL search parameters
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('All');
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', category);
    }
    setSearchParams(searchParams);
    setActiveCategory(category);
  };

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B] pt-32 min-h-screen">
      <SEO 
        title="Curated Menu | Specialty Coffee & Artisanal Food | L'Atelier Café" 
        description="Explore single-origin filter roasts, house espresso tonics, and organic sourdough pastries prepared daily at L'Atelier." 
      />
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-16 space-y-4">
        <span className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block">
          Flavors & Terroirs
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1B1B1B]">
          The Atelier Menu
        </h1>
        <p className="text-sm font-sans text-[#1B1B1B]/70 max-w-lg mx-auto leading-relaxed">
          Explore our seasonal menu. From single-origin micro-lots roasted in-house to organic sourdough pastries shaped by hand.
        </p>
        <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-6"></div>
      </section>

      {/* Category Selection Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex overflow-x-auto pb-4 border-b border-[#5A3E2B]/10 scrollbar-none justify-start lg:justify-center items-center gap-1.5 lg:gap-2">
          {['All', ...menuCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              aria-label={`Filter menu by ${cat}`}
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

      {/* Menu Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between border-b border-[#5A3E2B]/10 pb-8 h-full"
              >
                <div className="space-y-4">
                  {/* Image container */}
                  <div className="overflow-hidden rounded-sm aspect-[4/3] relative bg-[#1B1B1B]/5 border border-[#5A3E2B]/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      {item.popular && (
                        <span className="bg-[#B08A57] text-[#F8F5F1] text-[8px] tracking-widest uppercase font-bold px-2 py-1 rounded-xs shadow-sm">
                          Popular
                        </span>
                      )}
                      {item.chefRecommendation && (
                        <span className="bg-[#5A3E2B] text-[#F8F5F1] text-[8px] tracking-widest uppercase font-bold px-2 py-1 rounded-xs shadow-sm">
                          Chef Choice
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="font-serif text-2xl text-[#1B1B1B]">{item.name}</h3>
                      <span className="font-serif text-lg text-[#5A3E2B] font-semibold shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Dietary labels */}
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {item.dietary.map(diet => (
                          <span 
                            key={diet} 
                            className="text-[8px] tracking-widest uppercase text-[#5A3E2B] border border-[#5A3E2B]/20 px-2 py-0.5 rounded-xs bg-[#5A3E2B]/5"
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-[#1B1B1B]/70 leading-relaxed font-sans pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between mt-auto">
                  <span className="text-[9px] uppercase tracking-widest text-[#B08A57] font-semibold">
                    {item.category}
                  </span>
                  <Link 
                    to="/reservations" 
                    className="text-[10px] uppercase tracking-widest text-[#5A3E2B] group-hover:text-[#B08A57] font-semibold transition-colors flex items-center gap-1"
                  >
                    Reserve Table &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#1B1B1B]/50 font-sans">
            No items available in this category.
          </div>
        )}
      </section>

      {/* Culinary Info Legend */}
      <section className="bg-[#1B1B1B] text-[#F8F5F1] py-16 border-t border-[#F8F5F1]/10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="font-serif text-lg text-[#B08A57]">Traceability</h2>
            <p className="text-[11px] text-[#F8F5F1]/70 leading-relaxed font-sans">
              100% of our coffee beans are directly traded with micro-lot farms, ensuring transparency and quality.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-lg text-[#B08A57]">Ingredients</h2>
            <p className="text-[11px] text-[#F8F5F1]/70 leading-relaxed font-sans">
              We source organic milk from local biodynamic farms and use unbleached artisanal French stone-ground flour.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-lg text-[#B08A57]">Allergies</h2>
            <p className="text-[11px] text-[#F8F5F1]/70 leading-relaxed font-sans">
              Cross-contamination precautions are strictly enforced. Please notify our service team of any specific dietary issues.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Invitation CTA */}
      <ReservationCTA />

    </div>
  );
}
