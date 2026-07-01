"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface HeroProps {
  onEmailCaptureOpen: () => void
}

export function Hero({ onEmailCaptureOpen }: HeroProps) {
  const shouldReduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.28,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  }

  const EASE = [0.21, 0.47, 0.32, 0.98] as const

  const line = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE },
    },
  }

  return (
    <section className="relative min-h-screen bg-navy flex flex-col justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 items-center">

          {/* Left — Typographic signature moment */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.p
              variants={line}
              className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-10"
            >
              IP Monetization · Technology Commercialization
            </motion.p>

            {/* THE SIGNATURE MOMENT */}
            <div className="space-y-1 mb-10">
              <motion.div variants={line}>
                <span
                  className="font-serif font-bold text-gold leading-[0.95] block"
                  style={{ fontSize: "clamp(60px, 9vw, 96px)" }}
                >
                  $42 Billion.
                </span>
              </motion.div>

              <motion.div variants={line}>
                <span
                  className="font-serif font-bold text-white leading-[0.95] block"
                  style={{ fontSize: "clamp(44px, 6.5vw, 72px)" }}
                >
                  Sitting unlicensed.
                </span>
              </motion.div>

              <motion.div variants={line}>
                <span
                  className="font-serif font-bold text-gold leading-[0.95] block"
                  style={{ fontSize: "clamp(60px, 9vw, 96px)" }}
                >
                  Every year.
                </span>
              </motion.div>
            </div>

            <motion.p
              variants={line}
              className="font-sans text-[15px] text-dim leading-[1.7] max-w-[520px] mb-10"
            >
              Energy companies build world-class technology. Almost none of them
              know what it&apos;s worth to someone else. I fix that.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={line} className="flex flex-col sm:flex-row gap-4">
              {/* TODO: Replace href with Calendly URL — e.g. https://calendly.com/victoromoniyi/discovery */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-navy font-sans font-semibold text-[14px] rounded-full hover:bg-gold/90 transition-colors duration-200"
              >
                Book a Discovery Call
              </a>
              <button
                onClick={onEmailCaptureOpen}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-gold/40 text-gold font-sans font-semibold text-[14px] rounded-full hover:border-gold hover:bg-gold/5 transition-all duration-200"
              >
                Get the IP Monetization Checklist
              </button>
            </motion.div>
          </motion.div>

          {/* Right — Headshot (desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: shouldReduceMotion ? 0 : 1.6,
              ease: EASE,
            }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-72 h-72 xl:w-88 xl:h-88">
              <div className="w-full h-full rounded-full border-2 border-gold overflow-hidden bg-navy-light flex flex-col items-center justify-center gap-2">
                {/*
                  TODO: Replace this placeholder with studio headshot from June 19 session.
                  Use circular crop. Keep the gold border (border-2 border-gold on parent).
                  Recommended: <Image src="/headshot.jpg" alt="Victor Omoniyi" fill className="object-cover" />
                */}
                <span className="font-serif text-7xl font-bold text-gold select-none">VO</span>
                <span className="font-sans text-[10px] text-dim tracking-[0.18em] uppercase">
                  Photo Placeholder
                </span>
              </div>
              {/* Outer ring accent */}
              <div className="absolute -inset-4 rounded-full border border-gold/15 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Mobile headshot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 1.8 }}
          className="lg:hidden flex justify-center mt-16"
        >
          <div className="relative w-52 h-52">
            <div className="w-full h-full rounded-full border-2 border-gold overflow-hidden bg-navy-light flex flex-col items-center justify-center gap-1.5">
              {/* TODO: Replace with studio headshot — see desktop version above */}
              <span className="font-serif text-5xl font-bold text-gold select-none">VO</span>
              <span className="font-sans text-[10px] text-dim tracking-[0.15em] uppercase">Photo Placeholder</span>
            </div>
            <div className="absolute -inset-3 rounded-full border border-gold/15 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M5 8.5L11 14.5L17 8.5"
              stroke="#C9A84C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
