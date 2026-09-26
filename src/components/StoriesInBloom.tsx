import React from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { JournalArticle } from '../types';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface StoriesInBloomProps {
  onReadArticle: (article: JournalArticle) => void;
}

export const StoriesInBloom: React.FC<StoriesInBloomProps> = ({ onReadArticle }) => {
  const featuredArticle = JOURNAL_ARTICLES.find((a) => a.featured) || JOURNAL_ARTICLES[0];
  const sideArticles = JOURNAL_ARTICLES.filter((a) => a.id !== featuredArticle.id);

  return (
    <section id="journal" className="py-24 bg-[#FAF8F5] border-t border-[#E8E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight mb-2">
              Stories in Bloom
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light">
              Thoughts, masterclasses, and beauty insights where skincare science meets high-definition makeup.
            </p>
          </div>

          <button
            onClick={() => onReadArticle(featuredArticle)}
            className="px-6 py-2.5 rounded-full border border-stone-300 text-xs uppercase tracking-widest font-medium text-stone-800 hover:bg-stone-100 transition-colors self-start sm:self-auto"
          >
            View All Articles
          </button>
        </div>

        {/* Editorial Layout (matches screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Large Featured Article Card (7 cols) */}
          <div
            onClick={() => onReadArticle(featuredArticle)}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 min-h-[480px] sm:min-h-[560px] cursor-pointer flex flex-col justify-end bg-stone-900"
          >
            {/* Background Image */}
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-10 text-white max-w-xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-200/90 block mb-2">
                Featured Article · {featuredArticle.readTime}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-light text-white leading-tight mb-4 text-balance">
                {featuredArticle.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200/80 font-light leading-relaxed mb-6 line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onReadArticle(featuredArticle);
                }}
                className="px-6 py-2.5 bg-white/20 hover:bg-white text-white hover:text-stone-950 backdrop-blur-md rounded-full text-xs uppercase tracking-widest font-medium transition-all inline-flex items-center gap-2 border border-white/30"
              >
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Stacked Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 hover:border-stone-400 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono tracking-wider bg-white/90 backdrop-blur-sm text-stone-800 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono mb-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl font-medium text-stone-900 group-hover:text-stone-700 transition-colors mb-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-stone-500 font-light line-clamp-2 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-stone-900 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3 h-3" />
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
