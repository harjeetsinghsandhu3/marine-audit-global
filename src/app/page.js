export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] font-sans text-white">
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/5 bg-[#020617]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-[#D4AF37] text-[#020617] px-2 py-1 rounded font-black text-xl tracking-tighter">MAG</div>
          <div className="font-bold text-xl tracking-widest uppercase">
            Marine <span className="text-[#D4AF37]">Audit</span> Global
          </div>
        </div>
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Services</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Expertise</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
        <button className="bg-[#D4AF37] hover:bg-[#b8962e] text-black px-6 py-2 font-bold text-[10px] uppercase tracking-widest transition-all">
          Request Audit
        </button>
      </nav>

      <main>
        {/* HERO SECTION - FEATURED IMAGE AREA */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* BACKGROUND IMAGE - Replace the URL below with your actual photo of the surveyor in the MAG boiler suit */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2000" 
              alt="Marine Audit Global Surveyor" 
              className="w-full h-full object-cover opacity-60 grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold">Global Maritime Authority</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
                PRECISION <br />
                <span className="text-[#D4AF37]">INTEGRITY.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                Independent marine audits and technical inspections delivered by elite surveyors. 
                Wherever your fleet sails, <span className="font-bold text-white uppercase">MAG</span> ensures total compliance.
              </p>
              <div className="flex gap-6">
                <button className="bg-white text-black px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all">
                  View Our Services
                </button>
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-l border-white/20 pl-6">
                  <span className="text-[#D4AF37]">Expertise in</span> 
                  <span>50+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-32 bg-white text-[#020617]">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-5xl font-bold tracking-tighter mb-6">What We <br/> Deliver.</h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  From pre-purchase condition surveys to complex ISM/ISPS audits, our reports are the industry gold standard for accuracy and technical depth.
                </p>
                <div className="p-8 bg-[#f8fafc] border-l-4 border-[#D4AF37]">
                  <p className="italic font-medium text-lg text-gray-700">
                    "MAG provides the clarity needed to make high-stakes maritime decisions."
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
                <ServiceBlock title="Vessel Inspections" icon="🚢" />
                <ServiceBlock title="Safety Audits" icon="🛡️" />
                <ServiceBlock title="Compliance & Vetting" icon="⚖️" />
                <ServiceBlock title="Technical Due Diligence" icon="🔍" />
              </div>
            </div>
          </div>
        </section>

        {/* NUMEROLOGY & TRUST SECTION */}
        <section className="py-24 bg-[#020617] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-4 gap-12 items-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">15+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">5000+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Audits Completed</div>
            </div>
            <div className="lg:col-span-2 bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-10 rounded-r-full border-l-2 border-[#D4AF37]">
               <h3 className="text-xl font-bold mb-2">Aligned with Excellence</h3>
               <p className="text-gray-400 text-sm italic">"Driven by Aligned Numbers (3, 6, 1) & Clear Vision. Global Success in Every Inspection."</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#020617] pt-20 pb-10 px-10">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-bold tracking-[0.3em] uppercase">Marine Audit Global <span className="text-[#D4AF37]">MAG</span></div>
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            info@marineauditglobal.com — Serving Worldwide
          </div>
          <div className="text-[10px] text-gray-600 uppercase tracking-widest">
            © 2026 MAG. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceBlock({ title, icon }) {
  return (
    <div className="group p-10 border border-gray-100 hover:border-[#D4AF37] transition-all cursor-pointer">
      <div className="text-4xl mb-6">{icon}</div>
      <h4 className="text-xl font-bold mb-4 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        Professional, unbiased technical assessments conducted by MAG certified surveyors.
      </p>
    </div>
  );
}
