import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Market Index', href: '#market' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Logistics', href: '#logistics' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 bg-[#111111] ${
        scrolled ? 'shadow-[0_2px_0_#FFD700]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#FFD700] flex items-center justify-center flex-shrink-0">
              <span className="text-[#111111] font-black text-xs tracking-wider">PP</span>
            </div>
            <div className="leading-none">
              <div className="text-white font-black tracking-[0.15em] text-sm uppercase">
                PP Industries
              </div>
              <div className="text-[#FFD700] text-[10px] tracking-[0.25em] uppercase font-semibold -mt-0.5">
                Pvt. Ltd.
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-gray-400 hover:text-[#FFD700] text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-150"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#FFD700] text-[#111111] px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] hover:bg-white transition-colors duration-150"
            >
              <Phone size={13} />
              Get Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 hover:text-[#FFD700] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#222222] px-4 pt-2 pb-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-400 hover:text-[#FFD700] text-xs font-bold uppercase tracking-[0.18em] py-3 border-b border-[#1e1e1e]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#FFD700] text-[#111111] px-4 py-3.5 text-xs font-black uppercase tracking-[0.15em] w-full mt-4"
          >
            <Phone size={13} />
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}
