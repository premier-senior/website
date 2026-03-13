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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary-foreground" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 9.5 11 12 11C14.5 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" opacity="0.4"/>
                <path d="M12 3C10.8 3 9.7 3.5 8.9 4.4L11.5 6L14.1 4.4C13.3 3.5 12.2 3 12 3Z"/>
                <path d="M7 8C5.3 8 4 9.3 4 11C4 12.7 5.3 14 7 14C8.7 14 10 12.7 10 11C10 9.3 8.7 8 7 8Z" opacity="0.6"/>
                <path d="M17 8C15.3 8 14 9.3 14 11C14 12.7 15.3 14 17 14C18.7 14 20 12.7 20 11C20 9.3 18.7 8 17 8Z" opacity="0.6"/>
                <path d="M5 15C3.3 15 2 16.3 2 18C2 19.7 3.3 21 5 21C6.7 21 8 19.7 8 18C8 16.3 6.7 15 5 15Z" opacity="0.4"/>
                <path d="M19 15C17.3 15 16 16.3 16 18C16 19.7 17.3 21 19 21C20.7 21 22 19.7 22 18C22 16.3 20.7 15 19 15Z" opacity="0.4"/>
                <path d="M12 13C10.3 13 9 14.3 9 16C9 17.7 10.3 19 12 19C13.7 19 15 17.7 15 16C15 14.3 13.7 13 12 13Z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-xs font-black tracking-widest uppercase text-primary">PREMIER</div>
              <div className="text-[9px] font-medium tracking-wider uppercase text-muted-foreground">SENIOR SOLUTIONS</div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 text-sm font-bold text-primary-foreground bg-primary rounded transition-opacity hover:opacity-90"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 px-5 py-2 text-sm font-bold text-primary-foreground bg-primary text-center rounded"
            onClick={() => setMobileOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  )
}
