import type { ReactNode } from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sanchaya - Curated Datasets for Powerful Insights",
  description: "Sanchaya provides high-quality, curated datasets that help enterprises make data-driven decisions with confidence."
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}


import './globals.css'