"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About Us", href: "/about" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "white" : "transparent",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-stretch min-h-[80px]">

        {/* Logo block — white card that slightly overflows the bar */}
        <Link
          href="/"
          className={`relative flex-shrink-0 bg-white flex flex-col items-center justify-center px-6 py-4 rounded-b-2xl self-start mt-0 min-w-[160px] transition-shadow duration-300 ${
            scrolled ? "shadow-none" : "shadow-md"
          }`}
          style={{ zIndex: 10 }}
        >
          <Image
            src="/images/logo.png"
            alt="Premier Senior Solutions — Senior Placement Services"
            width={160}
            height={70}
            className="w-40 h-auto"
            priority
          />
        </Link>

        {/* Desktop Nav — right side */}
        <nav className="hidden md:flex items-center justify-end flex-1 gap-8 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-300 whitespace-nowrap hover:opacity-70"
              style={{ color: scrolled ? "oklch(0.18 0 0)" : "white" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-3 text-sm font-black tracking-widest text-white rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "oklch(0.38 0.155 3)" }}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex flex-1 items-center justify-end px-4">
          <button
            className="p-2 transition-colors duration-300"
            style={{ color: scrolled ? "oklch(0.18 0 0)" : "white" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3"
          style={{
            backgroundColor: scrolled ? "white" : "oklch(0.38 0.155 3)",
            borderColor: scrolled ? "oklch(0.9 0 0)" : "rgba(255,255,255,0.2)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium py-1 hover:opacity-70 transition-opacity"
              style={{ color: scrolled ? "oklch(0.18 0 0)" : "white" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-6 py-3 text-sm font-black tracking-widest text-white text-center rounded-lg"
            style={{ backgroundColor: "oklch(0.28 0.13 3)" }}
            onClick={() => setMobileOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  )
}
