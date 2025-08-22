import { Navigate, Outlet } from "react-router-dom";
import AppHeader from "../components/layouts/AppHeader";
import Sidebar from "../components/layouts/Sidebar";
import { useAuth } from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";


export default function AppLayout() {

  const { data, isLoading, isError } = useAuth()

  if(isLoading) return <p className='text-5xl text-center mt-10'>Cargando...</p>

  if(isError) {
    return <Navigate to={'/auth/login'} />
  }
  if(data) return (
    <>
      <AppHeader data={data} />

      <main className="flex">

          <Sidebar />

          <div className="px-10 w-full">
            <Outlet />
          </div>
      </main>

      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
