"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Phone, UtensilsCrossed } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Deep gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e05] via-[#0a0805] to-[#0f0904]" />

        {/* Decorative bokeh orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ember/8 blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gold/6 blur-[100px] animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-saffron/5 blur-[80px] animate-float-slow" />

        {/* Food image placeholder — replace with your actual image */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
      </motion.div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 z-[1] opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #d4a843 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-ember/60" />
          <span className="font-body text-ember text-xs tracking-[0.4em] uppercase">
            Asian Fusion Takeaway · Herräng
          </span>
          <span className="h-px w-12 bg-ember/60" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-cream leading-[0.9] tracking-tight"
        >
          Herräng
          <br />
          <em className="not-italic text-shimmer">Kiosk</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 font-accent text-xl md:text-2xl text-parchment/80 italic font-light tracking-wide"
        >
          Authentic Asian Flavors in the Heart of Herräng
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group flex items-center gap-2.5 bg-ember hover:bg-saffron text-cream font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,96,26,0.5)] hover:scale-105"
          >
            <UtensilsCrossed size={18} />
            View Our Menu
          </a>
          <a
            href="tel:0762729328"
            className="group flex items-center gap-2.5 glass text-cream font-body font-medium text-base px-8 py-4 rounded-full hover:border-ember/30 transition-all duration-300 hover:bg-white/5"
          >
            <Phone size={18} />
            076-272 93 28
          </a>
        </motion.div>

        {/* Floating dishes decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-8 text-mist/40"
        >
          {["Butter Chicken", "·", "Biryani", "·", "Chow Mein", "·", "Fried Rice"].map((t, i) => (
            <span key={i} className={`font-body text-xs tracking-widest uppercase ${t === "·" ? "text-ember/40" : ""}`}>
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-mist/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-ember/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
