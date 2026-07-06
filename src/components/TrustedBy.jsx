import { motion } from 'framer-motion'
import { companiesData } from '../data/companies'

export default function TrustedBy() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label section-label-light mb-6">/ Where I've Built</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900 mb-6">
            Research labs, an OEM, <em>and live deployments.</em>
          </h2>
          <p className="text-neutral-500 leading-relaxed mb-8">
            Six organisations, one recurring assignment: take something that only exists on
            paper — a sensor model, a CI/CD pipeline, an automation project — and make it
            work in production.
          </p>
          <div className="flex gap-10 border-t border-line pt-6">
            <div>
              <div className="text-3xl font-medium text-neutral-900">6</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Companies & Institutes</div>
            </div>
            <div>
              <div className="text-3xl font-medium text-neutral-900">DACH</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Based & Open to Relocate</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {companiesData.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-line rounded-xl p-4 flex flex-col justify-center min-h-[92px] card-hover"
            >
              <div className="text-sm font-medium text-neutral-800 leading-snug">{c.name}</div>
              <div className="text-[0.7rem] text-neutral-400 mt-1 leading-snug">{c.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
