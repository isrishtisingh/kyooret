import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/sections/Hero"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { Features } from "@/components/sections/Features"
import { Datasets } from "@/components/sections/Datasets"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <Datasets />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
