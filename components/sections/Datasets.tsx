import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Datasets() {
  const datasets = [
    {
      title: "Facial Dataset",
      description: "Annotated face images for diverse South Asian skin tones.",
      count: "10000+ images",
      color: "bg-rose-100",
    },
    {
      title: "Age & Gender Recognition",
      description: "Labeled images and annotations for demographic classification models.",
      count: "10000+ images",
      color: "bg-violet-100",
    },
    {
      title: "Regional India",
      description: "Region-wise datasets capturing linguistic and visual diversity.",
      count: "5000+ images",
      color: "bg-yellow-100",
    },
    {
      title: "Women Safety",
      description: "Census, incident reports and survey data on female safety.",
      count: "Coming Soon",
      color: "bg-teal-100",
    },
    {
      title: "Healthcare Analytics",
      description: "Comprehensive healthcare and medical research data.",
      count: "Coming Soon",
      color: "bg-teal-100",
    },
    {
      title: "Environmental Data",
      description: "Climate, sustainability, and environmental metrics.",
      count: "Coming Soon",
      color: "bg-emerald-100",
    },
  ]

  return (
    <section id="datasets" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 mb-2 px-8 py-2 text-md text-teal-700">Datasets</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Explore our premium dataset collections
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Browse through our diverse range of high-quality datasets curated for developers, researchers, enterprises and governments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {datasets.map((dataset, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className={`absolute inset-0 ${dataset.color} opacity-50`} />
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-gray-900">{dataset.title}</h3>
                <p className="mt-2 text-gray-600">{dataset.description}</p>
                <p className="mt-4 font-medium text-teal-600">{dataset.count}</p>
                <Button variant="ghost" className="mt-4 bg-teal-600 group-hover:bg-teal-700">
                  Explore
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
            View All Datasets
          </Button>
        </div>
      </div>
    </section>
  )
} 