import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import contactRouter from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*'

app.use(cors({ origin: CLIENT_ORIGIN }))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    dbConnected: mongoose.connection.readyState === 1,
    emailConfigured: !!(process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL),
  })
})

app.use('/api/contact', contactRouter)

async function start() {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not set — see .env.example')
    process.exit(1)
  }
  await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}

start()
