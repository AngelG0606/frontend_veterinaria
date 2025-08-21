import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="bg-indigo-400 w-full h-20 flex justify-between items-center px-20">
        <div>
            Logo
        </div>

        <nav className="flex justify-center items-center gap-5">
            <Link 
                to={'/'}
                className="text-lg text-white font-bold flex items-center gap-3 hover:bg-indigo-500 px-3 py-2 rounded-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Iniciar Sesion
            </Link>

            <Link 
                to={'/auth/register'}
                className="text-lg text-white font-bold flex items-center gap-3 hover:bg-indigo-500 px-3 py-2 rounded-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus-icon lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                Crear Cuenta
            </Link>

        </nav>

    </header>
  )
}
