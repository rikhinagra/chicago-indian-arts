import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, amount, frequency, coverFee, total } = body;

    // Validation
    if (!name || !email || !amount || amount < 1) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const isRecurring = frequency && frequency !== "one-time";

    // Build session params based on frequency
    if (isRecurring) {
      // Monthly or Annual recurring
      const interval: "month" | "year" =
        frequency === "annual" ? "year" : "month";
      const intervalCount = frequency === "quarterly" ? 3 : 1;

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer_email: email,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Chicago Indian Arts Donation",
                description: `${frequency.charAt(0).toUpperCase() + frequency.slice(1)} donation`,
              },
              unit_amount: Math.round(total * 100),
              recurring: { interval, interval_count: intervalCount },
            },
            quantity: 1,
          },
        ],
        metadata: {
          donor_name: name,
          donor_email: email,
          amount: String(amount),
          frequency,
          cover_fee: String(coverFee),
          total: String(total),
        },
        success_url: `${siteUrl}/api/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/donate?canceled=true`,
      });

      return NextResponse.json({ url: session.url });
    } else {
      // One-time payment
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: email,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Chicago Indian Arts Donation",
                description: "One-time donation",
              },
              unit_amount: Math.round(total * 100),
            },
            quantity: 1,
          },
        ],
        metadata: {
          donor_name: name,
          donor_email: email,
          amount: String(amount),
          frequency: frequency || "one-time",
          cover_fee: String(coverFee),
          total: String(total),
        },
        success_url: `${siteUrl}/api/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/donate?canceled=true`,
      });

      return NextResponse.json({ url: session.url });
    }
  } catch (error) {
    console.error("Donation error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
