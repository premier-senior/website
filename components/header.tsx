"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Resources", href: "#resources" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About Us", href: "#about" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="max-w-7xl mx-auto flex items-stretch min-h-[80px]">

        {/* Logo block — white card that slightly overflows the bar */}
        <Link
          href="#home"
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
              className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-3 text-sm font-black tracking-widest text-primary-foreground rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "oklch(0.28 0.13 3)" }}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex flex-1 items-center justify-end px-4">
          <button
            className="p-2 text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground hover:opacity-80 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 px-6 py-3 text-sm font-black tracking-widest text-primary-foreground text-center rounded-lg"
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
