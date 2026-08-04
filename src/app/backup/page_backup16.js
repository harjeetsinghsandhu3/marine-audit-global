"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Mail, Phone, MessageCircle, Globe, Clock, MapPin, ShieldCheck, ClipboardCheck, Ship, FileSearch, GraduationCap, SearchCheck, BriefcaseBusiness, Building2, Cog, Anchor,} from "lucide-react";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Marine Audit Global",

  url: "https://www.marineauditglobal.com",

  logo: "https://www.marineauditglobal.com/logo.png",

  email: "info@marineauditglobal.com",

  telephone: "+91-9780660005",

  sameAs: [],

  address: {
    "@type": "PostalAddress",

    addressCountry: "IN",
  },

  description:
    "Worldwide Marine Inspection, Marine Assurance and Consultancy Services.",
};

export default function Home() {

  const [showForm, setShowForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [inspectionDate, setInspectionDate] = useState(null);
  const [dateError, setDateError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");
const [phoneError, setPhoneError] = useState("");
const [selectedFileName, setSelectedFileName] = useState("");
const [fileError, setFileError] = useState("");
  
const handleFilled = (e) => {
  const field = e.target;

  if (
    field.value !== null &&
    field.value !== undefined &&
    String(field.value).trim() !== ""
  ) {
    field.classList?.add("filled");
  } else {
    field.classList?.remove("filled");
  }
};
  const formRef = useRef(null);
  const formLoadedAt = useRef(Date.now());

  async function handleSubmit(e) {
  e.preventDefault();

// Email Validation
if (emailError !== "") {
  alert("Please enter a valid email address.");
  return;
}

// Phone Validation
if (!isPhoneValid) {
  alert("Please enter a valid mobile / phone number.");
  return;
}

// Inspection Date Validation
if (!inspectionDate) {
  setDateError("Please select inspection date.");
  return;
} else {
  setDateError("");
}

setIsSending(true);

  const formData = new FormData(formRef.current);
  if (inspectionDate) {
  formData.set(
    "inspectionDate",
    inspectionDate.toLocaleDateString("en-GB")
  );
}

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {

  setSuccessMessage(true);

formRef.current.reset();

setPhone("");
setEmail("");
setInspectionDate(null);

setEmailError("");
setPhoneError("");
setDateError("");

setIsPhoneValid(false);

setTimeout(() => {

  setSuccessMessage(false);

  setShowForm(false);

}, 4000);

setIsSending(false);

return;
} else {

  alert("Unable to send request.");

}

  } catch (error) {
    console.error(error);
    alert("Unable to send request.");
  }

  setIsSending(false);
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: "Marine Audit Global",

  url: "https://www.marineauditglobal.com",

  logo: "https://www.marineauditglobal.com/android-chrome-512x512.png",

  image: "https://www.marineauditglobal.com/android-chrome-512x512.png",

  description:
    "Worldwide Marine Inspection, Marine Consultancy, SIRE 2.0 Preparation, TMSA, ISM, ISPS and MLC Audits.",

  email: "ops@marineauditglobal.com",

  telephone: "+917589228802",

  areaServed: "Worldwide",

  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },

  serviceType: [
    "Marine Inspection",
    "Marine Consultancy",
    "Marine Assurance",
    "SIRE 2.0 Preparation",
    "TMSA Audit",
    "ISM Audit",
    "ISPS Audit",
    "MLC Audit",
    "Pre Purchase Inspection",
    "RightShip Preparation",
  ],
};

  return (
    <main className="bg-[#061120] text-white min-h-screen font-sans">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#061120] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            <Image
  src="/logo-transparent.png"
  alt="Marine Audit Global"
  width={110}
  height={110}
  priority
  className="w-[100px] h-[100px] object-contain shrink-0 select-none pointer-events-none"
/>

            <div>
              <h1 className="font-bold tracking-widest text-xl leading-tight">
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
          <a
  href="#request"
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  REQUEST AN INSPECTION
</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
  id="home"
  className="max-w-7xl mx-auto px-6 pt-12 pb-10 grid lg:grid-cols-2 gap-8 items-center"
>
       <div className="self-start">

  <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-semibold mb-7">
    Global Marine Inspection Specialists
  </p>

  <h2 className="text-5xl lg:text-6xl font-black leading-[0.95] uppercase">
    Global Standards.
    <span className="text-[#D4AF37] block">
      Trusted Assurance.
    </span>
  </h2>

  <p className="text-slate-300 mt-7 text-xl leading-9 max-w-xl">
    Independent marine assurance services delivered worldwide through practical inspections, audits and technical consultancy for the international shipping industry.
  </p>

    <div className="mt-10 border-t border-slate-700 pt-6">

    <div className="grid grid-cols-2 gap-6">

      <div className="flex items-start gap-3">

        <span className="text-3xl">🌍</span>

        <div>

          <h4 className="font-bold text-white">
            Global Coverage
          </h4>

          <p className="text-slate-400 text-sm">
            International Marine Support
          </p>

        </div>

      </div>

      <div className="flex items-start gap-3">

        <span className="text-3xl">⚓</span>

        <div>

          <h4 className="font-bold text-white">
            Maritime Expertise
          </h4>

          <p className="text-slate-400 text-sm">
            Practical Sea-going Experience
          </p>

        </div>

      </div>

      <div className="flex items-start gap-3">

        <span className="text-3xl">🛡</span>

        <div>

          <h4 className="font-bold text-white">
            Independent & Confidential
          </h4>

          <p className="text-slate-400 text-sm">
            Objective Professional Assurance
          </p>

        </div>

      </div>

      <div className="flex items-start gap-3">

        <span className="text-3xl">⏰</span>

        <div>

          <h4 className="font-bold text-white">
            24/7 Response
          </h4>

          <p className="text-slate-400 text-sm">
            Emergency Technical Assistance
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

<div className="rounded-3xl relative h-[690px] w-full">

  <Image
    src="/vessel_surveyor_walkietalkie.png"
    alt="Marine Audit Global Marine Assurance Consultant conducting vessel inspection"
    fill
    priority
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           600px"
    className="rounded-3xl shadow-2xl object-cover object-center"
  />

</div>

      </section>

  {/* TRUST BADGES */}
<section className="bg-[#07111F] border-t border-slate-800 pt-6 pb-10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

    <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-5 text-center hover:border-[#D4AF37]
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
transition-all duration-300 transition">
      <div className="text-6xl mb-4">⚓</div>
      <h3 className="font-semibold text-xl text-white">Independent</h3>
      <p className="text-slate-500 text-sm mt-2">
        Marine Assurance
      </p>
    </div>

    <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-5 text-center hover:border-[#D4AF37]
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
transition-all duration-300 transition">
      <div className="text-6xl mb-4">🛡️</div>
      <h3 className="font-semibold text-xl text-white">Certified</h3>
      <p className="text-slate-500 text-sm mt-2">
        Marine Auditors
      </p>
    </div>

    <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-5 text-center hover:border-[#D4AF37]
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
transition-all duration-300 transition">
      <div className="text-6xl mb-4">📋</div>
      <h3 className="font-semibold text-xl text-white">ISM • ISPS • MLC</h3>
      <p className="text-slate-500 text-sm mt-2">
        Compliance Audits
      </p>
    </div>

    <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-5 text-center hover:border-[#D4AF37]
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
transition-all duration-300 transition">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="font-semibold text-xl text-white">SIRE • PSC</h3>
      <p className="text-slate-500 text-sm mt-2">
        Inspection Support
      </p>
    </div>

    <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-5 text-center hover:border-[#D4AF37]
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
transition-all duration-300 transition">
      <div className="text-6xl mb-4">🚢</div>
      <h3 className="font-semibold text-xl text-white">Surveys</h3>
      <p className="text-slate-500 text-sm mt-2">
        Worldwide Inspections
      </p>
    </div>

  </div>
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

          <div className="relative h-[620px] w-full rounded-3xl">

  <div>
  <Image
    src="/surveyor_inspecting_vessel_deck.png"
    alt="Marine surveyor conducting vessel deck inspection during marine assurance audit"
    width={1536}
  height={420}
  quality={100}
  unoptimized
    className="rounded-3xl shadow-2xl w-full h-[620px] object-cover object-[45%_center]"
  />
</div>

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

            <p className="text-slate-300 mt-6 leading-6 text-lg">
Marine Audit Global is an independent marine assurance and consultancy
company providing practical auditing, inspection and technical support
services to ship owners, ship managers and vessel operators worldwide.
</p>

<p className="text-slate-300 mt-6 leading-6 text-lg">
Our expertise is built on practical sailing experience together with
professional marine auditing, enabling us to deliver objective,
experience-based solutions that support regulatory compliance,
operational excellence and continuous improvement.
</p>

<p className="text-slate-300 mt-6 leading-6 text-lg">
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

<p className="text-slate-300 mt-2">
Objective & Unbiased Marine Assurance Services
</p>
              </div>

              <div className="bg-[#0B1B32] border border-slate-700 rounded-2xl p-4">
               <h3 className="text-3xl font-black text-[#D4AF37]">
Worldwide
</h3>

<p className="text-slate-300 mt-2">
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

            <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-8">
              Delivering high-standard marine inspections, audits and consultancy
              solutions across international shipping operations.
            </p>
          </div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <div className="flex items-center gap-3 mb-5">

  <ShieldCheck
    size={34}
    className="text-[#D4AF37]"
  />

  <h3 className="text-[28px] font-bold text-[#D4AF37] leading-tight">
    Marine Audits
  </h3>

</div>

<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
    <ul className="space-y-2 text-slate-300 leading-7 list-disc pl-5 text-left">

  <li>ISM, ISPS & MLC Internal Audits</li>

  <li>Certified & Experienced Marine Auditors</li>

  <li>Compliance with IMO & Flag State Requirements</li>

  <li>Management System Effectiveness Reviews</li>

  <li>Practical Recommendations & Gap Analysis</li>

</ul>

   
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <div className="flex items-center gap-3 mb-5">

  <ClipboardCheck
    size={34}
    className="text-[#D4AF37]"
  />

  <h3 className="text-[28px] font-bold text-[#D4AF37] leading-tight">
    Operational Audits
  </h3>

</div>

<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
    <ul className="space-y-2 text-slate-300 leading-7 list-disc pl-5 text-left">

  <li>Navigation & Bridge Audits</li>

  <li>Engine Room Operational Audits</li>

  <li>Cargo, Mooring & Anchoring Audits</li>

  <li>Bunker & Environmental Compliance Audits</li>

  <li>Operational Risk & Safety Assessments</li>

</ul>

    
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <div className="flex items-center gap-3 mb-5">

  <Ship
    size={34}
    className="text-[#D4AF37]"
  />

  <h3 className="text-[28px] font-bold text-[#D4AF37] leading-tight">
   Inspections & Surveys
  </h3>

</div>

<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
    <ul className="space-y-2 text-slate-300 leading-7 list-disc pl-5 text-left">

  <li>Condition Assessment Surveys</li>

  <li>Pre-Purchase Vessel Inspections</li>

  <li>Vessel Take-Over Surveys</li>

  <li>Independent Technical Assessments</li>

  <li>Detailed Professional Reporting</li>

</ul>

    
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
   <div className="flex items-center gap-3 mb-5">
  <FileSearch size={34} className="text-[#D4AF37]" />

  <h3 className="text-[28px] font-bold text-[#D4AF37] leading-tight">
    Vetting & Compliance
  </h3>
</div>

<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
    <ul className="space-y-2 text-slate-300 leading-7 list-disc pl-5 text-left">

  <li>SIRE 2.0, CDI & RightShip Preparation</li>

  <li>PSC Readiness & Gap Analysis</li>

  <li>USCG, AMSA & International PSC Support</li>

  <li>Flag State & Class Inspection Preparation</li>

  <li>Technical Guidance for Ship Staff</li>

</ul>

  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <div className="flex items-center gap-3 mb-5">
  <GraduationCap size={34} className="text-[#D4AF37]" />

  <h3 className="text-[28px] font-bold text-[#D4AF37] leading-tight">
    Consultancy & Training
  </h3>
</div>

<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
    <ul className="space-y-2 text-slate-300 leading-7 list-disc pl-5 text-left">

  <li>SMS & PMS Implementation</li>

  <li>Onboard Crew Training & Drills</li>

  <li>Safety & Regulatory Awareness</li>

  <li>Technical & Operational Consultancy</li>

  <li>Crew Competency Development</li>

</ul>

    
  </div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
   <div className="flex items-center gap-3 mb-5">
  <SearchCheck size={34} className="text-[#D4AF37]" />

  <h3 className="text-[28px] font-bold text-[#D4AF37] leading-tight">
    Marine Investigations
  </h3>
</div>

<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
    <ul className="space-y-2 text-slate-300 leading-7 list-disc pl-5 text-left">

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

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:bg-[#0D203B] hover:shadow-[0_0_45px_rgba(212,175,55,0.18)]">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
  🚢 Ship Owners
</h3>

<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>

  <ul className="space-y-3 text-slate-300 leading-7 list-disc pl-5 text-left">

    <li>Independent marine audits</li>

    <li>Technical inspections</li>

    <li>Pre-purchase surveys</li>

    <li>Marine consultancy services</li>

    <li>Safe & compliant vessel operations</li>

  </ul>

</div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:bg-[#0D203B] hover:shadow-[0_0_45px_rgba(212,175,55,0.18)]">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
    ⚓ Ship Managers
  </h3>
<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
  <ul className="space-y-3 text-slate-300 leading-7 list-disc pl-5 text-left">

    <li>Internal audits (ISM, ISPS & MLC)</li>

    <li>SIRE 2.0 preparation</li>

    <li>TMSA implementation support</li>

    <li>Compliance reviews</li>

    <li>Crew awareness programmes</li>

  </ul>

</div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:bg-[#0D203B] hover:shadow-[0_0_45px_rgba(212,175,55,0.18)]">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
    🛠 Technical Managers
  </h3>
<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
  <ul className="space-y-3 text-slate-300 leading-7 list-disc pl-5 text-left">

    <li>Machinery condition assessments</li>

    <li>Engine room audits</li>

    <li>Bunker operation reviews</li>

    <li>Environmental compliance</li>

    <li>Technical risk reduction</li>

  </ul>

</div>

  <div className="bg-[#0B1B32] border border-slate-700 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:bg-[#0D203B] hover:shadow-[0_0_45px_rgba(212,175,55,0.18)]">

  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
    📋 Marine Operators
  </h3>
<div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"></div>
  <ul className="space-y-3 text-slate-300 leading-7 list-disc pl-5 text-left">

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
            
            <h2 className="text-5xl lg:text-5xl font-black uppercase leading-[1.05] text-center">
  REQUEST A MARINE INSPECTION
</h2>

            <p className="text-slate-300 mt-8 text-lg leading-8">
              Request an independent marine inspection, audit or technical assessment tailored to your vessel's operational requirements. Our experienced marine professionals provide practical, objective and confidential support worldwide.
            </p>

            <div className="mt-12 space-y-8">

              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="font-bold text-xl">
                  Global Coverage
                </h3>

                <p className="text-slate-300 mt-2">
                  Rapid response support across international ports and shipping operations.
                </p>
              </div>

              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="font-bold text-xl">
                  24/7 Emergency Response
                </h3>

                <p className="text-slate-300 mt-2">
                  Dedicated emergency marine technical assistance available worldwide.
                </p>
              </div>

            </div>
          </div>
<div className="mt-12 flex justify-center">

  <button
    onClick={() => setShowForm(!showForm)}
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300"
  >
    {showForm
  ? "▲ Hide Inspection Request Form"
  : "⚓ Request an Inspection"}
  </button>

</div>
{successMessage && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

  <div className="max-w-xl w-[90%] rounded-3xl border border-[#D4AF37] bg-[#081120] p-10 shadow-2xl text-center animate-pulse">

    <div className="text-6xl mb-6">
      ✅
    </div>

    <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">
      Inspection Request Submitted
    </h2>

    <p className="text-slate-200 text-lg leading-8">

      Thank you for contacting
      <br/>

      <span className="font-bold text-white">
        Marine Audit Global
      </span>

      <br/><br/>

      Your inspection request has been
      received successfully.

      <br/><br/>

      Our Marine Assurance Team will
      contact you shortly.

      <br/><br/>

      <span className="text-[#D4AF37]">
      This window will close automatically...
      </span>

    </p>

  </div>

</div>

)}
          {showForm && (

<div className="bg-gradient-to-b from-[#0B1B32] to-[#081120] border border-slate-700 rounded-3xl p-12 shadow-2xl mt-10">

           <form
  ref={formRef}
  className="space-y-8"
  onSubmit={handleSubmit}
>

  {/* CLIENT INFORMATION */}

  <div>
    <h3 className="text-xl font-bold text-[#D4AF37] border-b border-slate-700 pb-2 mb-6">
      Client Information
    </h3>

    <div className="space-y-6">

      <input
  type="text"
  name="fullName"
  placeholder="Full Name *"
  required
  className="mag-input w-full rounded-xl px-5 py-4 outline-none"
  onInput={handleFilled}
/>

      <input
        type="text"
        name="company"
        placeholder="Company Name *"
        required
        className="mag-input w-full rounded-xl px-5 py-4 outline-none"
        onInput={handleFilled}
      />

      <div className="grid md:grid-cols-2 gap-6">

        <input
  type="email"
  name="email"
  placeholder="Official Email *"
  required
  value={email}
  onChange={(e) => {

    const value = e.target.value;

    setEmail(value);

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (value === "") {
      setEmailError("");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    handleFilled(e);

  }}
  className="mag-input w-full rounded-xl px-5 py-4 outline-none"
/>
{emailError && (

<p className="text-red-400 text-sm mt-2">

{emailError}

</p>

)}

       <PhoneInput
  country={"in"}
  value={phone}
  enableSearch={true}
  countryCodeEditable={false}
  onChange={(value, country) => {

    setPhone(value);

    const phoneNumber = parsePhoneNumberFromString("+" + value);

    if (phoneNumber && phoneNumber.isValid()) {

      setIsPhoneValid(true);
      setPhoneError("");

    } else {

      setIsPhoneValid(false);
      setPhoneError("Please enter a valid phone number.");

    }

  }}

  inputProps={{
    name: "phone",
    required: true,
  }}

  containerStyle={{
    width: "100%",
  }}

  inputStyle={{
    width: "100%",
    height: "58px",
    background: "#162B4A",
    color: "#ffffff",
    border: "1px solid #D4AF37",
    borderRadius: "12px",
    fontSize: "18px",
  }}

  buttonStyle={{
    background: "#162B4A",
    border: "1px solid #D4AF37",
    borderRight: "1px solid #3b4d66",
  }}

  dropdownStyle={{
    background: "#162B4A",
    color: "#ffffff",
  }}
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
        name="vesselName"
        placeholder="Vessel Name"
        required
        className="mag-input w-full rounded-xl px-5 py-4 outline-none"
        onInput={handleFilled}
      />

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          name="imoNumber"
          placeholder="IMO Number"
          required
          className="mag-input w-full rounded-xl px-5 py-4 outline-none"
          onInput={handleFilled}
        />

        <input
          type="text"
          name="flagState"
          placeholder="Flag State"
          required
          className="mag-input w-full rounded-xl px-5 py-4 outline-none"
          onInput={handleFilled}
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <select
        name="vesselType"
        required
        defaultValue=""
          className="mag-select w-full rounded-xl px-5 py-4 outline-none"
        onChange={handleFilled}
        >
          <option value="" disabled>Vessel Type</option>
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
          name="dwtGt"
          placeholder="DWT / GT (Optional)"
          className="mag-input w-full rounded-xl px-5 py-4 outline-none"
          onInput={handleFilled}
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
  name="inspectionType"
  required
defaultValue=""
  className="mag-select w-full rounded-xl px-5 py-4 outline-none"
  onChange={handleFilled}
>
        <option value="" disabled>Select Type of Inspection</option>
        <option>Internal Audit (ISM / ISPS / MLC)</option>
        <option>TMSA Core Audits (Nav, Engine, Cargo, Bunker, Enviro, Mooring)</option>
        <option>SIRE 2.0 Preparation</option>
        <option>RightShip Preparation</option>
        <option>Onboard Training</option>
        <option>Sailing Navigation Audit</option>
        <option>Sailing Engineering Audit</option>
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

        <DatePicker
  selected={inspectionDate}
  onChange={(date) => {
    setInspectionDate(date);

    if (date) {
      setDateError("");
    }
  }}
  minDate={new Date()}
  dateFormat="dd-MM-yyyy"
  placeholderText="Select Inspection Date *"
  className="mag-input w-full rounded-xl px-5 py-4 outline-none"
  showPopperArrow={false}
  calendarStartDay={1}
  required
/>
{dateError && (
  <p className="text-red-400 text-sm mt-2">
    {dateError}
  </p>
)}

        <select
          name="urgency"
          required
          defaultValue=""
          className="mag-select w-full rounded-xl px-5 py-4 outline-none"
onChange={handleFilled}
>
          <option value="" disabled>Urgency</option>
          <option>Routine</option>
          <option>Urgent</option>
          <option>Emergency</option>
        </select>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <select
        name="vesselStatus"
        required
defaultValue=""
          className="mag-select w-full rounded-xl px-5 py-4 outline-none"
          onChange={handleFilled}
        >
          <option value="" disabled>
            Vessel Status
          </option>
          <option>Sailing</option>
          <option>At Port</option>
        </select>

        <input
  type="text"
  name="currentPort"
  placeholder="Current Port / Voyage Route"
  required
 className="mag-input w-full rounded-xl px-5 py-4 outline-none"
          onInput={handleFilled}
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

      <div className="bg-[#162B4A] border border-slate-700 rounded-xl px-5 py-5">

  <p className="text-white font-semibold mb-4">
    Preferred Contact Method
  </p>

  <div className="flex flex-wrap gap-8">

    <label className="flex items-center gap-2 text-slate-300">
      <input
        type="radio"
        name="contactMethod"
        value="Phone"
        required
      />
      Phone
    </label>

    <label className="flex items-center gap-2 text-slate-300">
      <input
        type="radio"
        name="contactMethod"
        value="Email"
      />
      Email
    </label>

    <label className="flex items-center gap-2 text-slate-300">
      <input
        type="radio"
        name="contactMethod"
        value="WhatsApp"
      />
      WhatsApp
    </label>

  </div>

</div>

      <select
  name="bestTime"
  required
  defaultValue=""
  className="mag-select w-full rounded-xl px-5 py-4 outline-none"
  onChange={handleFilled}
>
  <option value="" disabled>
    Best Time to Contact
  </option>

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
  name="message"
  rows="7"
  placeholder="Please provide additional details about the vessel, inspection requirements, preferred schedule, operational concerns, charterer requirements or any other relevant information."
  className="mag-textarea w-full rounded-xl px-5 py-4 outline-none"
  onInput={handleFilled}
></textarea>

  </div>

{/* SUPPORTING DOCUMENT */}

<div>

  <h3 className="text-xl font-bold text-[#D4AF37] border-b border-slate-700 pb-2 mb-6">
    Supporting Document (Optional)
  </h3>

  <div className="bg-[#162B4A] border border-slate-700 rounded-xl p-6">

    <label
      htmlFor="attachment"
      className="block cursor-pointer"
    >

      <div className="flex items-center gap-4">

        <div className="text-4xl">
          📎
        </div>

        <div>

          <p className="text-white font-semibold text-lg">
            Upload Supporting Document
          </p>

          <p className="text-slate-400 text-sm mt-1">
            Vessel Particulars, Previous Report, GA Plan,
            Inspection Scope, Photos or ZIP file.
          </p>

          <p className="text-slate-500 text-xs mt-2">
            PDF • DOC • DOCX • XLS • XLSX • JPG • PNG • ZIP
            <br />
            Maximum file size: 10 MB
          </p>

        </div>

      </div>

    </label>

    <input
  id="attachment"
  type="file"
  name="attachment"
  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"
  className="hidden"
  onChange={(e) => {

  const file = e.target.files[0];

  if (!file) {

    setSelectedFileName("");
    setFileError("");
    return;

  }

  const allowedTypes = [

    "application/pdf",

    "application/msword",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    "application/vnd.ms-excel",

    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

    "image/jpeg",

    "image/png",

    "application/zip",

    "application/x-zip-compressed"

  ];

  const maxSize = 20 * 1024 * 1024; // 20 MB

  if (!allowedTypes.includes(file.type)) {

    setSelectedFileName("");

    setFileError("Only PDF, DOC, DOCX, XLS, XLSX, JPG, PNG and ZIP files are allowed.");

    e.target.value = "";

    return;

  }

  if (file.size > maxSize) {

    setSelectedFileName("");

    setFileError("Maximum file size allowed is 20 MB.");

    e.target.value = "";

    return;

  }

  setSelectedFileName(file.name);

  setFileError("");

}}
/>
{selectedFileName && (

<div className="mt-5 bg-[#081120] border border-slate-700 rounded-lg px-4 py-3">

<p className="text-[#D4AF37] font-semibold">

✔ Selected File

</p>

<p className="text-slate-300 mt-1 break-all">

{selectedFileName}

</p>

</div>

)}
{fileError && (

<p className="text-red-400 text-sm mt-3">

{fileError}

</p>

)}
  </div>

</div>

  {/* GDPR CONSENT */}

  <div className="bg-[#081120] border border-slate-700 rounded-xl p-5">

    <label className="flex items-start gap-3">

      <input
        type="checkbox"
        name="gdprConsent"
  required
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

{/* Honeypot Field */}
<div style={{ display: "none" }}>
  <input
    type="text"
    name="website"
    autoComplete="off"
    tabIndex="-1"
  />

  <input
    type="hidden"
    name="formLoadedAt"
    value={formLoadedAt.current}
  />
</div>
  <button
  type="submit"
  disabled={isSending}
  className={`w-full text-white font-bold text-lg py-5 rounded-xl transition duration-300 shadow-lg ${
    isSending
      ? "bg-slate-500 cursor-not-allowed"
      : "bg-[#2563EB] hover:bg-[#1D4ED8]"
  }`}
>
  {isSending ? "⏳ Sending Request..." : "REQUEST AN INSPECTION"}
</button>

</form>
          </div>

)}
        </div>
      </section>
{/* FOOTER */}
    <footer
  id="contact"
  className="bg-[#040B16] border-t border-slate-800 pt-10 pb-10"
>
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
  src="/logo-transparent.png"
  alt="Marine Audit Global"
  width={110}
  height={110}
  priority
  className="w-[100px] h-[100px] object-contain select-none pointer-events-none"
/>

                <div>
                  <h3 className="font-black tracking-[0.22em] uppercase text-xl text-white">
  MARINE AUDIT GLOBAL
</h3>
                </div>
              </div>

              <p className="text-slate-300 leading-8 max-w-[340px]">
                Independent marine inspections, audits and technical consultancy for the global shipping industry.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-white mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3 text-slate-300">

  <li>
    <a href="#home" className="transition-colors duration-300 hover:text-[#D4AF37]">
      Home
    </a>
  </li>

  <li>
    <a href="#services" className="transition-colors duration-300 hover:text-[#D4AF37]">
      Services
    </a>
  </li>

  <li>
    <a href="#about" className="transition-colors duration-300 hover:text-[#D4AF37]">
      About
    </a>
  </li>

  <li>
    <a href="#clients" className="transition-colors duration-300 hover:text-[#D4AF37]">
      Who We Serve
    </a>
  </li>

  <li>
    <a href="#request" className="transition-colors duration-300 hover:text-[#D4AF37]">
      Contact
    </a>
  </li>

</ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-white mb-5">
                Services
              </h3>

              <ul className="space-y-3 text-slate-300">

  <li className="hover:text-[#D4AF37] transition-colors cursor-default">
  Marine Audits
</li>

  <li className="hover:text-[#D4AF37] transition-colors cursor-default">
  Operational Audits
</li>

  <li className="hover:text-[#D4AF37] transition-colors cursor-default">
  Marine Inspections & Surveys
</li>

  <li className="hover:text-[#D4AF37] transition-colors cursor-default">
  Vetting & Compliance
</li>

  <li className="hover:text-[#D4AF37] transition-colors cursor-default">
  Consultancy & Training
</li>

</ul>
            </div>

            <div>
  <h3 className="font-bold text-xl text-white mb-5">
    Contact
  </h3>

  <ul className="space-y-3 text-slate-300">

    <li className="flex items-center gap-3">
  <Mail size={18} className="text-[#D4AF37]" />
  <a
    href="mailto:ops@marineauditglobal.com"
    className="text-blue-400 hover:text-[#D4AF37] transition-colors"
  >
    ops@marineauditglobal.com
  </a>
</li>

    <li className="flex items-center gap-3">
  <Phone size={18} className="text-[#D4AF37]" />
  <a
    href="tel:+917589228802"
    className="text-purple-400 hover:text-[#D4AF37] transition-colors"
  >
    +91 7589228802
  </a>
</li>

    <li className="flex items-center gap-3">
  <MessageCircle size={18} className="text-[#D4AF37]" />
  <a
    href="https://wa.me/917589228802"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:text-[#D4AF37] transition-colors"
  >
    WhatsApp Available
  </a>
</li>

<li className="flex items-center gap-3">
  <Globe size={18} className="text-[#D4AF37]" />
  <a
    href="https://www.marineauditglobal.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-[#D4AF37] transition-colors"
  >
    www.marineauditglobal.com
  </a>
</li>

   <li className="flex items-center gap-3">
  <MapPin size={18} className="text-[#D4AF37]" />
<span className="text-[#D4AF37]">
  Mumbai, Maharashtra, India
</span>
</li>

  </ul>
</div>
          </div>

         <div className="border-t border-slate-800 mt-10 pt-6 w-full flex flex-col md:flex-row justify-between items-center gap-4">

  <p className="text-slate-300 text-sm flex items-center gap-3 flex-wrap">
  <span>© 2026 Marine Audit Global.</span>

  <span className="text-slate-300">|</span>

  <span>All Rights Reserved.</span>

  <span className="text-slate-300">|</span>

  <span>Independent Marine Assurance & Consultancy</span>
</p>

  <div className="flex gap-6 text-sm">

    <a
      href="/privacy-policy"
      className="text-slate-300 hover:text-[#D4AF37]"
    >
      Privacy Policy
    </a>

    <a
      href="/terms-of-service"
      className="text-slate-300 hover:text-[#D4AF37]"
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