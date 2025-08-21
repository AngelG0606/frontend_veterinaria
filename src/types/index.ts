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

export type User = z.infer<typeof AuthSchema>
export type UserRegisterForm = Pick<User, 'name' | 'lastname' | 'email'| 'password' | 'password_confirmation' | 'telefono'>
export type UserLoginForm = Pick<User, 'email' | 'password'>
export type UserData = Pick<User , 'id' | 'name' | 'email' | 'rol'> 