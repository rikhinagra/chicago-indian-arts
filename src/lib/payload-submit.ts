import { getPayload } from "payload";
import config from "@payload-config";

interface PayloadFormData {
  type:
    | "contact"
    | "registration"
    | "donation"
    | "volunteer"
    | "media"
    | "newsletter";
  email: string;
  data: Record<string, unknown>;
}

export async function saveToPayload(formData: PayloadFormData): Promise<void> {
  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: "form-submissions",
      data: {
        type: formData.type,
        email: formData.email,
        data: formData.data,
        status: "new",
      },
    });
  } catch (error) {
    console.error("Payload CMS save failed:", error);
  }
}
