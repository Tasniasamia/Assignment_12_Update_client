import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';
import useManageClassDataAll from '../../../../Hooks/useManageClassdataAll';
import { Helmet } from 'react-helmet';

const Manage_Class = () => {
    const {data}=useContext(AuthContext)
    const[AddClassUsersAll,refetch]=useManageClassDataAll();
    const[inputValue,setInputValue]=useState('');
    console.log(AddClassUsersAll);
    //update Approve
    const update_approved=(id)=>{
        fetch(`http://localhost:6889/Status_Approve/${id}`,{
            method:"PATCH"
        }).then(res=>res.json()).then(data=>{console.log(data);
        if(data.modifiedCount>0){
            refetch();
            alert("update Approve Successfully");
        }
        
        })
    }

//Update Denied

let textarea =inputValue;
const update_denied=(id)=>{
    fetch(`http://localhost:6889/Status_Denied/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({feedback:textarea})
    }).then(res=>res.json()).then(data=>{console.log(data);
    if(data.modifiedCount>0){
        refetch();
        alert("update Denied Successfully");
    }
    
    })
}

    return (
        <div className='w-full '>
            <Helmet>
        <title>Whistle | Manage Class</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className=" w-full overflow-y-scroll overflow-y-scroll   h-[600px]">
<table className="table w-full  ">
{/* head */}
<thead className='relative' >
  <tr className='w-full top-0  bg-base-300 z-10 sticky'>
 
    <th>#</th>

    <th>CLass Name</th>
    <th>Class Image</th>
    <th>Price</th>
    <th>Available Seats</th>
    <th> Class Instructor</th>
    <th>Instructor Email</th>
    <th>Status</th>
    <th>Approve</th>
    <th>Deny</th>
    <th>Feedback</th>
  
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
  AddClassUsersAll.map((item,index)=> <tr key={item._id}>

        <td>
          {index+1}
        </td>
       
        <td>
{item.Class_name
}              
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.Class_image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
      
        <td>${item.Price}</td>
        <td>{item.Available_seats}</td>
        <td>{item.Instructor_Name}</td>
        <td>{item.Instructor_Email}</td>
        <td>{item.status}</td>
        <td onClick={()=>update_approved(item._id)}><button className='btn btn-active'>Approve</button></td>
        <td onClick={()=>update_denied(item._id)}><button className='btn btn-active'>Deny</button></td>
       <td><textarea  onChange={(e) => setInputValue(e.target.value)} cols="6"rows="1"style={{border:"1px solid black",textAlign:'center',padding:"5px"}}></textarea></td>
      </tr>)
  }

 
</tbody>



</table>
</div>
    </div>


    );
   
};

export default Manage_Class;