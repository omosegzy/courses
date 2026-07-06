"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Speaking", href: "#speaking" },
  { label: "Work With Me", href: "#work-with-me" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy/90 backdrop-blur-md border-b border-line"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-baseline gap-2 shrink-0">
            <span className="font-sans font-medium text-white text-[15px] tracking-tight">
              Victor Omoniyi
            </span>
            <span className="font-sans font-medium text-gold text-[15px] tracking-tight">
              · Mister O.
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[13px] text-dim hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/victoromoniyi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gold text-navy font-sans font-semibold text-[13px] rounded-full hover:bg-gold/90 transition-colors duration-200"
            >
              Book a Discovery Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={[
                "block w-6 h-[1.5px] bg-white origin-center transition-transform duration-200",
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-[1.5px] bg-white transition-opacity duration-200",
                mobileOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-[1.5px] bg-white origin-center transition-transform duration-200",
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-2xl font-medium text-white hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/victoromoniyi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3.5 bg-gold text-navy font-sans font-semibold text-[15px] rounded-full"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
