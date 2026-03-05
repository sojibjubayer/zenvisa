"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, Globe, Clock, CheckCircle, 
  ArrowRight, X, FileText, CreditCard, 
  ShieldCheck, MapPin, ChevronRight 
} from "lucide-react";

const destinations = [
  { id: 1, name: "Switzerland", success: "750+", date: "15 Sep", gradient: "from-white/10", docs: ["Schengen Form", "Flight Booking", "Hotel Voucher", "Salary Certificate"] },
  { id: 2, name: "Italy", success: "1.2K+", date: "10 Sep", gradient: "from-brand-lavender/30", docs: ["Schengen Form", "Insurance", "Bank Statement (6 Months)", "NOC Letter"] },
  { id: 3, name: "France", success: "1.5K+", date: "09 Sep", gradient: "from-brand-violet/40", docs: ["Schengen Form", "Passport Copy", "2 Photos (White BG)", "Travel Insurance"] },
  { id: 4, name: "Spain", success: "950+", date: "12 Sep", gradient: "from-yellow-500/10", docs: ["Schengen Form", "Flight Itinerary", "Proof of Accommodation", "Bank Statement"] },
  { id: 5, name: "India", success: "2K+", date: "05 Sep", gradient: "from-orange-500/20", docs: ["E-Visa Form", "Passport Scan", "Digital Photo", "Invite Letter"] },
  { id: 6, name: "Malaysia", success: "1.1K+", date: "08 Sep", gradient: "from-blue-500/20", docs: ["Digital Visa Form", "Passport Copy", "Flight Ticket", "Hotel Confirmation"] },
  { id: 7, name: "Thailand", success: "3K+", date: "04 Sep", gradient: "from-red-500/20", docs: ["Arrival Card", "Bank Balance", "Flight Return", "Passport Scan"] },
  { id: 8, name: "Maldives", success: "900+", date: "02 Sep", gradient: "from-brand-sky/30", docs: ["IMUGA Form", "Hotel Booking", "Return Ticket", "Health Declaration"] },
];

export default function ZenVisasFullPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<typeof destinations[0] | null>(null);
  const [navSelection, setNavSelection] = useState("");

  const handleProceed = () => {
    if (navSelection) {
      // Navigates to /visa/switzerland, /visa/india, etc.
      router.push(`/visa/${navSelection.toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-brand-dark text-white">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-40 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] rounded-xl flex items-center justify-center font-black shadow-lg shadow-pink-500/20">Z</div>
            <span className="text-2xl font-black tracking-tighter uppercase">ZenVisas</span>
          </div>
          <button className="bg-brand-violet px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-all">
            Join Platform
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
          <ShieldCheck className="w-4 h-4 text-brand-sky" />
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-sky text-center">Visit Visa Application Simplified.</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
          World Travel, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1]">Redefined.</span>
        </h1>
        
        {/* CORRECTED SELECTOR BOX */}
        <div className="mt-8 bg-white/5 p-3 rounded-3xl md:rounded-4xl border border-white/10 flex flex-col md:flex-row gap-3 max-w-2xl mx-auto shadow-2xl backdrop-blur-md">
          <div className="flex-1 relative">
            <select 
              value={navSelection}
              onChange={(e) => setNavSelection(e.target.value)}
              className="w-full bg-brand-dark text-white p-4 rounded-2xl md:rounded-3xl border border-white/5 outline-none appearance-none cursor-pointer font-bold focus:border-brand-violet/50 transition-colors"
            >
              <option value="" disabled>Where are you going?</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.name} className="bg-brand-dark">
                  {d.name}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-sky">
              <ChevronRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
          <button 
            onClick={handleProceed}
            disabled={!navSelection}
            className="md:px-10 py-4 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] rounded-2xl md:rounded-3xl font-black text-lg shadow-xl active:scale-95 transition-all disabled:opacity-30 flex items-center justify-center gap-2"
          >
            Proceed <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* --- POPULAR SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter shrink-0">Popular</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((country) => (
            <div 
              key={country.id} 
              onClick={() => setSelectedCountry(country)}
              className="group cursor-pointer relative min-h-[400px]"
            >
              <div className={`absolute inset-0 rounded-4xl overflow-hidden bg-linear-to-b ${country.gradient} to-brand-dark border border-white/10 group-hover:border-brand-violet transition-all duration-500 flex flex-col justify-end p-8`}>
                <div className="absolute top-5 right-5 z-10 bg-brand-dark/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-sky" />
                  <span className="text-[10px] font-black tracking-widest uppercase">{country.success} Done</span>
                </div>
                <h3 className="text-3xl font-black mb-2 group-hover:text-brand-sky transition-colors">{country.name}</h3>
                <div className="flex items-center gap-2 text-brand-sky font-bold">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm uppercase tracking-wide">Get on {country.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 pt-20 pb-10 border-t border-white/5 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] rounded-lg flex items-center justify-center font-black">Z</div>
              <span className="text-xl font-black uppercase tracking-tighter">ZenVisas</span>
            </div>
            <p className="text-brand-lavender max-w-sm">Simplified visa processing for Qatar residents. Secure, fast, and transparent.</p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-sky text-[10px] mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-bold text-brand-lavender">
              <li className="hover:text-white cursor-pointer transition">Help Center</li>
              <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-sky text-[10px] mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-brand-lavender">
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/20">© 2026 ZenVisas Doha, Qatar</p>
      </footer>

      {/* --- MODAL --- */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-brand-dark/90 backdrop-blur-xl" onClick={() => setSelectedCountry(null)} />
          <div className="relative w-full max-w-2xl bg-[#1A1128] border-t md:border border-white/10 rounded-t-[3rem] md:rounded-[3rem] p-8 md:p-10 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">{selectedCountry.name}</h3>
              <button onClick={() => setSelectedCountry(null)} className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition"><X /></button>
            </div>
            <div className="bg-linear-to-br from-brand-violet/20 via-brand-violet/5 to-transparent p-6 rounded-4xl border border-brand-violet/30 mb-8 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-violet rounded-2xl flex items-center justify-center shadow-lg"><CreditCard /></div>
                <div>
                  <p className="text-[10px] uppercase font-black text-brand-lavender tracking-widest mb-1">Fee</p>
                  <p className="text-3xl font-black">499 QAR</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase text-brand-sky tracking-widest">Visa + Service Fee</span>
            </div>
            <button 
              onClick={() => router.push(`/visa/${selectedCountry.name.toLowerCase()}`)}
              className="w-full bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] py-5 rounded-4xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Start Application <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}