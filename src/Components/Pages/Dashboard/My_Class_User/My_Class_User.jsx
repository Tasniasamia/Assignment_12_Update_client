import React from 'react';
import useCartCollection from '../../../../Hooks/useCartCollection';

const My_Class_User = () => {
    const[cart,refetch]=useCartCollection();
    console.log(cart);
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
    <th>Available_seats</th>
    <th>price</th>
   
    <th>PAY</th>
    <th>Remove</th>
  
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  {
   cart.map((item,index)=> <tr key={item._id}>

        <td>
          {index+1}
        </td>
       
        <td>
{item.class
}              
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
        <td>{item.Available_seats}</td>
        <td>${item.price}</td>
       <td><button className='btn btn-active'>PAY</button></td>
       <td><button className='btn btn-active'>Delete</button></td>
      </tr>)
  }

 
</tbody>



</table>
</div>
    </div>
    );
};

export default My_Class_User;