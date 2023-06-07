import React, { useContext } from 'react';
import pik from '../../../../assets/sports.svg'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Resister = () => {
    const { register,reset, handleSubmit,formState: { errors } } = useForm();

const{signup,data,displayname}=useContext(AuthContext)
    const onSubmit = data => {console.log(data);
        console.log(data.email);
        console.log(data.password);
        console.log(data.name);
        console.log(data.photo);
        console.log(data.confrim_password);
        const alldata={
            email:data.email,
            password:data.password,
            name:data.name,
            photo:data.photo,
            role:"user"
        }
        signup(data.email,data.password)
        .then((userCredential) => {
          
            const user = userCredential.user;
            console.log(user);
            displayname(data.name,data.photo)
            .then(() => {
              // Profile updated!
              const userdata={name:data.name,email:data.email}
            //   fetch('http://localhost:6769/users',{
            //     method:"POST",
            //     headers:{
            //       "content-type":"application/json"
            //     },
            //     body:JSON.stringify(userdata)
            //   }).then(res.json()).then(data=>{console.log(data);})
              reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You registration has been Successfull',
            showConfirmButton: false,
            timer: 1500
          })
              
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
         
        //   navigate('/');
            // signout();
            
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
          });
         
    
    };
    return (
        <div className='my-24'>
            
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