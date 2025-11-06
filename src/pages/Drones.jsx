import React from 'react'

export default function Drones() {
  const types = [
    { name: 'Quadcopter', desc: 'Stable and versatile for search & rescue with moderate payloads.' , img: '🛸'},
    { name: 'Hexacopter', desc: 'Higher redundancy and lift capacity, suitable for adverse conditions.' , img: '🛸'},
    { name: 'Fixed-Wing', desc: 'Long endurance and range; best for wide-area assessment.' , img: '✈️'},
    { name: 'VTOL Hybrid', desc: 'Combines fixed-wing range with vertical takeoff/landing.' , img: '🛩️'},
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Types of Rescue Drones</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {types.map(t => (
          <div key={t.name} className="bg-white rounded-2xl shadow-soft p-4">
            <div className="text-3xl">{t.img}</div>
            <div className="font-medium mt-2">{t.name}</div>
            <div className="text-sm text-gray-600">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
