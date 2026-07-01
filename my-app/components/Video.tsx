import { ScrollReveal } from "./ScrollReveal"

interface VideoEntry {
  url: string
  title: string
  duration: string
  featured?: boolean
}

const VIDEOS: VideoEntry[] = [
  {
    // TODO: Replace url with Recording 11 "The Masterclass — AI Monetization in Energy" video URL
    // Supports YouTube embed URLs (e.g. https://www.youtube.com/embed/VIDEO_ID) or direct MP4 URLs
    url: "",
    title: "The Masterclass — AI Monetization in Energy",
    duration: "10 min",
    featured: true,
  },
  {
    // TODO: Replace url with Recording 02 "Who I Am and What I Solve" video URL
    url: "",
    title: "Who I Am and What I Solve",
    duration: "60 sec",
  },
  {
    // TODO: Replace url with Recording 12 "The Q&A: 5 Questions Answered" video URL
    url: "",
    title: "The Q&A: 5 Questions Answered",
    duration: "6 min",
  },
]

function PlayIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#C9A84C">
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  )
}

function VideoPlaceholder({ title, duration, featured }: Omit<VideoEntry, "url">) {
  return (
    <div
      className={[
        "relative w-full aspect-video bg-navy-light border border-line",
        "flex flex-col items-center justify-center gap-4",
      ].join(" ")}
    >
      <div
        className={[
          "rounded-full border-2 border-gold flex items-center justify-center",
          featured ? "w-20 h-20" : "w-14 h-14",
        ].join(" ")}
      >
        <PlayIcon size={featured ? 28 : 20} />
      </div>
      <div className="text-center px-6">
        <p
          className={[
            "font-sans font-medium text-white",
            featured ? "text-[15px]" : "text-[13px]",
          ].join(" ")}
        >
          {title}
        </p>
        <p className="font-sans text-dim text-[12px] mt-1.5">{duration}</p>
      </div>
    </div>
  )
}

function VideoPlayer({ url, title, duration, featured }: VideoEntry) {
  if (!url) {
    return <VideoPlaceholder title={title} duration={duration} featured={featured} />
  }

  return (
    <div className="relative w-full aspect-video bg-navy-light overflow-hidden">
      <iframe
        src={url}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export function Video() {
  return (
    <section id="video" className="bg-navy py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Hear It Directly
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-serif font-bold text-white mb-12"
            style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.2" }}
          >
            No Theory. Just What I&apos;ve Seen and What Actually Works.
          </h2>
        </ScrollReveal>

        {/* Featured video */}
        <ScrollReveal delay={0.15} className="mb-6">
          <VideoPlayer {...VIDEOS[0]} />
        </ScrollReveal>

        {/* Two supporting videos */}
        <div className="grid md:grid-cols-2 gap-6">
          {VIDEOS.slice(1).map((video, i) => (
            <ScrollReveal key={video.title} delay={0.1 + i * 0.08}>
              <VideoPlayer {...video} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
