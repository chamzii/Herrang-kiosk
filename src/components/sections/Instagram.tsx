"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const INSTAGRAM_HANDLE = "herrangkiosk"; // update when confirmed

const placeholderCards = [
  { bg: "from-orange-900/60 to-amber-950/80", emoji: "🍛" },
  { bg: "from-red-900/60 to-orange-950/80", emoji: "🫙" },
  { bg: "from-amber-900/60 to-yellow-950/80", emoji: "🥢" },
  { bg: "from-cyan-900/60 to-blue-950/80", emoji: "🦑" },
  { bg: "from-lime-900/60 to-emerald-950/80", emoji: "🍚" },
  { bg: "from-orange-900/60 to-red-950/80", emoji: "🥟" },
];

export default function InstagramSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gold/4 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10"
        >
          <div>
            <p className="font-body text-ember text-xs tracking-[0.3em] uppercase mb-2">Social</p>
            <h2 className="font-display text-cream text-4xl font-bold">
              Follow Our <em className="not-italic text-gold">Journey</em>
            </h2>
            <p className="font-body text-mist mt-2 text-sm">
              Daily food photos, behind the scenes and specials — @{INSTAGRAM_HANDLE}
            </p>
          </div>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass border border-white/10 hover:border-ember/30 text-cream font-body text-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/5 shrink-0"
          >
            <Instagram size={16} className="text-ember" />
            @{INSTAGRAM_HANDLE}
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {placeholderCards.map((card, i) => (
            <motion.a
              key={i}
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.04 }}
              className={`aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${card.bg} flex items-center justify-center group relative`}
            >
              <span className="text-4xl opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500">
                {card.emoji}
              </span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <Instagram size={20} className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-mist hover:text-cream border border-white/10 hover:border-white/20 rounded-full px-6 py-2.5 transition-all duration-300"
          >
            <Instagram size={14} />
            See all posts on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
