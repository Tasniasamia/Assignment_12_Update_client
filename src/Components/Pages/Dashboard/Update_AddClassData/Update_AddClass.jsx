import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const Update_AddClass = () => {
    // const{data}=useContext(AuthContext);
    const loaddata=useLoaderData();
    const SubmitData=(event)=>{
        event.preventDefault();
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
    Price:Price
   
  
}


console.log(data);



fetch(`http://localhost:6889/Update_AddClassItem/${loaddata._id}`,{
    method:"PATCH",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(data)
}).then(res=>res.json()).then(data=>{console.log(data);
if(data.modifiedCount>0){
   
    alert("updated Successfully");
}

})


event.target.class_name.value=" ";
event.target.Class_image.value=" ";

event.target.Available_seats.value=" ";
event.target.price.value=" ";

    }
    return (
        <div className='w-full p-5'>
        <div>
           <h1 className='text-5xl font-bold my-5 text-center'>Update Course Class</h1>
        </div>
        <form className='w-full'onSubmit={SubmitData}>

<div className='flex my-3'>
<div className="form-control w-full ms-3">
<label className="label">
<span className="label-text">Class Name*</span>
</label>
<input type="text" placeholder="Class Name"name="class_name"defaultValue={loaddata.Class_name} className="input input-bordered w-full" />

</div>
<div className="form-control w-full ms-3">
<label className="label">
<span className="label-text">Class Image*</span>
</label>
<input type="text" placeholder="Photo"name="Class_image"defaultValue={loaddata.Class_image} className="input input-bordered w-full" />

</div>
</div>
<div className='flex my-3'>
<div className="form-control w-full ms-3">
<label className="label">
<span className="label-text">Instructor Name*</span>
</label>
<input type="text" placeholder="Instructor Name"name="Instructor_Name"defaultValue={loaddata.Instructor_Name} className="input input-bordered w-full" />

</div>
<div className="form-control w-full ms-3">
<label className="label">
<span className="label-text">Instructor Email*</span>
</label>
<input type="text" placeholder="Instructor_Email"name="Useremail"defaultValue={loaddata.Instructor_Email} className="input input-bordered w-full" />

</div>
</div><div className='flex my-3'>
<div className="form-control w-full ms-3">
<label className="label">
<span className="label-text">Available Seats*</span>
</label>
<input type="text" placeholder="Available Seats"name="Available_seats"defaultValue={loaddata.Available_seats
} className="input input-bordered w-full" />

</div>
<div className="form-control w-full ms-3">
<label className="label">
<span className="label-text">Price*</span>
</label>
<input type="text" placeholder="Price"name="price"defaultValue={loaddata.Price
} className="input input-bordered w-full" />

</div>
</div>




<div className='text-center'>

<button className="btn btn-wide my-5 border-0">Update Class </button></div>
        </form>

    </div>
    );
};

export default Update_AddClass;