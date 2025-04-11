"use client"
import Link from "next/link"
import { Database, User, LogOut, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/datasets", label: "Datasets" },
  { href: "/pricing", label: "Pricing" },
]

const resourceItems = [
  { href: "/resources/about", label: "About" },
  { href: "/resources/contact", label: "Contact" },
]

export function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isDashboard = pathname?.startsWith("/dashboard")

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      setIsLoggedIn(!!token)
    }
    checkAuth()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <Database className="h-6 w-6 text-blue-charcoal-600" />
          <span className="text-xl font-bold tracking-tight">Kyooret</span>
        </Link>

        {/* Desktop Navigation */}
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-charcoal-600">
              Resources
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {resourceItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {isLoggedIn && (
            <Link
              href="/dashboard"
              className="text-sm font-medium transition-colors hover:text-blue-charcoal-600"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-blue-charcoal-600"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Resources</p>
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block pl-4 text-sm font-medium transition-colors hover:text-blue-charcoal-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                {isLoggedIn && (
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium transition-colors hover:text-blue-charcoal-600"
                  >
                    Dashboard
                  </Link>
                )}
                {isLoggedIn ? (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Link href="/login" className="block">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" className="block">
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Login
              </Link>
              <Link href="/signup">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </div>
          )}
          <Link href="/datasets">
          <Button>Explore</Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 