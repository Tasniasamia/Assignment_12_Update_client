import React, { useContext } from 'react';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useUserCollectiondata = () => {
    const{data}=useContext(AuthContext)
    const { refetch, data:UserDataAsEmail=[] } = useQuery({
        queryKey: ['signup_usersbyemail',data?.email],
    
      queryFn:async () => {
            const response = await axios.get(`https://assignment-12-server-tasniasamia.vercel.app/signup_usersbyemail?email=${data?.email}` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return {UserDataAsEmail,refetch};
};

export default useUserCollectiondata;