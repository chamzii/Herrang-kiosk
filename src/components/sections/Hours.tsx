"use client";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const schedule = [
  { days: "Monday – Thursday", hours: "11:00 – 20:00", isWeekend: false },
  { days: "Friday – Saturday", hours: "11:00 – 22:00", isWeekend: true },
  { days: "Sunday", hours: "12:00 – 19:00", isWeekend: false },
];

function isCurrentlyOpen(): { open: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon...6=Sat
  const h = now.getHours();
  const m = now.getMinutes();
  const time = h * 60 + m;

  const ranges: Record<number, [number, number]> = {
    0: [12 * 60, 19 * 60], // Sunday
    1: [11 * 60, 20 * 60],
    2: [11 * 60, 20 * 60],
    3: [11 * 60, 20 * 60],
    4: [11 * 60, 20 * 60],
    5: [11 * 60, 22 * 60],
    6: [11 * 60, 22 * 60],
  };

  const [open, close] = ranges[day];
  if (time >= open && time < close) {
    const minsLeft = close - time;
    const hLeft = Math.floor(minsLeft / 60);
    const mLeft = minsLeft % 60;
    return {
      open: true,
      label: hLeft > 0 ? `Open · Closes in ${hLeft}h ${mLeft}m` : `Open · Closes in ${mLeft}m`,
    };
  }
  return { open: false, label: "Currently Closed" };
}

export default function Hours() {
  const status = isCurrentlyOpen();

  return (
    <section id="hours" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-ember/5 blur-[180px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Opening Hours"
          title="We're Here"
          titleHighlight="for You"
          subtitle="Fresh food, seven days a week. Come visit or call ahead."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 glass-warm rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Background decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-ember/10 blur-[80px] pointer-events-none" />

          {/* Live status badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm mb-10 border ${
            status.open
              ? "bg-green-900/30 border-green-600/30 text-green-400"
              : "bg-red-900/30 border-red-600/30 text-red-400"
          }`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${status.open ? "bg-green-400" : "bg-red-400"}`} />
            {status.label}
          </div>

          {/* Hours grid */}
          <div className="space-y-4">
            {schedule.map((s, i) => (
              <motion.div
                key={s.days}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center justify-between py-5 border-b last:border-0 ${
                  s.isWeekend ? "border-ember/20" : "border-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    s.isWeekend ? "bg-ember/20 border border-ember/30" : "glass border-white/10"
                  }`}>
                    <Clock size={16} className={s.isWeekend ? "text-ember" : "text-mist"} />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-cream text-lg">{s.days}</p>
                    {s.isWeekend && (
                      <p className="font-body text-ember text-xs mt-0.5">Extended hours</p>
                    )}
                  </div>
                </div>
                <p className={`font-display text-3xl font-bold ${s.isWeekend ? "text-gold" : "text-cream/80"}`}>
                  {s.hours}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 font-body text-mist/50 text-sm italic text-center"
          >
            Hours may vary on public holidays. Call ahead to confirm.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
