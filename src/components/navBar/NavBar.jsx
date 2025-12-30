import React, { use, useContext } from "react";
import { Link, NavLink } from "react-router-dom"; 
import { AuthContextAPI } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, handelLogOut } = useContext(AuthContextAPI);

  const handelSingOut = () => {
    handelLogOut()
      .then(() => {
        
      })
      .catch((error) => {
        
      });
  };

 
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
      
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold p-0">
          daisyUI
        </Link>
      </div>

      
      <div className="flex-none flex items-center gap-2">
        
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {navLinks}
          </ul>
        </div>

       
        {user ? (
          <div className="flex items-center gap-2">
            
            <button
              onClick={handelSingOut}
              className="btn btn-outline btn-sm hidden lg:inline-flex"
            >
              Logout
            </button>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                <img src={user.photoURL} alt="User Profile" />
              </div>
            </div>
          </div>
        ) : (
          
          <div className="flex items-center gap-1 sm:gap-2">
            <Link to="/login" className="btn btn-primary btn-xs sm:btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-outline btn-xs sm:btn-sm">
              Register
            </Link>
          </div>
        )}

        
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            {user && (
              <>
                <div className="divider my-1 lg:hidden"></div>
                <li className="lg:hidden text-red-500 font-semibold">
                  
                  <button onClick={handelSingOut}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
