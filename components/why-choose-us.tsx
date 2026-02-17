import { UserCheck, Cpu, DollarSign, Heart, Siren, ShieldCheck } from "lucide-react"

const reasons = [
  {
    icon: UserCheck,
    title: "Experienced Dentists",
    description: "Our highly qualified team brings over 15 years of clinical expertise.",
  },
  {
    icon: Cpu,
    title: "Modern Equipment",
    description: "State-of-the-art technology for accurate diagnostics and gentle treatment.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality dental care at competitive prices with flexible payment options.",
  },
  {
    icon: Heart,
    title: "Friendly Staff",
    description: "Warm, compassionate team dedicated to making your visit comfortable.",
  },
  {
    icon: Siren,
    title: "Emergency Services",
    description: "Same-day emergency appointments available when you need urgent care.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Safe",
    description: "Strict sterilization protocols ensuring the highest safety standards.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why BrightSmile
          </span>
          <h2 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            We go above and beyond to provide exceptional dental experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
