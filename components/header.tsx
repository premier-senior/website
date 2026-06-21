"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
    { label: "Services", href: "/#services" },
    { label: "Resources", href: "/resources" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About Us", href: "/#about" },
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
          className="relative flex-shrink-0 bg-white flex flex-col items-center justify-center px-6 py-4 rounded-b-2xl shadow-md self-start mt-0 min-w-[160px]"
          style={{ zIndex: 10 }}
        >
          {/* Lotus / flower icon */}
          <svg viewBox="0 0 40 30" className="w-9 h-6 mb-0.5" xmlns="http://www.w3.org/2000/svg">
            {/* petals */}
            <ellipse cx="20" cy="15" rx="5" ry="12" fill="#8B1A4A" opacity="0.9"/>
            <ellipse cx="20" cy="15" rx="5" ry="12" fill="#8B1A4A" opacity="0.9" transform="rotate(35 20 15)"/>
            <ellipse cx="20" cy="15" rx="5" ry="12" fill="#8B1A4A" opacity="0.9" transform="rotate(-35 20 15)"/>
            <ellipse cx="20" cy="15" rx="5" ry="12" fill="#a0275e" opacity="0.6" transform="rotate(65 20 15)"/>
            <ellipse cx="20" cy="15" rx="5" ry="12" fill="#a0275e" opacity="0.6" transform="rotate(-65 20 15)"/>
          </svg>

          {/* PREMIER */}
          <div
            className="font-serif italic font-bold leading-none tracking-wide text-primary"
            style={{ fontSize: "22px", letterSpacing: "0.04em" }}
          >
            PREMIER
          </div>

          {/* SENIOR SOLUTIONS */}
          <div
            className="font-sans font-bold tracking-widest text-primary uppercase leading-tight"
            style={{ fontSize: "8px", letterSpacing: "0.18em" }}
          >
            SENIOR SOLUTIONS
          </div>

          {/* SENIOR PLACEMENT SERVICES */}
          <div
            className="font-sans tracking-widest text-muted-foreground uppercase leading-tight mt-0.5"
            style={{ fontSize: "6px", letterSpacing: "0.14em" }}
          >
            SENIOR PLACEMENT SERVICES
          </div>
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
            href="/#contact"
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
            href="/#contact"
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
