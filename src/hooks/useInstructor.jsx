// import { useContext } from "react"
// import useAxiosProtected from "./useAxiosProtected"
// import { AuthContext } from "../Provider/AuthProvider"

// const useInstructor = () =>{
//     const {user, loading} = useContext(AuthContext)
//     const [axiosProtect] = useAxiosProtected()
   
    

//     const { refetch, data : isInstructor, isLoading: isInstructorLoading } = useQuery({
//         queryKey: ['user', user?.email],
//         enabled: !loading,
//         queryFn: async () =>{
//             const res = await axiosProtect.get(`/users/instructor/${user?.email}`)
//             return res.data.admin;
//         },
        
//       })
     
//       return [isInstructor, isInstructorLoading, refetch]
// }
// export default useInstructor