import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
  const{data,signout}=useContext(AuthContext);
    const navitem=(
        <>
  <NavLink to="/">Home</NavLink>
       
 <NavLink to="/Instructor">Instructor</NavLink>
 <NavLink to="/Course_class">Classes</NavLink>
 <NavLink to="/Dashboard">Dashboard</NavLink>

{/* <Link to="/login">Login</Link> */}
        </>
    )
    return (
        <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}

              <i className="fa-solid fa-bars text-white"></i>

            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 navitems p-2">
            {navitem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-4xl "><span style={{color:"white"}}>WH<span style={{color:"skyblue"}}>i</span>STLE</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 navitems">
          {navitem}

          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Logout</a> */}


          <div className='flex justify-center items-center '>
            <div>
            {
               data && <img src={data?.photoURL?data?.photoURL:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R81005743&ga=GA1.2.1636033582.1682966548&semt=ais"} alt="profile_imag"className='rounded-full me-2'style={{height:"40px",width:"40px"}}data-toggle="tooltip" data-placement="top" title={data.displayName}/>
            }</div>
            <div>
         
          {
            data ?<button className='btn btn-active'onClick={signout}> Logout</button>: <button className='btn btn-active'><Link to="/login"> Login</Link></button>
          }
        </div></div>
        </div>
      </div>
    );
};

export default Header;


// data.photoURL