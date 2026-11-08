import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, User, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

// anchor: true = menu yang halamannya belum dibuat, sementara meluncur
// ke bagian di Beranda. Nanti diganti jadi halaman sendiri.
const menus = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Bioflok', to: '/tentang-bioflok' },
  { label: 'Produk', to: '/#produk', anchor: true },
  { label: 'Kemitraan', to: '/#kemitraan', anchor: true },
]

function linkClass(isActive, mobile) {
  const size = mobile ? 'block rounded-lg px-3 py-2' : 'rounded-full px-3 py-1'
  const color = isActive ? 'bg-zodiac text-white' : 'text-zodiac hover:bg-zumthor'
  return `${size} font-jakarta text-sm font-medium transition-colors ${color}`
}

function MenuLink({ menu, mobile, onClick }) {
  if (menu.anchor) {
    return (
      <a href={menu.to} onClick={onClick} className={linkClass(false, mobile)}>
        {menu.label}
      </a>
    )
  }
  // NavLink otomatis tahu apakah halamannya sedang dibuka (isActive).
  // "end" pada Beranda supaya "/" tidak ikut aktif di halaman lain.
  return (
    <NavLink
      to={menu.to}
      end={menu.to === '/'}
      onClick={onClick}
      className={({ isActive }) => linkClass(isActive, mobile)}
    >
      {menu.label}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Ratna Farm" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="font-jakarta text-base font-bold text-zodiac">Ratna Farm</p>
            <p className="font-jakarta text-[9px] font-bold uppercase tracking-wide text-pelorous">
              Budidaya Nila Bioflok Modern
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {menus.map((menu) => (
            <li key={menu.label}>
              <MenuLink menu={menu} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg bg-zodiac px-3 py-2 font-jakarta text-sm font-semibold text-white">
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Keranjang Ikan</span>
          </button>
          <button
            aria-label="Akun"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zodiac text-white"
          >
            <User size={16} />
          </button>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center text-zodiac md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-zumthor px-4 py-3 md:hidden">
          {menus.map((menu) => (
            <li key={menu.label}>
              <MenuLink menu={menu} mobile onClick={() => setOpen(false)} />
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}