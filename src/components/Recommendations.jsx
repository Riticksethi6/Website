import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const recs = [
  {
    quote: "Ritick has a rare ability to bridge the gap between customer requirements and technical execution. His pre-sales tool transformed how our team approaches AGV scoping — clear, fast, and professional.",
    name: "Manager, EP Equipment GmbH",
    role: "Automation Division",
    initials: "EP",
    color: "#00d4ff",
  },
  {
    quote: "What stood out most was Ritick's ownership. He didn't just implement the pipelines — he proactively identified bottlenecks and delivered solutions that the whole team now relies on daily.",
    name: "Supervisor, BMW Group",
    role: "DevOps Engineering",
    initials: "BM",
    color: "#3b82f6",
  },
  {
    quote: "Ritick quickly grasped complex robotics concepts and contributed meaningfully to our simulation environment. His ROS2 work was solid, reliable, and well-documented.",
    name: "Research Lead, FZI Research Center",
    role: "Machine Learning & Robotics",
    initials: "FZ",
    color: "#10b981",
  },
]

export default function Recommendations() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % recs.length), 5000)
    return () => clearInterval(t)
  }, [])

  const rec = recs[active]

  return (
    <section className="py-24 px-6 bg-[#0d111b]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">What Others Say</p>
          <h2 className="text-4xl font-bold text-white">Recommendations</h2>
          <p className="text-gray-500 text-sm mt-3">Representative testimonials — real recommendations available on LinkedIn.</p>
        </motion.div>

        <div className="relative min-h-[240px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1a1f2e] border rounded-2xl p-8 w-full"
              style={{ borderColor: rec.color + '44' }}
            >
              <div className="text-5xl mb-4" style={{ color: rec.color }}>"</div>
              <p className="text-gray-300 text-lg leading-relaxed italic mb-6">{rec.quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: rec.color + '33', color: rec.color }}
                  >
                    {rec.initials}
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{rec.name}</div>
                    <div className="text-xs text-gray-500">{rec.role}</div>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/riticksethi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00d4ff] hover:underline"
                >
                  View full profile →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          {recs.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === active ? rec.color : '#ffffff22',
                transform: i === active ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
          <div className="ml-2 flex gap-2">
            <button
              onClick={() => setActive((active - 1 + recs.length) % recs.length)}
              className="w-8 h-8 rounded-full bg-[#1a1f2e] border border-[#ffffff15] text-gray-400 hover:text-white hover:border-[#00d4ff] transition-all text-sm"
            >
              ‹
            </button>
            <button
              onClick={() => setActive((active + 1) % recs.length)}
              className="w-8 h-8 rounded-full bg-[#1a1f2e] border border-[#ffffff15] text-gray-400 hover:text-white hover:border-[#00d4ff] transition-all text-sm"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
