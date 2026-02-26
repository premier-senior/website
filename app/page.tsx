import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VeteransBanner from "@/components/veterans-banner"
import ContactSection from "@/components/contact-section"
import ServicesSection from "@/components/services-section"
import VideoSection from "@/components/video-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <VeteransBanner />
      <ContactSection />
      <ServicesSection />
      <VideoSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
