"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Clock, CheckCircle, ArrowRight, X, 
  FileText, CreditCard, ShieldCheck, ChevronRight 
} from "lucide-react";

interface Destination {
  id: number;
  name: string;
  image: string;
  success: string;
  date: string;
  gradient: string;
  docs: string[];
}

const destinations: Destination[] = [
  { id: 1, name: "Switzerland", image: "https://i.ibb.co/DH3wmxW4/bea61-europe-7128531-640.jpg", success: "750+", date: "15 Sep", gradient: "from-white/10", docs: ["Schengen Form", "Flight Booking", "Hotel Voucher", "Salary Certificate"] },
  { id: 2, name: "Italy", image: "https://i.ibb.co/bMyx3pHD/italy.jpg", success: "1.2K+", date: "10 Sep", gradient: "from-brand-lavender/30", docs: ["Schengen Form", "Insurance", "Bank Statement (6 Months)", "NOC Letter"] },
  { id: 3, name: "France", image: "https://i.ibb.co/tpjBv8kg/france.jpg", success: "1.5K+", date: "09 Sep", gradient: "from-brand-violet/40", docs: ["Schengen Form", "Passport Copy", "2 Photos (White BG)", "Travel Insurance"] },
  { id: 4, name: "Spain", image: "https://i.ibb.co/NgfMRMJx/elg21-city-6558404-640-1.jpg", success: "950+", date: "12 Sep", gradient: "from-yellow-500/10", docs: ["Schengen Form", "Flight Itinerary", "Proof of Accommodation", "Bank Statement"] },
  { id: 5, name: "India", image: "https://i.ibb.co/Ld22Rwyj/ruthiesartcreations-taj-mahal-5519945-640.jpg", success: "2K+", date: "05 Sep", gradient: "from-orange-500/20", docs: ["E-Visa Form", "Passport Scan", "Digital Photo", "Invite Letter"] },
  { id: 6, name: "Malaysia", image: "https://i.ibb.co/bjD4gcdB/malaysia.jpg", success: "1.1K+", date: "08 Sep", gradient: "from-blue-500/20", docs: ["Digital Visa Form", "Passport Copy", "Flight Ticket", "Hotel Confirmation"] },
  { id: 7, name: "Thailand", image: "https://i.ibb.co/Kxz8dcQ2/thailand.jpg", success: "3K+", date: "04 Sep", gradient: "from-red-500/20", docs: ["Arrival Card", "Bank Balance", "Flight Return", "Passport Scan"] },
  { id: 8, name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop", success: "900+", date: "02 Sep", gradient: "from-brand-sky/30", docs: ["IMUGA Form", "Hotel Booking", "Return Ticket", "Health Declaration"] },
];

export default function ZenVisasFullPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Destination | null>(null);
  const [navSelection, setNavSelection] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration fix: ensures client and server start with the same HTML shell
  if (!mounted) {
    return <div className="min-h-screen bg-[#0F0817]" />;
  }

  const handleProceed = () => {
    if (navSelection) {
      router.push(`/visa/${navSelection.toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen pb-10 bg-brand-dark text-white font-sans selection:bg-pink-500/30" suppressHydrationWarning>
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] rounded-xl flex items-center justify-center font-black shadow-lg shadow-pink-500/20 text-white text-lg md:text-xl">Z</div>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">VisaSlide</span>
          </div>
          <button className="hidden sm:block bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-all">
            Join Platform
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden pt-12 md:pt-24 pb-16 md:pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/2154SDfD/hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 md:opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-dark via-transparent to-brand-dark" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-sky" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-brand-sky">Visit Visa Simplified</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] md:leading-[0.9]">
            World Travel, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1]">Redefined.</span>
          </h1>
          
          <div className="mt-8 bg-white/5 p-2 md:p-3 rounded-3xl md:rounded-4xl border border-white/10 flex flex-col md:flex-row gap-2 md:gap-3 max-w-2xl mx-auto shadow-2xl backdrop-blur-xl">
            <div className="flex-1 relative">
              <select 
                value={navSelection}
                onChange={(e) => setNavSelection(e.target.value)}
                className="w-full bg-brand-dark md:bg-transparent text-white p-4 rounded-2xl md:rounded-3xl border border-white/10 md:border-none outline-none appearance-none cursor-pointer font-bold text-sm md:text-base"
              >
                <option value="" disabled>Where are you going?</option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.name} className="bg-brand-dark text-white">
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
              className="w-full md:w-auto md:px-10 py-4 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] rounded-2xl md:rounded-3xl font-black text-base md:text-lg shadow-xl active:scale-95 transition-all disabled:opacity-30 flex items-center justify-center gap-2 text-white"
            >
              Proceed <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- POPULAR SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-xl md:text-4xl font-black uppercase tracking-tighter shrink-0">Popular</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {destinations.map((country) => (
            <div 
              key={country.id} 
              onClick={() => setSelectedCountry(country)}
              className="group cursor-pointer relative aspect-4/5 sm:aspect-auto sm:min-h-100 rounded-4xl md:rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-brand-violet shadow-xl"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={country.image} 
                  alt={country.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-dark/20 to-brand-dark z-1" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <div className="absolute top-4 right-4 md:top-5 md:right-5 bg-brand-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-brand-sky" />
                  <span className="text-[9px] font-black tracking-widest uppercase">{country.success} Done</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-1 group-hover:text-brand-sky transition-colors leading-tight">
                  {country.name}
                </h3>
                
                <div className="flex items-center gap-2 text-brand-sky font-bold text-xs md:text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-wide">Get on {country.date}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                   <span className="text-[9px] font-black uppercase tracking-widest text-brand-lavender">View Requirements</span>
                   <ArrowRight className="w-3 h-3 text-brand-sky" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 pt-16 border-t border-white/5 mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-7 h-7 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] rounded-lg flex items-center justify-center font-black text-xs text-white">Z</div>
              <span className="text-lg font-black uppercase tracking-tighter">VisaSlide</span>
            </div>
            <p className="text-brand-lavender text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Simplified visa processing for Qatar residents. Secure, fast, and transparent service for global travel.
            </p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-sky text-[10px] mb-4">Support</h4>
            <div className="flex flex-col gap-3 text-sm font-bold text-brand-lavender">
              <span className="hover:text-white cursor-pointer transition">Help Center</span>
              <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-sky text-[10px] mb-4">Legal</h4>
            <div className="flex flex-col gap-3 text-sm font-bold text-brand-lavender">
              <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition">Cookie Policy</span>
            </div>
          </div>
        </div>
        <div className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-white/20 pb-8">
          © 2026 ZenVisas Doha, Qatar
        </div>
      </footer>

    {/* --- MODERN MODAL --- */}
{selectedCountry && (
  <div className="fixed inset-0 z-100 flex items-end md:items-center justify-center p-0 md:p-4">
    {/* Ultra-dark backdrop with heavy blur */}
    <div 
      className="fixed inset-0 bg-brand-dark/40 backdrop-blur-2xl animate-in fade-in duration-500" 
      onClick={() => setSelectedCountry(null)} 
    />
    
    <div className="relative w-full max-w-xl bg-white/[0.03] border border-white/10 md:rounded-[3rem] rounded-t-[3rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden animate-in slide-in-from-bottom-10 duration-500 flex flex-col">
      
      {/* Decorative Gradient Glow behind content */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-violet/20 blur-[100px] pointer-events-none" />
      
      {/* 1. Header with integrated close */}
      <div className="relative p-8 pb-4 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-sky">Visa Details</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter italic">
            {selectedCountry.name}
          </h3>
        </div>
        <button 
          onClick={() => setSelectedCountry(null)} 
          className="group p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all active:scale-90 border border-white/5"
        >
          <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
        </button>
      </div>

      <div className="p-8 pt-0 space-y-6">
        {/* 2. Fee Bento Box (Glass Style) */}
        <div className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] p-6 transition-all hover:border-brand-violet/50">
          <div className="flex justify-between items-end relative z-10">
            <div>
              <p className="text-[10px] font-black uppercase text-brand-lavender tracking-widest mb-3 opacity-60">Application Fee</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black tracking-tighter">499</span>
                <span className="text-sm font-bold text-brand-sky uppercase">QAR</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-linear-to-br from-brand-violet to-[#FF7BAC] rounded-2xl flex items-center justify-center shadow-lg shadow-brand-violet/20">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
          </div>
          {/* Subtle background text */}
          <span className="absolute -bottom-2 -right-2 text-6xl font-black text-white/[0.02] select-none uppercase">Visa</span>
        </div>

        {/* 3. Document Checklist (Simplified) */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-lavender pl-1">Required Dossier</h4>
          <div className="grid gap-2">
            {selectedCountry.docs.map((doc, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 p-4 rounded-2xl transition-colors group/item">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:text-brand-sky transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold tracking-tight text-white/80">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Action Area */}
        <div className="pt-4 relative">
          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] blur-2xl opacity-20" />
          
          <button 
            onClick={() => router.push(`/visa/${selectedCountry.name.toLowerCase()}`)}
            className="relative w-full bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] py-5 rounded-4xl font-black text-lg shadow-xl flex items-center justify-center gap-3 hover:shadow-pink-500/20 active:scale-[0.98] transition-all group"
          >
            Start Application 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center text-[10px] text-brand-lavender/40 mt-4 uppercase font-bold tracking-widest">
            Estimated Processing: 3-5 Working Days
          </p>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}