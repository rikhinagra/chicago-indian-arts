"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  organization: z.string().min(2, "Organization is required"),
  designation: z.string().min(2, "Designation is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  mediaType: z.string().min(1, "Please select media type"),
  portfolioUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  event: z.string().min(1, "Please select an event"),
  coveragePlan: z.string().min(20, "Please describe your coverage plan (min 20 characters)"),
});

type FormData = z.infer<typeof schema>;

const mediaTypes = ["Print", "Television", "Digital / Online", "Radio", "Podcast", "Photography"];
const events = [
  "Vaarta Literature Festival (March 15-17)",
  "Prasang Fashion Innovation Show (May 20)",
  "Varnam Photography Exhibition (August 10-12)",
  "All Events",
];

export default function MediaAccreditationPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Media Accreditation:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-24 lg:pt-40 px-6 lg:px-12 bg-cream min-h-screen flex items-center justify-center">
        <FadeInSection className="text-center max-w-[600px]">
          <div className="text-accent-gold text-6xl mb-6">&#10003;</div>
          <h1 className="font-heading text-4xl font-light mb-4 text-primary-dark">
            Application Submitted!
          </h1>
          <p className="text-lg text-text-light leading-relaxed">
            Your media accreditation application is under review. We&apos;ll contact
            you within 5-7 business days with a decision.
          </p>
        </FadeInSection>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[800px] mx-auto text-center">
          <SectionTag>Press</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4rem] font-light mb-6 text-primary-dark">
            Media Accreditation
          </h1>
          <p className="text-lg text-text-light">
            Apply for press credentials to cover our 2026 events.
          </p>
        </FadeInSection>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[700px] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">Full Name *</label>
                <input {...register("name")} className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="Your name" />
                {errors.name && <p className="text-accent-terracotta text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">Organization *</label>
                <input {...register("organization")} className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="Publication / outlet" />
                {errors.organization && <p className="text-accent-terracotta text-xs mt-1">{errors.organization.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">Designation *</label>
                <input {...register("designation")} className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="e.g. Reporter, Editor" />
                {errors.designation && <p className="text-accent-terracotta text-xs mt-1">{errors.designation.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">Media Type *</label>
                <select {...register("mediaType")} className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors bg-white">
                  <option value="">Select type...</option>
                  {mediaTypes.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                {errors.mediaType && <p className="text-accent-terracotta text-xs mt-1">{errors.mediaType.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">Email *</label>
                <input {...register("email")} type="email" className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="you@email.com" />
                {errors.email && <p className="text-accent-terracotta text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">Phone *</label>
                <input {...register("phone")} type="tel" className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="(555) 123-4567" />
                {errors.phone && <p className="text-accent-terracotta text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-text-dark">Portfolio / Website URL</label>
              <input {...register("portfolioUrl")} type="url" className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="https://..." />
              {errors.portfolioUrl && <p className="text-accent-terracotta text-xs mt-1">{errors.portfolioUrl.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-text-dark">Event *</label>
              <select {...register("event")} className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors bg-white">
                <option value="">Select event...</option>
                {events.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
              {errors.event && <p className="text-accent-terracotta text-xs mt-1">{errors.event.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-text-dark">Coverage Plan *</label>
              <textarea {...register("coveragePlan")} rows={5} className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors resize-none" placeholder="Describe your intended coverage..." />
              {errors.coveragePlan && <p className="text-accent-terracotta text-xs mt-1">{errors.coveragePlan.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent-terracotta text-white text-sm font-semibold tracking-[1px] uppercase transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </FadeInSection>
      </section>
    </>
  );
}
