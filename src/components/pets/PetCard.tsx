import type { Pet } from "../../types"


type PetCardProps = {
    pet : Pet
}

export default function PetCard({pet} : PetCardProps) {
  return (
    <div className="p-6 w-96 bg-white shadow-lg ring-2 ring-indigo-200 px-5 space-y-5">
        <div className="flex justify-center gap-24 items-center">
            <p className="text-lg font-semibold">Nombre Mascota: </p>
            <p className="text-gray-400 font-bold">{pet.name}</p>
        </div>
        <div className="flex justify-center gap-24 items-center">
            <p className="text-lg font-semibold">Especie Mascota: </p>
            <p className="text-gray-400 font-bold">{pet.especie}</p>
        </div>

        <div className="flex justify-center gap-24 items-center">
            <p className="text-lg font-semibold">Raza Mascota: </p>
            <p className="text-gray-400 font-bold">{pet.especie}</p>
        </div>

        <div className="flex justify-center gap-24 items-center">
            <p className="text-lg font-semibold">Color Mascota: </p>
            <p className="text-gray-400 font-bold">{pet.color}</p>
        </div>

        <div className="flex justify-center gap-24 items-center">
            <p className="text-lg font-semibold">Peso Mascota: </p>
            <p className="text-gray-400 font-bold">{pet.peso} KG</p>
        </div>

        <div className="flex justify-center gap-24 items-center">
            <p className="text-lg font-semibold">Edad Mascota: </p>
            <p className="text-gray-400 font-bold">{pet.edad} Años</p>
        </div>

        <div className="flex justify-center gap-10 items-center">
            <button className="bg-amber-400 w-full py-2 text-white uppercase text-center rounded cursor-pointer hover:bg-amber-500">Editar</button>
            <button className="bg-red-400 w-full py-2 text-white uppercase text-center rounded cursor-pointer hover:bg-red-500">Eliminar</button>
        </div>
    </div>

    

  )
}
