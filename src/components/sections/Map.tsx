"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";

export default function Map() {
  return (
    <section id="location" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-ember/4 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-10 items-stretch"
        >
          {/* Map iframe */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] border border-white/5">
            <iframe
              src="https://maps.google.com/maps?q=Herr%C3%A4ng+Kiosk,+Herr%C3%A4ng,+Sweden&output=embed&hl=en"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full grayscale contrast-[1.1] opacity-90"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-warm rounded-3xl p-8 md:p-10 border border-gold/10 flex flex-col justify-center gap-8"
          >
            <div>
              <p className="font-body text-ember text-xs tracking-[0.3em] uppercase mb-3">Find Us</p>
              <h2 className="font-display text-cream text-4xl font-bold leading-tight">
                Come Visit <em className="not-italic text-gold">Us</em>
              </h2>
              <p className="font-body text-mist mt-3 text-sm leading-relaxed">
                Located in the heart of Herräng — easy to find, impossible to forget.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ember/20 border border-ember/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-ember" />
                </div>
                <div>
                  <p className="font-body font-semibold text-cream text-sm">Address</p>
                  <p className="font-body text-mist text-sm mt-0.5">Herräng, Sweden</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ember/20 border border-ember/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={16} className="text-ember" />
                </div>
                <div>
                  <p className="font-body font-semibold text-cream text-sm">Phone</p>
                  <a href="tel:0762729328" className="font-body text-mist text-sm mt-0.5 hover:text-gold transition-colors">
                    076-272 93 28
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Herräng+Kiosk,+Herräng,+Sweden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ember hover:bg-saffron text-cream font-body font-medium px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,96,26,0.4)] w-fit"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
