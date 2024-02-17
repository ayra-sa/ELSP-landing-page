import Artikel from "./components/sections/Artikel"
import Ekosistem from "./components/sections/Ekosistem"
import Footer from "./components/sections/Footer"
import Header from "./components/sections/Header"
import Hero from "./components/sections/Hero"
import Kategori from "./components/sections/Kategori"
import Mitra from "./components/sections/Mitra"
import Sertifikasi from "./components/sections/Sertifikasi"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Mitra />
      <Sertifikasi />
      <Ekosistem />
      <Kategori />
      <Artikel />
      <Footer />
    </>
  )
}

export default App
