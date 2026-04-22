import Link from "next/link"
import Image from "next/image"

export default function VeteransBanner() {
  return (
    <section className="py-24 px-4 text-center relative overflow-hidden">
      {/* Background photo of veteran hugging loved one */}
      <Image
        src="/images/veteran-hug.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      {/* Primary color overlay */}
      <div className="absolute inset-0 bg-primary opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight text-balance mb-8">
          We are now proud to assist in obtaining Veterans Aid
          <br className="hidden md:block" /> and Attendance Benefits.
        </h2>
        <Link
          href="#contact"
          className="inline-block px-8 py-3 bg-foreground text-primary-foreground font-bold text-xs tracking-widest rounded-md transition-all hover:opacity-90"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
