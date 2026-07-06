import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#demos' },
  { label: 'Story', href: '#timeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Resources', href: '#resources' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="max-w-6xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]">
        <a href="#hero" className="text-white font-medium tracking-tight flex items-center gap-2">
          <span className="text-lg">Ritick Sethi</span>
          <span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-pill btn-pill-solid-dark hidden sm:inline-flex text-xs sm:text-sm px-4 sm:px-5 py-2">
            Get in Touch
          </a>
          <button
            className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-4 h-0.5 bg-current" />
              <span className="block w-4 h-0.5 bg-current" />
              <span className="block w-3 h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-w-6xl mx-auto bg-[#0a0a0a]/95 border border-white/10 border-t-0 rounded-b-2xl px-5 py-4 flex flex-col gap-4 mt-[-2px]"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white text-sm" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-white text-sm font-medium" onClick={() => setOpen(false)}>
              Get in Touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
