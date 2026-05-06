"use client"; // Required for Next.js App Router

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- FORM STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vesselType: '',
    serviceType: 'Type of Inspection/Service',
    details: '',
    contactEmail: false,
    contactPhone: false,
    privacyAccepted: false
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      alert("Please accept the Privacy Policy to continue.");
      return;
    }

    setStatus('loading');

    try {
      // SIMULATION: This is where you would call your API
      // Example: await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 2000)); 

      console.log("Form Data Delivered:", formData);
      setStatus('success');
      
      // Reset form after success
      setFormData({
        fullName: '', email: '', phone: '', vesselType: '',
        serviceType: 'Type of Inspection/Service', details: '',
        contactEmail: false, contactPhone: false, privacyAccepted: false
      });
    } catch (error) {
      setStatus('error');
    }
  };

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
          <a href="#home" className="text-sm font-bold uppercase tracking-widest text-[#0D1B2A] hover:text-[#D4AF37] transition-all">Home</a>
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
                  high-impact technical audits.
                </p>
              </div>
              <a href="#audit-form" className="inline-block bg-[#0D1B2A] text-white px-8 py-4 font-bold text-[11px] uppercase tracking-widest hover:bg-[#1E3A8A] transition-all shadow-lg">
                Deploy MAG Expertise
              </a>
            </div>

            <div className="relative">
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1590674258941-6101901639d6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial Tanker Vessel" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WORKABLE FORM SECTION */}
        <section id="audit-form" className="py-24 bg-white px-6">
          <div className="max-w-4xl mx-auto bg-[#0D1B2A] p-10 lg:p-16 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-tight">Secure An Audit</h3>
            
            {status === 'success' ? (
              <div className="text-center py-10 animate-pulse">
                <div className="text-[#D4AF37] text-6xl mb-4">✓</div>
                <h4 className="text-white text-xl font-bold uppercase tracking-widest">Deployment Request Received</h4>
                <p className="text-slate-400 mt-2">A technical officer will contact you within 4 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-[#D4AF37] text-xs font-bold uppercase underline">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                  placeholder="Full Name" className="p-3 bg-white text-sm outline-none w-full" required 
                />
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="Official Email" className="p-3 bg-white text-sm outline-none w-full" required 
                />
                <input 
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="Phone / Mobile Number" className="p-3 bg-white text-sm outline-none w-full" required 
                />
                <input 
                  type="text" name="vesselType" value={formData.vesselType} onChange={handleChange}
                  placeholder="Type of Vessel (e.g. Tanker, Bulk)" className="p-3 bg-white text-sm outline-none w-full" 
                />
                
                <select 
                  name="serviceType" value={formData.serviceType} onChange={handleChange}
                  className="p-3 bg-white text-sm outline-none w-full md:col-span-2 appearance-none text-slate-500 font-medium"
                >
                  <option disabled>Type of Inspection/Service</option>
                  <option>Vessel Inspections</option>
                  <option>Internal Audits</option>
                  <option>Onboard Training</option>
                  <option>Core Audits (TMSA)</option>
                  <option>Sire 2.0 / Rightship Preparation</option>
                  <option>Incident Investigation</option>
                </select>
                
                <textarea 
                  name="details" value={formData.details} onChange={handleChange}
                  placeholder="Vessel Location & Project Details" className="p-3 bg-white text-sm outline-none w-full md:col-span-2 h-32"
                ></textarea>

                {/* CONTACT PREFERENCES */}
                <div className="md:col-span-2 mt-6 p-6 border border-slate-700 bg-[#142638]">
                  <p className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">How should we contact you?</p>
                  
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" name="contactEmail" checked={formData.contactEmail} onChange={handleChange} className="w-4 h-4 accent-[#D4AF37]" />
                      <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Please email me back</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" name="contactPhone" checked={formData.contactPhone} onChange={handleChange} className="w-4 h-4 accent-[#D4AF37]" />
                      <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Please call me back</span>
                    </label>

                    <label className="flex items-start gap-3 mt-6 pt-4 border-t border-slate-700 cursor-pointer group">
                      <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} required className="w-4 h-4 mt-0.5 accent-[#D4AF37]" />
                      <span className="text-slate-300 text-xs leading-relaxed group-hover:text-white transition-colors">
                        I can confirm that I have read and accept the <a href="#" className="text-[#D4AF37] underline font-bold">Privacy Policy</a>
                      </span>
                    </label>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="md:col-span-2 mt-4 bg-[#D4AF37] text-[#0D1B2A] font-black py-4 uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-md disabled:bg-slate-500 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Processing Deployment...' : 'Request Deployment'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-[#0D1B2A] text-white py-14 px-6 lg:px-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black tracking-tight">MARINE AUDIT GLOBAL</h4>
          </div>
          <div className="text-center md:text-right">
            <a href="mailto:info@marineauditglobal.com" className="font-bold hover:text-[#D4AF37]">info@marineauditglobal.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
