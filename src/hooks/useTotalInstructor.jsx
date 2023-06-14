
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useTotalInstructor = () =>{
    
    const { data : instructor } = useQuery({
        queryKey: ['totalinstructor'],
        queryFn: async () =>{
            const res = await axios.get('https://summer-camp-server-six-iota.vercel.app/users/totalinstructor?role=instructor')
            return res.data;
        },
        
      })
     
      return {instructor}
}
export default useTotalInstructor