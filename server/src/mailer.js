import dns from 'node:dns'
import nodemailer from 'nodemailer'

// Render's network has no IPv6 egress. nodemailer's SMTP socket doesn't
// forward a `family` option to net.connect, so the only reliable fix is
// this process-wide DNS resolution order (Node otherwise may resolve
// smtp.gmail.com to an IPv6 address and fail with ENETUNREACH).
dns.setDefaultResultOrder('ipv4first')

const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env

const transporter =
  GMAIL_USER && GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      })
    : null

export async function sendContactNotification({ name, email, message }) {
  if (!transporter) return

  await transporter.sendMail({
    from: `Portfolio Contact Form <${GMAIL_USER}>`,
    to: GMAIL_USER,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })
}
