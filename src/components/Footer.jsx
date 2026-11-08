import { Globe, Mail, MapPin, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.png'

// Ikon merek (Instagram, TikTok) tidak ada di lucide-react versi terbaru,
// jadi dibuat sebagai SVG sederhana. currentColor = ikut warna teks induknya.
function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const sosmed = [
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'TikTok', icon: TikTokIcon, href: '#' },
  { label: 'Website', icon: Globe, href: '#' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/6282129818323' },
]

const quickLinks = [
  'Tentang Kami',
  '7 Kolam Bioflok',
  'Nila Segar',
  'Nila Marinasi',
  'Peluang Kemitraan',
  'Kebijakan Kualitas',
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Kolom 1: brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo Ratna Farm" className="h-9 w-9 object-contain" />
              <div className="leading-tight">
                <p className="font-jakarta text-base font-bold text-zodiac">Ratna Farm</p>
                <p className="font-jakarta text-[9px] font-bold uppercase tracking-wide text-pelorous">
                  Budidaya Nila Bioflok Modern
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-xs font-inter text-[11px] leading-relaxed text-mako">
              Ratna Farm - Pelopor budidaya perikanan modern dengan sistem 7 kolam bioflok ramah
              lingkungan, menghasilkan ikan nila merah berkualitas premium tanpa bau lumpur.
            </p>
            <div className="mt-4 flex gap-2">
              {sosmed.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zumthor text-zodiac hover:bg-pelorous hover:text-white"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: quick links */}
          <div>
            <h3 className="font-jakarta text-xs font-bold uppercase tracking-wide text-zodiac">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-inter text-[11px] text-mako hover:text-zodiac">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: kontak */}
          <div>
            <h3 className="font-jakarta text-xs font-bold uppercase tracking-wide text-zodiac">
              Kontak &amp; Lokasi
            </h3>
            <ul className="mt-4 space-y-4 font-inter text-[11px] text-mako">
              <li className="flex gap-2.5">
                <MessageCircle size={14} className="mt-0.5 shrink-0 text-pelorous" />
                <div>
                  <p className="font-semibold text-zodiac">WhatsApp / Telepon</p>
                  <p>082129818323</p>
                </div>
              </li>
              <li className="flex gap-2.5">
                <Mail size={14} className="mt-0.5 shrink-0 text-pelorous" />
                <div>
                  <p className="font-semibold text-zodiac">Email Resmi</p>
                  <p>info@ratnafarm.id</p>
                </div>
              </li>
              <li className="flex gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-pelorous" />
                <div>
                  <p className="font-semibold text-zodiac">Lokasi Budidaya</p>
                  <p>
                    Jalan Trawu Buntu, RT.02/RW.08, Kel. Jatikramat, Kec. Jatiasih, Jawa Barat,
                    Bekasi 17421
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zumthor pt-5">
          <p className="font-inter text-[10px] text-mako">
            © 2026 Ratna Farm. Seluruh Hak Cipta Dilindungi. Sistem Bioflok Berkelanjutan
          </p>
        </div>
      </div>
    </footer>
  )
}