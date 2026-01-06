
import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface ShopProps {
  addToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Signature', 'Summer', 'Classic', 'Exclusive'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 bg-[#0b1210]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide">The Fragrance House</h1>
          <p className="text-zinc-500 max-w-xl mx-auto font-light">Explore our collection of meticulously crafted scents, designed to capture the essence of high luxury.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.2em] px-6 py-2 border transition-all ${
                filter === cat 
                ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5' 
                : 'border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-zinc-500 italic">No fragrances found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
