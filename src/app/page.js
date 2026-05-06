import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* Changed bg-white to bg-[#F0F4F0] (Light Green) */
    <div className="flex flex-col min-h-screen bg-[#F0F4F0] font-sans text-slate-900 scroll-smooth">
      
      {/* NAVIGATION - Kept White/90 for contrast and readability */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-5 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-[#0D1B2A] text-[#D4AF37] px-2 py-1 rounded font-black text-xl">MAG</div>
          <div className="font-bold text-lg tracking-tight uppercase text-[#0D1B2A]">
            Marine <span className="text-[#D4AF37]">Audit</span> Global
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="text-[11px] font-bold uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] transition-all">Home</a>
          <a href="#services" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Services</a>
          <a href="#contact" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Contact</a>
          <a href="#audit-form" className="bg-[#D4AF37] hover:bg-[#0D1B2A] text-white px-6 py-2.5 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all shadow-md">
            Request Audit
          </a>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 flex flex-col p-8 gap-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-slate-500">Services</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase tracking-widest text-sm text-slate-500">Contact</a>
            <a href="#audit-form" onClick={() => setIsMenuOpen(false)} className="bg-[#D4AF37] text-white text-center py-4 font-bold uppercase tracking-widest text-xs">Request Audit</a>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[85vh] flex items-center pt-12 pb-24 px-6 lg:px-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-[#D4AF37] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">Industry Technical Authority</span>
              <h1 className="text-6xl lg:text-8xl font-black text-[#0D1B2A] leading-[0.85] mb-8 tracking-tighter uppercase">
                Absolute <br />
                <span className="text-[#D4AF37]">Integrity.</span>
              </h1>
              <div className="max-w-lg border-l-4 border-[#0D1B2A] pl-6 py-2 mb-10">
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  Marine Audit Global (MAG) delivers high-impact technical audits 
                  that eliminate risk, fortify safety, and guarantee total 
                  operational compliance for the global fleet.
                </p>
              </div>
              <a href="#audit-form" className="inline-block bg-[#0D1B2A] text-white px-10 py-5 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#0D1B2A] transition-all shadow-xl">
                Deploy MAG Expertise
              </a>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-[#D4AF37]/5 rounded-full blur-3xl transition-all group-hover:bg-[#D4AF37]/10"></div>
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-200/50">
                <img 
                  src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial Tanker Vessel" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 right-6 bg-[#0D1B2A] text-white px-5 py-3 font-bold text-[10px] uppercase tracking-widest">
                  Active Asset Inspection
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL COMPETENCIES - Changed background to slightly deeper green for contrast */}
        <section id="services" className="py-28 bg-[#E8F0E8] px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-black text-[#0D1B2A] mb-20 uppercase tracking-tighter inline-block border-b-8 border-[#D4AF37]/20 pb-2">
              Technical Competencies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Vessel Inspections" desc="Detailed pre-purchase, condition, and flag state statutory inspections with MAG technical grading." icon="🚢" />
              <ServiceCard title="Internal Audits" desc="Exacting ISM, ISPS, and MLC compliance audits that identify vulnerabilities before they become liabilities." icon="⚖️" />
              <ServiceCard title="Sire 2.0 / Rightship" desc="Aggressive preparation and pre-vetting protocols to ensure top-tier safety ratings and asset approval." icon="📋" />
              <ServiceCard title="Onboard Training" desc="High-level safety and operational training conducted on-site to align crew performance." icon="⚓" />
              <ServiceCard title="TMSA Core Audits" desc="Verification audits mapped to Tanker Management and Self Assessment (TMSA) requirements." icon="🛡️" />
              <ServiceCard title="Investigation" desc="Expert Root Cause Analysis (RCA) and deep-dive incident investigations to prevent failure." icon="🔍" />
            </div>
          </div>
        </section>

        {/* AUDIT FORM - Kept container white/dark to pop off the light green main bg */}
        <section id="audit-form" className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-[#0D1B2A] flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-sm">
            <div className="lg:w-1/3 bg-[#D4AF37] p-12 text-[#0D1B2A]">
              <h3 className="text-3xl font-black uppercase leading-none mb-6">Secure Your Audit</h3>
              <p className="text-sm font-bold opacity-80 leading-relaxed mb-8">
                Provide your vessel details. Our technical team will review and respond within 12 hours.
              </p>
              <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest">
                <li>• Global Deployment</li>
                <li>• IACS Standards</li>
                <li>• Certified Surveyors</li>
              </ul>
            </div>
            
            <form className="lg:w-2/3 p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0D1B2A]">
              <input type="text" placeholder="Full Name" className="p-4 bg-slate-800/40 text-white text-sm outline-none border-b border-slate-700 focus:border-[#D4AF37] transition-all" required />
              <input type="email" placeholder="Official Email" className="p-4 bg-slate-800/40 text-white text-sm outline-none border-b border-slate-700 focus:border-[#D4AF37] transition-all" required />
              <input type="text" placeholder="Vessel Type" className="p-4 bg-slate-800/40 text-white text-sm outline-none border-b border-slate-700 focus:border-[#D4AF37] transition-all" />
              <select className="p-4 bg-slate-800/40 text-slate-400 text-sm outline-none border-b border-slate-700 focus:border-[#D4AF37] transition-all">
                <option>Service Required</option>
                <option>Vessel Inspections</option>
                <option>Internal Audits</option>
                <option>Sire 2.0 Prep</option>
              </select>
              <textarea placeholder="Project Details & Location" className="p-4 bg-slate-800/40 text-white text-sm outline-none border-b border-slate-700 focus:border-[#D4AF37] transition-all md:col-span-2 h-32"></textarea>
              <button type="submit" className="md:col-span-2 bg-[#D4AF37] text-[#0D1B2A] font-black py-5 uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-lg">
                Request Deployment
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0D1B2A] text-white py-20 px-6 lg:px-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h4 className="text-2xl font-black tracking-tight">MARINE AUDIT GLOBAL</h4>
            <p className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mt-2">Technical Authority</p>
          </div>
          <div className="space-y-6 text-left md:text-right">
            <div>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">Direct Inquiries</p>
              <a href="mailto:info@marineauditglobal.com" className="text-lg font-bold hover:text-[#D4AF37] transition-colors">info@marineauditglobal.com</a>
            </div>
            <div>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-1">24/7 Operations</p>
              <a href="tel:+919876543210" className="text-2xl font-black tracking-tighter hover:text-[#D4AF37] transition-colors">+91 98765 43210</a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-800/50 text-center text-[9px] text-slate-600 uppercase tracking-[0.5em]">
          © 2026 Marine Audit Global. Excellence Without Compromise.
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="group p-10 bg-white border border-slate-200/50 text-left hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 rounded-sm">
      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
      <h3 className="text-[13px] font-black text-[#0D1B2A] uppercase mb-4 tracking-widest group-hover:text-[#D4AF37] transition-colors">{title}</h3>
      <p className="text-[12px] text-slate-600 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}
