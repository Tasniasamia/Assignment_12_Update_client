import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
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
            
 
         




          
          }).catch((error) => {
           
            const errorMessage = error.message;
          
         
       
          }); }
    return (
        <div>
            <div className="divider"></div>  
            <div className='flex justify-center items-center text-4xl py-5'onClick={google}>
<FcGoogle/>
            </div>
        </div>
    );
};

export default GoogleSign;