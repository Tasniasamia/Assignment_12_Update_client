import React from 'react';
import UseUsers from '../../../../Hooks/UseUsers';
import axios from 'axios';

const Manage_Users = () => {
    const [Users,refetch]=UseUsers();
    //update data
    const update_Instructor=(id)=>{

    fetch(`http://localhost:6889/updateinstructor/${id}`,{
        method:"PATCH"
    }).then(res=>res.json()).then(data=>{console.log(data);
    if(data.modifiedCount>0){
        refetch();
        alert("updated Successfully");
    }
    
    })



    }
    const update_Instructor2=(id)=>{

        fetch(`http://localhost:6889/updateinstructor2/${id}`,{
            method:"PATCH"
        }).then(res=>res.json()).then(data=>{console.log(data);
        if(data.modifiedCount>0){
            refetch();
            alert("updated Successfully");
        }
        
        })
    
    
    
        }
    return (
        <div className='w-full '>
           
        <div className=" w-full overflow-y-scroll  h-[600px]">
<table className="table w-full  ">
{/* head */}
<thead className='relative' >
  <tr className='w-full top-0  bg-base-300 z-10 sticky'>
 
    <th>#</th>

    <th>Name</th>
    <th> Email</th>
    <th>Make Instructor</th>
    <th>Make Admin</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
    Users.map((item,index)=> <tr key={item._id}>

        <td>
          {index+1}
        </td>
        {/* <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.
photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td> */}
        <td>
{item.name}              
        </td>
        <td>{item.email}</td>
        <td onClick={()=>update_Instructor(item._id
)}>{item.role2}</td>
        <td  onClick={()=>update_Instructor2(item._id)}>
        {item.role}
        </td>
        <th>
            <button className='btn btn-dark'onClick={()=>deleteitem()}>Delete</button>
        </th>
      </tr>)
  }

 
</tbody>



</table>
</div>
    </div>

    );
};

export default Manage_Users;