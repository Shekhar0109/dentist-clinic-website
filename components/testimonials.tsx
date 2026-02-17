import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Patient",
    quote:
      "BrightSmile completely transformed my experience with dental visits. The team is incredibly gentle, and the results of my teeth whitening exceeded all expectations!",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Implant Patient",
    quote:
      "I was nervous about getting dental implants, but Dr. Patel made the whole process smooth and virtually painless. My new smile looks and feels amazing.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Family Patient",
    quote:
      "Our whole family goes to BrightSmile. The kids actually look forward to their dental check-ups! The staff is so friendly and the clinic is always spotless.",
    initials: "ER",
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="size-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from real patients who trust us with their smiles.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50">
              <CardContent className="flex flex-col gap-4 pt-6">
                <StarRating />
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  {`"${t.quote}"`}
                </blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
