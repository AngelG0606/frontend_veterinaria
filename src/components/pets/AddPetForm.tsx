import { useForm } from "react-hook-form";
import ErrroMessage from "../utils/ErrroMessage";
import type { PetForm } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { createPet } from "../../services/petApi";
import { toast } from "react-toastify";

type AddPetFormProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddPetForm({setIsOpen} : AddPetFormProps) {
 
    const initialValues : PetForm = {
        name : '',
        especie : '',
        raza : '',
        color : '',
        peso : '',
        edad : '',
    }

    const {register, handleSubmit, formState : {errors}} = useForm<PetForm>({defaultValues : initialValues})


    const { mutate } = useMutation({
        mutationFn : createPet,
        onError : (error) => {
            toast.error(error.message)
        },
        onSuccess : (data) => {
            toast.success(data)
            setIsOpen(false)
        }
    })

    const handlePetForm = (formData : PetForm) => {
        mutate(formData)
    }
  return (
    <>
        <form className="max-w-xl bg-white shadow-lg rounded space-y-6 py-5 mt-5 px-5 mx-auto" 
            onSubmit={handleSubmit(handlePetForm)}
            noValidate
        >
            <div className="flex flex-col px-3">
                <label htmlFor="" className="text-lg font-bold">Nombre Mascota:</label>
                <input 
                    type="text"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Nombre Mascota"
                    {...register("name", {
                    required: "El Nombre de la mascota es obligatorio",
                    })}  
                />
        
                {errors.name && (
                    <ErrroMessage>{errors.name.message}</ErrroMessage>
                )}
            </div>

            <div className="flex flex-col px-3">
                <label htmlFor="" className="text-lg font-bold">Especie Mascota:</label>
                <input 
                    type="text"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Especie Mascota"
                    {...register("especie", {
                    required: "La Especie de la mascota es obligatorio",
                    })}  
                />
        
                {errors.especie && (
                    <ErrroMessage>{errors.especie.message}</ErrroMessage>
                )}
            </div>

            <div className="flex flex-col px-3">
                <label htmlFor="" className="text-lg font-bold">Raza Mascota:</label>
                <input 
                    type="text"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Raza Mascota"
                    {...register("raza", {
                    required: "La raza de la mascota es obligatorio",
                    })}  
                />
        
                {errors.raza && (
                    <ErrroMessage>{errors.raza.message}</ErrroMessage>
                )}
            </div>

            <div className="flex flex-col px-3">
                <label htmlFor="" className="text-lg font-bold">Color Mascota:</label>
                <input 
                    type="text"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Color Mascota"
                    {...register("color", {
                    required: "El color de la mascota es obligatorio",
                    })}  
                />
        
                {errors.color && (
                    <ErrroMessage>{errors.color.message}</ErrroMessage>
                )}
            </div>

            <div className="flex flex-col px-3">
                <label htmlFor="" className="text-lg font-bold">Peso Mascota:</label>
                <input 
                    type="number"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Peso Mascota"
                    {...register("peso", {
                    required: "El peso de la mascota es obligatorio",
                    })}  
                />
        
                {errors.peso && (
                    <ErrroMessage>{errors.peso.message}</ErrroMessage>
                )}
            </div>

            <div className="flex flex-col px-3">
                <label htmlFor="" className="text-lg font-bold">Edad Mascota:</label>
                <input 
                    type="number"
                    className="w-full py-2 bg-gray-100"
                    placeholder="Edad Mascota"
                    {...register("edad", {
                    required: "La edad de la mascota es obligatorio",
                    minLength : {
                        value : 0,
                        message : "La edad debe de ser mayor a o igual a 0"
                    },
                    maxLength : {
                        value : 100,
                        message : "La edad debe de ser menor a 100"
                    }   
                    })}  
                />
        
                {errors.edad && (
                    <ErrroMessage>{errors.edad.message}</ErrroMessage>
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
