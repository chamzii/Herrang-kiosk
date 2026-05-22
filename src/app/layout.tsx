import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Herräng Kiosk | Authentic Asian Flavors in Herräng",
  description:
    "Freshly prepared Asian fusion dishes made with rich spices, bold flavors, and authentic recipes. Takeaway in Herräng, Sweden. Butter Chicken, Biryani, Chow Mein, Fried Rice and more.",
  keywords:
    "Herräng Kiosk, Asian food Herräng, takeaway Hallstavik, butter chicken, biryani, chow mein, Asian fusion Sweden",
  openGraph: {
    title: "Herräng Kiosk | Authentic Asian Flavors",
    description:
      "Premium Asian fusion takeaway in the heart of Herräng. Bold spices, fresh ingredients, unforgettable taste.",
    type: "website",
    locale: "sv_SE",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0a0805",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
