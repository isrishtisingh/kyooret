export function Testimonials() {
  const testimonials = [
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
  ]

  return (
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
          {testimonials.map((testimonial, i) => (
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
  )
} 