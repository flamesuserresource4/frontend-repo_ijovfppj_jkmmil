import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-[#0a0a0b]/70 border-b border-white/10 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">Neon Studio</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm bg-white text-black px-4 py-2 rounded-md hover:bg-white/90 transition-colors">Hire Me</a>
        </nav>
        <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-[#0a0a0b] border-b border-white/10 shadow-2xl">
          <div className="px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-white">Menu</span>
            <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
          <div className="px-4 pb-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-white/80 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-white text-black text-center">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  )
}
