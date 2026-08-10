"use client"

import { useState } from "react"
import { submitLead } from "@/app/actions/leads"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const result = await submitLead(formData)

    if (result.ok) {
      setStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } else {
      setStatus("error")
      setErrorMessage(result.error)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center text-balance">
          Get in touch!
        </h2>

        <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-background focus:outline-none focus:border-primary transition-colors resize-none"
              required
            />
          </div>

          {status === "success" && (
            <p
              role="status"
              className="mb-4 rounded border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground"
            >
              Thank you for your message! We will be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              className="mb-4 rounded border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-10 py-3 font-bold text-sm tracking-wider text-primary-foreground bg-primary rounded-xl shadow-[0_0_22px_4px_rgba(193,118,142,0.55)] transition-all hover:shadow-[0_0_28px_6px_rgba(193,118,142,0.7)] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "SENDING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  )
}
