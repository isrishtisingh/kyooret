import Image from "next/image"

export function TrustedBy() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-medium tracking-tight">Trusted by innovative companies worldwide</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=40&width=120&text=LOGO ${i}`}
                  alt={`Client logo ${i}`}
                  width={120}
                  height={40}
                  className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 