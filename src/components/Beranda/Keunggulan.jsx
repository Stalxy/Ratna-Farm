import { LayoutGrid, Recycle, Waves, Sprout, Fish } from 'lucide-react'

const kartuAtas = [
  {
    icon: LayoutGrid,
    title: 'Padat Tebar & Panen Melimpah',
    desc: 'Efisiensi ruang optimal dengan kepadatan terkontrol menghasilkan panen berlipat dan pasokan stabil sepanjang tahun tanpa bergantung musim.',
  },
  {
    icon: Recycle,
    title: 'Hemat Pakan (Limbah Jadi Flok)',
    desc: 'Limbah sisa pakan diubah oleh konsorsium bakteri probiotik menjadi flok kaya protein mikroskopis yang menjadi cemilan sehat dan bergizi untuk ikan.',
  },
  {
    icon: Waves,
    title: 'Hemat Air & Ekosistem Seimbang',
    desc: 'Sirkulasi tertutup minim pergantian air menjaga parameter fisika-kimia tetap ideal, mereduksi stres biologis pada ikan secara signifikan.',
  },
]

const kartuBawah = [
  {
    icon: Sprout,
    title: 'Ramah Lingkungan (Sirkular Pupuk)',
    desc: 'Air endapan yang kaya hara makro disalurkan ke kebun hortikultura sekitar farm. Ekosistem nir-limbah (zero-waste) yang menyuburkan tanah sekitar.',
  },
  {
    icon: Fish,
    title: 'Daging Tebal, Bersih & 100% Bebas Bau Tanah',
    desc: 'Karena tidak bersentuhan dengan lumpur dasar kolam galian tradisional, rasa alami ikan nila merah Ratna Farm menjadi gurih murni, kenyal padat, dan higienis.',
  },
]

function Kartu({ icon: Icon, title, desc, bgClass, titleClass, iconClass }) {
  return (
    <div className={`rounded-2xl p-5 shadow-sm ${bgClass}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
        <Icon size={18} className={iconClass} />
      </span>
      <h3 className={`mt-4 font-jakarta text-sm font-bold ${titleClass}`}>{title}</h3>
      <p className="mt-1 font-inter text-[11px] leading-relaxed text-white">{desc}</p>
    </div>
  )
}

export default function Keunggulan() {
  return (
    <section className="bg-zumthor py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-jakarta text-2xl font-extrabold text-zodiac md:text-3xl">
            Mengapa Ikan Nila Ratna Farm Lebih Unggul?
          </h2>
          <p className="mt-3 font-inter text-sm text-mako">
            Sistem bioflok menciptakan mikroorganisme menguntungkan yang menjaga air senantiasa
            bersih dan kaya nutrisi bagi ikan nila merah kami.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {kartuAtas.map((k) => (
            <Kartu
              key={k.title}
              {...k}
              bgClass="bg-linear-to-br from-pelorous to-[#1f7f98]"
              titleClass="text-zodiac"
              iconClass="text-pelorous"
            />
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {kartuBawah.map((k) => (
            <Kartu
              key={k.title}
              {...k}
              bgClass="bg-linear-to-br from-zodiac via-[#0a4a86] to-[#0b69a6]"
              titleClass="text-pelorous"
              iconClass="text-zodiac"
            />
          ))}
        </div>
      </div>
    </section>
  )
}