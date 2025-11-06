import React from 'react'
import hero from '../assets/hero-drone.svg'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 mb-3 shadow-soft">
            <span>PSCS_33</span> <span>Disaster Response</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Real‑Time Drone Coordination Platform</h1>
          <p className="text-gray-600 mt-3">Map, monitor, and coordinate rescue drones. Connect when ready—map loads now, live tracking later.</p>
          <div className="mt-5 flex gap-3">
            <a href="/dashboard" className="px-4 py-2 rounded-2xl bg-blue-600 text-white">Open Dashboard</a>
            <a href="/drones" className="px-4 py-2 rounded-2xl border">Types of Drones</a>
          </div>
        </div>
        <div>
          <img src={hero} alt="Drone" className="w-full h-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  )
}
