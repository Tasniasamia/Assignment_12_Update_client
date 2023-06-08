import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const GoogleSign = () => {
    const{googlesign}=useContext(AuthContext)
    // let navigate = useNavigate();
    // let location = useLocation();
    // let from=location.state?.from?.pathname || "/";

    const google=()=>{
       
        googlesign() .then((result) => {
            const user = result.user;
            console.log(user);
            // navigate(from, { replace: true });
            const userdata={email:user.email
                ,name:user.displayName
            }
            
 const alldata={
    email:user.email,
    password:user.password,
    name:user.displayName,
    photo:user.photoURL
    ,
    role:"User",
    role2:"Student"
 }
         
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
             
         
            
            
            // })



          
          }).catch((error) => {
           
            const errorMessage = error.message;
          
         
       
          }); }
    return (
        <div>
            <div className="divider"></div>  
            <div className='flex justify-center'>
            <div className='btn btn-wide mx-auto py-5'onClick={google}>
<FcGoogle/> Continue With Google
            </div></div>
        </div>
    );
};

export default GoogleSign;