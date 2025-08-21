import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-7xl mx-auto mt-20">

        <div className="w-full md:w-1/2">
          <img src="/auth.png" alt="imagen auth" className="w-full" />
        </div>

        <div className="w-full md:w-1/2">
          <Outlet />
        </div>

      </div>


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
