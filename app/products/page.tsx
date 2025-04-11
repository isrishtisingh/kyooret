import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "AI Models",
    description: "Pre-trained models for computer vision and NLP tasks in Indian context.",
    href: "/products/models",
  },
  {
    title: "Data Quality",
    description: "High-quality, curated datasets with detailed annotations and metadata.",
    href: "#",
  },
  {
    title: "Custom Solutions",
    description: "Tailored datasets and models for specific business needs.",
    href: "#",
  },
  {
    title: "API Access",
    description: "Easy integration with our datasets and models through APIs.",
    href: "#",
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Products & Features</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive solutions for your AI and data needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature) => (
          <Card key={feature.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={feature.href}>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Choose the plan that works best for you
        </p>
        <Link href="/pricing">
          <Button size="lg">View Pricing</Button>
        </Link>
      </div>
    </div>
  )
} 