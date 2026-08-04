export const metadata = {
  title: "Terms of Service",
  description:
    "Terms and Conditions governing the use of Marine Audit Global website and professional marine assurance services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#061120] text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm font-semibold mb-4">
          Legal Information
        </p>

        <h1 className="text-4xl md:text-5xl font-black uppercase mb-10">
          Terms of Service
        </h1>

        <div className="space-y-10 text-slate-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Acceptance of Terms
            </h2>

            <p>
              By accessing this website you agree to comply with these Terms of
              Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Professional Services
            </h2>

            <p>
              Marine Audit Global provides independent marine assurance,
              inspections, audits, consultancy and related professional
              services. Any engagement is governed by individual commercial
              agreements issued between Marine Audit Global and the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Information Accuracy
            </h2>

            <p>
              While every effort is made to maintain accurate information,
              Marine Audit Global does not guarantee that all website content
              remains complete, current or error free at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Intellectual Property
            </h2>

            <p>
              All content including text, graphics, branding, reports and
              website design remains the property of Marine Audit Global unless
              otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Limitation of Liability
            </h2>

            <p>
              Marine Audit Global shall not be liable for indirect,
              consequential or incidental damages arising from use of this
              website or reliance upon information published herein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Governing Law
            </h2>

            <p>
              These Terms shall be governed by the applicable laws of India,
              unless otherwise agreed in writing between the parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Contact
            </h2>

            <p>
              For any questions regarding these Terms of Service please contact
              us at:
            </p>

            <p className="mt-3">
              <strong>Email:</strong> ops@marineauditglobal.com
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}