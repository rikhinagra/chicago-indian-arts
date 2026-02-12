"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  amount: z.number().min(1, "Amount must be at least $1"),
  recurring: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const presetAmounts = [25, 50, 100, 250];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { amount: 50, recurring: false },
  });

  const selectPreset = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setValue("amount", amount);
  };

  const handleCustom = (val: string) => {
    setCustomAmount(val);
    setSelectedAmount(null);
    const num = parseInt(val);
    if (!isNaN(num)) setValue("amount", num);
  };

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Donation:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-24 lg:pt-40 px-6 lg:px-12 bg-cream min-h-screen flex items-center justify-center">
        <FadeInSection className="text-center max-w-[600px]">
          <div className="text-accent-gold text-6xl mb-6">&#10084;</div>
          <h1 className="font-heading text-4xl font-light mb-4 text-primary-dark">
            Thank You!
          </h1>
          <p className="text-lg text-text-light leading-relaxed">
            Your generous donation helps us continue celebrating and preserving Indian
            cultural heritage. You&apos;ll receive a tax receipt via email shortly.
          </p>
        </FadeInSection>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[800px] mx-auto text-center">
          <SectionTag>Support Our Mission</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4rem] font-light mb-6 text-primary-dark">
            Make a Donation
          </h1>
          <p className="text-lg text-text-light">
            Your contribution directly supports our cultural programs and community events.
          </p>
        </FadeInSection>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[600px] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Amount Selection */}
            <div>
              <label className="block text-sm font-medium mb-4 text-text-dark">
                Select Amount
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => selectPreset(amount)}
                    className={`py-4 text-center font-semibold text-lg transition-all duration-300 border cursor-pointer ${
                      selectedAmount === amount
                        ? "bg-accent-gold text-white border-accent-gold"
                        : "bg-white text-text-dark border-gray-300 hover:border-accent-gold"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => handleCustom(e.target.value)}
                  placeholder="Custom amount"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>
              {errors.amount && (
                <p className="text-accent-terracotta text-xs mt-1">{errors.amount.message}</p>
              )}
            </div>

            {/* Recurring */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                {...register("recurring")}
                type="checkbox"
                className="w-5 h-5 accent-accent-gold"
              />
              <span className="text-sm text-text-dark">Make this a monthly recurring donation</span>
            </label>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-dark">Full Name *</label>
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

            <p className="text-xs text-text-light">
              Chicago Indian Arts is a 501(c)(3) non-profit organization. Your donation is tax-deductible.
              Stripe payment processing will be integrated for secure transactions.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent-gold text-white text-sm font-semibold tracking-[1px] uppercase transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Processing..." : "Donate Now"}
            </button>
          </form>
        </FadeInSection>
      </section>
    </>
  );
}
