# Herräng Kiosk — Restaurant Website

A complete, production-ready Next.js 14 restaurant website for **Herräng Kiosk**, an authentic Asian fusion takeaway in Herräng, Sweden.

---

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

---

## Project Structure

```
herrang-kiosk/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + SEO metadata
│   │   └── page.tsx            # Main page (assembles sections)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav + mobile menu
│   │   │   └── Footer.tsx      # Full footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Fullscreen hero
│   │   │   ├── About.tsx       # About + story
│   │   │   ├── FeaturedDishes.tsx  # Animated dish cards
│   │   │   ├── Menu.tsx        # Full menu with category tabs
│   │   │   ├── Gallery.tsx     # Masonry gallery + lightbox
│   │   │   ├── Hours.tsx       # Opening hours (live status)
│   │   │   └── Contact.tsx     # Contact form + map + call
│   │   └── ui/
│   │       ├── ScrollProgress.tsx   # Top progress bar
│   │       └── SectionHeading.tsx   # Reusable heading
│   └── styles/
│       └── globals.css         # Global styles + design tokens
├── public/
│   └── images/                 # ← Add your food photos here
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Adding Your Food Photos

Place images in `/public/images/` with these filenames:

| File | Used in |
|------|---------|
| `hero-bg.jpg` | Hero section background |
| `about-main.jpg` | About section portrait image |
| `dish-butter-chicken.jpg` | Featured dish card |
| `dish-biryani.jpg` | Featured dish card |
| `dish-stir-fry.jpg` | Featured dish card |
| `dish-chow-mein.jpg` | Featured dish card |
| `dish-fried-rice.jpg` | Featured dish card |
| `dish-calamari.jpg` | Featured dish card |
| `dish-samosa.jpg` | Featured dish card |
| `gallery-1.jpg` … `gallery-8.jpg` | Gallery section |

Any standard web format works (jpg, png, webp). Recommended: 1200×800px for dishes, 1920×1080px for hero.

---

## Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts — it auto-detects Next.js
```

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — just click **Deploy**
5. Done! Your site is live in ~2 minutes.

---

## Contact Form (Production)

The contact form currently uses a local handler. For production, connect one of these:

### Formspree (simplest — free tier available)
1. Create account at [formspree.io](https://formspree.io)
2. Get your form ID (e.g. `xvoeygkq`)
3. In `Contact.tsx`, replace `handleSubmit` with:

```typescript
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setSent(true);
```

### Resend / Nodemailer
Create `src/app/api/contact/route.ts` with a Next.js API route.

---

## Google Maps

Update the iframe `src` in `Contact.tsx` with your real Google Maps embed URL:
1. Go to [maps.google.com](https://maps.google.com)
2. Search for **Tulkavägen 4, Hallstavik**
3. Click Share → Embed a map → Copy HTML
4. Paste the `src` URL into the `<iframe>` in `Contact.tsx`

---

## Customization

| What | Where |
|------|-------|
| Colors / design tokens | `tailwind.config.ts` + `globals.css` |
| Menu items & prices | `src/components/sections/Menu.tsx` |
| Opening hours | `src/components/sections/Hours.tsx` |
| Contact info | `src/components/sections/Contact.tsx` + `Footer.tsx` |
| SEO meta tags | `src/app/layout.tsx` |

---

## License

Built for Herräng Kiosk. All rights reserved.
