import React from 'react';
import { HERO_IMAGE } from '../data/mockData';
import { Sparkles, Calendar, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreLooks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreLooks }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luminous beauty model with radiant glass skin in natural morning sunlight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] filter contrast-[1.03]"
        />
        {/* Measured scrim overlay for text contrast (4.5:1 ratio) */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-stone-900/20" />
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-12 sm:pt-16">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-stone-100 text-xs tracking-[0.2em] uppercase font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Haute Beauté & Makeup Artistry</span>
        </div>

        {/* Hero Title with text-wrap: balance */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6 drop-shadow-sm text-balance">
          Let your innate radiance inspire your timeless beauty.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-stone-200/90 font-light leading-relaxed mb-10 text-balance">
          We are entering a groundbreaking era of clean luxury aesthetics. Bespoke botanical skin preparation seamlessly intertwines with high-definition micro-artistry, paving the way for effortless, breathable elegance.
        </p>

        {/* Dual Actions Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-stone-950 bg-white rounded-full hover:bg-stone-100 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-stone-900" />
            Book Consultation
          </button>
          <button
            onClick={onExploreLooks}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-white bg-black/30 hover:bg-black/50 border border-white/30 backdrop-blur-md rounded-full transition-all transform hover:-translate-y-0.5 shadow-sm inline-flex items-center justify-center gap-2"
          >
            <span>Explore Lookbook</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Signature Outlined Giant Typography "AESTHETICA" matching the reference screenshot */}
      <div className="relative z-10 w-full overflow-hidden select-none pointer-events-none mt-auto pt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="font-serif font-light text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-[0.25em] uppercase text-white/30 leading-none whitespace-nowrap overflow-hidden transition-all duration-700"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.45)',
              textShadow: '0 0 20px rgba(0,0,0,0.1)'
            }}
          >
            AESTHETICA
          </h2>
        </div>
      </div>
    </section>
  );
};
