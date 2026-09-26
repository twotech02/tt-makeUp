import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ExploreServices } from './components/ExploreServices';
import { SignatureLooksMenu } from './components/SignatureLooksMenu';
import { PeopleBehindProcess } from './components/PeopleBehindProcess';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { SeeTheDifference } from './components/SeeTheDifference';
import { StoriesInBloom } from './components/StoriesInBloom';
import { FAQSection } from './components/FAQSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { LookDetailModal } from './components/LookDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { ArticleModal } from './components/ArticleModal';
import { SearchModal } from './components/SearchModal';

import { ServiceItem, Artist, JournalArticle, BeforeAfterCase } from './types';
import { SIGNATURE_SERVICES, ARTISTS } from './data/mockData';

export default function App() {
  // Lenis ultra smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Application State
  const [cartItems, setCartItems] = useState<ServiceItem[]>([SIGNATURE_SERVICES[0]]);
  const [wishlistCount, setWishlistCount] = useState<number>(3);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modals
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<ServiceItem | null>(null);
  const [bookingArtist, setBookingArtist] = useState<Artist | null>(null);

  const [selectedLookForDetail, setSelectedLookForDetail] = useState<ServiceItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Handlers
  const handleOpenBooking = (service?: ServiceItem, artist?: Artist) => {
    setBookingService(service || null);
    setBookingArtist(artist || null);
    setIsBookingOpen(true);
  };

  const handleAddToCart = (service: ServiceItem) => {
    if (!cartItems.some((item) => item.id === service.id)) {
      setCartItems((prev) => [...prev, service]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-stone-900 selection:text-stone-100 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={cartItems.length}
        wishlistCount={wishlistCount}
      />

      <main className="flex-grow">
        {/* 1. Hero Section matching screenshot layout and giant typography */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreLooks={() => handleScrollToSection('services')}
        />

        {/* 2. Trust Bar directly underneath Hero */}
        <TrustBar />

        {/* 3. Explore Signature Services (matching 'Explore Our Collections') */}
        <ExploreServices
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            handleScrollToSection('services');
          }}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Signature Looks & Service Menu (matching 'New Arrivals') */}
        <SignatureLooksMenu
          onSelectService={(service) => setSelectedLookForDetail(service)}
          onBookService={(service) => handleOpenBooking(service)}
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 5. Master Artists (matching 'People Behind the Process') */}
        <PeopleBehindProcess
          onBookWithArtist={(artist) => handleOpenBooking(undefined, artist)}
        />

        {/* 6. Interactive Before & After Transformations (Mandatory requirement) */}
        <BeforeAfterSection
          onBookCase={(caseItem) => {
            const matchedService = SIGNATURE_SERVICES.find(
              (s) => s.category === 'bridal'
            ) || SIGNATURE_SERVICES[0];
            handleOpenBooking(matchedService);
          }}
        />

        {/* 7. Comparison Matrix (matching 'See the Difference') */}
        <SeeTheDifference />

        {/* 8. Artistry Journal (matching 'Stories in Bloom') */}
        <StoriesInBloom
          onReadArticle={(article) => setSelectedArticle(article)}
        />

        {/* 9. Frequently Asked Questions (matching 2-column FAQ in screenshot) */}
        <FAQSection />

        {/* 10. Call to Action Banner (matching 'Wear Something That Means Much More') */}
        <CtaBanner
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => handleScrollToSection('services')}
        />
      </main>

      {/* 11. Luxury Footer (matching screenshot with signature outline typography) */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={bookingService}
        preselectedArtist={bookingArtist}
      />

      <LookDetailModal
        isOpen={Boolean(selectedLookForDetail)}
        service={selectedLookForDetail}
        onClose={() => setSelectedLookForDetail(null)}
        onBook={(service) => handleOpenBooking(service)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onProceedToBooking={() => {
          setIsCartOpen(false);
          handleOpenBooking(cartItems[0]);
        }}
      />

      <ArticleModal
        isOpen={Boolean(selectedArticle)}
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={(service) => {
          setIsSearchOpen(false);
          setSelectedLookForDetail(service);
        }}
        onSelectArtist={(artist) => {
          setIsSearchOpen(false);
          handleOpenBooking(undefined, artist);
        }}
      />
    </div>
  );
}
