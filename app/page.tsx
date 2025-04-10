import Image from "next/image"
import { ChevronRight, Database, BarChart3, Shield, Globe, Filter, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/ui/nav"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { Features } from "@/components/sections/Features"
import { Datasets } from "@/components/sections/Datasets"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav/>
      <main className="flex-1">
        <Header />
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
