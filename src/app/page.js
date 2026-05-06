import React from 'react';



export default function Home() {

  return (

    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 scroll-smooth">

      

      {/* NAVIGATION */}

      <nav className="flex items-center justify-between px-6 lg:px-20 py-5 bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">

        <div className="flex items-center gap-3">

          <div className="bg-[#0D1B2A] text-[#D4AF37] px-2 py-1 rounded font-black text-xl">MAG</div>

          <div className="font-bold text-lg tracking-tight uppercase text-[#0D1B2A]">

            Marine <span className="text-[#D4AF37]">Audit</span> Global

          </div>

        </div>

        

        <div className="hidden lg:flex gap-10 items-center">

          <a href="#home" className="text-sm font-bold uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1 transition-all">Home</a>

          <a href="#services" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Services</a>

          <a href="#contact" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-[#0D1B2A] transition-all">Contact</a>

        </div>



        <a href="#audit-form" className="bg-[#D4AF37] hover:bg-[#C5A021] text-white px-6 py-2.5 rounded-sm font-bold text-[11px] uppercase tracking-widest transition-all shadow-md">

          Request Audit

        </a>

      </nav>



      <main>

        {/* HERO SECTION */}

        <section id="home" className="relative min-h-[70vh] flex items-center pt-16 pb-24 px-6 lg:px-20">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            <div className="z-10">

              <h1 className="text-6xl lg:text-7xl font-black text-[#0D1B2A] leading-[0.9] mb-4 tracking-tighter uppercase">

                Absolute <br />

                <span className="text-[#D4AF37]">Integrity.</span>

              </h1>

              <div className="max-w-lg border-l-4 border-[#0D1B2A] pl-6 py-2 mb-8">

                <p className="text-base text-slate-700 leading-relaxed font-medium">

                  Marine Audit Global (MAG) defines excellence. Our elite surveyors deliver 

                  high-impact technical audits that eliminate risk, fortify safety, and 

                  guarantee total operational compliance for the global fleet.

                </p>

              </div>

              <a href="#audit-form" className="inline-block bg-[#0D1B2A] text-white px-8 py-4 font-bold text-[11px] uppercase tracking-widest hover:bg-[#1E3A8A] transition-all shadow-lg">

                Deploy MAG Expertise

              </a>

            </div>

