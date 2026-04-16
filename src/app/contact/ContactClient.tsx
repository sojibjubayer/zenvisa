"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowUpRight, 
  Clock, 
  Globe 
} from "lucide-react";

const contactMethods = [
  {
    label: "Strategic Command",
    value: "+974 3022 1975",
    href: "tel:+97430221975",
    icon: <Phone className="w-5 h-5" />,
    subtext: "Priority Mobile Uplink"
  },
  {
    label: "Operational Desk",
    value: "+974 4029 8070",
    href: "tel:+97440298070",
    icon: <Phone className="w-5 h-5" />,
    subtext: "Landline Infrastructure"
  },
  {
    label: "Digital Correspondence",
    value: "support@visaslide.com",
    href: "mailto:support@visaslide.com",
    icon: <Mail className="w-5 h-5" />,
    subtext: "24/7 Encryption Secured"
  }
];

export default function ContactClient() {
  return (
    <div className="relative min-h-screen text-white selection:bg-blue-600/40 overflow-hidden">
      
      {/* --- Performance Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[50px_50px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-at-t from-blue-900/20 via-transparent to-transparent opacity-60" />
      </div>

      <main className="relative z-10 pt-32 pb-16 px-6 md:px-12 lg:pt-52">
        
        {/* --- Header --- */}
        <section className="max-w-7xl mx-auto mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Global Connectivity</span>
            <div className="h-px w-20 bg-blue-500/50" />
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-12">
            Priority <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-gray-500">
              Access.
            </span>
          </h2>
          
          <p className="text-gray-500 text-xs md:text-base font-bold uppercase tracking-[0.3em] leading-loose max-w-2xl">
            Our **Doha-based Intelligence Desk** is active 24/7 to manage your outbound logistics. Connect with our specialists for immediate file auditing and protocol guidance.
          </p>
        </section>

        {/* --- Contact Grid (Mobile Stacked) --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 md:p-16 bg-black hover:bg-gray-950 transition-all duration-500 flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 mb-2">
                  {method.label}
                </span>
                
                <h3 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase mb-2 group-hover:text-blue-400 transition-colors">
                  {method.value}
                </h3>
                
                <p className="text-[8px] font-bold uppercase tracking-widest text-gray-700">
                  {method.subtext}
                </p>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="text-blue-500" size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* --- Operational Status --- */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-16 border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="h-12 w-12 rounded-full border border-blue-500/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">Intelligence Desk Status</p>
              <p className="text-xl font-black italic uppercase tracking-tighter text-blue-500">Live & Operational</p>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="text-center md:text-right">
              <Clock className="mb-2 text-gray-700 ml-auto" size={16} />
              <p className="text-[8px] font-black uppercase tracking-widest text-gray-500">Response Latency</p>
              <p className="text-[10px] font-black uppercase tracking-widest">&lt; 15 Minutes</p>
            </div>
            <div className="text-center md:text-right">
              <Globe className="mb-2 text-gray-700 ml-auto" size={16} />
              <p className="text-[8px] font-black uppercase tracking-widest text-gray-500">Market Coverage</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-white">GCC | South Asia</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}