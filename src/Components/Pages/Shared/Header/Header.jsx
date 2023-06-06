import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const navitem=(
        <>
   <Link to="/">Home</Link>
       
   <Link to="/">Instructor</Link>
   <Link to="/">Classes</Link>
   <Link to="/">Dashboard</Link>

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
          <a className="btn">Logout</a>
        </div>
      </div>
    );
};

export default Header;