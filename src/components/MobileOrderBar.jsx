import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-stone-950/95 px-4 py-3 shadow-2xl backdrop-blur lg:hidden">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-stone-950"
      >
        <MessageCircle size={18} />
        Pedir pelo WhatsApp
      </a>
    </div>
  )
}

export default MobileOrderBar
