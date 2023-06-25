import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Add_Class = () => {
    const {data}=useContext(AuthContext);
    console.log("Tasnia")
    const SubmitData=(event)=>{
        event.preventDefault();
    let number=0;    
const Class_name=event.target.class_name.value;
const Class_image=event.target.Class_image.value;
const Instructor_Name=event.target.Instructor_Name.value;
const Instructor_Email=event.target.Useremail.value;
const Available_seats=parseInt(event.target.Available_seats.value);
const Price=parseInt(event.target.price.value);
const data={
    Class_name:Class_name,
    Class_image:Class_image,
    Instructor_Name:Instructor_Name,
    Instructor_Email:Instructor_Email,
    Available_seats:Available_seats,
    Price:Price,
    status:"Pending",
    
totalenroll:parseInt(number)
    
  
}


console.log(data);

axios.post('http://localhost:6889/AddClass', {...data})
.then(res =>{
     console.log(res);
if(res.data.insertedId){
    alert("You have added Successfully");
}
     
    
})




event.target.class_name.value=" ";
event.target.Class_image.value=" ";

event.target.Available_seats.value=" ";
event.target.price.value=" ";

    }




    return (
        <div className='w-full p-5'>
           <Helmet>
        <title>Whistle | Add NEW CLASS</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div>
               <h1 className='text-5xl font-bold my-5 text-center'>Add Course Class</h1>
            </div>
            <form className='w-full'onSubmit={SubmitData}>

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
<input type="text" placeholder="Instructor Name"name="Instructor_Name"defaultValue={data?.displayName} className="input input-bordered w-full" />

</div>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Instructor Email*</span>
  </label>
<input type="text" placeholder="Instructor_Email"name="Useremail"defaultValue={data?.email} className="input input-bordered w-full" />

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