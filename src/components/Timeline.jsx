import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { timelineData } from '../data/timeline'

function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(index === 0 || !!item.image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative pl-10 sm:pl-14"
    >
      <div className="absolute left-[7px] sm:left-[11px] top-0 bottom-0 w-px bg-line" />
      <div
        className="absolute left-0 sm:left-1 top-7 w-3.5 h-3.5 rounded-full border-2 bg-white z-10"
        style={{ borderColor: open ? item.color : '#d4d4d0' }}
      />

      <div
        className="border border-line rounded-2xl mb-4 overflow-hidden cursor-pointer card-hover"
        onClick={() => setOpen(!open)}
      >
        <div className="p-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-0.5">{item.icon}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-medium text-neutral-900">{item.role}</h3>
                <span
                  className="font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full border border-line text-neutral-500"
                >
                  {item.type}
                </span>
              </div>
              <div className="text-sm font-medium" style={{ color: item.color }}>{item.company}</div>
              <div className="text-xs text-neutral-400 mt-1">{item.period} · {item.location}</div>
              <p className="text-sm text-neutral-500 mt-2">{item.summary}</p>
            </div>
          </div>
          <div className="text-neutral-300 text-lg mt-1 flex-shrink-0">{open ? '−' : '+'}</div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 pb-6 pt-0 pl-[4.25rem] border-t border-line/70">
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-500">
                      <span style={{ color: item.color }} className="mt-1 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
                {item.image && (
                  <figure className="mt-4">
                    <img
                      src={item.image}
                      alt={item.imageCaption || item.role}
                      className="rounded-xl border border-line max-w-xs w-full"
                    />
                    {item.imageCaption && (
                      <figcaption className="text-xs text-neutral-400 mt-2">{item.imageCaption}</figcaption>
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
    <section id="timeline" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label section-label-light mb-6">/ The Journey</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900 mb-4">
            From sensors <em>to systems.</em>
          </h2>
          <p className="text-neutral-500 max-w-xl">
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
