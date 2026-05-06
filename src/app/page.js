import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] font-sans text-slate-900 scroll-smooth">
      
      {/* NAVIGATION */}
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
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[80vh] flex items-center pt-10 pb-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Global Excellence</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-[#1E3A8A] leading-[1.1] mb-8 tracking-tighter">
                TRUSTED <br />
                <span className="text-slate-300">MARITIME.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-md font-medium">
                Premier independent audits by experts in <span className="text-[#1E3A8A] font-bold">MAG Branded Boiler Suits</span>. Delivering safety and compliance to the global fleet.
              </p>
              <a href="#services" className="bg-[#1E3A8A] text-white px-10 py-4 font-bold text-[11px] uppercase tracking-widest hover:bg-[#D4AF37] transition-all rounded-sm shadow-lg">
                View Services
              </a>
            </div>

            {/* SHIP PHOTO SECTION */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Marine Audit Global Ship" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-xl border border-slate-100 hidden md:block">
                <p className="text-[#D4AF37] font-black text-2xl">24/7</p>
                <p className="text-[10px] font-bold uppercase text-slate-400">Global Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <h2 className="text-center text-3xl font-black text-[#1E3A8A] mb-16 uppercase tracking-tight">Technical Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <HighlightBox title="Vessel Inspections" icon="🚢" />
              <HighlightBox title="Safety Audits" icon="🛡️" />
              <HighlightBox title="Sire 2.0 / Rightship" icon="📋" />
              <HighlightBox title="Incident Investigation" icon="🔍" />
            </div>
          </div>
        </section>

        {/* EXPANDED AUDIT REQUEST FORM */}
        <section id="audit-form" className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#1E3A8A] tracking-tighter uppercase">Request Audit</h2>
              <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-4"></div>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 p-10 lg:p-16 bg-[#FDFDFD] rounded-[40px] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
              {/* Personal Details */}
              <FormInput label="Full Name" type="text" placeholder="John Doe" />
              <FormInput label="Company Email" type="email" placeholder="john@company.com" />
              <FormInput label="Phone / Mobile Number" type="tel" placeholder="+1 234 567 890" />
              <FormInput label="Type of Vessel" type="text" placeholder="e.g. Oil Tanker, Bulk Carrier" />

              {/* Selection Dropdown */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Type of Inspection / Service</label>
                <select className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#D4AF37] bg-white transition-all text-sm font-medium">
                  <option>Select a Service...</option>
                  <option>Vessel Inspections (Pre-Purchase/Condition)</option>
                  <option>Internal Audits (ISM / ISPS / MLC)</option>
                  <option>Onboard Training</option>
                  <option>Core Audits as per TMSA</option>
                  <option>Sire 2.0 / Rightship Preparation</option>
                  <option>Incident / Accident Investigation</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Additional Details</label>
                <textarea className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#D4AF37] bg-white transition-all h-32 text-sm" placeholder="Please specify vessel location and preferred dates..."></textarea>
              </div>

              <button className="md:col-span-2 w-full bg-[#1E3A8A] text-white font-black py-5 rounded-xl uppercase tracking-[0.3em] text-xs hover:bg-[#D4AF37] transition-all shadow-xl mt-4">
                Submit Formal Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="py-20 bg-white border-t border-slate-100 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="text-[#1E3A8A] font-black text-xl mb-1">MARINE AUDIT GLOBAL</p>
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold">Independent Excellence</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <a href="mailto:info@marineauditglobal.com" className="text-sm font-bold text-slate-600 hover:text-[#D4AF37]">info@marineauditglobal.com</a>
            <div className="h-4 w-[1px] bg-slate-200 hidden md:block"></div>
            <p className="text-sm font-bold text-slate-600">+91 98765 43210</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components
function HighlightBox({ title, icon }) {
  return (
    <div className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-500 cursor-pointer text-center">
      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-[11px] font-black text-[#1E3A8A] uppercase tracking-widest">{title}</h3>
    </div>
  );
}

function FormInput({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-[#D4AF37] bg-white transition-all text-sm font-medium" 
      />
    </div>
  );
}
