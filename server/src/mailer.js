import { Resend } from 'resend'

const { RESEND_API_KEY, NOTIFY_EMAIL } = process.env

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export async function sendContactNotification({ name, email, message }) {
  if (!resend || !NOTIFY_EMAIL) return

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) throw new Error(error.message || 'Resend API error')
}
