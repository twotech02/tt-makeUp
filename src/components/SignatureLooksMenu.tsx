import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { SIGNATURE_SERVICES } from '../data/mockData';
import { Eye, Plus, Check, Clock, Sparkles } from 'lucide-react';

interface SignatureLooksMenuProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
  onAddToCart: (service: ServiceItem) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

export const SignatureLooksMenu: React.FC<SignatureLooksMenuProps> = ({
  onSelectService,
  onBookService,
  onAddToCart,
  selectedCategory,
  onCategoryChange,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'glam', label: 'Red Carpet Glam' },
    { id: 'editorial', label: 'Editorial & Runway' },
    { id: 'skin-ritual', label: 'Skin Rituals' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SIGNATURE_SERVICES
    : SIGNATURE_SERVICES.filter((s) => s.category === selectedCategory);

  const heroService = filteredServices[0] || SIGNATURE_SERVICES[0];
  const gridServices = filteredServices.slice(1);

  const handleAdd = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(service);
    setAddedId(service.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-20 bg-white border-t border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with right pill button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight mb-2">
              Signature Looks & Rituals
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-xl">
              Discover our bespoke service menu, designed for longevity, high-definition camera readiness, and skin-first beauty.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onCategoryChange('all')}
              className="px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors shadow-sm"
            >
              See All Services ({SIGNATURE_SERVICES.length})
            </button>
          </div>
        </div>

        {/* Filter categories tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-stone-100 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-medium rounded-full transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100/70 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Showcase Grid (matching reference image layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Tall Featured Look (takes 5 cols on lg) */}
          <div
            onClick={() => onSelectService(heroService)}
            className="lg:col-span-5 group relative bg-[#FBF9F6] rounded-2xl p-6 sm:p-8 border border-stone-200/70 hover:border-stone-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-stone-500 bg-stone-200/50 px-2.5 py-1 rounded">
                Signature Spotlight
              </span>
              <div className="flex items-center gap-1.5 text-xs text-stone-600 font-mono">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>{heroService.duration}</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-stone-200/40 my-2">
              <img
                src={heroService.image}
                alt={heroService.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-stone-900 text-xs uppercase tracking-widest font-medium rounded-full shadow-lg flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  View Look Details
                </span>
              </div>
            </div>

            {/* Duration/Format selectors like XS S M L XL in the reference image */}
            <div className="flex items-center justify-center gap-2 my-4">
              {['Standard', 'Deluxe Cryo', 'Bridal VIP'].map((tier, idx) => (
                <span
                  key={tier}
                  className={`text-[11px] px-2.5 py-1 rounded-md border font-medium ${
                    idx === 1
                      ? 'border-stone-900 text-stone-900 bg-stone-100'
                      : 'border-stone-200 text-stone-400'
                  }`}
                >
                  {tier}
                </span>
              ))}
            </div>

            {/* Bottom Details & Price */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-stone-900 group-hover:text-stone-700 transition-colors">
                    {heroService.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-light line-clamp-2 mt-1">
                    {heroService.description}
                  </p>
                </div>
              </div>

              {/* Price & Shades */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-200/60 mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-medium text-stone-900 font-mono tabular-nums">
                    ${heroService.price}
                  </span>
                  {heroService.originalPrice && (
                    <span className="text-sm text-stone-400 line-through font-mono tabular-nums">
                      ${heroService.originalPrice}
                    </span>
                  )}
                </div>

                {/* Tone swatches */}
                <div className="flex items-center gap-1.5">
                  {heroService.tones.map((tone, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
                      style={{ backgroundColor: tone }}
                      title="Custom skin tone match"
                    />
                  ))}
                </div>
              </div>

              {/* Primary action */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  onClick={(e) => handleAdd(heroService, e)}
                  className="py-2.5 px-4 rounded-full border border-stone-300 text-xs uppercase tracking-wider font-medium text-stone-800 hover:bg-stone-100 transition-colors flex items-center justify-center gap-1.5"
                >
                  {addedId === heroService.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookService(heroService);
                  }}
                  className="py-2.5 px-4 rounded-full bg-stone-900 text-xs uppercase tracking-wider font-medium text-white hover:bg-stone-800 transition-colors shadow-sm text-center"
                >
                  Book Look
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of services (takes 7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gridServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group bg-[#FBF9F6] rounded-2xl p-5 border border-stone-200/70 hover:border-stone-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-200/40 mb-4">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[10px] font-mono tracking-wider bg-white/90 backdrop-blur-sm text-stone-800 px-2 py-0.5 rounded shadow-xs">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-serif text-lg font-medium text-stone-900 group-hover:text-stone-700 transition-colors line-clamp-1">
                    {service.name}
                  </h4>
                  <p className="text-xs text-stone-500 font-light line-clamp-2 mt-1 mb-3">
                    {service.description}
                  </p>

                  {/* Price & Shades */}
                  <div className="flex items-center justify-between pt-3 border-t border-stone-200/60">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-semibold text-stone-900 font-mono tabular-nums">
                        ${service.price}
                      </span>
                      {service.originalPrice && (
                        <span className="text-xs text-stone-400 line-through font-mono tabular-nums">
                          ${service.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      {service.tones.map((t, idx) => (
                        <span
                          key={idx}
                          className="w-3 h-3 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: t }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2">
                    <button
                      onClick={(e) => handleAdd(service, e)}
                      className="py-1.5 px-3 rounded-full border border-stone-300 text-[11px] uppercase tracking-wider font-medium text-stone-700 hover:bg-stone-100 transition-colors flex items-center justify-center gap-1"
                    >
                      {addedId === service.id ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                      <span>{addedId === service.id ? 'Added' : 'Bag'}</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookService(service);
                      }}
                      className="py-1.5 px-3 rounded-full bg-stone-900 text-[11px] uppercase tracking-wider font-medium text-white hover:bg-stone-800 transition-colors text-center"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
