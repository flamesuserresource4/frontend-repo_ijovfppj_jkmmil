import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for contrast - pointer-events-none to allow Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-black text-white/90 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Graphic Designer crafting bold, playful identities
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-xl">
            I blend color, motion and typography to build memorable brands, album covers and digital experiences.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
