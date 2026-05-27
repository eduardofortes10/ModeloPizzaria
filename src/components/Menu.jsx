import { MessageCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { pizzas, whatsappLink } from '../data/siteData'

function Menu() {
  return (
    <section id="cardapio" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cardapio"
          title="Sabores que fazem o cliente pedir de novo"
          description="Pizzas ficticias com apresentacao comercial, preco claro e chamada direta para pedido no WhatsApp."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pizzas.map((pizza) => (
            <article
              key={pizza.name}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-stone-950">{pizza.name}</h3>
                  <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-red-800">
                    {pizza.price}
                  </span>
                </div>
                <p className="mt-3 min-h-14 leading-7 text-stone-600">{pizza.description}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-800 px-5 py-3 font-black text-white transition hover:bg-red-700"
                >
                  <MessageCircle size={19} />
                  Pedir agora
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
