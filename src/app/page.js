import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-5 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-[#0D1B2A] text-[#D4AF37] px-2 py-1 rounded font-black text-xl">MAG</div>
          <div className="font-bold text-lg tracking-tight uppercase text-[#0D1B2A]">
            Marine <span className="text-[#D4AF37]">Audit</span> Global
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] transition-all">Home</a>
          <a href="#services" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Services</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Contact</a>
          <a href="#audit-form" className="bg-[#D4AF37] hover:bg-[#0D1B2A] text-white hover:text-[#D4AF37] px-6 py-2.5 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all shadow-md">
            Request Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 flex flex-col p-6 gap-4 lg:hidden shadow-xl animate-in slide-in-from-top">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-slate-500">Services</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-slate-500">Contact</a>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[80vh] flex items-center pt-12 pb-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 text-center lg:text-left">
              <span className="text-[#D4AF37] font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Global Maritime Standards</span>
              <h1 className="text-5xl lg:text-8xl font-black text-[#0D1B2A] leading-[0.85] mb-6 tracking-tighter uppercase">
                Absolute <br />
                <span className="text-[#D4AF37]">Integrity.</span>
              </h1>
              <div className="max-w-lg border-l-0 lg:border-l-4 border-[#0D1B2A] lg:pl-6 py-2 mb-10 mx-auto lg:mx-0">
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  Marine Audit Global (MAG) defines technical excellence. We deliver 
                  high-impact audits that eliminate risk, fortify safety, and 
                  guarantee total operational compliance for the global fleet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#audit-form" className="bg-[#0D1B2A] text-white px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-all shadow-xl">
                  Deploy MAG Expertise
                </a>
                <a href="#services" className="border-2 border-slate-200 text-[#0D1B2A] px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                  View Capabilities
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all"></div>
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial Tanker Vessel" 
                  className="w-full h-[500px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-[#0D1B2A] text-white px-5 py-3 font-bold text-[10px] uppercase tracking-widest">
                  Live Asset Inspection
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL COMPETENCIES */}
        <section id="services" className="py-28 bg-[#F8F9FA] px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-20 text-center">
              <h2 className="text-4xl font-black text-[#0D1B2A] uppercase tracking-tighter mb-4">
                Technical Competencies
              </h2>
              <div className="h-1.5 w-24 bg-[#D4AF37]"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Vessel Inspections" desc="Detailed pre-purchase and condition inspections with specialized MAG technical grading." icon="🚢" />
              <ServiceCard title="Internal Audits" desc="Exacting ISM, ISPS, and MLC compliance audits that identify vulnerabilities early." icon="⚖️" />
              <ServiceCard title="Sire 2.0 / Rightship" desc="Aggressive preparation protocols to ensure top-tier safety ratings and asset approval." icon="📋" />
              <ServiceCard title="Onboard Training" desc="High-level safety training conducted on-site to align crew with global standards." icon="⚓" />
              <ServiceCard title="TMSA Core Audits" desc="Verification audits mapped to Tanker Management and Self Assessment requirements." icon="🛡️" />
              <ServiceCard title="Investigation" desc="Expert Root Cause Analysis (RCA) and deep-dive incident investigations." icon="🔍" />
            </div>
          </div>
        </section>

        {/* AUDIT FORM */}
        <section id="audit-form" className="py-24 bg-white px-6">
          <div className="max-w-5xl mx-auto bg-[#0D1B2A] flex flex-col lg:flex-row overflow-hidden shadow-2xl">
            <div className="lg:w-1/3 bg-[#D4AF37] p-12 text-[#0D1B2A]">
              <h3 className="text-3xl font-black uppercase leading-none mb-6">Secure Your Audit</h3>
              <p className="text-sm font-bold opacity-80 leading-relaxed mb-8">
                Provide your vessel details and our technical team will contact you within 12 hours to discuss deployment.
              </p>
              <div className="space-y-4 text-[11px] font-black uppercase tracking-widest">
                <p>✓ Global Coverage</p>
                <p>✓ IACS Standards</p>
                <p>✓ 24/7 Availability</p>
              </div>
            </div>
            
            <form className="lg:w-2/3 p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="p-4 bg-slate-800/50 text-white text-sm outline-none border-b-2 border-slate-700 focus:border-[#D4AF37] transition-all" required />
              <input type="email" placeholder="Official Email" className="p-4 bg-slate-800/50 text-white text-sm outline-none border-b-2 border-slate-700 focus:border-[#D4AF37] transition-all" required />
              <input type="text" placeholder="Vessel Type" className="p-4 bg-slate-800/50 text-white text-sm outline-none border-b-2 border-slate-700 focus:border-[#D4AF37] transition-all" />
              
              <select className="p-4 bg-slate-800/50 text-slate-400 text-sm outline-none border-b-2 border-slate-700 focus:border-[#D4AF37] transition-all md:col-span-1">
                <option>Service Required</option>
                <option>Vessel Inspections</option>
                <option>Internal Audits</option>
                <option>Training</option>
              </select>
              
              <textarea placeholder="Deployment Location & Project Specifics" className="p-4 bg-slate-800/50 text-white text-sm outline-none border-b-2 border-slate-700 focus:border-[#D4AF37] transition-all md:col-span-2 h-32"></textarea>
              
              <button type="submit" className="md:col-span-2 bg-[#D4AF37] text-[#0D1B2A] font-black py-5 uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-lg">
                Request Deployment
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0D1B2A] text-white py-16 px-6 lg:px-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <h4 className="text-2xl font-black tracking-tight mb-2">MAG</h4>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Defining the vanguard of maritime safety and technical audit services for the international shipping industry.
            </p>
          </div>
          
          <div className="col-span-1">
            <p className="text-[#D4AF37] font-black text-[10px] uppercase tracking-widest mb-4">Contact Gateway</p>
            <div className="space-y-4">
              <a href="mailto:info@marineauditglobal.com" className="block text-sm hover:text-[#D4AF37] transition-colors">info@marineauditglobal.com</a>
              <a href="tel:+919876543210" className="block text-xl font-black tracking-tighter">+91 98765 43210</a>
            </div>
          </div>

          <div className="col-span-1 md:text-right">
            <p className="text-slate-500 text-[10px] uppercase tracking-widest">Headquarters</p>
            <p className="text-sm mt-2">Operational Hubs: <br />Singapore | Dubai | Mumbai</p>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-800/50 text-center text-[9px] text-slate-600 uppercase tracking-[0.4em]">
          © 2026 Marine Audit Global. Excellence Without Compromise.
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="group p-10 bg-white border border-slate-100 text-left hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl">
      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
      <h3 className="text-[13px] font-black text-[#0D1B2A] uppercase mb-4 tracking-widest group-hover:text-[#D4AF37] transition-colors">{title}</h3>
      <p className="text-[12px] text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}
