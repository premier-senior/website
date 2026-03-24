import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-primary"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance mb-4">
          Your Helping Hand<br />On The Journey
        </h1>
        <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The inspiration to create this business was drawn from over 20 years of working in healthcare.
        </p>
        <Link
          href="#about"
          className="inline-block px-8 py-3 bg-primary-foreground text-primary font-bold text-sm tracking-wider transition-all hover:opacity-90"
        >
          LEARN MORE
        </Link>
      </div>

      {/* Photo Collage */}
      <div className="relative z-10 mt-12 flex items-end justify-center gap-3 px-4 pb-8 w-full max-w-3xl">
        <div className="w-20 h-32 md:w-28 md:h-44 rounded-full overflow-hidden border-4 border-primary-foreground/30 flex-shrink-0">
          <Image
            src="/images/senior-care-1.jpg"
            alt="Senior care"
            width={112}
            height={176}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-24 h-36 md:w-32 md:h-48 rounded-full overflow-hidden border-4 border-primary-foreground/30 flex-shrink-0 mb-4">
          <Image
            src="/images/caregiver-1.jpg"
            alt="Caregiver"
            width={128}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-28 h-44 md:w-40 md:h-60 rounded-full overflow-hidden border-4 border-primary-foreground/40 flex-shrink-0">
          <Image
            src="/images/about-woman.jpg"
            alt="Premier Senior Solutions founder"
            width={160}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-24 h-36 md:w-32 md:h-48 rounded-full overflow-hidden border-4 border-primary-foreground/30 flex-shrink-0 mb-4">
          <Image
            src="/images/family-1.jpg"
            alt="Family"
            width={128}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-20 h-32 md:w-28 md:h-44 rounded-full overflow-hidden border-4 border-primary-foreground/30 flex-shrink-0">
          <Image
            src="/images/senior-care-2.jpg"
            alt="Senior living"
            width={112}
            height={176}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L480 20L960 40L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
