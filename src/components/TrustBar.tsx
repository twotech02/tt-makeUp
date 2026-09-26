import React from 'react';
import { Star, ShieldCheck, Heart, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] border-b border-[#E8E4DD] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-between text-xs text-stone-700">
          {/* Trustpilot */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-semibold text-stone-900 tracking-wide">Excellent</span>
            <div className="flex items-center gap-0.5 bg-[#00B67A] px-1.5 py-0.5 rounded-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 text-white fill-white" />
              ))}
            </div>
            <span className="font-serif italic text-stone-500 hidden sm:inline">Trustpilot</span>
          </div>

          {/* Happy Brides */}
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-stone-800" />
            <span>
              <strong className="text-stone-900 font-semibold font-mono tabular-nums">2,500+</strong> Happy Brides & VIPs
            </span>
          </div>

          {/* Clean formulas */}
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-stone-800" />
            <span>
              <strong className="text-stone-900 font-semibold">100% Clean</strong> & Cruelty-Free
            </span>
          </div>

          {/* 18-hr guarantee */}
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-stone-800" />
            <span>
              <strong className="text-stone-900 font-semibold font-mono tabular-nums">18-Hour</strong> Tear-Proof Longevity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
