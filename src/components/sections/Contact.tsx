"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with actual form submission (Formspree, Resend, etc.)
    setSent(true);
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-ember/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Find Us &"
          titleHighlight="Say Hello"
          subtitle="We'd love to hear from you. Drop by, call us, or send a message."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Left: info + map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Click-to-call card */}
            <a
              href="tel:0762729328"
              className="group flex items-center gap-5 glass-warm rounded-2xl p-6 border border-gold/10 hover:border-ember/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,96,26,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-ember/20 border border-ember/30 flex items-center justify-center shrink-0 group-hover:bg-ember/30 transition-colors">
                <Phone size={24} className="text-ember" />
              </div>
              <div>
                <p className="font-body text-mist text-sm uppercase tracking-widest mb-1">Call to Order</p>
                <p className="font-display text-cream text-2xl font-bold group-hover:text-gold transition-colors">
                  076-272 93 28
                </p>
                <p className="font-body text-ember text-xs mt-1">Tap to call on mobile</p>
              </div>
            </a>

            {/* Address card */}
            <a
              href="https://maps.google.com/?q=Tulkavägen+4,+763+34+Hallstavik"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 glass rounded-2xl p-6 hover:border-ember/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-ember/10 group-hover:border-ember/20 transition-all">
                <MapPin size={24} className="text-mist group-hover:text-ember transition-colors" />
              </div>
              <div>
                <p className="font-body text-mist text-sm uppercase tracking-widest mb-1">Our Address</p>
                <p className="font-display text-cream text-xl font-bold">Tulkavägen 4</p>
                <p className="font-body text-mist">763 34 Hallstavik, Sweden</p>
              </div>
            </a>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.7!2d18.63!3d59.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDU4JzQ4LjAiTiAxOMKwMzcnNDguMCJF!5e0!3m2!1sen!2sse!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Herräng Kiosk location"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-display text-cream text-2xl font-bold mb-2">Send a Message</h3>
              <p className="font-body text-mist text-sm mb-8">
                Questions, feedback, or catering inquiries — we read every message.
              </p>

              {sent ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-64 gap-4 text-center"
                >
                  <CheckCircle size={48} className="text-green-400" />
                  <p className="font-display text-cream text-2xl font-bold">Message Sent!</p>
                  <p className="font-body text-mist">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-mist text-xs uppercase tracking-widest block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Johan Lindström"
                      className="w-full bg-white/5 border border-white/10 focus:border-ember/50 rounded-xl px-4 py-3.5 font-body text-cream placeholder:text-mist/40 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-mist text-xs uppercase tracking-widest block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="johan@example.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-ember/50 rounded-xl px-4 py-3.5 font-body text-cream placeholder:text-mist/40 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-mist text-xs uppercase tracking-widest block mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="I'd like to ask about catering..."
                      className="w-full bg-white/5 border border-white/10 focus:border-ember/50 rounded-xl px-4 py-3.5 font-body text-cream placeholder:text-mist/40 outline-none transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-ember hover:bg-saffron text-cream font-body font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,96,26,0.4)]"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
