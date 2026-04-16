"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-900 bg-[#020202] pt-20 pb-10 overflow-hidden">
      {/* Subtle Glow - Changed to Blue to match brand consistency */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-75 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              {/* FIXED LOGO CONTAINER */}
              <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors group-hover:border-blue-500/50">
                <div className="relative h-6 w-6">
                   <Image
                    src="/logo.png"
                    alt="VisaSlide Logo"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-black italic tracking-tighter uppercase text-white">
                Visa<span className="text-blue-600">Slide</span>
              </span>
            </Link>
            
            <div className="space-y-2">
              <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-loose max-w-72">
                The digital processing infrastructure for international mobility. 
                Specializing in GCC and European outbound logistics.
              </p>
              {/* SISTER CONCERN CREDIT */}
              <div className="flex items-center gap-2 pt-2">
                <ShieldCheck size={12} className="text-blue-500" />
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
                  A Sister Concern of <span className="text-zinc-200">WMIBC Global</span>
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">
              System Navigation
            </h4>
            <ul className="space-y-4">
              {["Services","About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-colors flex items-center justify-between group"
                  >
                    {item}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

{/* Contact Details */}
<div>
  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">
    Regional Hubs
  </h4>
  <ul className="space-y-6">
    {/* Doha HQ */}
    <li className="flex items-start gap-4 group">
      <MapPin size={16} className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
      <div className="flex flex-col">
        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-200">
          Doha, Qatar
        </span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
          Global Strategic HQ
        </span>
      </div>
    </li>

    {/* Dinajpur Office */}
    <li className="flex items-start gap-4 group">
      <MapPin size={16} className="text-zinc-600 shrink-0 group-hover:text-blue-500 transition-colors" />
      <div className="flex flex-col">
        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-200">
          Dinajpur, BD
        </span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
          Regional Operations Base
        </span>
      </div>
    </li>

    {/* Global Contact */}
    <li className="pt-2 space-y-3 border-t border-zinc-900/50">
      <div className="flex items-center gap-4">
        <Mail size={14} className="text-zinc-600" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 cursor-pointer transition-colors">
          support@visaslide.com
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Phone size={14} className="text-zinc-600" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          +974 3022 1975
        </span>
      </div>
    </li>
  </ul>
</div>

          {/* Action */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">
              Enterprise Support
            </h4>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-6 leading-relaxed">
              For corporate immigration inquiries via WMIBC, please use our secure portal.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>© {currentYear} VISASLIDE PROCESSING CENTER.</p>
            <p className="text-zinc-800">Part of World Multinational Immigration & Business Consultancy</p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}