import type { Metadata } from "next"
import Header from "@/components/header"
import ResourcesHero from "@/components/resources-hero"
import ResourcesContent from "@/components/resources-content"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Resources | Premier Senior Solutions",
  description:
    "Learn more about senior care options including independent living, assisted living, memory care, nursing centers, and helpful local programs and services.",
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ResourcesHero />
      <ResourcesContent />
      <ContactSection />
      <Footer />
    </main>
  )
}
