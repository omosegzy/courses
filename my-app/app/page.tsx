"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Problem } from "@/components/Problem"
import { About } from "@/components/About"
import { Speaking } from "@/components/Speaking"
import { Video } from "@/components/Video"
import { WorkWithMe } from "@/components/WorkWithMe"
import { LeadMagnet } from "@/components/LeadMagnet"
import { Contact } from "@/components/Contact"
import { EmailModal } from "@/components/EmailModal"

export default function Home() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)

  return (
    <>
      <Navigation />
      <main>
        <Hero onEmailCaptureOpen={() => setEmailModalOpen(true)} />
        <Problem />
        <About />
        <Speaking />
        <Video />
        <WorkWithMe />
        <LeadMagnet />
        <Contact />
      </main>
      <EmailModal
        open={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </>
  )
}
