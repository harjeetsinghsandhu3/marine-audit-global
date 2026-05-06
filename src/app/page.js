import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] font-sans text-slate-900 scroll-smooth">
      
      {/* NAVIGATION - Smooth Scroll */}
      <nav className="flex items-center justify-between px-8 lg:px-20 py-6 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="bg-[#1E3A8A] text-white px-3 py-1 rounded-md font-black text-2xl tracking-tighter shadow-lg">MAG</div>
          <div className="font-extrabold text-xl tracking-tight uppercase text-[#1E3A8A]">
            Marine <span className="text-[#D4AF37]">Audit</span> Global
          </div>
        </div>
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#home" className="hover:text-[#1E3A8A] transition-all">Home</a>
          <a href="#services" className="hover:text-[#1E3A8A] transition-all">Services</a>
          <a href="#contact" className="hover:text-[#1E3A8A] transition-all">Contact</a>
        </div>
        <a href="#audit-form" className="bg-[#D4AF37] hover:bg-[#B8962E] text-white px-7 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-transform hover:scale-105 shadow-md">
          Request Audit
        </a>
      </nav>

      <main>
        {/* HERO SECTION - Bright & Airy */}
        <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Maritime Authority</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-[#1E3A8A] leading-[0.9] mb-8 tracking-tighter">
                ELITE <br />
                <span className="text-slate-200">INSPECTION.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-md font-medium">
                Professional marine audits delivered by surveyors in high-visibility <span className="text-[#1E3A8A] font-bold">MAG Branded Boiler Suits</span>. Total integrity, global reach.
              </p>
              <a href="#services" className="inline-block border-2 border-[#1E3A8A] text-[#1E3A8A] px-10 py-4 font-bold text-[11px] uppercase tracking-widest hover:bg-[#1E3A8A] hover:text-white transition-all rounded-sm">
                Explore Services
              </a>
            </div>

            {/* THE "MAG" SHIP IMAGE */}
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-all"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544443427-013083375836?q=80&w=1200" 
                  alt="MAG Global Fleet" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-white shadow-xl px-4 py-2 rounded-lg font-black text-[#1E3A8A] border-l-4 border-[#D4AF37]">
                  MAG VESSEL IDENTIFIED
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES - Highlighted Creative Boxes */}
        <section id="services" className="py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <h2 className="text-center text-4xl font-black text-[#1E3A8A] mb-20 uppercase tracking-tighter">Core Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <HighlightBox title="Vessel Inspections" icon="🚢" />
              <HighlightBox title="Safety Audits" icon="🛡️" />
              <HighlightBox title="Compliance & Vetting" icon="⚖️" />
              <HighlightBox title="Technical Due Diligence" icon="🔍" />
            </div>
          </div>
        </section>

        {/* AUDIT REQUEST FORM */}
        <section id="audit-form" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#1E3A8A] tracking-tighter">REQUEST AN AUDIT</h2>
              <p className="text-slate-400 mt-4 uppercase tracking-[0.2em] text-xs font-bold font-mono italic">Global Response within 24 Hours</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Full Name</label>
                <input type="text" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#D4AF37] bg-white transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Email Address</label>
                <input type="email" className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#D4AF37] bg-white transition-all" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Service Type</label>
                <select className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#D4AF37] bg-white transition-all">
                  <option>Vessel Inspection</option>
                  <option>Safety Audit (ISM/ISPS)</option>
                  <option>Pre-Purchase Survey</option>
                </select>
              </div>
              <button className="md:col-span-2 w-full bg-[#1E3A8A] text-white font-black py-5 rounded-xl uppercase tracking-[0.3em] text-xs hover:bg-[#D4AF37] transition-all shadow-xl">
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* CONTACT/FOOTER */}
      <footer id="contact" className="py-20 bg-white border-t border-slate-100 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="text-[#1E3A8A] font-black text-xl mb-1 italic">MAG GLOBAL</p>
            <p className="text-slate-400 text-[10px] uppercase tracking-widest">Independent Maritime Excellence</p>
          </div>
          <div className="flex gap-10">
            <a href="mailto:info@marineauditglobal.com" className="text-sm font-bold text-slate-600 hover:text-[#D4AF37]">info@marineauditglobal.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HighlightBox({ title, icon }) {
  return (
    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#D4AF37] hover:-translate-y-2 transition-all cursor-pointer group">
      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
      <h3 className="text-sm font-bold text-[#1E3A8A] uppercase tracking-tighter mb-4">{title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed font-medium">Professional grade technical auditing and compliance reporting for global maritime assets.</p>
    </div>
  );
}
