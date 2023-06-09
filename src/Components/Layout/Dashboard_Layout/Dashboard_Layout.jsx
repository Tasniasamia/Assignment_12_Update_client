import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardLayout.css';
import useInstructorOreder from '../../../Hooks/useInstructorOreder';
import useAdmin from '../../../Hooks/useAdmin';
import useStudent from '../../../Hooks/useStudent';
import { AuthContext } from '../../Pages/Shared/AuthProvider/AuthProvider';
const Dashboard_Layout = () => {
    const {data}=useContext(AuthContext)
    const user=false;
    const instructor=true;
    const admin=false;
    const dataInstructor=useInstructorOreder();
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
  data && studentdata?.Student &&
  <>
            
            <li><NavLink to="/Dashboard/myClasses">My Classes</NavLink></li>
            <li><NavLink to="/Dashboard/Enrolled Classes">Enrolled Classes</NavLink></li>
            <li><NavLink to="/Dashboard/Payment">Payment</NavLink></li>
            </>}

            
            
            
            
          
            {data && dataInstructor?.Instructor  &&    <>    <li><NavLink to="/Dashboard/addclass">Add Class</NavLink></li>
            <li><NavLink to="/Dashboard/instructor_my_class">My Class</NavLink></li></>}
            {/* <li><NavLink to="/Dashboard/top-enrolled">Top Enrolled Student</NavLink></li>
            <li><NavLink to="/Dashboard/feedback" >Feedback</NavLink></li></>  */}
            
      {
         data && admindata?.Admin &&   <>    <li><NavLink to="/Dashboard/manage_class">Manage Classes</NavLink></li>
            <li><NavLink to="/Dashboard/manage_user">Manage Users</NavLink></li>
            </>
           }  
         
          
          
         
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard_Layout;
        
   

        
