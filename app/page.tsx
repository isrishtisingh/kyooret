import Image from "next/image"
import { ChevronRight, Database, BarChart3, Shield, Globe, Filter, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/ui/nav"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav/>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-charcoal-950 to-blue-charcoal-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Curated Datasets for Powerful Insights
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access high-quality, curated datasets that help you make data-driven decisions with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2 bg-blue-charcoal-600 hover:bg-blue-charcoal-700">
                    Get Started
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/hero-image.png"
                  alt="Data visualization"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Trusted by innovative companies worldwide</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=40&width=120&text=LOGO ${i}`}
                      alt={`Client logo ${i}`}
                      width={120}
                      height={40}
                      className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need for data-driven decisions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Sanchaya provides a comprehensive platform for accessing, analyzing, and leveraging curated datasets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <Database className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold">Curated Collections</h3>
                <p className="text-center text-muted-foreground">
                  Access carefully vetted and organized datasets across various domains and industries.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <BarChart3 className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Built-in tools to visualize, analyze, and extract insights from your selected datasets.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <Shield className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold">Enterprise Security</h3>
                <p className="text-center text-muted-foreground">
                  Industry-leading security protocols to ensure your data remains protected and compliant.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <Globe className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold">Global Coverage</h3>
                <p className="text-center text-muted-foreground">
                  Datasets spanning multiple regions, industries, and domains for comprehensive insights.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <Filter className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold">Custom Filtering</h3>
                <p className="text-center text-muted-foreground">
                  Powerful filtering and search capabilities to find exactly the data you need.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-teal-100 p-3">
                  <Users className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold">Collaboration Tools</h3>
                <p className="text-center text-muted-foreground">
                  Share datasets and insights with your team to foster collaborative decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset Showcase */}
        <section id="datasets" className="w-full py-12 md:py-24 lg:py-32 bg-blue-charcoal-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Datasets</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Explore our premium dataset collections
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Browse through our diverse range of high-quality datasets curated for various industries and use
                  cases.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Financial Markets",
                  description: "Historical and real-time financial data from global markets",
                  count: "250+ datasets",
                  color: "bg-amber-100",
                },
                {
                  title: "Healthcare Analytics",
                  description: "Comprehensive healthcare and medical research data",
                  count: "180+ datasets",
                  color: "bg-teal-100",
                },
                {
                  title: "Consumer Behavior",
                  description: "Insights into consumer trends and purchasing patterns",
                  count: "120+ datasets",
                  color: "bg-cyan-100",
                },
                {
                  title: "Environmental Data",
                  description: "Climate, sustainability, and environmental metrics",
                  count: "200+ datasets",
                  color: "bg-emerald-100",
                },
                {
                  title: "Supply Chain",
                  description: "Global supply chain and logistics intelligence",
                  count: "150+ datasets",
                  color: "bg-blue-100",
                },
                {
                  title: "Technology Trends",
                  description: "Data on emerging technologies and digital transformation",
                  count: "175+ datasets",
                  color: "bg-indigo-100",
                },
              ].map((dataset, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className={`absolute inset-0 ${dataset.color} opacity-50`} />
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold">{dataset.title}</h3>
                    <p className="mt-2 text-muted-foreground">{dataset.description}</p>
                    <p className="mt-4 font-medium text-teal-600">{dataset.count}</p>
                    <Button variant="ghost" className="mt-4 group-hover:bg-teal-100">
                      Explore Collection
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

        {/* Pricing Section */}
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
              {[
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
              ].map((plan, i) => (
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

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by data-driven organizations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  See what our customers have to say about their experience with Sanchaya.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Sanchaya has transformed how we approach market research. The quality of their datasets is unmatched.",
                  author: "Sarah Johnson",
                  title: "Chief Data Officer, FinTech Solutions",
                },
                {
                  quote:
                    "The analytics tools provided alongside the datasets have helped us uncover insights we would have otherwise missed.",
                  author: "Michael Chen",
                  title: "VP of Analytics, Global Retail Inc.",
                },
                {
                  quote:
                    "As a healthcare provider, data quality and compliance are critical. Sanchaya delivers on both fronts.",
                  author: "Dr. Emily Rodriguez",
                  title: "Director of Research, MedLife Group",
                },
                {
                  quote:
                    "The customer support team goes above and beyond. They've helped us customize datasets to our specific needs.",
                  author: "David Kim",
                  title: "Data Science Lead, Tech Innovations",
                },
                {
                  quote:
                    "Sanchaya's platform has become an essential part of our decision-making process across all departments.",
                  author: "Lisa Patel",
                  title: "CEO, Strategic Consulting Partners",
                },
                {
                  quote:
                    "The ROI we've seen since implementing Sanchaya has exceeded our expectations. Highly recommended.",
                  author: "James Wilson",
                  title: "CFO, Manufacturing Excellence",
                },
              ].map((testimonial, i) => (
                <div key={i} className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                  <blockquote className="text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <div className="mt-6 flex items-center">
                    <div className="rounded-full bg-teal-100 p-1">
                      <div className="h-8 w-8 rounded-full bg-teal-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to unlock the power of curated data?
                </h2>
                <p className="max-w-[600px] text-teal-100 md:text-xl/relaxed">
                  Join thousands of organizations using Sanchaya to make better, data-driven decisions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold tracking-tight">Sanchaya</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Cookie Policy
            </Link>
          </nav>
          <div className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Sanchaya. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
