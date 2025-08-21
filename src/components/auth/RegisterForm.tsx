import { useForm } from "react-hook-form"
import type { UserRegisterForm } from "../../types"
import ErrroMessage from "../utils/ErrroMessage"
import { useMutation } from "@tanstack/react-query"
import { createAccount } from "../../services/authApi"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function RegisterForm() {

  const initialValues : UserRegisterForm = {
    name : '',
    lastname : '',
    email : '',
    password: '',
    password_confirmation : '',
    telefono : ''
  }

  const {register, handleSubmit, watch, formState: {errors }} = useForm<UserRegisterForm>({defaultValues : initialValues})

  const navigate = useNavigate()
  const password = watch('password')

  const { mutate } = useMutation({
    mutationFn : createAccount,
    onError : (error) => {
      toast.error(error.message)
    },
    onSuccess : (data) => {
      toast.success(data)
      navigate('/auth/login')
    }
  })

  const handleRegisterForm = (formData : UserRegisterForm) => {
    mutate(formData)
  }

  return (
    <>
      <form className="max-w-xl bg-white shadow-lg rounded space-y-6 py-5 mt-5 px-5" 
        onSubmit={handleSubmit(handleRegisterForm)}
      >

        <div className="flex flex-col px-3">
          <label htmlFor="" className="text-lg font-bold">Nombre(s):</label>
          <input 
            type="text"
            className="w-full py-2 bg-gray-100"
            placeholder="Tu Nombre"
            {...register("name", {
              required : "EL nombre es obligatorio"
            })} 
          />
          {errors.name && (
            <ErrroMessage>{errors.name.message}</ErrroMessage>
          )}
        </div>

        <div className="flex flex-col px-3">
          <label htmlFor="" className="text-lg font-bold">Apellido(s):</label>
          <input 
            type="text"
            className="w-full py-2 bg-gray-100"
            placeholder="Tu Apellido"
            {...register("lastname", {
              required : "EL Apellido es obligatorio"
            })} 
          />
          {errors.lastname && (
            <ErrroMessage>{errors.lastname.message}</ErrroMessage>
          )}
        </div>

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

        <div className="flex flex-col px-3">
          <label htmlFor="" className="text-lg font-bold">Repetir Password:</label>
          <input 
            type="password"
            className="w-full py-2 bg-gray-100"
            placeholder="Repetir Password"
            {...register('password_confirmation', {
              required: "Repetir password es obligatorio",
              validate: (value) => value === password || 'Los Passwords no son iguales'
            })}
          />

          {errors.password_confirmation && <ErrroMessage>{errors.password_confirmation.message}</ErrroMessage> }
        </div>

        <div className="flex flex-col px-3">
          <label htmlFor="" className="text-lg font-bold">Telefono:</label>
          <input 
            type="number"
            className="w-full py-2 bg-gray-100"
            placeholder="Tu Telefono"
            {...register("telefono", {
              required: "El teléfono es obligatorio",
              pattern: {
                value: /^\d{10}$/,
                message: "El teléfono debe tener 10 dígitos"
              }
            })}
            
          />

          {errors.telefono && (
            <ErrroMessage>{errors.telefono.message}</ErrroMessage>
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
