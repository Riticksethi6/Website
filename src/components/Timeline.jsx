import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { timelineData } from '../data/timeline'

function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(index === 0 || !!item.image)
  const color = item.color

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-12"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[#ffffff10]" />
      {/* Dot */}
      <div
        className="absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 z-10"
        style={{ background: open ? color : '#0f1117', borderColor: color }}
      />

      <div
        className="bg-[#1a1f2e] border rounded-xl mb-4 overflow-hidden cursor-pointer card-hover"
        style={{ borderColor: open ? color + '55' : '#ffffff15' }}
        onClick={() => setOpen(!open)}
      >
        <div className="p-5 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-0.5">{item.icon}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-white">{item.role}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color, borderColor: color + '44', background: color + '15' }}>
                  {item.type}
                </span>
              </div>
              <div className="text-sm font-medium" style={{ color }}>{item.company}</div>
              <div className="text-xs text-gray-500 mt-1">{item.period} · {item.location}</div>
              <p className="text-sm text-gray-400 mt-2">{item.summary}</p>
            </div>
          </div>
          <div className="text-gray-500 text-lg mt-1 flex-shrink-0">{open ? '−' : '+'}</div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-5 pb-5 pt-0 pl-16 border-t border-[#ffffff08]">
                <ul className="mt-3 space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span style={{ color }} className="mt-1 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
                {item.image && (
                  <figure className="mt-4">
                    <img
                      src={item.image}
                      alt={item.imageCaption || item.role}
                      className="rounded-xl border max-w-xs w-full"
                      style={{ borderColor: color + '33' }}
                    />
                    {item.imageCaption && (
                      <figcaption className="text-xs text-gray-500 mt-2">{item.imageCaption}</figcaption>
                    )}
                  </figure>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">The Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From Sensors to Systems</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A career built through research labs, automotive giants, and live warehouse floors —
            each chapter adding a layer to what I build today.
          </p>
        </motion.div>
        <div className="space-y-0">
          {timelineData.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
