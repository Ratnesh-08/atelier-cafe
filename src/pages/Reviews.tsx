import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { reviewsList, reviewMetrics } from '../data/reviews';
import ReservationCTA from '../components/ReservationCTA';
import SEO from '../components/SEO';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeReview = reviewsList[activeIndex];

  const goToReview = (nextIndex: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + reviewsList.length) % reviewsList.length);
  };

  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B] pt-32 min-h-screen">
      <SEO 
        title="Guest Experiences & Testimonials | L'Atelier Café" 
        description="Read authentic impressions, coffee reviews, and dining experiences from verified visitors of L'Atelier." 
      />
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-16 space-y-4">
        <span className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block">
          Verified Hospitality
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1B1B1B]">
          Guest Experiences
        </h1>
        <p className="text-sm font-sans text-[#1B1B1B]/70 max-w-lg mx-auto leading-relaxed">
          Read direct feedback from our daily guests, design critics, and culinary writers. We hold ourselves to absolute consistency.
        </p>
        <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-6"></div>
      </section>

      {/* Google-style rating board */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F8F5F1] border border-[#5A3E2B]/10 p-8 rounded-sm shadow-[0_8px_30px_rgba(90,62,43,0.01)]">
          
          {/* Big number score */}
          <div className="md:col-span-4 text-center md:border-r md:border-[#5A3E2B]/10 py-4 space-y-2">
            <span className="font-serif text-6xl lg:text-7xl font-bold text-[#5A3E2B] block">
              {reviewMetrics.averageRating}
            </span>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B08A57] text-[#B08A57]" />
              ))}
            </div>
            <p className="text-xs font-sans text-[#1B1B1B]/60 font-medium">
              Based on {reviewMetrics.totalReviews} verified guest bookings.
            </p>
          </div>

          {/* Progress bar breakdown */}
          <div className="md:col-span-8 px-0 lg:px-8 space-y-3.5">
            {Object.entries(reviewMetrics.ratingsBreakdown)
              .reverse()
              .map(([rating, count]) => {
                const percentage = (count / reviewMetrics.totalReviews) * 100;
                return (
                  <div key={rating} className="flex items-center gap-4 text-xs font-sans">
                    <span className="w-3 text-[#1B1B1B] font-semibold">{rating}</span>
                    <Star className="w-3.5 h-3.5 text-[#B08A57] fill-[#B08A57]" />
                    <div className="flex-grow h-2 bg-[#5A3E2B]/5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#B08A57] h-full rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-right text-[#1B1B1B]/60 font-semibold">{count}</span>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* Single-review Highlight Experiences */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <>
              {/* Section Header */}
              <div className="flex items-end justify-between gap-6 mb-8">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl lg:text-3xl text-[#1B1B1B] flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#B08A57]" />
                    Highlight Experiences
                  </h2>
                  <p className="text-xs font-sans text-[#1B1B1B]/70">
                    Stories from our guests, shared with love.
                  </p>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => goToReview(activeIndex - 1, -1)}
                    className="w-10 h-10 rounded-full border border-[#5A3E2B]/20 flex items-center justify-center text-[#5A3E2B] hover:bg-[#5A3E2B] hover:text-[#F8F5F1] transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => goToReview(activeIndex + 1, 1)}
                    className="w-10 h-10 rounded-full border border-[#5A3E2B]/20 flex items-center justify-center text-[#5A3E2B] hover:bg-[#5A3E2B] hover:text-[#F8F5F1] transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="w-full h-px bg-[#5A3E2B]/10 mb-10" />

              {/* ONE and ONLY ONE review card */}
              <div className="relative w-full overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.article
                    key={activeReview.id}
                    initial={{ opacity: 0, x: direction > 0 ? 12 : -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -12 : 12 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full min-h-[390px] bg-[#FAF8F5] border border-[#5A3E2B]/10 rounded-sm p-8 sm:p-10 lg:p-12 flex flex-col"
                  >
                    {/* Rating + source */}
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: activeReview.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#B08A57] text-[#B08A57]"
                          />
                        ))}
                      </div>

                      <span className="text-[9px] tracking-[0.18em] text-[#B08A57] uppercase font-bold bg-[#5A3E2B]/5 px-3 py-1.5 border border-[#5A3E2B]/10 rounded-sm">
                        {activeReview.origin}
                      </span>
                    </div>

                    {/* Review */}
                    <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl font-light italic text-[#1B1B1B] leading-[1.65] max-w-4xl">
                      “{activeReview.experience}”
                    </blockquote>

                    <div className="w-full h-px bg-[#5A3E2B]/10 my-8" />

                    {/* Metadata */}
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                      <div>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-[9px] tracking-[0.18em] font-bold text-[#B08A57] uppercase font-sans">
                            FAV DISH:
                          </span>
                          <span className="font-serif text-sm text-[#1B1B1B] font-medium">
                            {activeReview.favoriteDish}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <img
                            src={activeReview.avatar}
                            alt={`Portrait of ${activeReview.name}`}
                            className="w-11 h-11 rounded-full object-cover border border-[#5A3E2B]/15"
                          />
                          <div>
                            <h3 className="font-serif text-base font-semibold text-[#1B1B1B] leading-tight">
                              {activeReview.name}
                            </h3>
                            <p className="text-[10px] font-sans text-[#1B1B1B]/70 mt-0.5">
                              {activeReview.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2.5 mt-8">
                {reviewsList.map((review, index) => (
                  <button
                    key={review.id}
                    onClick={() => goToReview(index, index >= activeIndex ? 1 : -1)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#B08A57] scale-110'
                        : 'bg-[#5A3E2B]/15 hover:bg-[#5A3E2B]/35'
                    }`}
                    aria-label={`Show review ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
        </>
      </section>

      {/* Reservation CTA invite banner */}
      <ReservationCTA />

    </div>
  );
}
