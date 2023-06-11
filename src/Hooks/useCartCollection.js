import React, { useContext } from 'react';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCartCollection = () => {
    const{data}=useContext(AuthContext)
    const { refetch, data:cart=[] } = useQuery({
        queryKey: ['Cartdata',data?.email],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/Cartdata?email=${data?.email}` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [cart,refetch];
};

export default useCartCollection;