"use client"

import { useState } from "react"
import { ScrollReveal } from "./ScrollReveal"

export function LeadMagnet() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      /*
        TODO: Wire up email capture to your provider.

        Option A — Mailchimp:
          Set MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID in .env.local
          POST to /api/subscribe with { firstName, email }
          Create app/api/subscribe/route.ts using the Mailchimp API

        Option B — ConvertKit:
          Set CONVERTKIT_API_KEY and CONVERTKIT_FORM_ID in .env.local
          POST to /api/subscribe with { firstName, email }
          Create app/api/subscribe/route.ts using the ConvertKit API

        await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, email }),
        })
      */
      await new Promise((r) => setTimeout(r, 700))
      // Trigger checklist PDF download
      const link = document.createElement("a")
      link.href = "/ip-monetization-checklist.pdf"
      link.download = "IP-Monetization-Checklist.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="checklist" className="bg-navy py-24 lg:py-32 border-t border-line">
      <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Free Resource
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-serif font-bold text-white mb-4"
            style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.2" }}
          >
            The IP Monetization Checklist
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-sans text-[15px] text-dim leading-[1.75] mb-10">
            7 questions every energy company should answer before pursuing a licensing
            deal — and almost none do.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="bg-navy-light border border-line p-8">
              <p className="font-sans text-[15px] text-white">
                Your checklist is on its way. Check your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full bg-navy-light border border-line text-white font-sans text-[15px] px-5 py-3.5 placeholder:text-dim focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-navy-light border border-line text-white font-sans text-[15px] px-5 py-3.5 placeholder:text-dim focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-7 py-3.5 bg-gold text-navy font-sans font-semibold text-[15px] rounded-full hover:bg-gold/90 transition-colors duration-200 disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Me the Checklist"}
              </button>
              <p className="font-sans text-[12px] text-dim text-center pt-1">
                No spam. One resource. Unsubscribe anytime.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
