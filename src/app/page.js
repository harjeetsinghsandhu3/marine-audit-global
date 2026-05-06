export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#0D1B2A]">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="flex items-center justify-between max-w-7xl px-6 py-4 mx-auto">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#0D1B2A]">
            <span className="text-[#D4AF37]">⚓</span> MARINE AUDIT GLOBAL
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            <a href="#" className="text-[#D4AF37]">Home</a>
            <a href="#about" className="hover:text-[#D4AF37]">About Us</a>
            <a href="#services" className="hover:text-[#D4AF37]">Services</a>
            <a href="#contact" className="hover:text-[#D4AF37]">Contact</a>
          </div>

          <button className="px-6 py-2.5 bg-[#D4AF37] text-white font-bold rounded-sm hover:bg-[#b8962e] transition-all text-sm uppercase">
            Get a Quote
          </button>
        </nav>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative bg-[#0D1B2A] text-white">
          <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <h1 className="mb-6 text-5xl lg:text-7xl font-bold leading-tight">
                GLOBAL STANDARDS.<br />
                <span className="text-[#D4AF37]">TRUSTED ASSURANCE.</span>
              </h1>
              <p className="mb-10 text-xl text-gray-300 max-w-xl">
                Independent Marine Audits, Inspections & Compliance Services Across the Globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-bold">
                <a href="#services" className="px-8 py-4 bg-[#D4AF37] text-white rounded-sm hover:translate-y-[-2px] transition-all text-center">
                  OUR SERVICES
                </a>
                <a href="#about" className="px-8 py-4 border-2 border-white text-white rounded-sm hover:bg-white hover:text-[#0D1B2A] transition-all text-center">
                  ABOUT US
                </a>
              </div>
            </div>
            {/* Image Placeholder using a professional marine photo */}
            <div className="flex-1 w-full lg:w-auto">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000" 
                alt="Ship" 
                className="rounded-lg shadow-2xl border-4 border-[#D4AF37]/20"
              />
            </div>
          </div>
        </section>

        {/* 3. STATS SECTION */}
        <section className="bg-gray-100 py-16 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A]">50+</div>
              <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mt-2">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A]">15+</div>
              <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mt-2">Years Exp.</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A]">5000+</div>
              <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mt-2">Audits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A]">98%</div>
              <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mt-2">Satisfaction</div>
            </div>
          </div>
        </section>

        {/* 4. ABOUT SECTION */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#D4AF37] font-bold mb-4 uppercase tracking-widest text-sm">About Marine Audit Global</h2>
            <h3 className="text-3xl font-bold mb-6 leading-snug">Reliable independence for the global maritime industry.</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are an international provider of independent marine audit and inspection services. We help clients ensure compliance, manage risk, and improve operational performance through professional audits worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-sm">
              <div className="flex items-center gap-2">✅ Independent & Unbiased</div>
              <div className="flex items-center gap-2">✅ Global Expertise</div>
              <div className="flex items-center gap-2">✅ Integrity & Confidentiality</div>
              <div className="flex items-center gap-2">✅ Fast Reporting</div>
            </div>
          </div>
          <div className="bg-[#0D1B2A] p-12 rounded-2xl text-white">
            <h4 className="text-[#D4AF37] font-bold mb-4 uppercase text-xs tracking-tighter">Our Commitment</h4>
            <p className="text-2xl italic leading-relaxed">
              "We deliver accurate, actionable, and reliable services that help our clients operate safely, efficiently, and in full compliance with global standards."
            </p>
          </div>
        </section>

        {/* 5. SERVICES SECTION */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Specialized Services</h2>
            <p className="text-gray-600">Expertise across all maritime sectors</p>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Ship Inspections" desc="Pre-purchase, condition, class, and statutory inspections for all vessel types." />
            <ServiceCard title="Marine Audits" desc="ISM, ISPS, MLC, Internal Audits & Vetting Audits for global fleets." />
            <ServiceCard title="Compliance & Certification" desc="Regulatory guidance and certification support to meet international maritime laws." />
            <ServiceCard title="Due Diligence" desc="Technical assessments for vessel and marine asset acquisitions." />
            <ServiceCard title="Consulting" desc="Operational improvement, safety management, and training programs." />
            <ServiceCard title="Trusted Reporting" desc="Detailed, unbiased reports that you can rely on for critical decision making." />
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 italic">Integrity in Every Inspection.</h2>
            <p className="text-xl text-gray-600 mb-12">Connect with our global team for a professional consultation.</p>
            <div className="bg-[#0D1B2A] p-10 rounded-xl text-white flex flex-col md:flex-row justify-around items-center gap-8 shadow-2xl">
              <div>
                <div className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-2">Primary Contact</div>
                <a href="mailto:info@marineauditglobal.com" className="text-2xl font-bold hover:underline transition-all">info@marineauditglobal.com</a>
              </div>
              <div className="h-px w-full md:w-px md:h-12 bg-gray-700"></div>
              <div>
                <div className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-2">Location</div>
                <div className="text-xl font-bold uppercase tracking-tight">Serving Worldwide</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D1B2A] text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-bold text-lg mb-4">MARINE AUDIT GLOBAL</div>
          <p className="text-gray-400 text-sm mb-8">Global Standards. Trusted Assurance.</p>
          <div className="text-gray-500 text-xs uppercase tracking-widest">
            &copy; 2026 Marine Audit Global. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for services
function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white p-8 rounded-lg border-b-4 border-[#D4AF37] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-4 text-[#0D1B2A]">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
