import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Resources", href: "#resources" },
    { label: "Contact Us", href: "#contact" },
  ]

  return (
    <footer className="bg-foreground text-background/70 pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1: Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
                <div className="text-xs font-black tracking-widest uppercase text-background">PREMIER</div>
                <div className="text-[9px] font-medium tracking-wider uppercase text-background/50">SENIOR SOLUTIONS</div>
              </div>
            </div>
            <p className="text-background/50 text-sm leading-relaxed">
              Premier Senior Solutions is a senior care placement agency serving the Greater Omaha and Iowa area. We specialize in finding the perfect placement for your loved one, regardless of their needs, desires, and budget.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-background font-bold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/50 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="text-background font-bold text-sm tracking-wider uppercase mb-4">Connect</h4>
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
            <div className="flex flex-col gap-2 text-sm text-background/50">
              <a href="tel:+14024260339" className="hover:text-background transition-colors">
                +1 (402) 426-0339
              </a>
              <a href="mailto:jennifer@premier-senior.com" className="hover:text-background transition-colors break-all">
                jennifer@premier-senior.com
              </a>
            </div>
            {/* BBB Badge */}
            <div className="mt-4 inline-flex items-center gap-2 border border-background/20 rounded px-3 py-2">
              <div className="w-8 h-8 rounded flex items-center justify-center text-background font-black text-xs bg-blue-800">
                BBB
              </div>
              <div className="text-xs text-background/50 leading-tight">
                <div className="text-background font-semibold">ACCREDITED</div>
                <div>BUSINESS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/30 text-xs">
            &copy; Copyright 2020 - Premier Senior Solution. All Rights Reserved | Powered By{" "}
            <span className="text-background/50">Screen Digital</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
