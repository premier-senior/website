import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <footer className="text-white pt-16 pb-6" style={{ backgroundColor: "#2c0719" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1: Logo + Description */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Premier Senior Solutions"
                width={220}
                height={70}
                className="h-auto w-48"
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Premier Senior Solutions is a senior care placement agency serving the Greater Omaha and Iowa area. We specialize in finding the perfect placement for your loved one, regardless of their needs, desires, and budget.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Connect</h4>
            {/* Social Icons */}
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded flex items-center justify-center bg-background/10 hover:bg-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-background">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded flex items-center justify-center bg-background/10 hover:bg-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-background">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded flex items-center justify-center bg-background/10 hover:bg-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-background">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-white">
              <a href="tel:+14024260339" className="hover:text-white/70 transition-colors">
                +1 (402) 426-0339
              </a>
              <a href="mailto:jennifer@premier-senior.com" className="hover:text-white/70 transition-colors break-all">
                jennifer@premier-senior.com
              </a>
            </div>
            {/* BBB Badge */}
            <div className="mt-4 inline-flex items-center gap-2 border border-white/20 rounded px-3 py-2">
              <div className="w-8 h-8 rounded flex items-center justify-center text-white font-black text-xs bg-blue-800">
                BBB
              </div>
              <div className="text-xs text-white leading-tight">
                <div className="text-white font-semibold">ACCREDITED</div>
                <div>BUSINESS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white text-xs">
            &copy; Copyright 2020 - Premier Senior Solution. All Rights Reserved | Powered By{" "}
            <span className="text-white">Screen Digital</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
