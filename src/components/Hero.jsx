import { ArrowDown, Flame, MessageCircle, Star } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-stone-950 pt-24 text-white sm:pt-32 lg:min-h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(220,38,38,0.24),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.18),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-red-950/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-4 pb-16 sm:gap-12 sm:px-6 sm:pb-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-24">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/30 bg-white/10 px-4 py-2 text-xs font-bold text-amber-200 backdrop-blur sm:mb-6 sm:text-sm lg:mx-0">
            <Flame size={17} />
            <span className="leading-5">Forno quente, pedido facil e sabor de verdade</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:mx-0 lg:text-7xl">
            A pizza perfeita para o seu momento
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-200 sm:mt-6 sm:text-xl sm:leading-8 lg:mx-0">
            Massa artesanal, recheios generosos e entrega rapida para transformar qualquer noite
            em um jantar especial.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row lg:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-base font-black text-stone-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300 sm:px-7 sm:py-4"
            >
              <MessageCircle size={21} />
              Pedir pelo WhatsApp
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-bold text-white transition hover:-translate-y-1 hover:border-amber-300 hover:text-amber-200 sm:px-7 sm:py-4"
            >
              Ver cardapio
              <ArrowDown size={19} />
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-2 sm:mt-10 sm:gap-4 lg:mx-0">
            {[
              ['4.9', 'avaliacao media'],
              ['35 min', 'entrega media'],
              ['+20', 'sabores'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur sm:p-4">
                <strong className="block text-xl font-black text-amber-300 sm:text-2xl">{value}</strong>
                <span className="mt-1 block text-[10px] font-semibold uppercase leading-4 text-stone-300 sm:text-xs sm:leading-5">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-[1.6rem] border border-white/10 bg-white/10 p-2.5 shadow-2xl shadow-red-950/40 backdrop-blur sm:rounded-[2rem] sm:p-4">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
              alt="Pizza artesanal com queijo derretido e ingredientes frescos"
              className="aspect-[1.08/1] w-full rounded-[1.2rem] object-cover sm:aspect-square sm:rounded-[1.5rem]"
            />
            <div className="mt-3 rounded-3xl bg-white p-4 text-left text-stone-950 shadow-2xl sm:absolute sm:-bottom-6 sm:left-8 sm:right-auto sm:mt-0 sm:min-w-72 sm:p-5">
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
