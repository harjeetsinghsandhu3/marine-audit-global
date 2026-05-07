"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Ship,
  FileSearch,
  Anchor,
  Globe,
  Phone,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Vessel Inspections",
      desc: "Comprehensive onboard inspections and technical condition assessments worldwide.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "SIRE 2.0 Preparation",
      desc: "Advanced tanker inspection readiness programs for global compliance.",
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "TMSA Audits",
      desc: "Gap analysis, risk assessment and safety management optimization.",
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: "Dry Dock Supervision",
      desc: "Technical monitoring and repair supervision during dock operations.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Marine Consultancy",
      desc: "Operational excellence, compliance strategy and maritime consultancy.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Emergency Response",
      desc: "Rapid global deployment for urgent inspections and investigations.",
    },
  ];

  return (
    <div className="bg-[#081120] text-white overflow-hidden">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#081120]/90 backdrop-blur-lg border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#D4AF37] text-[#081120] font-black px-3 py-1 rounded-lg text-xl">
              MAG
            </div>
            <div>
              <h1 className="font-black tracking-widest text-sm lg:text-lg uppercase">
                Marine Audit Global
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex gap-10 text-sm uppercase tracking-widest font-semibold">
            <a href="#home" className="hover:text-[#D4AF37] transition">
              Home
            </a>
            <a href="#services" className="hover:text-[#D4AF37] transition">
              Services
            </a>
            <a href="#about" className="hover:text-[#D4AF37] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#D4AF37] transition">
              Contact
            </a>
          </nav>

          <button className="hidden lg:flex items-center gap-2 bg-[#D4AF37] text-[#081120] px-5 py-3 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">
            Request Inspection
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#0A192F] border-t border-slate-800 px-6 py-6 flex flex-col gap-5 uppercase text-sm tracking-widest font-semibold">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566024287286-4572472b2dc1?q=80&w=1600&auto=format&fit=crop"
            alt="Marine Vessel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#081120]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Global Marine Inspection Specialists
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] uppercase tracking-tight mb-8">
              Technical
              <span className="text-[#D4AF37]"> Integrity</span>
              <br />
              Worldwide.
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
              Marine Audit Global delivers elite vessel inspections,
              compliance audits and technical consultancy services across
              international maritime operations.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-[#D4AF37] hover:bg-white text-[#081120] px-8 py-4 rounded-lg uppercase tracking-widest text-xs font-black transition-all">
                Request Audit
              </button>

              <button className="border border-white/30 hover:border-[#D4AF37] px-8 py-4 rounded-lg uppercase tracking-widest text-xs font-black transition-all">
                Client Portal
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
              <h3 className="text-5xl font-black text-[#D4AF37]">500+</h3>
              <p className="text-sm uppercase tracking-widest mt-3 text-slate-300">
                Global Audits
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl mt-12">
              <h3 className="text-5xl font-black text-[#D4AF37]">32</h3>
              <p className="text-sm uppercase tracking-widest mt-3 text-slate-300">
                Countries Covered
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl -mt-5">
              <h3 className="text-5xl font-black text-[#D4AF37]">24/7</h3>
              <p className="text-sm uppercase tracking-widest mt-3 text-slate-300">
                Emergency Response
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
              <h3 className="text-5xl font-black text-[#D4AF37]">18+</h3>
              <p className="text-sm uppercase tracking-widest mt-3 text-slate-300">
                Years Experience
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 lg:px-10 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Specialized Marine Services
            </p>

            <h2 className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-6">
              Elite Maritime
              <span className="text-[#D4AF37]"> Solutions</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              We provide high-impact marine inspections, audits and consultancy
              services for ship owners, operators and charterers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#10243F] border border-slate-800 hover:border-[#D4AF37] rounded-2xl p-8 transition-all hover:-translate-y-2"
              >
                <div className="text-[#D4AF37] mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D4AF37] transition-all">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 lg:px-10 bg-[#081120]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1400&auto=format&fit=crop"
              alt="Marine Inspection"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-5">
              About Marine Audit Global
            </p>

            <h2 className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-8">
              Built On
              <span className="text-[#D4AF37]"> Maritime Excellence</span>
            </h2>

            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              Marine Audit Global provides international marine inspection and
              technical consultancy services focused on operational integrity,
              safety compliance and risk mitigation.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-4xl font-black text-[#D4AF37]">1200+</h3>
                <p className="text-slate-400 mt-2 uppercase tracking-widest text-xs">
                  Audits Completed
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#D4AF37]">100%</h3>
                <p className="text-slate-400 mt-2 uppercase tracking-widest text-xs">
                  Confidential Reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 lg:px-10 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto bg-[#10243F] border border-slate-800 rounded-3xl p-10 lg:p-16">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Request Technical Support
            </p>

            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6">
              Deploy Marine Expertise
            </h2>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Official Email"
              className="bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
            />

            <input
              type="text"
              placeholder="Vessel Name"
              className="bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
            />

            <input
              type="text"
              placeholder="Port / Location"
              className="bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
            />

            <textarea
              placeholder="Inspection scope and operational requirements"
              className="md:col-span-2 bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37] min-h-[180px]"
            ></textarea>

            <button className="md:col-span-2 bg-[#D4AF37] hover:bg-white text-[#081120] font-black uppercase tracking-[0.2em] py-5 rounded-xl transition-all">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050B14] border-t border-slate-800 py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#D4AF37] text-[#081120] font-black px-3 py-1 rounded-lg text-xl">
                MAG
              </div>
              <h3 className="font-black uppercase tracking-widest">
                Marine Audit Global
              </h3>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">
              Global marine inspection, compliance and technical consultancy
              services.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-5 text-sm text-[#D4AF37]">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Vessel Inspections</li>
              <li>SIRE 2.0</li>
              <li>TMSA Audits</li>
              <li>Marine Consultancy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-5 text-sm text-[#D4AF37]">
              Contact
            </h4>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>operations@marineauditglobal.com</li>
              <li>24/7 Technical Support</li>
              <li>Global Coverage</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-5 text-sm text-[#D4AF37]">
              Client Access
            </h4>

            <button className="bg-[#D4AF37] hover:bg-white text-[#081120] px-6 py-4 rounded-xl uppercase tracking-widest text-xs font-black transition-all">
              Client Portal Login
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-600 text-sm">
          © 2026 Marine Audit Global. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
