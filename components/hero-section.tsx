import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />

      {/* Primary color overlay at 70% opacity */}
      <div className="absolute inset-0 bg-primary opacity-70" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto pb-20">
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

    </section>
  )
}
