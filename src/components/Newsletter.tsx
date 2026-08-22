import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('An email address is required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email structure.');
      return;
    }

    setError('');
    setLoading(true);

    // Simulate luxury submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="bg-[#5A3E2B] text-[#F8F5F1] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-[#F8F5F1]/5 pointer-events-none hidden md:block"></div>
      <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-[#F8F5F1]/5 pointer-events-none hidden md:block"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-[10px] tracking-[0.3em] text-[#B08A57] uppercase font-semibold block mb-3">
          The Atelier Club
        </span>
        <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6 tracking-wide text-[#F8F5F1]">
          Subscribe for Rare Sourcing Notes & Private Cuppings
        </h2>
        <p className="text-sm font-sans text-[#F8F5F1]/75 max-w-lg mx-auto mb-10 leading-relaxed">
          Join our small circle. We share quarterly updates detailing our coffee sourcing journeys, new roast profiles, secret dessert recipes, and opening times for our private culinary tasting benches.
        </p>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="w-full bg-[#1B1B1B]/20 border border-[#F8F5F1]/10 focus:border-[#B08A57] text-sm text-[#F8F5F1] px-5 py-4 focus:ring-0 focus:outline-none placeholder-[#F8F5F1]/40 rounded-sm transition-colors duration-300"
                    aria-label="Dedicated newsletter email field"
                  />
                  {error && (
                    <p className="absolute -bottom-6 left-0 text-red-300 text-[11px] font-sans">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#B08A57] hover:bg-[#F8F5F1] hover:text-[#5A3E2B] text-[#F8F5F1] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-500 rounded-sm shrink-0 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1B1B1B]/15 border border-[#B08A57]/20 p-8 rounded-sm max-w-md mx-auto flex flex-col items-center"
            >
              <CheckCircle2 className="w-10 h-10 text-[#B08A57] mb-4" />
              <h3 className="font-serif text-2xl text-[#F8F5F1] mb-2">Invitation Sent</h3>
              <p className="text-xs text-[#F8F5F1]/70 leading-relaxed">
                Thank you for joining us. A formal welcoming note has been dispatched to your mailbox. Please confirm to finalize your subscription.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-[10px] uppercase tracking-widest text-[#B08A57] hover:text-[#F8F5F1] font-semibold transition-colors"
              >
                Subscribe another email
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
