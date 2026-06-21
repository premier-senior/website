import type { Metadata } from "next"
import Header from "@/components/header"
import ContactHero from "@/components/contact-hero"
import ContactInfo from "@/components/contact-info"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Premier Senior Solutions",
  description:
    "Contact Premier Senior Solutions to begin finding the right senior care for you or your loved one. Jenny will reach out right away to schedule your initial consultation.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <Footer />
    </main>
  )
}
