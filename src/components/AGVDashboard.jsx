import { motion } from 'framer-motion'

const showcase = [
  {
    id: 'presales',
    title: 'AGV/AMR Pre-Sales Solution Tool',
    tag: 'Python · Streamlit',
    icon: '🛠️',
    color: '#00d4ff',
    live: true,
    description:
      'The tool I built to fix EP Equipment\'s scoping bottleneck — customer requirements go in, structured AGV/AMR sizing, material flow design, and quotations come out. Multilingual, in daily use, already behind many live customer proposals.',
    primary: { label: 'Open Live Demo →', href: 'https://presales-tool.streamlit.app' },
    secondary: { label: 'View Source', href: 'https://github.com/Riticksethi6/warehouse-automation-presales-tool' },
  },
  {
    id: 'dashboard',
    title: 'Warehouse Operations Dashboard',
    tag: 'FastAPI · JavaScript · Chart.js',
    icon: '📊',
    color: '#7c3aed',
    live: true,
    description:
      'A reference build of the kind of live monitoring dashboard I design for customer sites — storage grid, inventory KPIs, material distribution, and battery monitoring. Runs a client-side mock of the FastAPI backend for this demo; the real backend is in the repo.',
    primary: { label: 'Open Live Demo →', href: 'https://riticksethi6.github.io/Warehouse-Dashboard/' },
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
      className="bg-[#1a1f2e] border border-[#00d4ff22] rounded-2xl p-7 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{item.icon}</span>
        {item.live && (
          <span className="flex items-center gap-2 text-xs text-[#22c55e] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] pulse-dot" />
            Live now
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
      <span className="text-xs font-mono mb-4" style={{ color: item.color }}>{item.tag}</span>
      <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">{item.description}</p>
      <div className="flex flex-wrap items-center gap-5">
        <a
          href={item.primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={{ background: item.color, color: '#0f1117' }}
        >
          {item.primary.label}
        </a>
        {item.secondary && (
          <a
            href={item.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
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
    <section id="dashboard" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">What I Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Systems, Not Slides</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Two things you can open right now — a live tool in daily use, and the source behind a
            warehouse monitoring dashboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {showcase.map((item, i) => <ShowcaseCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
