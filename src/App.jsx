import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Stats from './components/Stats'
import GroundTruth from './components/GroundTruth'
import AGVDashboard from './components/AGVDashboard'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Recommendations from './components/Recommendations'
import References from './components/References'
import Resources from './components/Resources'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <GroundTruth />
      <AGVDashboard />
      <Timeline />
      <Skills />
      <Projects />
      <Recommendations />
      <References />
      <Resources />
      <Contact />
    </div>
  )
}
