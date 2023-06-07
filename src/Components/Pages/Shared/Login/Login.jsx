import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import pik from '../../../../assets/login.svg';
const Login = () => {
    const[show,setShow]=useState(false);
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    return (
        <div className='my-24'>
            
            <div>
            <div className=" md:flex  py-40  items-center justify-evenly h-[100vh] ">
          <div className="text-center lg:text-left me-2 md:w-1/3 w-full">
            <img src={pik} className='md:w-full'style={{height:"600px"}} alt="pik" />
            </div>
          <div className="card w-full   shadow-2xl bg-base-100 md:w-1/3">
            <h1 className='text-4xl text-center font-bold py-5'>Login Now</h1>
            <form className="card-body">
           
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
              <div className='my-5'>
            <input type="checkbox"onClick={()=>setShow(!show)} /><span className='ms-2'>Show Password</span>
            </div>
              <input type="submit"value="Login" className="btn  btn-wide mx-auto w-full my-5"/>
          
            
            </form>
            {/* <GoogleSign/> */}
          </div>
        </div>
            </div>
        </div>
    );
};

export default Login;