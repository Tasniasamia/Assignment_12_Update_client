import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardLayout.css';
import useInstructorOreder from '../../../Hooks/useInstructorOreder';
import useAdmin from '../../../Hooks/useAdmin';
import useStudent from '../../../Hooks/useStudent';
import { AuthContext } from '../../Pages/Shared/AuthProvider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { motion, useMotionValue, useTransform } from 'framer-motion';
const Dashboard_Layout = () => {
    const {data}=useContext(AuthContext)
    // const user=false;
    // const instructor=true;
    // const admin=false;
    const dataInstructor=useInstructorOreder();
    const admindata=useAdmin();
    const studentdata=useStudent();
    // console.log(studentdata);
    // console.log(admindata);
    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    // console.log(data?.Instructor);
    return (
        <>
         <Helmet>
        <title>Whistle | Dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        
        
      
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
  
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

          <Fade>   <li><NavLink to="/"><i className="fa-solid fa-house"></i>Home</NavLink></li></Fade>
          {/* <Fade> */}
            {/* Sidebar content here */}
            {
   data && studentdata?.Student &&
  <>
            
            <Fade>  <li><NavLink to="/Dashboard/user_my_class"><i className="fa-solid fa-cart-shopping"></i>My Classes</NavLink></li></Fade>
            <Fade>  <li><NavLink to="/Dashboard/enroll"><i className="fa-solid fa-book"></i>Enrolled Classes</NavLink></li></Fade>
            <Fade> <li><NavLink to="/Dashboard/payment_history"><i className="fa-solid fa-money-bill"></i>Payment History</NavLink></li></Fade>
            {/* <li><NavLink to="/Dashboard/payment">Payment</NavLink></li> */}
            </>}

            
            
            
            
          
            {data &&  dataInstructor?.Instructor  &&    <>    <Fade> <li><NavLink to="/Dashboard/addclass"><i className="fa-solid fa-user-plus"></i>Add Class</NavLink></li></Fade>
            <Fade> <li><NavLink to="/Dashboard/instructor_my_class"><i className="fa-solid fa-chart-column"></i>My Class</NavLink></li></Fade></>}
            {/* <li><NavLink to="/Dashboard/top-enrolled">Top Enrolled Student</NavLink></li>
            <li><NavLink to="/Dashboard/feedback" >Feedback</NavLink></li></>  */}
            
      {
      data &&   admindata?.Admin &&   <>  <Fade>  <li><NavLink to="/Dashboard/manage_class"><i className="fa-solid fa-list-check"></i> Manage Classes</NavLink></li></Fade> 
            <Fade>  <li><NavLink to="/Dashboard/manage_user"> <i className="fa-solid fa-people-roof"></i>Manage Users</NavLink></li></Fade> 
            </>
           }  
         
          
         {/* </Fade> */}
         
          </ul>
          {/* </Fade> */}
        
        </div>
      </div>  </>
    );
};

export default Dashboard_Layout;
        
   

        
