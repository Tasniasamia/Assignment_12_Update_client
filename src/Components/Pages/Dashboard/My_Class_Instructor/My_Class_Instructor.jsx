import React from 'react';
import useManageClassData from '../../../../Hooks/useManageClassData';
import { Link } from 'react-router-dom';

const My_Class_Instructor = () => {
    const [AddClassUsers,refetch]=useManageClassData();
    return (
        <div className='w-full '>
           
        <div className=" w-full overflow-y-scroll  h-[600px]">
<table className="table w-full  ">
{/* head */}
<thead className='relative' >
  <tr className='w-full top-0  bg-base-300 z-10 sticky'>
 
    <th>#</th>

    <th>CLass Name</th>
    <th> Class Instructor</th>
    <th>Instructor Email</th>
    <th>Status</th>
   
    <th>Feedback</th>
    <th>Action</th>
  
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
    AddClassUsers.map((item,index)=> <tr key={item._id}>

        <td>
          {index+1}
        </td>
       
        <td>
{item.Class_name
}              
        </td>
        <td>{item.Instructor_Name}</td>
        <td>{item.Instructor_Email}</td>
        <td>{item.status}</td>
       <td>{item.feedback}</td>
       <td><button className='btn btn-active'><Link to={`/Dashboard/updateClass/${item._id}`}>Update</Link>  </button></td>
      </tr>)
  }

 
</tbody>



</table>
</div>
    </div>
    );
};

export default My_Class_Instructor;