import { ArrowDown, Flame, MessageCircle, Star } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-stone-950 pt-28 text-white sm:pt-32 lg:min-h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(220,38,38,0.24),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.18),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-red-950/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-amber-200 backdrop-blur">
            <Flame size={17} />
            Forno quente, pedido facil e sabor de verdade
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            A pizza perfeita para o seu momento
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
            Massa artesanal, recheios generosos e entrega rapida para transformar qualquer noite
            em um jantar especial.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-black text-stone-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300"
            >
              <MessageCircle size={21} />
              Pedir pelo WhatsApp
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:border-amber-300 hover:text-amber-200"
            >
              Ver cardapio
              <ArrowDown size={19} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              ['4.9', 'avaliacao media'],
              ['35 min', 'entrega media'],
              ['+20', 'sabores'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-2xl font-black text-amber-300">{value}</strong>
                <span className="mt-1 block text-xs font-semibold uppercase leading-5 text-stone-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-red-950/40 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
              alt="Pizza artesanal com queijo derretido e ingredientes frescos"
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -bottom-6 left-5 right-5 rounded-3xl bg-white p-5 text-stone-950 shadow-2xl sm:left-8 sm:right-auto sm:min-w-72">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>
              <p className="mt-2 font-black">Pizza grande + refri por R$ 69,90</p>
              <span className="text-sm font-semibold text-stone-500">Promocao valida hoje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
