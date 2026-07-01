"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

interface EmailModalProps {
  open: boolean
  onClose: () => void
}

export function EmailModal({ open, onClose }: EmailModalProps) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      /*
        TODO: Same API integration as LeadMagnet.tsx — see that file for instructions.
        Also trigger the checklist PDF download here.
      */
      await new Promise((r) => setTimeout(r, 700))
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }
            }
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto bg-navy-light border border-line p-8 lg:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Get the IP Monetization Checklist"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-dim hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3.5 3.5L14.5 14.5M14.5 3.5L3.5 14.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <p className="font-sans text-[15px] text-white">
                  Your checklist is on its way. Check your inbox.
                </p>
              </div>
            ) : (
              <>
                <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-3">
                  Free Resource
                </p>
                <h3 className="font-serif font-bold text-white text-[24px] leading-snug mb-2">
                  The IP Monetization Checklist
                </h3>
                <p className="font-sans text-[14px] text-dim leading-[1.7] mb-6">
                  7 questions every energy company should answer before pursuing a
                  licensing deal — and almost none do.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-navy border border-line text-white font-sans text-[15px] px-5 py-3.5 placeholder:text-dim focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-navy border border-line text-white font-sans text-[15px] px-5 py-3.5 placeholder:text-dim focus:outline-none focus:border-gold transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-7 py-3.5 bg-gold text-navy font-sans font-semibold text-[15px] rounded-full hover:bg-gold/90 transition-colors duration-200 disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send Me the Checklist"}
                  </button>
                  <p className="font-sans text-[12px] text-dim text-center">
                    No spam. One resource. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
