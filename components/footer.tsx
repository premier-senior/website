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
                href="https://www.facebook.com/jenny.janoskenderes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded flex items-center justify-center bg-background/10 hover:bg-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-background">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jlkenderes/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded flex items-center justify-center bg-background/10 hover:bg-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-background" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jenny-kenderes-72294a3/"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="mt-4">
              <Image
                src="/images/bbb-accredited.png"
                alt="BBB Accredited Business"
                width={180}
                height={66}
                className="h-auto w-40 rounded bg-white p-1"
              />
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
