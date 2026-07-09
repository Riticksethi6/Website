import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile-photo.jpeg'

function GridBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.12]">
      <svg width="100%" height="100%" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        {[...Array(13)].map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="700" stroke="#ffffff" strokeWidth="0.5" />
        ))}
        {[...Array(8)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="#ffffff" strokeWidth="0.5" />
        ))}
        <path d="M 100 100 H 600 V 400 H 1100" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeDasharray="6,10" opacity="0.5" />
        <path d="M 200 300 H 800 V 500" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeDasharray="6,10" opacity="0.5" />
        {[[100,100],[600,100],[1100,100],[100,400],[600,400],[1100,400]].map(([x,y], i) => (
          <rect key={i} x={x-14} y={y-14} width="28" height="28" rx="4" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
        ))}
        <circle r="6" fill="#ffffff" opacity="0.8">
          <animateMotion dur="9s" repeatCount="indefinite" path="M 100 100 H 600 V 400 H 1100" />
        </circle>
        <circle r="5" fill="#ffffff" opacity="0.6">
          <animateMotion dur="11s" repeatCount="indefinite" path="M 1100 400 H 600 V 100 H 100" />
        </circle>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]">
      <GridBackdrop />
      <div className="grain" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      <span className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] font-mono text-[0.65rem] tracking-[0.3em] text-white/30 uppercase">
        Automation · Robotics · AI
      </span>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <img
            src={profilePhoto}
            alt="Ritick Sethi"
            className="w-12 h-12 rounded-xl object-cover border border-white/15 flex-shrink-0"
          />
          <a
            href="#timeline"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/15 rounded-full pl-1.5 pr-4 py-1.5 text-sm text-white/80 hover:border-white/30 transition-colors"
          >
            <span className="font-mono text-[0.65rem] tracking-widest uppercase bg-white/10 rounded-full px-2.5 py-1 text-white/60">Now</span>
            <span><span className="font-medium text-white">Project Engineer — Automation</span> at EP Equipment</span>
            <span className="text-white/40">→</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="section-label section-label-dark mb-6"
        >
          / Ritick Sethi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-editorial heading-editorial-dark text-white text-5xl md:text-7xl mb-2"
        >
          Give me the requirement.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="heading-editorial heading-editorial-dark text-5xl md:text-7xl mb-8"
        >
          <em>I'll learn it, ship it, automate it.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-white/55 text-lg max-w-xl mb-10 leading-relaxed"
        >
          When EP Equipment's automation team had no structured way to scope AGV solutions,
          I built one — and it's now in daily use. When customer sites lacked visibility into
          operations, I deployed a live dashboard. When BMW's deployment process ate
          engineering hours, I automated it. In 8 months I won 3 key accounts, delivered 3
          remote commissioning deployments, and am running 3+ projects simultaneously. I
          don't just deliver what's scoped — <span className="text-white">I build what the team can reuse.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a href="#projects" className="btn-pill btn-pill-solid-dark">Explore Case Studies</a>
          <a href="#demos" className="btn-pill btn-pill-outline-dark">See Live Demos</a>
          <a href="https://linkedin.com/in/riticksethi" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-outline-dark border-white/15">
            LinkedIn →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl border-t border-white/10 pt-8"
        >
          {[
            { value: '40%', label: 'Faster proposals' },
            { value: '8h/wk', label: 'DevOps time saved' },
            { value: '1.1', label: 'Thesis grade' },
            { value: '3+', label: 'Projects delivered' },
            { value: '3', label: 'Key accounts won' },
            { value: '3', label: 'Remote deployments' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-medium text-white">{stat.value}</div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-10"
      >
        <span className="font-mono text-[0.65rem] text-white/30 uppercase tracking-[0.25em]">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-white/30 text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
