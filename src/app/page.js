"use client";

import React from "react";

export default function Home() {
  const services = [
    {
      title: "Vessel Inspections",
      text: "Comprehensive onboard inspections and technical assessments worldwide.",
    },
    {
      title: "SIRE 2.0 Preparation",
      text: "Advanced tanker inspection readiness and compliance consultancy.",
    },
    {
      title: "TMSA Audits",
      text: "Gap analysis, safety management evaluation and optimization.",
    },
    {
      title: "Dry Dock Supervision",
      text: "Technical monitoring and repair supervision during dock operations.",
    },
    {
      title: "Marine Consultancy",
      text: "Operational excellence and maritime consultancy worldwide.",
    },
    {
      title: "24/7 Emergency Response",
      text: "Rapid deployment for urgent inspections and investigations.",
    },
  ];

  return (
    <div className="bg-[#071120] text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#081120] border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#D4AF37] text-black font-black px-3 py-1 rounded-md">
              MAG
            </div>
            <h1 className="font-black uppercase tracking-widest text-sm lg:text-lg">
              Marine Audit Global
            </h1>
          </div>

          <button className="bg-[#D4AF37] text-black px-5 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-yellow-300 transition">
            Request Inspection
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-5">
              Global Marine Inspection Specialists
            </p>

            <h1 className="text-5xl lg:text-8xl font-black uppercase leading-none mb-8">
              Technical
              <span className="text-[#D4AF37] block">Integrity</span>
              Worldwide.
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
              Marine Audit Global delivers elite vessel inspections,
              compliance audits and technical consultancy services across
              international maritime operations.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-yellow-300 transition">
                Request Audit
              </button>

              <button className="border border-slate-700 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition">
                Client Portal
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#10243F] rounded-3xl p-8 border border-slate-800">
              <h3 className="text-5xl font-black text-[#D4AF37] mb-3">
                500+
              </h3>
              <p className="uppercase text-xs tracking-widest text-slate-400 font-bold">
                Global Audits
              </p>
            </div>

            <div className="bg-[#10243F] rounded-3xl p-8 border border-slate-800">
              <h3 className="text-5xl font-black text-[#D4AF37] mb-3">
                32
              </h3>
              <p className="uppercase text-xs tracking-widest text-slate-400 font-bold">
                Countries Covered
              </p>
            </div>

            <div className="bg-[#10243F] rounded-3xl p-8 border border-slate-800">
              <h3 className="text-5xl font-black text-[#D4AF37] mb-3">
                24/7
              </h3>
              <p className="uppercase text-xs tracking-widest text-slate-400 font-bold">
                Emergency Response
              </p>
            </div>

            <div className="bg-[#10243F] rounded-3xl p-8 border border-slate-800">
              <h3 className="text-5xl font-black text-[#D4AF37] mb-3">
                18+
              </h3>
              <p className="uppercase text-xs tracking-widest text-slate-400 font-bold">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 lg:px-10 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-5">
            Specialized Marine Services
          </p>

          <h2 className="text-4xl lg:text-7xl font-black uppercase leading-tight mb-8">
            Elite Maritime
            <span className="text-[#D4AF37]"> Solutions</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#10243F] border border-slate-800 rounded-3xl p-8 hover:border-[#D4AF37] transition"
            >
              <h3 className="text-2xl font-black mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 lg:px-10 bg-[#081120]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop"
              alt="Marine"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-5">
              About Marine Audit Global
            </p>

            <h2 className="text-4xl lg:text-7xl font-black uppercase leading-tight mb-8">
              Built On
              <span className="text-[#D4AF37] block">Maritime Excellence</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Marine Audit Global provides international marine inspection,
              operational auditing and technical consultancy services focused on
              operational integrity, safety compliance and risk mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-28 px-6 lg:px-10 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto bg-[#10243F] border border-slate-800 rounded-3xl p-10 lg:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Request Technical Support
            </p>

            <h2 className="text-4xl lg:text-6xl font-black uppercase leading-tight">
              Deploy Marine Expertise
            </h2>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Official Email"
              className="bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Inspection scope and operational requirements"
              className="md:col-span-2 bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none"
            ></textarea>

            <button className="md:col-span-2 bg-[#D4AF37] text-black py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-yellow-300 transition">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-slate-800 py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black uppercase tracking-widest mb-4">
            Marine Audit Global
          </h3>

          <p className="text-slate-500 text-sm">
            Global marine inspection and consultancy services.
          </p>

          <div className="mt-8 text-slate-600 text-sm">
            © 2026 Marine Audit Global. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}