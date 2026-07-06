import { motion } from 'framer-motion'

const showcase = [
  {
    id: 'presales',
    title: 'AGV/AMR Pre-Sales Solution Tool',
    tag: 'Python · Streamlit',
    live: true,
    description:
      'The tool I built to eliminate the AGV scoping bottleneck — customer requirements go in; structured sizing, material flow design, and quotations come out. Multilingual, validated in real pre-sales workflows. This demo runs on generic product data.',
    primary: { label: 'Open Live Demo', href: 'https://presales-tool.streamlit.app' },
    secondary: { label: 'View Source', href: 'https://github.com/Riticksethi6/warehouse-automation-presales-tool' },
  },
  {
    id: 'dashboard',
    title: 'Warehouse Operations Dashboard',
    tag: 'FastAPI · JavaScript · Chart.js',
    live: true,
    description:
      'A reference build of the kind of live monitoring dashboard I design for customer sites — storage grid, inventory KPIs, material distribution, and battery monitoring. Runs a client-side mock of the FastAPI backend for this demo; the real backend is in the repo.',
    primary: { label: 'Open Live Demo', href: 'https://riticksethi6.github.io/Warehouse-Dashboard/' },
    secondary: { label: 'View Source', href: 'https://github.com/Riticksethi6/Warehouse-Dashboard' },
  },
]

function ShowcaseCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-white/30">/ {String(index + 1).padStart(2, '0')}</span>
        {item.live && (
          <span className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Live now
          </span>
        )}
      </div>
      <h3 className="text-xl font-medium text-white mb-1">{item.title}</h3>
      <span className="font-mono text-xs text-white/40 mb-5">{item.tag}</span>
      <p className="text-sm text-white/55 leading-relaxed mb-8 flex-1">{item.description}</p>
      <div className="flex flex-wrap items-center gap-5">
        <a
          href={item.primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-solid-dark text-sm py-2.5"
        >
          {item.primary.label} →
        </a>
        {item.secondary && (
          <a
            href={item.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
          >
            {item.secondary.label} →
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function AGVDashboard() {
  return (
    <section id="demos" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label section-label-dark mb-6">/ Live in the Field</p>
          <h2 className="heading-editorial heading-editorial-dark text-4xl md:text-5xl text-white mb-4">
            Real systems, <em>not slides.</em>
          </h2>
          <p className="text-white/50 max-w-xl">
            Two things you can open right now — a live tool in daily use, and the source behind
            a warehouse monitoring dashboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {showcase.map((item, i) => <ShowcaseCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
