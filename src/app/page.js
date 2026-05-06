import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] font-sans text-slate-900 scroll-smooth">
      
      {/* NAVIGATION - High Visibility */}
      <nav className="flex items-center justify-between px-8 lg:px-20 py-8 bg-white sticky top-0 z-50 border-b-2 border-slate-100 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-[#0D1B2A] text-[#D4AF37] px-3 py-1 rounded font-black text-3xl tracking-tighter">MAG</div>
          <div className="font-black text-2xl tracking-tight uppercase text-[#0D1B2A]">
            Marine <span className="text-[#D4AF37]">Audit</span> Global
          </div>
        </div>
        
        {/* Highlighted & Large Nav Options */}
        <div className="hidden lg:flex gap-12 items-center">
          <a href="#home" className="text-xl font-black uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] border-b-4 border-[#D4AF37] transition-all">Home</a>
          <a href="#services" className="text-xl font-black uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] hover:border-b-4 border-[#D4AF37] transition-all">Services</a>
          <a href="#contact" className="text-xl font-black uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] hover:border-b-4 border-[#D4AF37] transition-all">Contact</a>
        </div>

        <a href="#audit-form" className="bg-[#1E3A8A] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest transition-all shadow-lg">
          Request Audit
        </a>
      </nav>

      <main>
        {/* HERO SECTION - Industrial Strength */}
        <section id="home" className="relative min-h-[85vh] flex items-center bg-[#F8FAFC] py-16">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="bg-[#D4AF37] text-white inline-block px-4 py-1 font-bold text-xs uppercase tracking-[0.3em] mb-6">
                Uncompromising Standards
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-[#0D1B2A] leading-none mb-8 tracking-tighter">
                COMMANDING <br />
                <span className="text-[#D4AF37]">COMPLIANCE.</span>
              </h1>
              <p className="text-xl text-slate-700 mb-10 leading-relaxed font-bold border-l-8 border-[#1E3A8A] pl-6">
                MAG sets the global benchmark for maritime integrity. Our surveyors, identifiable in signature 
                Marine Audit Global (MAG) boiler suits, deliver rigorous, field-proven technical audits that 
                fortify fleet safety and shield your operations from risk.
              </p>
              <div className="flex gap-4">
                <a href="#audit-form" className="bg-[#0D1B2A] text-white px-10 py-5 font-black text-xs uppercase tracking-[0.2em] hover:bg-[#1E3A8A] transition-all">
                  Secure Your Audit
                </a>
              </div>
            </div>

            {/* INDUSTRIAL TANKER IMAGE */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#D4AF37] opacity-20 rounded-xl"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1591340705051-789370007e99?q=80&w=1200&auto=format&fit=crop" 
                  alt="Marine Tanker Ship" 
                  className="w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-0 right-0 bg-[#0D1B2A] text-white p-4 font-black text-sm uppercase tracking-widest">
                  Active Inspection Zone
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL COMPETENCIES SECTION - Detailed Version */}
        <section id="services" className="py-24 px-8 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-[#0D1B2A] mb-16 text-center uppercase tracking-tighter border-b-4 border-[#D4AF37] inline-block">Technical Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ServiceCard 
                title="Vessel Inspections" 
                desc="Pre-purchase, condition, class, and flag state statutory inspections with detailed MAG technical reporting."
                icon="🚢"
              />
              <ServiceCard 
                title="Internal Audits" 
                desc="Comprehensive ISM, ISPS, and MLC audits to ensure management systems exceed regulatory requirements."
                icon="⚖️"
              />
              <ServiceCard 
                title="Onboard Training" 
                desc="Hands-on safety and operational training tailored to your crew's specific vessel and trade route."
                icon="⚓"
              />
              <ServiceCard 
                title="Sire 2.0 / Rightship" 
                desc="Strategic preparation and pre-vetting assessments to ensure high scores and seamless approvals."
                icon="📋"
              />
              <ServiceCard 
                title="TMSA Core Audits" 
                desc="Tanker Management and Self Assessment verification to align with oil major expectations."
                icon="🛡️"
              />
              <ServiceCard 
                title="Incident Investigation" 
                desc="Root Cause Analysis (RCA) and deep-dive investigations for accidents or operational failures."
                icon="🔍"
              />
            </div>
          </div>
        </section>

        {/* AUDIT FORM - Comprehensive */}
        <section id="audit-form" className="py-24 bg-[#F8FAFC] px-8">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-xl border border-slate-100">
            <h3 className="text-3xl font-black text-[#0D1B2A] mb-8 uppercase tracking-tighter">Submit Audit Request</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="p-4 border-2 border-slate-100 focus:border-[#D4AF37] outline-none font-bold" />
              <input type="email" placeholder="Official Email" className="p-4 border-2 border-slate-100 focus:border-[#D4AF37] outline-none font-bold" />
              <input type="tel" placeholder="Mobile Number" className="p-4 border-2 border-slate-100 focus:border-[#D4AF37] outline-none font-bold" />
              <input type="text" placeholder="Type of Vessel" className="p-4 border-2 border-slate-100 focus:border-[#D4AF37] outline-none font-bold" />
              
              <select className="p-4 border-2 border-slate-100 focus:border-[#D4AF37] outline-none font-bold md:col-span-2">
                <option>Select Type of Inspection/Service</option>
                <option>Vessel Inspections</option>
                <option>Internal Audits</option>
                <option>Onboard Training</option>
                <option>Core Audits as per TMSA</option>
                <option>Sire 2.0 / Rightship Preparation</option>
                <option>Incident / Accident Investigation</option>
              </select>
              
              <textarea placeholder="Specific Vessel Location & Project Details" className="p-4 border-2 border-slate-100 focus:border-[#D4AF37] outline-none font-bold md:col-span-2 h-32"></textarea>
              
              <button className="md:col-span-2 bg-[#D4AF37] text-[#0D1B2A] font-black py-5 uppercase tracking-[0.3em] hover:bg-[#0D1B2A] hover:text-white transition-all shadow-lg">
                Dispatch Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER - Professional & Direct */}
      <footer id="contact" className="bg-[#0D1B2A] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h4 className="text-2xl font-black tracking-tighter">MARINE AUDIT GLOBAL</h4>
            <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mt-2">Global Technical Authority</p>
          </div>
          <div className="flex flex-col gap-2 font-bold text-sm">
            <p>📧 info@marineauditglobal.com</p>
            <p>📞 +91 98765 43210</p>
            <p>🌐 www.marineauditglobal.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-[10px] text-white/40 uppercase tracking-widest">
          © 2026 Marine Audit Global (MAG). All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="p-8 border-2 border-slate-50 hover:border-[#D4AF37] transition-all bg-slate-50/50 group">
      <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
      <h3 className="text-lg font-black text-[#0D1B2A] uppercase mb-4 tracking-tighter">{title}</h3>
      <p className="text-sm text-slate-600 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}
}
