import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';

// Lazy load secondary pages for code splitting
const Menu = lazy(() => import('./pages/Menu'));
const Reservations = lazy(() => import('./pages/Reservations'));
const Chefs = lazy(() => import('./pages/Chefs'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Reviews = lazy(() => import('./pages/Reviews'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium, minimal loading screen fallback
function PageLoader() {
  return (
    <div className="fixed inset-0 bg-[#F8F5F1] z-50 flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center">
        <span className="font-serif text-3xl tracking-widest text-[#1B1B1B] uppercase animate-pulse">
          L'Atelier
        </span>
        <span className="text-[9px] tracking-[0.25em] text-[#B08A57] uppercase mt-0.5">
          Loading Sanctuary...
        </span>
      </div>
      <div className="w-16 h-[1px] bg-[#5A3E2B]/20 relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#B08A57] animate-[scroll-line_1.5s_infinite]"></div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F8F5F1] text-[#1B1B1B] selection:bg-[#5A3E2B] selection:text-[#F8F5F1]">
          {/* Sticky Luxury Header */}
          <Header />

          {/* Main content wrapper with Suspense for lazy loading */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/chefs" element={<Chefs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback redirect */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

          {/* Editorial Footer */}
          <Footer />
        </div>
      </Router>
    </ReactLenis>
  );
}
