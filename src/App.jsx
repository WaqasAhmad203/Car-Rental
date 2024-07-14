import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Carlist from './components/Carlist'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Carlist/> 
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
