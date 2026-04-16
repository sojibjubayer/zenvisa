"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Zap,
  ArrowUpRight,
  Globe,
  GanttChartSquare,
} from "lucide-react";

const services = [
  {
    id: "VS-01",
    title: "E-Visa Verification",
    desc: "Smart auditing for digital visa applications. We verify your passport and papers against 2026 embassy standards to guarantee 100% submission accuracy.",
    icon: <FileCheck className="w-6 h-6 text-blue-400" />,
    bg: "bg-blue-500/5",
  },
  {
    id: "VS-02",
    title: "Tourist & Visit Permits",
    desc: "Complete logistics for South Asian professionals and GCC residents. Specialized outbound channels for international Visit and Tourist Visa requirements.",
    icon: <Globe className="w-6 h-6 text-zinc-400" />,
    bg: "bg-white/5",
  },
  {
    id: "VS-03",
    title: "Business Tourist Hub",
    desc: "Expedited processing for high-priority Business Tourist requirements. Our 'Velocity' engine bypasses standard wait times for faster approvals.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    bg: "bg-blue-600/5",
  },
  {
    id: "VS-04",
    title: "Embassy Compliance",
    desc: "24/7 monitoring of real-time shifts in global entry regulations. Our specialists ensure your file follows the latest protocols for Doha & Dhaka.",
    icon: <GanttChartSquare className="w-6 h-6 text-blue-300" />,
    bg: "bg-white/5",
  },
];

export default function ServicesClient() {
  return (
    <div className="relative min-h-screen text-white selection:bg-blue-600/40 overflow-x-hidden bg-black">
      {/* Background UI Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[45px_45px]" />
        <div className="absolute inset-0 bg-radial-at-t from-blue-900/10 via-transparent to-transparent" />
      </div>

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 md:px-10 lg:pt-48">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto mb-16 md:mb-24 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              Authorized Processing Hub 2026
            </span>
            <div className="h-px w-12 md:w-24 bg-linear-to-r from-blue-500 to-transparent" />
          </motion.div>

          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.9] md:leading-[0.8] mb-8 text-white">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-zinc-100 to-zinc-500">
              Visa Engine.
            </span>
          </h2>

          <p className="max-w-xl text-zinc-500 text-[10px] md:text-[12px] font-bold uppercase tracking-widest leading-relaxed">
            Next-generation visa infrastructure for tourists, business
            professionals, and international residents. Direct backend
            integration for Doha & Dhaka processing centers.
          </p>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative flex flex-col h-full rounded-2xl border border-white/5 ${s.bg} p-6 md:p-8 transition-all duration-500 hover:bg-zinc-950 shadow-2xl overflow-hidden`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Top */}
                  <div className="flex justify-between items-start mb-10">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-black flex items-center justify-center border border-white/10 shadow-2xl group-hover:border-blue-500/50 transition-colors shrink-0">
                      {s.icon}
                    </div>
                    <span className="text-4xl md:text-5xl font-black italic text-white/5 group-hover:text-blue-500/10 transition-colors leading-none select-none">
                      {s.id.split('-').pop()}
                    </span>
                  </div>

                  {/* Card Body - Content stretches to push footer down */}
                  <div className="grow">
                    <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tighter mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-zinc-500 text-[10px] md:text-[11px] leading-relaxed font-bold uppercase tracking-widest group-hover:text-zinc-300 mb-8">
                      {s.desc}
                    </p>
                  </div>

                  {/* Card Footer - Locked to bottom */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-700 group-hover:text-zinc-400 transition-colors">
                        Visa Channel Active
                      </span>
                    </div>
                    <div className="h-9 w-9 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all group-hover:text-white text-zinc-500 transform group-hover:rotate-12">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Animated Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}