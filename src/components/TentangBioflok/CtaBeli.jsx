import { Truck, ShoppingBag, ArrowRight } from 'lucide-react'

export default function CtaBeli() {
  return (
    <section className="bg-linear-to-br from-zodiac to-[#0a5a96]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-jakarta text-[9px] font-bold uppercase tracking-wide text-white">
            <Truck size={11} />
            Pengiriman Segar Langsung Kolam
          </span>
          <h2 className="mt-4 font-jakarta text-2xl font-extrabold leading-snug text-white md:text-4xl">
            Penasaran Rasa Ikan Nila Bioflok Bebas Bau Tanah?
          </h2>
          <p className="mt-3 font-inter text-xs leading-relaxed text-white/80">
            Buktikan sendiri kesegaran daging ikan nila segar langsung dari 7 kolam Ratna Farm ke
            meja makan keluarga Anda atau suplai kontinyu bisnis kuliner Anda.
          </p>
        </div>

        <a
          href="/#produk"
          className="flex w-fit shrink-0 items-center gap-2 rounded-lg bg-pelorous px-5 py-3 font-jakarta text-sm font-bold text-white hover:brightness-110"
        >
          <ShoppingBag size={16} />
          Beli Sekarang
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}