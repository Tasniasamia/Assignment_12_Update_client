import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import pik from '../../../../assets/login.svg';
import GoogleSign from '../Google_Sign/Google_Sign';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const navigate=useNavigate()
    const {signin } = useContext(AuthContext);
    const[success,setSuccess]=useState(null);
    const[err,setErr]=useState(null);
    const[show,setShow]=useState(false);
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
    
        signin(data.email,data.password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user);
            // navigate(from, { replace: true });
            Swal.fire({
                title: 'Success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

              reset();
            //   console.log(user);
            setSuccess("User has submited successfully");
            setErr('');
          navigate('/')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setSuccess(" ");
            setErr(errorMessage);
          });
    
    }


    return (
        <div className='my-24'>
            
           
            <div className=" md:flex  py-40  items-center justify-evenly h-[100vh] ">
          <div className="text-center lg:text-left me-2 md:w-1/3 w-full">
            <img src={pik} className='md:w-full'style={{height:"600px"}} alt="pik" />
            </div>
          <div className="card w-full   shadow-2xl bg-base-100 md:w-1/3">
            <h1 className='text-4xl text-center font-bold py-5'>Login Now</h1>
            <form className="card-body"onSubmit={handleSubmit(onSubmit)}>
           
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
                <input type={show?"text":"password"} placeholder="Password"name="password" className="input input-bordered" {...register("password", { required: true })} />
                {errors.password && <span className='text-red-600'>This field is required</span>}
              
              </div>
              <div className='my-2'>
            <input type="checkbox"onClick={()=>setShow(!show)} /><span className='ms-2'>Show Password</span>
            </div>
              <input type="submit"value="Login" className="btn  btn-wide mx-auto w-full "/>
          
            
            </form>
            {err && <p className='text-red-600 text-center'>{err}</p>}
            {success && <p className='text-green-600 text-center'>{success}</p>}
         <GoogleSign/>
<div className='text-center py-5'>Do you have not a  account? Please <Link to="/resister"className='text-primary'>Resister</Link></div>
          </div>
        </div>
            </div>
     
    );
};

export default Login;