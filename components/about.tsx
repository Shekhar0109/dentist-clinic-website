import { Award, Clock, Users } from "lucide-react"

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10,000+", label: "Patients Served" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
]

export function About() {
  return (
    <section id="about" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left: Content */}
          <div className="flex-1">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
              Modern Dental Care You Can Trust
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              BrightSmile Dental Clinic provides modern, pain-free dental treatments using
              advanced technology in a comfortable environment. Our team of experienced
              professionals is committed to delivering the highest standard of care, ensuring
              every visit is as pleasant as possible.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              We believe everyone deserves a beautiful, healthy smile. From routine check-ups
              to complex procedures, we offer a comprehensive range of dental services tailored
              to your unique needs.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-1 flex-col gap-6 sm:flex-row lg:flex-col lg:items-end">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl bg-background p-6 ring-1 ring-border"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="size-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
