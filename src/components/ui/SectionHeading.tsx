"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <div className="ornament-divider mb-6 max-w-xs mx-auto">
          <span className="text-ember font-body text-xs tracking-[0.3em] uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cream">
        {title}{" "}
        {titleHighlight && (
          <em className="not-italic text-shimmer">{titleHighlight}</em>
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-mist font-body text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
