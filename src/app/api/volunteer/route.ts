import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, roles, availability, experience, message } =
      body;

    // Validation
    if (!name || !email || !roles || roles.length === 0) {
      return NextResponse.json(
        { error: "Name, email, and at least one role are required" },
        { status: 400 }
      );
    }

    const formData = {
      type: "volunteer" as const,
      name,
      email,
      phone,
      roles,
      availability,
      experience,
      message,
    };

    // Fire all three backends in parallel
    await Promise.allSettled([
      sendToGoogleSheets(formData),
      sendTelegramNotification(formData),
      saveToPayload({
        type: "volunteer",
        email,
        data: { name, phone, roles, availability, experience, message },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Volunteer form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
