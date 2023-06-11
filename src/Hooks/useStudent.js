import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Components/Pages/Shared/AuthProvider/AuthProvider';

const useStudent = () => {
    const{data,loading}=useContext(AuthContext);
    // const token=localStorage.getItem('accesstoken');
    // const [axiosSecure]=useAxiosSecure();
const[student,setStudent]=useState(null);
    // const { data:isInstructor=[], isLoading: isInstructorLoading} = useQuery({
    //     queryKey: ['isInstructor',data?.email],
    //     enabled:!loading,

    //     queryFn:async () => {
    //         const response =await axios.get(`http://localhost:6889/Instructorwise/${data?.email}`)
            
    //       console.log(response.data);
          
    //         return response.data;
    //       },

        
    //     })
   
        
    //     return [isInstructor,isInstructorLoading];


    useEffect(()=>{

    // if(data?.email){
    fetch(`https://assignment-12-server-tasniasamia.vercel.app/Studentwise/${data?.email}`)
       .then(res=>res.json())
      .then(data=>{console.log(data);setStudent(data)})
    //   }
    
  },[data?.email])


  return student;
};

export default useStudent;