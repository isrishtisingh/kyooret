import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const models = [
  {
    title: "Food Recognition",
    description: "Identify and classify Indian food items from images.",
    category: "Computer Vision",
    accuracy: "95%",
    useCases: ["Restaurant apps", "Food delivery", "Nutrition tracking"],
  },
  {
    title: "Text Recognition",
    description: "OCR for Indian languages and scripts.",
    category: "NLP",
    accuracy: "98%",
    useCases: ["Document scanning", "Receipt processing", "Form filling"],
  },
  {
    title: "Object Detection",
    description: "Detect common objects in Indian street scenes.",
    category: "Computer Vision",
    accuracy: "92%",
    useCases: ["Traffic monitoring", "Urban planning", "Security systems"],
  },
  {
    title: "Language Translation",
    description: "Translate between Indian languages.",
    category: "NLP",
    accuracy: "90%",
    useCases: ["Content localization", "Customer support", "Education"],
  },
]

export default function ModelsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">AI Models</h1>
        <p className="text-xl text-muted-foreground">
          Pre-trained models optimized for Indian context
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {models.map((model) => (
          <Card key={model.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{model.title}</CardTitle>
              <CardDescription>{model.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Category</span>
                  <p>{model.category}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Accuracy</span>
                  <p>{model.accuracy}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Use Cases</span>
                  <ul className="list-disc list-inside">
                    {model.useCases.map((useCase) => (
                      <li key={useCase}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Get Started</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 