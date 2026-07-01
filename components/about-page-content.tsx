import Image from "next/image"

export default function AboutPageContent() {
  return (
    <>
      {/* Intro text section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">About Us</span>
              <div className="h-px w-8 bg-primary/40" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              About Premier Senior Solutions
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
              Premier Senior Solutions dedication belongs to seniors and their families, to assist them in the next
              chapter of their journey. We are committed to finding the best options for seniors to live their best life
              yet!
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
              The search for the right choice for senior care can be a daunting one.{" "}
              <span className="font-bold text-foreground">That is where we come in.</span> With over 20 years in the
              senior and health care field, we know this industry inside and out and are here to be your guiding hand as
              we navigate it together.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
              Our process starts with an initial consultation together to discover exactly what is important to you and
              your loved ones in a community. We are then there throughout the entire journey with you &ndash; from
              scheduling tours of communities, all the way to completing admission paperwork, scheduling a move and
              finding the right ancillary service providers.
            </p>
            <p className="font-bold text-primary text-sm md:text-base">
              We are here for you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Jenny section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: bio */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Jenny Kenderes, Owner &amp; CEO
              </span>
              <div className="h-px w-8 bg-primary/40" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Jenny</h2>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Originally from Westlake, Ohio, Jenny attended St Augustine Academy and is the proud mother of 26 year
                old Jared and 16 year old triplets Matthew, Marissa and Trevor.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Jenny has spent over 25 years in this industry and is extremely passionate about helping seniors and
                their families find quality options. Utilizing a personal approach, Jenny will guide you through this
                process from start to finish and beyond. She is a proud member of the Better Business Bureau.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Jenny is a public speaker, author, and has been known to lend her expertise to various television
                programs. Her commitment remains to helping seniors live their best life while being a trusted advocate
                every step of the way.
              </p>
            </div>
          </div>

          {/* Right: TV image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/jenny-tv-interview.jpg"
                alt="Jenny Kenderes, President and CEO of Premier Senior Solutions, in a WAOH.TV interview on Good Morning Akron"
                width={700}
                height={460}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Holly section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: portrait image */}
          <div className="w-full lg:w-[30%]">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/holly-adkins.png"
                alt="Holly Adkins, Senior Living Advisor at Premier Senior Solutions"
                width={500}
                height={620}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: bio */}
          <div className="w-full lg:w-[70%]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Holly Adkins, Senior Living Advisor
              </span>
              <div className="h-px w-8 bg-primary/40" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Holly</h2>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am a lifelong resident of Bay Village. I am a wife to Rick, mother and grandmother and enjoy spending
                time with my family, as well as vacationing at the beach, sewing and creating quilts.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I felt called to help the senior population in Cleveland, and my 12 years in this industry has fulfilled
                that dream. I consider myself an advocate and problem solver for seniors and work daily to help families
                navigate senior care options. I pride myself on meeting my clients where they are at on their journey
                and assisting them until the best resolution is found.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
