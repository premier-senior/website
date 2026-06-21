import type { Metadata } from "next"
import Header from "@/components/header"
import ServicesHero from "@/components/services-hero"
import ServicesPageContent from "@/components/services-page-content"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | Premier Senior Solutions",
  description:
    "Premier Senior Solutions offers free placement services, personalized consultations, and support every step of the way to help you find the perfect senior care solution.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesPageContent />
      <ContactSection />
      <Footer />
    </main>
  )
}
