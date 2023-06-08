import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useManageClassData = () => {
    const { refetch, data:AddClassUsers=[] } = useQuery({
        queryKey: ['getAddClassData'],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/getAddClassData` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [AddClassUsers,refetch];
};

export default useManageClassData;