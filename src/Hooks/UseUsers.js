import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const UseUsers = () => {
    const { refetch, data:Users=[] } = useQuery({
        queryKey: ['signup_users'],
    
      queryFn:async () => {
            const response = await axios.get(`https://assignment-12-server-tasniasamia.vercel.app/signup_users` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [Users,refetch];
};

export default UseUsers;