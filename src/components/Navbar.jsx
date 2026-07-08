import { useEffect, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { navLinks } from '../data/siteData'

export function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goHome = () => {
    onNavigate('/')
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-black/75 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <button className="text-left" type="button" onClick={goHome} aria-label="Go to home page">
          <span className="block font-serif text-2xl text-white">Lutyens Grove</span>
          <span className="block text-[0.62rem] uppercase text-gold">Delhi Farmhouses</span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link} href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`} className="text-sm text-white/78 transition-colors hover:text-gold">
              {link}
            </a>
          ))}
          <a href="#contact" className="border border-gold px-5 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-black">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                className="py-2 text-white/80"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
