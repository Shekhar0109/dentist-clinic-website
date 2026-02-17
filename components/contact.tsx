import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Dental Street, Suite 100, New York, NY 10001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(123) 456-7890",
    href: "tel:+11234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@brightsmile.com",
    href: "mailto:hello@brightsmile.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </span>
          <h2 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Visit us or reach out today. We are happy to answer any questions.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-10 lg:flex-row">
          {/* Contact Info */}
          <div className="flex flex-1 flex-col gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map Embed */}
          <div className="flex-1 overflow-hidden rounded-xl ring-1 ring-border">
            <iframe
              title="BrightSmile Dental Clinic location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1630901234567!5m2!1sen!2sus"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
