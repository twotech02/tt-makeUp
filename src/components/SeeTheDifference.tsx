import React from 'react';
import { COMPARISON_DATA } from '../data/mockData';
import { Check, X, Star, Sparkles } from 'lucide-react';

export const SeeTheDifference: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-white border-t border-[#E8E4DD]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            See the Difference
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm font-light">
            A closer look at what sets Aesthetica apart from conventional beauty parlors.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-stone-200/90 rounded-2xl overflow-hidden shadow-sm bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-stone-50/80 p-5 sm:p-6 border-b border-stone-200 text-xs font-medium text-stone-700 items-center">
            <div className="col-span-5 sm:col-span-4 uppercase tracking-widest text-[11px] text-stone-500">
              Artistry Dimension
            </div>

            <div className="col-span-4 sm:col-span-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 font-serif font-medium text-sm text-stone-900">
                <span>Aesthetica Atelier</span>
                <div className="flex items-center text-amber-500">
                  <Star className="w-3 h-3 fill-amber-500" />
                  <span className="text-[10px] font-mono font-bold ml-0.5 text-stone-700">5.0</span>
                </div>
              </div>
            </div>

            <div className="col-span-3 sm:col-span-4 text-right sm:text-left uppercase tracking-widest text-[11px] text-stone-400">
              Conventional Parlors
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-stone-100">
            {COMPARISON_DATA.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#FAF8F5]/60 transition-colors text-xs"
              >
                {/* Feature Label */}
                <div className="col-span-5 sm:col-span-4 pr-3 font-medium text-stone-800">
                  {row.feature}
                </div>

                {/* Aesthetica Column (Checked) */}
                <div className="col-span-4 sm:col-span-4 flex items-start gap-2 pr-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span className="text-stone-900 font-medium leading-relaxed">
                    {row.aesthetica}
                  </span>
                </div>

                {/* Conventional Column (Crossed) */}
                <div className="col-span-3 sm:col-span-4 flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 stroke-[2]" />
                  </div>
                  <span className="text-stone-500 font-light leading-relaxed">
                    {row.conventional}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
