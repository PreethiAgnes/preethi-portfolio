import dns from 'node:dns'
import net from 'node:net'
import nodemailer from 'nodemailer'

// Render's network has no IPv6 egress. `ipv4first` alone isn't enough: Node's
// default Happy-Eyeballs dual-stack racing (autoSelectFamily) can still try
// IPv6 in parallel and let it burn through the connection timeout before
// falling back, causing intermittent ENETUNREACH/timeout failures. Disabling
// autoSelectFamily forces a single-family connection based on lookup order.
dns.setDefaultResultOrder('ipv4first')
net.setDefaultAutoSelectFamily(false)

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
