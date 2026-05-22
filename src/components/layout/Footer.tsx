import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal border-t border-white/5 overflow-hidden">
      {/* Top gradient accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-ember/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 rounded-full bg-ember/20" />
                <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10">
                  <circle cx="16" cy="16" r="15" stroke="#C41E3A" strokeWidth="1" />
                  <path d="M10 22 Q16 8 22 22" stroke="#C8A84B" strokeWidth="1.5" fill="none" />
                  <circle cx="16" cy="12" r="2" fill="#C41E3A" />
                </svg>
              </div>
              <div>
                <span className="font-display text-cream text-xl font-bold block leading-none">Herräng</span>
                <span className="font-body text-ember text-[10px] tracking-[0.25em] uppercase">Kiosk</span>
              </div>
            </div>
            <p className="font-body text-mist text-sm leading-relaxed max-w-sm">
              Authentic Asian fusion takeaway in the heart of Herräng. Bold spices, fresh ingredients, and homemade flavors — every day of the week.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-ember/20 hover:border-ember/30 transition-all duration-200"
              >
                <Instagram size={16} className="text-mist hover:text-cream" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-ember/20 hover:border-ember/30 transition-all duration-200"
              >
                <Facebook size={16} className="text-mist hover:text-cream" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body text-cream font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <Clock size={14} className="text-ember" />
              Hours
            </h4>
            <ul className="space-y-3 font-body text-sm text-mist">
              <li className="flex justify-between gap-4">
                <span>Mon–Thu</span>
                <span className="text-cream/70">11:00–20:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Fri–Sat</span>
                <span className="text-gold font-medium">11:00–22:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-cream/70">12:00–19:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-cream font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <MapPin size={14} className="text-ember" />
              Contact
            </h4>
            <ul className="space-y-4 font-body text-sm text-mist">
              <li>
                <a href="tel:0762729328" className="flex items-center gap-2 hover:text-cream transition-colors group">
                  <Phone size={14} className="text-ember shrink-0" />
                  <span>076-272 93 28</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Tulkavägen+4,+763+34+Hallstavik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-cream transition-colors"
                >
                  <MapPin size={14} className="text-ember shrink-0 mt-0.5" />
                  <span>Tulkavägen 4<br />763 34 Hallstavik</span>
                </a>
              </li>
            </ul>

            {/* Navigation */}
            <h4 className="font-body text-cream font-semibold text-xs uppercase tracking-widest mt-8 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 font-body text-sm text-mist">
              {["Menu", "Gallery", "Hours", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-cream hover:text-ember transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-ember/40 group-hover:w-5 group-hover:bg-ember transition-all duration-200" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-mist/40 text-xs">
            © {year} Herräng Kiosk. All rights reserved.
          </p>
          <p className="font-body text-mist/30 text-xs italic">
            Crafted with ❤️ in Herräng, Sweden
          </p>
        </div>
      </div>
    </footer>
  );
}
