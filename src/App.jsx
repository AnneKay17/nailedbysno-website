import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Policy from './components/Policy/Policy'
import Services from './components/Services/Services'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Featured/>
      <Gallery/>
      <About/>
      <Contact/>
      <Policy/>
      <Footer/>
    </>
  )
}

export default App
