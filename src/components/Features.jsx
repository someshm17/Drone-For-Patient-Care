import React from 'react'

export default function Features() {
  const items = [
    { title: 'Real-Time Map', desc: 'Leaflet-based map ready for live drone tracking (when connected).' },
    { title: 'Mission Dashboard', desc: 'Overview of missions with status filters.' },
    { title: 'Team & Contact', desc: 'Quick access to operators and emergency contacts.' },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-4">
      {items.map(i => (
        <div key={i.title} className="bg-white rounded-2xl shadow-soft p-4">
          <div className="font-medium">{i.title}</div>
          <div className="text-sm text-gray-600">{i.desc}</div>
        </div>
      ))}
    </section>
  )
}
