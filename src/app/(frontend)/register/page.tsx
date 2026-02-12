"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  event: z.string().min(1, "Please select an event"),
  ticketType: z.string().min(1, "Please select a ticket type"),
  attendees: z.number().min(1).max(10),
  requirements: z.string().optional(),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const events = [
  "Vaarta Literature Festival (March 15-17)",
  "Prasang Fashion Innovation Show (May 20)",
  "Varnam Photography Exhibition (August 10-12)",
  "All Events — Full Pass",
];

const ticketTypes = ["General Admission", "VIP", "Student", "Group (5+)"];

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { attendees: 1 },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Registration:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-24 lg:pt-40 px-6 lg:px-12 bg-cream min-h-screen flex items-center justify-center">
        <FadeInSection className="text-center max-w-[600px]">
          <div className="text-accent-gold text-6xl mb-6">&#10003;</div>
          <h1 className="font-heading text-4xl font-light mb-4 text-primary-dark">
            Registration Complete!
          </h1>
          <p className="text-lg text-text-light leading-relaxed">
            Thank you for registering! You&apos;ll receive a confirmation email
            shortly with event details and your ticket information.
          </p>
        </FadeInSection>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[800px] mx-auto text-center">
          <SectionTag>Registration</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4rem] font-light mb-6 text-primary-dark">
            Register for Events
          </h1>
          <p className="text-lg text-text-light">
            Secure your spot at our 2026 cultural events.
          </p>
        </FadeInSection>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[700px] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-dark">
                Full Name *
              </label>
              <input
                {...register("name")}
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-accent-terracotta text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">
                  Email Address *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p className="text-accent-terracotta text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">
                  Phone Number *
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-accent-terracotta text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Event & Ticket Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">
                  Select Event *
                </label>
                <select
                  {...register("event")}
                  className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors bg-white"
                >
                  <option value="">Choose an event...</option>
                  {events.map((e) => (
                    <option key={e} value={e}>{e}</option>
                  ))}
                </select>
                {errors.event && (
                  <p className="text-accent-terracotta text-xs mt-1">{errors.event.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">
                  Ticket Type *
                </label>
                <select
                  {...register("ticketType")}
                  className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors bg-white"
                >
                  <option value="">Select type...</option>
                  {ticketTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.ticketType && (
                  <p className="text-accent-terracotta text-xs mt-1">{errors.ticketType.message}</p>
                )}
              </div>
            </div>

            {/* Attendees */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-dark">
                Number of Attendees *
              </label>
              <input
                {...register("attendees")}
                type="number"
                min={1}
                max={10}
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
              />
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-dark">
                Special Requirements
              </label>
              <input
                {...register("requirements")}
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                placeholder="Accessibility needs, dietary restrictions, etc."
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-dark">
                Additional Comments
              </label>
              <textarea
                {...register("comments")}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors resize-none"
                placeholder="Any questions or comments..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent-terracotta text-white text-sm font-semibold tracking-[1px] uppercase transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Complete Registration"}
            </button>
          </form>
        </FadeInSection>
      </section>
    </>
  );
}
