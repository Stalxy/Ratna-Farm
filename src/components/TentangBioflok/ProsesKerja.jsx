const langkah = [
  {
    title: 'Aerasi Air Presisi',
    desc: 'Mesin blower menyuplai gelembung oksigen mikro 24/7 menjaga flok bakteri tetap melayang dan air beroksigen kaya agar ikan selalu bugar aktif.',
  },
  {
    title: 'Pembentukan Flok Organik',
    desc: 'Kultur probiotik mengikat senyawa amonia terlarut bersama karbon organik, membentuk butiran agregat mikroba bernutrisi tinggi (bio-floc).',
  },
  {
    title: 'Ikan Memakan Flok',
    desc: 'Ikan nila merah secara aktif memfilter gumpalan flok yang melayang sebagai pakan alami pendamping bernutrisi tinggi (30-35% crude protein).',
  },
  {
    title: 'Panen Nila Premium',
    desc: 'Ikan nila dipanen dalam bobot seragam (3-5 ekor/kg), bebas dari patogen, bersih, padat berisi, dan garansi mutlak 100% bebas bau lumpur.',
  },
]

export default function ProsesKerja() {
  return (
    <section className="bg-zumthor pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="font-jakarta text-[11px] font-bold uppercase tracking-wide text-pelorous">
            Proses Biologis Presisi
          </p>
          <h2 className="mt-1 font-jakarta text-2xl font-extrabold text-zodiac md:text-4xl">
            Bagaimana Sistem Bioflok Bekerja?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {langkah.map((item, index) => (
            <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
              {/* index dimulai dari 0, jadi ditambah 1 untuk nomor langkah */}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pelorous font-jakarta text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 font-jakarta text-sm font-bold text-zodiac">{item.title}</h3>
              <p className="mt-2 font-inter text-[11px] leading-relaxed text-mako">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}