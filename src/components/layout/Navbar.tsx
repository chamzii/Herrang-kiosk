"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 rounded-full bg-ember opacity-20 group-hover:opacity-40 transition-opacity" />
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                <circle cx="16" cy="16" r="15" stroke="#C41E3A" strokeWidth="1" />
                <path d="M10 22 Q16 8 22 22" stroke="#C8A84B" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="12" r="2" fill="#C41E3A" />
              </svg>
            </div>
            <div>
              <span className="font-display text-cream text-lg font-bold tracking-wide block leading-none">
                Herräng
              </span>
              <span className="font-body text-ember text-[10px] tracking-[0.25em] uppercase">
                Kiosk
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm tracking-wide text-mist hover:text-cream transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ember group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0762729328"
              className="hidden md:flex items-center gap-2 text-sm font-body text-cream bg-ember/90 hover:bg-ember px-4 py-2 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(200,96,26,0.4)]"
            >
              <Phone size={14} />
              Call to Order
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-cream p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12 bg-ink/97 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="font-display text-3xl text-cream/80 hover:text-cream py-3 border-b border-white/5 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="tel:0762729328"
              className="mt-10 flex items-center justify-center gap-3 bg-ember text-cream font-body text-lg py-4 rounded-2xl"
            >
              <Phone size={18} />
              076-272 93 28
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
