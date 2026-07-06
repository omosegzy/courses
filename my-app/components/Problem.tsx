"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "./ScrollReveal"

const CARDS = [
  {
    title: "The Gap",
    body: "Engineers build it. Lawyers protect it. Nobody asks what it's worth to someone else.",
  },
  {
    title: "The Cost",
    body: "Billions in AI and technology assets sit unlicensed every year — not because they lack value, but because nobody owns the commercial question.",
  },
  {
    title: "The Fix",
    body: "A rigorous commercial process: identify, value, structure, license. That's the work.",
  },
]

function ProblemCard({ title, body, delay }: { title: string; body: string; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <ScrollReveal delay={delay}>
      <div
        className="relative bg-navy-light overflow-hidden h-full cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Static top gold border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold z-10" />
        {/* Full-perimeter border on hover */}
        <motion.div
          className="absolute inset-0 border border-gold pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
        <div className="p-8 pt-10">
          <h3 className="font-serif font-bold text-white text-[20px] mb-4 leading-snug">
            {title}
          </h3>
          <p className="font-sans text-[15px] text-dim leading-[1.75]">{body}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function Problem() {
  return (
    <section id="problem" className="bg-navy py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Why This Matters
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-serif font-bold text-white mb-16 max-w-3xl"
            style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.2" }}
          >
            Most organizations are world-class at building technology.
            Very few know how to monetize it.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-line">
          {CARDS.map((card, i) => (
            <ProblemCard key={card.title} {...card} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
