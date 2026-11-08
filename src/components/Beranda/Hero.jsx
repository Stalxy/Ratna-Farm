import { CircleCheck, Droplet } from 'lucide-react'
import heroKolam from '../../assets/beranda/hero-kolam.jpg'

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroKolam})` }}
    >
      <div className="absolute inset-0 bg-zumthor/60" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-between px-4 py-12 md:px-8 md:py-16 lg:min-h-[620px]">
        <div className="max-w-3xl">
          <h1 className="font-jakarta text-4xl font-extrabold leading-tight text-zodiac md:text-6xl">
            Nila Merah Bioflok Premium.
            <span className="block font-medium text-pelorous">Lebih Segar, Gurih</span>
            <span className="block">&amp; Tidak Berbau Tanah</span>
          </h1>

          <p className="mt-6 max-w-xl font-inter text-base leading-relaxed text-white">
            Diberdayakan oleh ekosistem 7 kolam bioflok terpadu dengan aerasi mikro dan probiotik
            alami. Kami menghadirkan ikan nila berprotein tinggi dengan mutu daging padat terbaik
            untuk keluarga dan mitra bisnis.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-inter text-xs font-medium text-black">
          <span className="flex items-center gap-1.5">
            <CircleCheck size={14} className="text-pelorous" />
            100% Pakan Nutrisi Terpantau
          </span>
          <span className="flex items-center gap-1.5">
            <Droplet size={14} className="text-pelorous" />
            Zero Lumpur Sedimen
          </span>
        </div>
      </div>
    </section>
  )
}