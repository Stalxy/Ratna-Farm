import { CircleCheck, X } from 'lucide-react'

const tradisional = [
  {
    title: 'Bau Tanah Pekat',
    desc: 'Ikan menelan lumpur dan alga biru-hijau di dasar empang sehingga aroma tanah meresap ke serat daging.',
  },
  {
    title: 'Fluktuasi Amonia Tinggi',
    desc: 'Kotoran mengendap membusuk di dasar kolam menjadi gas beracun yang membuat ikan mudah stres & sakit.',
  },
  {
    title: 'Boros Air & Mencemari Lingkungan',
    desc: 'Memerlukan sirkulasi debit air besar terus menerus yang sering dibuang tanpa filtrasi ke saluran umum.',
  },
  {
    title: 'Tekstur Daging Lembek & Berlemak',
    desc: 'Kurangnya ruang gerak aerobik dan kualitas pakan menghasilkan kadar air berlebih pada otot ikan.',
  },
]

const bioflok = [
  {
    title: '100% Bebas Bau Lumpur',
    desc: 'Tanpa substrat tanah sama sekali, daging ikan nila memiliki rasa manis alami dan bersih saat diolah apa pun.',
  },
  {
    title: 'Mikroba Pengubah Limbah Jadi Nutrisi',
    desc: 'Bakteri probiotik aerobik mengubah amonia dan sisa pakan menjadi gumpalan protein hewani mikro (flok).',
  },
  {
    title: 'Efisiensi Air Hingga 80%',
    desc: 'Air tidak pernah dikuras hingga masa panen selesai berkat ekosistem daur ulang mikroba yang matang dan stabil.',
  },
  {
    title: 'Daging Padat, Tebal & Rendah Lemak',
    desc: 'Sirkulasi oksigen tinggi merangsang metabolisme aktif menghasilkan serat otot kenyal gurih kelas premium resto.',
  },
]

export default function Perbandingan() {
  return (
    <section className="bg-zumthor py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-jakarta text-[11px] font-bold uppercase tracking-wide text-pelorous">
            Analisis Komparatif Ilmiah
          </p>
          <h2 className="mt-1 font-jakarta text-2xl font-extrabold text-zodiac md:text-4xl">
            Mengapa Ikan Nila Bioflok Berbeda?
          </h2>
          <p className="mt-3 font-inter text-sm text-mako">
            Perbandingan nyata antara budidaya empang konvensional dengan sistem sirkulasi mikroba
            bioflok terkontrol Ratna Farm.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Kartu kiri: metode tradisional */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-jakarta text-[10px] font-bold uppercase tracking-wide text-mako">
              Metode Tradisional
            </p>
            <h3 className="mt-1 font-jakarta text-2xl font-extrabold text-zodiac">
              Kolam Tanah &amp; Empang
            </h3>
            <p className="mt-3 font-inter text-xs leading-relaxed text-mako">
              Sistem konvensional bersentuhan langsung dengan dasar tanah humus tebal, tanpa aerasi
              terukur, rentan terhadap akumulasi geosmin senyawa bau lumpur.
            </p>

            <ul className="mt-5 space-y-3">
              {tradisional.map((item) => (
                <li key={item.title} className="flex gap-3 rounded-xl bg-zumthor/60 p-3">
                  <X size={16} className="mt-0.5 shrink-0 text-thunderbird" />
                  <div>
                    <p className="font-jakarta text-sm font-bold text-zodiac">{item.title}</p>
                    <p className="mt-0.5 font-inter text-[11px] leading-relaxed text-mako">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Kartu kanan: bioflok */}
          <div className="rounded-2xl bg-zodiac p-6 shadow-xl">
            <p className="font-jakarta text-[10px] font-bold uppercase tracking-wide text-white">
              Teknologi Akuakultur Presisi
            </p>
            <h3 className="mt-1 font-jakarta text-2xl font-extrabold text-white">
              Bioflok Terpal Bundar Higienis
            </h3>
            <p className="mt-3 font-inter text-xs leading-relaxed text-white/80">
              Wadah kolam terpal bundar bervolume terukur tanpa dasar lumpur, dilengkapi suplai
              oksigen blower mikroba 24/7 dan konsorsium probiotik pengurai limbah alami.
            </p>

            <ul className="mt-5 space-y-3">
              {bioflok.map((item) => (
                <li key={item.title} className="flex gap-3 rounded-xl bg-white p-3">
                  <CircleCheck size={16} className="mt-0.5 shrink-0 text-pelorous" />
                  <div>
                    <p className="font-jakarta text-sm font-bold text-zodiac">{item.title}</p>
                    <p className="mt-0.5 font-inter text-[11px] leading-relaxed text-mako">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}