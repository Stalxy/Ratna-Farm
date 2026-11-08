import bioflokHero from '../../assets/tentangbioflok/bioflok-hero.jpg'

const stats = [
  { value: '7', label: 'Kolam Terintegrasi' },
  { value: '0%', label: 'Endapan Lumpur' },
  { value: '100%', label: 'Organik & Alami' },
  { value: 'Tiap Minggu', label: 'Panen Bergilir' },
]

export default function BioflokHero() {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${bioflokHero})` }}>
      <div className="absolute inset-0 bg-zumthor/50" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-between px-4 py-12 md:px-8 md:py-16">
        <div className="max-w-3xl">
          <h1 className="font-jakarta text-4xl font-extrabold leading-tight text-zodiac drop-shadow-md md:text-6xl">
            <span className="font-medium text-pelorous">Rahasia Ikan Nila </span>
            Segar, Daging Tebal, &amp; Bebas Bau Tanah
          </h1>
          <p className="mt-6 max-w-xl font-inter text-base leading-relaxed text-white drop-shadow-md">
            Mengenal ekosistem modern 7 kolam bioflok Ratna Farm. Melalui sinergi konsorsium
            mikroorganisme aerobik dan aerasi mikro presisi, kami menghadirkan standar baru ikan
            nila higienis tanpa sentuhan endapan lumpur tanah.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-zodiac px-4 py-4 text-center shadow-lg">
              <p className="font-jakarta text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-0.5 font-jakarta text-[9px] font-semibold uppercase tracking-wide text-white">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}