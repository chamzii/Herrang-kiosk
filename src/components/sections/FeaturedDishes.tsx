"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

const dishes = [
  {
    name: "Butter Chicken",
    desc: "Tender chicken in a velvety tomato-cream sauce, fragrant with fenugreek and garam masala.",
    price: "140kr",
    tag: "Chef's Pick",
    color: "from-orange-900/40 to-red-950/30",
    image: "/images/dish-butter-chicken.jpg",
    emoji: "🍛",
  },
  {
    name: "Chicken Biryani",
    desc: "Aromatic basmati rice slow-cooked with spiced chicken, cashews and golden raisins.",
    price: "145kr",
    tag: "Best Seller",
    color: "from-amber-900/40 to-yellow-950/30",
    image: "/images/dish-biryani.jpg",
    emoji: "🫙",
  },
  {
    name: "Stir Fry Beef",
    desc: "Wok-tossed tender beef with crisp vegetables in a rich umami-forward sauce.",
    price: "148kr",
    tag: null,
    color: "from-red-900/40 to-zinc-950/30",
    image: "/images/dish-stir-fry.jpg",
    emoji: "🥢",
  },
  {
    name: "Chow Mein",
    desc: "Classic egg noodles stir-fried with your choice of protein, fresh veg, and sesame.",
    price: "140kr",
    tag: null,
    color: "from-yellow-900/40 to-amber-950/30",
    image: "/images/dish-chow-mein.jpg",
    emoji: "🍜",
  },
  {
    name: "Fried Rice",
    desc: "Golden wok-fried rice with egg, spring onion, soy, and your choice of protein.",
    price: "148kr",
    tag: null,
    color: "from-lime-900/40 to-emerald-950/30",
    image: "/images/dish-fried-rice.jpg",
    emoji: "🍚",
  },
  {
    name: "Fried Calamari",
    desc: "Crispy golden calamari rings with garlic cilantro fries and a zesty dipping sauce.",
    price: "148kr",
    tag: "New",
    color: "from-cyan-900/40 to-blue-950/30",
    image: "/images/dish-calamari.jpg",
    emoji: "🦑",
  },
  {
    name: "Samosa",
    desc: "Crispy golden parcels filled with spiced potato and peas — the perfect snack.",
    price: "35kr",
    tag: "Snack",
    color: "from-orange-900/40 to-amber-950/30",
    image: "/images/dish-samosa.jpg",
    emoji: "🥟",
  },
];

export default function FeaturedDishes() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ember/4 blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Signature Dishes"
          title="Crafted with"
          titleHighlight="Passion"
          subtitle="Every dish is a journey through Asia's most beloved culinary traditions, prepared fresh to order."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Card background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dish.color}`} />
              <div className="absolute inset-0 glass" />

              {/* Image area */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/60 to-ink/80" />
                {/* Image — replace div with <Image> when photos are added */}
                <div className="absolute inset-0 bg-[var(--img)] bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url(${dish.image})` }}
                />
                {/* Emoji placeholder visible until real image is added */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500 select-none">
                    {dish.emoji}
                  </span>
                </div>

                {/* Tag */}
                {dish.tag && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-ember/90 text-cream font-body text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                    <Star size={9} fill="currentColor" />
                    {dish.tag}
                  </div>
                )}

                {/* Price */}
                <div className="absolute bottom-3 right-3 glass-warm rounded-lg px-3 py-1.5">
                  <span className="font-display text-gold font-bold text-lg">{dish.price}</span>
                </div>
              </div>

              {/* Text */}
              <div className="relative p-5">
                <h3 className="font-display text-cream text-xl font-bold leading-tight group-hover:text-gold transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="mt-2 font-body text-mist text-xs leading-relaxed line-clamp-2">
                  {dish.desc}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-ember/30 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(200,96,26,0.06)]" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 font-body text-ember hover:text-gold text-sm tracking-wider uppercase border-b border-ember/40 hover:border-gold pb-0.5 transition-all duration-200"
          >
            View Full Menu →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
