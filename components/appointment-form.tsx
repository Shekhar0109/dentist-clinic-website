"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays } from "lucide-react"

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Book Now
            </span>
            <h2 className="text-balance font-serif text-3xl text-primary-foreground md:text-4xl">
              Schedule Your Appointment
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Take the first step toward a healthier, brighter smile. Fill out the form
              and our team will confirm your appointment within 24 hours.
            </p>
            <div className="mt-8 flex items-center gap-3 lg:justify-start justify-center">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/15">
                <CalendarDays className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Open Hours</p>
                <p className="text-xs text-primary-foreground/70">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-md flex-1">
            {submitted ? (
              <div className="rounded-xl bg-card p-8 text-center shadow-lg">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-accent/20">
                  <svg className="size-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Thank You!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your appointment request has been received. We will contact you shortly
                  to confirm.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-xl bg-card p-8 shadow-lg"
              >
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input id="fullName" name="fullName" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-foreground">
                    Preferred Date
                  </label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your dental concern..."
                    rows={3}
                  />
                </div>
                <Button type="submit" size="lg" className="mt-2 w-full text-base">
                  Schedule Appointment
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
