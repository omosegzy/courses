import { ScrollReveal } from "./ScrollReveal"

const CREDENTIALS = ["Cornell", "ExxonMobil", "A.T. Kearney", "Accenture"]

export function About() {
  return (
    <section id="about" className="bg-navy py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left — Headshot */}
          <ScrollReveal className="flex justify-center mb-14 lg:mb-0">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="w-full h-full rounded-full border-2 border-gold overflow-hidden bg-navy-light flex flex-col items-center justify-center gap-2">
                {/*
                  TODO: Replace this placeholder with studio headshot from June 19 session.
                  Circular crop. Gold border is on the parent element.
                  <Image src="/headshot.jpg" alt="Victor Omoniyi" fill className="object-cover" />
                */}
                <span className="font-serif text-7xl font-bold text-gold select-none">VO</span>
                <span className="font-sans text-[10px] text-dim tracking-[0.18em] uppercase">
                  Photo Placeholder
                </span>
              </div>
              <div className="absolute -inset-4 rounded-full border border-gold/15 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right — Copy */}
          <div>
            <ScrollReveal>
              <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
                About Mister O.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="font-serif font-bold text-white mb-6"
                style={{ fontSize: "clamp(22px, 3.5vw, 36px)", lineHeight: "1.2" }}
              >
                Practitioner. Not a Consultant Who Reads About the Energy Industry.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-sans text-[15px] text-dim leading-[1.75] mb-5">
                I&apos;ve spent 7+ years inside one of the world&apos;s largest energy companies
                structuring IP licensing deals, designing royalty frameworks, valuing technology
                portfolios, and helping leadership decide which innovations are worth
                commercializing and how.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-[15px] text-dim leading-[1.75] mb-10">
                Before that — ExxonMobil, A.T. Kearney, Accenture. Energy markets, supply chain,
                enterprise systems across five industries. Cornell MBA + M.Eng in Operations
                Research. The quantitative rigor that makes valuation work, not just theory.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {CREDENTIALS.map((cred, i) => (
                  <span key={cred} className="flex items-center gap-3">
                    <span className="font-sans text-[13px] text-dim font-medium">{cred}</span>
                    {i < CREDENTIALS.length - 1 && (
                      <span className="w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
