"use client";

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans scroll-smooth selection:bg-[#5EEA6C] selection:text-[#052219]">
      
      {/* NAVIGATION - Matching the dark header in image_78abce.jpg */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-5 bg-[#052219] sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="text-[#5EEA6C] font-black text-2xl tracking-tighter">V</div>
          <div className="font-bold text-lg tracking-tight uppercase text-white">
            Marine <span className="text-[#5EEA6C]">Audit</span> Global
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-[#5EEA6C] transition-all">Home</a>
          <a href="#services" className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all">Services</a>
          <a href="#contact" className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all">Contact</a>
          <button className="text-white hover:text-[#5EEA6C] transition-all ml-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#052219] border-b border-white/10 flex flex-col p-8 gap-6 lg:hidden shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-white">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-white/70">Services</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-white/70">Contact</a>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION - Deep Green with Mesh Background */}
        <section id="home" className="relative bg-[#052219] pt-16 pb-32 px-6 lg:px-20 overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          {/* Subtle Mesh/Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{backgroundImage: `radial-gradient(#5EEA6C 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px'}}>
          </div>
          
          <div className="w-full lg:w-1/2 relative z-10">
            <h1 className="text-6xl lg:text-[100px] font-light text-white leading-[0.9] mb-10 tracking-tight">
              We are <br />
              <span className="font-bold">Vision.</span>
            </h1>
            <div className="max-w-md">
              <div className="w-20 h-1.5 bg-[#5EEA6C] mb-10"></div>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Marine Audit Global (MAG) is the defining authority in high-impact technical audits. 
                Delivering absolute integrity to the international maritime community.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 group">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200&auto=format&fit=crop" 
                alt="Vessel Inspection" 
                className="w-full h-[500px] object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#052219]/30 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
            </div>
          </div>
        </section>

        {/* SUB-HERO / INFO SECTION */}
        <section className="bg-white py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-light text-[#052219] leading-tight tracking-tight">
                Around the world, <br />
                <span className="font-bold italic">Around the clock.</span>
              </h2>
            </div>
            <div className="text-slate-500 text-lg leading-relaxed flex flex-col justify-center">
              <p className="mb-6">Our global network of surveyors ensures that your fleet remains compliant with international safety standards, regardless of location.</p>
              <p>Operating 24/7, MAG provides the technical oversight required for modern ship management and operational safety.</p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID - Layout style from image_78abce.jpg */}
        <section id="services" className="bg-white pb-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/5">
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Our Services</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Elite technical solutions tailored for the global maritime industry.
              </p>
            </div>

            <div className="lg:w-4/5 grid md:grid-cols-2 gap-x-12 gap-y-20">
              <ServiceItem title="Ship Management" img="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800" />
              <ServiceItem title="Crew Management" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" />
              <ServiceItem title="Technical Services" img="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800" />
              <ServiceItem title="Supply Chain" img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" />
            </div>
          </div>
        </section>

        {/* CONTACT BANNER - Deep Green with Contact CTA */}
        <section id="contact" className="bg-[#031811] py-40 px-6 lg:px-20 relative overflow-hidden">
           {/* Decorative Mesh Background */}
           <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none scale-150 origin-bottom-right"></div>
           
           <div className="max-w-7xl mx-auto relative z-10">
              <h2 className="text-5xl lg:text-7xl text-white font-light mb-16 uppercase tracking-tight">
                Get in touch with <br />
                <span className="font-bold">our team</span>
              </h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <a href="mailto:info@marineauditglobal.com" className="text-xl text-white/60 hover:text-[#5EEA6C] transition-all border-b border-white/10 pb-2">
                  info@marineauditglobal.com
                </a>
                <button className="bg-transparent border border-white/20 text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#5EEA6C] hover:border-[#5EEA6C] hover:text-[#031811] transition-all">
                  Contact Us
                </button>
              </div>
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-t border-slate-100 pt-16">
           <div className="font-black text-3xl flex items-center gap-3 text-slate-900">
             <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-sm text-lg">V</div>
             MAG
           </div>
           <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Sustainability</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceItem({ title, img }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden mb-8 h-80 relative">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" 
        />
        {/* Subtle overlay that fades out on hover */}
        <div className="absolute inset-0 bg-[#052219]/20 group-hover:opacity-0 transition-opacity duration-700"></div>
      </div>
      <h4 className="text-2xl font-bold text-slate-900 mb-4">{title}</h4>
      <div className="flex items-center gap-3 text-[#5EEA6C] text-[11px] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
        Overview <span className="text-lg">→</span>
      </div>
    </div>
  );
}
