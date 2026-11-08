import { Gem, CircleCheck, ScrollText, Truck, MessageSquareText, ArrowRight, Container } from 'lucide-react'

const keunggulan = [
  { icon: CircleCheck, text: 'Harga Khusus Grosir' },
  { icon: ScrollText, text: 'Kontrak Pasokan Terjamin' },
  { icon: Truck, text: 'Pengiriman Tepat Waktu' },
]

export default function Kemitraan() {
  return (
    <section id="kemitraan" className="bg-zumthor px-4 pb-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl bg-linear-to-br from-zodiac to-[#0a5a96] p-6 md:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-jakarta text-[10px] font-bold uppercase tracking-wide text-white">
            <Gem size={12} />
            Kemitraan
          </span>

          <h2 className="mt-4 font-jakarta text-2xl font-extrabold leading-snug text-white md:text-3xl">
            Bermitra Bersama Ratna Farm: Pasokan Rutin untuk Restoran, Katering, dan Agen
          </h2>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {keunggulan.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 font-jakarta text-xs font-medium text-white"
              >
                <item.icon size={15} className="text-chateau" />
                {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/6282129818323"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-chateau px-4 py-2.5 font-jakarta text-xs font-bold text-white hover:brightness-110"
            >
              <MessageSquareText size={15} />
              Konsultasi via WhatsApp (082129818323)
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2.5 font-jakarta text-xs font-semibold text-white hover:bg-white/25"
            >
              Pelajari Paket Kemitraan
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

         <div className="flex w-full flex-col items-center rounded-2xl border border-white/10 bg-zodiac/90 px-8 py-8 text-center lg:w-72">
          <Container size={32} className="text-white" />
          <p className="mt-3 font-jakarta text-base font-bold text-white">Kapasitas Kolam</p>
          <p className="mt-1 font-inter text-xs text-white/70">Hingga 500+ kg panen / siklus</p>
        </div>
      </div>
    </section>
  )
}