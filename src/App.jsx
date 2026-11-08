import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatCS from './components/ChatCS'
import Beranda from './pages/Beranda'
import TentangBioflok from './pages/TentangBioflok'

// Setiap pindah halaman, otomatis kembali ke paling atas.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        {/* Hanya bagian ini yang berganti sesuai alamat (URL) di browser */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang-bioflok" element={<TentangBioflok />} />
        </Routes>
      </main>
      <Footer />
      <ChatCS />
    </>
  )
}