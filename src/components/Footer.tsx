import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141413] text-stone-300 relative overflow-hidden pt-16 sm:pt-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 4 Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-stone-800/80">
          {/* Col 1: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-5 font-semibold">
              Disciplines
            </h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Bridal Couture Ritual
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Sculpted Soft Glam
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Parisian Glass Skin
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Editorial & Runway
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  VIP Destination Package
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-5 font-semibold">
              Atelier
            </h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li>
                <a href="#artists" className="hover:text-white transition-colors">
                  Master Artists
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-white transition-colors">
                  Transformation Archive
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Skin Purity Standards
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">
                  Journal & Editorial
                </a>
              </li>
              <li>
                <span className="text-stone-500">Private Suite Sanctuary</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-5 font-semibold">
              Concierge
            </h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Booking & Trial Policies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Skin Prep Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Travel & Logistics
                </a>
              </li>
              <li>
                <span className="text-stone-400">concierge@aesthetica-atelier.com</span>
              </li>
              <li>
                <span className="text-stone-400">+1 (800) 924-GLOW</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Location */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-5 font-semibold">
              Presence
            </h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram (@aesthetica.beaute)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TikTok (@aesthetica.atelier)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pinterest Editorial Boards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vogue Salon Collective
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright Row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-mono gap-4">
          <p>@Aesthetica 2026. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Terms of Artistry
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Hygiene Protocol
            </a>
          </div>
        </div>
      </div>

      {/* Giant Signature Outline Typography "AESTHETICA" anchored along the bottom edge */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3
            className="font-serif font-light text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] tracking-[0.25em] uppercase text-stone-800/40 leading-none whitespace-nowrap overflow-hidden translate-y-6 sm:translate-y-8"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)',
            }}
          >
            AESTHETICA
          </h3>
        </div>
      </div>
    </footer>
  );
};
