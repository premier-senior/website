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

      {/* Rose gradient overlay at 88% opacity (matches other page heroes) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(137,28,81,0.88), rgba(175,94,138,0.88))",
        }}
      />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto pb-20">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance mb-4">
          Your Helping Hand<br />On The Journey
        </h1>
        <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The inspiration to create this business was drawn from over 20 years of working in healthcare.
        </p>
        <p className="text-white/85 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          When it comes to your loved ones, you only want the best. Premier senior living prides itself in providing trusted senior living solutions to help you find the perfect fit. Our expert team will help you navigate the world of senior living and find the right place for you.
        </p>
        <Link
          href="#about"
          className="inline-block px-8 py-3 bg-primary-foreground text-primary font-bold text-sm tracking-wider rounded-xl shadow-[0_0_22px_4px_rgba(255,255,255,0.35)] transition-all hover:shadow-[0_0_28px_6px_rgba(255,255,255,0.5)] hover:opacity-95"
        >
          LEARN MORE
        </Link>
      </div>

    </section>
  )
}
