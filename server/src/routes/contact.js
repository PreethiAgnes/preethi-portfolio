import { Router } from 'express'
import Message from '../models/Message.js'
import { sendContactNotification } from '../mailer.js'

const router = Router()
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are all required' })
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' })
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message is too long' })
  }

  try {
    const saved = await Message.create({ name, email, message })
    res.status(201).json({ ok: true, id: saved._id })
    sendContactNotification({ name, email, message }).catch((err) =>
      console.error('Failed to send contact notification email:', err.message),
    )
  } catch (err) {
    res.status(500).json({ error: 'Could not save your message, please try again later' })
  }
})

export default router
