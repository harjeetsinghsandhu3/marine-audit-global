import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* Background changed to Deep Forest Green #04291D */
    <div className="flex flex-col min-h-screen bg-[#04291D] font-sans text-slate-100 scroll-smooth">
      
      {/* NAVIGATION - Transparent with mesh feel */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-6 bg-[#04291D]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="bg-[#5EEA6C] text-[#04291D] px-2 py-1 rounded-sm font-black text-xl">MAG</div>
          <div className="font-bold text-lg tracking-tight uppercase text-white">
            Marine <span className="text-[#5EEA6C]">Audit</span> Global
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="text-[11px] font-bold uppercase tracking-widest text-white hover:text-[#5EEA6C] transition-all">Home</a>
          <a href="#services" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">Services</a>
          <a href="#contact" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">Contact</a>
          <a href="#audit-form" className="bg-[#5EEA6C] hover:bg-white text-[#04291D] px-6 py-2.5 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all">
            Request Audit
          </a>
        </div>

        <button className="lg:hidden text-[#5EEA6C] text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#04291D] border-b border-white/10 flex flex-col p-8 gap-6 lg:hidden shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-white">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-slate-400">Services</a>
            <a href="#audit-form" onClick={() => setIsMenuOpen(false)} className="bg-[#5EEA6C] text-[#04291D] text-center py-4 font-bold uppercase tracking-widest text-xs">Request Audit</a>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION - Added Mesh Pattern Overlay */}
        <section id="home" className="relative min-h-[90vh] flex items-center pt-12 pb-24 px-6 lg:px-20 overflow-hidden">
          {/* Subtle Digital Grid/Mesh Background Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{backgroundImage: `radial-gradient(#5EEA6C 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px'}}>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-[#5EEA6C] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">The Future of Marine Safety</span>
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase">
                WE ARE <br />
                <span className="text-[#5EEA6C]">VISION.</span>
              </h1>
              <div className="max-w-lg border-l-4 border-[#5EEA6C] pl-6 py-2 mb-10">
                <p className="text-base text-slate-300 leading-relaxed font-medium">
                  Elite surveyors delivering technical excellence. We provide 
                  the global fleet with the absolute integrity required for 
                  total operational compliance.
                </p>
              </div>
              <a href="#audit-form" className="inline-block bg-[#5EEA6C] text-[#04291D] px-10 py-5 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(94,234,108,0.3)]">
                Deploy MAG Expertise
              </a>
            </div>

            <div className="relative">
               {/* Image with Dark Green Overlay Style */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-[1px] border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial Ship" 
                  className="w-full h-[550px] object-cover mix-blend-luminosity opacity-80"
                />
                <div className="absolute inset-0 bg-[#04291D]/40"></div>
                <div className="absolute bottom-6 right-6 bg-[#5EEA6C] text-[#04291D] px-5 py-3 font-bold text-[10px] uppercase tracking-widest">
                  Live Asset Inspection
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Darker Green and White Cards */}
        <section id="services" className="py-28 bg-white px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-20 text-center">
              <h2 className="text-4xl font-black text-[#04291D] uppercase tracking-tighter mb-4">Our Services</h2>
              <div className="h-1.5 w-20 bg-[#5EEA6C]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <ServiceCard title="Ship Management" desc="Full technical management protocols ensuring vessel longevity." icon="🚢" />
              <ServiceCard title="Crew Management" desc="Specialized training and recruitment for elite fleet performance." icon="👥" />
              <ServiceCard title="Technical Services" desc="Comprehensive condition and statutory flag state inspections." icon="🛠️" />
              <ServiceCard title="Supply Chain" desc="Optimized logistics and procurement for global operations." icon="📦" />
              <ServiceCard title="Insurance" desc="Risk mitigation and claims handling with expert technical backing." icon="🛡️" />
              <ServiceCard title="Consultancy" desc="Strategic guidance on IMO compliance and new regulations." icon="🔍" />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION - Deep Green with Digital Pattern */}
        <section id="audit-form" className="py-32 bg-[#04291D] relative px-6 overflow-hidden">
          {/* Digital Wave/Mesh Background Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{backgroundImage: `linear-gradient(rgba(94,234,108,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,108,0.1) 1px, transparent 1px)`, backgroundSize: '50px 50px'}}>
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Get in touch with our team</h3>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">Contact our technical hub today to schedule your next vessel audit or deployment.</p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <input type="text" placeholder="Full Name" className="p-4 bg-white/5 text-white border border-white/20 focus:border-[#5EEA6C] outline-none transition-all" />
              <input type="email" placeholder="Official Email" className="p-4 bg-white/5 text-white border border-white/20 focus:border-[#5EEA6C] outline-none transition-all" />
              <textarea placeholder="How can we help?" className="p-4 bg-white/5 text-white border border-white/20 focus:border-[#5EEA6C] outline-none transition-all md:col-span-2 h-32"></textarea>
              <button className="md:col-span-2 bg-[#5EEA6C] text-[#04291D] py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#02150F] text-white py-12 px-6 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="font-black text-xl flex items-center gap-2">
             <div className="w-8 h-8 bg-white text-[#04291D] flex items-center justify-center rounded-sm">V</div>
             VISION
           </div>
           <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
             <a href="#" className="hover:text-[#5EEA6C]">Privacy Policy</a>
             <a href="#" className="hover:text-[#5EEA6C]">Terms of Service</a>
             <a href="#" className="hover:text-[#5EEA6C]">LinkedIn</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="group border-b border-slate-100 pb-10 hover:border-[#5EEA6C] transition-all duration-500">
      <div className="bg-[#04291D] w-12 h-12 flex items-center justify-center text-white mb-6 group-hover:bg-[#5EEA6C] group-hover:text-[#04291D] transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#04291D] mb-4 uppercase">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-6">{desc}</p>
      <a href="#" className="text-[10px] font-black uppercase tracking-widest text-[#5EEA6C] flex items-center gap-2 group-hover:gap-4 transition-all">
        Learn More <span>→</span>
      </a>
    </div>
  );
}
