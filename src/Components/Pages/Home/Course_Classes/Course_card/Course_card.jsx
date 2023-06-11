import React, { useState } from 'react';
import useUserCollectiondata from '../../../../../Hooks/useUserCollectiondata';
import axios from 'axios';
import useManageClassDataAll from '../../../../../Hooks/useManageClassdataAll';
import {  addToDb, getShoppingCart } from '../../../../../../LocalStorage_function2';

const Course_card = ({indexdata}) => {
  // const [classes]=useClass();
  const[AddClassUsersAll,refetch]=useManageClassDataAll();
    const{UserDataAsEmail}=useUserCollectiondata();
    console.log(UserDataAsEmail);
    const [accept,setAccept]=useState(false);
    // const [accept2,setAccept2]=useState(false);

    // function handlecheck(){
       
    //     setAccept(true);
      
    //      {accept?"":alert('Added Successfully')}
        
       
    // }
    // let seats=indexdata.Available_seats;
  const collectdata=()=>{
//    addToDb(UserDataAsEmail.email);
//  let localdata=getShoppingCart();
// //  console.log(localdata[UserDataAsEmail.email])

// if(indexdata._id in  localdata){
//   console.log(localdata);
  axios.get(`http://localhost:6889/getApprovedClass/${indexdata._id}`)
  .then(res=>{console.log(res.data)
  // let seats=res.data.Available_seats
  // seats--
  // if(seats==0){
  // // seats++
  //   setAccept(true);
   
  // }
    const alldata={
      class:res.data.Class_name,
      image:res.data.Class_image,
      Available_seats:res.data.Available_seats,
      price:res.data.Price,
      instructor_email:UserDataAsEmail.email,
      instructor_name:UserDataAsEmail.name,
      class_id:res.data._id,
      instructor_id:UserDataAsEmail._id,
    
    }
  
    axios.post('http://localhost:6889/CartCollection', {...alldata})
    .then(res =>{
         console.log(res);
    if(res.data.insertedId){
        alert("You have added Successfully");
    }
         
        
    })
  
  
  //   fetch(`http://localhost:6889/UpdateAddClassdataseat/${res.data._id}`,{
  //     method:"PATCH",
  //     headers:{
  //         "content-type":"application/json"
  //     },
  //     body:JSON.stringify({Available_seats:seats})
  // }).then(res=>res.json()).then(data=>{console.log(data);
  // if(data.modifiedCount>0){
  //   // refetch();
  //     alert("updated Successfully");
  // }
  
  // })
  
  
  })
// }












//     seats--
// if(seats==0){
// // seats++
//   setAccept(true);
 
// }
// const alldata={
//   class:indexdata.Class_name,
//   image:indexdata.Class_image,
//   Available_seats:seats,
//   price:indexdata.Price,
//   instructor_email:UserDataAsEmail.email,
//   instructor_name:UserDataAsEmail.name,
//   class_id:indexdata._id,
//   instructor_id:UserDataAsEmail._id,

// }
// console.log(alldata);
// alert("Added Successfully");


// axios.post('http://localhost:6889/CartCollection', {...alldata})
// .then(res =>{
//      console.log(res);
// if(res.data.insertedId){
//     alert("You have added Successfully");
// }
     
    
// })



// update Available_seats
// fetch(`http://localhost:6889/UpdateAddClassdataseat/${indexdata._id}`,{
//     method:"PATCH",
//     headers:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify({Available_seats:seats})
// }).then(res=>res.json()).then(data=>{console.log(data);
// if(data.modifiedCount>0){
//   // refetch();
//     alert("updated Successfully");
// }

// })





  }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={indexdata.
Class_image} alt="Shoes"style={{height:"250px",width:"100%"}} className='object-cover'/></figure>
        <div className="card-body">
        
        {/* <div style={{color:"#4d4d4d"}}className='text-2xl font-bold'>{indexdata.course_name}</div> */}
           <div style={{color:"#4d4d4d"}}className='text-xl'>{indexdata.
Class_name}</div>
        
          <p>Do you want to train with us, Please join with us and Let s have some fun and interest</p>
          
       
        <div><span className='font-bold me-2'style={{color:"#4d4d4d"}}>Available Seats :</span>{indexdata.
Available_seats}</div>
        <div><span className='font-bold me-2'style={{color:"#4d4d4d"}}>Price :</span>${indexdata.
Price}</div>
        </div>
        <div className='text-center'>

{/* {
{{indexdata.Available_seats}>0}&&{UserDataAsEmail.role2=="Student"}? <button className="btn btn-wide ">Enroll Now</button>:<button className="btn btn-wide) "disabled>Enroll Now</button>} */}

{
 ((indexdata.Available_seats>0) && (UserDataAsEmail.role2=="Student")) ?

            <button className='btn btn-wide'onClick={collectdata}>Enroll Now</button>
  
:<button className="btn btn-wide"disabled>Enroll Now</button>
}
        

        </div>
      </div>
    );
};

export default Course_card;