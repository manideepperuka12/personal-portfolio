import 'dotenv/config'
import mongoose from 'mongoose'
import Project from './models/Project.js'

const projects = [
  { title:'Task Buddy', description:'Task management web app for creating, updating and tracking tasks.', technologies:['React','Node.js','MongoDB'], liveUrl:'#', githubUrl:'#' },
  { title:'Ambulance Alert System', description:'Emergency platform concept for patient requests, driver tracking and hospital notifications.', technologies:['React','Node.js','Express','Maps API'], liveUrl:'#', githubUrl:'#' },
  { title:'FarmAssist', description:'Farming assistant interface combining farm mapping, weather data and crop support.', technologies:['HTML','CSS','JavaScript','APIs'], liveUrl:'#', githubUrl:'#' }
]

await mongoose.connect(process.env.MONGO_URI)
await Project.deleteMany({})
await Project.insertMany(projects)
console.log('Sample projects inserted')
await mongoose.disconnect()
