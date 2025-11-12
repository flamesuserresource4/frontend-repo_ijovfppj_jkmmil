import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-cyan-400/30 selection:text-white">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(60%_40%_at_50%_0%,rgba(0,255,255,0.12),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(40%_30%_at_80%_20%,rgba(255,0,153,0.08),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Contact />

      <footer className="py-12 text-center text-sm text-white/60 border-t border-white/10 bg-white/5 backdrop-blur">
        © {new Date().getFullYear()} Graphic Design · Bold Neon Edition
      </footer>
    </div>
  )
}

export default App
