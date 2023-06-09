import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Pages/Shared/AuthProvider/AuthProvider";


const useInstructor = () => {
  const {data}=useContext(AuthContext);
    const { refetch, data:Instructor=[] } = useQuery({
        queryKey: ['Instructor',data?.email],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/instructors` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [Instructor,refetch];
};

export default useInstructor;