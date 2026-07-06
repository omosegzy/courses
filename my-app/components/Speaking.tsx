import { ScrollReveal } from "./ScrollReveal"

const TALKS = [
  {
    title: "The AI Monetization Gap in Energy",
    badge: "Signature Talk",
    body: "Why energy companies are sitting on billions in unlicensed AI assets — and what the commercialization mechanism actually looks like. For energy executives, innovation leaders, and technology strategists.",
  },
  {
    title: "The IP Monetization Framework",
    body: "Why technology commercialization fails and the practical steps to fix it. For IP strategy conferences, technology transfer events, and corporate innovation forums.",
  },
  {
    title: "IP Strategy for the Age of AI",
    body: "Who owns the algorithm, how do you protect it, and how do you monetize it. The talk energy executives and AI leaders both need right now.",
  },
]

export function Speaking() {
  return (
    <section id="speaking" className="bg-navy py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            On Stage
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-serif font-bold text-white mb-14"
            style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.2" }}
          >
            Three Talks. One Practitioner Perspective.
          </h2>
        </ScrollReveal>

        <div className="space-y-4 mb-12">
          {TALKS.map((talk, i) => (
            <ScrollReveal key={talk.title} delay={i * 0.08}>
              <div className="flex bg-navy-light overflow-hidden">
                {/* Left gold accent bar */}
                <div className="w-1 bg-gold flex-shrink-0" />
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-serif font-bold text-white text-[20px] leading-snug">
                      {talk.title}
                    </h3>
                    {talk.badge && (
                      <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-navy bg-gold px-2.5 py-1 rounded-full">
                        {talk.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-[15px] text-dim leading-[1.75]">{talk.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/speaker-one-pager.pdf"
              download="Victor-Omoniyi-Speaker-One-Pager.pdf"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-gold/40 text-gold font-sans font-semibold text-[14px] rounded-full hover:border-gold hover:bg-gold/5 transition-all duration-200"
            >
              Download Speaker One-Pager
            </a>
            <a
              href="https://calendly.com/victoromoniyi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-navy font-sans font-semibold text-[14px] rounded-full hover:bg-gold/90 transition-colors duration-200"
            >
              Book Victor for Your Event
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
