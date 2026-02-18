import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message || message.length < 10) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const formData = {
      type: "contact" as const,
      name,
      email,
      phone,
      subject,
      message,
    };

    // Fire all three backends in parallel
    await Promise.allSettled([
      sendToGoogleSheets(formData),
      sendTelegramNotification(formData),
      saveToPayload({
        type: "contact",
        email,
        data: { name, phone, subject, message },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
