import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Server, Database, Download } from 'lucide-react'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const fallbackProjects = [
  {
    _id: 'fallback-1',
    title: 'Task Buddy',
    description: 'A task management web app for creating, updating and tracking tasks with authentication.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    _id: 'fallback-2',
    title: 'Ambulance Alert System',
    description: 'A real-time emergency platform concept connecting patients, drivers and hospitals.',
    technologies: ['React', 'Node.js', 'Express', 'Maps API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    _id: 'fallback-3',
    title: 'FarmAssist',
    description: 'A farming assistant interface combining farm mapping, weather information and crop support.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    liveUrl: '#',
    githubUrl: '#'
  }
]

function App() {
  const [projects, setProjects] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    axios.get(`${API}/projects`)
      .then(({ data }) => setProjects(data.projects?.length ? data.projects : fallbackProjects))
      .catch(() => setProjects(fallbackProjects))
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const submitContact = async (event) => {
    event.preventDefault()
    setStatus('Sending...')
    try {
      await axios.post(`${API}/contact`, form)
      setStatus('Message sent successfully.')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Could not send message. Please try again.')
    }
  }

  return (
    <div>
      <header className="nav-wrap">
        <nav className="container nav">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go home">MP<span>.</span></button>
          <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
              <button key={section} onClick={() => scrollTo(section)}>{section}</button>
            ))}
            <a className="nav-cta" href="/resume.pdf" download><Download size={16}/> Resume</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">FULL STACK DEVELOPER</p>
            <h1>Building digital experiences that are <span>clean, useful & scalable.</span></h1>
            <p className="hero-text">I’m Manideep Peruka, a B.Tech CSE student focused on building modern web applications with React, Node.js and MongoDB.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo('projects')}>View my work <ExternalLink size={17}/></button>
              <button className="secondary" onClick={() => scrollTo('contact')}>Let's talk <Mail size={17}/></button>
            </div>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github/></a>
              <a href="https://linkedin.com/in/manideep-peruka" target="_blank" rel="noreferrer"><Linkedin/></a>
              <a href="mailto:manideepperuka@gmail.com"><Mail/></a>
            </div>
          </div>
          <div className="hero-card">
            <div className="code-window">
              <div className="window-bar"><i/><i/><i/><span>portfolio.js</span></div>
              <pre>{`const developer = {
  name: "Manideep",
  role: "Full Stack Developer",
  stack: ["React", "Node", "MongoDB"],
  focus: "Building useful products"
};`}</pre>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-head"><p className="eyebrow">01 — ABOUT</p><h2>A developer who likes solving real problems.</h2></div>
          <div className="about-grid">
            <p>I enjoy turning ideas into functional products—from task management tools to real-time service concepts. I care about practical UX, maintainable code and learning by building.</p>
            <div className="stats">
              <div><strong>10+</strong><span>Projects & concepts</span></div>
              <div><strong>3</strong><span>Core technologies</span></div>
              <div><strong>1</strong><span>Goal: ship better</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-section">
          <div className="container">
            <div className="section-head"><p className="eyebrow">02 — SKILLS</p><h2>My technical toolkit.</h2></div>
            <div className="skill-grid">
              <Skill icon={<Code2/>} title="Frontend" items={['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Responsive UI']} />
              <Skill icon={<Server/>} title="Backend" items={['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'CRUD']} />
              <Skill icon={<Database/>} title="Database & Tools" items={['MongoDB', 'Mongoose', 'Git & GitHub', 'VS Code', 'API integration']} />
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head"><p className="eyebrow">03 — PROJECTS</p><h2>Selected work.</h2></div>
          <div className="project-grid">
            {projects.map(project => <ProjectCard key={project._id} project={project} />)}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">04 — CONTACT</p>
              <h2>Have an idea? Let’s build it.</h2>
              <p className="hero-text">Reach me at <a href="mailto:manideepperuka@gmail.com">manideepperuka@gmail.com</a> or use the form.</p>
            </div>
            <form onSubmit={submitContact} className="contact-form">
              <input required placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
              <input required type="email" placeholder="Your email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
              <textarea required rows="6" placeholder="Tell me about your project" value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
              <button className="primary" type="submit">Send message <Mail size={17}/></button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Manideep Peruka</span><span>Built with React + Node.js + MongoDB</span></div></footer>
    </div>
  )
}

function Skill({ icon, title, items }) {
  return <article className="skill-card"><div className="skill-icon">{icon}</div><h3>{title}</h3><div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div></article>
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-top"><span>PROJECT</span><div><a href={project.githubUrl || '#'} target="_blank" rel="noreferrer"><Github size={18}/></a><a href={project.liveUrl || '#'} target="_blank" rel="noreferrer"><ExternalLink size={18}/></a></div></div>
    <h3>{project.title}</h3><p>{project.description}</p>
    <div className="chips">{project.technologies?.map(t => <span key={t}>{t}</span>)}</div>
  </article>
}

export default App
