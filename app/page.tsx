import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CollageBridge from "@/components/collage-bridge"
import AboutSection from "@/components/about-section"
import VeteransBanner from "@/components/veterans-banner"
import ContactSection from "@/components/contact-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CollageBridge />
      <AboutSection />
      <VeteransBanner />
      <ContactSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
