import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] font-sans text-[#0F172A] scroll-smooth">
      {/* NAVIGATION - Smooth Scroll Enabled */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-5 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-[#1E40AF] text-white px-2 py-1 rounded font-black text-xl">MAG</div>
          <div className="font-bold text-lg tracking-tight uppercase text-[#1E40AF]">
            Marine <span className="text-[#C5A021]">Audit</span> Global
          </div>
        </div>
        <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#home" className="hover:text-[#1E40AF] transition-all">Home</a>
          <a href="#services" className="hover:text-[#1E40AF] transition-all">Services</a>
          <a href="#about" className="hover:text-[#1E40AF] transition-all">About</a>
          <a href="#contact" className="hover:text-[#1E40AF] transition-all">Contact</a>
        </div>
        <a href="#request-audit" className="bg-[#C5A021] hover:bg-[#A6861C] text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider transition-all shadow-md">
          Request Audit
        </a>
      </nav>

      <main>
        {/* HERO SECTION - Bright & Professional */}
        <section id="home" className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-white to-[#F1F5F9] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-[#1E40AF] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Maritime Excellence Worldwide
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tight text-[#1E40AF]">
                GLOBAL <br />
                <span className="text-[#C5A021]">STANDARDS.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Independent marine audits delivered by elite surveyors in MAG branded gear. Professionalism, integrity, and safety across every ocean.
              </p>
              <div className="flex gap-4">
                <a href="#services" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#1e3a8a] shadow-lg transition-all">
                  Our Expertise
                </a>
              </div>
            </div>
            {/* VIBRANT SHIP IMAGE PLACEHOLDER - Representing MAG Ship */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A021] to-[#1E40AF] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1544443427-013083375836?q=80&w=1200" 
                  alt="MAG Ship" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded font-black text-[#1E40AF]">MAG BRANDED</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Highlighted & Creative Boxes */}
        <section id="services" className="py-24 px-6 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-[#1E40AF] mb-4">Specialized Technical Services</h2>
              <p className="text-slate-500">Elite audit solutions tailored for global maritime operations.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceBox title="Vessel Inspections" icon="🚢" desc="Pre-purchase and condition surveys conducted by MAG experts in full PPE." />
              <ServiceBox title="Safety Audits" icon="🛡️" desc="Rigorous ISM/ISPS safety assessments to ensure total fleet compliance." />
              <ServiceBox title="Compliance & Vetting" icon="⚖️" desc="Advanced vetting support and regulatory certification for global waters." />
              <ServiceBox title="Technical Due Diligence" icon="🔍" desc="Comprehensive asset evaluation for high-stakes maritime investments." />
            </div>
          </div>
        </section>

        {/* REQUEST AUDIT FORM SECTION */}
        <section id="request-audit" className="py-24 px-6 lg:px-16 bg-[#F1F5F9]">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[#1E40AF] p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Request an Audit</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">Fill out the form to schedule an elite MAG inspection. Our team responds within 24 hours.</p>
              <div className="space-y-4 text-sm">
                <p className="flex items-center gap-3">📍 Global Availability</p>
                <p className="flex items-center gap-3">📧 info@marineauditglobal.com</p>
              </div>
            </div>
            <div className="md:w-2/3 p-12">
              <form className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#C5A021] outline-none" required />
                <input type="email" placeholder="Company Email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#C5A021] outline-none" required />
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#C5A021] outline-none sm:col-span-2">
                   <option>Select Audit Type</option>
                   <option>Vessel Inspection</option>
                   <option>Safety Audit</option>
                   <option>Compliance Vetting</option>
                </select>
                <textarea placeholder="Service Details" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#C5A021] outline-none sm:col-span-2 h-32"></textarea>
                <button type="submit" className="sm:col-span-2 w-full py-4 bg-[#C5A021] text-white font-bold rounded-xl hover:bg-[#1E40AF] transition-all shadow-lg">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-10 px-6 text-center">
        <p className="text-sm font-bold text-[#1E40AF] uppercase tracking-widest mb-2">Marine Audit Global (MAG)</p>
        <p className="text-xs text-slate-400">© 2026 MAG. Elite Professionalism Across the Globe.</p>
      </footer>
    </div>
  );
}

// Creative Service Box Component
function ServiceBox({ title, icon, desc }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-2xl hover:border-[#C5A021] transition-all duration-300">
      <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4 text-[#1E40AF] group-hover:text-[#C5A021] transition-colors uppercase tracking-tight">
        {title}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
}
