import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';

const useManageClassDataAll = () => {
    const{data}=useContext(AuthContext)
    const { refetch, data:AddClassUsersAll=[] } = useQuery({
        queryKey: ['getAddClassDataAll'],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/getAddClassDataAll` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [AddClassUsersAll,refetch];
};

export default useManageClassDataAll;