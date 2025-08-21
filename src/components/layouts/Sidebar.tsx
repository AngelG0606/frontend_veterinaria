import { useState } from "react"
import { Link } from "react-router-dom"

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botón para abrir/cerrar menú */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 bg-indigo-500 text-white p-2 rounded-md md:hidden"
      >
        {/* Icono hamburguesa */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </button>

      {/* Aside */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg space-y-5 transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-bold text-lg">Menú</h2>

          {/* Botón cerrar en móvil */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <Link
          className="hover:bg-indigo-300 flex gap-3 items-center pl-5 py-2 font-bold text-lg rounded-r-full hover:text-white"
          to="/dashboard"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          Inicio
        </Link>

        <Link
          className="hover:bg-indigo-300 flex gap-3 items-center pl-5 py-2 font-bold text-lg rounded-r-full hover:text-white"
          to="/dashboard"
          onClick={() => setOpen(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          Citas
        </Link>

        <Link
          className="hover:bg-indigo-300 flex gap-3 items-center pl-5 py-2 font-bold text-lg rounded-r-full hover:text-white"
          to="/dashboard"
          onClick={() => setOpen(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cat-icon lucide-cat"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>
          Mis Mascotas
        </Link>

        <Link
          className="hover:bg-indigo-300 flex gap-3 items-center pl-5 py-2 font-bold text-lg rounded-r-full hover:text-white"
          to="/dashboard"
          onClick={() => setOpen(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-medical-icon lucide-briefcase-medical"><path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
          Medicinas
        </Link>

        <Link
          className="hover:bg-indigo-300 flex gap-3 items-center pl-5 py-2 font-bold text-lg rounded-r-full hover:text-white"
          to="/dashboard"
          onClick={() => setOpen(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-paw-print-icon lucide-paw-print"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>
          Veterinarios
        </Link>


      </aside>
    </>
  )
}
