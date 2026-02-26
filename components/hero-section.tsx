import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
      style={{ backgroundColor: "#8B1A4A" }}
    >
      {/* Background overlay with soft texture */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-4">
          Your Helping Hand<br />On The Journey
        </h1>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The inspiration to create this business was drawn from over 20 years of working in healthcare.
        </p>
        <Link
          href="#about"
          className="inline-block px-8 py-3 bg-white font-bold text-sm tracking-wider transition-all hover:bg-gray-100"
          style={{ color: "#8B1A4A" }}
        >
          LEARN MORE
        </Link>
      </div>

      {/* Photo Collage */}
      <div className="relative z-10 mt-12 flex items-end justify-center gap-3 px-4 pb-8 w-full max-w-3xl">
        {/* Left smaller circle */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0">
          <Image
            src="/images/senior-care-1.jpg"
            alt="Senior care"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Middle left circle */}
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0 mb-4">
          <Image
            src="/images/caregiver-1.jpg"
            alt="Caregiver"
            width={144}
            height={144}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Center large circle */}
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/40 flex-shrink-0">
          <Image
            src="/images/about-woman.jpg"
            alt="Premier Senior Solutions founder"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Middle right circle */}
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0 mb-4">
          <Image
            src="/images/family-1.jpg"
            alt="Family"
            width={144}
            height={144}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right smaller circle */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0">
          <Image
            src="/images/senior-care-2.jpg"
            alt="Senior living"
            width={128}
            height={128}
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
