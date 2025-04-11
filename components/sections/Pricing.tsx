import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Pricing() {
  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Open source datasets for research and development",
      features: [
        "Access to free datasets",
        "Limited datasets options",
        "Free guides and tutorial ",
        "Open source contributions",
        "Basic API access",
        "Research license",
      ],
      highlighted: false,
      href: "/datasets"
    },
    {
      name: "Commercial",
      price: "$299",
      description: "Premium datasets for commercial applications",
      features: [
        "High-quality datasets",
        "Large-scale data collections",
        "Priority API access",
        "Technical support",
        "Commercial license",
        "Regular updates",
      ],
      highlighted: true,
      href: "/resources/contact"
    },
    {
      name: "Custom",
      price: "Custom",
      description: "Tailored solutions for enterprises and governments",
      features: [
        "Custom dataset development",
        "Domain-specific collections",
        "Dedicated support team",
        "Custom API integration",
        "Enterprise license",
        "SLA guarantees",
      ],
      highlighted: false,
      href: "/resources/contact"
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 mb-2 px-8 py-2 text-md text-teal-700">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Choose the right plan for your needs
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              From open source to enterprise solutions, we have the right data for your project.
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
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && plan.price !== "Free" && (
                    <span className="ml-1 text-xl text-gray-600">/month</span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-600">{plan.description}</p>
              </div>
              <ul className="mb-6 mt-6 space-y-4 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.href}>
                <Button
                  className={`w-full ${plan.highlighted ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.price === "Custom" ? "Contact Sales" : plan.price === "Free" ? "Get Started" : "Contact Sales"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 