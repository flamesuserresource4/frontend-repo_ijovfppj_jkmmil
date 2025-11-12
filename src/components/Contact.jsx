import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="py-28 bg-[#0a0a0b]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let’s collaborate</h2>
        <p className="mt-3 text-white/80">Tell me about your project—branding, album art, posters, or web.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Name" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea required name="message" placeholder="Project details" rows={5} className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button className="justify-self-start bg-white text-black px-6 py-3 rounded-md hover:bg-white/90 font-semibold">Send</button>
          {status && <p className="text-sm text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}
