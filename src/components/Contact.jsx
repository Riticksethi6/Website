import { motion } from 'framer-motion'

const links = [
  { icon: '✉️', label: 'Email', value: 'riticksethi8@gmail.com', href: 'mailto:riticksethi8@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/riticksethi', href: 'https://linkedin.com/in/riticksethi' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/Riticksethi6', href: 'https://github.com/Riticksethi6' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Something</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Open to roles in <span className="text-white font-medium">AGV/AMR automation</span>,{' '}
            warehouse systems integration, and technical project delivery across{' '}
            <span className="text-white font-medium">DACH and Europe</span>.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1f2e] border border-[#ffffff15] rounded-xl p-5 hover:border-[#00d4ff44] transition-all duration-200 group card-hover"
              >
                <div className="text-2xl mb-2">{l.icon}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{l.label}</div>
                <div className="text-sm text-gray-300 group-hover:text-[#00d4ff] transition-colors break-all">{l.value}</div>
              </a>
            ))}
          </div>

          <div className="border-t border-[#ffffff0a] pt-8">
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-2">
              <span>📍</span> Cologne, Germany 🇩🇪
            </div>
            <p className="text-gray-600 text-xs max-w-md mx-auto">
              M.Sc. Sensor Systems Technology · AGV/AMR Project Engineer · Open to relocation within DACH and Europe
            </p>
            <p className="text-gray-700 text-xs mt-6">
              © 2026 Ritick Sethi · Built with React + Vite · Hosted on GitHub Pages
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
