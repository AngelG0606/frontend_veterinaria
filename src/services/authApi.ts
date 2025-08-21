import { isAxiosError } from "axios";
import api from "../lib/axios";
import type { UserLoginForm, UserRegisterForm } from "../types";

export async function createAccount(formData: UserRegisterForm) {
    try {
        const url = '/auth/create-account'
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }   
}

export async function login(formData : UserLoginForm) {
    try {
        const url = '/auth/login'
        const { data } = await api.post(url, formData)
        console.log(data)
        localStorage.setItem('JWT_TOKEN', data)
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function user() {
    try {
        const url = '/auth/user'
        const { data } = await api(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}