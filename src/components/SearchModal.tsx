import React, { useState, useMemo } from 'react';
import { SIGNATURE_SERVICES, ARTISTS, FAQ_DATA } from '../data/mockData';
import { ServiceItem, Artist } from '../types';
import { Search, X, ArrowRight, Sparkles, Clock } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectArtist: (artist: Artist) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onSelectArtist,
}) => {
  const [query, setQuery] = useState('');

  const filteredServices = useMemo(() => {
    if (!query.trim()) return SIGNATURE_SERVICES;
    const q = query.toLowerCase();
    return SIGNATURE_SERVICES.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.finish.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredArtists = useMemo(() => {
    if (!query.trim()) return ARTISTS;
    const q = query.toLowerCase();
    return ARTISTS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q) ||
        a.specialty.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col">
        {/* Search Bar Input */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-stone-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search looks, bridal rituals, artists, or techniques..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base bg-transparent text-stone-900 focus:outline-none placeholder:text-stone-400 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-stone-500 hover:text-stone-900 px-2 py-1"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Services Section */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-400 block mb-3">
              Services & Rituals ({filteredServices.length})
            </span>
            {filteredServices.length === 0 ? (
              <p className="text-xs text-stone-400">No matching services found</p>
            ) : (
              <div className="space-y-2">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      onClose();
                      onSelectService(service);
                    }}
                    className="p-3 bg-white rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer flex items-center justify-between transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-stone-900">{service.name}</h4>
                        <span className="text-[11px] text-stone-500 font-mono">
                          {service.duration} · ${service.price}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Artists Section */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-400 block mb-3">
              Master Artists ({filteredArtists.length})
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredArtists.map((artist) => (
                <div
                  key={artist.id}
                  onClick={() => {
                    onClose();
                    onSelectArtist(artist);
                  }}
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-colors shadow-2xs"
                >
                  <p className="text-xs font-medium text-stone-900">{artist.name}</p>
                  <p className="text-[10px] text-stone-500 line-clamp-1">{artist.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
