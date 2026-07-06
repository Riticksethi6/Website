import { motion } from 'framer-motion'
import thesisDefensePhoto from '../assets/thesis-defense.jpeg'

export default function GroundTruth() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label section-label-light mb-6">/ First Principles</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-neutral-900 mb-6">
            Designed on paper. <em>Proven in the field.</em>
          </h2>
          <div className="space-y-4 text-neutral-500 leading-relaxed">
            <p>
              Real systems don't behave like the diagram. Sensors drift, requirements shift
              mid-project, subsystems need to talk to software they were never designed for,
              and every deployment carries constraints no textbook accounts for.
            </p>
            <p>
              I built my foundation in theory — sensor fusion, embedded systems, and system
              integration at Master's level — then spent three years testing it against
              reality: in research labs, inside an automotive OEM, on an energy-grid
              simulation, and now scoping and delivering industrial automation projects end
              to end. Same lesson every time: design is the easy 10%.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 border border-line rounded-full px-4 py-2 text-xs text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Thesis grade verified: 1.1 / Sehr Gut
            </span>
            <span className="font-mono text-xs text-neutral-400">HOCHSCHULE KARLSRUHE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden border border-line"
        >
          <img
            src={thesisDefensePhoto}
            alt="Ritick Sethi receiving his Master's degree certificate at Hochschule Karlsruhe"
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute left-4 right-4 bottom-4 bg-white/95 backdrop-blur rounded-xl p-5 border border-line">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Verified Record
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              M.Sc. Sensor Systems Technology, awarded Oct 2025. System Integration module graded 1.0.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
