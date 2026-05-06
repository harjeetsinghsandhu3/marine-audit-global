import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-5 bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-[#0D1B2A] text-[#D4AF37] px-2 py-1 rounded font-black text-xl">MAG</div>
          <div className="font-bold text-lg tracking-tight uppercase text-[#0D1B2A]">
            Marine <span className="text-[#D4AF37]">Audit</span> Global
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#home" className="text-sm font-bold uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1 transition-all">Home</a>
          <a href="#services" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Services</a>
          <a href="#contact" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Contact</a>
        </div>

        <a href="#audit-form" className="bg-[#D4AF37] hover:bg-[#C5A021] text-white px-6 py-2.5 rounded-sm font-bold text-[11px] uppercase tracking-widest transition-all shadow-md">
          Request Audit
        </a>
      </nav>

      <main>
        {/* HERO SECTION - Featuring Industrial Tanker */}
        <section id="home" className="relative min-h-[70vh] flex items-center pt-16 pb-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-6xl lg:text-7xl font-black text-[#0D1B2A] leading-[0.9] mb-4 tracking-tighter uppercase">
                Absolute <br />
                <span className="text-[#D4AF37]">Integrity.</span>
              </h1>
              <div className="max-w-lg border-l-4 border-[#0D1B2A] pl-6 py-2 mb-8">
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  Marine Audit Global (MAG) defines excellence. Our elite surveyors deliver 
                  high-impact technical audits that eliminate risk, fortify safety, and 
                  guarantee total operational compliance for the global fleet.
                </p>
              </div>
              <a href="#audit-form" className="inline-block bg-[#0D1B2A] text-white px-8 py-4 font-bold text-[11px] uppercase tracking-widest hover:bg-[#1E3A8A] transition-all shadow-lg">
                Deploy MAG Expertise
              </a>
            </div>

            {/* TANKER PHOTO SECTION */}
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial Tanker Vessel" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-[#0D1B2A] text-white px-4 py-2 font-bold text-[10px] uppercase tracking-widest">
                  Active Asset Inspection
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL COMPETENCIES */}
        <section id="services" className="py-24 bg-[#F9FAFB] px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black text-[#0D1B2A] mb-16 uppercase tracking-tighter border-b-4 border-[#D4AF37] inline-block pb-2">
              Technical Competencies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard title="Vessel Inspections" desc="Detailed pre-purchase, condition, and flag state statutory inspections with specialized MAG technical grading." icon="🚢" />
              <ServiceCard title="Internal Audits" desc="Exacting ISM, ISPS, and MLC compliance audits that identify vulnerabilities before they become liabilities." icon="⚖️" />
              <ServiceCard title="Sire 2.0 / Rightship" desc="Aggressive preparation and pre-vetting protocols to ensure top-tier safety ratings and asset approval." icon="📋" />
              <ServiceCard title="Onboard Training" desc="High-level safety and operational training conducted on-site to align crew performance with global standards." icon="⚓" />
              <ServiceCard title="TMSA Core Audits" desc="Verification audits mapped to Tanker Management and Self Assessment (TMSA) requirements for oil majors." icon="🛡️" />
              <ServiceCard title="Investigation" desc="Expert Root Cause Analysis (RCA) and deep-dive incident investigations to prevent operational failure." icon="🔍" />
            </div>
          </div>
        </section>

        {/* SECURE AN AUDIT FORM */}
        <section id="audit-form" className="py-24 bg-white px-6">
          <div className="max-w-4xl mx-auto bg-[#0D1B2A] p-10 lg:p-16 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-tight">Secure An Audit</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name" className="p-3 bg-white text-sm outline-none w-full" required />
              <input type="email" placeholder="Official Email" className="p-3 bg-white text-sm outline-none w-full" required />
              <input type="tel" placeholder="Phone / Mobile Number" className="p-3 bg-white text-sm outline-none w-full" required />
              <input type="text" placeholder="Type of Vessel (e.g. Tanker, Bulk)" className="p-3 bg-white text-sm outline-none w-full" />
              
              <select className="p-3 bg-white text-sm outline-none w-full md:col-span-2 appearance-none text-slate-500">
                <option>Type of Inspection/Service</option>
                <option>Vessel Inspections</option>
                <option>Internal Audits</option>
                <option>Onboard Training</option>
                <option>Core Audits (TMSA)</option>
                <option>Sire 2.0 / Rightship Preparation</option>
                <option>Incident Investigation</option>
              </select>
              
              <textarea placeholder="Vessel Location & Project Details" className="p-3 bg-white text-sm outline-none w-full md:col-span-2 h-32"></textarea>
              
              <button type="submit" className="md:col-span-2 bg-[#D4AF37] text-[#0D1B2A] font-black py-3.5 uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-md">
                Request Deployment
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER - Updated with larger fonts and WhatsApp icon */}
      <footer id="contact" className="bg-[#0D1B2A] text-white py-14 px-6 lg:px-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black tracking-tight">MARINE AUDIT GLOBAL</h4>
            <p className="text-[#D4AF37] font-bold text-[11px] uppercase tracking-widest mt-1">Technical Authority</p>
          </div>
          <div className="text-center md:text-right space-y-3">
            <div className="flex items-center justify-center md:justify-end gap-2 text-sm lg:text-base font-bold tracking-wider hover:text-[#D4AF37] transition-colors cursor-pointer">
              <span>📧</span>
              <a href="mailto:info@marineauditglobal.com">info@marineauditglobal.com</a>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2 text-base lg:text-lg font-black tracking-widest hover:text-[#D4AF37] transition-colors">
              {/* WhatsApp Icon placeholder via Emoji - clean and professional */}
              <span className="text-green-500 text-xl">💬</span> 
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-[9px] text-slate-500 uppercase tracking-[0.3em]">
          © 2026 Marine Audit Global. Professional Excellence at Sea.
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="p-8 bg-white shadow-sm border border-slate-50 text-left hover:shadow-xl transition-all">
      <div className="text-3xl mb-4 text-slate-400">{icon}</div>
      <h3 className="text-sm font-black text-[#0D1B2A] uppercase mb-3 tracking-tight">{title}</h3>
      <p className="text-[12px] text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}
