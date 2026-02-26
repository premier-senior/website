import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Photo Collage */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full max-w-lg mx-auto" style={{ height: "480px" }}>
              {/* Top-left large image */}
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/caregiver-1.jpg"
                  alt="Senior care services"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top-right medium image */}
              <div className="absolute top-6 right-8 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/family-1.jpg"
                  alt="Family care"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Center large image */}
              <div className="absolute top-28 left-16 w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                <Image
                  src="/images/about-woman.jpg"
                  alt="Founder of Premier Senior Solutions"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom right image */}
              <div className="absolute bottom-12 right-0 w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/senior-care-2.jpg"
                  alt="Senior living"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom left small rectangle */}
              <div className="absolute bottom-0 left-4 w-36 h-24 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/senior-care-1.jpg"
                  alt="Care facility"
                  width={144}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative pink square */}
              <div className="absolute bottom-16 left-0 w-20 h-20 rounded-lg" style={{ backgroundColor: "#8B1A4A", opacity: 0.15 }} />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gray-400" />
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">ABOUT US</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              My Passion
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
              Premier Senior Solutions strives to be there for seniors and their families to assist them through the next chapter of their journey. We are committed to being there for families and helping seniors live their best life for as long as possible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
              The search for the right choice for senior care can be a daunting one. That is where we come in. With over 20 years in the senior health care field, we know this industry inside and out and we are here to be your guiding hand as we navigate it together.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              Our process starts with an initial consultation together to discover exactly what is important to you, one of your loved ones, or a community member. We are then there on the journey with you — from scheduling tours of communities, all the way to completing admissions paperwork, collecting reviews, and finding the right and truly senior care provider.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 font-bold text-sm tracking-wider text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#8B1A4A" }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Large decorative ABOUT text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-9xl font-black tracking-widest select-none pointer-events-none hidden lg:block"
        style={{ color: "#8B1A4A", opacity: 0.04, writingMode: "vertical-rl" }}
      >
        ABOUT
      </div>
    </section>
  )
}
