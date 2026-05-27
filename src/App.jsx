import About from './components/About'
import Combos from './components/Combos'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Menu from './components/Menu'
import MobileOrderBar from './components/MobileOrderBar'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Menu />
        <Combos />
        <About />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  )
}

export default App
