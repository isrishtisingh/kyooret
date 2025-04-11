import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const datasets = [
  {
    title: "Facial Dataset",
    description: "Annotated face images for diverse South Asian skin tones.",
    count: "5000+ images",
    color: "bg-teal-100",
    image: "/images/datasets/facial.jpg",
    features: [
      "Diverse South Asian ethnicities",
      "Multiple lighting conditions",
      "Various facial expressions",
      "Age range: 18-65 years",
      "High-resolution images"
    ]
  },
  {
    title: "Age & Gender Recognition",
    description: "Labeled images and annotations for demographic classification models.",
    count: "5000+ images",
    color: "bg-violet-100",
    image: "/images/datasets/age-gender.jpg",
    features: [
      "Accurate age labels",
      "Gender annotations",
      "Diverse age groups",
      "Multiple ethnicities",
      "Various poses and angles"
    ]
  },
  {
    title: "Regional India",
    description: "Region-wise datasets capturing linguistic and visual diversity.",
    count: "5000+ images",
    color: "bg-yellow-100",
    image: "/images/datasets/regional.jpg",
    features: [
      "Coverage of all Indian states",
      "Cultural landmarks",
      "Traditional attire",
      "Local festivals",
      "Geographic diversity"
    ]
  },
  {
    title: "Women Safety",
    description: "Census, incident reports and survey data on female safety.",
    count: "Coming Soon",
    color: "bg-rose-100",
    image: "/images/datasets/women-safety.jpg",
    features: [
      "Crime statistics",
      "Safety survey data",
      "Demographic analysis",
      "Regional comparisons",
      "Trend analysis"
    ]
  },
  {
    title: "Healthcare Analytics",
    description: "Comprehensive healthcare and medical research data.",
    count: "Coming Soon",
    color: "bg-blue-100",
    image: "/images/datasets/healthcare.jpg",
    features: [
      "Medical records",
      "Treatment outcomes",
      "Patient demographics",
      "Disease prevalence",
      "Healthcare access data"
    ]
  },
  {
    title: "Environmental Data",
    description: "Climate, sustainability, and environmental metrics.",
    count: "Coming Soon",
    color: "bg-green-100",
    image: "/images/datasets/environmental.jpg",
    features: [
      "Air quality data",
      "Water quality metrics",
      "Climate patterns",
      "Biodiversity records",
      "Environmental impact data"
    ]
  },
]

export default function DatasetsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
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

      <div className="space-y-24">
        {datasets.map((dataset, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <div className={`absolute inset-0 ${dataset.color} opacity-50`} />
              <Image
                src={dataset.image}
                alt={dataset.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 ">
              <h3 className="text-2xl font-bold text-gray-300">{dataset.title}</h3>
              <p className="text-gray-600">{dataset.description}</p>
              <p className="font-medium text-teal-600">{dataset.count}</p>
              <ul className="space-y-2">
                {dataset.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-gray-600">
                    <ChevronRight className="h-4 w-4 mr-2 text-teal-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="bg-teal-600 hover:bg-teal-700">
                Explore Dataset
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 