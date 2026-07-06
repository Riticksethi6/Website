import { motion } from 'framer-motion'
import { referencesData } from '../data/references'

export default function References() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label section-label-light mb-6">/ On Record</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900">
            Employer <em>references.</em>
          </h2>
          <p className="text-neutral-400 text-sm mt-4 max-w-xl">
            Translated excerpts from formal reference letters (Arbeitszeugnisse). Full letters available on request.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {referencesData.map((ref, i) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-line rounded-2xl p-7 card-hover"
            >
              <div className="font-serif italic text-4xl text-neutral-200 mb-2 leading-none">"</div>
              <p className="text-neutral-600 leading-relaxed mb-6 text-sm">{ref.quote}</p>
              <div className="border-t border-line pt-4">
                <div className="font-medium text-neutral-900 text-sm">{ref.name}</div>
                <div className="text-xs text-neutral-500">{ref.role} — {ref.company}</div>
                <div className="text-xs text-neutral-400 mt-1">{ref.period}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
