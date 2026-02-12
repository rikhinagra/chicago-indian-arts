"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  "General Inquiry",
  "Vaarta Literature Festival",
  "Prasang Fashion Innovation",
  "Varnam Photography",
  "Sponsorship",
  "Volunteering",
  "Media / Press",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact:", data);
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[800px] mx-auto text-center">
          <SectionTag>Get in Touch</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4rem] font-light mb-6 text-primary-dark">
            Contact Us
          </h1>
          <p className="text-lg text-text-light">
            Have a question or want to get involved? We&apos;d love to hear from you.
          </p>
        </FadeInSection>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <FadeInSection className="lg:col-span-1 space-y-8">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-accent-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-dark mb-1">Email</h3>
                <p className="text-text-light text-sm">info@chicagoindianarts.org</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-accent-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-dark mb-1">Phone</h3>
                <p className="text-text-light text-sm">(312) 555-0190</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-dark mb-1">Location</h3>
                <p className="text-text-light text-sm">Chicago, Illinois</p>
              </div>
            </div>
          </FadeInSection>

          {/* Form */}
          <FadeInSection className="lg:col-span-2" delay={0.15}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-accent-gold text-5xl mb-4">&#10003;</div>
                <h2 className="font-heading text-3xl font-light mb-3 text-primary-dark">
                  Message Sent!
                </h2>
                <p className="text-text-light">
                  We&apos;ll get back to you within 2-3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-dark">Name *</label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-accent-terracotta text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-dark">Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="you@email.com"
                    />
                    {errors.email && <p className="text-accent-terracotta text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-dark">Phone</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-dark">Subject *</label>
                    <select
                      {...register("subject")}
                      className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors bg-white"
                    >
                      <option value="">Select subject...</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <p className="text-accent-terracotta text-xs mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-dark">Message *</label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-accent-terracotta text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-accent-terracotta text-white text-sm font-semibold tracking-[1px] uppercase transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
