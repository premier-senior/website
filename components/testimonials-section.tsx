"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Jana S.",
    avatar: "JS",
    text: "Jenny is the best! She went above and beyond to help me and I truly adore this location. You'll not to truly tell! We would recommend her to anyone looking to find a placement!",
  },
  {
    name: "Julie Burke",
    avatar: "JB",
    text: "Jenny is the absolute BEST! She is a HUGE advocate and resource for placing your loved one in a living situation to make it right and she is amazing! Jenny is your girl!",
  },
  {
    name: "Sara Fox",
    avatar: "SF",
    text: "This company truly gives great attention to the senior customer as well. I love how she is genuine, everything and this. This is the place for me. This premier service I would recommend them to anyone.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-gray-300" />
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">TESTIMONIALS</span>
            <div className="h-px w-8 bg-gray-300" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Client Testimonials
          </h2>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: Single card with carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border flex items-center justify-center border-gray-300 hover:border-[#8B1A4A] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: i === current ? "#8B1A4A" : "#d1d5db" }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full border flex items-center justify-center border-gray-300 hover:border-[#8B1A4A] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Desktop pagination dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: i === 0 ? "#8B1A4A" : "#d1d5db" }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 flex flex-col gap-4 shadow-sm">
      <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
          style={{ backgroundColor: "#8B1A4A" }}
        >
          {testimonial.avatar}
        </div>
        <span className="font-bold text-gray-900 text-sm">{testimonial.name}</span>
      </div>
    </div>
  )
}
