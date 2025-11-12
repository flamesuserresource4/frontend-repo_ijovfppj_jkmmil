import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Vanguard — Brand Kit',
    tags: ['Identity', 'Typography', 'Color'],
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Waveform — Album Art',
    tags: ['Art Direction', '3D', 'Motion'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Orbital — Poster Series',
    tags: ['Experimental', 'Grids', 'Print'],
    image: 'https://images.unsplash.com/photo-1647708096863-57bbc21b53a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmJpdGFsJTIwJUUyJTgwJTk0JTIwUG9zdGVyJTIwU2VyaWVzfGVufDB8MHx8fDE3NjI5MjE3NTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Request full portfolio →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{p.tags.join(' • ')}</p>
                </div>
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
