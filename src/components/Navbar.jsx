import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">GD Portfolio</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">Hire Me</a>
        </nav>
        <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-3 flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-4 pb-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-gray-900 text-white text-center">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  )
}
