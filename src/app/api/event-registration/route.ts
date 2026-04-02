import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

const eventRegistrationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  persons: z.string().optional(),
  event: z.string().optional(),
  date: z.string().optional(),
  venue: z.string().optional(),
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check — bots fill this, real users don't
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Zod validation
    const result = eventRegistrationSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    const { name, email, phone, persons, event, date, venue } = result.data;

    const formData = {
      type: "event-registration" as const,
      name,
      email,
      phone,
      persons: persons || "1",
      event: event || "",
      date: date || "",
      venue: venue || "",
    };

    // Fire all three backends in parallel
    await Promise.allSettled([
      sendToGoogleSheets(formData),
      sendTelegramNotification(formData),
      saveToPayload({
        type: "registration",
        email,
        data: { name, phone, persons, event, date, venue },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Event registration form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
