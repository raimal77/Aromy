
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080d0c] pt-24 pb-12 px-6 border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#D4AF37] tracking-[0.1em]">L'ESSENCE D'OR</h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
              "Weaving stories through scent since 1924. A century of elegance, artisanal craft, and uncompromising luxury."
            </p>
            <div className="flex space-x-4">
              {['instagram', 'pinterest', 'twitter'].map((social) => (
                <a key={social} href="#" className="text-zinc-600 hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-widest">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] uppercase tracking-[0.2em] text-[11px] font-bold mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Shop', 'Collections', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase() as Page)}
                    className="text-zinc-500 hover:text-white text-sm font-light transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-[#D4AF37] uppercase tracking-[0.2em] text-[11px] font-bold mb-8">Service</h3>
            <ul className="space-y-4">
              {['Shipping & Returns', 'Privacy Policy', 'Terms of Use', 'Accessibility', 'Store Locator'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-white text-sm font-light transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#D4AF37] uppercase tracking-[0.2em] text-[11px] font-bold mb-8">Newsletter</h3>
            <p className="text-zinc-500 text-sm mb-6 font-light">Join the archives for exclusive previews and olfactory stories.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="absolute right-0 bottom-3 text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest space-y-4 md:space-y-0">
          <p>&copy; 2024 L'ESSENCE D'OR. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <span>Handcrafted in Paris</span>
            <span>Worldwide Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
