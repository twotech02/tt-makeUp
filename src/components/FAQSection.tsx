import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // First item open by default just like in the screenshot
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Split into left and right columns
  const midPoint = Math.ceil(FAQ_DATA.length / 2);
  const leftCol = FAQ_DATA.slice(0, midPoint);
  const rightCol = FAQ_DATA.slice(midPoint);

  return (
    <section id="faq" className="py-24 bg-white border-t border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm font-light">
            Everything you need to know about our bridal trials, hygiene standards, and artist bookings.
          </p>
        </div>

        {/* 2-Column Accordion Layout (matches screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftCol.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="border border-stone-200 rounded-xl overflow-hidden bg-white transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-stone-900">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightCol.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="border border-stone-200 rounded-xl overflow-hidden bg-white transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-stone-900">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
