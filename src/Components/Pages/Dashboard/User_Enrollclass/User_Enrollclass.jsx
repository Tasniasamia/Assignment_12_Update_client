import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const User_Enrollclass = () => {
    const[enrolldata,setEnrolldata]=useState([]);
    const{data}=useContext(AuthContext)
    axios.get(`http://localhost:6889/enrollemail?email=${data?.email}`)
    .then(res=>{console.log(res.data);
    setEnrolldata(res.data);
    
    })
    return (
        <div className='w-full '>
           
        <div className=" w-full overflow-y-scroll  h-[600px]">
<table className="table w-full  ">
{/* head */}
<thead className='relative' >
  <tr className='w-full top-0  bg-base-300 z-10 sticky'>
 
    <th>#</th>

    <th>class</th>
    <th> image</th>
  

   
    <th>Payment Status</th>
  
  
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
   enrolldata.map((item,index)=> <tr key={item._id}>

        <td>
          {index+1}
        </td>
       
        <td>
{item.class}              
        </td>
        <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
          
            <td>Paid</td>
       
      </tr>)
  }

 
</tbody>



</table>
</div>
    </div>
    );
};

export default User_Enrollclass;