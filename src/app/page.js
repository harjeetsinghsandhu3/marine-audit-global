export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white">
        <div className="text-2xl font-bold tracking-tight text-[#002147]">
          MARINE<span className="text-[#C5A021]">AUDIT</span>GLOBAL
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-[#002147]">Home</a>
          <a href="#" className="hover:text-[#002147]">About Us</a>
          <a href="#" className="hover:text-[#002147]">Services</a>
          <a href="#" className="hover:text-[#002147]">Experience</a>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section - The "1" Authority Energy */}
        <section className="px-8 py-24 text-center bg-[#002147] text-white">
          <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight">
            Global Standards. Trusted Assurance.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
            International Marine Audit & Inspection Authority. 
            Precision audits providing worldwide confidence across every ocean.
          </p>
          <div className="mt-10">
            <a href="mailto:info@marineauditglobal.com" className="px-8 py-4 bg-[#C5A021] text-white font-bold rounded-sm hover:bg-[#b08e1d] transition-all">
              GET A CONSULTATION
            </a>
          </div>
        </section>

        {/* Services Section - The "6" Trust Energy */}
        <section className="max-w-6xl px-8 py-20 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#002147]">Our Specialized Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 border-t-4 border-[#C5A021] bg-slate-50 rounded-b-lg shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#002147]">Ship Inspections</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Comprehensive technical assessments and condition surveys ensuring vessel integrity and operational readiness.
              </p>
            </div>
            <div className="p-8 border-t-4 border-[#C5A021] bg-slate-50 rounded-b-lg shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#002147]">Marine Audits</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                In-depth safety and operational audits designed to meet rigorous international maritime benchmarks.
              </p>
            </div>
            <div className="p-8 border-t-4 border-[#C5A021] bg-slate-50 rounded-b-lg shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#002147]">Compliance & Certification</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Expert guidance through global regulatory frameworks to keep your fleet fully certified and compliant.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Strip - The "3" Growth Energy */}
        <section className="py-16 bg-slate-100 border-y border-slate-200">
          <div className="max-w-4xl px-8 mx-auto text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#002147]">Integrity in Every Inspection.</h2>
            <p className="mb-8 text-slate-600">Connect with our global team for reliable maritime solutions.</p>
            <div className="flex justify-center font-medium">
              <a href="mailto:info@marineauditglobal.com" className="text-[#002147] hover:underline text-xl">
                info@marineauditglobal.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-8 py-10 text-sm text-center text-slate-500 bg-white">
        <p>© {new Date().getFullYear()} Marine Audit Global. Professional • Global • Precise.</p>
      </footer>
    </div>
  );
}
