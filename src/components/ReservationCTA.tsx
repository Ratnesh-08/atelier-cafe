import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export default function ReservationCTA() {
  return (
    <section className="bg-[#F8F5F1] py-24 lg:py-36 border-t border-[#5A3E2B]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-[#5A3E2B]/20 p-12 lg:p-20 relative flex flex-col lg:flex-row items-center justify-between gap-12 rounded-sm overflow-hidden bg-[#F8F5F1] shadow-[0_12px_40px_rgba(90,62,43,0.02)]">
          {/* Subtle geometric line overlay */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#5A3E2B]/5 pointer-events-none hidden lg:block"></div>

          <div className="max-w-lg space-y-4 text-center lg:text-left z-10">
            <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block">
              Experience the Craft
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1B1B1B] leading-tight">
              Reserve Your Table at L'Atelier
            </h2>
            <p className="text-sm font-sans text-[#1B1B1B]/70 leading-relaxed">
              Whether it's a quiet morning espresso in the garden terrace or a weekend culinary tasting at the chef's counter, ensure your seat is ready. We book up to 30 days in advance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 shrink-0">
            <Link 
              to="/reservations" 
              className="bg-[#5A3E2B] hover:bg-[#B08A57] text-[#F8F5F1] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center gap-2 group shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Table
            </Link>
            <Link 
              to="/contact" 
              className="border border-[#5A3E2B]/30 hover:border-[#5A3E2B] text-[#5A3E2B] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center gap-2 group"
            >
              Hours & Directions
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
