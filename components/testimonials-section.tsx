"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Susie B.",
    avatar: "SB",
    text: "Jenny is the best! She went above and beyond helping my husband and I find a place for his father. And it was no easy task! We would recommend her to anyone looking for this type of service!",
  },
  {
    name: "Julie Burke",
    avatar: "JB",
    text: "Jenny is the absolute BEST! This is a HUGE decision and knowing you have someone who is caring and loving in your corner to make it right is so important. Jenny is your girl!",
  },
  {
    name: "Dana Acy",
    avatar: "DA",
    text: "This company really gave great attention to the details. Sometimes we don't know how to process everything and they filled in the gaps for me. Truly priceless service I would recommend them to anyone.",
  },
  {
    name: "Warren R.",
    avatar: "WR",
    text: "It takes a special person to do what you do. I'm glad our paths crossed, I know the outcome for my Uncle would not have been as good as it is if I were doing this on my own.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-border" />
            <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">TESTIMONIALS</span>
            <div className="h-px w-8 bg-border" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Client Testimonials
          </h2>
        </div>

        {/* Desktop: sliding window of 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (current + offset) % testimonials.length
            return <TestimonialCard key={index} testimonial={testimonials[index]} />
          })}
        </div>

        {/* Mobile: Single card with carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Desktop pagination dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="bg-secondary rounded-xl p-6 flex flex-col gap-4 shadow-sm">
      <p className="text-muted-foreground font-poppins font-bold not-italic text-[14px] leading-relaxed flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs flex-shrink-0">
          {testimonial.avatar}
        </div>
        <span className="font-bold text-foreground text-sm">{testimonial.name}</span>
      </div>
    </div>
  )
}
