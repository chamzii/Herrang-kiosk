"use client";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:0762729328"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2.5 bg-ember text-cream font-body font-semibold text-sm px-5 py-3.5 rounded-full shadow-[0_4px_30px_rgba(200,96,26,0.5)] hover:bg-saffron transition-colors duration-300"
    >
      <Phone size={16} className="animate-pulse" />
      Call to Order
    </motion.a>
  );
}
