
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-marble text-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-semibold mb-4">The Craft</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">An Artisanal <br /> Heritage</h1>
          <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-12" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic text-[#D4AF37]">Born in Paris, Inspired by the World.</h3>
            <p className="leading-relaxed text-zinc-700 font-light">
              Founded in 1924, L'Essence d'Or began as a small apothecary in the Le Marais district. Our founder, André de Valois, believed that a fragrance should not just be a scent, but a story—a memory captured in a crystal vial.
            </p>
            <p className="leading-relaxed text-zinc-700 font-light">
              Today, we carry that legacy forward, working with the world's most renowned noses to source sustainable, rare ingredients from every corner of the globe.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl transform rotate-1">
            <img 
              src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=1000" 
              alt="Heritage" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="text-center py-24 border-t border-zinc-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Rare Extracts', value: '100+' },
              { label: 'Master Perfumers', value: '12' },
              { label: 'Countries Served', value: '45' },
              { label: 'Years of Heritage', value: '100' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-serif text-[#D4AF37] mb-2">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif mb-8 italic">"Scent is the most intense form of memory."</h3>
            <p className="text-zinc-400 uppercase tracking-widest text-xs">- André de Valois</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-32 -mt-32" />
        </div>
      </div>
    </div>
  );
};

export default About;
