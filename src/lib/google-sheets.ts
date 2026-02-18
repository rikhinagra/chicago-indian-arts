interface SheetPayload {
  type: string;
  [key: string]: unknown;
}

export async function sendToGoogleSheets(data: SheetPayload): Promise<void> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.warn("Google Script URL not configured, skipping Sheets logging");
    return;
  }

  try {
    await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Google Sheets logging failed:", error);
  }
}
