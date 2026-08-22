import { Compass, ShieldCheck, Heart } from 'lucide-react';
import ReservationCTA from '../components/ReservationCTA';
import { IMAGES } from '../data/images';
import SEO from '../components/SEO';

export default function About() {
  const timeline = [
    {
      year: '2018',
      title: 'The Paris Concept',
      desc: 'Founded in a quiet passageway of the 6th arrondissement by Emi Tanaka and Antoine Laurent. A small space of six benches pairing hand-whisked Kyoto teas with traditional French sourdough confections.'
    },
    {
      year: '2020',
      title: 'In-House Roasting',
      desc: 'Imported a restored 15kg Probat drum roaster and initiated our direct-trade sourcing program. Julian Vance joins the partnership, establishing direct contracts with volcanic Geisha fields in Panama.'
    },
    {
      year: '2022',
      title: 'The Tokyo Sanctuary',
      desc: 'Opened our second location in the quiet outskirts of Meguro, Tokyo. Designed with local cedar and paper screens, establishing our signature architectural minimal tone.'
    },
    {
      year: '2025',
      title: 'Modern Sustainability Sourcing',
      desc: 'Established our carbon-neutral sourcing commitment, paying 100% of our partner micro-lot growers a minimum of 2.5x the standard fair-trade wages.'
    }
  ];

  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B] pt-32 min-h-screen">
      <SEO 
        title="About Us | Heritage & Philosophy | L'Atelier Café" 
        description="Discover the heritage of L'Atelier Café, founded at the intersection of Kyoto architectural minimalism and Parisian culinary history." 
      />
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-16 space-y-4">
        <span className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block">
          Our Heritage & Ethos
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1B1B1B]">
          A Sanctuary of Intent
        </h1>
        <p className="text-sm font-sans text-[#1B1B1B]/70 max-w-lg mx-auto leading-relaxed">
          Formed by the overlap of Kyoto minimal design and Parisian culinary history, L'Atelier is a commitment to details.
        </p>
        <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-6"></div>
      </section>

      {/* Brand Story split row */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] tracking-widest text-[#B08A57] uppercase font-bold">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-[#1B1B1B] leading-tight">
              Where East Meets West in Quiet Contemplation
            </h2>
            <p className="text-sm font-sans text-[#1B1B1B]/75 leading-relaxed">
              L'Atelier was founded not as a commercial food business, but as a design experiment. Emi Tanaka, a confectionery stylist from Kyoto, and Antoine Laurent, a classic French baker from Lyon, wanted to see what happened when you subjected daily breakfast habits to extreme precision.
            </p>
            <p className="text-sm font-sans text-[#1B1B1B]/75 leading-relaxed">
              They rented a small former bookbinder shop on Rue de l'Odéon. The shop retained its dark wood shelves and stone floors. Emi introduced light wood benches, paper screens, and cast-iron kettles. This mixture of French historic charm and Japanese aesthetic balance became the foundation of our philosophy.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm aspect-[16/10] border border-[#5A3E2B]/10 shadow-[0_12px_40px_rgba(90,62,43,0.01)] bg-[#1B1B1B]/5">
            <img 
              src={IMAGES.about.interior} 
              alt="Atelier dining wood table details" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Coffee Sourcing & Principles (Three Cards) */}
      <section className="bg-[#1B1B1B] text-[#F8F5F1] py-24 border-y border-[#F8F5F1]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl font-light text-[#F8F5F1]">
              How We Create Daily Rituals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border border-[#F8F5F1]/20 flex items-center justify-center text-[#B08A57] mx-auto md:mx-0">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-2xl text-[#F8F5F1]">Ethical Sourcing</h3>
              <p className="text-xs font-sans text-[#F8F5F1]/70 leading-relaxed">
                We contract directly with micro-lots, bypass major distributors, and pay premiums that guarantee agricultural workers a fair living standard.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border border-[#F8F5F1]/20 flex items-center justify-center text-[#B08A57] mx-auto md:mx-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-2xl text-[#F8F5F1]">Pure Craftsmanship</h3>
              <p className="text-xs font-sans text-[#F8F5F1]/70 leading-relaxed">
                No additives, no shortcuts. From clarifying our butter to measuring humidity during roasting, we follow the longest paths to guarantee flavor purity.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border border-[#F8F5F1]/20 flex items-center justify-center text-[#B08A57] mx-auto md:mx-0">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-2xl text-[#F8F5F1]">Curated Atmosphere</h3>
              <p className="text-xs font-sans text-[#F8F5F1]/70 leading-relaxed">
                Quiet music, warm lighting, and generous spacing. We intentionally restrict our guest count to prevent noisy chatter and support peaceful breaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block mb-2">
            The Timeline
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-[#1B1B1B]">
            History of Milestones
          </h2>
          <div className="w-10 h-[1px] bg-[#B08A57] mx-auto mt-3"></div>
        </div>

        <div className="relative border-l border-[#5A3E2B]/20 pl-8 space-y-12 ml-4">
          {timeline.map((item, i) => (
            <div key={i} className="relative group">
              {/* Dot marker */}
              <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-[#F8F5F1] border-2 border-[#5A3E2B] group-hover:bg-[#B08A57] transition-colors duration-300"></div>
              
              <div className="space-y-2">
                <span className="font-serif text-lg text-[#B08A57] font-semibold block">
                  {item.year}
                </span>
                <h3 className="font-serif text-2xl text-[#1B1B1B] font-light">
                  {item.title}
                </h3>
                <p className="text-xs font-sans text-[#1B1B1B]/70 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation invitation */}
      <ReservationCTA />

    </div>
  );
}
