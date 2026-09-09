import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import projectRoutes from './routes/projects.js'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_URL?.split(',') || true }))
app.use(express.json())

app.get('/api/health', (_req, res) => res.json({ ok: true, message: 'Portfolio API is running' }))
app.use('/api/projects', projectRoutes)
app.use('/api/contact', contactRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`API running on port ${PORT}`))
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message)
    process.exit(1)
  })
