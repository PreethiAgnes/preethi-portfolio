import nodemailer from 'nodemailer'

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
