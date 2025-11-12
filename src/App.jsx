import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Contact />
      <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Graphic Design Portfolio — All rights reserved.</footer>
    </div>
  )
}

export default App
