import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Demo submit
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s collaborate</h2>
        <p className="mt-3 text-gray-700">Tell me about your project—branding, album art, posters, or web.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Name" className="w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea required name="message" placeholder="Project details" rows={5} className="w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <button className="justify-self-start bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800">Send</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
