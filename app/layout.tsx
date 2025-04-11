import type { ReactNode } from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Nav } from "@/components/ui/nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kyooret - Curated Datasets for Powerful Insights",
  description: "Kyooret provides high-quality, curated datasets that help enterprises make data-driven decisions with confidence."
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}


import './globals.css'