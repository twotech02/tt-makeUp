import React, { useState } from 'react';
import { ARTISTS } from '../data/mockData';
import { Artist } from '../types';
import { ArrowUpRight, Sparkles, Instagram, Calendar } from 'lucide-react';

interface PeopleBehindProcessProps {
  onBookWithArtist: (artist: Artist) => void;
}

export const PeopleBehindProcess: React.FC<PeopleBehindProcessProps> = ({ onBookWithArtist }) => {
  const [hoveredArtist, setHoveredArtist] = useState<Artist>(ARTISTS[2]); // Default to Robbi Darwis like in screenshot!

  return (
    <section id="artists" className="py-24 bg-[#141413] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-stone-800">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white">
              People Behind the Process
            </h2>
          </div>
          <div className="lg:col-span-6 lg:text-right">
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg lg:ml-auto">
              Behind every transformation is an artist driven by intention — blending facial anatomy, skin preparation, and masterstroke artistry.
            </p>
          </div>
        </div>

        {/* Team Members List with interactive floating preview */}
        <div className="relative">
          {/* Floating preview card (matches the card floating between rows in the screenshot) */}
          <div className="hidden xl:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-500 ease-out transform">
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border border-stone-700/60 bg-stone-900 relative group animate-in fade-in duration-300">
              <img
                src={hoveredArtist.image}
                alt={hoveredArtist.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                  {hoveredArtist.role}
                </span>
                <p className="text-sm font-serif font-medium text-white mt-0.5">
                  {hoveredArtist.signatureLook}
                </p>
                <p className="text-[11px] text-stone-400 font-mono mt-1">
                  {hoveredArtist.experience}
                </p>
              </div>
            </div>
          </div>

          {/* List Rows */}
          <div className="divide-y divide-stone-800/80">
            {ARTISTS.map((artist) => (
              <div
                key={artist.id}
                onMouseEnter={() => setHoveredArtist(artist)}
                className={`py-8 transition-colors duration-300 group cursor-pointer ${
                  hoveredArtist.id === artist.id ? 'bg-stone-900/40' : 'hover:bg-stone-900/20'
                }`}
                onClick={() => onBookWithArtist(artist)}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 rounded-xl">
                  {/* Column 1: Artist Name */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="font-serif text-xl sm:text-2xl font-light text-white group-hover:text-amber-200 transition-colors">
                      {artist.name}
                    </span>
                  </div>

                  {/* Column 2: Role */}
                  <div className="md:col-span-3">
                    <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                      {artist.role}
                    </span>
                  </div>

                  {/* Column 3: Philosophy / Description */}
                  <div className="md:col-span-4">
                    <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                      {artist.description}
                    </p>
                  </div>

                  {/* Column 4: Quick Action */}
                  <div className="md:col-span-2 flex items-center justify-end gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookWithArtist(artist);
                      }}
                      className="px-4 py-2 rounded-full border border-stone-700 text-[11px] uppercase tracking-wider text-stone-300 hover:text-white hover:border-white transition-all flex items-center gap-1.5 whitespace-nowrap bg-stone-950/60"
                    >
                      <Calendar className="w-3 h-3 text-amber-200" />
                      <span>Book Artist</span>
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
