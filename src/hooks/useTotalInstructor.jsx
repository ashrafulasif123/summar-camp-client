import { useContext } from "react"

import useAxiosProtected from "./useAxiosProtected"
import { AuthContext } from "../Provider/AuthProvider"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useTotalInstructor = () =>{
    const {loading} = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()
    
   
    

    const { data : instructor } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosProtect.get('/users/totalinstructor?role=instructor')
            return res;
        },
        
      })
     
      return {instructor}
}
export default useTotalInstructor