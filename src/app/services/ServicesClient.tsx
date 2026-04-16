"use client";

import { motion } from "framer-motion";
import { 
  FileCheck, Zap, 
  ArrowUpRight, Globe, ShieldCheck, 
  GanttChartSquare 
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Document Auditing",
    desc: "Multi-tier verification protocol ensuring 100% compliance with 2026 global entry standards for Doha & Dhaka departures.",
    icon: <FileCheck className="w-6 h-6 text-blue-400" />,
    bg: "bg-blue-500/5"
  },
  {
    id: "02",
    title: "Regional Logistics",
    desc: "Optimized outbound channels for GCC residents and Bangladeshi professionals seeking international mobility.",
    icon: <Globe className="w-6 h-6 text-gray-400" />,
    bg: "bg-white/5"
  },
  {
    id: "03",
    title: "Velocity Processing",
    desc: "Expedited handling for urgent business and visit requirements, bypassing standard timeline bottlenecks.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    bg: "bg-blue-600/5"
  },
  {
    id: "04",
    title: "Compliance Desk",
    desc: "24/7 specialist oversight monitoring real-time shifts in global embassy protocols and entry regulations.",
    icon: <GanttChartSquare className="w-6 h-6 text-blue-300" />,
    bg: "bg-white/5"
  },
];

export default function ServicesClient() {
  return (
    <div className="relative min-h-screen text-white selection:bg-blue-600/40 overflow-hidden">
      
      {/* Background UI Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[45px_45px]" />
        <div className="absolute inset-0 bg-radial-at-t from-blue-900/10 via-transparent to-transparent" />
      </div>

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-10 lg:pt-48">
        
        {/* Header Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Premium Outbound Intelligence 2026</span>
            <div className="h-px w-24 bg-linear-to-r from-blue-500 to-transparent" />
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-10">
            Velocity <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-100 via-blue-100 to-gray-600">
              Architecture.
            </span>
          </h2>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative h-112.5 rounded-2xl border border-white/5 ${s.bg} p-10 transition-all duration-500 hover:bg-gray-950 shadow-2xl overflow-hidden`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-16">
                    <div className="h-14 w-14 rounded-2xl bg-black flex items-center justify-center border border-white/10 shadow-2xl group-hover:border-blue-500/50 transition-colors">
                      {s.icon}
                    </div>
                    <span className="text-6xl font-black italic text-white/5 group-hover:text-blue-500/10 transition-colors leading-none">
                      {s.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[10px] leading-relaxed mb-10 font-bold uppercase tracking-[0.15em] group-hover:text-gray-300">
                    {s.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-700 group-hover:text-white transition-colors">
                        Active Channel
                      </span>
                    </div>
                    <div className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all group-hover:text-white text-gray-500 transform group-hover:rotate-12">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}