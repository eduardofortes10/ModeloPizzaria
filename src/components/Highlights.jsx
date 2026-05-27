import { Bike, ChefHat, Sparkles, Tags } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { highlights } from '../data/siteData'

const icons = [ChefHat, Sparkles, Bike, Tags]

function Highlights() {
  return (
    <section className="bg-amber-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Tudo pensado para sua pizza chegar impecavel"
          description="Da massa ao atendimento, a Bella Massa foi desenhada para vender sabor, confianca e conveniencia."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = icons[index]

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-6"
              >
                <div className="mb-5 grid size-13 place-items-center rounded-2xl bg-red-800 text-amber-300">
                  <Icon size={25} />
                </div>
                <h3 className="text-xl font-black text-stone-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Highlights
