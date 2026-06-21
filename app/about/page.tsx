import type { Metadata } from "next"
import Header from "@/components/header"
import AboutHero from "@/components/about-hero"
import AboutPageContent from "@/components/about-page-content"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | Premier Senior Solutions",
  description:
    "Meet Jenny Kenderes and learn about Premier Senior Solutions — over 20 years of experience, compassion, and dedication helping seniors and their families find the right care.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <AboutPageContent />
      <ContactSection />
      <Footer />
    </main>
  )
}
