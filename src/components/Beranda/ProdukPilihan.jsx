import { ArrowRight, ShoppingBag, Ruler, CircleCheck, Package, Flame, Snowflake } from 'lucide-react'
import nilaSegar from '../../assets/produk/produk-nila-segar.jpg'
import marinasiOriginal from '../../assets/produk/produk-marinasi-original.jpg'
import marinasiPedas from '../../assets/produk/produk-marinasi-pedas.jpg'

const produk = [
  {
    image: nilaSegar,
    bestSeller: true,
    title: 'Ikan Nila Merah Fresh (Hidup / Bersih)',
    desc: 'Dipanen segar seketika. Sisik berkilau, insang merah cerah alami, daging kenyal padat tanpa endapan aroma lumpur.',
    fitur: [
      { icon: Ruler, text: 'Ukuran 3-4 ekor/kg atau 4-5 ekor/kg' },
      { icon: CircleCheck, text: 'Pilihan: Ikan hidup atau dibersihkan isi perut' },
    ],
  },
  {
    image: marinasiOriginal,
    title: 'Nila Marinasi Bumbu Original',
    desc: 'Olahan praktis siap saji dengan rendaman bumbu kuning rempah Nusantara alami. Tanpa bahan pengawet sintetik.',
    fitur: [
      { icon: CircleCheck, text: 'Rempah lengkuas, ketumbar & kunyit murni' },
      { icon: Package, text: 'Kemasan higienis vacuum sealed kedap udara' },
    ],
  },
  {
    image: marinasiPedas,
    title: 'Nila Marinasi Pedas Gurih',
    desc: 'Racikan cabai segar terpilih dan rempah harum yang meresap sempurna hingga ke serat daging ikan terdalam.',
    fitur: [
      { icon: Flame, text: 'Sensasi pedas gurih sedap beraroma daun jeruk' },
      { icon: Snowflake, text: 'Tahan disimpan di freezer beku hingga 2 bulan' },
    ],
  },
]

function KartuProduk({ image, bestSeller, title, desc, fitur }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded bg-chateau px-2 py-0.5 font-jakarta text-[10px] font-bold text-white">
            Tersedia
          </span>
          {bestSeller && (
            <span className="rounded bg-zodiac px-2 py-0.5 font-jakarta text-[10px] font-bold text-white">
              Best Seller
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-jakarta text-base font-bold text-zodiac">{title}</h3>
        <p className="mt-2 font-inter text-xs leading-relaxed text-mako">{desc}</p>

        <ul className="mt-3 space-y-1.5">
          {fitur.map((f) => (
            <li key={f.text} className="flex items-center gap-2 font-inter text-[11px] text-zodiac">
              <f.icon size={13} className="shrink-0 text-pelorous" />
              {f.text}
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-zumthor pt-4">
          <button className="mx-auto mt-4 flex items-center gap-2 rounded-lg bg-zodiac px-6 py-2 font-jakarta text-xs font-bold text-white">
            <ShoppingBag size={14} />
            Beli
          </button>
        </div>
      </div>
    </article>
  )
}

export default function ProdukPilihan() {
  return (
    <section id="produk" className="bg-zumthor py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-jakarta text-[11px] font-bold uppercase tracking-wide text-pelorous">
              Produk Pilihan
            </p>
            <h2 className="mt-1 font-jakarta text-2xl font-extrabold text-zodiac md:text-3xl">
              Pilihan Ikan Nila Segar Berkualitas
            </h2>
            <p className="mt-2 font-inter text-sm text-mako">
              Dipanen langsung dari kolam saat Anda pesan, higienis, segar murni dan siap olah
              untuk kelezatan maksimal.
            </p>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 font-jakarta text-sm font-semibold text-zodiac hover:underline"
          >
            Daftar Produk Lengkap
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {produk.map((p) => (
            <KartuProduk key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}