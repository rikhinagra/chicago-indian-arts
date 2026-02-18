import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, persons, event, date, venue } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

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
