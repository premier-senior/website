import { Resend } from "resend"

type LeadNotification = {
  name: string
  email: string
  phone: string | null
  message: string
}

const BRAND = "Premier Senior"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/**
 * Sends a new-lead notification to the business admin.
 * Returns true on success. Never throws — email failures must not
 * break the contact form submission.
 */
export async function sendLeadNotification(lead: LeadNotification, leadId?: number): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.ADMIN_EMAIL

  if (!apiKey || !from || !to) {
    console.log("[v0] sendLeadNotification skipped: missing RESEND_API_KEY, RESEND_FROM_EMAIL, or ADMIN_EMAIL")
    return false
  }

  const resend = new Resend(apiKey)

  const safeName = escapeHtml(lead.name)
  const safeEmail = escapeHtml(lead.email)
  const safePhone = lead.phone ? escapeHtml(lead.phone) : "Not provided"
  const safeMessage = escapeHtml(lead.message).replace(/\n/g, "<br />")

  const html = `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
    <h1 style="font-size:18px;font-weight:600;margin:0 0 4px;">New contact form lead</h1>
    <p style="font-size:14px;color:#666;margin:0 0 24px;">You received a new inquiry through the ${BRAND} website.</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:8px 0;color:#666;width:100px;vertical-align:top;">Name</td>
        <td style="padding:8px 0;font-weight:500;">${safeName}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#666;vertical-align:top;">Email</td>
        <td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#0f62fe;">${safeEmail}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#666;vertical-align:top;">Phone</td>
        <td style="padding:8px 0;">${safePhone}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#666;vertical-align:top;">Message</td>
        <td style="padding:8px 0;line-height:1.5;">${safeMessage}</td>
      </tr>
    </table>
    <p style="font-size:12px;color:#999;margin:24px 0 0;border-top:1px solid #eee;padding-top:16px;">
      Reply directly to this email to respond to ${safeName}.
    </p>
  </div>`

  const text = `New contact form lead

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone || "Not provided"}

Message:
${lead.message}
`

  try {
    const { error } = await resend.emails.send(
      {
        from: `${BRAND} <${from}>`,
        to,
        replyTo: lead.email,
        subject: `New lead: ${lead.name}`,
        html,
        text,
      },
      { idempotencyKey: `lead-notification/${leadId ?? lead.email}` },
    )
    if (error) {
      console.log("[v0] sendLeadNotification Resend error:", error)
      return false
    }
    return true
  } catch (error) {
    console.log("[v0] sendLeadNotification threw:", error)
    return false
  }
}

export async function sendLeadConfirmation(lead: LeadNotification, leadId?: number): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    console.log("[v0] sendLeadConfirmation skipped: missing RESEND_API_KEY or RESEND_FROM_EMAIL")
    return false
  }

  const resend = new Resend(apiKey)
  const safeName = escapeHtml(lead.name)
  const safeMessage = escapeHtml(lead.message).replace(/\n/g, "<br />")
  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;"><h1 style="font-size:20px;font-weight:600;margin:0 0 8px;">Thank you for contacting ${BRAND}</h1><p style="font-size:15px;line-height:1.6;margin:0 0 20px;">Hi ${safeName}, we received your message and a member of our team will be in touch soon.</p><div style="background:#f7f7f7;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;"><strong>Your message</strong><br />${safeMessage}</div><p style="font-size:13px;color:#666;line-height:1.5;margin:20px 0 0;">If you need to add anything, reply to this email and our team will help.</p></div>`
  const text = `Thank you for contacting ${BRAND}, ${lead.name}.\n\nWe received your message and a member of our team will be in touch soon.\n\nYour message:\n${lead.message}\n`

  try {
    const { error } = await resend.emails.send(
      {
        from: `${BRAND} <${from}>`,
        to: lead.email,
        subject: `We received your message, ${lead.name}`,
        html,
        text,
      },
      { idempotencyKey: `lead-confirmation/${leadId ?? lead.email}` },
    )
    if (error) {
      console.log("[v0] sendLeadConfirmation Resend error:", error)
      return false
    }
    return true
  } catch (error) {
    console.log("[v0] sendLeadConfirmation threw:", error)
    return false
  }
}

