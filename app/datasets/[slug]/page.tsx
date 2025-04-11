import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const datasets = {
  "indian-food-images": {
    title: "Indian Food Images",
    description: "A comprehensive dataset of Indian food images with detailed annotations.",
    count: "10,000+ images",
    category: "Computer Vision",
    details: {
      size: "50GB",
      format: "JPEG",
      resolution: "1920x1080",
      license: "Commercial",
      lastUpdated: "2024-03-15",
    },
    features: [
      "High-quality food images",
      "Detailed annotations",
      "Multiple angles",
      "Various lighting conditions",
    ],
  },
  "indian-language-text": {
    title: "Indian Language Text",
    description: "Text datasets in various Indian languages for NLP applications.",
    count: "5 languages",
    category: "Natural Language Processing",
    details: {
      size: "20GB",
      format: "TXT",
      languages: ["Hindi", "Bengali", "Tamil", "Telugu", "Kannada"],
      license: "Research",
      lastUpdated: "2024-03-10",
    },
    features: [
      "Multiple Indian languages",
      "Clean and structured text",
      "Various domains",
      "Rich metadata",
    ],
  },
  "indian-street-scenes": {
    title: "Indian Street Scenes",
    description: "Street view images from across India for urban analysis.",
    count: "50,000+ images",
    category: "Computer Vision",
    details: {
      size: "200GB",
      format: "JPEG",
      resolution: "3840x2160",
      license: "Commercial",
      lastUpdated: "2024-03-01",
    },
    features: [
      "High-resolution images",
      "Geographic metadata",
      "Time-stamped",
      "Weather conditions",
    ],
  },
  "indian-product-images": {
    title: "Indian Product Images",
    description: "E-commerce product images from Indian marketplaces.",
    count: "100,000+ images",
    category: "Computer Vision",
    details: {
      size: "500GB",
      format: "JPEG",
      resolution: "1920x1080",
      license: "Commercial",
      lastUpdated: "2024-02-28",
    },
    features: [
      "Multiple categories",
      "White background",
      "Product metadata",
      "Price information",
    ],
  },
}

export default function DatasetPage({ params }: { params: { slug: string } }) {
  const dataset = datasets[params.slug as keyof typeof datasets]

  if (!dataset) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{dataset.title}</h1>
          <p className="text-xl text-muted-foreground">{dataset.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Dataset Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Size</dt>
                  <dd>{dataset.details.size}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Format</dt>
                  <dd>{dataset.details.format}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">License</dt>
                  <dd>{dataset.details.license}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Last Updated</dt>
                  <dd>{dataset.details.lastUpdated}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dataset.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button size="lg">Download Dataset</Button>
          <Button variant="outline" size="lg">Request Sample</Button>
        </div>
      </div>
    </div>
  )
} 