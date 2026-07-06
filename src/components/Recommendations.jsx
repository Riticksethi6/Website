import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { recommendationsData as recs } from '../data/recommendations'

export default function Recommendations() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % recs.length), 6000)
    return () => clearInterval(t)
  }, [])

  const rec = recs[active]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label section-label-light mb-6">/ What Others Say</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900">
            Words from <em>the field.</em>
          </h2>
          <p className="text-neutral-400 text-sm mt-4">Real recommendations from LinkedIn.</p>
        </motion.div>

        <div className="relative min-h-[240px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="border border-line rounded-2xl p-8 w-full"
            >
              <div className="font-serif italic text-5xl text-neutral-200 mb-2 leading-none">"</div>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">{rec.quote}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm border border-line text-neutral-600"
                  >
                    {rec.initials}
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 text-sm">{rec.name}</div>
                    <div className="text-xs text-neutral-400">{rec.role}</div>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/riticksethi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
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
              aria-label={`Show recommendation ${i + 1}`}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === active ? '#0a0a0a' : '#e5e5e0',
                transform: i === active ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
          <div className="ml-2 flex gap-2">
            <button
              onClick={() => setActive((active - 1 + recs.length) % recs.length)}
              className="w-8 h-8 rounded-full border border-line text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-all text-sm"
            >
              ‹
            </button>
            <button
              onClick={() => setActive((active + 1) % recs.length)}
              className="w-8 h-8 rounded-full border border-line text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-all text-sm"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
