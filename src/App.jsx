import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AGVDashboard from './components/AGVDashboard'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f1117] font-sans">
      <Navbar />
      <Hero />
      <AGVDashboard />
      <Timeline />
      <Projects />
      <Skills />
      <Recommendations />
      <Contact />
    </div>
  )
}
