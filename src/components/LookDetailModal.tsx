import React from 'react';
import { ServiceItem } from '../types';
import { X, Clock, CheckCircle2, Calendar, ShoppingBag, Sparkles } from 'lucide-react';

interface LookDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (service: ServiceItem) => void;
  onAddToCart: (service: ServiceItem) => void;
}

export const LookDetailModal: React.FC<LookDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onBook,
  onAddToCart,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image */}
          <div className="md:col-span-6">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-stone-200">
              <img
                src={service.image}
                alt={service.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-800">
                  {service.category.toUpperCase()}
                </span>
                <span className="text-xs font-mono bg-stone-200/70 text-stone-700 px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {service.duration}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900 mb-3">
                {service.name}
              </h3>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-serif font-medium text-stone-900 font-mono tabular-nums">
                  ${service.price}
                </span>
                {service.originalPrice && (
                  <span className="text-sm text-stone-400 line-through font-mono tabular-nums">
                    ${service.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Finish & Recommended For */}
              <div className="bg-white rounded-xl p-4 border border-stone-200/80 mb-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400">Finish Profile:</span>
                  <span className="font-medium text-stone-900">{service.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Best Suited For:</span>
                  <span className="font-medium text-stone-900 text-right">{service.recommendedFor}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2 mb-6">
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-stone-400">
                  Artistry Protocol Included
                </h4>
                <ul className="space-y-1.5">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-stone-800 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={() => {
                  onAddToCart(service);
                }}
                className="py-3 px-4 rounded-full border border-stone-300 text-xs uppercase tracking-wider font-medium text-stone-800 hover:bg-stone-100 transition-colors flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBook(service);
                }}
                className="py-3 px-4 rounded-full bg-stone-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
