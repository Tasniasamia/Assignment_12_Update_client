import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useInstructor = () => {
    const { refetch, data:Instructor=[] } = useQuery({
        queryKey: ['Instructor'],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/instructors` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [Instructor,refetch];
};

export default useInstructor;