import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-charcoal-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to unlock the power of curated data?
            </h2>
            <p className="max-w-[600px] text-teal-100 md:text-xl/relaxed">
              Join thousands of organizations using Sanchaya to make better, data-driven decisions.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 