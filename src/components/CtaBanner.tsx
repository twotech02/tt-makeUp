import React from 'react';
import { HERO_IMAGE } from '../data/mockData';
import { Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center text-center p-8 sm:p-14 shadow-xl">
          {/* Background Image with dark overlay */}
          <img
            src={HERO_IMAGE}
            alt="Ethereal beauty mood"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-bottom filter brightness-[0.38] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-stone-950/60" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-200/90 block mb-3">
              Reserve Your Atelier Experience
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight mb-4 text-balance">
              Wear Radiance That Means Much More
            </h2>

            <p className="text-xs sm:text-base text-stone-300 font-light leading-relaxed mb-8 max-w-lg mx-auto text-balance">
              Designed with purpose and made to last — discover bespoke looks that go beyond transient trends and celebrate your natural essence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3 bg-white text-stone-950 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-100 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Schedule Consultation
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-3 bg-stone-900/80 hover:bg-stone-900 text-white border border-stone-600 rounded-full text-xs uppercase tracking-widest font-medium transition-all hover:-translate-y-0.5"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
