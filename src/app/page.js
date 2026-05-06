import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] font-sans text-slate-900 scroll-smooth">
      
      {/* NAVIGATION - Massive Font & High Visibility */}
      <nav className="flex items-center justify-between px-8 lg:px-20 py-10 bg-white sticky top-0 z-50 border-b-4 border-slate-100 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="bg-[#0D1B2A] text-[#D4AF37] px-4 py-2 rounded font-black text-4xl tracking-tighter shadow-md">MAG</div>
          <div className="font-black text-3xl tracking-tight uppercase text-[#0D1B2A]">
            Marine <span className="text-[#D4AF37]">Audit</span> Global
          </div>
        </div>
        
        <div className="hidden lg:flex gap-16 items-center">
          <a href="#home" className="text-2xl font-black uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] border-b-8 border-[#D4AF37] transition-all pb-2">Home</a>
          <a href="#services" className="text-2xl font-black uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] hover:border-b-8 border-[#D4AF37] transition-all pb-2">Services</a>
          <a href="#contact" className="text-2xl font-black uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] hover:border-b-8 border-[#D4AF37] transition-all pb-2">Contact</a>
        </div>

        <a href="#audit-form" className="bg-[#D4AF37] hover:bg-[#0D1B2A] text-white px-10 py-5 rounded-none font-black text-lg uppercase tracking-widest transition-all shadow-2xl">
          Request Audit
        </a>
      </nav>

      <main>
        {/* HERO SECTION - Powerful Industrial Strength */}
        <section id="home" className="relative min-h-[90vh] flex items-center bg-white py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <div className="bg-[#0D1B2A] text-[#D4AF37] inline-block px-6 py-2 font-black text-sm uppercase tracking-[0.4em] mb-8 shadow-lg">
                Industry Benchmark
              </div>
              <h1 className="text-7xl lg:text-9xl font-black text-[#0D1B2A] leading-none mb-10 tracking-tighter">
                ABSOLUTE <br />
                <span className="text-[#D4AF37]">INTEGRITY.</span>
              </h1>
              <p className="text-2xl text-slate-800 mb-12 leading-relaxed font-bold border-l-[12px] border-[#0D1B2A] pl-8">
                Marine Audit Global (MAG) defines excellence. Our elite surveyors, deployed in signature MAG boiler suits, 
                deliver high-impact technical audits that eliminate risk, fortify safety, and guarantee total 
                operational compliance for the global fleet.
              </p>
              <a href="#audit-form" className="inline-block bg-[#0D1B2A] text-white px-12 py-6 font-black text-sm uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all hover:translate-y-[-4px] shadow-2xl">
                Deploy MAG Expertise
              </a>
            </div>

            {/* INDUSTRIAL TANKER IMAGE */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
              <div className="relative rounded-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)] border-[10px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial Oil Tanker" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-[#0D1B2A] text-[#D4AF37] p-6 font-black text-xl uppercase">
                  Global Reach
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL COMPETENCIES - Detailed Notes */}
        <section id="services" className="py-32 px-8 lg:px-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-black text-[#0D1B2A] mb-20 text-left uppercase tracking-tighter border-b-8 border-[#D4AF37] inline-block">Technical Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <ServiceCard 
                title="Vessel Inspections" 
                desc="Detailed pre-purchase, condition, and flag state statutory inspections with specialized MAG technical grading."
                icon="🚢"
              />
              <ServiceCard 
                title="Internal Audits" 
                desc="Exacting ISM, ISPS, and MLC compliance audits that identify vulnerabilities before they become liabilities."
                icon="⚖️"
              />
              <ServiceCard 
                title="Sire 2.0 / Rightship" 
                desc="Aggressive preparation and pre-vetting protocols to ensure top-tier safety ratings and asset approval."
                icon="📋"
              />
              <ServiceCard 
                title="Onboard Training" 
                desc="High-level safety and operational training conducted on-site to align crew performance with global standards."
                icon="⚓"
              />
              <ServiceCard 
                title="TMSA Core Audits" 
                desc="Verification audits mapped to Tanker Management and Self Assessment (TMSA) requirements for oil majors."
                icon="🛡️"
              />
              <ServiceCard 
                title="Investigation" 
                desc="Expert Root Cause Analysis (RCA) and deep-dive incident investigations to prevent operational failure."
                icon="🔍"
              />
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section id="audit-form" className="py-32 bg-white px-8">
          <div className="max-w-5xl mx-auto bg-[#0D1B2A] p-16 rounded-none shadow-2xl">
            <h3 className="text-5xl font-black text-white mb-12 uppercase tracking-tighter text-center">Secure an Audit</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormInput placeholder="Full Name" />
              <FormInput placeholder="Official Email" type="email" />
              <FormInput placeholder="Phone / Mobile Number" type="tel" />
              <FormInput placeholder="Type of Vessel (e.g. Tanker, Bulk)" />
              
              <select className="p-5 bg-white border-none outline-none font-black text-[#0D1B2A] md:col-span-2 text-lg appearance-none">
                <option>Type of Inspection/Service</option>
                <option>Vessel Inspections</option>
                <option>Internal Audits</option>
                <option>Onboard Training</option>
                <option>Core Audits (TMSA)</option>
                <option>Sire 2.0 / Rightship Preparation</option>
                <option>Incident Investigation</option>
              </select>
              
              <textarea placeholder="Vessel Location & Project Details" className="p-5 bg-white border-none outline-none font-black text-[#0D1B2A] md:col-span-2 h-40 text-lg"></textarea>
              
              <button className="md:col-span-2 bg-[#D4AF37] text-[#0D1B2A] font-black py-6 uppercase tracking-[0.4em] text-xl hover:bg-white transition-all shadow-xl">
                Request Deployment
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#08131F] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-4xl font-black tracking-tighter">MARINE AUDIT GLOBAL</h4>
            <p className="text-[#D4AF37] font-black text-lg uppercase tracking-widest mt-2">Technical Authority</p>
          </div>
          <div className="flex flex-col gap-4 font-black text-xl text-right">
            <p className="hover:text-[#D4AF37] transition-all">info@marineauditglobal.com</p>
            <p className="hover:text-[#D4AF37] transition-all">+91 98765 43210</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="p-10 bg-white border-b-8 border-slate-200 hover:border-[#D4AF37] hover:translate-y-[-10px] transition-all shadow-lg group">
      <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
      <h3 className="text-2xl font-black text-[#0D1B2A] uppercase mb-6 tracking-tighter">{title}</h3>
      <p className="text-lg text-slate-500 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}

function FormInput({ ...props }) {
  return (
    <input 
      {...props} 
      className="p-5 bg-white border-none outline-none font-black text-[#0D1B2A] text-lg placeholder-slate-400" 
    />
  );
}
