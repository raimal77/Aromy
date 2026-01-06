
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0b1210] border-l border-[#D4AF37]/20 z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="font-serif text-2xl tracking-widest">YOUR BAG</h2>
            <button onClick={onClose} className="p-2 hover:text-[#D4AF37]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-grow overflow-y-auto p-6 space-y-8">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-zinc-500 italic">Your collection is currently empty.</p>
                <button 
                  onClick={onClose}
                  className="text-[#D4AF37] border border-[#D4AF37] px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-20 h-28 bg-zinc-900 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg tracking-wide">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-zinc-600 hover:text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-zinc-500 text-xs mb-4">${item.price}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex border border-zinc-800 rounded-sm">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-zinc-800">-</button>
                        <span className="px-3 py-1 text-sm border-x border-zinc-800">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-zinc-800">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-zinc-800 space-y-6">
              <div className="flex justify-between items-center text-lg">
                <span className="tracking-widest uppercase text-sm text-zinc-500">Subtotal</span>
                <span className="font-serif text-2xl text-[#D4AF37]">${subtotal}</span>
              </div>
              <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest italic">Shipping and taxes calculated at checkout</p>
              <button className="w-full bg-[#D4AF37] hover:bg-[#F1D382] text-black py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300">
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
