import { motion } from 'framer-motion'
import { skillsData } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="section-label section-label-light mb-6">/ Capabilities</p>
            <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900 max-w-xl">
              One engineer, <em>the full stack.</em>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm">
            Spanning sensor hardware, robotics simulation, systems software, and the energy
            models underneath it all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillsData.map((domain, di) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (di % 2) * 0.08 }}
              className="group relative border border-line rounded-2xl p-7 overflow-hidden card-hover"
            >
              <span className="font-mono text-xs text-neutral-300">/ {String(di + 1).padStart(2, '0')}</span>
              <h3 className="text-xl font-medium text-neutral-900 mt-3 mb-4">{domain.domain}</h3>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full border border-line text-neutral-600 transition-colors duration-200 group-hover:border-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-neutral-50 group-hover:bg-neutral-100 transition-colors duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
