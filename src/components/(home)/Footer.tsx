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
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#020202] pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-75 bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-gray-900 border border-white/10 overflow-hidden">
                <Image src="/logo.webp" alt="VS" fill className="object-contain p-1.5" />
              </div>
              <span className="text-xl font-black italic tracking-tighter uppercase">
                Visa<span className="text-red-600">Slide</span>
              </span>
            </Link>
            <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-loose max-w-70">
              Direct processing bridge for Qatar and Bangladesh. 24/7 specialist-led visa infrastructure.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="h-9 w-9 rounded-lg border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Navigation</h4>
<ul className="space-y-4">
  {["Services", "Requirements", "About Us", "Contact Us"].map((item) => (
    <li key={item}>
      <Link 
        // This converts "About Us" to "/about-us" dynamically
        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
        className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-red-500 transition-colors flex items-center justify-between group"
      >
        {item}
        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </li>
  ))}
</ul> 
          </div>

          {/* Contact Details (GCC/BD Focus) */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Regional Hubs</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={16} className="text-red-600 shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Doha, Qatar <br />Global Support Center</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={16} className="text-blue-500" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">support@visaslide.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} className="text-purple-500" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">+974 3022 1975</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8">Application Status</h4>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6 leading-relaxed">
              Track your visa processing directly via email updates.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">
            © {currentYear} VISASLIDE PROCESSING CENTER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Regional Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}