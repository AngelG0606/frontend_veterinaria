import { useState } from "react";
import PetCard from "../../components/pets/PetCard";
import PetAddModal from "../../components/pets/PetAddModal";
import { useQuery } from "@tanstack/react-query";
import { getAllPets } from "../../services/petApi";

export default function PetView() {

    const [isOpen, setIsOpen] = useState(false)

    const { data, isLoading} = useQuery({
        queryKey : ['pets'],
        queryFn : getAllPets
    })

    if(isLoading) return <p className='text-5xl text-center mt-10'>Cargando...</p>
    
    console.log(data)

  if(data) return (
    <>
        <h1 className="text-5xl text-center mt-5 font-bold text-indigo-400">Tus Mascotas Registradas</h1>

        <div className="bg-white shadow-xl border-s-indigo-400 w-full flex justify-between px-5 py-5 mt-10">

            <input 
                type="text"
                className="py-2 w-72 bg-gray-50 border border-gray-100"
                placeholder="Buscar Mascota" 
            />

            <button className="flex justify-center gap-3 items-center px-10 py-2 bg-indigo-400 text-white uppercase font-bold cursor-pointer hover:bg-indigo-500 transition-colors"
                onClick={() => setIsOpen(true)}
            >
                Agregar Mascota
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 space-y-5">
            {data.map(pet => (
                <PetCard 
                    pet={pet}
                />
            ))}
        </div>

        <PetAddModal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    </>
  )
}
