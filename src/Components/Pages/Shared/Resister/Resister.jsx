import React from 'react';
import pik from '../../../../assets/sports.svg'
import { useForm } from 'react-hook-form';
const Resister = () => {
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    return (
        <div className='my-24'>
            
            <div>
            <div className=" md:flex  py-40  items-center justify-evenly h-[100vh] ">
          <div className="text-center lg:text-left me-2 md:w-1/3 w-full">
            <img src={pik} className='md:w-full'style={{height:"600px"}} alt="pik" />
            </div>
          <div className="card w-full   shadow-2xl bg-base-100 md:w-1/3">
            <h1 className='text-4xl text-center font-bold py-5'>Resister Now</h1>
            <form className="card-body">
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
                <input type="text" placeholder="Corfrim Password"name="confrim-password" className="input input-bordered" required />
               
              
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
            {/* <GoogleSign/> */}
          </div>
        </div>
            </div>
        </div>
    );
};

export default Resister;