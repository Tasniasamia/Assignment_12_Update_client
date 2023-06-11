import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const{data,loading}=useContext(AuthContext);
    // const token=localStorage.getItem('accesstoken');
    // const [axiosSecure]=useAxiosSecure();
const[admin,setAdmin]=useState(null);
    // const { data:admin=[], isLoading: isadminLoading} = useQuery({
    //     queryKey: ['Adminwise',data?.email],
    //     enabled:!loading,

    //     queryFn:async () => {
    //         const response =await axios.get(`/Adminwise/${data?.email}`)
            
    //       console.log(response.data);
          
    //         return response.data;
    //       },

        
    //     })
   
        
    //     return [admin,isadminLoading];


    useEffect(()=>{

    if(data?.email){
    fetch(`https://assignment-12-server-tasniasamia.vercel.app/Adminwise/${data?.email}`)
       .then(res=>res.json())
      .then(data=>{console.log(data);setAdmin(data)})
      }
    
  },[data])


  return admin;
};

export default useAdmin;