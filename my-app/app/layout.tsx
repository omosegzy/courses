import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Victor Omoniyi (Mister O.) — IP Monetization & Technology Commercialization",
  description:
    "I help energy companies identify, value, and license their AI and technology assets. Practitioner. 7+ years inside one of the world's largest energy companies.",
  keywords: ["IP monetization", "technology commercialization", "energy industry", "AI licensing", "Victor Omoniyi"],
  authors: [{ name: "Victor Omoniyi" }],
  openGraph: {
    title: "Victor Omoniyi (Mister O.) — IP Monetization & Technology Commercialization",
    description: "Billions in AI and technology assets sit unlicensed every year. I fix that.",
    url: "https://victoromoniyi.com",
    siteName: "Victor Omoniyi",
    type: "website",
    // TODO: Add OG image at /public/og-image.jpg (1200×630) for LinkedIn sharing
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Omoniyi (Mister O.)",
    description: "Billions in AI and technology assets sit unlicensed every year. I fix that.",
  },
  metadataBase: new URL("https://victoromoniyi.com"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/*
          TODO: Uncomment and replace G-XXXXXXXXXX with your GA4 Measurement ID
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}} />
        */}
      </head>
      <body className="bg-navy text-white antialiased">{children}</body>
    </html>
  )
}
