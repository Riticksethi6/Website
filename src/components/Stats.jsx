import { motion } from 'framer-motion'
import { statsData } from '../data/stats'

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label section-label-light mb-4">/ Track Record</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900">
            Results, <em>not slideware.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-line rounded-2xl overflow-hidden">
          {statsData.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 border-line border-t border-l"
            >
              <div className="text-4xl md:text-5xl font-medium text-neutral-900 mb-3">{s.value}</div>
              <div className="text-sm font-medium text-neutral-700 mb-1">{s.label}</div>
              <div className="text-xs text-neutral-400">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
