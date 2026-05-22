"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Replace these with your actual uploaded food images
const images = [
  { src: "/images/gallery-1.jpg", alt: "Butter Chicken", span: "row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Chicken Biryani", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Chow Mein", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Fried Rice", span: "row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Stir Fry", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Calamari", span: "" },
  { src: "/images/gallery-7.jpg", alt: "Samosa", span: "" },
  { src: "/images/gallery-8.jpg", alt: "Vegan Curry", span: "" },
];

const emojis = ["🍛", "🫙", "🍜", "🍚", "🥢", "🦑", "🥟", "🌿"];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-saffron/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="A Feast for"
          titleHighlight="the Eyes"
          subtitle="Fresh ingredients, bold flavors, beautiful plates — every order is made with love."
        />

        {/* Masonry-style grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => setLightbox(i)}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${img.span} ${
                i === 0 ? "col-span-2" : i === 3 ? "col-span-1 md:col-span-2" : ""
              }`}
            >
              {/* Placeholder background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-charcoal to-ink transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Emoji placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                <span className="text-7xl select-none">{emojis[i]}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                  <ZoomIn size={20} className="text-cream" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-cream text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image count note */}
        <p className="mt-6 text-center font-body text-mist/40 text-xs italic">
          Add your food photos to /public/images/ to populate the gallery
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full aspect-[4/3] rounded-2xl overflow-hidden glass"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute inset-0 bg-charcoal"
                style={{
                  backgroundImage: `url(${images[lightbox].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-[150px] select-none">{emojis[lightbox]}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 to-transparent">
                <p className="font-display text-cream text-2xl font-bold">
                  {images[lightbox].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
