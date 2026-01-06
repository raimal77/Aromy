
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#0b1210]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-semibold mb-4">Connect With Us</h2>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 tracking-wide">Visit the Atelier</h1>
            
            <div className="space-y-12 mt-16">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="uppercase text-[10px] tracking-[0.2em] text-zinc-500 mb-2">Location</h4>
                  <p className="font-light text-zinc-300">12 Rue des Archives, 75004 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="uppercase text-[10px] tracking-[0.2em] text-zinc-500 mb-2">Email</h4>
                  <p className="font-light text-zinc-300">concierge@lessencedor.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="uppercase text-[10px] tracking-[0.2em] text-zinc-500 mb-2">Private Consultations</h4>
                  <p className="font-light text-zinc-300">+33 (0) 1 42 74 12 34</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900/50 p-8 md:p-12 border border-zinc-800 backdrop-blur-sm">
            <h3 className="text-2xl font-serif mb-8 italic">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option className="bg-[#0b1210]">General Inquiry</option>
                  <option className="bg-[#0b1210]">Bespoke Fragrance</option>
                  <option className="bg-[#0b1210]">Wholesale</option>
                  <option className="bg-[#0b1210]">Press</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" />
              </div>
              <button className="w-full bg-[#D4AF37] text-black py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#F1D382] transition-all duration-300">
                Send Request
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-zinc-900 border border-[#D4AF37]/10 relative group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000" 
            alt="Paris Location" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 backdrop-blur-md p-6 border border-[#D4AF37]/30 text-center">
              <h4 className="font-serif text-xl text-[#F1D382] mb-2">Our Parisian Home</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/60">Open Daily 10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
