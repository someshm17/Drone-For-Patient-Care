import React from 'react'

export default function Contact() {
  const contacts = [
    { name: 'Koushik Y J', phone: '7204668124' },
    { name: 'Somesh M', phone: '8867074560' },
    { name: 'Om Prakash M M', phone: '7483610858' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-soft p-4">
          <h3 className="font-medium mb-3">Emergency Contacts</h3>
          <ul className="space-y-2 text-sm">
            {contacts.map(c => (
              <li key={c.name} className="p-3 border rounded-2xl flex items-center justify-between">
                <span>{c.name}</span>
                <a className="text-blue-600 underline" href={`tel:${c.phone}`}>{c.phone}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-soft p-4">
          <h3 className="font-medium mb-3">Message Us</h3>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Demo only — wire to backend later.')}} className="space-y-3">
            <input className="w-full border rounded-2xl px-3 py-2" placeholder="Your name" required/>
            <input className="w-full border rounded-2xl px-3 py-2" type="email" placeholder="Email" required/>
            <textarea className="w-full border rounded-2xl px-3 py-2 min-h-[120px]" placeholder="Message" required></textarea>
            <button className="px-4 py-2 rounded-2xl bg-blue-600 text-white">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
