import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  technologies: [{ type: String, trim: true }],
  imageUrl: { type: String, default: '' },
  liveUrl: { type: String, default: '' },
  githubUrl: { type: String, default: '' }
}, { timestamps: true })

export default mongoose.model('Project', projectSchema)
