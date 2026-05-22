"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    id: "specials",
    label: "⭐ Specials",
    items: [
      {
        name: "Popcorn Chicken Loaded Fries",
        desc: "Crispy popcorn chicken over loaded fries",
        price: "148kr",
        options: null,
        vegan: false,
      },
    ],
  },
  {
    id: "seafood",
    label: "🦑 Seafood",
    items: [
      {
        name: "Fried Calamari",
        desc: "Golden fried calamari rings",
        price: "148kr",
        options: "With Garlic Cilantro Fries / Plain Fries / Egg Fried Rice",
        vegan: false,
      },
    ],
  },
  {
    id: "curry",
    label: "🍛 Curry",
    items: [
      {
        name: "Butter Chicken",
        desc: "Rich tomato-cream curry with tender chicken",
        price: "140kr",
        options: "With Garlic Rice / Plain Rice / Garlic Cilantro Fries / Plain Fries",
        vegan: false,
      },
      {
        name: "Vegan Curry",
        desc: "Fragrant plant-based curry with seasonal vegetables",
        price: "140kr",
        options: "With Garlic Rice / Plain Rice / Garlic Cilantro Fries / Plain Fries",
        vegan: true,
      },
    ],
  },
  {
    id: "biryani",
    label: "🫙 Biryani",
    items: [
      {
        name: "Veg Biryani",
        desc: "Aromatic basmati with cashews and raisins",
        price: "145kr",
        options: "With Cashew and Raisins",
        vegan: true,
      },
      {
        name: "Chicken Biryani",
        desc: "Slow-cooked chicken biryani with cashews and raisins",
        price: "145kr",
        options: "With Cashew and Raisins",
        vegan: false,
      },
    ],
  },
  {
    id: "friedrice",
    label: "🍚 Fried Rice",
    items: [
      {
        name: "Nasi Goreng",
        desc: "Indonesian-style fried rice with fried egg",
        price: "145kr",
        options: "With Fried Egg",
        vegan: false,
      },
      {
        name: "Fried Rice",
        desc: "Wok-tossed rice served with Vegetable Chop Suey",
        price: "148kr",
        options: "Veg / Beef / Pork / Chicken / Prawns / Egg / Mixed",
        vegan: false,
      },
    ],
  },
  {
    id: "stirfry",
    label: "🥢 Stir Fry",
    items: [
      {
        name: "Stir Fry",
        desc: "Wok-seared with your choice of protein and crisp vegetables",
        price: "148kr",
        options: "Pork / Beef / Chicken / Prawns — served with Egg Fried Rice",
        vegan: false,
      },
    ],
  },
  {
    id: "noodles",
    label: "🍜 Noodles",
    items: [
      {
        name: "Chow Mein",
        desc: "Classic stir-fried noodles with your choice of protein",
        price: "140kr",
        options: "Chicken / Prawns · Egg Noodles / Vermicelli",
        vegan: false,
      },
    ],
  },
  {
    id: "sides",
    label: "🫓 Sides",
    items: [
      {
        name: "Naan Bread",
        desc: "Freshly baked traditional naan",
        price: "13kr",
        options: null,
        vegan: true,
      },
      {
        name: "Samosa (10 pcs)",
        desc: "Crispy golden samosas with spiced potato filling",
        price: "35kr",
        options: "Small, 10 pieces",
        vegan: true,
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("specials");

  const currentCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Full Menu"
          title="Every Flavour,"
          titleHighlight="One Place"
          subtitle="Freshly prepared to order. Mix and match your sides for a custom experience."
        />

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-2 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-body text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                active === cat.id
                  ? "bg-ember text-cream shadow-[0_0_20px_rgba(200,96,26,0.4)]"
                  : "glass text-mist hover:text-cream hover:border-ember/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {currentCategory.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass rounded-2xl p-6 hover:border-ember/20 transition-all duration-300 hover:bg-white/[0.03]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-cream text-xl font-bold group-hover:text-gold transition-colors duration-300">
                          {item.name}
                        </h3>
                        {item.vegan && (
                          <span className="text-[10px] font-body tracking-widest uppercase bg-jade/30 border border-green-700/30 text-green-400 px-2 py-0.5 rounded-full">
                            Vegan
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 font-body text-mist text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      {item.options && (
                        <p className="mt-2 font-body text-ember/70 text-xs italic">
                          {item.options}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="font-display text-gold font-bold text-2xl">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Decorative bottom line */}
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="inline-block glass-warm rounded-2xl px-10 py-8 border border-gold/10">
            <p className="font-accent text-parchment/60 italic text-sm mb-2">
              Ready to order?
            </p>
            <p className="font-display text-cream text-2xl font-bold mb-6">
              Call us & we'll have it hot and ready
            </p>
            <a
              href="tel:0762729328"
              className="inline-flex items-center gap-2 bg-ember hover:bg-saffron text-cream font-body font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,96,26,0.5)] text-lg"
            >
              📞 076-272 93 28
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
