const stats = [
  { value: '7', title: 'Kolam Bioflok', desc: 'Aktif & Terintegrasi' },
  { value: 'TIAP MINGGU', title: 'Jadwal Panen', desc: 'Ikan Segar Rutin' },
  { value: '100%', title: 'Bebas Bau Tanah', desc: 'Alami & Daging Gurih' },
]

export default function StatsBar() {
  return (
    <section className="relative z-10 bg-zodiac shadow-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 text-center sm:grid-cols-3 md:px-8">
        {stats.map((item) => (
          <div key={item.title}>
            <p className="font-jakarta text-4xl font-extrabold text-pelorous md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 font-jakarta text-sm font-bold text-white">{item.title}</p>
            <p className="font-inter text-xs text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}