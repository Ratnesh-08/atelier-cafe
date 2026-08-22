import { Award, Star, BookOpen, Coffee } from 'lucide-react';
import { chefs } from '../data/chefs';
import ReservationCTA from '../components/ReservationCTA';
import SEO from '../components/SEO';

export default function Chefs() {
  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B] pt-32 min-h-screen">
      <SEO 
        title="Our Culinary Artisans | Master Roasters & Pastry Chefs | L'Atelier Café" 
        description="Meet the Michelin-trained pastry chefs, master roasters, and culinary directors behind L'Atelier's seasonal pairings." 
      />
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-16 space-y-4">
        <span className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block">
          Behind the Craft
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1B1B1B]">
          Our Culinary Artisans
        </h1>
        <p className="text-sm font-sans text-[#1B1B1B]/70 max-w-lg mx-auto leading-relaxed">
          Meet the minds shaping our menus. Our team brings decades of Michelin-starred experiences and global brewing accolades to L'Atelier.
        </p>
        <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-6"></div>
      </section>

      {/* Chefs List Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-24 lg:space-y-36">
        {chefs.map((chef, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={chef.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              
              {/* Chef Portrait (Col Span 5) */}
              <div className={`lg:col-span-5 relative ${
                isEven ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <div className="overflow-hidden rounded-sm aspect-[3/4] border border-[#5A3E2B]/10 bg-[#1B1B1B]/5 shadow-[0_12px_40px_rgba(90,62,43,0.02)]">
                  <img
                    src={chef.image}
                    alt={`Portrait of ${chef.name}, ${chef.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                    loading="lazy"
                  />
                </div>
                {/* Accent background panel */}
                <div className="absolute -inset-4 border border-[#B08A57]/20 -z-10 rounded-sm pointer-events-none translate-x-2 translate-y-2"></div>
              </div>

              {/* Chef Narrative (Col Span 7) */}
              <div className={`lg:col-span-7 space-y-8 ${
                isEven ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest text-[#B08A57] uppercase font-bold">
                    {chef.role}
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl text-[#1B1B1B] font-light">
                    {chef.name}
                  </h2>
                  <div className="editorial-line !mt-4"></div>
                </div>

                <p className="text-sm font-sans text-[#1B1B1B]/80 leading-relaxed">
                  {chef.bio}
                </p>

                {/* Grid details (Philosophy, Specialty, Awards, Signatures) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  
                  {/* Philosophy & Specialty */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl text-[#5A3E2B] flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#B08A57]" />
                        Philosophy
                      </h3>
                      <p className="text-xs font-sans text-[#1B1B1B]/70 leading-relaxed italic">
                        "{chef.philosophy}"
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl text-[#5A3E2B] flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#B08A57]" />
                        Culinary Specialty
                      </h3>
                      <p className="text-xs font-sans text-[#1B1B1B]/70 leading-relaxed">
                        {chef.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Experience, Awards, Signatures */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl text-[#5A3E2B] flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#B08A57]" />
                        Accolades & History
                      </h3>
                      <ul className="space-y-1.5 text-xs font-sans text-[#1B1B1B]/70 list-disc list-inside">
                        {chef.experience.slice(0, 2).map((exp, i) => (
                          <li key={i} className="line-clamp-1">{exp}</li>
                        ))}
                        {chef.awards.slice(0, 1).map((awd, i) => (
                          <li key={i} className="text-[#B08A57] font-semibold">{awd}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl text-[#5A3E2B] flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-[#B08A57]" />
                        Signature Creations
                      </h3>
                      <ul className="space-y-1 text-xs font-sans text-[#1B1B1B]/70 font-medium">
                        {chef.signatureDishes.map((dish, i) => (
                          <li key={i} className="text-[#5A3E2B]">&bull; {dish}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Reservation invitation */}
      <ReservationCTA />

    </div>
  );
}
