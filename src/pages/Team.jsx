import React from 'react'

export default function Team() {
  const team = [
    { name: 'Koushik Y J', role: 'Operations Lead' },
    { name: 'Somesh M', role: 'Full‑Stack Developer' },
    { name: 'Om Prakash M M', role: 'Systems Engineer' },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Team</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {team.map(m => (
          <div key={m.name} className="bg-white rounded-2xl shadow-soft p-4">
            <div className="h-24 rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 mb-3" />
            <div className="font-medium">{m.name}</div>
            <div className="text-xs text-gray-500">{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
