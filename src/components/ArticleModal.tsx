import React from 'react';
import { JournalArticle } from '../types';
import { X, Clock, Calendar, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: JournalArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative p-6 sm:p-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors z-10"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Date */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-3 uppercase tracking-wider">
          <span className="text-amber-800 font-semibold">{article.category}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl sm:text-4xl font-light text-stone-900 leading-tight mb-6">
          {article.title}
        </h2>

        {/* Feature Hero Image */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm bg-stone-200 mb-8">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Excerpt */}
        <p className="font-serif italic text-base sm:text-lg text-stone-700 leading-relaxed border-l-2 border-stone-800 pl-4 mb-8">
          "{article.excerpt}"
        </p>

        {/* Content Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-stone-200 mt-8 flex items-center justify-between text-xs text-stone-500">
          <span>Published by Aesthetica Editorial Atelier</span>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }
            }}
            className="flex items-center gap-1.5 hover:text-stone-900 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Article</span>
          </button>
        </div>
      </div>
    </div>
  );
};
