import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import AddPetForm from "./AddPetForm"

type PetAddModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PetAddModal({ isOpen, setIsOpen }: PetAddModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        {/* Fondo oscuro */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        {/* Contenido del modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl mx-auto">
              <Dialog.Title className="text-2xl font-medium text-gray-900 text-center">
                Agregar Mascota
              </Dialog.Title>
              <Dialog.Description className="">
                <AddPetForm  
                    setIsOpen={setIsOpen}
                />

              </Dialog.Description>

              
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
