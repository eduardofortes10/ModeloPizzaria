import { Camera, MessagesSquare, Pizza, Play } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

function Footer() {
  return (
    <footer className="bg-stone-950 px-4 py-12 text-stone-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3 text-white">
            <span className="grid size-11 place-items-center rounded-full bg-red-800 text-amber-300">
              <Pizza size={24} />
            </span>
            <span>
              <span className="block text-xl font-black">Pizzaria Bella Massa</span>
              <span className="block text-sm font-semibold text-amber-300">Modelo ficticio para portfolio</span>
            </span>
          </a>
          <p className="mt-5 max-w-md leading-7">
            Landing page moderna para pizzaria artesanal, criada para demonstrar um projeto comercial pronto para
            GitHub, Vercel e apresentacao freelancer.
          </p>
        </div>

        <div>
          <h3 className="font-black text-white">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>Rua das Oliveiras, 245 - Vila Bella</li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-amber-300">
                WhatsApp: (11) 99999-9999
              </a>
            </li>
            <li>Terca a domingo, 18h as 23h30</li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-white">Redes sociais</h3>
          <div className="mt-4 flex gap-3">
            {[
              [Camera, 'Instagram'],
              [MessagesSquare, 'Facebook'],
              [Play, 'YouTube'],
            ].map(([Icon, label]) => (
              <a
                key={label}
                href="#inicio"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/10 text-white transition hover:border-amber-300 hover:text-amber-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-stone-500">
        © 2026 Pizzaria Bella Massa. Projeto ficticio para portfolio freelancer.
      </div>
    </footer>
  )
}

export default Footer
