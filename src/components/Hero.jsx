import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'AGV / AMR Systems Engineer',
  'Warehouse Automation Specialist',
  'WMS Integration Designer',
  'Pre-Sales Solution Architect',
  'Robotics & DevOps Engineer',
]

function TypewriterText({ texts }) {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIdx((idx + 1) % texts.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, idx, texts])

  return (
    <span className="text-[#00d4ff]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function WarehousePath() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        {/* Grid lines */}
        {[...Array(12)].map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" stroke="#00d4ff" strokeWidth="0.5" />
        ))}
        {[...Array(7)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="#00d4ff" strokeWidth="0.5" />
        ))}
        {/* AGV paths */}
        <path d="M 100 100 H 600 V 400 H 1100" stroke="#00d4ff" strokeWidth="2" fill="none" strokeDasharray="8,12" opacity="0.6" />
        <path d="M 200 200 H 800 V 300" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="8,12" opacity="0.6" />
        {/* Station markers */}
        {[[100,100],[600,100],[1100,100],[100,400],[600,400],[1100,400]].map(([x,y], i) => (
          <rect key={i} x={x-15} y={y-15} width="30" height="30" rx="4" fill="none" stroke="#00d4ff" strokeWidth="1.5" opacity="0.8" />
        ))}
        {/* Animated AGV bots */}
        <circle r="8" fill="#00d4ff" opacity="0.9">
          <animateMotion dur="8s" repeatCount="indefinite" path="M 100 100 H 600 V 400 H 1100" />
        </circle>
        <circle r="8" fill="#7c3aed" opacity="0.9">
          <animateMotion dur="12s" repeatCount="indefinite" path="M 1100 400 H 600 V 100 H 100" />
        </circle>
        <circle r="6" fill="#10b981" opacity="0.9">
          <animateMotion dur="10s" repeatCount="indefinite" path="M 200 200 H 800 V 300 H 200" />
        </circle>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WarehousePath />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1f2e44_0%,#0f1117_70%)] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-4">
            Cologne, Germany · Open to DACH & Europe
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Ritick Sethi
          </h1>
          <div className="text-2xl md:text-3xl font-medium mb-6 min-h-[2.5rem]">
            <TypewriterText texts={roles} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build systems that move — AGV automation, WMS integration, and the
          tooling that makes warehouse operations <span className="text-white font-medium">faster, smarter, and measurable.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#dashboard"
            className="px-8 py-3 bg-[#00d4ff] text-black font-semibold rounded-full hover:bg-[#00bbdd] transition-all duration-200 glow-cyan"
          >
            See What I Build
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-[#00d4ff] text-[#00d4ff] font-semibold rounded-full hover:bg-[#00d4ff10] transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="https://linkedin.com/in/riticksethi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-400 hover:text-white transition-all duration-200"
          >
            LinkedIn →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500"
        >
          {[
            { value: '40%', label: 'Faster proposals' },
            { value: '8h/wk', label: 'DevOps time saved' },
            { value: '1.1', label: 'Thesis grade' },
            { value: '5+', label: 'AGV projects' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#00d4ff]">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#00d4ff] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
