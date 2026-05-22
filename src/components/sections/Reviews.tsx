"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const reviews = [
  {
    name: "Jenn",
    initial: "J",
    color: "#34A853",
    isLocalGuide: true,
    meta: "Local Guide · 249 reviews · 17,875 photos",
    rating: 5,
    time: "10 months ago",
    text: "My absolute favorite place to eat while in Herräng. Such lovely people and food. They have the best tasting food around. I can't imagine eating anywhere else. They have always provided the best service, year after year. The quality continues. The atmosphere is ideal with plenty of shaded options. I just love it. I always leave full and satisfied.",
    subRatings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: "Ciara Cairns",
    initial: "C",
    color: "#EA4335",
    isLocalGuide: false,
    meta: "2 reviews",
    rating: 5,
    time: "2 weeks ago",
    text: "Amazing vibes!! Biryani was 12/10 ⭐️⭐️⭐️ so damn good! And extremely generous portions! Butter chicken with garlic fries was also exquisite 👌❤️",
    subRatings: null,
  },
  {
    name: "Xinqing Lu",
    initial: "X",
    color: "#FBBC05",
    isLocalGuide: true,
    meta: "Local Guide · 16 reviews · 50 photos",
    rating: 5,
    time: "10 months ago",
    text: "The owners of the kiosk are so kind and nice. I attended the Herrang dance camp and it happens to be my birthday. The kiosk helped me order a beautiful cake and were extremely helpful and kind! Also the food is delicious and affordable ☺️",
    subRatings: null,
  },
  {
    name: "Elvinas Marcinkevicius",
    initial: "E",
    color: "#4285F4",
    isLocalGuide: true,
    meta: "Local Guide · 13 reviews · 5 photos",
    rating: 5,
    time: "10 months ago",
    text: "Popcorn chicken the best thing I tasted my all life! Service is awesome, owners are very friendly and always ask people if they are vegan or vegetarian. 5/5!!!",
    subRatings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: "Greta Stålborg",
    initial: "G",
    color: "#EA4335",
    isLocalGuide: false,
    meta: "3 reviews",
    rating: 5,
    time: "10 months ago",
    text: "I would say this is the best food place in Herräng. They have great service and super tasty food. I recommend the butter chicken!",
    subRatings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: "Mohammad Najafi",
    initial: "M",
    color: "#4285F4",
    isLocalGuide: false,
    meta: "7 reviews · 5 photos",
    rating: 5,
    time: "10 months ago",
    text: "We had Samosa, Biryani and Rose falooda, all 10/10. Owners are very friendly.",
    subRatings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: "Ryker",
    initial: "R",
    color: "#34A853",
    isLocalGuide: false,
    meta: "10 reviews",
    rating: 5,
    time: "7 months ago",
    text: "Food Service good Herräng Kiosk",
    subRatings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: "UncleBee",
    initial: "U",
    color: "#4285F4",
    isLocalGuide: true,
    meta: "Local Guide · 109 reviews · 281 photos",
    rating: 5,
    time: "10 months ago",
    text: "If you ever have a chance to swing by this spot, come by and say hi to the one and only Chamara. He will take care of you and your friends. The coffee and pastries will give you a kick start to your day. Stay long enough and you might get a cool story. I cannot wait for my next cup.",
    subRatings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: "Ceci D",
    initial: "C",
    color: "#FBBC05",
    isLocalGuide: true,
    meta: "Local Guide · 25 reviews · 27 photos",
    rating: 5,
    time: "10 months ago",
    text: "Stir fried beef is good for anyone who missing Asian flavors or simply need to eat rice 😂",
    subRatings: { food: 5, service: 5, atmosphere: 5 },
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#FBBC05]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gold/3 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Google Reviews"
          title="What Our Guests"
          titleHighlight="Are Saying"
          subtitle="Real reviews from real guests — straight from our Google Business profile."
        />

        {/* Google rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3 glass-warm rounded-2xl px-6 py-4 border border-gold/10">
            <GoogleLogo />
            <div className="flex items-baseline gap-2">
              <span className="font-display text-gold font-bold text-3xl">5.0</span>
              <StarRating count={5} />
            </div>
            <div className="w-px h-8 bg-white/10" />
            <span className="font-body text-mist text-sm">{reviews.length} Google reviews · 5.0 ★</span>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group glass rounded-2xl p-5 hover:border-white/10 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: review.color }}
                >
                  {review.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-cream font-semibold text-sm truncate">{review.name}</p>
                  <p className="font-body text-mist text-xs truncate">{review.meta}</p>
                </div>
                <GoogleLogo />
              </div>

              {/* Rating + time */}
              <div className="flex items-center gap-2">
                <StarRating count={review.rating} />
                <span className="font-body text-mist text-xs">{review.time}</span>
              </div>

              {/* Review text */}
              <p className="font-body text-mist text-sm leading-relaxed flex-1">
                {review.text}
              </p>

              {/* Sub-ratings */}
              {review.subRatings && (
                <div className="flex gap-3 pt-2 border-t border-white/5 flex-wrap">
                  {Object.entries(review.subRatings).map(([key, val]) => (
                    <div key={key} className="flex items-center gap-1">
                      <span className="font-body text-mist text-[10px] capitalize">{key}</span>
                      <span className="font-body text-[#FBBC05] text-[10px] font-semibold">{val}/5</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://share.google/CnaE0SlbEBgr4uVa0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-mist hover:text-cream border border-white/10 hover:border-white/20 rounded-full px-6 py-2.5 transition-all duration-300"
          >
            <GoogleLogo />
            See all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
