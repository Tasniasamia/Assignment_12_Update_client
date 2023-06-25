import React, { useContext, useState } from 'react';
import pik from '../../../../assets/sports.svg'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import GoogleSign from '../Google_Sign/Google_Sign';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Resister = () => {
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const [err,setError]=useState(null);
const navigate=useNavigate();
const{signup,data,displayname}=useContext(AuthContext)
    const onSubmit = data => {console.log(data);
        console.log(data.email);
      
        console.log(data.name);
        console.log(data.photo);
        // console.log(data.confrim_password);
        if(data.confrim_password!==data.password){
            setError("The Password is not matched")
        }
        const alldata={
            email:data.email,
            password:data.password,
            name:data.name,
            photo:data.photo,
            role:"User",
            role2:"Student"
        }
        signup(data.email,data.password)
        .then((userCredential) => {
          
            const user = userCredential.user;
            console.log(user);
            displayname(data.name,data.photo)
            .then(() => {
              // Profile updated!
            //   const userdata={name:data.name,email:data.email}
              fetch('http://localhost:6889/users',{
                method:"POST",
                headers:{
                  "content-type":"application/json"
                },
                body:JSON.stringify(alldata)
              }).then(res=>res.json())
              .then(data=>{console.log("data",data);
            console.log("Efewfewr");
            if(data.insertedId){
                reset();  
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You registration has been Successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
                 
            }

            })
             
            navigate('/');
            
            
            })
           
       
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
         
       
            // signout();
            
          
         
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
           
        //   });
         
    
    };
    return (
        <div className='my-24'>
             <Helmet>
        <title>Whistle | Resister</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div>
            <div className=" md:flex  py-40  items-center justify-evenly h-[100vh] ">
          <div className="text-center lg:text-left me-2 md:w-1/3 w-full">
            <img src={pik} className='md:w-full'style={{height:"600px"}} alt="pik" />
            </div>
          <div className="card w-full   shadow-2xl bg-base-100 md:w-1/3">
            <h1 className='text-4xl text-center font-bold py-5'>Resister Now</h1>
            <form className="card-body"onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"name="name" className="input input-bordered"{...register("name", { required: true })} />
                {errors.name && <span className='text-red-600'>This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"name="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-600'>This field is required</span>}

              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password"name="password" className="input input-bordered"{...register("password", { required: true, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/i,maxLength: 20,minLength:6 })} />
                {errors.password?.type === 'required' &&<span className='text-red-600'>This field is required</span>}
                {errors.password?.type === 'minLength' && <p role="alert"className='text-red-600'>6 length required</p>}
                {errors.password?.type === 'pattern' && <p role="alert"className='text-red-600'>Password can be at least one upper case,at least one lower case English letter,at least one special characte</p>}
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confrim Password</span>
                </label>
                <input type="text" placeholder="Corfrim Password"name="confrim_password" className="input input-bordered" {...register("confrim_password", { required: true })}  />
               
                {errors.email && <span className='text-red-600'>This field is required</span>}
{err && <p className='text-red-600'>{err}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo"name="photo" className="input input-bordered" {...register("photo", { required: true })} />
                {errors.photo && <span className='text-red-600'>This field is required</span>}

              </div>
              <input type="submit"value="Resister" className="btn  btn-wide mx-auto w-full my-5"/>
            
            </form>
            <GoogleSign/>
<div className='text-center py-5'> Already have  an  account? Please <Link to="/login"className='text-primary'>Login</Link></div>
          </div>
        </div>
            </div>
        </div>
    );
};

export default Resister;