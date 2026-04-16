"use client";

import { motion } from "framer-motion";
import { 
  Zap, Globe, ArrowRight, ShieldCheck, 
  Cpu, Network, Fingerprint, Layers
} from "lucide-react";

export default function AboutClient() {
  return (
    <div className="relative min-h-screen text-white selection:bg-blue-600/40 overflow-hidden">
      
      {/* --- Performance Grid --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-at-t from-blue-900/15 via-transparent to-transparent opacity-60" />
      </div>

      <main className="relative z-10 pt-28 pb-16 px-6 md:px-12 lg:pt-52">
        
        {/* --- Hero: The Digital Gateway --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-52">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500">
                Precision Outbound Intelligence
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-transparent" />
            </motion.div>
            
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-12">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-500">
                Boundaries.
              </span>
            </h2>
            
            <p className="text-gray-500 text-sm md:text-lg font-bold uppercase tracking-[0.3em] leading-relaxed max-w-3xl">
              VisaSlide is a **Digital Outbound Engine**. Operating across the **Doha-Dhaka corridor**, we provide a high-performance infrastructure for global mobility, engineered for the elite residents of the GCC and South Asia.
            </p>
          </div>
        </section>

        {/* --- The Triple-Audit Protocol --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-52">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5 overflow-hidden rounded-sm">
            {[
              { 
                t: "Algorithmic Verification", 
                d: "Our proprietary 2026 auditing protocol ensures 100% file accuracy before digital submission.",
                i: <Cpu size={20} />
              },
              { 
                t: "Velocity Architecture", 
                d: "Optimized digital pipelines designed for instant visit and business visa issuance.",
                i: <Zap size={20} />
              },
              { 
                t: "Encrypted Settlement", 
                d: "Integrated secure payment gateways specialized for regional and international transactions.",
                i: <Fingerprint size={20} />
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="p-12 bg-black transition-colors border-r border-white/5 last:border-r-0"
              >
                <div className="text-blue-500 mb-8">{item.i}</div>
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{item.t}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- The Operational Advantage (Attractive Presence) --- */}
        <section className="max-w-7xl mx-auto mb-32 md:mb-52">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-10">
                    Regional Focus. <br /> <span className="text-blue-500">Cloud Driven.</span>
                 </h3>
                 <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] leading-loose mb-12">
                    By unifying our **Doha Strategic Center** with our **Bangladesh Operational Hub**, we’ve created a seamless corridor that manages the world’s most complex travel requirements in a 100% virtual environment.
                 </p>
                 <div className="space-y-6">
                    {["Doha Strategic Command", "Dhaka Technical Hub", "GCC Wide Delivery"].map((point) => (
                       <div key={point} className="flex items-center gap-4 group">
                          <div className="h-1 w-6 bg-blue-900 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest">{point}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Attractive UI Visual */}
              <div className="relative aspect-video lg:aspect-square bg-gray-950 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-radial-at-br from-blue-600/10 to-transparent" />
                 <Layers className="w-24 h-24 text-blue-500/20 animate-pulse" />
                 <div className="absolute bottom-10 left-10">
                    <p className="text-[8px] font-black uppercase tracking-[0.5em] text-blue-500">Core Network</p>
                    <p className="text-2xl font-black italic uppercase tracking-tighter">GCC & South Asia</p>
                 </div>
              </div>
           </div>
        </section>

        {/* --- Elite CTA --- */}
        <section className="max-w-5xl mx-auto text-center py-20 bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-[40px] px-6">
          <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-[0.9]">
            The World Is <br /> <span className="text-blue-500">Always Online.</span>
          </h3>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-6 bg-white text-black px-12 py-6 rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 group">
            <span className="text-[11px] font-black uppercase tracking-[0.5em]">Initiate Audit</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </section>

      </main>
    </div>
  );
}