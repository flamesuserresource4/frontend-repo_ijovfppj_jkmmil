import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,0,153,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/40 via-[#0a0a0b]/30 to-[#0a0a0b]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28 grid md:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 lg:col-span-5"
        >
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Designing brave brands with motion, color and type
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
            I craft playful, high-impact identities and visuals for music, culture and tech. Let’s make something unforgettable.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="px-5 py-3 rounded-md bg-cyan-500 text-black hover:bg-cyan-400 transition-colors font-semibold shadow-[0_0_0_0_rgba(0,255,255,0.5)] hover:shadow-[0_0_48px_8px_rgba(0,255,255,0.25)]">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Contact</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="md:col-span-6 lg:col-span-7"
        >
          {/* empty column to give the Spline space */}
          <div className="h-[40vh] md:h-[60vh]" />
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0b]" />
    </section>
  )
}
