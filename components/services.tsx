import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Sun, Wrench, AlignVerticalJustifyEnd, Zap, Palette } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque, tartar, and stains for a healthier smile.",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Advanced whitening treatments to brighten your smile safely and effectively.",
  },
  {
    icon: Wrench,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and feel completely natural.",
  },
  {
    icon: AlignVerticalJustifyEnd,
    title: "Braces & Orthodontics",
    description: "Straighten your teeth with modern braces and clear aligner options.",
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    description: "Pain-free root canal procedures to save and restore damaged teeth.",
  },
  {
    icon: Palette,
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers to enhance your natural beauty.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
            Comprehensive Dental Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            We offer a full range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group cursor-default border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20"
            >
              <CardContent className="flex flex-col items-start gap-4 pt-6">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <service.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
