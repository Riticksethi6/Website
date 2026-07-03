import { motion } from 'framer-motion'
import { skillsData } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Work With</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Spanning the full arc from sensor hardware to cloud tooling to warehouse floors.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((domain, di) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: di * 0.08 }}
              className="bg-[#1a1f2e] border border-[#ffffff15] rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{domain.icon}</span>
                <h3 className="font-semibold text-white">{domain.domain}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border font-medium transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      color: domain.color,
                      borderColor: domain.color + '44',
                      background: domain.color + '12',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
