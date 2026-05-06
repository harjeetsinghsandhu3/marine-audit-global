export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#0D1B2A]">
      {/* HEADER NAVIGATION */}
      <header className="bg-white border-b border-gray-100">
        <nav className="flex items-center justify-between max-w-7xl px-6 py-4 mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0D1B2A] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-xl">⚓</div>
            <div className="leading-tight font-bold text-lg uppercase tracking-tighter">
              MARINE <span className="text-[#D4AF37]">AUDIT</span> GLOBAL
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-600">
            <a href="#" className="text-[#D4AF37]">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services ▾</a>
            <a href="#">Experience</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION WITH INTEGRATED SIDEBAR */}
        <section className="bg-[#0D1B2A] text-white overflow-hidden border-b-4 border-[#D4AF37]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
            {/* Left Main Hero */}
            <div className="lg:w-3/4 p-8 lg:p-16 relative">
              <div className="relative z-10">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  GLOBAL STANDARDS.<br />
                  <span className="text-[#D4AF37]">TRUSTED ASSURANCE.</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 max-w-xl font-medium">
                  Independent Marine Audits, Inspections & Compliance Services you can rely on – anywhere in the world.
                </p>

                {/* Hero Icons */}
                <div className="grid grid-cols-4 gap-4 mb-10 max-w-2xl">
                  <HeroIcon label="INDEPENDENT & IMPARTIAL" icon="⚖️" />
                  <HeroIcon label="GLOBAL EXPERTISE" icon="🛡️" />
                  <HeroIcon label="ACCURATE REPORTING" icon="📋" />
                  <HeroIcon label="TRUSTED BY LEADERS" icon="🤝" />
                </div>

                <div className="flex gap-4">
                  <button className="bg-[#D4AF37] text-white px-8 py-3 font-bold text-xs uppercase tracking-widest">Our Services</button>
                  <button className="border border-white text-white px-8 py-3 font-bold text-xs uppercase tracking-widest">About Us</button>
                </div>
              </div>
              
              {/* Ship Image background effect */}
              <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-40 lg:opacity-100">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000" 
                  alt="Marine Vessel" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </div>

            {/* Right Sidebar Services */}
            <div className="lg:w-1/4 bg-[#08131F] p-8 border-l border-white/10">
              <h2 className="text-[#D4AF37] text-lg font-bold mb-8 uppercase tracking-widest">Our Services</h2>
              <div className="space-y-6">
                <SidebarItem title="Ship Inspections" desc="Pre-purchase, condition, class, flag state & statutory inspections." />
                <SidebarItem title="Marine Audits" desc="ISM, ISPS, MLC, Internal Audits & Vetting Audits." />
                <SidebarItem title="Compliance & Certification" desc="Regulatory compliance and certification support." />
                <SidebarItem title="Due Diligence" desc="Technical due diligence for vessels and marine assets." />
                <SidebarItem title="Consulting Services" desc="Operational improvement and safety management." />
              </div>
              <button className="w-full mt-8 bg-[#D4AF37] py-3 text-[#0D1B2A] font-bold text-[10px] uppercase tracking-widest">View All Services</button>
            </div>
          </div>
        </section>

        {/* BOTTOM CONTENT GRID */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">About Marine Audit Global</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              We are a global provider of independent marine audit, inspection and compliance services. Our mission is to help ship owners and managers maintain the highest standards of safety.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" alt="Global Coverage" className="opacity-20 mt-4" />
            <p className="text-[10px] font-bold text-center mt-2 uppercase text-slate-400">Serving Clients Worldwide</p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">Why Choose Us</h3>
            <ul className="space-y-3">
              <CheckItem text="Experienced & Qualified Surveyors" />
              <CheckItem text="Independent & Unbiased Reports" />
              <CheckItem text="Worldwide Coverage" />
              <CheckItem text="Fast Turnaround & Reliable Service" />
              <CheckItem text="Confidentiality & Integrity" />
            </ul>
            <div className="mt-8 relative h-32 overflow-hidden rounded">
               <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=400" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-[#0D1B2A]/60 flex items-center justify-center p-4">
                  <span className="text-white text-[10px] font-bold uppercase text-center tracking-tighter">Marine Audit Global Team</span>
               </div>
            </div>
          </div>

          {/* Our Commitment & Stats */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm uppercase mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">Our Commitment</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-8 italic">
              We are committed to delivering accurate, actionable and reliable audit & inspection services that help our clients operate safely.
            </p>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <StatItem val="1000+" label="INSPECTIONS COMPLETED" />
              <StatItem val="500+" label="SATISFIED CLIENTS" />
              <StatItem val="25+" label="COUNTRIES SERVED" />
              <StatItem val="15+" label="YEARS OF EXPERIENCE" />
            </div>
          </div>

          {/* Numerology Guide Sidebar - Styled like the image */}
          <div className="bg-slate-50 p-6 border border-slate-200">
            <h3 className="font-bold text-xs text-center uppercase mb-1 tracking-tighter text-[#0D1B2A]">NUMEROLOGY & LUCKY GUIDE</h3>
            <p className="text-[9px] text-center text-slate-400 mb-6">(For Harjeet Singh Sandhu)</p>
            <div className="space-y-4 text-[10px]">
              <LuckyItem icon="📅" label="Best Numbers" val="3, 6, 15, 24" />
              <LuckyItem icon="⭐" label="Lucky Days" val="Friday (Best), Thursday" />
              <LuckyItem icon="🎨" label="Lucky Colors" val="White, Light Blue, Cream, Gold" />
              <LuckyItem icon="🌙" label="Lucky Dates" val="3, 6, 15, 24" />
            </div>
            <div className="mt-8 bg-[#0D1B2A] text-white p-4 text-center rounded">
               <p className="text-[10px] italic leading-tight">"Aligned Numbers. Clear Vision. Global Success."</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER BAR */}
      <footer className="bg-[#0D1B2A] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest gap-4">
          <div className="flex gap-4 items-center">
            <span>📍 MarineAuditGlobal.com</span>
            <span className="text-white/20">|</span>
            <span>📞 +91 98765 43210</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>✉️ info@marineauditglobal.com</span>
            <span className="text-white/20">|</span>
            <span>🌐 www.marineauditglobal.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Components
function HeroIcon({ label, icon }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-lg mb-2">{icon}</div>
      <div className="text-[8px] font-bold leading-tight px-1 uppercase">{label}</div>
    </div>
  );
}

function SidebarItem({ title, desc }) {
  return (
    <div className="flex gap-3">
      <div className="w-6 h-6 rounded-full border border-[#D4AF37] flex items-center justify-center text-[10px] text-[#D4AF37] shrink-0">✓</div>
      <div>
        <h4 className="text-[11px] font-bold mb-1">{title}</h4>
        <p className="text-[9px] text-slate-400 leading-tight">{desc}</p>
      </div>
    </div>
  );
}

function CheckItem({ text }) {
  return (
    <li className="flex gap-2 items-center text-[11px] font-medium text-slate-700">
      <span className="text-[#D4AF37]">✔</span> {text}
    </li>
  );
}

function StatItem({ val, label }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-8 h-8 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] rounded">📊</div>
      <div>
        <div className="text-sm font-bold">{val}</div>
        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter leading-none">{label}</div>
      </div>
    </div>
  );
}

function LuckyItem({ icon, label, val }) {
  return (
    <div className="flex items-start gap-2">
      <span className="grayscale">{icon}</span>
      <div>
        <span className="font-bold text-slate-400 block uppercase text-[8px] tracking-tight">{label}:</span>
        <span className="text-[#0D1B2A] font-bold">{val}</span>
      </div>
    </div>
  );
}
