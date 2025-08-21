import { Navigate, Outlet } from "react-router-dom";
import AppHeader from "../components/layouts/AppHeader";
import Sidebar from "../components/layouts/Sidebar";
import { useAuth } from "../hooks/useAuth";


export default function AppLayout() {

  const { data, isLoading, isError } = useAuth()

  if(isLoading) return <p className='text-5xl text-center mt-10'>Cargando...</p>

  if(isError) {
    return <Navigate to={'/auth/login'} />
  }

  console.log(data)
  if(data) return (
    <>
      <AppHeader data={data} />

      <main className="flex">

          <Sidebar />

          <div className="px-10 w-full">
            <Outlet />
          </div>
      </main>
    </>
  )
}
