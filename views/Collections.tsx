
import React from 'react';
import { Page } from '../types';
import { COLLECTIONS } from '../constants';

interface CollectionsProps {
  onNavigate: (page: Page) => void;
}

const Collections: React.FC<CollectionsProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0b1210]">
      <div className="px-6 max-w-7xl mx-auto mb-16">
        <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-semibold mb-2">Curated Experiences</h2>
        <h1 className="text-4xl md:text-6xl font-serif mb-8">Exclusive Collections</h1>
      </div>

      {/* Swipeable Carousel Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 space-x-6 pb-12">
        {COLLECTIONS.map((col, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center relative group overflow-hidden h-[60vh]"
          >
            <img 
              src={col.image} 
              alt={col.title} 
              className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <h3 className="text-3xl md:text-4xl font-serif mb-4">{col.title}</h3>
              <p className="text-zinc-300 font-light mb-8 max-w-sm">{col.subtitle}</p>
              <button 
                onClick={() => onNavigate('shop')}
                className="px-8 py-3 border border-white/40 text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all"
              >
                Discover Series
              </button>
            </div>
          </div>
        ))}
        {/* Placeholder for more */}
        <div className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center bg-zinc-900 flex items-center justify-center h-[60vh] border border-[#D4AF37]/10">
          <div className="text-center">
            <h3 className="text-2xl font-serif text-zinc-500 mb-4">Coming Soon</h3>
            <p className="text-zinc-600 text-sm tracking-widest uppercase">Maison Collection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
