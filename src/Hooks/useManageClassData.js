import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';

const useManageClassData = () => {
    const{data}=useContext(AuthContext)
    const { refetch, data:AddClassUsers=[] } = useQuery({
        queryKey: ['getAddClassData',data?.email],
    
      queryFn:async () => {
            const response = await axios.get(`https://assignment-12-server-tasniasamia.vercel.app/getAddClassData?email=${data?.email}` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [AddClassUsers,refetch];
};

export default useManageClassData;