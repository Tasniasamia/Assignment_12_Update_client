import React from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardLayout.css';
const Dashboard_Layout = () => {
    const user=true;
    const instructor=false;
    const admin=false;
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <p>Lorem ipsum dolor sit amet.</p>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {
  user &&<>
            
            <li><NavLink to="/Dashboard/myClasses">My Classes</NavLink></li>
            <li><NavLink to="/Dashboard/Enrolled Classes">Enrolled Classes</NavLink></li>
            <li><NavLink to="/Dashboard/Payment">Payment</NavLink></li>
            </>}

            
            
            
            
          
            {instructor &&    <>    <li><NavLink to="/Dashboard/addclass">Add Class</NavLink></li>
            <li><NavLink to="/Dashboard/Myclass">My Class</NavLink></li>
            <li><NavLink to="/Dashboard/top-enrolled">Top Enrolled Student</NavLink></li>
            <li><NavLink to="/Dashboard/feedback" >Feedback</NavLink></li></> }
            
           {
            admin &&   <>    <li><NavLink to="/Dashboard/manageclasses">Manage Classes</NavLink></li>
            <li><NavLink to="/Dashboard/manage_users">Manage Users</NavLink></li>
            </>
           }
         
          
          
         
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard_Layout;
        
   

        
