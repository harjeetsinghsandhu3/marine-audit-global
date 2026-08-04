import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#061120] flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full text-center">

        <Image
          src="/404-banner.png"
          alt="Marine Audit Global"
          width={1600}
          height={900}
          priority
          className="w-full rounded-3xl border border-[#D4AF37] shadow-2xl mb-12"
        />

        <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-semibold mb-4">
          Navigation Error
        </p>

        <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-tight">
          You've Drifted
          <br />
          Off Course
        </h1>

        <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto mt-8">
          The page you're looking for is no longer available, has been moved,
          or the address may be incorrect.
          <br /><br />
          Return to Marine Audit Global to continue exploring our marine
          assurance, vessel inspection and consultancy services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <Link
            href="/"
            className="bg-[#D4AF37] hover:bg-[#E6C34A] text-[#061120] font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Return Home
          </Link>

          <Link
            href="/#request"
            className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061120] font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Request an Inspection
          </Link>

        </div>

      </div>
    </main>
  );
}