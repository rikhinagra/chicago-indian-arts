import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  city: z.string().optional(),
  interests: z.array(z.string()).optional(),
  hearAbout: z.string().optional(),
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
    const result = registerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const { name, email, phone, city, interests, hearAbout } = result.data;

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
