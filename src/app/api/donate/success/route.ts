import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!sessionId) {
    return NextResponse.redirect(new URL("/donate", siteUrl));
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid" || session.status === "complete") {
      const meta = session.metadata || {};
      const formData = {
        type: "donation" as const,
        name: meta.donor_name || "",
        email: meta.donor_email || "",
        amount: Number(meta.amount) || 0,
        frequency: meta.frequency || "one-time",
        coverFee: meta.cover_fee === "true",
        total: Number(meta.total) || 0,
        stripeSessionId: sessionId,
      };

      // Log to all three backends
      await Promise.allSettled([
        sendToGoogleSheets(formData),
        sendTelegramNotification(formData),
        saveToPayload({
          type: "donation",
          email: formData.email,
          data: {
            name: formData.name,
            amount: formData.amount,
            frequency: formData.frequency,
            coverFee: formData.coverFee,
            total: formData.total,
            stripeSessionId: sessionId,
          },
        }),
      ]);
    }

    return NextResponse.redirect(
      new URL(
        `/donate?success=true&amount=${session.metadata?.total || "0"}`,
        siteUrl
      )
    );
  } catch (error) {
    console.error("Donation success handler error:", error);
    return NextResponse.redirect(new URL("/donate?error=true", siteUrl));
  }
}
