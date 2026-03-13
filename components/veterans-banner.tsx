import Link from "next/link"

export default function VeteransBanner() {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden bg-primary">
      {/* Background texture using a subtle overlay */}
      <div className="absolute inset-0 opacity-10 bg-foreground/10" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight text-balance mb-8">
          We are now proud to assist in obtaining Veterans Aid<br className="hidden md:block" /> and Attendance Benefits.
        </h2>
        <Link
          href="#contact"
          className="inline-block px-8 py-3 bg-primary-foreground text-primary font-bold text-sm tracking-wider transition-all hover:opacity-90"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
