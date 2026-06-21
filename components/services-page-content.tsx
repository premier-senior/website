import Image from "next/image"

const services = [
  {
    title: "Placement service without any out of pocket expenses",
    image: "/images/svc-placement.png",
    description:
      "Premier Senior Solutions Placement Services assist families in finding the perfect senior care solution, based on their needs and budget, without any out of pocket expenses for the family. Our service is always free. We are here to be your helping hand through what can be a difficult process to navigate.",
  },
  {
    title: "Personalized consultations",
    image: "/images/svc-consult.png",
    description:
      "We meet with every family and client for a personalized consultation to place careful consideration on location, finances, level of care needed and more. We know that every situation is different and it is our goal to find the right solution for you.",
  },
  {
    title: "Support of other ancillary services",
    image: "/images/svc-ancillary.png",
    description:
      "With over 20 years working in the senior care industry, I am here to be a vital resource to you in not only finding your perfect senior care placement, but also the additional ancillary services available in your area.",
  },
  {
    title: "Here every step of the way",
    image: "/images/svc-everystep.png",
    description:
      "I am here with you every step of the way. From scheduling initial appointments and tours to navigating the admissions process and move in.",
  },
  {
    title: "Saving time and frustration for the family",
    image: "/images/svc-savingtime.png",
    description:
      "The family can focus on their loved one by SAVING TIME and FRUSTRATION of comparing communities that do not make sense in the long run.",
  },
  {
    title: "Communities can count on us to pre qualify potential residents",
    image: "/images/svc-prequalify.png",
    description:
      "We pre-qualify based on CARE NEEDS, BUDGET and LOCATION serving the patient and their family needs accordingly.",
  },
]

export default function ServicesPageContent() {
  return (
    <section className="py-20 bg-background">
      {/* Section heading */}
      <div className="text-center mb-12 px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-8 bg-primary/40" />
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Our Comprehensive Offerings
          </span>
          <div className="h-px w-8 bg-primary/40" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Services
        </h2>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="bg-card rounded-lg border border-border shadow-sm overflow-hidden flex flex-col"
          >
            <div className="relative w-full aspect-[3/2]">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="font-bold text-foreground text-lg leading-snug inline-block">
                {service.title}
                <span className="block mt-2 h-0.5 w-12 bg-primary" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
