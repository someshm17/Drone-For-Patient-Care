import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const base = 'px-3 py-2 rounded-2xl hover:bg-gray-100'
  const active = ({ isActive }) => isActive ? `${base} bg-gray-200` : base

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold">NDRF Drone Rescue</Link>
        <nav className="hidden md:flex gap-1 text-sm">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/drones" className={active}>Types of Drones</NavLink>
          <NavLink to="/dashboard" className={active}>Dashboard</NavLink>
          <NavLink to="/team" className={active}>Team</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden border px-3 py-2 rounded-2xl">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1 text-sm">
            <NavLink to="/" className={active} onClick={()=>setOpen(false)}>Home</NavLink>
            <NavLink to="/drones" className={active} onClick={()=>setOpen(false)}>Types of Drones</NavLink>
            <NavLink to="/dashboard" className={active} onClick={()=>setOpen(false)}>Dashboard</NavLink>
            <NavLink to="/team" className={active} onClick={()=>setOpen(false)}>Team</NavLink>
            <NavLink to="/contact" className={active} onClick={()=>setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
