"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Flame, Leaf, Clock, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Bold Spices",
    body: "Each dish crafted with hand-selected spices and traditional recipes passed down through generations.",
  },
  {
    icon: Leaf,
    title: "Fresh Daily",
    body: "Every order prepared fresh. No frozen shortcuts — only real ingredients, real flavors.",
  },
  {
    icon: Clock,
    title: "Quick Takeaway",
    body: "Gourmet flavors with the speed and convenience you need. Hot, fast, and ready to go.",
  },
  {
    icon: MapPin,
    title: "Local Heart",
    body: "Proudly serving the Herräng community. Your neighborhood Asian kitchen.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-ember/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] img-zoom">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e05] to-[#2d1505]" />
              {/* Replace with: <Image src="/images/about-main.jpg" fill alt="Our kitchen" className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-ember/20 border border-ember/30 flex items-center justify-center mx-auto mb-4">
                    <Flame size={40} className="text-ember" />
                  </div>
                  <p className="font-accent text-cream/40 italic text-sm">
                    Place your food photo here
                  </p>
                  <p className="font-body text-mist/30 text-xs mt-1">
                    /public/images/about-main.jpg
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-warm rounded-2xl px-6 py-4 border border-gold/20"
            >
              <p className="font-display text-4xl font-bold text-gold">10+</p>
              <p className="font-body text-xs text-mist uppercase tracking-widest mt-1">
                Signature Dishes
              </p>
            </motion.div>

            {/* Accent corner tag */}
            <div className="absolute -top-4 -left-4 bg-ember text-cream font-body text-xs uppercase tracking-widest px-4 py-2 rounded-full">
              Since 2020
            </div>
          </motion.div>

          {/* Right: text */}
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Where Asia Meets"
              titleHighlight="Scandinavia"
              centered={false}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 space-y-5 text-mist leading-relaxed font-body"
            >
              <p className="text-parchment/80 text-lg font-light italic font-accent">
                "Freshly prepared Asian fusion dishes made with rich spices, bold flavors, and authentic recipes served in the heart of Herräng."
              </p>
              <p>
                At Herräng Kiosk, we believe great food tells a story. Our kitchen blends the vibrant culinary traditions of South and East Asia with the fresh, honest simplicity of Scandinavian values.
              </p>
              <p>
                Every curry simmers slowly, every biryani is layered with care, and every noodle dish carries the warmth of a home kitchen. This isn&apos;t fast food — it&apos;s fast, <em>flavorful</em> food.
              </p>
            </motion.div>

            {/* Pillars grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-4 hover:border-ember/20 transition-all duration-300 group"
                >
                  <p.icon size={20} className="text-ember mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-body font-semibold text-cream text-sm mb-1">{p.title}</h3>
                  <p className="font-body text-mist text-xs leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
