import { motion } from 'framer-motion'
import { referencesData } from '../data/references'

export default function References() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">On Record</p>
          <h2 className="text-4xl font-bold text-white">Employer References</h2>
          <p className="text-gray-500 text-sm mt-3">
            Translated excerpts from formal reference letters (Arbeitszeugnisse). Full letters available on request.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}certificates.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-[#00d4ff] hover:underline"
          >
            Download certificates & course completions (PDF) →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {referencesData.map((ref, i) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1a1f2e] border rounded-2xl p-7"
              style={{ borderColor: ref.color + '33' }}
            >
              <div className="text-4xl mb-3" style={{ color: ref.color }}>"</div>
              <p className="text-gray-300 leading-relaxed italic mb-6">{ref.quote}</p>
              <div className="border-t border-[#ffffff0a] pt-4">
                <div className="font-medium text-white text-sm">{ref.name}</div>
                <div className="text-xs" style={{ color: ref.color }}>{ref.role} — {ref.company}</div>
                <div className="text-xs text-gray-500 mt-1">{ref.period}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
