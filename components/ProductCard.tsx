
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <div className="group relative flex flex-col bg-[#0b1210] overflow-hidden">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Quick Add Overlay */}
        <button 
          onClick={() => onAdd(product)}
          className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 text-xs tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]"
        >
          Add to Bag
        </button>
      </div>

      {/* Product Details */}
      <div className="pt-6 pb-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-serif text-lg text-[#f8f9fa] tracking-wide">{product.name}</h3>
          <span className="text-[#D4AF37] font-medium tracking-wider">${product.price}</span>
        </div>
        <p className="text-zinc-500 text-xs uppercase tracking-[0.15em] mb-2">{product.category}</p>
        <div className="flex gap-2">
          {product.notes.slice(0, 3).map(note => (
            <span key={note} className="text-[10px] text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              {note}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
