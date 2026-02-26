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
    // Form submission logic would go here
    alert("Thank you for your message! We will be in touch soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Text */}
          <div className="w-full lg:w-2/5">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Get in touch
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Cut costs through the process of finding a senior care facility that is right for you or your loved one — Jenny will help you connect at your table and move forward.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8B1A4A] transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8B1A4A] transition-colors"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8B1A4A] transition-colors mb-4"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8B1A4A] transition-colors mb-4 resize-none"
                required
              />
              <button
                type="submit"
                className="px-10 py-3 font-bold text-sm tracking-wider text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#8B1A4A" }}
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
