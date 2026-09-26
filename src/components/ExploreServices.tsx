import React from 'react';
import { BRIDAL_IMAGE, EDITORIAL_IMAGE, GLASS_SKIN_IMAGE } from '../data/mockData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ExploreServicesProps {
  onSelectCategory: (category: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ExploreServices: React.FC<ExploreServicesProps> = ({
  onSelectCategory,
  onOpenBooking,
}) => {
  const serviceCards = [
    {
      id: 'bridal',
      title: 'Bridal & Red Carpet Artistry',
      category: 'bridal',
      subtitle: '18-Hour Tear-Proof Elegance',
      image: BRIDAL_IMAGE,
      cta: 'Explore Bridal',
    },
    {
      id: 'editorial',
      title: 'Editorial & High Fashion Glam',
      category: 'editorial',
      subtitle: '4K Camera & Studio Flash Ready',
      image: EDITORIAL_IMAGE,
      cta: 'Explore Editorial',
    },
    {
      id: 'skin-ritual',
      title: 'Clean Glass Skin & Minimalist Glow',
      category: 'skin-ritual',
      subtitle: 'Cellular Botanical Prep & Sheer Veil',
      image: GLASS_SKIN_IMAGE,
      cta: 'Explore Skin Rituals',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium mb-3 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-stone-400" />
            <span>Curated Disciplines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight mb-4 text-balance">
            Explore Our Signature Services
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl text-balance">
            Designed to fit a wide range of moments, each look is thoughtfully created with a clear and consistent intention. This guiding purpose shapes every detail, ensuring a seamless and breathtaking experience throughout.
          </p>
        </div>

        {/* 3-Column Photographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[480px] sm:h-[540px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-stone-100 cursor-pointer"
              onClick={() => onSelectCategory(card.category)}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-200/90 mb-2">
                  {card.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light mb-6 text-white text-balance leading-snug">
                  {card.title}
                </h3>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory(card.category);
                    }}
                    className="px-6 py-2.5 bg-white text-stone-950 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-100 transition-all transform group-hover:translate-x-1 shadow-md inline-flex items-center gap-2"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking();
                    }}
                    className="text-xs uppercase tracking-wider text-stone-300 hover:text-white underline underline-offset-4 decoration-stone-500 hover:decoration-white transition-colors"
                  >
                    Instant Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
