"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Leaf, Clock, MapPin, Flame } from "lucide-react";

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

      <div className="max-w-4xl mx-auto px-6">
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
    </section>
  );
}
