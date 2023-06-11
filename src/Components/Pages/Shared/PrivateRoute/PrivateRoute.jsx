import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Private_route = ({children}) => {
    const {data,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    console.log(loading);
  
    if(data){
        return children
    }
    if(loading){
        return <div>Loading.....</div>
    }
    return <Navigate to="/login"state={{from:location}}></Navigate>
};

export default Private_route;