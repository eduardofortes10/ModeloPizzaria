import { Star } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { testimonials } from '../data/siteData'

function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Avaliacoes"
          title="Aquela confianca que ajuda a vender"
          description="Depoimentos ficticios para mostrar prova social e deixar a landing mais convincente para clientes reais."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-stone-200 bg-stone-50 p-7 shadow-sm">
              <div className="mb-5 flex text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={19} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg font-semibold leading-8 text-stone-800">"{item.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-full bg-red-800 font-black text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <strong className="block text-stone-950">{item.name}</strong>
                  <span className="text-sm font-semibold text-stone-500">Cliente Bella Massa</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
