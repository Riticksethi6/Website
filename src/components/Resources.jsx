import { motion } from 'framer-motion'
import { resourcesData } from '../data/resources'

export default function Resources() {
  return (
    <section id="resources" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label section-label-light mb-6">/ Documents</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900">
            Resources <em>and records.</em>
          </h2>
          <p className="text-neutral-400 text-sm mt-4">Download my documents directly — no forms, no waiting.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {resourcesData.map((r, i) => (
            <motion.a
              key={r.file}
              href={`${import.meta.env.BASE_URL}resources/${r.file}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-line rounded-xl p-5 hover:border-neutral-400 transition-colors duration-200 group card-hover"
            >
              <div className="text-2xl mb-3">{r.icon}</div>
              <div className="text-sm font-medium text-neutral-900 mb-1">{r.label}</div>
              <div className="text-xs text-neutral-400 leading-relaxed">{r.description}</div>
              <div className="text-xs mt-4 text-neutral-500 group-hover:text-neutral-900 transition-colors">Download PDF →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
