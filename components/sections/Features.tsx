import { Database, BarChart3, Shield, Globe, Filter, Users } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 mb-2 px-8 py-2 text-md text-teal-700">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need for data-driven decisions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Kyooret provides a comprehensive platform for accessing, analyzing, and leveraging curated datasets.
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
  )
} 