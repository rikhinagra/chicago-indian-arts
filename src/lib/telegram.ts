type FormType = "contact" | "registration" | "event-registration" | "donation" | "volunteer" | "media";

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
    "event-registration": "\uD83C\uDFAB",
    donation: "\uD83D\uDCB0",
    volunteer: "\uD83E\uDD1D",
    media: "\uD83D\uDCF0",
  };

  const typeLabel = data.type === "event-registration" ? "Event Registration" : data.type.charAt(0).toUpperCase() + data.type.slice(1);
  const title = `${emoji[data.type]} New ${typeLabel} Submission`;

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
  } else if (data.type === "event-registration") {
    if (data.phone)
      details += `\n*Phone:* ${escapeMarkdown(String(data.phone))}`;
    if (data.persons)
      details += `\n*Persons:* ${escapeMarkdown(String(data.persons))}`;
    if (data.event)
      details += `\n*Event:* ${escapeMarkdown(String(data.event))}`;
    if (data.date)
      details += `\n*Date:* ${escapeMarkdown(String(data.date))}`;
    if (data.venue)
      details += `\n*Venue:* ${escapeMarkdown(String(data.venue))}`;
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
  } else if (data.type === "media") {
    if (data.organization)
      details += `\n*Organization:* ${escapeMarkdown(String(data.organization))}`;
    if (data.designation)
      details += `\n*Designation:* ${escapeMarkdown(String(data.designation))}`;
    if (data.phone)
      details += `\n*Phone:* ${escapeMarkdown(String(data.phone))}`;
    if (data.mediaType)
      details += `\n*Media Type:* ${escapeMarkdown(String(data.mediaType))}`;
    if (data.event)
      details += `\n*Event:* ${escapeMarkdown(String(data.event))}`;
    if (data.portfolioUrl)
      details += `\n*Portfolio:* ${escapeMarkdown(String(data.portfolioUrl))}`;
    if (data.coveragePlan)
      details += `\n*Coverage Plan:* ${escapeMarkdown(String(data.coveragePlan))}`;
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
  return text.replace(/[_*`[]/g, "\\$&");
}
