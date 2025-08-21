import { useQueryClient } from "@tanstack/react-query"
import type { UserData } from "../../types"

type AppHeaderProps = {
    data : UserData
}

export default function AppHeader({data} : AppHeaderProps) {

    const queryClient = useQueryClient()
    const logout = () => {
        localStorage.removeItem('JWT_TOKEN')
        queryClient.invalidateQueries({queryKey : ['user']})
    } 

  return (
    <>
        <header className="bg-white shadow-2xl w-full">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-32 py-4 h-auto md:h-32 gap-4">
        
                <div className="w-28 md:w-32 flex justify-center md:justify-start">
                    <img src="/auth.png" alt="logotipo" className="w-full h-auto" />
                </div>

                <nav className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto">
                    <button className="bg-red-400 hover:bg-red-500 px-6 md:px-10 py-2 font-black text-white flex items-center gap-2 rounded-lg cursor-pointer"
                        onClick={(logout}
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
                        className="lucide lucide-user-x"
                        >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="17" x2="22" y1="8" y2="13" />
                        <line x1="22" x2="17" y1="8" y2="13" />
                        </svg>
                        Cerrar Sesión
                    </button>

                    <button className="bg-indigo-400 hover:bg-indigo-500 px-6 md:px-10 py-2 font-black text-white flex items-center gap-2 rounded-lg cursor-pointer">
                        Hola : {data.name}
                    </button>
                </nav>
            </div>
        </header>

    </>
  )
}
