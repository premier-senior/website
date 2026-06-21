import type { Metadata } from "next"
import Header from "@/components/header"
import TestimonialsHero from "@/components/testimonials-hero"
import TestimonialsGrid from "@/components/testimonials-grid"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Testimonials | Premier Senior Solutions",
  description:
    "Read what families across the community are saying about their experience with Premier Senior Solutions and Jenny Kenderes.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TestimonialsHero />
      <TestimonialsGrid />
      <ContactSection />
      <Footer />
    </main>
  )
}
