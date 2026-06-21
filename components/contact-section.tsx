"use client"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will be in touch soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Text */}
          <div className="w-full lg:w-2/5">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Get in touch
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Cut costs through the process of finding a senior care facility that is right for you or your loved one — Jenny will help you connect with the right community and move forward.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-sm p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors mb-4"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors mb-4 resize-none"
                required
              />
              <button
                type="submit"
                className="px-10 py-3 font-bold text-sm tracking-wider text-primary-foreground bg-primary rounded-xl shadow-[0_0_22px_4px_rgba(193,118,142,0.55)] transition-all hover:shadow-[0_0_28px_6px_rgba(193,118,142,0.7)] hover:opacity-95"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
