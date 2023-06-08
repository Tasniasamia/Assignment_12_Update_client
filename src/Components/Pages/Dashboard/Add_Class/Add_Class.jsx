import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const Add_Class = () => {
    const {data}=useContext(AuthContext);
    return (
        <div className='w-full p-5'>
            <div>
               <h1 className='text-5xl font-bold my-5 text-center'>Add Course Class</h1>
            </div>
            <form className='w-full'>
{/* 
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Recipe Name*</span>
  </label>
<input type="text" placeholder="Recipe Name"name="recipe_name"  className="input input-bordered w-full" />

</div> */}
<div className='flex my-3'>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Class Name*</span>
  </label>
<input type="text" placeholder="Class Name"name="class_name" className="input input-bordered w-full" />

</div>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Class Image*</span>
  </label>
<input type="text" placeholder="Photo"name="Class_image" className="input input-bordered w-full" />

</div>
</div>
<div className='flex my-3'>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Instructor Name*</span>
  </label>
<input type="text" placeholder="Instructor Name"name="Instructor_Name"defaultValue={data.displayName} className="input input-bordered w-full" />

</div>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Instructor Email*</span>
  </label>
<input type="text" placeholder="Instructor_Email"name="Useremail"defaultValue={data.email} className="input input-bordered w-full" />

</div>
</div><div className='flex my-3'>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Available Seats*</span>
  </label>
<input type="text" placeholder="Available Seats"name="Available_seats" className="input input-bordered w-full" />

</div>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Price*</span>
  </label>
<input type="text" placeholder="Price"name="price" className="input input-bordered w-full" />

</div>
</div>




<div className='text-center'>

<button className="btn btn-wide my-5 border-0">Add Class </button></div>
            </form>

        </div>
    );
};

export default Add_Class;