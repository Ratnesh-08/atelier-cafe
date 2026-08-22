import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { menuItems } from '../data/menu';
import { IMAGES } from '../data/images';

import { reviewsList } from '../data/reviews';
import { galleryItems } from '../data/gallery';
import InstagramFeed from '../components/InstagramFeed';
import ReservationCTA from '../components/ReservationCTA';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

export default function Home() {
  // Carousel state for Single Review Showcase
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);

  const handlePrevReview = () => {
    setSlideDirection(-1);
    setCurrentReviewIndex((prev) => (prev === 0 ? reviewsList.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setSlideDirection(1);
    setCurrentReviewIndex((prev) => (prev === reviewsList.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviewsList[currentReviewIndex];

  // Extract highlights
  const featuredBrews = menuItems.filter(item => item.category === 'Coffee' || item.category === 'Signature Drinks').slice(0, 3);
  const recommendations = menuItems.filter(item => item.chefRecommendation).slice(0, 2);
  const galleryPreview = galleryItems.slice(0, 4);

  // Animations variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B]">
      <SEO 
        title="L'Atelier | Café, Roastery & Artisanal Baking" 
        description="A sanctuary of slow coffee, artisanal baking, and quiet reflection. Located in Paris and Tokyo Meguro." 
      />
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1B1B1B]">
        {/* Full screen background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero.bg} 
            alt="Cinematic Atelier Interior" 
            fetchPriority="high"
            className="w-full h-full object-cover opacity-60 scale-105 animate-[scale-up_25s_ease-out_infinite]"
          />
          {/* Flat shadow overlay for typography readability */}
          <div className="absolute inset-0 bg-[#1B1B1B]/40"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-[#F8F5F1] space-y-8">
          <motion.span 
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block"
          >
            L'Atelier Paris & Tokyo
          </motion.span>
          
          <div className="reveal-wrapper">
            <motion.h1 
              initial={{ opacity: 0.9, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-wide leading-[1.05]"
            >
              A Sanctuary of <br />
              <span className="italic font-normal text-[#B08A57]">Slow Coffee</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-sans text-[#F8F5F1]/80 max-w-md mx-auto leading-relaxed"
          >
            Inspired by the architectural simplicity of Tokyo and the historic cafe culture of Paris. An editorial approach to flavor and atmosphere.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6"
          >
            <Link 
              to="/reservations" 
              className="bg-[#B08A57] hover:bg-[#F8F5F1] hover:text-[#5A3E2B] text-[#F8F5F1] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-500 rounded-sm inline-flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Book Table
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#F8F5F1]/50 text-[9px] tracking-[0.3em] uppercase">
          <span>Scroll Down</span>
          <div className="w-[1px] h-12 bg-[#F8F5F1]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#B08A57] animate-[scroll-line_2.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* 2. Welcome & Sourcing Philosophy (Editorial Column) */}
      <section className="py-28 lg:py-36 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block">
              Slow Craft
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1B1B1B] leading-tight">
              We believe a cup of coffee is a story of earth, fire, and absolute patience.
            </h2>
            <p className="text-sm font-sans text-[#1B1B1B]/75 leading-relaxed">
              Every morning at L'Atelier begins hours before the first guest arrives. Our roasters balance the drum speed, our chefs clarify local organic butter, and our baristas calibrate the water temperature to the exact decimal point. We do this not to be complex, but because we believe quality is an act of deep respect.
            </p>
            <p className="text-sm font-sans text-[#1B1B1B]/75 leading-relaxed">
              Our direct-trade coffee program works with single estates in Guatemala, Ethiopia, and Panama, ensuring growers are paid a premium while we secure the absolute peak of each seasonal yield.
            </p>
            <div className="pt-4">
              <Link to="/about" className="group text-xs font-semibold uppercase tracking-widest text-[#5A3E2B] flex items-center gap-2">
                Our Sourcing Story
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-12 gap-4 items-stretch relative">
            <div className="col-span-8 overflow-hidden rounded-sm border border-[#5A3E2B]/5 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
              <img 
                src={IMAGES.hero.siphonSide} 
                alt="Brewing Siphon Coffee" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="col-span-4 flex flex-col justify-end pb-8">
              <div className="overflow-hidden rounded-sm border border-[#5A3E2B]/5 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
                <img 
                  src={IMAGES.hero.espressoSide} 
                  alt="Espresso shot close up" 
                  className="w-full h-[240px] object-cover hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Single-Origins (Three Clean Columns) */}
      <section className="bg-[#1B1B1B] text-[#F8F5F1] py-28 lg:py-36 border-y border-[#F8F5F1]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block">
              Direct-Trade Collection
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-[#F8F5F1]">
              Signature Seasonal Coffee
            </h2>
            <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-4"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8"
          >
            {featuredBrews.map((brew) => (
              <motion.div 
                key={brew.id} 
                variants={fadeInUp}
                className="group space-y-6 flex flex-col"
              >
                <div className="overflow-hidden rounded-sm border border-[#F8F5F1]/10 aspect-[4/3] relative bg-[#1B1B1B]">
                  <img 
                    src={brew.image} 
                    alt={brew.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                  />
                  {brew.popular && (
                    <span className="absolute top-4 right-4 bg-[#B08A57] text-[#F8F5F1] text-[9px] tracking-widest uppercase font-semibold px-2.5 py-1.5 rounded-xs">
                      Popular
                    </span>
                  )}
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-2xl text-[#F8F5F1]">{brew.name}</h3>
                    <span className="text-sm font-sans text-[#B08A57]">${brew.price.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-[#F8F5F1]/70 leading-relaxed font-sans line-clamp-3">
                    {brew.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link 
              to="/menu" 
              className="border border-[#F8F5F1]/20 hover:border-[#B08A57] text-[#F8F5F1] hover:text-[#B08A57] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm inline-block"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Chef Recommendations / Today's Specials */}
      <section className="py-28 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block">
              Curated Gastronomy
            </span>
            <h2 className="font-serif text-4xl font-light text-[#1B1B1B] leading-tight">
              Crafted by Our Artisans
            </h2>
            <p className="text-sm font-sans text-[#1B1B1B]/75 leading-relaxed">
              Chef Antoine Laurent and Pastry Director Emi Tanaka collaborate weekly to map flavor pairings. These seasonal recommendations highlight pure ingredients, subtle textures, and a balance of sweet, bitter, and acidic tones.
            </p>
            <div className="pt-4">
              <Link to="/chefs" className="group text-xs font-semibold uppercase tracking-widest text-[#5A3E2B] flex items-center gap-2">
                Meet the Artisans
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Block: Dish Display */}
          <div className="lg:col-span-8 space-y-12">
            {recommendations.map((dish) => (
              <div 
                key={dish.id} 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-[#5A3E2B]/10 pb-12 last:border-none last:pb-0"
              >
                <div className="overflow-hidden rounded-sm aspect-[4/3] border border-[#5A3E2B]/5">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] tracking-widest text-[#B08A57] uppercase font-semibold bg-[#5A3E2B]/5 px-2 py-1 rounded-xs">
                      Chef Recommendation
                    </span>
                    {dish.dietary?.map((tag) => (
                      <span key={tag} className="text-[9px] tracking-widest text-[#1B1B1B]/60 uppercase border border-[#1B1B1B]/15 px-2 py-0.5 rounded-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-3xl text-[#1B1B1B]">{dish.name}</h3>
                  <p className="text-sm font-sans text-[#1B1B1B]/70 leading-relaxed">
                    {dish.description}
                  </p>
                  <p className="text-lg font-serif text-[#5A3E2B] font-semibold">${dish.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Guest Testimonials / Redesigned Single Review Carousel */}
      <section className="bg-[#F8F5F1] py-28 border-t border-[#5A3E2B]/10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-full border border-[#5A3E2B]/15 flex items-center justify-center text-[#B08A57] bg-white/50">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h2 className="font-serif text-3xl font-light text-[#1B1B1B]">
                  Highlight Experiences
                </h2>
                <p className="text-xs font-sans text-[#1B1B1B]/60 font-medium">
                  Stories from our guests, shared with love.
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto pb-1">
              <button
                onClick={handlePrevReview}
                className="w-10 h-10 rounded-full border border-[#5A3E2B]/20 flex items-center justify-center text-[#5A3E2B] hover:bg-[#5A3E2B] hover:text-[#F8F5F1] transition-all duration-300 group bg-white/40"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNextReview}
                className="w-10 h-10 rounded-full border border-[#5A3E2B]/20 flex items-center justify-center text-[#5A3E2B] hover:bg-[#5A3E2B] hover:text-[#F8F5F1] transition-all duration-300 group bg-white/40"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Subtle Horizontal Divider below the header */}
          <div className="w-full h-[1px] bg-[#5A3E2B]/10 mb-12"></div>

          {/* Single Active Review Content inside a Single Premium Card */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: slideDirection > 0 ? 15 : -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: slideDirection > 0 ? -15 : 15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#FAF8F5] border border-[#5A3E2B]/10 p-8 sm:p-12 lg:p-14 rounded-xs shadow-[0_4px_24px_rgba(90,62,43,0.01)] space-y-6"
              >
                {/* Rating (Five Gold Stars) */}
                <div className="flex items-center gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B08A57] text-[#B08A57]" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="font-serif text-base sm:text-lg lg:text-xl font-light text-[#1B1B1B] leading-relaxed italic">
                  "{activeReview.experience}"
                </blockquote>

                {/* Thin Divider inside the card */}
                <div className="w-full h-[1px] bg-[#5A3E2B]/10"></div>

                {/* Favorite Dish Label & Value */}
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-[9px] tracking-[0.2em] font-bold text-[#B08A57] uppercase font-sans">
                    FAV DISH:
                  </span>
                  <span className="font-serif text-sm text-[#1B1B1B] font-medium">
                    {activeReview.favoriteDish}
                  </span>
                </div>

                {/* Customer Profile (Avatar, Name, Date) */}
                <div className="flex items-center gap-3.5 pt-2">
                  <img 
                    src={activeReview.avatar} 
                    alt={`Portrait of ${activeReview.name}`} 
                    className="w-10 h-10 rounded-full object-cover border border-[#5A3E2B]/15"
                  />
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-[#1B1B1B] leading-none mb-1">
                      {activeReview.name}
                    </h3>
                    <p className="text-[10px] font-sans text-[#1B1B1B]/70 leading-none">
                      {activeReview.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots below the card */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {reviewsList.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSlideDirection(index > currentReviewIndex ? 1 : -1);
                  setCurrentReviewIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex ? 'bg-[#B08A57] scale-110' : 'bg-[#5A3E2B]/20 hover:bg-[#5A3E2B]/45'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Footer Link to All Reviews */}
          <div className="text-center mt-12">
            <Link 
              to="/reviews" 
              className="text-xs uppercase tracking-widest text-[#B08A57] hover:text-[#5A3E2B] transition-colors font-semibold inline-flex items-center gap-2 group"
            >
              Read All Guest Testimonials
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Visual Gallery Preview */}
      <section className="bg-[#1B1B1B] text-[#F8F5F1] py-28 border-t border-[#F8F5F1]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block mb-2">
                Atmosphere
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-[#F8F5F1]">
                Captured Moments of Calm
              </h2>
            </div>
            <Link 
              to="/gallery" 
              className="border border-[#F8F5F1]/20 hover:border-[#B08A57] hover:text-[#B08A57] text-[#F8F5F1] px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 rounded-sm font-semibold shrink-0"
            >
              Explore Gallery
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryPreview.map((item) => (
              <div 
                key={item.id} 
                className="overflow-hidden rounded-sm aspect-[3/4] border border-[#F8F5F1]/10 group relative"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1B1B1B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-serif text-lg text-[#F8F5F1]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Reservation CTA banner */}
      <ReservationCTA />

      {/* Dedicated Newsletter subscription section */}
      <Newsletter />

    </div>
  );
}
