import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

function FinalCTA() {
  return (
    <section className="bg-red-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="rounded-full bg-amber-400 px-4 py-1.5 text-sm font-black uppercase tracking-wide text-stone-950">
          Pedido rapido
        </span>
        <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
          Bateu a fome? Peca sua pizza agora.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-red-50">
          Escolha seu sabor favorito, chame no WhatsApp e deixe a Bella Massa cuidar do jantar.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-black text-stone-950 shadow-xl shadow-stone-950/20 transition hover:-translate-y-1 hover:bg-amber-300"
        >
          <MessageCircle size={21} />
          Pedir pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

export default FinalCTA
