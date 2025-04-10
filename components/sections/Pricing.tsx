import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for individuals and small teams just getting started",
      features: [
        "Access to 50+ datasets",
        "Basic analytics tools",
        "Standard API access",
        "Email support",
        "1 user",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$299",
      description: "Ideal for growing businesses with advanced data needs",
      features: [
        "Access to 150+ datasets",
        "Advanced analytics dashboard",
        "Priority API access",
        "Priority support",
        "5 users",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with complex requirements",
      features: [
        "Full dataset library access",
        "Custom dataset integration",
        "Dedicated API infrastructure",
        "24/7 dedicated support",
        "Unlimited users",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Choose the right plan for your needs
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Flexible pricing options designed to scale with your data requirements.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-lg border p-6 ${
                plan.highlighted ? "border-teal-600 bg-teal-50 shadow-md" : "bg-white shadow-sm"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="ml-1 text-xl text-muted-foreground">/month</span>}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="mb-6 mt-6 space-y-4 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={plan.highlighted ? "bg-teal-600 hover:bg-teal-700" : ""}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 