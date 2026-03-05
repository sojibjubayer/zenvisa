import { Search, Globe, Clock, CheckCircle, ArrowRight, Menu } from "lucide-react";

const destinations = [
  { id: 1, name: "France", success: "1K+", date: "09 Sep", gradient: "from-brand-violet/40" },
  { id: 2, name: "Greece", success: "800+", date: "12 Sep", gradient: "from-brand-sky/30" },
  { id: 3, name: "Italy", success: "1.2K+", date: "10 Sep", gradient: "from-brand-lavender/30" },
  { id: 4, name: "Spain", success: "950+", date: "15 Sep", gradient: "from-pink-500/20" },
];

export default function MobileFriendlyLanding() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-violet">
      {/* Navigation - Sticky for better mobile UX */}
      <nav className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 p-4 md:p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] rounded-lg md:rounded-xl flex items-center justify-center font-black shadow-lg shadow-pink-500/20">Z</div>
          <span className="text-xl md:text-2xl font-black tracking-tighter">ZENVISAS</span>
        </div>
        
        {/* Mobile Menu Icon (Visible on small screens) */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-brand-lavender" />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-6 items-center">
          <button className="text-sm font-bold text-brand-lavender hover:text-white transition">Login</button>
          <button className="bg-brand-violet px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-violet/20 hover:scale-105 transition">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section - Padding adjusted for mobile */}
      <section className="max-w-5xl mx-auto px-6 pt-12 md:pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-[1.1]">
          Visa applications, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1]">simplified.</span>
        </h1>
        <p className="text-brand-lavender text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto font-medium px-4">
          Calculate requirements, upload documents, and track your application in one secure place.
        </p>

        {/* Mobile Optimized Search - Stacked on mobile, row on desktop */}
        <div className="bg-white/5 p-2 rounded-3xl md:rounded-4xl border border-white/10 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto shadow-2xl">
          <div className="flex-[2] flex items-center gap-3 md:gap-4 bg-brand-dark/40 p-4 rounded-2xl md:rounded-3xl border border-white/5">
            <Globe className="text-brand-sky w-5 h-5 md:w-6 md:h-6" />
            <input 
              className="bg-transparent outline-none w-full text-base md:text-lg placeholder:text-white/20" 
              placeholder="Where are you going?" 
            />
          </div>
          <button className="w-full md:w-auto md:flex-1 bg-linear-to-r from-[#FF7BAC] to-[#FF4CA1] py-4 rounded-2xl md:rounded-3xl font-black text-base md:text-lg shadow-xl shadow-pink-500/20 active:scale-95 transition">
            Check Now
          </button>
        </div>
      </section>

      {/* Destination Grid - Responsive columns */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter shrink-0">Popular</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((country) => (
            <div key={country.id} className="group cursor-pointer">
              {/* Card Container - aspect-4/5 and rounded-4xl maintained */}
              <div className={`relative aspect-4/5 rounded-4xl overflow-hidden bg-linear-to-b ${country.gradient} to-brand-dark border border-white/10 group-hover:border-brand-violet/50 transition-all duration-500`}>
                
                {/* Highlight Badge - Smaller on mobile */}
                <div className="absolute top-4 right-4 md:top-5 md:right-5 z-10 bg-brand-dark/90 backdrop-blur-md px-3 md:px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand-sky" />
                  <span className="text-[9px] md:text-[10px] font-black tracking-widest uppercase">{country.success} On Time</span>
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 group-hover:text-brand-sky transition-colors">{country.name}</h3>
                  <div className="flex items-center gap-2 text-brand-sky font-bold mb-4 md:mb-6">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="text-[12px] md:text-sm uppercase tracking-wide">Get on {country.date}</span>
                  </div>
                  
                  {/* Processing Speed Bar */}
                  <div className="flex items-center gap-4">
                    <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-violet w-4/5 rounded-full" />
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-violet transition-colors">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-[10px] md:text-sm uppercase tracking-widest font-bold text-brand-lavender">
          © 2026 ZenVisas. Secure & Automated.
        </p>
      </footer>
    </div>
  );
}