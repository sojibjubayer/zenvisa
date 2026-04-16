"use client";

import { motion } from "framer-motion";
import { 
  Zap, Globe, ArrowRight, ShieldCheck, 
  Layers, Activity, Laptop, Smartphone
} from "lucide-react";
 
export default function AboutClient() {
  return (
    <div className="relative min-h-screen text-white selection:bg-blue-600/40 overflow-hidden bg-[#050505]">
      
      {/* --- Performance Grid & Background Elements --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[50px_50px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-at-t from-blue-900/10 via-transparent to-transparent opacity-60" />
      </div>

      <main className="relative z-10 pt-28 pb-16 px-6 md:px-12 lg:pt-52">
        
        {/* --- Hero: Outbound Focus --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-52">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Activity className="text-blue-500 w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500">
                2026 Digital Outbound Hub
              </span>
              <div className="h-px w-24 bg-linear-to-r from-blue-600 to-transparent" />
            </motion.div>
            
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-12 text-white">
              E-Visa <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-zinc-100 to-zinc-500">
                Direct.
              </span>
            </h2>
            
            <p className="text-zinc-500 text-xs md:text-base font-bold uppercase tracking-[0.3em] leading-relaxed max-w-3xl">
              VisaSlide is an <span className="text-white font-black italic">Automated Gateway</span>. 
              We engineer the infrastructure for **Visit, Tourist, and Business Visit E-Visas**, 
              allowing residents of Qatar and Bangladesh to secure global entry from their own homes.
            </p>
          </div>
        </section>

        {/* --- Service Matrix (Hard-Coded Keywords) --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-52">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl">
            {[
              { 
                t: "Tourist & Visit E-Visas", 
                d: "100% online processing for international leisure travel. No office visits required for Qatar and Bangladesh residents.",
                i: <Globe size={20} />
              },
              { 
                t: "Business Visit Engine", 
                d: "Accelerated digital outbound channels for corporate professionals moving from the GCC/South Asia to global hubs.",
                i: <Zap size={20} />
              },
              { 
                t: "Home-Based Compliance", 
                d: "Proprietary digital auditing protocol ensuring every E-Visa submission meets 2026 embassy standards instantly.",
                i: <Laptop size={20} />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="p-12 bg-black transition-colors"
              >
                <div className="text-blue-500 mb-8">{item.i}</div>
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{item.t}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Apply From Home Logic --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-52">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                 <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-10">
                   From Your Home <br /> <span className="text-blue-500 underline underline-offset-8">To The World.</span>
                 </h3>
                 <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] leading-loose mb-12">
                   Bypass the embassy queues. Our **Doha-Dhaka Technical Node** handles the entire 
                   **Business, Tourist, and Visit** workflow digitally. From document upload to 
                   E-Visa issuance, the engine stays online so you can stay home.
                 </p>
                 <div className="space-y-6">
                    {[
                      "Remote Visit Visa Auditing", 
                      "Business Tourist Fast-Track", 
                      "Digital E-Visa Issuance"
                    ].map((point) => (
                       <div key={point} className="flex items-center gap-4 group">
                          <div className="h-1 w-6 bg-zinc-800 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{point}</span>
                       </div>
                    ))}
                 </div>
             </div>

             {/* UI Visual Element */}
             <div className="relative aspect-square bg-zinc-950 rounded-[40px] border border-white/5 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
                 <div className="flex flex-col items-center gap-6">
                    <Smartphone className="w-16 h-16 text-blue-500/30 animate-pulse" />
                    <div className="text-center px-6">
                      <p className="text-[9px] font-black uppercase tracking-[0.5em] text-blue-500 mb-2">Service Protocol</p>
                      <p className="text-2xl font-black italic uppercase tracking-tighter text-white">100% Remote E-Visa</p>
                    </div>
                 </div>
                 <div className="absolute top-8 left-8 border-l border-t border-white/10 w-8 h-8" />
                 <div className="absolute bottom-8 right-8 border-r border-b border-white/10 w-8 h-8" />
             </div>
           </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="max-w-5xl mx-auto text-center py-20 bg-linear-to-b from-white/5 to-transparent border border-white/5 rounded-[40px] px-6">
          <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-[0.9]">
            Apply Now <br /> <span className="text-blue-500">From Home.</span>
          </h3>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-6 bg-white text-black px-12 py-6 rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 group">
            <span className="text-[11px] font-black uppercase tracking-[0.5em]">Start E-Visa Submission</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </section>

      </main>
    </div>
  );
}

