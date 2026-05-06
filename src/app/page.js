"use client";

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Colors based on image_78abce.jpg
  const deepGreen = "#052219"; 
  const limeGreen = "#5EEA6C";

  return (
    <div 
      style={{ backgroundColor: deepGreen }} 
      className="flex flex-col min-h-screen font-sans scroll-smooth text-white"
    >
      
      {/* NAVIGATION */}
      <nav style={{ backgroundColor: deepGreen }} className="flex items-center justify-between px-6 lg:px-20 py-5 sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div style={{ color: limeGreen }} className="font-black text-2xl tracking-tighter">V</div>
          <div className="font-bold text-lg tracking-tight uppercase">
            Marine <span style={{ color: limeGreen }}>Audit</span> Global
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="text-[11px] font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-all">Home</a>
          <a href="#services" className="text-[11px] font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-all">Services</a>
          <button style={{ color: limeGreen }} className="ml-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </nav>

      <main>
        {/* HERO SECTION - Deep Green with the Mesh Look from image_78abce.jpg */}
        <section 
          id="home" 
          className="relative pt-16 pb-32 px-6 lg:px-20 overflow-hidden flex flex-col lg:flex-row items-center gap-16"
        >
          {/* MESH OVERLAY */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{
              backgroundImage: `radial-gradient(${limeGreen} 0.5px, transparent 0.5px)`, 
              backgroundSize: '40px 40px'
            }}
          ></div>
          
          <div className="w-full lg:w-1/2 relative z-10">
            <h1 className="text-6xl lg:text-[100px] font-light leading-[0.9] mb-10 tracking-tight">
              We are <br />
              <span className="font-bold">Vision.</span>
            </h1>
            <div className="max-w-md">
              <div style={{ backgroundColor: limeGreen }} className="w-20 h-1.5 mb-10"></div>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Marine Audit Global (MAG) is the defining authority in high-impact technical audits. 
                Delivering absolute integrity to the international maritime community.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200" 
                alt="Vessel Inspection" 
                className="w-full h-[500px] object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
              />
            </div>
          </div>
        </section>

        {/* WHITE INFO SECTION */}
        <section className="bg-white py-32 px-6 lg:px-20 text-[#052219]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            <h2 className="text-5xl font-light leading-tight tracking-tight">
              Around the world, <br />
              <span className="font-bold">Around the clock.</span>
            </h2>
            <div className="text-slate-500 text-lg leading-relaxed flex flex-col justify-center">
              <p>Operating 24/7, MAG provides the technical oversight required for modern ship management and operational safety.</p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="bg-white pb-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/5">
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Our Services</h3>
            </div>
            <div className="lg:w-4/5 grid md:grid-cols-2 gap-x-12 gap-y-20">
              <ServiceItem title="Ship Management" color={limeGreen} img="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800" />
              <ServiceItem title="Crew Management" color={limeGreen} img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" />
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section 
          id="contact" 
          style={{ backgroundColor: "#031811" }} 
          className="py-40 px-6 lg:px-20 relative overflow-hidden"
        >
           <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
              <h2 className="text-5xl lg:text-7xl font-light mb-16 uppercase tracking-tight">
                Get in touch with <br />
                <span className="font-bold">our team</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <button 
                  style={{ backgroundColor: limeGreen }} 
                  className="text-[#031811] px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-lg"
                >
                  Contact Us
                </button>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}

function ServiceItem({ title, img, color }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden mb-8 h-80 relative">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
      </div>
      <h4 className="text-2xl font-bold text-slate-900 mb-4">{title}</h4>
      <div style={{ color: color }} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
        Overview <span className="text-lg">→</span>
      </div>
    </div>
  );
}
