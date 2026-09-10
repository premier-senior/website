import { Phone, Mail, MapPin } from "lucide-react"

const infoCards = [
  {
    icon: Phone,
    label: "Phone Number",
    value: "+1 (216) 410-0339",
    href: "tel:+12164100339",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Jkenderes@premier-senior.com",
    href: "mailto:Jkenderes@premier-senior.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Cleveland areas",
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Use the form below to begin the process of finding the right senior care for you or your loved one. Jenny will reach out to you right away to schedule your initial consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                className="relative bg-card rounded-lg shadow-sm pt-12 pb-8 px-6 text-center mt-8"
              >
                {/* Icon circle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{card.label}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors break-words"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{card.value}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
