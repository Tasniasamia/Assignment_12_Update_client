import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardLayout.css';
import useInstructorOreder from '../../../Hooks/useInstructorOreder';
import useAdmin from '../../../Hooks/useAdmin';
import useStudent from '../../../Hooks/useStudent';
const Dashboard_Layout = () => {
    const user=false;
    const instructor=true;
    const admin=false;
    const data=useInstructorOreder();
    const admindata=useAdmin();
    const studentdata=useStudent();
    console.log(studentdata);
    console.log(admindata);

    console.log(data?.Instructor);
    return (
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
            {/* Sidebar content here */}
            {
  studentdata?.Student &&<>
            
            <li><NavLink to="/Dashboard/myClasses">My Classes</NavLink></li>
            <li><NavLink to="/Dashboard/Enrolled Classes">Enrolled Classes</NavLink></li>
            <li><NavLink to="/Dashboard/Payment">Payment</NavLink></li>
            </>}

            
            
            
            
          
            {data?.Instructor  &&    <>    <li><NavLink to="/Dashboard/addclass">Add Class</NavLink></li>
            <li><NavLink to="/Dashboard/MyclassInst">My Class</NavLink></li></>}
            {/* <li><NavLink to="/Dashboard/top-enrolled">Top Enrolled Student</NavLink></li>
            <li><NavLink to="/Dashboard/feedback" >Feedback</NavLink></li></>  */}
            
           {
            admindata?.Admin &&   <>    <li><NavLink to="/Dashboard/manageclasses">Manage Classes</NavLink></li>
            <li><NavLink to="/Dashboard/manage_user">Manage Users</NavLink></li>
            </>
           }
         
          
          
         
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard_Layout;
        
   

        
