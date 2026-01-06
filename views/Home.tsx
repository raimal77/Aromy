
import React, { useState } from 'react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { geminiService } from '../services/geminiService';

interface HomeProps {
  onShopNow: () => void;
  onNavigate: (page: Page) => void;
  addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onShopNow, onNavigate, addToCart }) => {
  const [preference, setPreference] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [isLoadingRec, setIsLoadingRec] = useState(false);

  const handleGetRec = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preference.trim()) return;
    setIsLoadingRec(true);
    const result = await geminiService.getScentRecommendation(preference);
    setRecommendation(result || '');
    setIsLoadingRec(false);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Fragrance"
            className="w-full h-full object-cover opacity-60 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1210]/60 via-transparent to-[#0b1210]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
          <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-4">A Legacy of Elegance</h2>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
            Discover Your <br />
            <span className="italic font-normal text-[#F1D382]">Signature Essence</span>
          </h1>
          <p className="text-zinc-300 md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Handcrafted in the heart of Paris, blending the rarest botanicals into olfactory masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onShopNow}
              className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#F1D382] transition-all duration-300"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-[#0b1210]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-2">Editor's Choice</h2>
              <h3 className="text-3xl md:text-5xl font-serif">Curated Selection</h3>
            </div>
            <button onClick={() => onNavigate('shop')} className="text-[#D4AF37] uppercase tracking-widest text-xs border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Scent Finder */}
      <section className="py-24 px-6 bg-zinc-900 border-y border-[#D4AF37]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-4">L'Intelligence Artificielle</h2>
          <h3 className="text-3xl font-serif mb-6">Signature Scent Finder</h3>
          <p className="text-zinc-400 mb-10 leading-relaxed italic">"Tell us about the atmosphere you love, the memories you cherish, or the notes you prefer. Let our AI curator find your match."</p>
          
          <form onSubmit={handleGetRec} className="space-y-6">
            <textarea 
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              placeholder="e.g. A walk in a rain-drenched forest, or an evening at a jazz club with notes of tobacco and vanilla..."
              className="w-full bg-black/40 border border-[#D4AF37]/30 p-6 text-zinc-300 focus:outline-none focus:border-[#D4AF37] transition-all resize-none h-32 rounded-sm italic font-light"
            />
            <button 
              disabled={isLoadingRec}
              type="submit"
              className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] py-4 uppercase tracking-[0.25em] text-sm hover:bg-[#D4AF37] hover:text-black transition-all disabled:opacity-50"
            >
              {isLoadingRec ? 'Consulting the Archives...' : 'Find My Scent'}
            </button>
          </form>

          {recommendation && (
            <div className="mt-12 p-8 bg-[#0b1210] border border-[#D4AF37]/20 animate-fade-in">
              <p className="text-[#F1D382] font-serif text-xl italic leading-relaxed">
                {recommendation}
              </p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
