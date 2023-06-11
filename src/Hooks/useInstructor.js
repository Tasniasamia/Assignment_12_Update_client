import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Pages/Shared/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
  const {data}=useContext(AuthContext);
    const { refetch, data:Instructor=[] } = useQuery({
        queryKey: ['Instructor',data?.email],
    
      queryFn:async () => {
            const response = await axios.get(`https://assignment-12-server-tasniasamia.vercel.app/instructors` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [Instructor,refetch];
};

export default useInstructor;