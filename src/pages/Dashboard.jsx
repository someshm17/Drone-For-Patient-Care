import React from 'react'

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-gray-600">Coming soon: mission list, status filters, and analytics.</p>
      <div className="mt-4 p-4 bg-white rounded-2xl shadow-soft">
        <p className="text-sm text-gray-500">We’ll connect WebSocket telemetry later to update this dashboard in real time.</p>
      </div>
    </div>
  )
}
