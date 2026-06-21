import Image from "next/image"
import Link from "next/link"
import { Home, HeartHandshake } from "lucide-react"

const careTypes = [
  {
    title: "Independent Living",
    image: "/images/res-living.png",
    description:
      "Specifically designed for independent seniors who are able to live on their own in an apartment or house, but who want the conveniences of living within a community that provides services and amenities such as housekeeping, social activities, outings and meals. Amenities often include a beauty/barber shop, fitness center, library, club meeting room and some transportation. This type of community fosters a great sense of community among residents.",
  },
  {
    title: "55 + Active Senior Apartments",
    image: "/images/res-consult.png",
    description:
      "Age restricted starting at 55 years of age. Independent living that offers a maintenance free apartment that includes access to a clubhouse, fitness center, common areas for parties and social gatherings. On-site management and concierge services.",
  },
  {
    title: "Assisted Living",
    image: "/images/res-paperwork.png",
    description:
      "Provides a combination of housing, personalized support services and health care for those seniors who need assistance with the activities of daily living (ADL's) but do not require advanced medical care.",
  },
  {
    title: "Residential Care",
    image: "/images/res-living.png",
    description:
      "May also be referred to as Assisted Living but most often called \u201cboard and care\u201d facilities. Usually single family homes licensed to provide assistance with bathing, dressing, grooming, and medications. They also provide for laundry, housekeeping, and other personal care needs.",
  },
  {
    title: "Alzheimer's/Dementia",
    image: "/images/res-consult.png",
    description:
      "May be cared for at the Assisted Living or Residential Care level. Many facilities have special training for the progression of this disease. The communities we partner with employ specially-trained professionals, skilled in optimizing functions and behaviors associated with memory impairment.",
  },
  {
    title: "Nursing Centers",
    image: "/images/res-paperwork.png",
    description:
      "Facilities licensed to provide skilled medical care for more serious care conditions by nurses and doctors. Short term stays for rehabilitation or recuperation often lead to another care placement option for long term needs.",
  },
  {
    title: "Continuing Care Retirement Community (CCRC)",
    image: "/images/res-living.png",
    description:
      "Offers a long-term care contract that provides for a combination of services as needed: independent living, assisted living, memory care and nursing care. Provides assistance for activities of daily living as needed.",
  },
]

const otherOptions = [
  {
    icon: Home,
    title: "Adult Day Services",
    description:
      "Community based programs provide supervision, nutrition assistance and social opportunities to functionally and/or cognitively impaired seniors. Some programs provide nursing or rehabilitation services.",
  },
  {
    icon: HeartHandshake,
    title: "Home Care Services",
    description:
      "A cost-effective alternative which may keep a Senior in their home if the situation permits. Services may include: health care, personal care, assistance with meals, shopping, laundry, and housekeeping. These services are rendered in any combination of hourly, daily, weekly, or monthly visits.",
  },
]

const programs = [
  { name: "Western Reserve Area Agency on Aging", line1: "www.areaagingsolutions.org", line2: "216-621-0303" },
  { name: "Adult Protective Services", line1: "\u2014\u2014\u2014", line2: "216-420-6700" },
  { name: "Ohio Department of Aging", line1: "Aging.ohio.gov", line2: "800-266-4346" },
  {
    name: "Long Term Care Ombudsman Program/Counsel on Aging",
    line1: "aging.ohio.gov/services/ombudsman",
    line2: "1-800-282-1206",
  },
  { name: "National Parkinson Foundation, Inc.", line1: "Parkinson.org", line2: "800-473-4636" },
  { name: "Meals on Wheels", line1: "mealsonwheelsamerica.org", line2: "440-333-6298" },
  { name: "Alzheimer's Association Help-line", line1: "alz.org/cleveland", line2: "1-800-272-3900 (24/7)" },
  { name: "Ohio Department of Health Services", line1: "odh.ohio.gov", line2: "614-466-5332" },
]

export default function ResourcesContent() {
  return (
    <>
      {/* Care types */}
      <section className="py-20 bg-background">
        <div className="text-center mb-12 px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-primary/40" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Retiring Should Be Effortless
            </span>
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Looking for a senior living community? We can help!
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-5">
          {careTypes.map((care) => (
            <div
              key={care.title}
              className="flex flex-col sm:flex-row gap-5 bg-card rounded-xl border border-border p-4 shadow-sm"
            >
              <div className="relative w-full sm:w-56 h-40 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={care.image} alt={care.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{care.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{care.description}</p>
                <Link
                  href="/#contact"
                  className="text-primary text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Care Options */}
      <section className="py-20 bg-secondary">
        <div className="text-center mb-12 px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-primary/40" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">We Care About You</span>
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Other Care Options
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-sm">
            <Image src="/images/res-homecare.png" alt="Home care services" fill className="object-cover" />
          </div>

          <div className="flex flex-col gap-6">
            {otherOptions.map((option) => (
              <div key={option.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base mb-1">{option.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
            <Link
              href="/#contact"
              className="inline-block w-fit px-8 py-3 font-bold text-sm tracking-wider text-primary-foreground bg-primary rounded-xl shadow-[0_0_22px_4px_rgba(193,118,142,0.55)] transition-all hover:shadow-[0_0_28px_6px_rgba(193,118,142,0.7)] hover:opacity-95"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Programs And Services */}
      <section className="py-20 bg-background">
        <div className="text-center mb-12 px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-primary/40" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Diverse Offering</span>
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Programs And Services
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program) => (
            <div
              key={program.name}
              className="text-center bg-card rounded-xl border border-border p-6 shadow-sm flex flex-col gap-2"
            >
              <h3 className="font-bold text-primary text-sm leading-snug text-balance">{program.name}</h3>
              <div className="h-px w-full bg-border my-1" />
              <p className="text-muted-foreground text-sm">{program.line1}</p>
              <p className="text-muted-foreground text-sm font-medium">{program.line2}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
