import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar, Clock, MapPin } from 'lucide-react';
import { megaMenuPreviews } from '../data/megaMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close drawers on route change
  useEffect(() => {
    setIsOpen(false);
    setMegaMenuOpen(false);
  }, [location]);

  // Handle scroll state for compact header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu', hasMega: true },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Our Chefs', path: '/chefs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F8F5F1] py-4 border-b border-[#5A3E2B]/10 shadow-[0_4px_20px_rgba(27,27,27,0.02)]' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-serif text-2xl lg:text-3xl tracking-widest text-[#1B1B1B] uppercase transition-colors duration-300 group-hover:text-[#5A3E2B]">
              L'Atelier
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#B08A57] uppercase -mt-1 pl-0.5">
              Café & Roastery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaMenuOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaMenuOpen(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 flex items-center gap-1 py-2
                    ${isActive ? 'text-[#5A3E2B]' : 'text-[#1B1B1B]/70 hover:text-[#5A3E2B]'}
                  `}
                >
                  {link.name}
                  {link.hasMega && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  )}
                </NavLink>

                {/* Desktop Mega Menu Dropdown with CSS transitions */}
                {link.hasMega && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[650px] transition-all duration-300 ease-out ${
                      megaMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-3 pointer-events-none'
                    }`}
                  >
                    <div className="bg-[#F8F5F1] border border-[#5A3E2B]/10 p-8 shadow-[0_20px_50px_rgba(27,27,27,0.08)] flex gap-8 rounded-sm">
                      {/* Categories columns */}
                      <div className="flex-1">
                        <p className="font-serif text-[#5A3E2B] text-lg mb-4 border-b border-[#5A3E2B]/10 pb-2 font-medium">
                          Explore Our Menu
                        </p>
                        <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                          <li>
                            <Link to="/menu?cat=Espresso" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Espresso Bar
                            </Link>
                          </li>
                          <li>
                            <Link to="/menu?cat=Coffee" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Filter & Siphon
                            </Link>
                          </li>
                          <li>
                            <Link to="/menu?cat=Cold+Brew" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Cold Drafts
                            </Link>
                          </li>
                          <li>
                            <Link to="/menu?cat=Tea" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Tea & Matcha
                            </Link>
                          </li>
                          <li>
                            <Link to="/menu?cat=Breakfast" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Breakfast
                            </Link>
                          </li>
                          <li>
                            <Link to="/menu?cat=Brunch" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Weekend Brunch
                            </Link>
                          </li>
                          <li>
                            <Link to="/menu?cat=Desserts" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Pastry & Confections
                            </Link>
                          </li>
                          <li>
                            <Link to="/menu?cat=Signature+Drinks" className="text-xs uppercase tracking-wider text-[#1B1B1B]/80 hover:text-[#B08A57] transition-colors">
                              Signature Brews
                            </Link>
                          </li>
                        </ul>
                        <div className="mt-6 pt-4 border-t border-[#5A3E2B]/10">
                          <Link to="/menu" className="inline-block text-xs uppercase tracking-widest text-[#B08A57] hover:text-[#5A3E2B] transition-colors font-medium">
                            View Full Menu &rarr;
                          </Link>
                        </div>
                      </div>

                      {/* Featured Items preview */}
                      <div className="w-[280px] bg-[#1B1B1B] text-[#F8F5F1] p-5 flex flex-col justify-between rounded-sm">
                        <div>
                          <span className="text-[9px] tracking-widest text-[#B08A57] uppercase font-semibold">
                            Chef Recommendations
                          </span>
                          <p className="font-serif text-xl text-[#F8F5F1] mt-1 mb-4 font-light">
                            Daily Inspirations
                          </p>
                          <div className="space-y-4">
                            {megaMenuPreviews.map(item => (
                              <div key={item.id} className="flex items-center gap-3">
                                <img 
                                  src={item.image} 
                                  alt={`Photo of ${item.name}`} 
                                  className="w-10 h-10 object-cover rounded-sm border border-[#F8F5F1]/10"
                                />
                                <div>
                                  <p className="text-[11px] font-medium tracking-wide leading-tight line-clamp-1">{item.name}</p>
                                  <p className="text-[10px] text-[#B08A57]">${item.price.toFixed(2)}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Link 
                          to="/reservations" 
                          className="mt-6 bg-[#B08A57] hover:bg-[#5A3E2B] text-[#F8F5F1] text-[10px] uppercase tracking-widest text-center py-2.5 transition-colors duration-300 font-medium rounded-xs"
                        >
                          Book A Table
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Callout */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/reservations" 
              className="border border-[#5A3E2B] hover:bg-[#5A3E2B] hover:text-[#F8F5F1] text-[#5A3E2B] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-sm flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              Reservations
            </Link>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#1B1B1B] hover:text-[#5A3E2B] p-2 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Drawer with CSS transitions */}
      <div 
        className={`fixed inset-0 z-40 bg-[#1B1B1B]/40 lg:hidden transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 w-4/5 max-w-sm h-full bg-[#F8F5F1] shadow-2xl p-8 flex flex-col justify-between transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top links */}
          <div className="pt-16">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    font-sans text-sm uppercase tracking-[0.2em] font-medium transition-colors
                    ${isActive ? 'text-[#5A3E2B]' : 'text-[#1B1B1B]/70 hover:text-[#5A3E2B]'}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Bottom Details */}
          <div className="space-y-6 border-t border-[#5A3E2B]/10 pt-8">
            <div className="flex items-center gap-3 text-xs text-[#1B1B1B]/80">
              <Clock className="w-4 h-4 text-[#B08A57]" />
              <span>Open Daily: 7:00 AM – 9:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#1B1B1B]/80">
              <MapPin className="w-4 h-4 text-[#B08A57]" />
              <span>42 Rue de l'Odéon, Paris</span>
            </div>
            <Link 
              to="/reservations" 
              className="block bg-[#5A3E2B] text-center hover:bg-[#B08A57] text-[#F8F5F1] py-3 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              Book A Table
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
