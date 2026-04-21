"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Globe2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header className="relative z-50 bg-white px-4  md:px-8 ">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[22px] border border-slate-200 bg-white px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.05)] md:px-6">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-[18px] border border-blue-100 bg-linear-to-br from-blue-50 via-white to-emerald-50 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-blue-200">
              <div className="relative h-7 w-7">
                <Image
                  src="/logo.png"
                  alt="Visa Slide"
                  fill
                  sizes="28px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col leading-none">
              <h1 className="text-[24px] font-black tracking-tight text-slate-900 sm:text-[28px]">
                Visa<span className="text-blue-600">Slide</span>
              </h1>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
                Smart Visa Guide
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActivePath(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-2xl px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition ${
                    active
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-2xl border border-blue-100 bg-blue-50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/login"
              className="hidden h-10 items-center justify-center rounded-xl bg-slate-900 px-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-blue-600 sm:flex"
            >
              Login
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition lg:hidden ${
                isOpen
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white px-6 pb-6 pt-24 lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
                  Navigation
                </p>
                <div className="mt-2 h-px w-10 bg-slate-200" />
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link, index) => {
                  const active = isActivePath(link.href);

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-2xl font-black tracking-tight transition ${
                          active
                            ? "border-blue-100 bg-blue-50 text-blue-700"
                            : "border-transparent text-slate-800 hover:border-slate-100 hover:bg-slate-50"
                        }`}
                      >
                        <span>{link.name}</span>
                        {active && <ArrowRight className="h-5 w-5 text-blue-600" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto space-y-4 pt-6">
                <Link
                  href="/login"
                  className="flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-blue-600"
                >
                  Login
                </Link>

                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-slate-400" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Global Assistance
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}