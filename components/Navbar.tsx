
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  scrolled: boolean;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, scrolled, cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Shop', value: 'shop' },
    { label: 'Collections', value: 'collections' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0b1210]/95 backdrop-blur-md py-4 shadow-xl border-b border-[#D4AF37]/20' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="text-2xl font-serif font-bold tracking-widest text-[#D4AF37] hover:text-[#F1D382] transition-colors"
        >
          L'ESSENCE D'OR
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => onNavigate(link.value)}
              className={`uppercase text-xs tracking-[0.2em] transition-all hover:text-[#D4AF37] ${
                currentPage === link.value ? 'text-[#D4AF37] font-semibold' : 'text-[#f8f9fa]/80'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:text-[#D4AF37] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-[#D4AF37]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#0b1210] border-b border-[#D4AF37]/20 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                onNavigate(link.value);
                setIsOpen(false);
              }}
              className={`text-left uppercase text-sm tracking-[0.2em] py-2 ${
                currentPage === link.value ? 'text-[#D4AF37]' : 'text-[#f8f9fa]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
