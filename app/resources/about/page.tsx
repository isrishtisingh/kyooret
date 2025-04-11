import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const team = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    description: "10+ years of experience in AI and data science.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    description: "Expert in machine learning and computer vision.",
  },
  {
    name: "Mike Johnson",
    role: "Head of Data",
    description: "Specialized in data curation and quality assurance.",
  },
]

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Kyooret</h1>
          <p className="text-xl text-muted-foreground">
            Empowering AI innovation with high-quality Indian datasets
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mb-12">
          <p>
            Kyooret was founded with a mission to bridge the gap in AI development
            for the Indian market. We recognized the need for high-quality,
            contextually relevant datasets that could power AI applications
            specifically designed for Indian users and scenarios.
          </p>
          <p>
            Our team of experts in AI, data science, and Indian languages works
            tirelessly to curate and maintain datasets that meet the highest
            standards of quality and relevance. We believe that by providing
            these resources, we can accelerate AI innovation in India and beyond.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg">
                To democratize access to high-quality AI datasets and models,
                enabling developers and businesses to create innovative solutions
                that address real-world challenges in the Indian context.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 