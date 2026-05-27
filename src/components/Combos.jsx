import { CheckCircle2, Crown, MessageCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { combos, whatsappLink } from '../data/siteData'

function Combos() {
  return (
    <section id="combos" className="bg-stone-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Combos"
          title="Pedidos prontos para cada tipo de fome"
          description="Opcoes diretas, com preco visivel e destaque para o combo que mais converte."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {combos.map((combo) => (
            <article
              key={combo.name}
              className={`relative rounded-3xl border p-6 transition hover:-translate-y-1 sm:p-7 ${
                combo.featured
                  ? 'border-amber-300 bg-amber-400 text-stone-950 shadow-2xl shadow-amber-500/20 lg:-mt-5'
                  : 'border-white/10 bg-white/10 text-white'
              }`}
            >
              {combo.badge && (
                <div className="absolute -top-4 left-7 inline-flex items-center gap-2 rounded-full bg-red-800 px-4 py-2 text-sm font-black text-white">
                  <Crown size={16} />
                  {combo.badge}
                </div>
              )}
              <h3 className="mt-3 text-2xl font-black">{combo.name}</h3>
              <div className="mt-5 flex gap-3">
                <CheckCircle2 className={combo.featured ? 'text-red-800' : 'text-amber-300'} />
                <p className={combo.featured ? 'text-stone-800' : 'text-stone-200'}>{combo.items}</p>
              </div>
              <strong className="mt-8 block text-3xl font-black sm:text-4xl">{combo.price}</strong>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-black transition ${
                  combo.featured
                    ? 'bg-stone-950 text-white hover:bg-red-900'
                    : 'bg-white text-stone-950 hover:bg-amber-200'
                }`}
              >
                <MessageCircle size={19} />
                Pedir combo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Combos
