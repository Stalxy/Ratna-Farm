import logo from '../../assets/logo.png'
import video from '../../assets/beranda/cuplikan-produk.mp4'

export default function CuplikanProduk() {
  return (
    <section className="overflow-hidden bg-zumthor/50 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <h2 className="font-jakarta text-2xl font-extrabold text-zodiac md:text-3xl">
          Cuplikan Produk
        </h2>
        <p className="mt-2 font-inter text-sm text-mako">
          Nila Marinasi Bumbu Alami, Siap Masak Tanpa Repot!
        </p>

        <div className="relative mx-auto mt-8 flex max-w-md justify-center">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 w-[760px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-25 mix-blend-multiply"
            />
          <video
            src={video}
            controls
            playsInline
            className="relative z-10 w-full max-w-[240px] rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}