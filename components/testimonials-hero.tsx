import Image from "next/image"

const floatingCards = [
  {
    name: "Warren R.",
    avatar: "WR",
    text: "It takes a special person to do what you do. I'm glad our paths crossed.",
    className: "top-16 left-0",
  },
  {
    name: "Jared G",
    avatar: "JG",
    text: "Jenny's empathy and support for everyone is amazing and she is the best.",
    className: "top-40 right-0",
  },
  {
    name: "Alexis Golden",
    avatar: "AG",
    text: "HIGHLY RECOMMEND PREMIER SENIOR SOLUTIONS. Jenny was so helpful with everything we needed for my family.",
    className: "bottom-16 left-4",
  },
]

export default function TestimonialsHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 md:pb-0"
      style={{ background: "linear-gradient(135deg, #af5e8a, #891c51)" }}
    >
      {/* Decorative circular photos */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-10 left-[12%] w-20 h-20 rounded-full bg-white/30" />
        <div className="absolute top-24 right-[20%] w-14 h-14 rounded-full bg-white/30" />
        <div className="absolute bottom-20 left-[6%] w-24 h-24 rounded-full bg-white/30" />
        <div className="absolute bottom-10 right-[10%] w-16 h-16 rounded-full bg-white/30" />
        <div className="absolute top-1/2 left-[40%] w-12 h-12 rounded-full bg-white/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: copy */}
        <div className="relative z-10 max-w-xl">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight text-balance mb-5">
            Trusted by thousands of seniors and their families
          </h1>
          <p className="text-white/85 text-sm md:text-base leading-relaxed">
            When it comes to your loved ones, you only want the best. Premier Senior Solutions prides
            itself in providing trusted senior living solutions to help you find the perfect fit. Our
            expert team will help you navigate the world of senior living and find the right place for you.
          </p>
        </div>

        {/* Right: portrait + floating cards */}
        <div className="relative h-[420px] md:h-[480px] flex items-end justify-center">
          <Image
            src="/images/jenny-portrait.png"
            alt="Premier Senior Solutions founder"
            width={500}
            height={620}
            className="relative z-10 h-full w-auto object-contain object-bottom"
            priority
          />

          {floatingCards.map((card) => (
            <div
              key={card.name}
              className={`absolute z-20 hidden sm:block w-52 bg-white rounded-lg shadow-lg p-3 ${card.className}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0">
                  {card.avatar}
                </div>
                <span className="font-bold text-foreground text-xs">{card.name}</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-snug">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
