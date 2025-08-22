import { z } from 'zod'

export const AuthSchema = z.object({
    id : z.number(),
    name : z.string(),
    lastname : z.string(),
    email : z.string(),
    password : z.string(),
    password_confirmation : z.string(),
    telefono : z.string(),
    rol : z.string()
})

export const UserDataSchema = z.object({
     id : z.number(),
    name : z.string(),
    email : z.string(),
    rol : z.string()
})

export type User = z.infer<typeof AuthSchema>
export type UserRegisterForm = Pick<User, 'name' | 'lastname' | 'email'| 'password' | 'password_confirmation' | 'telefono'>
export type UserLoginForm = Pick<User, 'email' | 'password'>
export type UserData = Pick<User , 'id' | 'name' | 'email' | 'rol'>


export const petSchema = z.object({
    id : z.number(),
    name : z.string(),
    especie : z.string(),
    raza : z.string(),
    color : z.string(),
    peso : z.string(),
    edad : z.string(),
})

export const petsResponseSchema = z.array(petSchema)

export type Pet = z.infer<typeof petSchema>
export type PetForm = Pick<Pet, 'name' | 'especie' | 'raza' | 'color' | 'peso' | 'edad'>