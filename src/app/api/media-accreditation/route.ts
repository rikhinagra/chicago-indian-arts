import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      organization,
      designation,
      email,
      phone,
      mediaType,
      portfolioUrl,
      event,
      coveragePlan,
    } = body;

    // Validation
    if (
      !name ||
      !email ||
      !organization ||
      !designation ||
      !mediaType ||
      !event ||
      !coveragePlan
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const formData = {
      type: "media" as const,
      name,
      email,
      organization,
      designation,
      phone,
      mediaType,
      portfolioUrl,
      event,
      coveragePlan,
    };

    // Fire all three backends in parallel
    await Promise.allSettled([
      sendToGoogleSheets(formData),
      sendTelegramNotification(formData),
      saveToPayload({
        type: "media",
        email,
        data: {
          name,
          organization,
          designation,
          phone,
          mediaType,
          portfolioUrl,
          event,
          coveragePlan,
        },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Media accreditation form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
