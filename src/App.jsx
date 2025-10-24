import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Events from './components/Events'
import Donate from './components/Donate'
import Volunteer from './components/Volunteer'
import Sponsors from './components/Sponsors'
import Gallery from './components/Gallery'
import Board from './components/Board'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-dvh">
      <Navbar />
      <Hero />
      <main>
        <Mission />
        <Events />
        <Donate />
        <Volunteer />
        <Sponsors />
        <Gallery />
        <Board />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
