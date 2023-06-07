import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useClass = () => {
    const { refetch, data:classes=[] } = useQuery({
        queryKey: ['ClassesCollection'],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/classes_name` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [classes,refetch];
};

export default useClass;