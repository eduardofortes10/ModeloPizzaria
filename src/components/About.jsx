import { HeartHandshake, ShieldCheck, Utensils } from 'lucide-react'
import SectionHeader from './SectionHeader'

function About() {
  return (
    <section id="sobre" className="bg-red-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&w=1000&q=85"
            alt="Pizza saindo do forno em uma pizzaria"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-7 left-5 right-5 rounded-3xl bg-white p-5 shadow-xl sm:left-auto sm:right-8 sm:w-72">
            <strong className="block text-3xl font-black text-red-800">Desde 2018</strong>
            <span className="mt-1 block font-semibold text-stone-600">Receitas de familia com operacao moderna.</span>
          </div>
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="Sobre a Bella Massa"
            title="Uma pizzaria familiar com padrao de atendimento profissional"
            description="A Bella Massa nasceu da vontade de servir pizzas caprichadas sem complicar o pedido. O cardapio combina receitas classicas, ingredientes bem escolhidos e uma experiencia simples para quem quer pedir pelo WhatsApp e receber em casa."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [Utensils, 'Receitas artesanais'],
              [ShieldCheck, 'Qualidade constante'],
              [HeartHandshake, 'Atendimento proximo'],
            ].map(([Icon, label]) => (
              <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
                <Icon className="mb-4 text-red-800" size={26} />
                <p className="font-black text-stone-950">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
