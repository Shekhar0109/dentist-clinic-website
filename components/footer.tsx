import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Appointment", href: "#appointment" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
  },
  {
    label: "Instagram",
    href: "#",
    paths: [
      "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z",
      "M2 9h4v12H2z",
    ],
    circle: true,
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-4 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5.5c-1.5-2-4-2.5-6-1s-2.5 4.5-1 6.5l7 8.5 7-8.5c1.5-2 1-5-1-6.5s-4.5-1-6 1" />
                </svg>
              </div>
              <span className="text-lg font-bold">BrightSmile</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              Professional and affordable dental care for the whole family. Your
              smile is our priority.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                >
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-background/50" />
                <span className="text-sm text-background/70">
                  123 Dental Street, Suite 100, New York, NY 10001
                </span>
              </li>
              <li>
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-background"
                >
                  <Phone className="size-4 shrink-0 text-background/50" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@brightsmile.com"
                  className="flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-background"
                >
                  <Mail className="size-4 shrink-0 text-background/50" />
                  hello@brightsmile.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/50">
            {`\u00A9 ${new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
