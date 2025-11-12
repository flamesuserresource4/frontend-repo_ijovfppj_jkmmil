import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-[#0a0a0b] to-[#0a0a0b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m a graphic designer focused on vibrant, modern aesthetics. My work explores the intersection of play and precision—balancing expressive color with clean typographic systems. I collaborate with music artists, startups and cultural projects.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur">Brand Identity</div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur">Editorial Design</div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur">3D & Motion</div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur">Web Design</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW98ZW58MHwwfHx8MTc2MjkyMTc1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Studio" className="w-full h-full object-cover opacity-90" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
