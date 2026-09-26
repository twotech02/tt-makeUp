import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Sparkles, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  cartCount: number;
  wishlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenCart,
  onOpenSearch,
  cartCount,
  wishlistCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Bridal', href: '#services' },
    { label: 'Before & After', href: '#transformations' },
    { label: 'The Artists', href: '#artists' },
    { label: 'Compare', href: '#comparison' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DD] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-stone-900 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-xs tracking-widest font-serif font-medium bg-stone-900 text-stone-100 group-hover:scale-105 transition-transform">
              Æ
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-stone-900">
                AESTHETICA
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.15em] uppercase font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-stone-900 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-900 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 rounded-full transition-colors"
              aria-label="Search services and artists"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Bag / Booking Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 rounded-full transition-colors"
              aria-label="View booking bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-stone-900 text-stone-100 text-[10px] font-mono rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-widest font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              Book Service
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800 hover:text-stone-950 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5]/98 border-b border-[#E8E4DD] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-stone-700 hover:text-stone-950 py-2 border-b border-stone-200/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs tracking-widest uppercase font-medium bg-stone-900 text-white rounded-full text-center hover:bg-stone-800"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
