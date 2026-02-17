import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:py-28">
        {/* Text Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Trusted Dental Care
          </span>
          <h1 className="text-balance font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl lg:text-6xl">
            Your Smile, Our Priority
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Professional and affordable dental care for the whole family. Experience gentle,
            modern dentistry in a comfortable environment.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild className="text-base">
              <a href="#appointment">Book an Appointment</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <a href="tel:+11234567890">
                <Phone className="size-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                500+ Happy Patients
              </span>
            </div>
            <div className="h-5 w-px bg-border" aria-hidden="true" />
            <span className="text-sm font-medium text-muted-foreground">
              15+ Years of Experience
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-dental.jpg"
              alt="Modern dental clinic interior with professional equipment and a friendly dentist"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg ring-1 ring-border lg:-bottom-6 lg:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-accent/20">
                <svg className="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Pain-Free</p>
                <p className="text-xs text-muted-foreground">Modern techniques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
