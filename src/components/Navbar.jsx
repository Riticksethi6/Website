import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Story', href: '#timeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f1117]/95 backdrop-blur-md border-b border-[#00d4ff22]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-[#00d4ff] font-bold text-lg tracking-tight">
          RS<span className="text-white">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-[#00d4ff] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 border border-[#00d4ff] text-[#00d4ff] rounded-full hover:bg-[#00d4ff] hover:text-black transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
        <button className="md:hidden text-[#00d4ff]" onClick={() => setOpen(!open)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-4 h-0.5 bg-current" />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1f2e] border-t border-[#00d4ff22] px-6 py-4 flex flex-col gap-4"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-[#00d4ff]" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
