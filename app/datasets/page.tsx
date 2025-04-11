import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const datasets = [
  {
    slug: "indian-food-images",
    title: "Indian Food Images",
    description: "A comprehensive dataset of Indian food images with detailed annotations.",
    count: "10,000+ images",
    category: "Computer Vision",
  },
  {
    slug: "indian-language-text",
    title: "Indian Language Text",
    description: "Text datasets in various Indian languages for NLP applications.",
    count: "5 languages",
    category: "Natural Language Processing",
  },
  {
    slug: "indian-street-scenes",
    title: "Indian Street Scenes",
    description: "Street view images from across India for urban analysis.",
    count: "50,000+ images",
    category: "Computer Vision",
  },
  {
    slug: "indian-product-images",
    title: "Indian Product Images",
    description: "E-commerce product images from Indian marketplaces.",
    count: "100,000+ images",
    category: "Computer Vision",
  },
]

export default function DatasetsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Datasets</h1>
        <p className="text-xl text-muted-foreground">
          High-quality datasets curated for Indian context
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datasets.map((dataset) => (
          <Link key={dataset.slug} href={`/datasets/${dataset.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{dataset.title}</CardTitle>
                <CardDescription>{dataset.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{dataset.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-teal-600">{dataset.count}</span>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 