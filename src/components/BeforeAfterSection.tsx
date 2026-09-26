import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_CASES } from '../data/mockData';
import { BeforeAfterCase } from '../types';
import { Sparkles, Calendar, CheckCircle2, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSectionProps {
  onBookCase: (caseItem: BeforeAfterCase) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onBookCase }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="transformations" className="py-24 bg-[#FAF8F5] border-t border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-700 text-xs tracking-[0.2em] uppercase font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-stone-900" />
            <span>Mastery In Motion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight mb-4">
            Real Transformations
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Drag the interactive slider below to witness how our skin-first botanical prep and custom micro-pigments reveal radiant, long-lasting perfection.
          </p>

          {/* Case study tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-stone-200/50 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Split View and Technical Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Before & After Image Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-stone-300/80 bg-stone-200"
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
              }}
              onTouchMove={handleTouchMove}
            >
              {/* "After" Image (Full background) */}
              <img
                src={activeCase.afterImage}
                alt="After finished makeup artistry"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* "Before" Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt="Before natural skin canvas"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none',
                  }}
                />
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-[2px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                <div className="absolute w-10 h-10 rounded-full bg-stone-900 border-2 border-white shadow-xl flex items-center justify-center text-white pointer-events-auto cursor-grab active:cursor-grabbing">
                  <SlidersHorizontal className="w-4 h-4 rotate-90" />
                </div>
              </div>

              {/* Corner Badges */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-mono tracking-widest uppercase shadow">
                  Natural Baseline
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-[11px] font-mono tracking-widest uppercase shadow">
                  Luminous Artistry
                </span>
              </div>

              {/* Bottom interaction hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-stone-950/70 backdrop-blur-md text-white/90 text-[10px] uppercase tracking-widest font-mono">
                  Drag slider left or right
                </span>
              </div>
            </div>

            {/* Quick slider percentage control for mobile accessibility */}
            <div className="flex items-center justify-between text-xs text-stone-500 font-mono mt-3 px-2">
              <span>0% Bare Skin</span>
              <span>Position: {Math.round(sliderPosition)}%</span>
              <span>100% Finished Glam</span>
            </div>
          </div>

          {/* Right: Technical Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-medium">
                  {activeCase.category}
                </span>
                <span className="text-xs font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                  {activeCase.longevity}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">
                {activeCase.title}
              </h3>

              <p className="text-xs text-stone-500 font-light mb-6">
                Client Profile: <strong className="text-stone-700 font-medium">{activeCase.clientType}</strong> · Lead Artist: <strong className="text-stone-700 font-medium">{activeCase.artistName}</strong>
              </p>

              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                {activeCase.description}
              </p>

              {/* Skin Concerns Solved */}
              <div className="mb-5">
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                  Target Skin Profile
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeCase.skinConcerns.map((c, i) => (
                    <span
                      key={i}
                      className="text-xs bg-stone-50 border border-stone-200/80 text-stone-700 px-2.5 py-1 rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Master Techniques Applied */}
              <div className="mb-6">
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-2">
                  Techniques Orchestrated
                </h4>
                <ul className="space-y-1.5">
                  {activeCase.techniquesUsed.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-stone-800 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Ready to transform?</span>
                <span className="text-xs font-medium text-stone-800">Complimentary 15-min consult</span>
              </div>

              <button
                onClick={() => onBookCase(activeCase)}
                className="px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-stone-800 transition-all shadow-sm flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Look</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
