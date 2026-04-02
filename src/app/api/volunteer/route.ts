import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramNotification } from "@/lib/telegram";
import { sendToGoogleSheets } from "@/lib/google-sheets";
import { saveToPayload } from "@/lib/payload-submit";

const volunteerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  roles: z.array(z.string()).min(1, "At least one role is required"),
  availability: z.string().optional(),
  experience: z.string().optional(),
  message: z.string().optional(),
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
    const result = volunteerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Name, email, and at least one role are required" },
        { status: 400 }
      );
    }

    const { name, email, phone, roles, availability, experience, message } = result.data;

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
