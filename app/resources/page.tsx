import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const resources = [
  {
    title: "About Us",
    description: "Learn about our mission, vision, and the team behind Kyooret.",
    href: "/resources/about",
  },
  {
    title: "Contact",
    description: "Get in touch with our team for support or inquiries.",
    href: "/resources/contact",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Resources</h1>
        <p className="text-xl text-muted-foreground">
          Learn more about Kyooret and how we can help you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {resources.map((resource) => (
          <Card key={resource.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={resource.href}>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 