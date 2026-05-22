import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import Menu from "@/components/sections/Menu";
import Reviews from "@/components/sections/Reviews";
import Hours from "@/components/sections/Hours";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Reviews />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
