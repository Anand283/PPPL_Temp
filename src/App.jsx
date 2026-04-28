import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarketWall from './components/MarketWall'
import FacilitiesMatrix from './components/FacilitiesMatrix'
import LogisticsTrust from './components/LogisticsTrust'
import ContactGateway from './components/ContactGateway'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <MarketWall />
      <FacilitiesMatrix />
      <LogisticsTrust />
      <ContactGateway />
      <Footer />
    </div>
  )
}
