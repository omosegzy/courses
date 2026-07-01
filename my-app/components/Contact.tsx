"use client"

import { useState } from "react"
import { ScrollReveal } from "./ScrollReveal"

const FOOTER_LINKS = ["About", "Speaking", "Work With Me", "Contact"]

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      /*
        TODO: Wire up contact form to your preferred service.
        Options: Resend, Formspree, AWS SES, or a simple Next.js API route.
        E.g. POST to /api/contact with form data.
      */
      await new Promise((r) => setTimeout(r, 700))
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className="bg-navy py-24 lg:py-32 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20">

            {/* Left — Contact details */}
            <div className="mb-14 lg:mb-0">
              <ScrollReveal>
                <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
                  Contact
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2
                  className="font-serif font-bold text-white mb-8"
                  style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: "1.15" }}
                >
                  Victor Omoniyi<br />
                  <span className="text-gold">Mister O.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="space-y-3 font-sans text-[15px]">
                  <p>
                    <a
                      href="mailto:victor.omoniyi@yahoo.com"
                      className="text-dim hover:text-white transition-colors"
                    >
                      victor.omoniyi@yahoo.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://linkedin.com/in/victoromoniyi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dim hover:text-white transition-colors"
                    >
                      linkedin.com/in/victoromoniyi
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://victoromoniyi.com"
                      className="text-dim hover:text-white transition-colors"
                    >
                      victoromoniyi.com
                    </a>
                  </p>
                  <p className="text-dim/60 text-[14px] pt-1">
                    Based in Saudi Arabia · Available globally
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Contact form */}
            <ScrollReveal delay={0.1}>
              {submitted ? (
                <div className="bg-navy-light border border-line p-8">
                  <p className="font-sans text-[15px] text-white">
                    Message received. I&apos;ll be in touch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-navy-light border border-line text-white font-sans text-[15px] px-5 py-3.5 placeholder:text-dim focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-navy-light border border-line text-white font-sans text-[15px] px-5 py-3.5 placeholder:text-dim focus:outline-none focus:border-gold transition-colors"
                  />
                  <textarea
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    required
                    className="w-full bg-navy-light border border-line text-white font-sans text-[15px] px-5 py-3.5 placeholder:text-dim focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-7 py-3.5 bg-gold text-navy font-sans font-semibold text-[15px] rounded-full hover:bg-gold/90 transition-colors duration-200 disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send"}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-line py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="font-sans text-[13px] text-dim order-3 md:order-1">
              © 2026 Victor Omoniyi · JayFini Global Investments LLC
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 order-2">
              {FOOTER_LINKS.map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-sans text-[13px] text-dim hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* TODO: Replace href with Calendly URL */}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gold text-navy font-sans font-semibold text-[13px] rounded-full hover:bg-gold/90 transition-colors order-1 md:order-3"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
