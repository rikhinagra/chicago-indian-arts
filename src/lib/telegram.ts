type FormType = "contact" | "registration" | "donation" | "volunteer";

interface TelegramPayload {
  type: FormType;
  name: string;
  email: string;
  [key: string]: unknown;
}

export async function sendTelegramNotification(
  data: TelegramPayload
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram credentials not configured, skipping notification");
    return;
  }

  const emoji: Record<FormType, string> = {
    contact: "\u2709\uFE0F",
    registration: "\uD83D\uDC64",
    donation: "\uD83D\uDCB0",
    volunteer: "\uD83E\uDD1D",
  };

  const title = `${emoji[data.type]} New ${data.type.charAt(0).toUpperCase() + data.type.slice(1)} Submission`;

  let details = `*Name:* ${escapeMarkdown(data.name)}\n*Email:* ${escapeMarkdown(data.email)}`;

  if (data.type === "contact") {
    if (data.phone)
      details += `\n*Phone:* ${escapeMarkdown(String(data.phone))}`;
    details += `\n*Subject:* ${escapeMarkdown(String(data.subject || ""))}`;
    details += `\n*Message:* ${escapeMarkdown(String(data.message || ""))}`;
  } else if (data.type === "registration") {
    if (data.phone)
      details += `\n*Phone:* ${escapeMarkdown(String(data.phone))}`;
    if (data.city)
      details += `\n*City:* ${escapeMarkdown(String(data.city))}`;
    if (data.interests)
      details += `\n*Interests:* ${escapeMarkdown(String(Array.isArray(data.interests) ? data.interests.join(", ") : data.interests))}`;
    if (data.hearAbout)
      details += `\n*How Heard:* ${escapeMarkdown(String(data.hearAbout))}`;
  } else if (data.type === "donation") {
    details += `\n*Amount:* $${data.total || data.amount}`;
    details += `\n*Frequency:* ${escapeMarkdown(String(data.frequency || "one-time"))}`;
  } else if (data.type === "volunteer") {
    if (data.phone)
      details += `\n*Phone:* ${escapeMarkdown(String(data.phone))}`;
    if (data.roles)
      details += `\n*Roles:* ${escapeMarkdown(String(Array.isArray(data.roles) ? data.roles.join(", ") : data.roles))}`;
    if (data.availability)
      details += `\n*Availability:* ${escapeMarkdown(String(data.availability))}`;
    if (data.experience)
      details += `\n*Experience:* ${escapeMarkdown(String(data.experience))}`;
    if (data.message)
      details += `\n*Message:* ${escapeMarkdown(String(data.message))}`;
  }

  const message = `${title}\n\n${details}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });
  } catch (error) {
    console.error("Telegram notification failed:", error);
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
