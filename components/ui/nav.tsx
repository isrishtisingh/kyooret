import Link from "next/link"
import { Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#datasets", label: "Datasets" },
  { href: "#pricing", label: "Pricing" },
  { href: "#volunteer", label: "Volunteer" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="h-6 w-6 text-blue-charcoal-600" />
          <span className="text-xl font-bold tracking-tight">Kyooret</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-blue-charcoal-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Button>Explore</Button>
        </div>
      </div>
    </header>
  )
} 