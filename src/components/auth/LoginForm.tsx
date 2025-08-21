import { useForm } from "react-hook-form"
import type { UserLoginForm } from "../../types"
import ErrroMessage from "../utils/ErrroMessage"
import { useMutation } from "@tanstack/react-query"
import { login } from "../../services/authApi"
import { toast } from "react-toastify"

export default function LoginForm() {

    const initialValues : UserLoginForm = {
        email : '',
        password : ''
    }
    const {register, handleSubmit, formState : {errors} } = useForm<UserLoginForm>({defaultValues : initialValues})

    const { mutate } = useMutation({
        mutationFn : login,
        onError : (error) => {
            toast.error(error.message)
        },
        onSuccess : () => {
            toast.success('Inicio de sesión correcto')
        } 
    })

    const handleLoginForm = (formData : UserLoginForm) => {
        mutate(formData)
    }

  return (
    <>
        <form className="max-w-xl bg-white shadow-lg rounded space-y-6 py-5 mt-5 px-5" 
                onSubmit={handleSubmit(handleLoginForm)}
              >
                <div className="flex flex-col px-3">
                  <label htmlFor="" className="text-lg font-bold">Email:</label>
                  <input 
                    type="email"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Tu Email"
                    {...register("email", {
                      required: "El Email es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de email inválido"
                      }
                    })}  
                  />
        
                  {errors.email && (
                    <ErrroMessage>{errors.email.message}</ErrroMessage>
                  )}
                </div>
        
                <div className="flex flex-col px-3">
                  <label htmlFor="" className="text-lg font-bold">Password:</label>
                  <input 
                    type="password"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Tu Password"
                    {...register("password", {
                      required : "EL password es obligatorio",
                      minLength : {
                        value : 8,
                        message : "El password debe tener minimo 8 caracteres"
                      }
                    })} 
                  />
        
                  {errors.password && (
                    <ErrroMessage>{errors.password.message}</ErrroMessage>
                  )}
        
                </div>
        
                <input 
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white w-full px-3 py-2 rounded cursor-pointer" 
                />
        
              </form>
    
    </>
  )
}
