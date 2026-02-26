import Link from "next/link"

export default function VeteransBanner() {
  return (
    <section
      className="py-20 px-4 text-center relative overflow-hidden"
      style={{ backgroundColor: "#8B1A4A" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-premier-senior-2026-02-26-10_55_30.png-2WO0qtsmuVGlTomIfaHeWM6WISWLcR.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance mb-8">
          We are now proud to assist in obtaining Veterans Aid<br className="hidden md:block" /> and Attendance Benefits.
        </h2>
        <Link
          href="#contact"
          className="inline-block px-8 py-3 bg-white font-bold text-sm tracking-wider transition-all hover:bg-gray-100"
          style={{ color: "#8B1A4A" }}
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
