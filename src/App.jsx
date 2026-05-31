import './App.css'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Marquee    from './components/Marquee'
import Services   from './components/Services'
import About      from './components/About'
import Statement  from './components/Statement'
import Booking    from './components/Booking'
import MapSection from './components/MapSection'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Statement />
      <Booking />
      <MapSection />
      <Contact />
      <Footer />
    </>
  )
}
