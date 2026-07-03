import { motion } from 'framer-motion'
import { resourcesData } from '../data/resources'

export default function Resources() {
  return (
    <section id="resources" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">Documents</p>
          <h2 className="text-4xl font-bold text-white">Resources</h2>
          <p className="text-gray-500 text-sm mt-3">
            Download my documents directly — no forms, no waiting.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {resourcesData.map((r, i) => (
            <motion.a
              key={r.file}
              href={`${import.meta.env.BASE_URL}resources/${r.file}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1a1f2e] border border-[#ffffff15] rounded-xl p-5 hover:border-[#00d4ff44] transition-all duration-200 group card-hover"
              style={{ borderColor: r.color + '33' }}
            >
              <div className="text-2xl mb-2">{r.icon}</div>
              <div className="text-sm font-medium text-white group-hover:text-[#00d4ff] transition-colors mb-1">
                {r.label}
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">{r.description}</div>
              <div className="text-xs mt-3" style={{ color: r.color }}>Download PDF →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
