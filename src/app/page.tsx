import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import RestaurantSection from "@/components/restaurant-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main  className="min-h-screen bg-black ">
      <HeroSection />
      <AboutSection />
      <RestaurantSection />
      <Footer />
    </main>
  )
}
