import { isAxiosError } from "axios";
import api from "../lib/axios";
import { petsResponseSchema, type PetForm } from "../types";


export async function createPet(formData : PetForm) {
    try {
        const url = '/vet/pets'
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error)  && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllPets() {
    try {
        const url = '/vet/pets'
        const { data } = await api(url)
        const response = petsResponseSchema.safeParse(data)
        if(response.success) {
            return response.data
        }
    } catch (error) {
        
    }
}