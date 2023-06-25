import React from 'react';
import useCartCollection from '../../../../Hooks/useCartCollection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const My_Class_User = () => {
    const[cart,refetch]=useCartCollection();
    console.log(cart);
    const deletdata=(id)=>{
        fetch(`http://localhost:6889/cartdatadel/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
        if(data.deletedCount >0){
            refetch();
            alert("Deleted Successfully")
        }
        
        })
    }
    return (
        <div className='w-full '>
            <Helmet>
        <title>Whistle | My Selected Class</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
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
       <td><button className='btn btn-active'><Link to={`/Dashboard/payment/${item._id}`}>PAY</Link>  </button></td>
       <td onClick={()=>deletdata(item._id)}><button className='btn btn-active'>Delete</button></td>
      </tr>)
  }

 
</tbody>



</table>
</div>
    </div>
    );
};

export default My_Class_User;