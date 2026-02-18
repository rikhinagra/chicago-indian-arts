import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, city, interests, hearAbout } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const formData = {
      type: "registration" as const,
      name,
      email,
      phone,
      city,
      interests,
      hearAbout,
    };

    // Fire all three backends in parallel
    await Promise.allSettled([
      sendToGoogleSheets(formData),
      sendTelegramNotification(formData),
      saveToPayload({
        type: "registration",
        email,
        data: { name, phone, city, interests, hearAbout },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
