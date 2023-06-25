import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Pages/Shared/AuthProvider/AuthProvider";


const useClass = () => {
  const{data}=useContext(AuthContext)
    const { refetch, data:classes=[] } = useQuery({
        queryKey: ['ClassesCollection',data?.email],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/getApprovedClass` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [classes,refetch];
};

export default useClass;