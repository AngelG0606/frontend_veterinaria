import { useQuery } from "@tanstack/react-query";
import { user } from "../services/authApi";

export const useAuth = () => {
 
    const { data, isLoading, isError} = useQuery({
        queryKey : ['user'],
        queryFn : user,
        retry : false, 
        refetchOnWindowFocus : false
    })    

    return { data, isLoading, isError }
}