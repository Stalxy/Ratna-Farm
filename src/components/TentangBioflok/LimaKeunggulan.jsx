import { Users, Utensils, Droplets, Recycle, Fish } from 'lucide-react'

const atas = [
  {
    icon: Users,
    kicker: 'Optimalisasi Lahan',
    title: 'Padat Tebar & Panen Melimpah',
    desc: 'Optimalisasi 7 kolam bundar terpal untuk efisiensi ruang dan kapasitas panen berkali-kali lipat tanpa membuat ikan stres berkat aerasi mikro oksigen tinggi.',
  },
  {
    icon: Utensils,
    kicker: 'Efisiensi Pakan FCR Rendah',
    title: 'Hemat Pakan & Floc Alami',
    desc: 'Sisa pakan dan kotoran diolah konsorsium bakteri probiotik menjadi flok (cemilan sehat bernutrisi tinggi kaya protein hewani mikro untuk ikan sepanjang hari).',
  },
  {
    icon: Droplets,
    kicker: 'Konservasi Air',
    title: 'Hemat Air & Kualitas Terjaga',
    desc: 'Air kolam bersirkulasi terus menerus tanpa perlu dikuras dari awal sebar benih hingga masa panen tiba, mempertahankan kestabilan pH dan suhu biologis.',
  },
]

const bawah = [
  {
    icon: Recycle,
    kicker: 'Sirkular Terpadu',
    kickerClass: 'text-chateau',
    title: '100% Ramah Lingkungan & Zero Waste',
    desc: 'Sedimen organik bioflok sisa panen tidak pernah dibuang mencemari sungai atau got warga, melainkan dialirkan secara teratur menjadi pupuk organik kaya nitrogen untuk kebun hortikultura tanaman hijau di sekitar farm.',
  },
  {
    icon: Fish,
    kicker: 'Kualitas Konsumsi',
    title: 'Daging Tebal & Bebas Bau Tanah',
    desc: 'Kualitas air yang selalu terkontrol menghasilkan ikan nila berotot padat kenyal, berserat rapat, tidak mudah hancur saat digoreng, dan beraroma gurih manis alami.',
  },
]

// Satu kartu putih. Warna kicker bisa diganti lewat props (default teal).
function Kartu({ icon: Icon, kicker, kickerClass = 'text-pelorous', title, desc, besar }) {
  return (
    <div className={`rounded-2xl bg-white shadow-sm ${besar ? 'p-7' : 'p-5'}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-pelorous text-white">
        <Icon size={20} />
      </span>
      <p className={`mt-5 font-jakarta text-[10px] font-bold uppercase tracking-wide ${kickerClass}`}>
        {kicker}
      </p>
      <h3 className="mt-1 font-jakarta text-lg font-extrabold text-zodiac">{title}</h3>
      <p className="mt-2 font-inter text-xs leading-relaxed text-mako">{desc}</p>
    </div>
  )
}

export default function LimaKeunggulan() {
  return (
    <section className="bg-zumthor pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="font-jakarta text-[11px] font-bold uppercase tracking-wide text-pelorous">
          Keunggulan Sistemik
        </p>
        <h2 className="mt-1 max-w-xl font-jakarta text-2xl font-extrabold text-zodiac md:text-4xl">
          5 Keunggulan Inti Teknologi Bioflok Ratna Farm
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {atas.map((k) => (
            <Kartu key={k.title} {...k} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
          {bawah.map((k) => (
            <Kartu key={k.title} {...k} besar />
          ))}
        </div>
      </div>
    </section>
  )
}