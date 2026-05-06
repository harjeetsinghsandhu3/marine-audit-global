"use client";

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#052219] font-sans scroll-smooth">
      
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-6 bg-[#052219] sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="text-[#5EEA6C] font-black text-2xl tracking-tighter">V</div>
          <div className="font-bold text-lg tracking-tight uppercase text-white">
            Marine <span className="text-[#5EEA6C]">Audit</span> Global
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-[#5EEA6C] transition-all">Home</a>
          <a href="#services" className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all">Services</a>
          <a href="#contact" className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all">Contact</a>
        </div>

        <button className="lg:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <main>
        {/* HERO SECTION - Deep Emerald Background */}
        <section id="home" className="relative bg-[#052219] pt-12 pb-24 px-6 lg:px-20 overflow-hidden flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-6xl lg:text-8xl font-medium text-white leading-tight mb-8 tracking-tight">
              We are <br />
              <span className="font-bold">Vision.</span>
            </h1>
            <div className="max-w-md">
              <div className="w-16 h-1 bg-[#5EEA6C] mb-8"></div>
              <p className="text-base text-white/70 leading-relaxed">
                Marine Audit Global (MAG) delivers technical excellence and absolute integrity 
                to the international shipping community.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 z-10">
            <img 
              src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200" 
              alt="Marine operations" 
              className="w-full h-[400px] object-cover grayscale brightness-110 shadow-2xl rounded-sm"
            />
          </div>
        </section>

        {/* WHITE SECTION - Clean transition as seen in image_78abce.jpg */}
        <section className="bg-white py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-light text-slate-800 leading-snug">
                Around the world, <br />
                <span className="font-bold">Around the clock.</span>
              </h2>
            </div>
            <div className="lg:w-1/2 text-slate-500 text-sm leading-relaxed">
              <p>We provide global coverage for the maritime sector, operating in every major port across the globe to ensure your assets remain compliant.</p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" className="bg-white pb-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Our Services</h3>
            </div>

            <div className="lg:w-3/4 grid md:grid-cols-2 gap-x-8 gap-y-16">
              <ServiceItem title="Ship Management" img="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=600" />
              <ServiceItem title="Crew Management" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600" />
              <ServiceItem title="Technical Services" img="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600" />
              <ServiceItem title="Supply Chain" img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-6 lg:px-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
           <div className="font-black text-xl text-slate-900 uppercase">MAG</div>
           <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
             © 2026 Marine Audit Global
           </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceItem({ title, img }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden mb-6 h-64 bg-slate-200">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" 
        />
      </div>
      <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
      <div className="text-[#5EEA6C] text-[10px] font-black uppercase tracking-widest">
        Overview <span>→</span>
      </div>
    </div>
  );
}
