import React from 'react';
import { 
  Anchor, ShieldCheck, Globe, FileText, 
  Users, BarChart, CheckCircle, Mail, 
  Phone, MapPin, Menu, ChevronDown 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#0D1B2A]">
      
      {/* 1. HEADER (Top Navigation) */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="flex items-center justify-between max-w-7xl px-6 py-4 mx-auto">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#0D1B2A]">
            <Anchor className="text-[#D4AF37]" size={28} />
            MARINE AUDIT GLOBAL
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            <a href="#" className="text-[#D4AF37]">Home</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#D4AF37]">
              Services <ChevronDown size={14} />
            </div>
            <a href="#industries" className="hover:text-[#D4AF37]">Industries</a>
            <a href="#contact" className="hover:text-[#D4AF37]">Contact</a>
          </div>

          <button className="hidden sm:block px-6 py-2.5 bg-[#D4AF37] text-white font-bold rounded-sm hover:bg-[#b8962e] transition-all text-sm uppercase">
            Get a Quote
          </button>
          
          <Menu className="lg:hidden" />
        </nav>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative bg-[#0D1B2A] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <h1 className="mb-6 text-5xl lg:text-7xl font-bold text-white leading-tight">
                GLOBAL STANDARDS.<br />
                <span className="text-[#D4AF37]">TRUSTED ASSURANCE.</span>
              </h1>
              <p className="mb-10 text-xl text-gray-300 max-w-xl">
                Independent Marine Audits, Inspections & Compliance Services Across the Globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-[#D4AF37] text-white font-bold rounded-sm hover:translate-y-[-2px] transition-all">
                  OUR SERVICES
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-[#0D1B2A] transition-all">
                  ABOUT US
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-lg overflow-hidden border-4 border-[#D4AF37]/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800" 
                  alt="Marine Inspection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES ICON SECTION */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Anchor, text: "Ship Inspections" },
              { icon: FileText, text: "Marine Audits" },
              { icon: ShieldCheck, text: "Compliance" },
              { icon: Globe, text: "Due Diligence" },
              { icon: Users, text: "Consulting" },
              { icon: CheckCircle, text: "Trusted Reports" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm text-[#D4AF37]">
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4 & 5. ABOUT & WHY CHOOSE US */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[#D4AF37] font-bold mb-4 uppercase tracking-widest text-sm">About Marine Audit Global</h2>
            <p className="text-3xl font-bold mb-6 leading-snug">
              We are an international provider of independent marine audit and inspection services.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We help clients ensure compliance, manage risk, and improve operational performance through professional audits and inspections worldwide.
            </p>
            <button className="px-6 py-3 border-2 border-[#0D1B2A] font-bold hover:bg-[#0D1B2A] hover:text-white transition-all uppercase text-sm">
              Learn More
            </button>
          </div>
          <div className="bg-[#0D1B2A] p-10 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-8">Why Choose Us</h3>
            <div className="space-y-4">
              {[
                "Independent & Unbiased",
                "Global Expertise",
                "Integrity & Confidentiality",
                "Fast & Accurate Reporting",
                "Experienced Professionals"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle className="text-[#D4AF37]" size={20} />
                  <span className="font-medium text-gray-200">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. STATS SECTION */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Countries Served", value: "50+" },
              { label: "Years Experience", value: "15+" },
              { label: "Audits Completed", value: "5000+" },
              { label: "Satisfaction Rate", value: "98%" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#0D1B2A] mb-2">{stat.value}</div>
                <div className="text-[#D4AF37] font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. DETAILED SERVICES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 sticky top-32">
                <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                <div className="space-y-1">
                  {[
                    "Ship Inspections",
                    "Marine Audits (ISM, ISPS, MLC)",
                    "Compliance & Certification",
                    "Due Diligence",
                    "Consulting Services"
                  ].map((s, i) => (
                    <div key={i} className="py-4 border-b border-gray-100 font-bold flex justify-between items-center group cursor-pointer hover:text-[#D4AF37]">
                      {s} <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-[#D4AF37]" size={16} />
                    </div>
                  ))}
                </div>
                <button className="mt-8 text-[#D4AF37] font-bold flex items-center gap-2 hover:underline">
                  VIEW ALL SERVICES
                </button>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800" alt="Ship" className="w-full h-full object-cover" />
                </div>
                <div className="bg-[#0D1B2A] text-white p-8 rounded-lg flex flex-col justify-center">
                  <h4 className="text-[#D4AF37] font-bold mb-2 uppercase tracking-tighter">Commitment</h4>
                  <p className="text-xl leading-relaxed italic text-gray-300">
                    "We deliver accurate, actionable, and reliable audit services that help clients operate safely and in full compliance with global standards."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CONTACT SECTION */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm"><Mail size={20} /></div>
                  <div className="font-bold">info@marineauditglobal.com</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm"><Phone size={20} /></div>
                  <div className="font-bold">+91 98765 43210</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm"><MapPin size={20} /></div>
                  <div className="font-bold text-gray-500 uppercase tracking-widest text-xs">Serving Clients Worldwide</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl border border-gray-100">
              <form className="space-y-4">
                <input className="w-full p-4 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#D4AF37]" placeholder="Name" />
                <input className="w-full p-4 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#D4AF37]" placeholder="Email" />
                <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded h-32 outline-none focus:border-[#D4AF37]" placeholder="Message"></textarea>
                <button className="w-full p-4 bg-[#0D1B2A] text-white font-bold rounded hover:bg-[#1a2e42] transition-colors">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <footer className="bg-[#0D1B2A] text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-xl font-bold mb-4 tracking-tighter">
              <Anchor className="text-[#D4AF37]" size={24} />
              MARINE AUDIT GLOBAL
            </div>
            <p className="text-gray-400 text-sm italic">Global Standards. Trusted Assurance.</p>
          </div>
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-white uppercase text-xs tracking-widest mb-2">Links</span>
              <a href="#" className="text-gray-400 hover:text-white">Home</a>
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-gray-400 hover:text-white">Services</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-bold text-white uppercase text-xs tracking-widest mb-2">Legal</span>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            </div>
          </div>
          <div>
            <span className="font-bold text-white uppercase text-xs tracking-widest mb-4 block">Connect</span>
            <div className="w-10 h-10 bg-[#D4AF37] rounded flex items-center justify-center font-bold text-lg hover:translate-y-[-2px] transition-all cursor-pointer">in</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-medium">
          &copy; 2026 MARINE AUDIT GLOBAL. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
}
