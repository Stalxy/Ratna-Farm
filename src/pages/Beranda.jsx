import Hero from '../components/Beranda/Hero'
import StatsBar from '../components/Beranda/StatsBar'
import Keunggulan from '../components/Beranda/Keunggulan'
import CuplikanProduk from '../components/Beranda/CuplikanProduk'
import ProdukPilihan from '../components/Beranda/ProdukPilihan'
import Kemitraan from '../components/Beranda/Kemitraan'
import LacakPesanan from '../components/Beranda/LacakPesanan'

export default function Beranda() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Keunggulan />
      <CuplikanProduk />
      <ProdukPilihan />
      <Kemitraan />
      <LacakPesanan />
    </>
  )
}