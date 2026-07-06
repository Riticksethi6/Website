import { motion } from 'framer-motion'

const links = [
  { icon: '✉️', label: 'Email', value: 'riticksethi8@gmail.com', href: 'mailto:riticksethi8@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/riticksethi', href: 'https://linkedin.com/in/riticksethi' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/Riticksethi6', href: 'https://github.com/Riticksethi6' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="grain" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label section-label-dark mb-6 justify-center">/ Get in Touch</p>
          <h2 className="heading-editorial heading-editorial-dark text-4xl md:text-5xl text-white mb-6">
            Let's build <em>something.</em>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
            Open to roles in <span className="text-white font-medium">AGV/AMR automation</span>,{' '}
            warehouse systems integration, and technical project delivery across{' '}
            <span className="text-white font-medium">DACH and Europe</span>.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all duration-200 group card-hover card-hover-dark"
              >
                <div className="text-2xl mb-2">{l.icon}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{l.label}</div>
                <div className="text-sm text-white/70 group-hover:text-white transition-colors break-all">{l.value}</div>
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center justify-center gap-2 text-white/40 text-sm mb-2">
              <span>📍</span> Cologne, Germany
            </div>
            <p className="text-white/30 text-xs max-w-md mx-auto">
              M.Sc. Sensor Systems Technology · AGV/AMR Project Engineer · Open to relocation within DACH and Europe
            </p>
            <p className="text-white/20 text-xs mt-6">
              © 2026 Ritick Sethi · Built with React + Vite · Hosted on GitHub Pages
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
