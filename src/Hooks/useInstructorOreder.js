import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useInstructorOreder = () => {
    const{data,loading}=useContext(AuthContext);
    // const token=localStorage.getItem('accesstoken');
    // const [axiosSecure]=useAxiosSecure();
const[Instructor,setInstructor]=useState(null);
    // const { data:Instructor=[], isLoading: isInstructorLoading} = useQuery({
    //     queryKey: ['isInstructor',data?.email],
    //     enabled:!loading,

    //     queryFn:async () => {
    //         const response =await axiosSecure.get(`/Instructorwise/${data?.email}`)
            
    //       console.log(response.data);
          
    //         return response.data;
    //       },

        
    //     })
   
        
    //     return [Instructor,isInstructorLoading];


    useEffect(()=>{

    if(data?.email){
    fetch(`https://assignment-12-server-tasniasamia.vercel.app/Instructorwise/${data?.email}`)
       .then(res=>res.json())
      .then(data=>{console.log(data);setInstructor(data)})
      }
    
  },[data])


  return Instructor;
};

export default useInstructorOreder;