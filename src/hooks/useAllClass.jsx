import { useContext } from "react"

import useAxiosProtected from "./useAxiosProtected"
// import { AuthContext } from "../Provider/AuthProvider"

import { useQuery } from "@tanstack/react-query"

const useAllClass = () =>{
    // const {user} = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()

    const { data : adminclass } = useQuery({
        queryKey: ['adminclasses'],
        queryFn: async () =>{
            const res = await axiosProtect.get('/users/admin')
            return res;
        },
        
      })
     
      return {adminclass}
}
export default useAllClass