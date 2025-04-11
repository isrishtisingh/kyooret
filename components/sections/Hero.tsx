import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-blue-charcoal-950 to-blue-charcoal-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Curated Datasets for South Asia
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Access high-quality data to power your AI.
                <br/>
                <span className="text-blue-charcoal-100 font-semibold italic tracking-wide">
                  Made for the people by the people.
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/datasets">
                <Button size="lg" className="gap-2" variant="default">
                  Explore
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline">
                  Contribute
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/hero3.gif"
              alt="Data visualization"
              width={500}
              height={300}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 