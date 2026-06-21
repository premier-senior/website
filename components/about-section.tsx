import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Photo Collage */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0 order-2 lg:order-1">
            <Image
              src="/images/about-collage.png"
              alt="Jenny Kenderes of Premier Senior Solutions in various settings"
              width={690}
              height={800}
              className="w-full max-w-lg mx-auto h-auto"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-muted-foreground/40" />
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">ABOUT US</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              My Passion
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              Premier Senior Solutions dedication belongs to seniors and their families, to assist them in the next chapter of their journey. We are committed to finding the best options for seniors to live their best life yet!
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              The search for the right choice for senior care can be a daunting one. That is where we come in. With over 20 years in the senior health care field, we know this industry inside and out and we are here to be your guiding hand as we navigate it together.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              Our process starts with an initial consultation together to discover exactly what is important to you and your loved ones in a community. We are then there throughout the entire journey with you – from scheduling tours of communities, all the way to completing admission paperwork, scheduling a move and finding the right ancillary service providers.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 font-bold text-sm tracking-wider text-primary-foreground bg-primary rounded-xl shadow-[0_0_22px_4px_rgba(193,118,142,0.55)] transition-all hover:shadow-[0_0_28px_6px_rgba(193,118,142,0.7)] hover:opacity-95"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Large decorative ABOUT text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-9xl font-black tracking-widest select-none pointer-events-none hidden lg:block text-primary opacity-[0.04]"
        style={{ writingMode: "vertical-rl" }}
      >
        ABOUT
      </div>
    </section>
  )
}
