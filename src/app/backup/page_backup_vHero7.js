"use client";

import { useState } from "react";

export default function Home() {

  const [showForm, setShowForm] = useState(false);
  return (
    <main className="bg-[#061120] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-[#061120] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="bg-[#D4AF37] text-black font-black px-3 py-1 rounded">
              MAG
            </div>

            <div>
              <h1 className="font-bold tracking-widest text-lg">
                MARINE AUDIT GLOBAL
              </h1>

              <p className="text-[10px] text-slate-400 tracking-[0.2em]">
                GLOBAL STANDARDS. TRUSTED ASSURANCE.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">

  <a href="#home" className="hover:text-[#D4AF37] transition">
    HOME
  </a>

  <a href="#about" className="hover:text-[#D4AF37] transition">
    ABOUT
  </a>

  <a href="#services" className="hover:text-[#D4AF37] transition">
    SERVICES
  </a>

  <a href="#clients" className="hover:text-[#D4AF37] transition">
    CLIENTS
  </a>

  <a href="#contact" className="hover:text-[#D4AF37] transition">
    CONTACT
  </a>

</nav>
          <a href="#request" className="bg-[#D4AF37] text-black px-6 py-3.5 rounded-lg font-bold text-sm hover:bg-yellow-400 transition">
  REQUEST OUR SERVICES
</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
  id="home"
  className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-start"
>
       <div className="self-start">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-6">
            Global Marine Inspection Specialists
          </p>

          <h2 className="text-6xl lg:text-7xl font-black leading-[0.95] uppercase">
            Global Standards.
            <span className="text-[#D4AF37] block">
              Trusted Assurance.
            </span>
          </h2>

          <p className="text-slate-300 mt-8 text-lg leading-9 max-w-2xl">
            Independent marine audits, inspections and compliance
            services across international maritime operations.
          </p>

        </div>

<div className="rounded-3xl">
  <img
    src="/vessel_surveyor_walkietalkie.png"
    alt="Marine Vessel"
    className="rounded-3xl shadow-2xl object-cover object-center h-[690px] w-full"
  />
</div>

      </section>

{/* ABOUT SECTION */}
      <section
  id="about"
  className="pt-8 pb-16 bg-[#061120] border-t border-slate-800"
>
<div className="max-w-7xl mx-auto px-6">

  <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm font-semibold text-center mb-4">
    About Marine Audit Global
  </p>

  <div className="grid lg:grid-cols-2 gap-16 items-center">
    </div>  
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="/surveyor_inspecting_vessel_deck.png"
              alt="Marine Inspection"
              className="rounded-3xl shadow-2xl object-cover object-center h-[620px] w-full"
            />
          </div>

          <div>
            

            <h2 className="text-3xl lg:text-4xl font-black uppercase leading-tight">
  <span className="block">
    EXPERIENCED MARINE
  </span>

  <span className="block text-[#D4AF37]">
    ASSURANCE PROFESSIONALS
  </span>
</h2>

            <p className="text-slate-400 mt-6 leading-6 text-lg">
Marine Audit Global is an independent marine assurance and consultancy
company providing practical auditing, inspection and technical support
services to ship owners, ship managers and vessel operators worldwide.
</p>

<p className="text-slate-400 mt-6 leading-6 text-lg">
Our expertise is built on practical sailing experience together with
professional marine auditing, enabling us to deliver objective,
experience-based solutions that support regulatory compliance,
operational excellence and continuous improvement.
</p>

<p className="text-slate-400 mt-6 leading-6 text-lg">
We believe in providing honest assessments, practical recommendations
and professional support tailored to each client's operational
requirements while maintaining complete independence,
confidentiality and integrity.
</p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-6">
                <h3 className="text-3xl font-black text-[#D4AF37]">
Independent
</h3>

<p className="text-slate-400 mt-2">
Objective & Unbiased Marine Assurance Services
</p>
              </div>

              <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-4">
               <h3 className="text-3xl font-black text-[#D4AF37]">
Worldwide
</h3>

<p className="text-slate-400 mt-2">
Supporting Clients Across International Shipping Operations
</p>
              </div>

            </div>

          </div>

        </div>
</div>
      </section>  
      {/* SERVICES SECTION */}
     <section
  id="services"
  className="pt-8 pb-16 bg-[#081424] border-t border-slate-800"
>
        <div className="max-w-[1550px] mx-auto px-8">

          <div className="text-center mb-12">
            <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm font-semibold mb-5">
              Our Expertise
            </p>

            <h2 className="text-5xl font-black uppercase">
              Marine Assurance Services
            </h2>

            <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
              Delivering high-standard marine inspections, audits and consultancy
              solutions across international shipping operations.
            </p>
          </div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 hover:border-[#D4AF37] transition flex flex-col h-full">
    <h3 className="text-[28px] font-bold text-[#D4AF37] mb-4 leading-tight">
      Marine Audits
    </h3>
<div className="w-46 border-b border-[#D4AF37] mb-5"></div>
    <ul className="space-y-2 text-slate-400 leading-7 list-disc pl-5 text-left">

  <li>ISM, ISPS & MLC Internal Audits</li>

  <li>Certified & Experienced Marine Auditors</li>

  <li>Compliance with IMO & Flag State Requirements</li>

  <li>Management System Effectiveness Reviews</li>

  <li>Practical Recommendations & Gap Analysis</li>

</ul>

   
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 hover:border-[#D4AF37] transition">
    <h3 className="text-[28px] font-bold text-[#D4AF37] mb-4 leading-tight">
      Operational Audits
    </h3>
    <div className="w-62 border-b border-[#D4AF37] mb-5"></div>
    <ul className="space-y-2 text-slate-400 leading-7 list-disc pl-5 text-left">

  <li>Navigation & Bridge Audits</li>

  <li>Engine Room Operational Audits</li>

  <li>Cargo, Mooring & Anchoring Audits</li>

  <li>Bunker & Environmental Compliance Audits</li>

  <li>Operational Risk & Safety Assessments</li>

</ul>

    
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 hover:border-[#D4AF37] transition">
    <h3 className="text-[28px] font-bold text-[#D4AF37] mb-4 leading-tight">
      Marine Inspections & Surveys
    </h3>
<div className="w-98 border-b border-[#D4AF37] mb-5"></div>
    <ul className="space-y-2 text-slate-400 leading-7 list-disc pl-5 text-left">

  <li>Condition Assessment Surveys</li>

  <li>Pre-Purchase Vessel Inspections</li>

  <li>Vessel Take-Over Surveys</li>

  <li>Independent Technical Assessments</li>

  <li>Detailed Professional Reporting</li>

</ul>

    
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 hover:border-[#D4AF37] transition">
    <h3 className="text-[28px] font-bold text-[#D4AF37] mb-4 leading-tight">
      Vetting & Compliance
    </h3>
    <div className="w-72 border-b border-[#D4AF37] mb-5"></div>
    <ul className="space-y-2 text-slate-400 leading-7 list-disc pl-5 text-left">

  <li>SIRE 2.0, CDI & RightShip Preparation</li>

  <li>PSC Readiness & Gap Analysis</li>

  <li>USCG, AMSA & International PSC Support</li>

  <li>Flag State & Class Inspection Preparation</li>

  <li>Technical Guidance for Ship Staff</li>

</ul>

  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 hover:border-[#D4AF37] transition">
    <h3 className="text-[28px] font-bold text-[#D4AF37] mb-4 leading-tight">
      Consultancy & Training
    </h3>
    <div className="w-76 border-b border-[#D4AF37] mb-5"></div>
    <ul className="space-y-2 text-slate-400 leading-7 list-disc pl-5 text-left">

  <li>SMS & PMS Implementation</li>

  <li>Onboard Crew Training & Drills</li>

  <li>Safety & Regulatory Awareness</li>

  <li>Technical & Operational Consultancy</li>

  <li>Crew Competency Development</li>

</ul>

    
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 hover:border-[#D4AF37] transition">
    <h3 className="text-[28px] font-bold text-[#D4AF37] mb-4 leading-tight">
  Marine Investigations
</h3>
    <div className="w-72 border-b border-[#D4AF37] mb-5"></div>
    <ul className="space-y-2 text-slate-400 leading-7 list-disc pl-5 text-left">

  <li>Marine Accident Investigations</li>

  <li>Incident Analysis & Reporting</li>

  <li>Root Cause Analysis</li>

  <li>Corrective & Preventive Actions</li>

  <li>Independent Technical Support</li>

</ul>

    
  </div>

</div>
          
        </div>
      </section>  
 {/* WHO WE SERVE SECTION */}
<section
  id="clients"
  className="pt-8 pb-16 bg-[#081424] border-t border-slate-800"
>
        <div className="max-w-[1550px] mx-auto px-8 text-center">

        <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm font-semibold mb-5">
  WHO WE SERVE
</p>

<h2 className="text-5xl font-black uppercase">
  Supporting the Global Maritime Industry
</h2>

<p className="text-slate-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
Our professional marine assurance services are designed to support
ship owners, ship managers and marine operators with practical,
independent and experience-based solutions throughout the vessel's
operational lifecycle.
</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
    🚢 Ship Owners
  </h3>

  <ul className="space-y-3 text-slate-400 leading-7 list-disc pl-5 text-left">

    <li>Independent marine audits</li>

    <li>Technical inspections</li>

    <li>Pre-purchase surveys</li>

    <li>Marine consultancy services</li>

    <li>Safe & compliant vessel operations</li>

  </ul>

</div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
    ⚓ Ship Managers
  </h3>

  <ul className="space-y-3 text-slate-400 leading-7 list-disc list-inside text-left">

    <li>Internal audits (ISM, ISPS & MLC)</li>

    <li>SIRE 2.0 preparation</li>

    <li>TMSA implementation support</li>

    <li>Compliance reviews</li>

    <li>Crew awareness programmes</li>

  </ul>

</div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
    🛠 Technical Managers
  </h3>

  <ul className="space-y-3 text-slate-400 leading-7 list-disc list-inside text-left">

    <li>Machinery condition assessments</li>

    <li>Engine room audits</li>

    <li>Bunker operation reviews</li>

    <li>Environmental compliance</li>

    <li>Technical risk reduction</li>

  </ul>

</div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
    📋 Marine Operators
  </h3>

  <ul className="space-y-3 text-slate-400 leading-7 list-disc list-inside text-left">

    <li>Marine consultancy</li>

    <li>Accident investigations</li>

    <li>Onboard training</li>

    <li>Operational support</li>

    <li>Tailored assurance solutions</li>

  </ul>

</div>

</div>

        </div>
      </section>
{/* CONTACT SECTION */}
      <section
  id="request"
  className="pt-8 pb-12 bg-[#061120] border-t border-slate-800"
>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm font-semibold text-center mb-8">
  CONTACT MARINE AUDIT GLOBAL
</p>
<div className="grid lg:grid-cols-2 gap-16 items-start"></div>
          <div>
            

            <h2 className="text-4xl lg:text-5xl font-black uppercase leading-tight">
  REQUEST <span className="text-[#D4AF37]">MARINE ASSURANCE SERVICES</span>
</h2>

            <p className="text-slate-400 mt-8 text-lg leading-8">
              Request professional marine assurance services including audits,
  inspections, technical consultancy, compliance support, training,
  investigations and independent marine advisory services tailored to
  your operational requirements.
            </p>

            <div className="mt-12 space-y-8">

              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="font-bold text-xl">
                  Global Coverage
                </h3>

                <p className="text-slate-400 mt-2">
                  Rapid response support across international ports and shipping operations.
                </p>
              </div>

              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="font-bold text-xl">
                  24/7 Emergency Response
                </h3>

                <p className="text-slate-400 mt-2">
                  Dedicated emergency marine technical assistance available worldwide.
                </p>
              </div>

            </div>
          </div>
<div className="mt-10">

  <button
    onClick={() => setShowForm(!showForm)}
    className="bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300"
  >
    {showForm
      ? "▲ Hide Request Form"
      : "▼ Request Our Services"}
  </button>

</div>
          {showForm && (

<div className="bg-gradient-to-b from-[#0B1B32] to-[#081120] border border-slate-700 rounded-3xl p-12 shadow-2xl mt-10">

           <form className="space-y-8">

  {/* CLIENT INFORMATION */}

  <div>
    <h3 className="text-xl font-bold text-[#D4AF37] border-b border-slate-700 pb-2 mb-6">
      Client Information
    </h3>

    <div className="space-y-6">

      <input
        type="text"
        placeholder="Full Name *"
        className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
      />

      <input
        type="text"
        placeholder="Company Name *"
        className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
      />

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="email"
          placeholder="Official Email *"
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

        <input
          type="tel"
          placeholder="Phone / WhatsApp *"
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

      </div>

    </div>
  </div>

  {/* VESSEL INFORMATION */}

  <div>

    <h3 className="text-xl font-bold text-[#D4AF37] border-b border-slate-700 pb-2 mb-6">
      Vessel Information
    </h3>

    <div className="space-y-6">

      <input
        type="text"
        placeholder="Vessel Name"
        className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
      />

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="IMO Number"
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

        <input
          type="text"
          placeholder="Flag State"
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <select
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37] text-slate-300"
        >
          <option>Vessel Type</option>
          <option>Oil Tanker</option>
          <option>Chemical Tanker</option>
          <option>LPG Carrier</option>
          <option>LNG Carrier</option>
          <option>Bulk Carrier</option>
          <option>Container Ship</option>
          <option>General Cargo Ship</option>
          <option>Offshore Vessel</option>
          <option>Tug</option>
          <option>Passenger Vessel</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          placeholder="DWT / GT (Optional)"
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

      </div>

    </div>

  </div>
    {/* INSPECTION INFORMATION */}

  <div>

    <h3 className="text-xl font-bold text-[#D4AF37] border-b border-slate-700 pb-2 mb-6">
      Inspection Information
    </h3>

    <div className="space-y-6">

      <select
        className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37] text-slate-300"
      >
        <option>Select Type of Inspection</option>
        <option>Internal Audit (ISM / ISPS / MLC)</option>
        <option>TMSA Core Audits</option>
        <option>SIRE 2.0 Preparation</option>
        <option>RightShip Preparation</option>
        <option>Onboard Training</option>
        <option>Navigation Audit</option>
        <option>Engine Room Audit</option>
        <option>Environmental Compliance Audit</option>
        <option>Cargo & Mooring Audit</option>
        <option>Bunker Audit</option>
        <option>Accident / Incident Investigation</option>
        <option>Vessel Pre-Purchase Inspection</option>
        <option>Vessel Take Over</option>
        <option>SMS Implementation</option>
        <option>Other</option>
      </select>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="date"
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37] text-slate-300"
        />

        <select
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37] text-slate-300"
        >
          <option>Urgency</option>
          <option>Routine</option>
          <option>Urgent</option>
          <option>Emergency</option>
        </select>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <select
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37] text-slate-300"
        >
          <option>Vessel Status</option>
          <option>Sailing</option>
          <option>At Port</option>
        </select>

        <input
          type="text"
          placeholder="Current Port / Voyage Route"
          className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
        />

      </div>

    </div>

  </div>

  {/* CONTACT PREFERENCES */}

  <div>

    <h3 className="text-xl font-bold text-[#D4AF37] border-b border-slate-700 pb-2 mb-6">
      Contact Preferences
    </h3>

    <div className="space-y-6">

      <div className="bg-[#081120] border border-slate-700 rounded-xl px-5 py-5">

        <p className="text-white font-semibold mb-4">
          Preferred Contact Method
        </p>

        <div className="flex flex-wrap gap-8">

          <label className="flex items-center gap-2 text-slate-300">
            <input type="checkbox" />
            Phone
          </label>

          <label className="flex items-center gap-2 text-slate-300">
            <input type="checkbox" />
            Email
          </label>

          <label className="flex items-center gap-2 text-slate-300">
            <input type="checkbox" />
            WhatsApp
          </label>

        </div>

      </div>

      <select
        className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37] text-slate-300"
      >
        <option>Best Time to Contact</option>
        <option>0800 - 1200 (Morning)</option>
        <option>1200 - 1700 (Afternoon)</option>
        <option>1700 - 2100 (Evening)</option>
        <option>Any Time</option>
      </select>

    </div>

  </div>
    {/* ADDITIONAL INFORMATION */}

  <div>

    <h3 className="text-xl font-bold text-[#D4AF37] border-b border-slate-700 pb-2 mb-6">
      Additional Information
    </h3>

    <textarea
      rows="7"
      placeholder="Please provide additional details about the vessel, inspection requirements, preferred schedule, operational concerns, charterer requirements or any other relevant information."
      className="w-full bg-[#081120] border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-[#D4AF37]"
    ></textarea>

  </div>

  {/* GDPR CONSENT */}

  <div className="bg-[#081120] border border-slate-700 rounded-xl p-5">

    <label className="flex items-start gap-3">

      <input
        type="checkbox"
        className="mt-1 h-5 w-5 accent-[#D4AF37]"
      />

      <span className="text-slate-200 text-sm leading-6">
        I confirm that the information provided is accurate and I consent to
        Marine Audit Global collecting and processing my submitted information
        solely for responding to my enquiry and providing the requested marine
        services, in accordance with applicable international privacy and data
        protection regulations including the General Data Protection Regulation
        (GDPR).
      </span>

    </label>

  </div>

  <button
    type="submit"
    className="w-full bg-[#D4AF37] text-black font-bold text-lg py-5 rounded-xl hover:bg-yellow-400 transition duration-300"
  >
    REQUEST OUR SERVICES
  </button>

</form>
          </div>

)}
        </div>
      </section>
{/* FOOTER */}
    <footer
  id="contact"
  className="bg-[#040B16] border-t border-slate-800 pt-12 pb-6"
>
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#D4AF37] text-black font-black px-3 py-1 rounded">
                  MAG
                </div>

                <div>
                  <h3 className="font-bold tracking-widest whitespace-nowrap text-lg">
  MARINE AUDIT GLOBAL
</h3>
                </div>
              </div>

              <p className="text-slate-400 leading-7">
                Independent marine inspections, audits and consultancy
                services supporting international maritime operations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">
                Quick Links
              </h3>

              <ul className="space-y-5 text-slate-400">

  <li>
    <a href="#home" className="hover:text-[#D4AF37]">
      Home
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-[#D4AF37]">
      Services
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-[#D4AF37]">
      About
    </a>
  </li>

  <li>
    <a href="#clients" className="hover:text-[#D4AF37]">
      Who We Serve
    </a>
  </li>

  <li>
    <a href="#request" className="hover:text-[#D4AF37]">
      Contact
    </a>
  </li>

</ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">
                Services
              </h3>

              <ul className="space-y-5 text-slate-400">

  <li>Marine Audits</li>

  <li>Operational Audits</li>

  <li>Marine Inspections & Surveys</li>

  <li>Vetting & Compliance</li>

  <li>Consultancy & Training</li>

  <li>Technical Assistance</li>

</ul>
            </div>

            <div>
  <h3 className="font-bold text-lg mb-6">
    Contact
  </h3>

  <ul className="space-y-5 text-slate-400">

    <li>
      📧 info@marineauditglobal.com
    </li>

    <li>
      📱 +91 XXXXX XXXXX
    </li>

    <li>
      💬 WhatsApp Available
    </li>

    <li>
      🌍 Worldwide Marine Support
    </li>

    <li>
      ⏰ 24/7 Emergency Response
    </li>

  </ul>
</div>
          </div>

         <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

  <p className="text-slate-500 text-sm">
    © 2026 Marine Audit Global. All Rights Reserved.
  </p>

  <div className="flex gap-6 text-sm">

    <a
      href="/privacy-policy"
      className="text-slate-400 hover:text-[#D4AF37]"
    >
      Privacy Policy
    </a>

    <a
      href="/terms-of-service"
      className="text-slate-400 hover:text-[#D4AF37]"
    >
      Terms of Service
    </a>

  </div>

</div>
        </div>
      </footer>
    </main>
  );
}