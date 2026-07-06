import { ScrollReveal } from "./ScrollReveal"

const SERVICES = [
  {
    title: "Advisory Retainer",
    body: "Ongoing strategic advisory on IP licensing, AI monetization, and technology commercialization. Monthly retainer. Limited availability.",
  },
  {
    title: "Project Engagement",
    body: "Defined-scope consulting: IP audits, royalty framework design, licensing deal structuring, go-to-market strategy for technology assets.",
  },
  {
    title: "Speaking & Keynotes",
    body: "Available for conferences, corporate events, and executive forums in energy, AI, and IP strategy.",
  },
]

export function WorkWithMe() {
  return (
    <section id="work-with-me" className="bg-navy py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Consulting & Advisory
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-serif font-bold text-white mb-14"
            style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.2" }}
          >
            Three Ways to Work Together
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-line mb-12">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="relative bg-navy-light overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
                <div className="p-8 pt-10">
                  <h3 className="font-serif font-bold text-white text-[20px] mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[15px] text-dim leading-[1.75]">{service.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <a
            href="https://calendly.com/victoromoniyi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold text-[15px] rounded-full hover:bg-gold/90 transition-colors duration-200"
          >
            Book a Discovery Call
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
