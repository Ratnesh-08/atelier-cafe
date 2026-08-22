import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { useState } from 'react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-[#1B1B1B] text-[#F8F5F1] pt-24 pb-12 border-t border-[#F8F5F1]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-20 border-b border-[#F8F5F1]/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-3xl tracking-widest text-[#F8F5F1] uppercase">
                L'Atelier
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#B08A57] uppercase -mt-1 pl-0.5">
                Café & Roastery
              </span>
            </Link>
            <p className="text-xs text-[#F8F5F1]/70 leading-relaxed font-sans max-w-xs">
              A sanctuary of slow coffee, artisanal baking, and quiet reflection. Inspired by the architectural simplicity of Tokyo and the historic cafe culture of Paris.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#F8F5F1]/70 hover:text-[#B08A57] transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#F8F5F1]/70 hover:text-[#B08A57] transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="text-[#F8F5F1]/70 hover:text-[#B08A57] transition-colors" aria-label="Pinterest">
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#B08A57] font-semibold font-sans">
              Navigation
            </h3>
            <ul className="space-y-3 text-xs text-[#F8F5F1]/70 font-sans">
              <li>
                <Link to="/menu" className="hover:text-[#F8F5F1] hover:underline underline-offset-4 transition-colors">
                  The Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-[#F8F5F1] hover:underline underline-offset-4 transition-colors">
                  Book A Table
                </Link>
              </li>
              <li>
                <Link to="/chefs" className="hover:text-[#F8F5F1] hover:underline underline-offset-4 transition-colors">
                  Our Culinary Artisans
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F8F5F1] hover:underline underline-offset-4 transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#F8F5F1] hover:underline underline-offset-4 transition-colors">
                  Guest Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F8F5F1] hover:underline underline-offset-4 transition-colors">
                  Our Origin Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#B08A57] font-semibold font-sans">
              The Atelier
            </h3>
            <div className="space-y-4 text-xs text-[#F8F5F1]/70 font-sans leading-relaxed">
              <div>
                <p className="font-medium text-[#F8F5F1] uppercase text-[10px] tracking-wider mb-1">Hours</p>
                <p>Monday – Friday: 7:00 AM – 8:00 PM</p>
                <p>Saturday – Sunday: 8:00 AM – 9:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-[#F8F5F1] uppercase text-[10px] tracking-wider mb-1">Location</p>
                <p>42 Rue de l'Odéon, 75006 Paris</p>
                <p>Tel: +33 (0) 1 43 25 12 12</p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#B08A57] font-semibold font-sans">
              Newsletter
            </h3>
            <p className="text-xs text-[#F8F5F1]/70 leading-relaxed font-sans">
              Subscribe to receive curated recipes, origin search stories, and priority private reservation openings.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex items-center border-b border-[#F8F5F1]/20 focus-within:border-[#B08A57] py-2 transition-all">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className="bg-transparent border-none text-xs text-[#F8F5F1] focus:ring-0 focus:outline-none w-full placeholder-[#F8F5F1]/40 pr-8"
                  aria-label="Newsletter email input"
                />
                <button
                  type="submit"
                  className="absolute right-0 text-[#B08A57] hover:text-[#F8F5F1] p-1 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {error && <p className="text-red-400 text-[10px] mt-1.5">{error}</p>}
              {subscribed && (
                <p className="text-green-400 text-[10px] mt-1.5 font-medium animate-pulse">
                  Thank you. An invitation has been dispatched.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between text-[#F8F5F1]/40 text-[10px] font-sans tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} L'Atelier Café. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#F8F5F1] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#F8F5F1] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
