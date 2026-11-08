import { ScanSearch } from 'lucide-react'

export default function LacakPesanan() {
  return (
    <section className="bg-zumthor px-4 pb-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zumthor text-pelorous">
            <ScanSearch size={20} />
          </span>
          <div>
            <p className="font-jakarta text-sm font-bold text-zodiac">Sudah Punya Kode Pesanan?</p>
            <p className="font-inter text-[11px] text-mako">
              Masukkan Nomor Pesanan <span className="font-semibold text-pelorous">#RF-XXXX</span>{' '}
              untuk melacak status persiapan panen, penimbangan, dan kurir berpendingin.
            </p>
          </div>
        </div>

        <button className="shrink-0 rounded-lg bg-zodiac px-5 py-2.5 font-jakarta text-xs font-bold text-white hover:brightness-125">
          Lacak Sekarang
        </button>
      </div>
    </section>
  )
}