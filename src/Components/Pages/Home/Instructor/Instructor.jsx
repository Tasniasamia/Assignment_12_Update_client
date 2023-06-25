import React, { useEffect, useState } from 'react';
import Instructor_card from './Instructor_card/Instructor_card';
import { Helmet } from 'react-helmet';
import ReactPaginate from 'react-paginate';
import AuthProvider, { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const Instructor = () => {
  const {data}=AuthProvider(AuthContext);
    // const [Instructor]=useInstructor();
    const [instructor,setInstructor]=useState([]);
  
   
    useEffect(()=>{
      const alldata=async()=>{
        const res=await fetch(`http://localhost:6889/instructors?page=1&limit=3`);
        const data=await res.json();
        setInstructor(data);
        return data;
      }
alldata();
    },[])

    const instructordata=async(currentpage)=>{
      const res=await fetch(`http://localhost:6889/instructors?page=${currentpage}&limit=3`);
      const data=await res.json();
      console.log(data);
      // setInstructor(data);
      return data;
    }
const handleClick=async(data)=>{
  console.log(data.selected);
  let currentpage=parseInt(data.selected)+1
  const datas=await instructordata(currentpage);
  console.log(datas);
  setInstructor(datas);
}
    return (
        <div className='my-20'>
             <Helmet>
        <title>Whistle | Instructors</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
        
        instructor.map(index=><Instructor_card key={index._id} indexdata={index}></Instructor_card>)
        }
        </div>  
        <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} breakLabel={"...."} pageCount={4}  onPageChange={handleClick} containerClassName={'join mx-auto'}pageClassName={'join-item btn btn-sm'}previousClassName={'join-item btn btn-sm'} nextClassName={'join-item btn btn-sm'} activeClassName={'active'} breakClassName={'join-item btn btn-sm'}/>
        
        </div>
)};

export default Instructor;