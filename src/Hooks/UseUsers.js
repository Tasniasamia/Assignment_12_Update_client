import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const UseUsers = () => {
    const { refetch, data:Users=[] } = useQuery({
        queryKey: ['signup_users'],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6889/signup_users` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [Users,refetch];
};

export default UseUsers;