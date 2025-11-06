import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function MapSection() {
  // Static map centered on Bengaluru for now.
  const position = [12.9716, 77.5946]

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-soft p-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold">Live Map</h2>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100">Drone: Not Connected</span>
        </div>
        <div style={{ height: 420 }} className="overflow-hidden rounded-xl">
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>PSCS_33 — Bengaluru HQ</Popup>
            </Marker>
          </MapContainer>
        </div>
        <p className="text-xs text-gray-500 mt-2">Future-ready: Plug in WebSocket telemetry to track the drone in real time.</p>
      </div>
    </section>
  )
}
