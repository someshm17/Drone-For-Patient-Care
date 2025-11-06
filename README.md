
# PSCS_33 — Home-First Landing (React + Vite + Tailwind + Leaflet)

Submission-ready, attractive homepage with:
- Big drone hero section (SVG image included)
- Static Leaflet map (Bengaluru) labeled "Drone: Not Connected"
- Multi-option navbar: Home, Types of Drones, Dashboard (stub), Team, Contact
- Contact page with phone numbers (tel: links)
- Future-ready notes to plug WebSocket telemetry

## Run
```bash
npm install
npm run dev
```

## Future: connect telemetry
Replace `MapSection` with a WebSocket-fed component to update the marker based on incoming lat/lng.
