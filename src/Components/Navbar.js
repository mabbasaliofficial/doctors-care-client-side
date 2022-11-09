import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from '../Assets/Profile/profile.png'

const Navbar = () => {
  const [user, setUser] = useState([]);
  return (
    <div>
      <div className="navbar bg-slate-50 	">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-3xl">Prescription</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
               { user?.photoURL ? <img src={user?.photoURL} alt="" /> : <img src={profile} alt=""/>}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/login'>Profile</Link>
              </li>
             {user?.email ?  <span>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>Log Out</Link>
              </li> 
             </span>
             :
             <span>
              <li>
                <Link to="/login" className="">
                  Log In
                </Link>
              </li>
             <li>
                <Link to='/signup'>Sign Up</Link>
              </li>
             </span>
             }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
