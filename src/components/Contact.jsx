import { Clock, MapPin, MessageCircle, Navigation, Timer } from 'lucide-react'
import { whatsappLink } from '../data/siteData'
import SectionHeader from './SectionHeader'

function Contact() {
  const info = [
    [MapPin, 'Endereco', 'Rua das Oliveiras, 245 - Vila Bella, Sao Paulo/SP'],
    [Clock, 'Horario', 'Terca a domingo, das 18h as 23h30'],
    [Timer, 'Entrega media', '30 a 45 minutos apos confirmacao do pedido'],
    [Navigation, 'Regiao atendida', 'Vila Bella, Centro, Jardim Europa e bairros proximos'],
  ]

  return (
    <section id="contato" className="bg-amber-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Localizacao e horario"
          title="Pedir ficou simples"
          description="Informacoes essenciais reunidas em uma area clara para o cliente decidir rapido."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <Icon className="mb-5 text-red-800" size={28} />
                <h3 className="text-lg font-black text-stone-950">{title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex min-h-80 flex-col justify-between rounded-3xl bg-stone-950 p-8 text-white shadow-2xl">
            <div>
              <span className="rounded-full bg-amber-400 px-4 py-1.5 text-sm font-black text-stone-950">
                Atendimento online
              </span>
              <h3 className="mt-6 text-3xl font-black">Monte seu pedido pelo WhatsApp em poucos minutos.</h3>
              <p className="mt-4 leading-8 text-stone-300">
                Fale com a equipe, confirme sabores, tire duvidas e receba o prazo antes de finalizar.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-black text-stone-950 transition hover:bg-amber-300"
            >
              <MessageCircle size={20} />
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
