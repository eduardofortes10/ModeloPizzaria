import { Menu, Pizza, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks, whatsappLink } from '../data/siteData'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/90 text-white shadow-2xl backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-red-700 to-amber-500 text-white shadow-lg shadow-red-950/30">
            <Pizza size={24} strokeWidth={2.4} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black">Bella Massa</span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-amber-300">
              Pizzaria artesanal
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-stone-200 transition hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-stone-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300 lg:inline-flex"
        >
          Pedir agora
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-stone-950 transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-stone-100 transition hover:bg-white/10 hover:text-amber-300"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-black text-stone-950"
            onClick={closeMenu}
          >
            Pedir agora
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
